(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{311:function(t,e,n){"use strict";var o={props:{title:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-flex-1"},[n("h1",{staticClass:"uk-text-center uk-flex-1",staticStyle:{"font-size":"30px","padding-top":"20px","font-weight":"400",color:"#37474f"}},[t._v("\n\t\t"+t._s(t.title)+"\n\t")])])}),[],!1,null,null,null);e.a=component.exports},356:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var o=n("83ab"),r=n("d1e7"),i=n("5c6c"),a=n("fc6a"),u=n("c04e"),c=n("5135"),l=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=o?s:function(t,e){if(t=a(t),e=u(e,!0),l)try{return s(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var o=n("83ab"),r=n("d039"),i=n("cc12");t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var o=n("a691"),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},"23e7":function(t,e,n){var o=n("da84"),r=n("06cf").f,i=n("9112"),a=n("6eeb"),u=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var s,n,d,p,f,v=t.target,m=t.global,b=t.stat;if(s=m?o:b?o[v]||u(v,{}):(o[v]||{}).prototype)for(n in e){if(p=e[n],d=t.noTargetGet?(f=r(s,n))&&f.value:s[n],!l(m?n:v+(b?".":"#")+n,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),a(s,n,p,t)}}},"241c":function(t,e,n){var o=n("ca84"),i=n("7839").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),r=n("825a"),i=n("d039"),a=n("ad6d"),u="toString",c=RegExp.prototype,l=c[u],s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=u;(s||d)&&o(RegExp.prototype,u,(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},"428f":function(t,e,n){var o=n("da84");t.exports=o},"44ad":function(t,e,n){var o=n("d039"),r=n("c6b6"),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},"4d64":function(t,e,n){var o=n("fc6a"),r=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var u,c=o(e),l=r(c.length),s=i(a,l);if(t&&n!=n){for(;l>s;)if((u=c[s++])!=u)return!0}else for(;l>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,e,n){var o=n("a691"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var o=n("c430"),r=n("c6cd");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var o=n("d066"),r=n("241c"),i=n("7418"),a=n("825a");t.exports=o("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"60da":function(t,e,n){"use strict";var o=n("83ab"),r=n("d039"),i=n("df75"),a=n("7418"),u=n("d1e7"),c=n("7b0b"),l=n("44ad"),s=Object.assign,d=Object.defineProperty;t.exports=!s||r((function(){if(o&&1!==s({b:1},s(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||i(s({},e)).join("")!=r}))?function(t,e){for(var n=c(t),r=arguments.length,s=1,d=a.f,f=u.f;r>s;)for(var p,v=l(arguments[s++]),m=d?i(v).concat(d(v)):i(v),h=m.length,b=0;h>b;)p=m[b++],o&&!f.call(v,p)||(n[p]=v[p]);return n}:s},"69f3":function(t,e,n){var o,r,i,a=n("7f9a"),u=n("da84"),c=n("861d"),l=n("9112"),s=n("5135"),d=n("f772"),f=n("d012"),p=u.WeakMap,v=function(t){return i(t)?r(t):o(t,{})},m=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var h=new p,b=h.get,g=h.has,y=h.set;o=function(t,e){return y.call(h,t,e),e},r=function(t){return b.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var k=d("state");f[k]=!0,o=function(t,e){return l(t,k,e),e},r=function(t){return s(t,k)?t[k]:{}},i=function(t){return s(t,k)}}t.exports={set:o,get:r,has:i,enforce:v,getterFor:m}},"6eeb":function(t,e,n){var o=n("da84"),r=n("9112"),i=n("5135"),a=n("ce4e"),u=n("8925"),c=n("69f3"),l=c.get,s=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||r(n,"name",e),s(n).source=d.join("string"==typeof e?e:"")),t!==o?(c?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=n:r(t,e,n)):l?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var o=n("1d80");t.exports=function(t){return Object(o(t))}},"7f9a":function(t,e,n){var o=n("da84"),r=n("8925"),i=o.WeakMap;t.exports="function"==typeof i&&/native code/.test(r(i))},"825a":function(t,e,n){var o=n("861d");t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var o=n("d039");t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8925:function(t,e,n){var o=n("c6cd"),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},"90e3":function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},9112:function(t,e,n){var o=n("83ab"),r=n("9bf2"),i=n("5c6c");t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var o=n("d039"),r=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==l||n!=c&&("function"==typeof e?o(e):!!e)},a=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var o=n("83ab"),r=n("0cfb"),i=n("825a"),a=n("c04e"),u=Object.defineProperty;e.f=o?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},a691:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},ad6d:function(t,e,n){"use strict";var o=n("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c04e:function(t,e,n){var o=n("861d");t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var o=n("da84"),r=n("ce4e"),i="__core-js_shared__",a=o[i]||r(i,{});t.exports=a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var o=n("5135"),r=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,u=r(t),c=0,l=[];for(n in u)!o(a,n)&&o(u,n)&&l.push(n);for(;e.length>c;)o(u,n=e[c++])&&(~i(l,n)||l.push(n));return l}},cc12:function(t,e,n){var o=n("da84"),r=n("861d"),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},cca6:function(t,e,n){var o=n("23e7"),r=n("60da");o({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},ce4e:function(t,e,n){var o=n("da84"),r=n("9112");t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},d066:function(t,e,n){var o=n("428f"),r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var o=n("ca84"),r=n("7839");t.exports=Object.keys||function(t){return o(t,r)}},e893:function(t,e,n){var o=n("5135"),r=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=r(e),u=a.f,c=i.f,l=0;l<n.length;l++){var s=n[l];o(t,s)||u(t,s,c(e,s))}}},f772:function(t,e,n){var o=n("5692"),r=n("90e3"),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"InputFacade",(function(){return _})),n.d(e,"facade",(function(){return k})),n.d(e,"tokens",(function(){return i})),n.d(e,"masker",(function(){return g})),n.d(e,"filter",(function(){return U})),"undefined"!=typeof window){var o=window.document.currentScript,r=o&&o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);r&&(n.p=r[1])}var i={"#":{pattern:/\d/},X:{pattern:/[0-9a-z]/i},S:{pattern:/[a-z]/i},A:{pattern:/[a-z]/i,transform:t=>t.toLocaleUpperCase()},a:{pattern:/[a-z]/i,transform:t=>t.toLocaleLowerCase()},"\\":{escape:!0}};n("cca6"),n("25f0");const a="__input-facade__";function u(t){this.masked=this.unmasked=t||""}function c(){return new CustomEvent("input",{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function l(t,e){return(Array.isArray(t)||"string"==typeof t)&&(t={mask:t}),Object.assign(t||{},e)}function s(t){const e=t instanceof HTMLInputElement?t:t.querySelector("input");if(!e)throw new Error("facade directive requires an input element");return e}function d(t){const{target:e,detail:n}=t;if(n&&n.facade)return!1;t.stopPropagation();const o=e.value,r=e.selectionEnd,{oldValue:i}=e[a];p(e,null,{emit:!1},t),f(t,o,r),i!==e.value&&e.dispatchEvent(c())}function f(t,e,n){const{target:o}=t,r=["text","tel","search",null].includes(o.getAttribute("type")),i=o[a]&&o[a].config;if(o!==document.activeElement||!r||!i.mask)return;const u=["insertText","insertFromPaste"].includes(t.inputType),c=u&&n==e.length;let l=u&&e[n-1];const s=o.value.toLocaleLowerCase();let d=n;if(c)d=s.length;else if(l){l=l.toLocaleLowerCase();let t=d;for(;t<=s.length&&s.charAt(t-1)!==l;)t++;d=t<=s.length?t:d-1}o.setSelectionRange(d,d),setTimeout((function(){o.setSelectionRange(d,d)}),0)}function p(t,e,{emit:n=!0,force:o=!1}={},r){let{config:i,oldValue:u}=t[a],l=e&&e.data.model?e.data.model.value:t.value;if(u=u||"",l=l||"",o||u!==l){let e=g(l,i);if(r&&"function"==typeof i.formatter){const n=i.formatter(e,r);if("string"==typeof n)e=g(n,i);else if(!1===n)return void(t.value=u)}t[a].oldValue=e.masked,t.unmaskedValue=e.unmasked,t.value!==e.masked&&(t.value=e.masked),n&&t.dispatchEvent(c())}}let v=i;function m(t){t&&(v=t)}function h(t,e){const n=e.masks.slice().sort(((t,e)=>t.length-e.length)),o=t=>Object.assign({},e,t),r=(e,n)=>{const r=b(t,o({mask:n})),i=e.unmasked.length;return r.unmasked.length>i?r:e};if(!n.length)return new u;const i=n.shift();let a=b(t,o({mask:i}));for(;n.length;)a=r(a,n.shift());return a}function b(t,e){let{mask:n="",tokens:o,prefill:r=!1,short:i=!1}=e;o=o?Object.assign({},v,o):v;let a=new u,c=!1,l=0,s=0,d="";for(;s<n.length;){const e=n[s],r=o[e];let i=t[l];if(!i&&r)break;if(r&&!c){if(r.escape){c=!0,s++;continue}r.pattern.test(i)&&(i=r.transform?r.transform(i):i,a.unmasked+=i,a.masked+=d+i,d="",s++),l++}else d+=e,i===e&&l++,c=!1,s++}return(r&&!a.unmasked||!i&&a.unmasked)&&(a.masked+=d),a}function g(t,e){return t=(t||"").toString(),(e=l(e)).mask?Array.isArray(e.mask)?h(t,Object.assign({},e,{masks:e.mask})):b(t,e):new u(t)}const y=a;var k={bind:(t,{value:e,modifiers:n},o)=>{(t=s(t)).addEventListener("input",d,!0);const r=l(e,n);t[y]={config:r},p(t,o,{force:r.prefill})},update:(t,{value:e,oldValue:n,modifiers:o},r)=>{t=s(t),e!==n?(t[y].config=l(e,o),p(t,r,{force:!0})):p(t,r)},unbind:t=>t.removeEventListener("input",d,!0)};function x(t,e,n,o,r,i,a,u){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=u?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var s=l.render;l.render=function(t,e){return c.call(e),s(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var _=x({name:"InputFacade",props:{formatter:Function,lazy:{type:Boolean,default:!1},mask:[String,Array],masked:{type:Boolean,default:!1},prefill:{type:Boolean,default:!1},short:{type:Boolean,default:!1},tokens:Object,value:[String,Number]},directives:{facade:k},data(){return{maskedValue:this.value,unmaskedValue:null}},watch:{value(t){t!==this.emittedValue&&(this.maskedValue=t)},mask(t){t||(this.maskedValue=this.unmaskedValue)},masked(){this.emitInput()}},computed:{config(){return{mask:this.mask,tokens:this.tokens,formatter:this.formatter,prefill:this.prefill,short:this.short}},emittedValue(){return this.mask&&this.masked?this.maskedValue:this.unmaskedValue}},methods:{onInput({target:t}){this.maskedValue=t.value,this.unmaskedValue=t.unmaskedValue,this.lazy||this.emitInput()},onChange(){this.$emit("change",this.emittedValue),this.lazy&&this.emitInput()},emitInput(){this.$emit("input",this.emittedValue)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"facade",rawName:"v-facade",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.maskedValue},on:{input:t.onInput,change:t.onChange,blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")}}})}),[],!1,null,null,null).exports;function w(t,e={}){e.tokens&&m(e.tokens),t.component(_.name,_),t.directive(e.name||"facade",k),t.filter(e.name||"facade",U)}function U(t,e){return g(t,e).masked}var C=w;"undefined"!=typeof window&&window.Vue&&window.Vue.use(w),e.default=C},fc6a:function(t,e,n){var o=n("44ad"),r=n("1d80");t.exports=function(t){return o(r(t))}}})},391:function(t,e,n){var content=n(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("aa416540",content,!0,{sourceMap:!1})},681:function(t,e,n){"use strict";n(391)},682:function(t,e,n){var o=n(7)(!1);o.push([t.i,".img-custom{border-radius:8px;display:block;margin-left:auto;margin-right:auto}img:hover{box-shadow:0 0 2px 1px rgba(0,140,186,.5)}.title-custom{font-size:6.5vh}.title-custom4-5{font-size:4.5vh}.title-custom3-5{font-size:3.5vh}.title-custom3{font-size:3vh}.subtitle-custom2-5{font-size:2.5vh}",""]),t.exports=o},736:function(t,e,n){"use strict";n.r(e);n(183);var o=n(311),r=n(39),c=n(59),l=n(108),d=n(115),f=n(123),v=n(356),m={middleware:"authenticated",components:{Title:o.a,StarRating:function(){return Promise.all([n.e(47),n.e(45)]).then(n.bind(null,746))}},directives:{facade:v.facade},data:function(){return{uuidMovie:"",ratingAux:0,movie:{uuid:"",title:"",runtime:0,year:0,genres:"",genresArray:[],movieTypeArray:[],movieType:"",country:"",language:"",isReleased:"",synopsis:"",dateReleasedUnformatted:"",dateReleased:"",imageLink:"",actors:"",actorsNames:"",directors:"",directorsNames:"",writes:"",writersNames:"",producers:"",producersNames:"",numVotes:0,avgRating:0},okPrincipal:!1,okSecundary:!1,okProduction:!1,dialogConfirmSave:!1,enableSave:!0,loggedUserObject:{},notification:{title:"",description:""},directors:[],actors:[],writers:[],producers:[],selfs:[],genreTypes:[{value:"COMEDY",text:"Comédia"},{value:"SCI_FI",text:"Ficção Científica"},{value:"HORROR",text:"Terror"},{value:"ROMANCE",text:"Romance"},{value:"ACTION",text:"Ação"},{value:"THRILLER",text:"Thriller"},{value:"DRAMA",text:"Drama"},{value:"MYSTERY",text:"Mistério"},{value:"CRIME",text:"Crime"},{value:"ANIMATION",text:"Animação"},{value:"ADVENTURE",text:"Aventura"},{value:"FANTASY",text:"Fantasia"},{value:"SUPERHERO",text:"Super-herói"}],movieTypes:[{value:"MOVIE",text:"Filme"},{value:"SHORT",text:"Curta"},{value:"DOCUMENTARY",text:"Documentário"},{value:"VIDEO",text:"Vídeo"}],dialogAvaliate:!1,movieUser:{uuid:"",movieUuid:"",userUuid:"",rating:0,favorite:!1,watchlist:!1,isRated:!1,movieType:""}}},mounted:function(){this.uuidMovie=this.$route.params.uuid,this.findMovieByUuid(this.uuidMovie)},methods:{findMovieByUuid:function(t){var e=this;t&&l.a.findByUuid(t).then((function(t){e.movie=t.data,e.movie.dateReleasedUnformatted=new Date(t.data.dateReleased).toLocaleString().slice(0,10),e.movieUser.movieUuid=e.movie.uuid,e.movieUser.movieType=e.movie.movieType,e.findMovieArtistsRelations(e.movie.uuid),e.loggedUser()})).catch((function(t){var n="Houve um erro inesperado.";t.response&&400===t.response.status&&(n=t.response.data.message),e.showNotification(n,"bottom-right","danger")}))},findMovieArtistsRelations:function(t){var e=this;f.a.findByMovieUuid(t).then((function(t){console.log(t.data),t.data&&t.data.length>0&&t.data.forEach((function(t){"DIRECTOR"==t.job?e.directors.push(t):"WRITER"==t.job?e.writers.push(t):"ACTOR"==t.job?e.actors.push(t):"PRODUCER"==t.job?e.producers.push(t):"SELF"==t.job&&e.selfs.push(t)}))})).catch((function(t){var n="Houve um erro inesperado.";t.response&&400===t.response.status&&(n=t.response.data.message),e.showNotification(n,"bottom-right","danger")}))},loggedUser:function(){var t=this;r.a.getActualLogin().then((function(e){c.a.findByLoginUuid(e.data.uuid).then((function(e){t.loggedUserObject=e.data,t.movieUser.userUuid=t.loggedUserObject.uuid,t.findMovieUserRelation()})).catch((function(e){var n="Não foi possível buscar o usuário logado.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))})).catch((function(e){var n="Não foi possível buscar o usuário logado.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},showNotification:function(text,t,e,n){var o={};o.timeout=n?!n:3e3,e&&(o.status=e),t&&(o.pos=t),UIkit.notification(text,o)},formatDate:function(t){var e=new Array;return e[0]=t.slice(0,2),e[1]=t.slice(3,5),e[2]=t.slice(6,10),e[2]+"-"+e[1]+"-"+e[0]},alreadyRelased:function(t,e){var n=new Array;n[0]=t.slice(0,4),n[1]=t.slice(5,7),n[2]=t.slice(8,10);var o=new Array;return o[0]=e.slice(0,4),o[1]=e.slice(5,7),o[2]=e.slice(8,10),parseInt(n[0],10)>=parseInt(o[0],10)&&(parseInt(n[0],10)>parseInt(o[0],10)||!(parseInt(n[0],10)!=parseInt(o[0],10)||!parseInt(n[1],10>=parseInt(o[1],10)))&&(parseInt(n[1],10)>parseInt(o[1],10)||parseInt(n[1],10)==parseInt(o[1],10)&&parseInt(n[2],10)>=parseInt(o[2],10)))},redirectPage:function(t){this.$router.push({path:t})},findMovieUserRelation:function(){var t=this;d.a.findByUserUuidAndMovieUuid(this.movieUser.userUuid,this.movieUser.movieUuid).then((function(e){null!=e.data&&(t.movieUser=e.data,t.ratingAux=t.movieUser.rating)})).catch((function(e){var n="Não foi possível obter a relação do usuário com este filme.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},saveUserMovie:function(){var t=this;d.a.save(this.movieUser).then((function(e){t.dialogAvaliate=!1,t.movieUser=e.data,t.ratingAux=t.movieUser.rating,t.showNotification("Salvo com sucesso!","bottom-right","success"),t.findMovieByUuid(t.uuidMovie)})).catch((function(e){var n="Não foi possível salvar os dados do filme para este usuário.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},changeFavorite:function(){var t=this;this.movieUser.uuid?d.a.changeFavorite(this.movieUser.uuid).then((function(e){var n;0==e.data?n="Ocorreu um erro na operação!":t.movieUser.favorite?n="Filme adicionado aos favoritos!":t.movieUser.favorite||(n="Filme retirado dos favoritos!"),t.showNotification(n,"bottom-right","success"),t.findMovieByUuid(t.uuidMovie)})).catch((function(e){var n="Não foi possível realizar a operação.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")})):this.saveUserMovie()},changeWatchlist:function(){var t=this;this.movieUser.uuid?d.a.changeWatchlist(this.movieUser.uuid).then((function(e){var n;0==e.data?n="Ocorreu um erro na operação.":t.movieUser.watchlist?n="Filme adicionado à watchlist!":t.movieUser.watchlist||(n="Filme retirado da watchlist!"),t.showNotification(n,"bottom-right","success"),t.findMovieByUuid(t.uuidMovie)})).catch((function(e){var n="Não foi possível realizar a operação.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")})):this.saveUserMovie()},changeRating:function(t){var e=this;this.movieUser.uuid?d.a.changeRating(this.movieUser.uuid,t).then((function(n){var o;e.dialogAvaliate=!1,e.ratingAux=t,0==n.data?o="Ocorreu um erro na operação.":0!=e.movieUser.rating?o="Nota Atribuída!":0==e.movieUser.rating&&(o="Nota retirada!"),e.showNotification(o,"bottom-right","success"),e.findMovieByUuid(e.uuidMovie)})).catch((function(t){var n="Não foi possível realizar a operação.";t.response&&400===t.response.status&&(n=t.response.data.message),e.showNotification(n,"bottom-right","danger")})):this.saveUserMovie()},checkRemoveRating:function(){0!=this.movieUser.rating&&0==this.ratingAux&&(this.movieUser.rating=this.ratingAux,this.saveUserMovie())}}},h=(n(681),n(4)),y=n(58),k=n.n(y),x=n(92),_=n(23),w=n(310),U=n(308),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-bg-black-0",attrs:{id:"sc-page-wrapper"}},[n("div",{staticClass:"sc-top-bar",attrs:{id:"sc-page-top-bar","data-uk-sticky":"offset:48; show-on-up: true; animation: uk-animation-slide-top-medium"}},[n("div",{staticClass:"sc-top-bar-content uk-flex uk-flex-1"},[n("div",{staticClass:"sc-top-bar-title uk-flex-1"},[t.uuidMovie?n("Title",{attrs:{title:t.movie.title}}):t._e()],1)])]),t._v(" "),n("div",{attrs:{id:"sc-page-content"}},[n("div",{attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-text-center"},[t.movie.imageLink?n("div",{staticClass:"uk-width-1",staticStyle:{"border-style":"solid","background-color":"black"}},[n("img",{staticClass:"img-custom",attrs:{src:t.movie.imageLink,alt:""}})]):t._e()]),t._v(" "),n("div",{staticClass:"uk-width-auto uk-text-left md-color-white-0 title-custom sc-padding"},[n("div",{staticClass:"uk-width-1-1"},[t._v("\n\t\t\t\t\t"+t._s(t.movie.title)+"\n\t\t\t\t")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"uk-width-auto uk-text-right sc-padding sc-padding-remove-right",staticStyle:{"padding-top":"30px"}},[n("div",[t.movieUser.watchlist?n("button",{staticClass:"sc-padding-remove uk-button md-color-yellow-700 mdi mdi-bookmark-check md-color-black-0",staticStyle:{"margin-right":"0px"},attrs:{"uk-tooltip":"Retirar da watchlist"},on:{click:function(e){t.movieUser.watchlist=!1,t.changeWatchlist()}}}):n("button",{staticClass:"sc-padding-remove uk-button md-color-white-0 mdi mdi-bookmark-plus-outline md-color-black-0",staticStyle:{"margin-right":"0px"},attrs:{"uk-tooltip":"Adicionar à watchlist"},on:{click:function(e){t.movieUser.watchlist=!0,t.changeWatchlist()}}}),t._v(" "),t.movieUser.favorite?n("button",{staticClass:"sc-padding-remove uk-button md-color-red-700 mdi mdi-heart md-color-black-0",attrs:{"uk-tooltip":"Desfavoritar"},on:{click:function(e){t.movieUser.favorite=!1,t.saveUserMovie()}}}):t._e(),t._v(" "),t.movieUser.favorite?t._e():n("button",{staticClass:"sc-padding-remove uk-button md-color-white-0 mdi mdi-heart-outline md-color-black-0",attrs:{"uk-tooltip":"Favoritar"},on:{click:function(e){t.movieUser.favorite=!0,t.saveUserMovie()}}})])]),t._v(" "),n("div",{staticClass:"uk-width-auto sc-padding md-color-white-0 title-custom4-5 uk-text-right"},[n("button",{staticClass:"uk-button md-bg-yellow-800  md-color-black-0",staticStyle:{"margin-right":"15px"}},[0==t.movieUser.rating?n("button",{staticClass:"mdi mdi-star-outline title-custom3",attrs:{"uk-tooltip":"Sua avaliação"},on:{click:function(e){t.dialogAvaliate=!0}}},[t._v("\n\t\t\t\t\t\tAvaliar\n\t\t\t\t\t")]):t._e(),t._v(" "),0!=t.movieUser.rating?n("button",{staticClass:"mdi mdi-star md-color-black-0 title-custom3-5",attrs:{"uk-tooltip":"Sua avaliação"},on:{click:function(e){t.dialogAvaliate=!0}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.movieUser.rating)+"\n\t\t\t\t\t")]):t._e()]),t._v(" "),n("span",{staticClass:"uk-text-right",attrs:{"uk-tooltip":"Nota média dos usuários"}},[t._v("\n\t\t\t\t\t"+t._s(t.movie.avgRating)+" / 10\n\t\t\t\t")]),t._v(" "),n("span",{staticClass:"md-color-grey-400 subtitle-custom",attrs:{"uk-tooltip":"Total de votos"}},[t._v("\n\t\t\t\t\t("+t._s(t.movie.numVotes)+")\n\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("span",{staticClass:"md-color-grey-400 subtitle-custom uk-text-left",staticStyle:{"margin-right":"30px"},attrs:{"uk-tooltip":"Ano - Duração - País"}},[t._v("\n\t\t\t\t\t"+t._s(t.movie.year)+" - "+t._s(t.movie.runtime)+" minutos - "+t._s(t.movie.country)+"\n\t\t\t\t")]),t._v(" "),t._l(t.movie.genresArray,(function(e){return n("div",{key:e,staticClass:"uk-label uk-label-warning md-color-black",staticStyle:{"margin-right":"5px"}},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])}))],2),t._v(" "),n("div",{staticClass:"uk-width-1-1 sc-padding uk-height-small"},[n("span",{staticClass:"md-color-grey-50 subtitle-custom uk-text-left",attrs:{"uk-tooltip":"Sinopse"}},[t._v("\n\t\t\t\t\t"+t._s(t.movie.synopsis)+"\n\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"uk-width-1-1 sc-padding md-color-white-0"},[n("div",{staticClass:"uk-width-1-1"},[n("span",[t._v("Direção: \n\t\t\t\t\t\t"),t._l(t.directors,(function(i){return n("span",{key:i,staticClass:"md-color-blue-200",staticStyle:{"margin-right":"5px"}},[n("button",{on:{click:function(e){return t.redirectPage("/person/view/"+i.personUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.personName)+"\n\t\t\t\t\t\t\t")])])}))],2)]),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("span",[t._v("Roteiristas: \n\t\t\t\t\t\t"),t._l(t.writers,(function(i){return n("span",{key:i,staticClass:"md-color-blue-200",staticStyle:{"margin-right":"5px"}},[n("button",{on:{click:function(e){return t.redirectPage("/person/view/"+i.personUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.personName)+";\n\t\t\t\t\t\t\t")])])}))],2)]),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("span",[t._v("Elenco: \n\t\t\t\t\t\t"),t._l(t.actors,(function(i){return n("span",{key:i,staticClass:"md-color-blue-200",staticStyle:{"margin-right":"5px"}},[n("button",{on:{click:function(e){return t.redirectPage("/person/view/"+i.personUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.personName)+";\n\t\t\t\t\t\t\t")])])}))],2)]),t._v(" "),n("div",{staticClass:"uk-width-1-1"},[n("span",[t._v("Produtores: \n\t\t\t\t\t\t"),t._l(t.producers,(function(i){return n("span",{key:i,staticClass:"md-color-blue-200",staticStyle:{"margin-right":"5px"}},[n("button",{on:{click:function(e){return t.redirectPage("/person/view/"+i.personUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.personName)+";\n\t\t\t\t\t\t\t")])])}))],2)])])],1)]),t._v(" "),n("v-dialog",{staticStyle:{"z-index":"1500"},attrs:{width:"45%",persistent:"",scrollable:""},model:{value:t.dialogAvaliate,callback:function(e){t.dialogAvaliate=e},expression:"dialogAvaliate"}},[n("v-card",[n("v-card-title",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\tAvalie o filme e contribua!\n\t\t\t")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-subtitle",[t._v("\n\t\t\t\t"+t._s(t.movie.title)+"\n\t\t\t")]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[n("StarRating",{attrs:{settings:{number:10}},model:{value:t.ratingAux,callback:function(e){t.ratingAux=e},expression:"ratingAux"}})],1),t._v(" "),0!=t.ratingAux?n("div",{staticClass:"sc-padding-top md-color-blue-grey-600",staticStyle:{"font-size":"28px","padding-top":"25px"}},[t._v("\n\t\t\t\t\t"+t._s(t.ratingAux)+"/10\n\t\t\t\t")]):t._e()]),t._v(" "),n("v-card-actions",{staticClass:"sc-padding-top"},[n("v-spacer"),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-light sc-button-flat-danger",attrs:{type:"button"},on:{click:function(e){t.dialogAvaliate=!1}}},[t._v("\n\t\t\t\t\t\tVoltar\n\t\t\t\t\t")])]),t._v(" "),n("div",[n("button",{staticClass:"sc-button sc-button-light sc-button-flat-primary",attrs:{disabled:!t.movieUser.uuid||0==t.movieUser.rating,type:"button"},on:{click:function(e){t.ratingAux=0,t.movieUser.isRated=!1,t.checkRemoveRating()}}},[t._v("\n\t\t\t\t\t\tRemover avaliação\n\t\t\t\t\t")])]),t._v(" "),n("div",{staticStyle:{"padding-left":"3px"}},[n("button",{staticClass:"sc-button sc-button-light sc-button-flat-success",attrs:{type:"button"},on:{click:function(e){t.movieUser.rated=!0,t.movieUser.rating=t.ratingAux,t.saveUserMovie()}}},[t._v("\n\t\t\t\t\t\tSalvar nota\n\t\t\t\t\t")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VCard:x.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VDialog:w.a,VSpacer:U.a})}}]);