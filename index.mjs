// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i){var o,f,u;if(r<=0)return t;for(o=n<0?(1-r)*n:0,f=a<0?(1-r)*a:0,u=0;u<r;u++)t[f]=i(e[o]),o+=n,f+=a;return t},n=function(r,e,n,t,a,i,o,f){var u,d,s;if(r<=0)return a;for(u=t,d=o,s=0;s<r;s++)a[d]=f(e[u]),u+=n,d+=i;return a};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
