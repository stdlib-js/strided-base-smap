"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=f(function(j,c){
function l(r,e,t,i,a,u,m,y){var n,s,v;if(r<=0)return a;for(n=i,s=m,v=0;v<r;v++)a[s]=y(e[n]),n+=t,s+=u;return a}c.exports=l
});var x=f(function(k,q){
var p=require('@stdlib/strided-base-stride2offset/dist'),O=o();function R(r,e,t,i,a,u){return O(r,e,t,p(r,t),i,a,p(r,a),u)}q.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),g=o();b(d,"ndarray",g);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
