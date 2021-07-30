import{o as t,b as e,e as a,d as l,r as n,c as s,l as r,k as o,L as u,p as d,f as i,w as c,t as p,F as f,q as g,M as v,g as m,x,y,h as b,z as h,A as k,N as w,O as _,P as F,Q as T,R as j}from"./vendor.3604a013.js";import{M as S,i as C,u as V,C as E,a as M,R as z,f as B}from"./index.d1272058.js";import{_ as D,a as R}from"./chevron-down.40ab8f75.js";import{D as A,a as I,b as U,L as K,c as L,d as O,e as Y,S as q,f as N,g as P}from"./headlessui.esm.ddfe9e3e.js";import{_ as Q}from"./Spinner.ce5d90e3.js";const $={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},G=a("g",{fill:"none"},[a("path",{d:"M5 15l7-7l7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var H={render:function(a,l){return t(),e("svg",$,[G])}};const J=a("span",{class:"sr-only"},"Open menu",-1),W={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},X={class:"my-5 px-2 space-y-1 z-10"},Z={class:"pb-1"},tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},et={class:"sr-only"},at=m(" Docs settings "),lt={class:"relative mt-1"},nt={class:"truncate"},st={class:"truncate"},rt={class:"relative mt-1"},ot={class:"truncate"},ut={class:"truncate"},dt={class:"flex justify-between px-2"},it=m("Show privates"),ct={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},pt={class:"sr-only"},ft={class:"truncate"},gt={class:"truncate"},vt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},mt={class:"sr-only"},xt=m(" Classes "),yt={class:"truncate"},bt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ht={class:"sr-only"},kt=m(" Typedefs "),wt={class:"truncate"};var _t=l({expose:[],setup(l){var m,w,_,F,T;const j=h(),E=x(),M=V(),z=y(k).greater("lg"),B=n(!1),Q=n(),$=s((()=>M.state.sources)),G=s((()=>M.state.source)),_t=s((()=>M.state.tag)),Ft=s((()=>M.state.docs)),Tt=s((()=>M.state.branches)),jt=s((()=>$.value.find((t=>E.params.source===t.id)))),St=n({source:null!=(w=null==(m=jt.value)?void 0:m.source)?w:S,name:null!=(F=null==(_=jt.value)?void 0:_.name)?F:S.name}),Ct=n(null!=(T=E.params.tag)?T:S.defaultTag),Vt=s((()=>{var t,e;return C.value?null==(t=Ft.value)?void 0:t.classes:null==(e=Ft.value)?void 0:e.classes.filter((t=>"private"!==t.access))})),Et=s((()=>{var t,e;return C.value?null==(t=Ft.value)?void 0:t.typedefs:null==(e=Ft.value)?void 0:e.typedefs.filter((t=>"private"!==t.access))}));return r(Q,(()=>B.value=!1)),o(z,(()=>B.value=!1),{immediate:!0}),u([St,Ct],(async([t,e],[a,l])=>t!==a?(Ct.value=t.source.defaultTag,j.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:t.source.defaultTag,category:t.source.defaultFile.category,file:t.source.defaultFile.id}})):e!==l?j.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:e,category:t.source.defaultFile.category,file:t.source.defaultFile.id}}):void 0)),(l,n)=>{var s,r,o;const u=D,m=R,x=H,y=b("router-link");return t(),e(f,null,[B.value?d("",!0):(t(),e("div",{key:0,class:["block fixed lg:hidden z-10 transition-transform transform-gpu",B.value?"translate-x-72 md:translate-x-80":null]},[a("button",{type:"button",class:"\n\t\t\t\trounded-md rounded-l-none rounded-tr-none\n\t\t\t\tp-3\n\t\t\t\tinline-flex\n\t\t\t\titems-center\n\t\t\t\tjustify-center\n\t\t\t\ttext-gray-200\n\t\t\t\tbg-discord-blurple-600\n\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t","aria-controls":"sidebar-menu","aria-expanded":B.value,onClick:n[1]||(n[1]=t=>B.value=!B.value)},[J,a(u,{class:["h-6 w-6",{hidden:B.value,block:!B.value}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])],2)),a("div",{ref:Q,class:["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",B.value?"translate-x-0":"-translate-x-full lg:translate-x-0"]},[a("div",W,[a("nav",X,[a("ul",null,[a("li",Z,[a(i(A),{"default-open":!0},{default:c((({open:l})=>[a(i(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:c((()=>[a("div",tt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",et,p(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(m,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),at])])),_:2},1024),a(i(U),{as:"ul",class:"px-2 space-y-3"},{default:c((()=>[a("li",null,[a(i(K),{modelValue:St.value,"onUpdate:modelValue":n[2]||(n[2]=t=>St.value=t)},{default:c((({open:l})=>[a("div",lt,[a(i(L),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:c((()=>[a("span",nt,p(St.value.name),1),l?d("",!0):(t(),e(m,{key:0})),l?(t(),e(x,{key:1})):d("",!0)])),_:2},1024),a(i(O),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:c((()=>[(t(!0),e(f,null,g(i($),(l=>(t(),e(i(Y),{key:l.source.id,class:"cursor-default",value:l},{default:c((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},[a("span",st,p(l.name),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(i(K),{modelValue:Ct.value,"onUpdate:modelValue":n[3]||(n[3]=t=>Ct.value=t)},{default:c((({open:l})=>[a("div",rt,[a(i(L),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:c((()=>[a("span",ot,p(Ct.value),1),l?d("",!0):(t(),e(m,{key:0})),l?(t(),e(x,{key:1})):d("",!0)])),_:2},1024),a(i(O),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:c((()=>[(t(!0),e(f,null,g(i(Tt),(l=>(t(),e(i(Y),{key:l,class:"cursor-default",value:l},{default:c((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},[a("span",ut,p(l),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(i(q),null,{default:c((()=>[a("div",dt,[a(i(N),{class:"mr-4 dark:text-gray-200"},{default:c((()=>[it])),_:1}),a(i(P),{modelValue:i(C),"onUpdate:modelValue":n[4]||(n[4]=t=>v(C)?C.value=t:null),class:["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",i(C)?"bg-discord-red-500":"bg-gray-500"]},{default:c((()=>[a("span",{class:["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",i(C)?"translate-x-6":"translate-x-1"]},null,2)])),_:1},8,["modelValue","class"])])])),_:1})])])),_:1})])),_:1})]),(t(!0),e(f,null,g(null==(s=i(Ft))?void 0:s.custom,((l,s)=>(t(),e("li",{key:s},[a(i(A),{"default-open":!0},{default:c((({open:r})=>[a(i(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:c((()=>[a("div",ct,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":r},[a("span",pt,p(r?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:r}],"aria-hidden":"true"},null,8,["class"]),a(m,{class:["inline-block",{hidden:!r}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),a("span",ft,p(l.name),1)])])),_:2},1024),a(i(U),{as:"ul"},{default:c((()=>[(t(!0),e(f,null,g(l.files,((l,r)=>{var o;return t(),e("li",{key:r},[a(y,{to:{name:"docs-source-tag-category-file",params:{source:null==(o=i(G))?void 0:o.id,tag:i(_t),category:s,file:r}},class:"\n\t\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[5]||(n[5]=t=>B.value=!1)},{default:c((()=>[a("span",gt,p("object"==typeof l?l.name:l),1)])),_:2},1032,["to"])])})),128))])),_:2},1024)])),_:2},1024)])))),128)),(null==(r=i(Vt))?void 0:r.length)?(t(),e(i(A),{key:0,as:"li","default-open":!0},{default:c((({open:l})=>[a(i(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:c((()=>[a("div",vt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",mt,p(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(m,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),xt])])),_:2},1024),a(i(U),{as:"ul"},{default:c((()=>[(t(!0),e(f,null,g(i(Vt),(l=>{var s;return t(),e("li",{key:l.name},[a(y,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:null==(s=i(G))?void 0:s.id,tag:i(_t),class:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[6]||(n[6]=t=>B.value=!1)},{default:c((()=>[a("span",yt,p(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):d("",!0),(null==(o=i(Et))?void 0:o.length)?(t(),e(i(A),{key:1,as:"li","default-open":!0},{default:c((({open:l})=>[a(i(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:c((()=>[a("div",bt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",ht,p(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(m,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),kt])])),_:2},1024),a(i(U),{as:"ul"},{default:c((()=>[(t(!0),e(f,null,g(i(Et),(l=>{var s;return t(),e("li",{key:l.name},[a(y,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:null==(s=i(G))?void 0:s.id,tag:i(_t),typedef:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[7]||(n[7]=t=>B.value=!1)},{default:c((()=>[a("span",wt,p(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):d("",!0)])])])],2)],64)}}});const Ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Tt=a("g",{fill:"none"},[a("path",{d:"M8 7l4-4m0 0l4 4m-4-4v18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var jt={render:function(a,l){return t(),e("svg",Ft,[Tt])}};const St={class:"fixed bottom-0 right-0 pb-4"},Ct={class:"px-6 lg:px-8"};var Vt=l({expose:[],setup:l=>(l,n)=>{const s=jt;return t(),e("div",St,[a("div",Ct,[a("button",{class:"\n\t\t\t\t\tbg-discord-blurple-500\n\t\t\t\t\thover:bg-discord-blurple-530\n\t\t\t\t\tdark:hover:bg-discord-blurple-560\n\t\t\t\t\ttext-gray-200\n\t\t\t\t\thover:text-white\n\t\t\t\t\trounded-md\n\t\t\t\t\tp-2\n\t\t\t\t\tleading-3\n\t\t\t\t\tfocus:outline-none\n\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t",onClick:n[1]||(n[1]=t=>{return null==(e=document.getElementById("container"))?void 0:e.scrollTo({top:0,behavior:"smooth"});var e})},[a(s,{class:"h-6 w-6"})])])])}});const Et={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Mt={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},zt=m(" Couldn't load the documentation data. ");var Bt=l({expose:[],setup(l){const r=h(),u=x(),c=V(),{Ctrl_K:f}=w({passive:!1,onEventFired(t){t.ctrlKey&&"k"===t.key&&"keydown"===t.type&&t.preventDefault()}}),g=_({[S.id]:S,[E.id]:E,[M.id]:M,[z.id]:z}),v=n(!1),m=s((()=>c.state.source)),y=s((()=>c.state.tag)),k=s((()=>c.state.docs));F((()=>{const t=document.getElementById("container");T(t,"scroll",(()=>{t&&t.scrollTop>300?v.value=!0:v.value=!1}))})),o(f,(()=>{var t;null==(t=document.getElementById("search"))||t.focus()}));return j((()=>{(async()=>{var t,e,a,l,n,s,o,d,i,p,f,v,x,b,h,w,_,F,T,j;if("/"!==u.path)u.params.source&&u.params.tag&&((null==(t=k.value)?void 0:t.id)!==g[u.params.source].id||(null==(e=k.value)?void 0:e.tag)!==u.params.tag)&&(await c.dispatch({type:"fetchDocs",inputSource:null!=(a=g[u.params.source])?a:S,inputTag:null!=(l=u.params.tag)?l:y.value}),await c.dispatch({type:"fetchTags",currentSource:null!=(n=g[u.params.source])?n:S})),u.params.source&&g[u.params.source]?(c.commit({type:"setSource",source:g[u.params.source]}),u.params.tag?(c.commit({type:"setTag",tag:u.params.tag}),c.commit({type:"setSource",source:g[u.params.source]}),u.params.file||u.params.class||u.params.typedef||"docs-source-tag-search"===u.name||r.replace({name:"docs-source-tag-category-file",params:{source:null!=(h=null==(b=m.value)?void 0:b.id)?h:S.id,tag:null!=(w=y.value)?w:S.defaultTag,category:null!=(F=null==(_=m.value)?void 0:_.defaultFile.category)?F:S.defaultFile.category,file:null!=(j=null==(T=m.value)?void 0:T.defaultFile.id)?j:S.defaultFile.id}})):r.replace({name:"docs-source-tag-category-file",params:{source:null!=(o=null==(s=m.value)?void 0:s.id)?o:S.id,tag:(null==(d=m.value)?void 0:d.recentTag)||(null==(i=m.value)?void 0:i.defaultTag),category:null!=(f=null==(p=m.value)?void 0:p.defaultFile.category)?f:S.defaultFile.category,file:null!=(x=null==(v=m.value)?void 0:v.defaultFile.id)?x:S.defaultFile.id}})):r.replace({name:"docs-source-tag-category-file",params:{source:S.id,tag:S.defaultTag,category:S.defaultFile.category,file:S.defaultFile.id}})})()})),(l,n)=>{const s=b("router-view");return t(),e("div",null,[a("div",Et,[a(_t),i(k)?(t(),e(s,{key:l.$route.path})):i(B)?(t(),e("div",Mt,[zt,a("pre",null,p(i(B).toString()),1)])):(t(),e(Q,{key:2}))]),v.value?(t(),e(Vt,{key:0})):d("",!0)])}}});export default Bt;