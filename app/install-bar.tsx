import {useEffect,useState} from 'react';
import {Button} from '@/components/ui/button';
import {dismissInstall,getDeferredInstall,isIosSafari,isStandalone,listenForInstallPrompt,markStandaloneDocument,promptInstall,subscribeInstall,wasInstallDismissed} from './install';

type Copy={installTitle:string;installAction:string;installLater:string;installIos:string};

export default function InstallBar({copy,hidden}:{copy:Copy;hidden?:boolean}){
 const [,setTick]=useState(0);
 useEffect(()=>{
  markStandaloneDocument();
  const stopPrompt=listenForInstallPrompt();
  const stop=subscribeInstall(()=>setTick(n=>n+1));
  return()=>{stopPrompt();stop();};
 },[]);
 if(hidden||isStandalone()||wasInstallDismissed())return null;
 const native=!!getDeferredInstall();
 const ios=isIosSafari();
 if(!native&&!ios)return null;
 return <div className="install-bar glass" role="region" aria-label={copy.installTitle}>
  <p>{ios?copy.installIos:copy.installTitle}</p>
  <div className="install-actions">
   {native?<Button variant="ghost" onClick={()=>void promptInstall()}>{copy.installAction}</Button>:null}
   <Button variant="ghost" onClick={dismissInstall}>{copy.installLater}</Button>
  </div>
 </div>;
}
