(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4087],{59784:(e,t,s)=>{"use strict";s.d(t,{g:()=>o});var n,r=s(47232),a=s(66065),i=s(58137);class o{constructor(e){this.trusted=!1,this._changed=new i.Signal(this),this._raw={};const t=n.getData(e.value);this._data=new r.ObservableJSON({values:t}),this._rawData=t;const s=e.value;for(const e in s)switch(e){case"data":break;default:this._raw[e]=n.extract(s,e)}}get changed(){return this._changed}dispose(){this._data.dispose(),i.Signal.clearData(this)}get data(){return this._rawData}get metadata(){return{}}setData(e){e.data&&(this._updateObservable(this._data,e.data),this._rawData=e.data),this._changed.emit(void 0)}toJSON(){const e={};for(const t in this._raw)e[t]=n.extract(this._raw,t);return e}_updateObservable(e,t){const s=e.keys(),n=Object.keys(t);for(const t of s)-1===n.indexOf(t)&&e.delete(t);for(const s of n){const n=e.get(s),r=t[s];n!==r&&e.set(s,r)}}}!function(e){e.getData=function(e){return n.getData(e)}}(o||(o={})),function(e){function t(e){return function(e){const t=Object.create(null);for(const n in e)t[n]=s(e,n);return t}(e)}function s(e,t){const s=e[t];return void 0===s||a.JSONExt.isPrimitive(s)?s:a.JSONExt.deepCopy(s)}e.getData=t,e.getBundleOptions=function(e){return{data:t(e.value)}},e.extract=s}(n||(n={}))},14769:(e,t,s)=>{"use strict";s.d(t,{vy:()=>r,Lz:()=>a,hJ:()=>i,xr:()=>o,F:()=>l,BJ:()=>c,nF:()=>d,Nf:()=>u});var n=s(10994);const r={safe:!0,mimeTypes:["text/html"],defaultRank:50,createRenderer:e=>new n.oI(e)},a={safe:!0,mimeTypes:["image/bmp","image/png","image/jpeg","image/gif"],defaultRank:90,createRenderer:e=>new n.UH(e)},i={safe:!0,mimeTypes:["text/latex"],defaultRank:70,createRenderer:e=>new n.FK(e)},o={safe:!0,mimeTypes:["text/markdown"],defaultRank:60,createRenderer:e=>new n.cw(e)},l={safe:!1,mimeTypes:["image/svg+xml"],defaultRank:80,createRenderer:e=>new n.zt(e)},c={safe:!0,mimeTypes:["text/plain","application/vnd.jupyter.stdout","application/vnd.jupyter.stderr"],defaultRank:120,createRenderer:e=>new n.lH(e)},d={safe:!1,mimeTypes:["text/javascript","application/javascript"],defaultRank:110,createRenderer:e=>new n.ND(e)},u=[r,o,i,l,a,d,c]},44087:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AttachmentModel:()=>a.g,htmlRendererFactory:()=>i.vy,imageRendererFactory:()=>i.Lz,javaScriptRendererFactory:()=>i.nF,latexRendererFactory:()=>i.hJ,markdownRendererFactory:()=>i.xr,standardRendererFactories:()=>i.Nf,svgRendererFactory:()=>i.F,textRendererFactory:()=>i.BJ,removeMath:()=>o.D,replaceMath:()=>o.b,MimeModel:()=>l.a,OutputModel:()=>c.M,RenderMimeRegistry:()=>d.D,renderHTML:()=>u.NN,renderImage:()=>u.co,renderLatex:()=>u.K3,renderMarkdown:()=>u.ap,renderSVG:()=>u.KB,renderText:()=>u.IY,ILatexTypesetter:()=>h._,IRenderMimeRegistry:()=>h.Z,RenderedCommon:()=>p.pY,RenderedHTML:()=>p.oI,RenderedHTMLCommon:()=>p.BP,RenderedImage:()=>p.UH,RenderedJavaScript:()=>p.ND,RenderedLatex:()=>p.FK,RenderedMarkdown:()=>p.cw,RenderedSVG:()=>p.zt,RenderedText:()=>p.lH});var n=s(62837),r={};for(const e in n)"default"!==e&&(r[e]=()=>n[e]);s.d(t,r);var a=s(59784),i=s(14769),o=s(44009),l=s(97986),c=s(94135),d=s(88828),u=s(71380),h=s(38500),p=s(10994)},44009:(e,t,s)=>{"use strict";s.d(t,{D:()=>r,b:()=>a});const n=/(\$\$?|\\(?:begin|end)\{[a-z]*\*?\}|\\[{}$]|[{}]|(?:\n\s*)+|@@\d+@@|\\\\(?:\(|\)|\[|\]))/i;function r(e){const t=[];let s,r=null,a=null,o=null,l=0;/`/.test(e)?(e=e.replace(/~/g,"~T").replace(/(^|[^\\])(`+)([^\n]*?[^`\n])\2(?!`)/gm,(e=>e.replace(/\$/g,"~D"))),s=e=>e.replace(/~([TD])/g,((e,t)=>"T"===t?"~":"$"))):s=e=>e;let c=e.replace(/\r\n?/g,"\n").split(n);for(let e=1,n=c.length;e<n;e+=2){const n=c[e];"@"===n.charAt(0)?(c[e]="@@"+t.length+"@@",t.push(n)):null!==r?n===a?l?o=e:(c=i(r,e,s,t,c),r=null,a=null,o=null):n.match(/\n.*\n/)?(null!==o&&(e=o,c=i(r,e,s,t,c)),r=null,a=null,o=null,l=0):"{"===n?l++:"}"===n&&l&&l--:"$"===n||"$$"===n?(r=e,a=n,l=0):"\\\\("===n||"\\\\["===n?(r=e,a="("===n.slice(-1)?"\\\\)":"\\\\]",l=0):"begin"===n.substr(1,5)&&(r=e,a="\\end"+n.substr(6),l=0)}return null!==r&&null!==o&&(c=i(r,o,s,t,c),r=null,a=null,o=null),{text:s(c.join("")),math:t}}function a(e,t){return e.replace(/@@(\d+)@@/g,((e,s)=>{let n=t[s];return"\\\\("===n.substr(0,3)&&"\\\\)"===n.substr(n.length-3)?n="\\("+n.substring(3,n.length-3)+"\\)":"\\\\["===n.substr(0,3)&&"\\\\]"===n.substr(n.length-3)&&(n="\\["+n.substring(3,n.length-3)+"\\]"),n}))}function i(e,t,s,n,r){let a=r.slice(e,t+1).join("").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");for(navigator&&"Microsoft Internet Explorer"===navigator.appName&&(a=a.replace(/(%[^\n]*)\n/g,"$1<br/>\n"));t>e;)r[t]="",t--;return r[e]="@@"+n.length+"@@",s&&(a=s(a)),n.push(a),r}},97986:(e,t,s)=>{"use strict";s.d(t,{a:()=>n});class n{constructor(e={}){this.trusted=!!e.trusted,this._data=e.data||{},this._metadata=e.metadata||{},this._callback=e.callback||r.noOp}get data(){return this._data}get metadata(){return this._metadata}setData(e){this._data=e.data||this._data,this._metadata=e.metadata||this._metadata,this._callback(e)}}var r;!function(e){e.noOp=function(){}}(r||(r={}))},94135:(e,t,s)=>{"use strict";s.d(t,{M:()=>l});var n,r=s(66065),a=s(58137),i=s(45935),o=s(47232);class l{constructor(e){this._changed=new a.Signal(this),this._raw={};const{data:t,metadata:s,trusted:r}=n.getBundleOptions(e);this._data=new o.ObservableJSON({values:t}),this._rawData=t,this._metadata=new o.ObservableJSON({values:s}),this._rawMetadata=s,this.trusted=r;const l=e.value;for(const e in l)switch(e){case"data":case"metadata":break;default:this._raw[e]=n.extract(l,e)}this.type=l.output_type,i.isExecuteResult(l)?this.executionCount=l.execution_count:this.executionCount=null}get changed(){return this._changed}dispose(){this._data.dispose(),this._metadata.dispose(),a.Signal.clearData(this)}get data(){return this._rawData}get metadata(){return this._rawMetadata}setData(e){e.data&&(this._updateObservable(this._data,e.data),this._rawData=e.data),e.metadata&&(this._updateObservable(this._metadata,e.metadata),this._rawMetadata=e.metadata),this._changed.emit(void 0)}toJSON(){const e={};for(const t in this._raw)e[t]=n.extract(this._raw,t);switch(this.type){case"display_data":case"execute_result":case"update_display_data":e.data=this.data,e.metadata=this.metadata}return delete e.transient,e}_updateObservable(e,t){const s=e.keys(),n=Object.keys(t);for(const t of s)-1===n.indexOf(t)&&e.delete(t);for(const s of n){const n=e.get(s),r=t[s];n!==r&&e.set(s,r)}}}!function(e){e.getData=function(e){return n.getData(e)},e.getMetadata=function(e){return n.getMetadata(e)}}(l||(l={})),function(e){function t(e){let t={};if(i.isExecuteResult(e)||i.isDisplayData(e)||i.isDisplayUpdate(e))t=e.data;else if(i.isStream(e))"stderr"===e.name?t["application/vnd.jupyter.stderr"]=e.text:t["application/vnd.jupyter.stdout"]=e.text;else if(i.isError(e)){t["application/vnd.jupyter.error"]=e;const s=e.traceback.join("\n");t["application/vnd.jupyter.stderr"]=s||`${e.ename}: ${e.evalue}`}return function(e){const t=Object.create(null);for(const s in e)t[s]=n(e,s);return t}(t)}function s(e){const t=Object.create(null);if(i.isExecuteResult(e)||i.isDisplayData(e))for(const s in e.metadata)t[s]=n(e.metadata,s);return t}function n(e,t){const s=e[t];return void 0===s||r.JSONExt.isPrimitive(s)?s:JSON.parse(JSON.stringify(s))}e.getData=t,e.getMetadata=s,e.getBundleOptions=function(e){return{data:t(e.value),metadata:s(e.value),trusted:!!e.trusted}},e.extract=n}(n||(n={}))},88828:(e,t,s)=>{"use strict";s.d(t,{D:()=>l});var n,r=s(32700),a=s(19983),i=s(17105),o=s(97986);class l{constructor(e={}){if(this._id=0,this._ranks={},this._types=null,this._factories={},this.translator=e.translator||i.nullTranslator,this.resolver=e.resolver||null,this.linkHandler=e.linkHandler||null,this.latexTypesetter=e.latexTypesetter||null,this.sanitizer=e.sanitizer||a.defaultSanitizer,e.initialFactories)for(const t of e.initialFactories)this.addFactory(t)}get mimeTypes(){return this._types||(this._types=n.sortedTypes(this._ranks))}preferredMimeType(e,t="ensure"){if("ensure"===t||"prefer"===t)for(const t of this.mimeTypes)if(t in e&&this._factories[t].safe)return t;if("ensure"!==t)for(const t of this.mimeTypes)if(t in e)return t}createRenderer(e){if(!(e in this._factories))throw new Error(`No factory for mime type: '${e}'`);return this._factories[e].createRenderer({mimeType:e,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,latexTypesetter:this.latexTypesetter,translator:this.translator})}createModel(e={}){return new o.a(e)}clone(e={}){const t=new l({resolver:e.resolver||this.resolver||void 0,sanitizer:e.sanitizer||this.sanitizer||void 0,linkHandler:e.linkHandler||this.linkHandler||void 0,latexTypesetter:e.latexTypesetter||this.latexTypesetter||void 0,translator:this.translator});return t._factories=Object.assign({},this._factories),t._ranks=Object.assign({},this._ranks),t._id=this._id,t}getFactory(e){return this._factories[e]}addFactory(e,t){void 0===t&&void 0===(t=e.defaultRank)&&(t=100);for(const s of e.mimeTypes)this._factories[s]=e,this._ranks[s]={rank:t,id:this._id++};this._types=null}removeMimeType(e){delete this._factories[e],delete this._ranks[e],this._types=null}getRank(e){const t=this._ranks[e];return t&&t.rank}setRank(e,t){if(!this._ranks[e])return;const s=this._id++;this._ranks[e]={rank:t,id:s},this._types=null}}!function(e){e.UrlResolver=class{constructor(e){if(e.path)this._path=e.path;else{if(!e.session)throw new Error("Either 'path' or 'session' must be given as a constructor option");this._session=e.session}this._contents=e.contents}get path(){var e;return null!==(e=this._path)&&void 0!==e?e:this._session.path}set path(e){this._path=e}async resolveUrl(e){if(this.isLocal(e)){const t=encodeURI(r.PathExt.dirname(this.path));e=r.PathExt.resolve(t,e)}return e}async getDownloadUrl(e){return this.isLocal(e)?this._contents.getDownloadUrl(decodeURIComponent(e)):e}isLocal(e){const t=decodeURI(e);return r.URLExt.isLocal(e)||!!this._contents.driveName(t)}}}(l||(l={})),function(e){e.sortedTypes=function(e){return Object.keys(e).sort(((t,s)=>{const n=e[t],r=e[s];return n.rank!==r.rank?n.rank-r.rank:n.id-r.id}))},e.sessionConnection=function(e){return e.sessionChanged?e.session:e}}(n||(n={}))},71380:(e,t,s)=>{"use strict";s.d(t,{NN:()=>p,co:()=>f,K3:()=>m,ap:()=>g,KB:()=>y,IY:()=>v});var n,r=s(13917),a=s.n(r),i=s(35370),o=s(32700),l=s(17105),c=s(79028),d=s(20694),u=s.n(d),h=s(44009);function p(e){let{host:t,source:s,trusted:r,sanitizer:a,resolver:i,linkHandler:o,shouldTypeset:c,latexTypesetter:d,translator:u}=e;u=u||l.nullTranslator;const h=null==u?void 0:u.load("jupyterlab");let p,f=s;if(!s)return t.textContent="",Promise.resolve(void 0);if(r||(f=`${s}`,s=a.sanitize(s)),t.innerHTML=s,t.getElementsByTagName("script").length>0)if(r)n.evalInnerHTMLScriptTags(t);else{const e=document.createElement("div"),s=document.createElement("pre");s.textContent=h.__("This HTML output contains inline scripts. Are you sure that you want to run arbitrary Javascript within your JupyterLab session?");const r=document.createElement("button");r.textContent=h.__("Run"),r.onclick=e=>{t.innerHTML=f,n.evalInnerHTMLScriptTags(t),t.firstChild&&t.removeChild(t.firstChild)},e.appendChild(s),e.appendChild(r),t.insertBefore(e,t.firstChild)}return n.handleDefaults(t,i),p=i?n.handleUrls(t,i,o):Promise.resolve(void 0),p.then((()=>{c&&d&&d.typeset(t)}))}function f(e){const{host:t,mimeType:s,source:n,width:r,height:a,needsBackground:i,unconfined:o}=e;t.textContent="";const l=document.createElement("img");return l.src=`data:${s};base64,${n}`,"number"==typeof a&&(l.height=a),"number"==typeof r&&(l.width=r),"light"===i?l.classList.add("jp-needs-light-background"):"dark"===i&&l.classList.add("jp-needs-dark-background"),!0===o&&l.classList.add("jp-mod-unconfined"),t.appendChild(l),Promise.resolve(void 0)}function m(e){const{host:t,source:s,shouldTypeset:n,latexTypesetter:r}=e;return t.textContent=s,n&&r&&r.typeset(t),Promise.resolve(void 0)}async function g(e){const{host:t,source:s}=e,r=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s}(e,["host","source"]);if(!s)return void(t.textContent="");const a=(0,h.D)(s);let i=await n.renderMarked(a.text);i=(0,h.b)(i,a.math),await p(Object.assign({host:t,source:i},r)),n.headerAnchors(t)}function y(e){let{host:t,source:s,trusted:n,unconfined:r}=e;if(!s)return t.textContent="",Promise.resolve(void 0);if(!n)return t.textContent="Cannot display an untrusted SVG. Maybe you need to run the cell?",Promise.resolve(void 0);s.search("<svg[^>]+xmlns=[^>]+svg")<0&&(s=s.replace("<svg",'<svg xmlns="http://www.w3.org/2000/svg"'));const a=new Image;return a.src=`data:image/svg+xml,${encodeURIComponent(s)}`,t.appendChild(a),!0===r&&t.classList.add("jp-mod-unconfined"),Promise.resolve()}function v(e){const{host:t,sanitizer:s,source:r}=e,a=s.sanitize(n.ansiSpan(r),{allowedTags:["span"]}),i=document.createElement("pre");return i.innerHTML=function(e){const t="\\u0000-\\u0020\\u007f-\\u009f",s=new RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s"+t+'"]{2,}[^\\s'+t+"\"'(){}\\[\\],:;.!?]","ug");return e.replace(s,(e=>{const t=e.slice(-3),s=-1!==["&gt","&lt"].indexOf(t),n=s?t:"",r=s?e.length-3:e.length;return`<a href="${e.slice(0,r)}" rel="noopener" target="_blank">${e.slice(0,r)}</a>${n}`}))}(a),t.appendChild(i),Promise.resolve(void 0)}!function(e){async function t(e,t,s){const n=e.getAttribute(t)||"",r=s.isLocal?s.isLocal(n):o.URLExt.isLocal(n);if(n&&r)try{const r=await s.resolveUrl(n);let a=await s.getDownloadUrl(r);"data:"!==o.URLExt.parse(a).protocol&&(a+=(/\?/.test(a)?"&":"?")+(new Date).getTime()),e.setAttribute(t,a)}catch(s){throw e.setAttribute(t,""),s}}function s(e,t,s){let n=e.getAttribute("href")||"";const r=t.isLocal?t.isLocal(n):o.URLExt.isLocal(n);if(!n||!r)return Promise.resolve(void 0);const a=e.hash;if(a){if(a===n)return e.target="_self",Promise.resolve(void 0);n=n.replace(a,"")}return t.resolveUrl(n).then((n=>{const r=decodeURIComponent(n);return s&&s.handleLink(e,r,a),t.getDownloadUrl(n)})).then((t=>{e.href=t+a})).catch((t=>{e.href=""}))}e.evalInnerHTMLScriptTags=function(e){const t=(0,c.toArray)(e.getElementsByTagName("script"));for(const e of t){if(!e.parentNode)continue;const t=document.createElement("script"),s=e.attributes;for(let e=0,n=s.length;e<n;++e){const{name:n,value:r}=s[e];t.setAttribute(n,r)}t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},e.renderMarked=function(e){return n||(n=!0,a().setOptions({gfm:!0,sanitize:!1,langPrefix:`cm-s-${i.CodeMirrorEditor.defaultConfig.theme} language-`,highlight:(e,t,s)=>{const n=(e,t)=>(s&&s(e,t),t);return t?(i.Mode.ensure(t).then((s=>{const r=document.createElement("div");if(!s)return console.error(`No CodeMirror mode: ${t}`),n(null,e);try{return i.Mode.run(e,s.mime,r),n(null,r.innerHTML)}catch(s){return console.error(`Failed to highlight ${t} code`,s),n(s,e)}})).catch((s=>(console.error(`No CodeMirror mode: ${t}`),console.error(`Require CodeMirror mode error: ${s}`),n(null,e)))),e):n(null,e)}})),new Promise(((t,s)=>{a()(e,((e,n)=>{e?s(e):t(n)}))}))},e.handleDefaults=function(e,t){const s=e.getElementsByTagName("a");for(let e=0;e<s.length;e++){const n=s[e];if(!(n instanceof HTMLAnchorElement))continue;const r=n.href,a=t&&t.isLocal?t.isLocal(r):o.URLExt.isLocal(r);n.target||(n.target=a?"_self":"_blank"),a||(n.rel="noopener")}const n=e.getElementsByTagName("img");for(let e=0;e<n.length;e++)n[e].alt||(n[e].alt="Image")},e.handleUrls=function(e,n,r){const a=[],i=e.querySelectorAll("*[src]");for(let e=0;e<i.length;e++)a.push(t(i[e],"src",n));const o=e.getElementsByTagName("a");for(let e=0;e<o.length;e++)a.push(s(o[e],n,r));const l=e.getElementsByTagName("link");for(let e=0;e<l.length;e++)a.push(t(l[e],"href",n));return Promise.all(a).then((()=>{}))},e.headerAnchors=function(e){var t;const s=["h1","h2","h3","h4","h5","h6"];for(const n of s){const s=e.getElementsByTagName(n);for(let e=0;e<s.length;e++){const n=s[e];n.id=(null!==(t=n.textContent)&&void 0!==t?t:"").replace(/ /g,"-");const r=document.createElement("a");r.target="_self",r.textContent="¶",r.href="#"+n.id,r.classList.add("jp-InternalAnchorLink"),n.appendChild(r)}}};let n=!1;const r=["ansi-black","ansi-red","ansi-green","ansi-yellow","ansi-blue","ansi-magenta","ansi-cyan","ansi-white","ansi-black-intense","ansi-red-intense","ansi-green-intense","ansi-yellow-intense","ansi-blue-intense","ansi-magenta-intense","ansi-cyan-intense","ansi-white-intense"];function l(e,t,s,n,a,i,o){if(e){const l=[],c=[];n&&"number"==typeof t&&0<=t&&t<8&&(t+=8),i&&([t,s]=[s,t]),"number"==typeof t?l.push(r[t]+"-fg"):t.length?c.push(`color: rgb(${t})`):i&&l.push("ansi-default-inverse-fg"),"number"==typeof s?l.push(r[s]+"-bg"):s.length?c.push(`background-color: rgb(${s})`):i&&l.push("ansi-default-inverse-bg"),n&&l.push("ansi-bold"),a&&l.push("ansi-underline"),l.length||c.length?(o.push("<span"),l.length&&o.push(` class="${l.join(" ")}"`),c.length&&o.push(` style="${c.join("; ")}"`),o.push(">"),o.push(e),o.push("</span>")):o.push(e)}}function d(e){let t,s,n;const r=e.shift();if(2===r&&e.length>=3){if(t=e.shift(),s=e.shift(),n=e.shift(),[t,s,n].some((e=>e<0||255<e)))throw new RangeError("Invalid range for RGB colors")}else{if(!(5===r&&e.length>=1))throw new RangeError("Invalid extended color specification");{const r=e.shift();if(r<0)throw new RangeError("Color index must be >= 0");if(r<16)return r;if(r<232)t=Math.floor((r-16)/36),t=t>0?55+40*t:0,s=Math.floor((r-16)%36/6),s=s>0?55+40*s:0,n=(r-16)%6,n=n>0?55+40*n:0;else{if(!(r<256))throw new RangeError("Color index must be < 256");t=s=n=10*(r-232)+8}}}return[t,s,n]}e.ansiSpan=function(e){const t=/\x1b\[(.*?)([@-~])/g;let s,n=[],r=[],a=!1,i=!1,o=!1;const c=[],h=[];let p=0;for(e=u()(e),e+="[m";s=t.exec(e);){if("m"===s[2]){const e=s[1].split(";");for(let t=0;t<e.length;t++){const s=e[t];if(""===s)h.push(0);else{if(-1===s.search(/^\d+$/)){h.length=0;break}h.push(parseInt(s,10))}}}for(l(e.substring(p,s.index),n,r,a,i,o,c),p=t.lastIndex;h.length;){const e=h.shift();switch(e){case 0:n=r=[],a=!1,i=!1,o=!1;break;case 1:case 5:a=!0;break;case 4:i=!0;break;case 7:o=!0;break;case 21:case 22:a=!1;break;case 24:i=!1;break;case 27:o=!1;break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:n=e-30;break;case 38:try{n=d(h)}catch(e){h.length=0}break;case 39:n=[];break;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:r=e-40;break;case 48:try{r=d(h)}catch(e){h.length=0}break;case 49:r=[];break;case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:n=e-90+8;break;case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:r=e-100+8}}}return c.join("")}}(n||(n={}))},38500:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r,_:()=>a});var n=s(66065);const r=new n.Token("@jupyterlab/rendermime:IRenderMimeRegistry"),a=new n.Token("@jupyterlab/rendermime:ILatexTypesetter")},10994:(e,t,s)=>{"use strict";s.d(t,{pY:()=>i,BP:()=>o,oI:()=>l,FK:()=>c,UH:()=>d,cw:()=>u,zt:()=>h,lH:()=>p,ND:()=>f});var n=s(17105),r=s(77031),a=s(71380);class i extends r.Widget{constructor(e){super(),this.mimeType=e.mimeType,this.sanitizer=e.sanitizer,this.resolver=e.resolver,this.linkHandler=e.linkHandler,this.translator=e.translator||n.nullTranslator,this.latexTypesetter=e.latexTypesetter,this.node.dataset.mimeType=this.mimeType}async renderModel(e){for(;this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.toggleClass("jp-mod-trusted",e.trusted),await this.render(e);const{fragment:t}=e.metadata;t&&this.setFragment(t)}setFragment(e){}}class o extends i{constructor(e){super(e),this.addClass("jp-RenderedHTMLCommon")}setFragment(e){let t;try{t=this.node.querySelector(e)}catch(e){console.warn("Unable to set URI fragment identifier.",e)}t&&t.scrollIntoView()}}class l extends o{constructor(e){super(e),this.addClass("jp-RenderedHTML")}render(e){return a.NN({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class c extends i{constructor(e){super(e),this.addClass("jp-RenderedLatex")}render(e){return a.K3({host:this.node,source:String(e.data[this.mimeType]),shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class d extends i{constructor(e){super(e),this.addClass("jp-RenderedImage")}render(e){const t=e.metadata[this.mimeType];return a.co({host:this.node,mimeType:this.mimeType,source:String(e.data[this.mimeType]),width:t&&t.width,height:t&&t.height,needsBackground:e.metadata.needs_background,unconfined:t&&t.unconfined})}}class u extends o{constructor(e){super(e),this.addClass("jp-RenderedMarkdown")}render(e){return a.ap({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,resolver:this.resolver,sanitizer:this.sanitizer,linkHandler:this.linkHandler,shouldTypeset:this.isAttached,latexTypesetter:this.latexTypesetter,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class h extends i{constructor(e){super(e),this.addClass("jp-RenderedSVG")}render(e){const t=e.metadata[this.mimeType];return a.KB({host:this.node,source:String(e.data[this.mimeType]),trusted:e.trusted,unconfined:t&&t.unconfined,translator:this.translator})}onAfterAttach(e){this.latexTypesetter&&this.latexTypesetter.typeset(this.node)}}class p extends i{constructor(e){super(e),this.addClass("jp-RenderedText")}render(e){return a.IY({host:this.node,sanitizer:this.sanitizer,source:String(e.data[this.mimeType]),translator:this.translator})}}class f extends i{constructor(e){super(e),this.addClass("jp-RenderedJavaScript")}render(e){const t=this.translator.load("jupyterlab");return a.IY({host:this.node,sanitizer:this.sanitizer,source:t.__("JavaScript output is disabled in JupyterLab"),translator:this.translator})}}},20694:(e,t,s)=>{var n,r=/[&<>"'`]/g,a=RegExp(r.source),i="object"==typeof s.g&&s.g&&s.g.Object===Object&&s.g,o="object"==typeof self&&self&&self.Object===Object&&self,l=i||o||Function("return this")(),c=(n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},function(e){return null==n?void 0:n[e]}),d=Object.prototype.toString,u=l.Symbol,h=u?u.prototype:void 0,p=h?h.toString:void 0;e.exports=function(e){var t;return(e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return p?p.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t))&&a.test(e)?e.replace(r,c):e}}}]);
//# sourceMappingURL=4087.c3265a0572a4a7dd9c00.js.map