"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=c(function(h,p){
function y(r,e,u,s,a,v){var n,t,i;if(r<=0)return s;for(u<0?n=(1-r)*u:n=0,a<0?t=(1-r)*a:t=0,i=0;i<r;i++)s[t]=v(e[n]),n+=u,t+=a;return s}p.exports=y
});var m=c(function(j,l){
function O(r,e,u,s,a,v,n,t){var i,f,o;if(r<=0)return a;for(i=s,f=n,o=0;o<r;o++)a[f]=t(e[i]),i+=u,f+=v;return a}l.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=x(),b=m();R(q,"ndarray",b);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
