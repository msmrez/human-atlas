import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from 'react';

export type Locale = 'en'|'fa';
const STORAGE_KEY = 'human-atlas-locale';

export function localeMeta(locale:Locale){
 return locale==='fa'?{dir:'rtl' as const,htmlLang:'fa',bcp47:'fa-IR'}:{dir:'ltr' as const,htmlLang:'en',bcp47:'en'};
}

function readStored():Locale{
 if(typeof window==='undefined')return 'en';
 const stored=window.localStorage.getItem(STORAGE_KEY);
 if(stored==='fa'||stored==='en')return stored;
 return navigator.language.toLowerCase().startsWith('fa')?'fa':'en';
}

function applyDocument(locale:Locale){
 if(typeof document==='undefined')return;
 const {dir,htmlLang}=localeMeta(locale);
 document.documentElement.lang=htmlLang;
 document.documentElement.dir=dir;
}

const LocaleContext=createContext<{locale:Locale;setLocale:(locale:Locale)=>void}|null>(null);

export function LocaleProvider({children}:{children:ReactNode}){
 const [locale,setLocaleState]=useState<Locale>(()=>{const next=readStored();applyDocument(next);return next;});
 useEffect(()=>{applyDocument(locale);},[locale]);
 const setLocale=(next:Locale)=>{window.localStorage.setItem(STORAGE_KEY,next);setLocaleState(next);};
 const value=useMemo(()=>({locale,setLocale}),[locale]);
 return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(){
 const ctx=useContext(LocaleContext);
 if(!ctx)throw new Error('useLocale requires LocaleProvider');
 return ctx;
}
