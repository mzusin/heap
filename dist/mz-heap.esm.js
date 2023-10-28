/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var m=(a,l)=>{let e=[],o=()=>e.length,c=()=>e,s=r=>{if(o()<=1)return;let t=Math.floor((r-1)/2);switch(a){case 1:{e[t]>e[r]&&([e[t],e[r]]=[e[r],e[t]],s(t));break}case 2:{e[t]<e[r]&&([e[t],e[r]]=[e[r],e[t]],s(t));break}}},f=r=>{let t=o(),n=r,p=2*r+1,u=p+1;switch(a){case 1:{p<t&&e[p]<e[n]&&(n=p),u<t&&e[u]<e[n]&&(n=u);break}case 2:{p<t&&e[p]>e[n]&&(n=p),u<t&&e[u]>e[n]&&(n=u);break}}r!==n&&([e[r],e[n]]=[e[n],e[r]],f(n))},b=r=>(e.push(r),s(e.length-1),h()),i=r=>{for(let t=0;t<r.length;t++)b(r[t])},M=()=>{if(o()<=0)return null;let r=e[0];return e[0]=e[o()-1],e.pop(),f(0),r},h=()=>o()>0?e[0]:null,I=r=>{let t=o();return r>=Math.floor(t/2)&&r<t};return l&&i(l),{add:b,addList:i,poll:M,peek:h,size:o,isLeaf:I,values:c}};var H=(e=>(e[e.MinHeap=1]="MinHeap",e[e.MaxHeap=2]="MaxHeap",e))(H||{}),k=a=>m(2,a),L=a=>m(1,a),C=(a,l)=>{if(l<0)return null;let e=k(a);for(let o=0;o<l-1&&e.poll()!==null;o++);return e.peek()};export{H as HeapType,C as findKthGreatest,k as maxHeap,L as minHeap};
