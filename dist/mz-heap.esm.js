/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var m=s=>{let e=[],n=()=>e.length,u=r=>{if(n()<=1)return;let t=Math.floor((r-1)/2);switch(s){case 1:{e[t]>e[r]&&([e[t],e[r]]=[e[r],e[t]],u(t));break}case 2:{e[t]<e[r]&&([e[t],e[r]]=[e[r],e[t]],u(t));break}}},c=r=>{let t=n(),o=r,a=2*r+1,p=a+1;switch(s){case 1:{a<t&&e[a]<e[o]&&(o=a),p<t&&e[p]<e[o]&&(o=p);break}case 2:{a<t&&e[a]>e[o]&&(o=a),p<t&&e[p]>e[o]&&(o=p);break}}r!==o&&([e[r],e[o]]=[e[o],e[r]],c(o))},l=r=>(e.push(r),u(e.length-1),f()),b=r=>{for(let t=0;t<r.length;t++)l(r[t])},h=()=>{if(n()<=0)return null;let r=e[0];return e[0]=e[n()-1],e.pop(),c(0),r},f=()=>n()>0?e[0]:null;return{add:l,addList:b,poll:h,peek:f,size:n,isLeaf:r=>{let t=n();return r>=Math.floor(t/2)&&r<t}}};var i=(n=>(n[n.MinHeap=1]="MinHeap",n[n.MaxHeap=2]="MaxHeap",n))(i||{}),H=()=>m(2),L=()=>m(1),w=(s,e)=>{H().addList(s)};export{i as HeapType,w as kLargest,H as maxHeap,L as minHeap};
