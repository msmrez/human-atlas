export type CaptureFormat='jpeg'|'png'|'webp';
export type CaptureScope='view'|'selection';
export type CaptureRequest={scope:CaptureScope;format:CaptureFormat};

export const EXPORT_FORMATS:Record<CaptureFormat,{mime:string;ext:string;quality?:number}>={
 jpeg:{mime:'image/jpeg',ext:'jpg',quality:.92},
 png:{mime:'image/png',ext:'png'},
 webp:{mime:'image/webp',ext:'webp',quality:.92},
};

export function exportSlug(value:string){
 const cleaned=value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9\u0600-\u06FF]+/g,'-').replace(/^-+|-+$/g,'').toLowerCase();
 return cleaned.slice(0,72)||'anatomy';
}

export function exportFilename(label:string,id:string|undefined,format:CaptureFormat){
 const spec=EXPORT_FORMATS[format];
 const slug=exportSlug(label);
 const ref=id&&/^[A-Za-z0-9]+$/.test(id)?`-${id}`:'';
 return `human-atlas-${slug}${ref}.${spec.ext}`;
}

export function copyCanvas(source:HTMLCanvasElement){
 const out=document.createElement('canvas');
 out.width=source.width;
 out.height=source.height;
 const ctx=out.getContext('2d');
 if(!ctx)throw new Error('export');
 ctx.drawImage(source,0,0);
 return out;
}

export function flattenOnStudio(source:HTMLCanvasElement){
 const out=copyCanvas(source);
 const ctx=out.getContext('2d')!;
 ctx.globalCompositeOperation='destination-over';
 ctx.fillStyle='#f2f3f3';
 ctx.fillRect(0,0,out.width,out.height);
 ctx.globalCompositeOperation='source-over';
 return out;
}

export function decorateExport(source:HTMLCanvasElement,copy:{title:string;meta:string},rtl=false){
 const canvas=flattenOnStudio(source);
 const ctx=canvas.getContext('2d')!;
 const bar=Math.max(56,Math.round(canvas.height*.1));
 const pad=Math.max(18,Math.round(canvas.width*.03));
 const titleSize=Math.max(18,Math.round(bar*.34));
 const metaSize=Math.max(11,Math.round(bar*.2));
 ctx.fillStyle='rgba(255,255,255,0.94)';
 ctx.fillRect(0,canvas.height-bar,canvas.width,bar);
 ctx.fillStyle='#22313d';
 ctx.textAlign=rtl?'right':'left';
 ctx.textBaseline='alphabetic';
 ctx.font=`600 ${titleSize}px Vazirmatn,Inter,system-ui,sans-serif`;
 const x=rtl?canvas.width-pad:pad;
 ctx.fillText(copy.title,x,canvas.height-bar*.52,canvas.width-pad*2);
 ctx.fillStyle='#6a7783';
 ctx.font=`400 ${metaSize}px Vazirmatn,Inter,system-ui,sans-serif`;
 ctx.fillText(copy.meta,x,canvas.height-bar*.22,canvas.width-pad*2);
 return canvas;
}

export function canvasToBlob(canvas:HTMLCanvasElement,format:CaptureFormat){
 const spec=EXPORT_FORMATS[format];
 return new Promise<Blob>((resolve,reject)=>{
  canvas.toBlob(blob=>{
   if(blob&&blob.size>0)resolve(blob);
   else if(format==='webp')canvasToBlob(canvas,'jpeg').then(resolve,reject);
   else reject(new Error('export'));
  },spec.mime,spec.quality);
 });
}

export function downloadBlob(blob:Blob,filename:string){
 const url=URL.createObjectURL(blob);
 const a=document.createElement('a');
 a.href=url;
 a.download=filename;
 a.rel='noopener';
 document.body.appendChild(a);
 a.click();
 a.remove();
 window.setTimeout(()=>URL.revokeObjectURL(url),2_000);
}
