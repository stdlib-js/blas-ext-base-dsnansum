"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(g,u){
var p=require('@stdlib/blas-ext-base-dsnansumpw/dist').ndarray;function y(e,r,a,c){return p(e,r,a,c)}u.exports=y
});var v=s(function(h,t){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=n();function j(e,r,a){return x(e,r,a,f(e,a))}t.exports=j
});var o=s(function(k,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=n();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,w=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=o(),i,m=w(_(__dirname,"./native.js"));E(m)?i=O:i=m;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
