/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var c=m=>{let e=[],n=()=>e.length,s=r=>{if(n()<=1)return;let t=Math.floor((r-1)/2);switch(m){case 1:{e[t]>e[r]&&([e[t],e[r]]=[e[r],e[t]],s(t));break}case 2:{e[t]<e[r]&&([e[t],e[r]]=[e[r],e[t]],s(t));break}}},u=r=>{let t=n(),o=r,a=2*r+1,p=a+1;switch(m){case 1:{a<t&&e[a]<e[o]&&(o=a),p<t&&e[p]<e[o]&&(o=p);break}case 2:{a<t&&e[a]>e[o]&&(o=a),p<t&&e[p]>e[o]&&(o=p);break}}r!==o&&([e[r],e[o]]=[e[o],e[r]],u(o))};return{add:r=>{e.push(r),s(e.length-1)},poll:()=>{if(n()<=0)return null;let r=e[0];return e[0]=e[n()-1],e.pop(),u(0),r},peek:()=>n()>0?e[0]:null,size:n,isLeaf:r=>{let t=n();return r>=Math.floor(t/2)&&r<t}}};var l=(n=>(n[n.MinHeap=1]="MinHeap",n[n.MaxHeap=2]="MaxHeap",n))(l||{}),k=()=>c(2),g=()=>c(1);export{l as HeapType,k as maxHeap,g as minHeap};
