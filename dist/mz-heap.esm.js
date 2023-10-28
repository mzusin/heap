/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var f=(u,m,a)=>{let e=[],o=()=>e.length,c=r=>{if(o()<=1)return;let n=Math.floor((r-1)/2);switch(u){case 1:{e[n]>e[r]&&([e[n],e[r]]=[e[r],e[n]],c(n));break}case 2:{e[n]<e[r]&&([e[n],e[r]]=[e[r],e[n]],c(n));break}}},i=r=>{let n=o(),t=r,p=2*r+1,s=p+1;switch(u){case 1:{p<n&&e[p]<e[t]&&(t=p),s<n&&e[s]<e[t]&&(t=s);break}case 2:{p<n&&e[p]>e[t]&&(t=p),s<n&&e[s]>e[t]&&(t=s);break}}r!==t&&([e[r],e[t]]=[e[t],e[r]],i(t))},l=(r,n)=>{if(e.push(r),c(e.length-1),n!==void 0)switch(u){case 2:{(o()>n||a)&&b();break}case 1:{(o()<n||a)&&b();break}}return h()},H=(r,n)=>{for(let t=0;t<r.length;t++)l(r[t],n||a)},b=()=>{if(o()<=0)return null;let r=e[0];return e[0]=e[o()-1],e.pop(),i(0),r},h=()=>o()>0?e[0]:null,I=r=>{let n=o();return r>=Math.floor(n/2)&&r<n};return m&&H(m,a),{add:l,addList:H,poll:b,peek:h,size:o,isLeaf:I}};var M=(a=>(a[a.MinHeap=1]="MinHeap",a[a.MaxHeap=2]="MaxHeap",a))(M||{}),L=(u,m)=>f(2,u,m),k=(u,m)=>f(1,u,m);export{M as HeapType,L as maxHeap,k as minHeap};
