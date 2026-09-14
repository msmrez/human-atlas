const DISMISS_KEY='human-atlas-install-dismissed';

type InstallPromptEvent=Event&{prompt:()=>Promise<void>;userChoice:Promise<{outcome:'accepted'|'dismissed'}>};

let deferred:InstallPromptEvent|null=null;
const listeners=new Set<()=>void>();

function notify(){for(const listener of listeners)listener();}

export function isStandalone(){
 if(typeof window==='undefined')return false;
 return window.matchMedia('(display-mode: standalone)').matches||window.matchMedia('(display-mode: minimal-ui)').matches||('standalone' in navigator&&(navigator as Navigator&{standalone?:boolean}).standalone===true);
}

export function isIosSafari(){
 if(typeof navigator==='undefined')return false;
 const ua=navigator.userAgent;
 const ios=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 return ios&&/WebKit/.test(ua)&&!/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
}

export function markStandaloneDocument(){
 if(typeof document==='undefined')return;
 document.documentElement.classList.toggle('standalone',isStandalone());
}

export function wasInstallDismissed(){
 return typeof localStorage!=='undefined'&&localStorage.getItem(DISMISS_KEY)==='1';
}

export function dismissInstall(){
 localStorage.setItem(DISMISS_KEY,'1');
 notify();
}

export function getDeferredInstall(){return deferred;}

export function subscribeInstall(listener:()=>void){
 listeners.add(listener);
 return()=>{listeners.delete(listener);};
}

export function listenForInstallPrompt(){
 if(typeof window==='undefined')return()=>{};
 const onPrompt=(event:Event)=>{
  event.preventDefault();
  deferred=event as InstallPromptEvent;
  notify();
 };
 const onInstalled=()=>{deferred=null;dismissInstall();};
 window.addEventListener('beforeinstallprompt',onPrompt);
 window.addEventListener('appinstalled',onInstalled);
 return()=>{
  window.removeEventListener('beforeinstallprompt',onPrompt);
  window.removeEventListener('appinstalled',onInstalled);
 };
}

export async function promptInstall(){
 if(!deferred)return false;
 await deferred.prompt();
 const choice=await deferred.userChoice;
 deferred=null;
 notify();
 return choice.outcome==='accepted';
}

export function registerServiceWorker(){
 if(typeof window==='undefined'||!('serviceWorker' in navigator))return;
 if(location.hostname==='localhost'||location.hostname==='127.0.0.1')return;
 window.addEventListener('load',()=>{void navigator.serviceWorker.register('/sw.js',{scope:'/'});});
}
