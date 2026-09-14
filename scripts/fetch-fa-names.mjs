/** Pull Persian labels for FMA ids from Wikidata (P1402). Glossary overrides win at runtime. */
import fs from 'node:fs';
import {setTimeout as sleep} from 'node:timers/promises';

const atlas = JSON.parse(fs.readFileSync(new URL('../public/models/atlas.json', import.meta.url)));
const ids = [...new Set(atlas.concepts.map(c => c.id.replace(/^FMA/, '')).filter(Boolean))];
const query = `SELECT ?fma ?label WHERE {
  ?item wdt:P1402 ?fma .
  ?item rdfs:label ?label .
  FILTER(LANG(?label) = "fa")
}`;
const url = 'https://query.wikidata.org/sparql?query=' + encodeURIComponent(query);
const request = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/sparql-results+json',
      'User-Agent': 'HumanAtlasPersianLabels/1.0 (https://github.com/msmrez/human-atlas)',
    },
  });
  if (response.status === 429) {
    await sleep(70_000);
    return request();
  }
  if (!response.ok) throw new Error(`Wikidata ${response.status}`);
  return response.json();
};
const data = await request();
const labels = {};
for (const row of data.results.bindings) {
  const fma = 'FMA' + row.fma.value;
  labels[fma] = row.label.value;
}
const used = Object.fromEntries(Object.entries(labels).filter(([id]) => ids.includes(id.slice(3))));
const out = new URL('../app/data/wikidata-fa.json', import.meta.url);
fs.mkdirSync(new URL('.', out), {recursive: true});
fs.writeFileSync(out, JSON.stringify({
  source: 'Wikidata',
  property: 'P1402',
  retrieved: new Date().toISOString().slice(0, 10),
  labels: used,
}, null, 1));
console.log(`Wrote ${Object.keys(used).length} Persian Wikidata labels for atlas concepts (${Object.keys(labels).length} FMA items with fa labels).`);
