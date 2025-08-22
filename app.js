// Noted — App Logic
// Local‑first data in localStorage; UI state + rendering lives here

let notes = load();
let currentId = notes[0]?.id || null;
let sortMode = localStorage.getItem('noted.sort') || 'updated';

const els = {
  list: document.getElementById('list'),
  search: document.getElementById('search'),
  filter: document.getElementById('filter'),
  tagFilter: document.getElementById('tagFilter'),
  sortBtn: document.getElementById('sortBtn'),
  newBtn: document.getElementById('newBtn'),
  exportBtn: document.getElementById('exportBtn'),
  importFile: document.getElementById('importFile'),
  resetBtn: document.getElementById('resetBtn'),
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  pinBtn: document.getElementById('pinBtn'),
  delBtn: document.getElementById('delBtn'),
  status: document.getElementById('status'),
  meta: document.getElementById('meta'),
  backlinks: document.getElementById('backlinks'),
  chips: Array.from(document.querySelectorAll('.modebar .chip')),
  paneEdit: document.getElementById('pane-edit'),
  panePrev: document.getElementById('pane-preview'),
  preview: document.getElementById('preview'),
  dailyBtn: document.getElementById('dailyBtn'),
  duplicateBtn: document.getElementById('duplicateBtn'),
  purgeBtn: document.getElementById('purgeBtn'),
  palette: document.getElementById('palette'),
  palInput: document.getElementById('palInput'),
  palList: document.getElementById('palList'),
};

function uid(){ return Math.random().toString(36).slice(2,8)+Date.now().toString(36) }
function now(){ return Date.now() }
function escapeHtml(s){ return s.replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c])) }
function getTags(text){ return Array.from(new Set((text.match(/(^|\s)#([\w-]+)/g)||[]).map(x=>x.trim().slice(1)))) }
function getLinks(text){ return Array.from(new Set((text.match(/\[\[([^\]]+)\]\]/g)||[]).map(x=>x.slice(2,-2)))) }
function byId(id){ return notes.find(n=>n.id===id) }
function save(){ localStorage.setItem('noted.v1', JSON.stringify(notes)); localStorage.setItem('noted.sort', sortMode) }
function load(){ try { return JSON.parse(localStorage.getItem('noted.v1'))||[] } catch { return [] } }

// ... (rest of full JS logic from canvas split version)
