/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var c=(u,p)=>{let r=[],o=()=>r.length,h=()=>r,s=e=>{if(o()<=1)return;let n=Math.floor((e-1)/2);switch(u){case 1:{r[n]>r[e]&&([r[n],r[e]]=[r[e],r[n]],s(n));break}case 2:{r[n]<r[e]&&([r[n],r[e]]=[r[e],r[n]],s(n));break}}},l=e=>{let n=o(),t=e,a=2*e+1,m=a+1;switch(u){case 1:{a<n&&r[a]<r[t]&&(t=a),m<n&&r[m]<r[t]&&(t=m);break}case 2:{a<n&&r[a]>r[t]&&(t=a),m<n&&r[m]>r[t]&&(t=m);break}}e!==t&&([r[e],r[t]]=[r[t],r[e]],l(t))},b=(e,n)=>(r.push(e),s(r.length-1),i()),f=e=>{for(let n=0;n<e.length;n++)b(e[n])},M=()=>{if(o()<=0)return null;let e=r[0];return r[0]=r[o()-1],r.pop(),l(0),e},i=()=>o()>0?r[0]:null,I=e=>{let n=o();return e>=Math.floor(n/2)&&e<n};return p&&f(p),{add:b,addList:f,poll:M,peek:i,size:o,isLeaf:I,values:h}};var H=(r=>(r[r.MinHeap=1]="MinHeap",r[r.MaxHeap=2]="MaxHeap",r))(H||{}),L=(u,p)=>c(2,u,p),x=(u,p)=>c(1,u,p);export{H as HeapType,L as maxHeap,x as minHeap};
