// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i){var o,d,f;if(r<=0)return t;for(o=e<0?(1-r)*e:0,d=a<0?(1-r)*a:0,f=0;f<r;f++)t[d]=i(n[o]),o+=e,d+=a;return t}function e(r,n,e,t,a,i,o,d){var f,s,u;if(r<=0)return a;for(f=t,s=o,u=0;u<r;u++)a[s]=d(n[f]),f+=e,s+=i;return a}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
