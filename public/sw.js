const SHELL='human-atlas-shell-v1';
const MODELS='human-atlas-models-v1';

self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(SHELL);
  const urls=['/','/index.html','/manifest.webmanifest','/favicon.svg','/apple-touch-icon.png','/icons/icon-192.png','/icons/icon-512.png','/fonts/Vazirmatn-Regular.woff2','/fonts/Vazirmatn-Medium.woff2'];
  await Promise.all(urls.map(url=>cache.add(url).catch(()=>{})));
  await self.skipWaiting();
 })());
});

self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keep=new Set([SHELL,MODELS]);
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>!keep.has(key)).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});

self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'||url.pathname==='/'||url.pathname.endsWith('.html')){
  event.respondWith(networkFirst(request,SHELL));
  return;
 }
 if(url.pathname.startsWith('/models/')){
  event.respondWith(cacheFirst(request,MODELS));
  return;
 }
 if(url.pathname.startsWith('/assets/')||url.pathname.startsWith('/fonts/')||url.pathname.startsWith('/icons/')||url.pathname==='/favicon.svg'||url.pathname==='/apple-touch-icon.png'||url.pathname==='/manifest.webmanifest'){
  event.respondWith(cacheFirst(request,SHELL));
 }
});

async function networkFirst(request,cacheName){
 const cache=await caches.open(cacheName);
 try{
  const response=await fetch(request);
  if(response.ok)await cache.put(request,response.clone());
  return response;
 }catch{
  return await cache.match(request)||await cache.match('/index.html')||Response.error();
 }
}

async function cacheFirst(request,cacheName){
 const cache=await caches.open(cacheName);
 const cached=await cache.match(request);
 if(cached)return cached;
 const response=await fetch(request);
 if(response.ok)await cache.put(request,response.clone());
 return response;
}
