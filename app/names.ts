import type {Concept,Part} from './anatomy';
import glossaryFile from './data/fa-glossary.json' with {type:'json'};
import wikidataFile from './data/wikidata-fa.json' with {type:'json'};
import type {Locale} from './locale';

export const FEATURED = ['heart','brain','liver','stomach','spleen','pancreas','urinary bladder','trachea'] as const;
const ABSTRACT = new Set([
 'physical anatomical entity','anatomical entity','material anatomical entity','anatomical structure',
 'cardinal organ part','organ region','human body','organ segment','region of vascular tree organ',
 'organ','anatomical group','anatomical cluster','set of organs','subdivision of organism',
]);
export const MAX_SEARCHABLE_PIECES = 200;
const glossary = glossaryFile.labels as Record<string,string>;
const wikidata = (wikidataFile as {labels:Record<string,string>}).labels;

export function normalizeQuery(value:string){
 return value.replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/[\u200c\u200d]/g,'').replace(/\s+/g,' ').trim().toLowerCase();
}

export function persianName(id:string,english:string){
 return glossary[id] || glossary[english.toLowerCase()] || wikidata[id];
}

export function displayName(id:string,english:string,locale:Locale){
 if(locale!=='fa')return english;
 return persianName(id,english) || english;
}

export function isSearchableConcept(concept:Concept){
 return concept.elements.length>0 && concept.elements.length<=MAX_SEARCHABLE_PIECES && !ABSTRACT.has(concept.name.toLowerCase());
}

export function matchesQuery(id:string,english:string,query:string){
 const q=normalizeQuery(query);
 if(!q)return false;
 const fa=persianName(id,english);
 return normalizeQuery(english).includes(q) || id.toLowerCase().includes(q) || (!!fa && normalizeQuery(fa).includes(q));
}

export function searchScore(id:string,english:string,query:string){
 const q=normalizeQuery(query);
 const name=normalizeQuery(english);
 const fa=normalizeQuery(persianName(id,english) || '');
 if(name===q || fa===q)return 0;
 if(name.startsWith(q) || (fa && fa.startsWith(q)))return 1;
 return 2+english.length;
}

export function searchConcepts(concepts:Concept[],query:string){
 const term=query.trim();
 if(!term)return FEATURED.map(name=>concepts.find(c=>c.name.toLowerCase()===name)).filter((c):c is Concept=>!!c);
 return concepts.filter(c=>isSearchableConcept(c)&&matchesQuery(c.id,c.name,term)).sort((a,b)=>searchScore(a.id,a.name,term)-searchScore(b.id,b.name,term)).slice(0,80);
}

export function conceptLabel(concept:Concept,locale:Locale){
 return displayName(concept.id,concept.name,locale);
}

export function partLabel(part:Part,locale:Locale){
 return displayName(part.conceptId,part.name,locale);
}
