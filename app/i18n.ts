import type {SystemId} from './anatomy';
import type {Locale} from './locale';

type SystemCopy = {name:string;description:string};
type Copy = {
 eyebrow:string;
 title:string;
 modeledPieces:(n:string)=>string;
 search:string;
 searchAria:string;
 aboutAria:string;
  languageAria:string;
  systems:string;
  closeSystems:string;
  all:string;
  typical:string;
 skeleton:string;
 organs:string;
 hideAll:string;
 piecesVisible:(n:string)=>string;
 showOnly:(name:string)=>string;
 showSystem:(name:string)=>string;
 findStructure:string;
 closeSearch:string;
 searchPlaceholder:string;
 searchEmpty:string;
 searchNoteIdle:string;
 searchNoteResults:string;
 piece:string;
 pieces:string;
 camera:string;
 view:(id:string)=>string;
 rotate:string;
 pauseRotate:string;
 reset:string;
 resetAria:string;
 captionAssembled:string;
 captionSeparated:string;
 captionInventory:string;
 captionSelected:string;
 explode:string;
 assembled:string;
 everyPiece:string;
 openSystems:string;
 hintOrbit:string;
 hintPan:string;
 hintZoom:string;
 hintTap:string;
 credits:string;
 loadingTitle:string;
 loadingDetail:(progress:number,count:string)=>string;
 catalogueError:string;
 webglError:string;
 assembleError:string;
 incompleteError:string;
 contextLost:string;
 reload:string;
 anatomy:string;
 contextNote:string;
 atlasReference:string;
 selectedPieces:string;
 included:string;
 morePieces:(n:number)=>string;
 sourceLink:string;
 isolate:string;
 showSurrounding:string;
 clear:string;
 exportAria:string;
 exportView:string;
 exportStructure:string;
 exportJpeg:string;
 exportPng:string;
 exportWebp:string;
 exportCredit:string;
 exportFailed:string;
 aboutEyebrow:string;
 aboutTitle:string;
 aboutLead:string;
 aboutKicker:string;
 aboutBody1:string;
 aboutBody2:string;
 aboutBody3:string;
 aboutNames:string;
 aboutSource:string;
 aboutLicense:string;
 datasetLicense:string;
 originalGeometry:string;
 sourcePublication:string;
 canvasAria:string;
 panelsAria:string;
 layersAria:string;
 searchPanelAria:string;
 systemNames:Record<SystemId,SystemCopy>;
 organsExplained:Record<string,string>;
};

