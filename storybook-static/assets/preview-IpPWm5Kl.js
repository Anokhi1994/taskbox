const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-CnUYcAxU.js","./iframe-B23wOKUq.js","./index-CoXXcpNP.js","./jsx-runtime-COnr8Gy3.js","./index-C1Rj5mRK.js","./index-D-8MO0q_.js","./index-BH0-GaK7.js","./index-DrFu-skq.js","./react-18-zoDk790m.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-B23wOKUq.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-CnUYcAxU.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
