const { makeAutoObservable, autorun } = mobx;
class Store{
 constructor(){ this.entries=[]; makeAutoObservable(this); this.load(); }
 add(e){ this.entries.push(e); this.save(); }
 edit(i,e){ this.entries[i]=e; this.save(); }
 del(i){ this.entries.splice(i,1); this.save(); }
 save(){ localStorage.setItem('entries',JSON.stringify(this.entries)); }
 load(){ this.entries = JSON.parse(localStorage.getItem('entries')||'[]'); }
 monthlyTotals(){ const m={}; this.entries.forEach(e=>{const k=e.date.slice(0,7); m[k]=(m[k]||0) + (e.type==='income'? +e.amount : -e.amount);}); return m; }
}
const store = new Store();
let chart=null;
function drawChart(){ const dataObj = store.monthlyTotals(); const labels=Object.keys(dataObj).sort(); const data=labels.map(l=>dataObj[l]); const ctx=document.getElementById('chart').getContext('2d'); if(chart) chart.destroy(); chart=new Chart(ctx,{type:'bar',data:{labels, datasets:[{label:'Net by month',data}]}, options:{responsive:true, maintainAspectRatio:false}}); }
autorun(()=>{ if(document.getElementById('chart')) drawChart(); });
// Expose simple API for UI wiring (add/edit/delete) - UI implementation left for developer
window.appStore = store;