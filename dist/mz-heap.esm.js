/*
https://github.com/mzusin/heap
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var i=()=>{let t=[],l=()=>t.length,p=o=>{if(l()<=1)return;let n=Math.floor((o-1)/2);t[n]>t[o]&&([t[n],t[o]]=[t[o],t[n]],p(n))},c=o=>{let n=l(),r=o,e=2*o+1,s=e+1;e<n&&t[e]<t[r]&&(r=e),s<n&&t[s]<t[r]&&(r=s),o!==r&&([t[o],t[r]]=[t[r],t[o]],c(r))};return{add:o=>{t.push(o),p(t.length-1)},poll:()=>{if(l()<=0)return null;let o=t[0];return t[0]=t[l()-1],t.pop(),c(0),o},peek:()=>l()>0?t[0]:null,size:l}};var m=()=>{let t=[],l=()=>t.length,p=o=>{if(l()<=1)return;let n=Math.floor((o-1)/2);t[n]<t[o]&&([t[n],t[o]]=[t[o],t[n]],p(n))},c=o=>{let n=l(),r=o,e=2*o+1,s=e+1;e<n&&t[e]>t[r]&&(r=e),s<n&&t[s]>t[r]&&(r=s),o!==r&&([t[o],t[r]]=[t[r],t[o]],c(r))};return{add:o=>{t.push(o),p(t.length-1)},poll:()=>{if(l()<=0)return null;let o=t[0];return t[0]=t[l()-1],t.pop(),c(0),o},peek:()=>l()>0?t[0]:null,size:l}};export{m as maxHeap,i as minHeap};
