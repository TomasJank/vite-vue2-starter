/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(){return(n=Object.assign||function(n){for(var o,r=1,t=arguments.length;r<t;r++)for(var e in o=arguments[r])Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e]);return n}).apply(this,arguments)};const o={};var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ComponentA:o}),t=function(o){return void 0===o&&(o={}),function(n){return void 0===n&&(n={}),{install:function(o){var r=n.components,t=void 0===r?{}:r,e=n.directives,i=void 0===e?{}:e;for(var a in i){var c=i[a];o.directive(a,c)}for(var a in t){var v=t[a];o.component(a,v)}}}}(n({components:r},o))};export{o as ComponentA,t as createHostingerVue};