export const copy:Record<Locale,Copy> = {
 en: {
  eyebrow:'INTERACTIVE ANATOMY',
  title:'Human Atlas',
  modeledPieces:(n)=>`${n} modeled pieces`,
  search:'Find a structure',
  searchAria:'Search anatomy',
  aboutAria:'About this atlas',
  languageAria:'Interface language',
  systems:'Systems',
  closeSystems:'Close systems',
  all:'All',
  typical:'Typical',
  skeleton:'Skeleton',
  organs:'Organs',
  hideAll:'Hide all',
  piecesVisible:(n)=>`${n} pieces visible`,
  showOnly:(name)=>`Show only ${name.toLowerCase()}`,
  showSystem:(name)=>`Show ${name.toLowerCase()}`,
  findStructure:'Find a structure',
  closeSearch:'Close search',
  searchPlaceholder:'Heart, femur, cranial nerve…',
  searchEmpty:'No structures match your search.',
  searchNoteIdle:'Start with a major organ, or search every named structure.',
  searchNoteResults:'Showing up to 80 matches. Refine your search to find smaller structures.',
  piece:'piece',
  pieces:'pieces',
  camera:'Camera controls',
  view:(id)=>`${id} view`,
  rotate:'Rotate body',
  pauseRotate:'Pause rotation',
  reset:'Reset',
  resetAria:'Reset view and layers',
  captionAssembled:'ADULT HUMAN · MALE',
  captionSeparated:'SEPARATED STRUCTURES',
  captionInventory:'ANATOMICAL INVENTORY',
  captionSelected:'SELECTED STRUCTURE',
  explode:'Explode anatomy',
  assembled:'Assembled',
  everyPiece:'Every piece',
  openSystems:'Open system layers',
  hintOrbit:'Drag to orbit',
  hintPan:'Drag to pan',
  hintZoom:'Pinch to zoom',
  hintTap:'Tap to inspect',
  credits:'Source & credits',
  loadingTitle:'Preparing the anatomy',
  loadingDetail:(progress,count)=>`${progress}% · Loading ${count} pieces`,
  catalogueError:'The anatomy catalogue could not be loaded.',
  webglError:'This browser could not start the 3D viewer. Please try a browser with WebGL enabled.',
  assembleError:'Could not assemble anatomy geometry.',
  incompleteError:'An anatomy file was incomplete. Please reload the viewer.',
  contextLost:'The 3D session was paused by your device. Reload to continue.',
  reload:'Reload viewer',
  anatomy:'ANATOMY',
  contextNote:'No part-specific description in this atlas. The structure is identified from the source anatomy.',
  atlasReference:'Atlas reference',
  selectedPieces:'Selected pieces',
  included:'Included structures',
  morePieces:(n)=>`And ${n} more modeled pieces.`,
  sourceLink:'View anatomical source',
  isolate:'Isolate structure',
  showSurrounding:'Show surrounding anatomy',
  clear:'Clear selection',
  exportAria:'Export image',
  exportView:'This view',
  exportStructure:'This structure',
  exportJpeg:'JPEG',
  exportPng:'PNG',
  exportWebp:'WebP',
  exportCredit:'BodyParts3D · CC BY 4.0',
  exportFailed:'Could not export the image. Wait for the anatomy to finish loading, then try again.',
  aboutEyebrow:'SOURCE & SCOPE',
  aboutTitle:'A body, revealed.',
  aboutLead:'Explore the adult male reference anatomy from BodyParts3D.',
  aboutKicker:'Male · BodyParts3D',
  aboutBody1:'2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.',
  aboutBody2:'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.',
  aboutBody3:'Colors and system groupings are designed for exploration. The geometry is simplified for the web. Short notes appear only for structures that have a specific description in this atlas. This is an anatomical reference, not a diagnostic or surgical tool.',
  aboutNames:'Persian structure names come from a reviewed glossary of major organs and from Wikidata labels linked to Foundational Model of Anatomy identifiers. Names without a trusted Persian source stay in English. Search matches English names, Persian labels, and individual modeled pieces.',
  aboutSource:'Source',
  aboutLicense:'BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.',
  datasetLicense:'Dataset license',
  originalGeometry:'Original geometry & metadata',
  sourcePublication:'Read the source publication',
  canvasAria:'Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.',
  panelsAria:'Explorer panels',
  layersAria:'Anatomical layers',
  searchPanelAria:'Find anatomy',
  systemNames:{
   skeletal:{name:'Skeleton',description:'Bones form the supporting framework of the body, protect organs, and provide attachment points for muscles. Their internal tissue also stores minerals and produces blood cells.'},
   muscular:{name:'Muscles',description:'Skeletal muscles generate movement by pulling on their attachments. Together with tendons, they move joints, stabilize posture, and produce heat.'},
   cardiac:{name:'Heart',description:'The heart is a muscular pump with four chambers. Its valves direct blood forward through the pulmonary and systemic circuits.'},
   sensory:{name:'Sensory organs',description:'These structures contribute to special senses, including sight, hearing, and balance. Their specialized tissues detect stimuli and work with the nervous system to convey information.'},
   arterial:{name:'Arteries',description:'The heart drives blood through the circulation. Arteries carry blood away from the heart to supply tissues or, in the pulmonary circuit, to the lungs.'},
   venous:{name:'Veins',description:'Veins return blood toward the heart. Superficial and deep networks collect blood from the tissues; the pulmonary veins bring oxygenated blood back from the lungs.'},
   nervous:{name:'Nervous system',description:'The brain, spinal cord, and peripheral nerves carry and process signals. They support sensation, movement, coordination, and automatic regulation of body functions.'},
   respiratory:{name:'Respiratory',description:'The airways conduct air to the lungs, where oxygen and carbon dioxide move between air and blood. Breathing depends on pressure changes produced by respiratory muscles.'},
   digestive:{name:'Digestive',description:'The digestive tract breaks down food, absorbs nutrients and water, and moves waste onward. Accessory organs contribute bile and digestive enzymes.'},
   urinary:{name:'Urinary',description:'The kidneys filter blood and regulate fluid, electrolyte, and acid–base balance. Urine travels through the ureters to the bladder and exits through the urethra.'},
   lymphatic:{name:'Lymphatic',description:'Lymphatic vessels return excess tissue fluid to the circulation. Lymph nodes and other lymphoid organs support immune surveillance and responses.'},
   endocrine:{name:'Endocrine',description:'Endocrine organs release hormones into the blood to coordinate processes such as metabolism, growth, stress responses, and reproduction.'},
   reproductive:{name:'Reproductive',description:'The male reproductive structures represented here contribute to sperm production, maturation, transport, and the production of sex hormones.'},
   integumentary:{name:'Body surface',description:'The body surface provides an outer anatomical reference. The integumentary system forms a protective barrier and contributes to sensation and temperature regulation.'},
   connective:{name:'Connective tissue',description:'Cartilage, ligaments, and other connective tissues support, connect, and separate structures. Their roles include stabilizing joints and distributing mechanical loads.'},
  },
  organsExplained:{
   heart:'A muscular pump in the chest. Its right side sends blood to the lungs; its left side sends blood through the systemic circulation.',
   liver:'A large organ beneath the right side of the diaphragm. It processes absorbed nutrients, produces bile, and synthesizes many proteins carried in the blood.',
   brain:'The central organ of the nervous system. Its interconnected regions support perception, movement, memory, language, and the regulation of bodily functions.',
   stomach:'A muscular chamber between the esophagus and small intestine. It stores and mixes food with acid and enzymes before releasing it into the duodenum.',
   spleen:'A lymphoid organ in the upper left abdomen. It filters blood, removes aging blood cells, and participates in immune responses.',
   pancreas:'An abdominal organ with digestive and endocrine roles. It supplies enzymes to the small intestine and releases hormones including insulin and glucagon.',
   'urinary bladder':'A muscular reservoir in the pelvis that stores urine arriving from the kidneys through the ureters.',
   trachea:'The main airway connecting the larynx to the bronchi. Its cartilage supports keep the airway open during breathing.',
   diaphragm:'A broad muscle separating the chest and abdomen. When it contracts, it increases chest volume and helps draw air into the lungs.',
   kidney:'A paired organ beside the spine. Each kidney filters blood, regulates fluid and electrolytes, and produces urine that drains to the bladder.',
   'left kidney':'The left kidney lies in the upper abdomen beside the spine. It filters blood and sends urine toward the bladder through the left ureter.',
   'right kidney':'The right kidney lies in the upper abdomen, typically a little lower than the left because of the liver. It filters blood and drains urine through the right ureter.',
   'left lung':'The left lung has two lobes and a cardiac notch where it accommodates the heart. Gas exchange with blood takes place in its airways and alveoli.',
   'right lung':'The right lung has three lobes and is typically slightly larger than the left. Gas exchange with blood takes place in its airways and alveoli.',
   aorta:'The main artery leaving the left ventricle. It arches and descends to supply oxygenated blood throughout the body.',
   femur:'The thigh bone. Each femur articulates with the hip above and with the tibia and patella at the knee.',
   skin:'The outer covering of this reference anatomy. It forms a protective barrier and contributes to sensation and temperature regulation.',
   prostate:'A gland below the bladder in this male reference. It contributes fluid to semen and surrounds the proximal urethra.',
   esophagus:'A muscular tube carrying food from the pharynx to the stomach. Coordinated contractions move the bolus downward.',
   'spinal cord':'The cord of nervous tissue in the vertebral canal. It carries signals between the brain and the body and mediates many reflexes.',
  },
 },
 fa: {
  eyebrow:'کالبدشناسی تعاملی',
  title:'اطلس بدن انسان',
  modeledPieces:(n)=>`${n} قطعه مدل‌سازی‌شده`,
  search:'یافتن ساختار',
  searchAria:'جستجوی آناتومی',
  aboutAria:'درباره این اطلس',
  languageAria:'زبان رابط',
  systems:'دستگاه‌ها',
  closeSystems:'بستن دستگاه‌ها',
  all:'همه',
  typical:'معمول',
  skeleton:'اسکلت',
  organs:'اندام‌ها',
  hideAll:'پنهان کردن همه',
  piecesVisible:(n)=>`${n} قطعه نمایان`,
  showOnly:(name)=>`فقط ${name} را نشان بده`,
  showSystem:(name)=>`نمایش ${name}`,
  findStructure:'یافتن ساختار',
  closeSearch:'بستن جستجو',
  searchPlaceholder:'قلب، استخوان ران، عصب جمجمه‌ای…',
  searchEmpty:'ساختاری با این جستجو پیدا نشد.',
  searchNoteIdle:'از یک اندام اصلی شروع کنید، یا همه ساختارهای نام‌گذاری‌شده را بجویید.',
  searchNoteResults:'تا ۸۰ نتیجه نمایش داده می‌شود. برای ساختارهای کوچک‌تر جستجو را دقیق‌تر کنید.',
  piece:'قطعه',
  pieces:'قطعه',
  camera:'کنترل دوربین',
  view:(id)=>(({ 'three-quarter':'نمای سه‌ربع', front:'نمای روبه‌رو', side:'نمای پهلو', back:'نمای پشت'} as Record<string,string>)[id]??id),
  rotate:'چرخش بدن',
  pauseRotate:'توقف چرخش',
  reset:'بازنشانی',
  resetAria:'بازنشانی نما و لایه‌ها',
  captionAssembled:'انسان بالغ · مرد',
  captionSeparated:'ساختارهای جداشده',
  captionInventory:'فهرست آناتومیک',
  captionSelected:'ساختار انتخاب‌شده',
  explode:'جدا کردن آناتومی',
  assembled:'یکپارچه',
  everyPiece:'هر قطعه',
  openSystems:'باز کردن لایه‌های دستگاه‌ها',
  hintOrbit:'برای چرخاندن بکشید',
  hintPan:'برای جابه‌جایی بکشید',
  hintZoom:'برای بزرگ‌نمایی دو انگشت را جمع کنید',
  hintTap:'برای بررسی ضربه بزنید',
  credits:'منبع و اعتبار',
  loadingTitle:'آماده‌سازی آناتومی',
  loadingDetail:(progress,count)=>`${progress}٪ · بارگذاری ${count} قطعه`,
  catalogueError:'فهرست آناتومی بارگذاری نشد.',
  webglError:'این مرورگر نتوانست نمایش سه‌بعدی را آغاز کند. مرورگری با WebGL امتحان کنید.',
  assembleError:'هندسه آناتومی سرهم نشد.',
  incompleteError:'یک پرونده آناتومی ناقص بود. نمایشگر را دوباره بارگذاری کنید.',
  contextLost:'جلسه سه‌بعدی توسط دستگاه متوقف شد. برای ادامه دوباره بارگذاری کنید.',
  reload:'بارگذاری دوباره',
  anatomy:'آناتومی',
  contextNote:'برای این ساختار توضیح اختصاصی در اطلس نیست. نام آن از آناتومی منبع آمده است.',
  atlasReference:'شناسه اطلس',
  selectedPieces:'قطعه‌های انتخاب‌شده',
  included:'ساختارهای مشمول',
  morePieces:(n)=>`و ${n.toLocaleString('fa-IR')} قطعه مدل‌سازی‌شده دیگر.`,
  sourceLink:'مشاهده منبع آناتومیک',
  isolate:'جدا کردن ساختار',
  showSurrounding:'نمایش آناتومی اطراف',
  clear:'پاک کردن انتخاب',
  exportAria:'خروجی تصویر',
  exportView:'همین نما',
  exportStructure:'همین ساختار',
  exportJpeg:'JPEG',
  exportPng:'PNG',
  exportWebp:'WebP',
  exportCredit:'BodyParts3D · CC BY 4.0',
  exportFailed:'خروجی تصویر گرفته نشد. صبر کنید آناتومی کامل بارگذاری شود، بعد دوباره تلاش کنید.',
  aboutEyebrow:'منبع و دامنه',
  aboutTitle:'بدن، آشکار.',
  aboutLead:'آناتومی مرجع مرد بالغ از BodyParts3D را بکاوید.',
  aboutKicker:'مرد · BodyParts3D',
  aboutBody1:'۲٬۲۳۴ مش منفرد و ۳٬۴۳۲ مفهوم نام‌گذاری‌شده از آناتومی مرجع مرد بالغ.',
  aboutBody2:'این مرجع شامل همه ساختارها یا تنوع‌های بدن انسان نیست. مفاهیم نام‌گذاری‌شده می‌توانند چند قطعه داشته باشند؛ هر مش منبع یک‌بار رسم می‌شود.',
  aboutBody3:'رنگ‌ها و گروه‌بندی دستگاه‌ها برای کاوش طراحی شده‌اند. هندسه برای وب ساده‌سازی شده است. توضیح کوتاه فقط برای ساختارهایی می‌آید که در این اطلس یادداشت اختصاصی دارند. این یک مرجع آناتومیک است، نه ابزار تشخیص یا جراحی.',
  aboutNames:'نام فارسی ساختارها از واژه‌نامه بازبینی‌شده اندام‌های اصلی و از برچسب‌های ویکی‌داده متصل به شناسه‌های Foundational Model of Anatomy می‌آید. نام‌هایی که منبع فارسی قابل اعتماد ندارند به انگلیسی می‌مانند. جستجو نام انگلیسی، برچسب فارسی و قطعه‌های مدل‌سازی‌شده را تطبیق می‌دهد.',
  aboutSource:'منبع',
  aboutLicense:'BodyParts3D، © مرکز پایگاه داده علوم زیستی تحت مجوز CC Attribution 4.0 International.',
  datasetLicense:'مجوز مجموعه داده',
  originalGeometry:'هندسه و فراداده اصلی',
  sourcePublication:'مقاله منبع را بخوانید',
  canvasAria:'آناتومی تعاملی انسان. برای چرخاندن بکشید، برای بزرگ‌نمایی دو انگشت یا اسکرول، و برای بررسی به ساختار ضربه بزنید.',
  panelsAria:'پنل‌های کاوشگر',
  layersAria:'لایه‌های آناتومیک',
  searchPanelAria:'یافتن آناتومی',
  systemNames:{
   skeletal:{name:'اسکلت',description:'استخوان‌ها چارچوب نگهدارنده بدن را می‌سازند، از اندام‌ها محافظت می‌کنند و محل اتصال عضلات هستند. بافت درونی آن‌ها مواد معدنی را ذخیره می‌کند و سلول‌های خونی می‌سازد.'},
   muscular:{name:'عضلات',description:'عضلات اسکلتی با کشیدن محل اتصال خود حرکت ایجاد می‌کنند. همراه با زردپی‌ها مفاصل را حرکت می‌دهند، وضعیت بدن را پایدار می‌کنند و گرما می‌سازند.'},
   cardiac:{name:'قلب',description:'قلب تلمبه‌ای عضلانی با چهار حفره است. دریچه‌هایش خون را در مدار ریوی و گردش عمومی به جلو هدایت می‌کنند.'},
   sensory:{name:'اندام‌های حسی',description:'این ساختارها در حواس ویژه از جمله بینایی، شنوایی و تعادل نقش دارند. بافت‌های تخصصی‌شان محرک را تشخیص می‌دهند و با دستگاه عصبی اطلاعات را منتقل می‌کنند.'},
   arterial:{name:'سرخرگ‌ها',description:'قلب خون را در گردش می‌راند. سرخرگ‌ها خون را از قلب دور می‌کنند تا بافت‌ها را تغذیه کنند یا در مدار ریوی به ریه‌ها برسانند.'},
   venous:{name:'سیاهرگ‌ها',description:'سیاهرگ‌ها خون را به‌سوی قلب بازمی‌گردانند. شبکه‌های سطحی و عمقی خون را از بافت‌ها جمع می‌کنند؛ سیاهرگ‌های ریوی خون اکسیژن‌دار را از ریه‌ها می‌آورند.'},
   nervous:{name:'دستگاه عصبی',description:'مغز، نخاع و اعصاب محیطی سیگنال‌ها را حمل و پردازش می‌کنند. آن‌ها حس، حرکت، هماهنگی و تنظیم خودکار کارکردهای بدن را پشتیبانی می‌کنند.'},
   respiratory:{name:'تنفسی',description:'راه‌های هوایی هوا را به ریه‌ها می‌رسانند، جایی که اکسیژن و دی‌اکسید کربن میان هوا و خون جابه‌جا می‌شوند. تنفس به تغییر فشار ناشی از عضلات تنفسی وابسته است.'},
   digestive:{name:'گوارش',description:'لوله گوارش غذا را تجزیه می‌کند، مواد مغذی و آب را جذب می‌کند و مواد زائد را به جلو می‌راند. اندام‌های فرعی صفرا و آنزیم‌های گوارشی می‌سازند.'},
   urinary:{name:'ادراری',description:'کلیه‌ها خون را تصفیه می‌کنند و تعادل مایع، الکترولیت و اسید–باز را تنظیم می‌کنند. ادرار از راه میزنای به مثانه می‌رسد و از مجرای ادرار خارج می‌شود.'},
   lymphatic:{name:'لنفاوی',description:'رگ‌های لنفاوی مایع اضافی بافت را به گردش خون بازمی‌گردانند. گره‌های لنفاوی و دیگر اندام‌های لنفاوی در دیده‌بانی ایمنی نقش دارند.'},
   endocrine:{name:'غدد درون‌ریز',description:'اندام‌های درون‌ریز هورمون را به خون می‌ریزند تا سوخت‌وساز، رشد، پاسخ به استرس و تولیدمثل را هماهنگ کنند.'},
   reproductive:{name:'تولیدمثل',description:'ساختارهای تولیدمثل مرد که اینجا آمده‌اند در ساخت، بلوغ و انتقال اسپرم و تولید هورمون‌های جنسی نقش دارند.'},
   integumentary:{name:'سطح بدن',description:'سطح بدن یک مرجع بیرونی آناتومیک است. دستگاه پوششی سدی محافظ می‌سازد و در حس و تنظیم دما نقش دارد.'},
   connective:{name:'بافت همبند',description:'غضروف، رباط و دیگر بافت‌های همبند ساختارها را نگه می‌دارند، به هم وصل می‌کنند و از هم جدا می‌کنند. پایدار کردن مفاصل و پخش بار مکانیکی از نقش‌های آن‌هاست.'},
  },
  organsExplained:{
   heart:'تلمبه‌ای عضلانی در قفسه سینه. سمت راست خون را به ریه‌ها می‌فرستد و سمت چپ آن را در گردش عمومی بدن می‌راند.',
   liver:'اندامی بزرگ زیر سمت راست دیافراگم. مواد مغذی جذب‌شده را پردازش می‌کند، صفرا می‌سازد و بسیاری از پروتئین‌های خون را سنتز می‌کند.',
   brain:'اندام مرکزی دستگاه عصبی. نواحی به‌هم‌پیوسته‌اش ادراک، حرکت، حافظه، زبان و تنظیم کارکردهای بدن را پشتیبانی می‌کنند.',
   stomach:'محفظه‌ای عضلانی میان مری و روده باریک. غذا را ذخیره و با اسید و آنزیم مخلوط می‌کند و سپس به دوازدهه می‌فرستد.',
   spleen:'اندامی لنفاوی در بالا و چپ شکم. خون را پالایش می‌کند، سلول‌های خونی پیر را برمی‌دارد و در پاسخ ایمنی شرکت می‌کند.',
   pancreas:'اندامی شکمی با نقش گوارشی و درون‌ریز. آنزیم به روده باریک می‌رساند و هورمون‌هایی از جمله انسولین و گلوکاگون آزاد می‌کند.',
   'urinary bladder':'مخزن عضلانی در لگن که ادرار رسیده از کلیه‌ها از راه میزنای را ذخیره می‌کند.',
   trachea:'راه هوایی اصلی میان حنجره و نایژه‌ها. تکیه‌های غضروفی راه هوا را هنگام تنفس باز نگه می‌دارند.',
   diaphragm:'عضله پهنی که سینه را از شکم جدا می‌کند. با انقباض، حجم سینه را زیاد می‌کند و به ورود هوا به ریه‌ها کمک می‌کند.',
   kidney:'اندامی جفت در دو سوی ستون فقرات. هر کلیه خون را تصفیه می‌کند، مایع و الکترولیت را تنظیم می‌کند و ادرار را به مثانه می‌فرستد.',
   'left kidney':'کلیه چپ در بالای شکم کنار ستون فقرات قرار دارد. خون را تصفیه می‌کند و ادرار را از راه میزنای چپ به‌سوی مثانه می‌فرستد.',
   'right kidney':'کلیه راست در بالای شکم است و معمولاً به‌خاطر کبد کمی پایین‌تر از کلیه چپ می‌نشیند. خون را تصفیه می‌کند و ادرار را از میزنای راست تخلیه می‌کند.',
   'left lung':'ریه چپ دو لوب دارد و با بریدگی قلبی جای قلب را باز می‌گذارد. تبادل گاز با خون در راه‌های هوایی و حبابک‌های آن رخ می‌دهد.',
   'right lung':'ریه راست سه لوب دارد و معمولاً کمی بزرگ‌تر از ریه چپ است. تبادل گاز با خون در راه‌های هوایی و حبابک‌های آن رخ می‌دهد.',
   aorta:'سرخرگ اصلی خروجی بطن چپ. قوس می‌زند و پایین می‌رود تا خون اکسیژن‌دار را در بدن پخش کند.',
   femur:'استخوان ران. هر استخوان ران بالا با مفصل ران و پایین با درشت‌نی و کشکک زانو مفصل می‌شود.',
   skin:'پوشش بیرونی این آناتومی مرجع. سدی محافظ می‌سازد و در حس و تنظیم دما نقش دارد.',
   prostate:'غده‌ای زیر مثانه در این مرجع مرد. مایعی به منی می‌افزاید و بخش نزدیک مجرای ادرار را در بر می‌گیرد.',
   esophagus:'لوله‌ای عضلانی که غذا را از حلق به معده می‌برد. انقباض‌های هماهنگ لقمه را به پایین می‌رانند.',
   'spinal cord':'طناب بافت عصبی در کانال مهره‌ای. سیگنال را میان مغز و بدن حمل می‌کند و بسیاری از بازتاب‌ها را میانجی می‌شود.',
  },
 },
};

const ORGAN_EXPLAIN_IDS:Record<string,string>={
 FMA7088:'heart',FMA50801:'brain',FMA7197:'liver',FMA7148:'stomach',FMA7196:'spleen',
 FMA7198:'pancreas',FMA15900:'urinary bladder',FMA7394:'trachea',FMA13295:'diaphragm',
 FMA7203:'kidney',FMA7205:'left kidney',FMA7204:'right kidney',
 FMA7310:'left lung',FMA7309:'right lung',FMA3734:'aorta',FMA9611:'femur',
 FMA7163:'skin',FMA9600:'prostate',FMA7131:'esophagus',FMA7647:'spinal cord',
};

export function structureExplanation(name:string,id:string,locale:Locale){
 const t=copy[locale];
 const key=ORGAN_EXPLAIN_IDS[id]??name.toLowerCase();
 return t.organsExplained[key]??'';
}

export function hasOrganExplanation(name:string,id:string,locale:Locale){
 return !!structureExplanation(name,id,locale);
}
