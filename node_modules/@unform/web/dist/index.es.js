import{jsx as r}from"react/jsx-runtime";import{forwardRef as t}from"react";import{FormProvider as n,FormContext as o}from"@unform/core";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var e=function(){return(e=Object.assign||function(r){for(var t,n=1,o=arguments.length;n<o;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}).apply(this,arguments)};var i=t((function(t,i){var a=t.initialData,c=void 0===a?{}:a,l=t.children,u=t.onSubmit,f=function(r,t){var n={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(n[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(o=Object.getOwnPropertySymbols(r);e<o.length;e++)t.indexOf(o[e])<0&&Object.prototype.propertyIsEnumerable.call(r,o[e])&&(n[o[e]]=r[o[e]])}return n}(t,["initialData","children","onSubmit"]);return r(n,e({ref:i,initialData:c,onSubmit:u},{children:r(o.Consumer,{children:function(t){var n=t.handleSubmit;return r("form",e({onSubmit:n},f,{children:l}),void 0)}},void 0)}),void 0)}));export{i as Form};
//# sourceMappingURL=index.es.js.map
