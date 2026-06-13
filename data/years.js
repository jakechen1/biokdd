/* =====================================================================
 *  BIOKDD year-by-year data
 *  ---------------------------------------------------------------------
 *  This file is the SINGLE SOURCE OF TRUTH for the year-grid on the
 *  BIOKDD home page.  To add a new edition or update an existing entry,
 *  edit this file ONLY — the home page picks the data up automatically.
 *
 *  Each entry has:
 *    y      : 4-digit year (number)              ← required
 *    n      : edition ordinal ("25th", "26th")   ← required
 *    loc    : workshop location                  ← required
 *    theme  : workshop theme / tagline           ← required
 *    phase  : 1, 2, 3, or 4 (see PHASES below)   ← required
 *    url    : link to year subpage               ← required
 *    skip   : true if workshop was NOT held      ← optional
 *    current: true if this is the upcoming year  ← optional, set ONE
 *
 *  PHASES (used for color-coding):
 *    1 = Founding era            (2001 – 2008)  · deep blue
 *    2 = Networks & NGS          (2010 – 2014)  · teal
 *    3 = Deep learning           (2015 – 2020)  · amber
 *    4 = GenAI & digital twins   (2021 – 2026+) · red
 *
 *  HOW TO ADD A NEW EDITION (e.g. BIOKDD 2027):
 *    1) Remove `current:true` from the previous year's entry.
 *    2) Append a new object to the end of the array:
 *         { y:2027, n:'26th', loc:'TBD',
 *           theme:'Theme tagline here',
 *           phase:4, url:'https://biokdd.org/biokdd27/', current:true }
 *    3) Update the 4-phase year ranges in PHASES (above + in index.html)
 *       only if you start a brand-new phase.
 *    4) Commit + push.  Cloudflare Pages will redeploy automatically.
 *
 *  HOW TO MARK A SKIPPED YEAR:
 *    { y:2027, n:'—', loc:'(not held)', theme:'Workshop not held this year',
 *      phase:4, url:'#', skip:true }
 *
 * ===================================================================== */

window.BIOKDD_YEARS = [
  // Years marked ./biokddXX/ are retroactive reconstructions hosted in this repo
  // because the original RPI / Ohio State / IUPUI sites for those editions are defunct.
  {y:2001, n:'1st',  loc:'San Francisco, CA',          theme:'Founding — open call on biological data mining',                  phase:1, url:'./biokdd01/'},
  {y:2002, n:'2nd',  loc:'Edmonton, Canada',           theme:'Recent advances in biological data mining',                       phase:1, url:'./biokdd02/'},
  {y:2003, n:'3rd',  loc:'Washington, DC',             theme:'Open call · sequence & expression',                               phase:1, url:'./biokdd03/'},
  {y:2004, n:'4th',  loc:'Seattle, WA',                theme:'Bioinformatics, genomics, neuroscience',                          phase:1, url:'./biokdd04/'},
  {y:2005, n:'5th',  loc:'Chicago, IL',                theme:'Open call · sequence, structure, expression',                     phase:1, url:'./biokdd05/'},
  {y:2006, n:'6th',  loc:'Philadelphia, PA',           theme:'Open call · functional & comparative genomics',                   phase:1, url:'./biokdd06/'},
  {y:2007, n:'7th',  loc:'San Jose, CA',               theme:'First full-day workshop · open call',                             phase:1, url:'https://biokdd.org/biokdd07/'},
  {y:2008, n:'8th',  loc:'Las Vegas, NV',              theme:'Complex biological systems & knowledge discovery',                phase:1, url:'https://biokdd.org/biokdd08/'},
  {y:2009, n:'—',    loc:'(Paris)',                    theme:'Workshop not held this year',                                     phase:1, url:'#', skip:true},
  {y:2010, n:'9th',  loc:'Arlington, VA',              theme:'Mining biocomplexity — from molecular systems to health',         phase:2, url:'https://biokdd.org/biokdd10/'},
  {y:2011, n:'10th', loc:'San Diego, CA',              theme:'Data-mining challenges in next-generation sequencing',            phase:2, url:'https://biokdd.org/biokdd11/'},
  {y:2012, n:'11th', loc:'Beijing, China',             theme:'Open call · post-genomic data mining',                            phase:2, url:'./biokdd12/'},
  {y:2013, n:'12th', loc:'Chicago, IL',                theme:'Building network and predictive models',                          phase:2, url:'./biokdd13/'},
  {y:2014, n:'13th', loc:'New York City',              theme:'Knowledge discovery using big data in biomedical systems',        phase:2, url:'./biokdd14/'},
  {y:2015, n:'14th', loc:'Sydney, Australia',          theme:'Knowledge discovery on complex biological & medical data',        phase:3, url:'./biokdd15/'},
  {y:2016, n:'15th', loc:'San Francisco, CA',          theme:'Complex biological & medical data, continued',                    phase:3, url:'./biokdd16/'},
  {y:2017, n:'16th', loc:'Halifax, Canada',            theme:'Multiscale & multimodal analysis for computational biology',      phase:3, url:'https://biokdd.org/biokdd17/'},
  {y:2018, n:'17th', loc:'London, UK',                 theme:'Data science meets biomedical sciences & health informatics',     phase:3, url:'https://biokdd.org/biokdd18/'},
  {y:2019, n:'18th', loc:'Anchorage, AK',              theme:'Data science meets bioinformatics',                               phase:3, url:'https://biokdd.org/biokdd19/'},
  {y:2020, n:'19th', loc:'Virtual',                    theme:'Battling COVID-19 with biomedical data mining',                   phase:3, url:'https://biokdd.org/biokdd20/'},
  {y:2021, n:'20th', loc:'Virtual · 20th anniversary', theme:'Artificial intelligence in medicine',                             phase:4, url:'https://biokdd.org/biokdd21/'},
  {y:2022, n:'21st', loc:'Washington, DC',             theme:'Biomedical ontologies & biological data visualization',           phase:4, url:'https://biokdd.org/biokdd22/'},
  {y:2023, n:'22nd', loc:'Long Beach, CA',             theme:'Large-scale data-driven methods for bioinformatics',              phase:4, url:'https://biokdd.org/biokdd23/'},
  {y:2024, n:'23rd', loc:'Barcelona, Spain',           theme:'Advancing bioinformatics with LLMs and generative AI',            phase:4, url:'https://biokdd.org/biokdd24/'},
  {y:2025, n:'24th', loc:'Toronto, Canada',            theme:'Generative AI in biomolecular designs',                           phase:4, url:'https://biokdd.org/biokdd25/'},
  {y:2026, n:'25th', loc:'with SIGKDD 2026',           theme:'Digital twins — virtual patients & simulated biology',            phase:4, url:'https://biokdd.org/biokdd26/', current:true},
];
