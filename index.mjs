// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d,i,o){var a,f,m;if(r<=0)return s;for(a=n,f=i,m=0;m<r;m++)s[f]=o(e[a]),a+=t,f+=d;return s}function n(r,n,s,d,i,o){return t(r,n,s,e(r,s),d,i,e(r,i),o)}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
