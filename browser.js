// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(e){return e!=e}var p=Math.floor;function d(e,r,t,n){var o,i,u,a,f,l,c,s,y,b,v,j,m;if(e<=0)return 0;if(1===e||0===t)return _(r[n])?0:r[n];if(o=n,e<8){for(v=0,m=0;m<e;m++)!1===_(r[o])&&(v+=r[o]),o+=t;return v}if(e<=128){for(i=_(r[o])?0:r[o],u=_(r[o+=t])?0:r[o],a=_(r[o+=t])?0:r[o],f=_(r[o+=t])?0:r[o],l=_(r[o+=t])?0:r[o],c=_(r[o+=t])?0:r[o],s=_(r[o+=t])?0:r[o],y=_(r[o+=t])?0:r[o],o+=t,b=e%8,m=8;m<e-b;m+=8)i+=_(r[o])?0:r[o],u+=_(r[o+=t])?0:r[o],a+=_(r[o+=t])?0:r[o],f+=_(r[o+=t])?0:r[o],l+=_(r[o+=t])?0:r[o],c+=_(r[o+=t])?0:r[o],s+=_(r[o+=t])?0:r[o],y+=_(r[o+=t])?0:r[o],o+=t;for(v=i+u+(a+f)+(l+c+(s+y));m<e;m++)!1===_(r[o])&&(v+=r[o]),o+=t;return v}return j=p(e/2),d(j-=j%8,r,t,o)+d(e-j,r,t,o+j*t)}function s(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return _(r[0])?0:r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)!1===_(r[n])&&(o+=r[n]),n+=t;return o}return d(e,r,t,n)}function y(e,r,t){return s(e,r,t)}function b(e,r,t,n){return d(e,r,t,n)}c(s,"ndarray",d),c(y,"ndarray",b),e.default=y,e.ndarray=b,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dsnansum={});
//# sourceMappingURL=browser.js.map
