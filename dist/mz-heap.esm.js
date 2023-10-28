/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var c=m=>{let e=[],n=()=>e.length,s=t=>{if(n()<=1)return;let r=Math.floor((t-1)/2);switch(m){case 1:{e[r]>e[t]&&([e[r],e[t]]=[e[t],e[r]],s(r));break}case 2:{e[r]<e[t]&&([e[r],e[t]]=[e[t],e[r]],s(r));break}}},l=t=>{let r=n(),o=t,a=2*t+1,p=a+1;switch(m){case 1:{a<r&&e[a]<e[o]&&(o=a),p<r&&e[p]<e[o]&&(o=p);break}case 2:{a<r&&e[a]>e[o]&&(o=a),p<r&&e[p]>e[o]&&(o=p);break}}t!==o&&([e[t],e[o]]=[e[o],e[t]],l(o))},u=t=>{e.push(t),s(e.length-1)};return{add:u,addList:t=>{for(let r=0;r<t.length;r++)u(t[r])},poll:()=>{if(n()<=0)return null;let t=e[0];return e[0]=e[n()-1],e.pop(),l(0),t},peek:()=>n()>0?e[0]:null,size:n,isLeaf:t=>{let r=n();return t>=Math.floor(r/2)&&t<r}}};var f=(n=>(n[n.MinHeap=1]="MinHeap",n[n.MaxHeap=2]="MaxHeap",n))(f||{}),g=()=>c(2),L=()=>c(1);export{f as HeapType,g as maxHeap,L as minHeap};
