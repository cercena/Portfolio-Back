(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{356:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),u=n("c04e"),c=n("5135"),l=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=a(t),e=u(e,!0),l)try{return s(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),u=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var s,n,d,p,f,v=t.target,m=t.global,b=t.stat;if(s=m?r:b?r[v]||u(v,{}):(r[v]||{}).prototype)for(n in e){if(p=e[n],d=t.noTargetGet?(f=o(s,n))&&f.value:s[n],!l(m?n:v+(b?".":"#")+n,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),a(s,n,p,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),u="toString",c=RegExp.prototype,l=c[u],s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=u;(s||d)&&r(RegExp.prototype,u,(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},"428f":function(t,e,n){var r=n("da84");t.exports=r},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var u,c=r(e),l=o(c.length),s=i(a,l);if(t&&n!=n){for(;l>s;)if((u=c[s++])!=u)return!0}else for(;l>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"60da":function(t,e,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),a=n("7418"),u=n("d1e7"),c=n("7b0b"),l=n("44ad"),s=Object.assign,d=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||i(s({},e)).join("")!=o}))?function(t,e){for(var n=c(t),o=arguments.length,s=1,d=a.f,f=u.f;o>s;)for(var p,v=l(arguments[s++]),m=d?i(v).concat(d(v)):i(v),h=m.length,b=0;h>b;)p=m[b++],r&&!f.call(v,p)||(n[p]=v[p]);return n}:s},"69f3":function(t,e,n){var r,o,i,a=n("7f9a"),u=n("da84"),c=n("861d"),l=n("9112"),s=n("5135"),d=n("f772"),f=n("d012"),p=u.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},m=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var h=new p,b=h.get,g=h.has,k=h.set;r=function(t,e){return k.call(h,t,e),e},o=function(t){return b.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var y=d("state");f[y]=!0,r=function(t,e){return l(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:m}},"6eeb":function(t,e,n){var r=n("da84"),o=n("9112"),i=n("5135"),a=n("ce4e"),u=n("8925"),c=n("69f3"),l=c.get,s=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=d.join("string"==typeof e?e:"")),t!==r?(c?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7f9a":function(t,e,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8925:function(t,e,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==l||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,u=o(t),c=0,l=[];for(n in u)!r(a,n)&&r(u,n)&&l.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(l,n)||l.push(n));return l}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=o(e),u=a.f,c=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||u(t,s,c(e,s))}}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"InputFacade",(function(){return w})),n.d(e,"facade",(function(){return y})),n.d(e,"tokens",(function(){return i})),n.d(e,"masker",(function(){return g})),n.d(e,"filter",(function(){return C})),"undefined"!=typeof window){var r=window.document.currentScript,o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var i={"#":{pattern:/\d/},X:{pattern:/[0-9a-z]/i},S:{pattern:/[a-z]/i},A:{pattern:/[a-z]/i,transform:t=>t.toLocaleUpperCase()},a:{pattern:/[a-z]/i,transform:t=>t.toLocaleLowerCase()},"\\":{escape:!0}};n("cca6"),n("25f0");const a="__input-facade__";function u(t){this.masked=this.unmasked=t||""}function c(){return new CustomEvent("input",{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function l(t,e){return(Array.isArray(t)||"string"==typeof t)&&(t={mask:t}),Object.assign(t||{},e)}function s(t){const e=t instanceof HTMLInputElement?t:t.querySelector("input");if(!e)throw new Error("facade directive requires an input element");return e}function d(t){const{target:e,detail:n}=t;if(n&&n.facade)return!1;t.stopPropagation();const r=e.value,o=e.selectionEnd,{oldValue:i}=e[a];p(e,null,{emit:!1},t),f(t,r,o),i!==e.value&&e.dispatchEvent(c())}function f(t,e,n){const{target:r}=t,o=["text","tel","search",null].includes(r.getAttribute("type")),i=r[a]&&r[a].config;if(r!==document.activeElement||!o||!i.mask)return;const u=["insertText","insertFromPaste"].includes(t.inputType),c=u&&n==e.length;let l=u&&e[n-1];const s=r.value.toLocaleLowerCase();let d=n;if(c)d=s.length;else if(l){l=l.toLocaleLowerCase();let t=d;for(;t<=s.length&&s.charAt(t-1)!==l;)t++;d=t<=s.length?t:d-1}r.setSelectionRange(d,d),setTimeout((function(){r.setSelectionRange(d,d)}),0)}function p(t,e,{emit:n=!0,force:r=!1}={},o){let{config:i,oldValue:u}=t[a],l=e&&e.data.model?e.data.model.value:t.value;if(u=u||"",l=l||"",r||u!==l){let e=g(l,i);if(o&&"function"==typeof i.formatter){const n=i.formatter(e,o);if("string"==typeof n)e=g(n,i);else if(!1===n)return void(t.value=u)}t[a].oldValue=e.masked,t.unmaskedValue=e.unmasked,t.value!==e.masked&&(t.value=e.masked),n&&t.dispatchEvent(c())}}let v=i;function m(t){t&&(v=t)}function h(t,e){const n=e.masks.slice().sort(((t,e)=>t.length-e.length)),r=t=>Object.assign({},e,t),o=(e,n)=>{const o=b(t,r({mask:n})),i=e.unmasked.length;return o.unmasked.length>i?o:e};if(!n.length)return new u;const i=n.shift();let a=b(t,r({mask:i}));for(;n.length;)a=o(a,n.shift());return a}function b(t,e){let{mask:n="",tokens:r,prefill:o=!1,short:i=!1}=e;r=r?Object.assign({},v,r):v;let a=new u,c=!1,l=0,s=0,d="";for(;s<n.length;){const e=n[s],o=r[e];let i=t[l];if(!i&&o)break;if(o&&!c){if(o.escape){c=!0,s++;continue}o.pattern.test(i)&&(i=o.transform?o.transform(i):i,a.unmasked+=i,a.masked+=d+i,d="",s++),l++}else d+=e,i===e&&l++,c=!1,s++}return(o&&!a.unmasked||!i&&a.unmasked)&&(a.masked+=d),a}function g(t,e){return t=(t||"").toString(),(e=l(e)).mask?Array.isArray(e.mask)?h(t,Object.assign({},e,{masks:e.mask})):b(t,e):new u(t)}const k=a;var y={bind:(t,{value:e,modifiers:n},r)=>{(t=s(t)).addEventListener("input",d,!0);const o=l(e,n);t[k]={config:o},p(t,r,{force:o.prefill})},update:(t,{value:e,oldValue:n,modifiers:r},o)=>{t=s(t),e!==n?(t[k].config=l(e,r),p(t,o,{force:!0})):p(t,o)},unbind:t=>t.removeEventListener("input",d,!0)};function _(t,e,n,r,o,i,a,u){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=u?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var s=l.render;l.render=function(t,e){return c.call(e),s(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var w=_({name:"InputFacade",props:{formatter:Function,lazy:{type:Boolean,default:!1},mask:[String,Array],masked:{type:Boolean,default:!1},prefill:{type:Boolean,default:!1},short:{type:Boolean,default:!1},tokens:Object,value:[String,Number]},directives:{facade:y},data(){return{maskedValue:this.value,unmaskedValue:null}},watch:{value(t){t!==this.emittedValue&&(this.maskedValue=t)},mask(t){t||(this.maskedValue=this.unmaskedValue)},masked(){this.emitInput()}},computed:{config(){return{mask:this.mask,tokens:this.tokens,formatter:this.formatter,prefill:this.prefill,short:this.short}},emittedValue(){return this.mask&&this.masked?this.maskedValue:this.unmaskedValue}},methods:{onInput({target:t}){this.maskedValue=t.value,this.unmaskedValue=t.unmaskedValue,this.lazy||this.emitInput()},onChange(){this.$emit("change",this.emittedValue),this.lazy&&this.emitInput()},emitInput(){this.$emit("input",this.emittedValue)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"facade",rawName:"v-facade",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.maskedValue},on:{input:t.onInput,change:t.onChange,blur:function(e){return t.$emit("blur")},focus:function(e){return t.$emit("focus")}}})}),[],!1,null,null,null).exports;function x(t,e={}){e.tokens&&m(e.tokens),t.component(w.name,w),t.directive(e.name||"facade",y),t.filter(e.name||"facade",C)}function C(t,e){return g(t,e).masked}var S=x;"undefined"!=typeof window&&window.Vue&&window.Vue.use(x),e.default=S},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}}})},392:function(t,e,n){var content=n(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("0bab19e4",content,!0,{sourceMap:!1})},683:function(t,e,n){"use strict";n(392)},684:function(t,e,n){var r=n(7)(!1);r.push([t.i,".img-custom{border-radius:8px;display:block;margin-left:auto;margin-right:auto}img:hover{box-shadow:0 0 2px 1px rgba(0,140,186,.5)}.title-custom{font-size:6.5vh}.title-custom5-5{font-size:5.5vh}.title-custom4-5{font-size:4.5vh}.title-custom3-5{font-size:3.5vh}.title-custom3{font-size:3vh}.subtitle-custom2-5{font-size:2.5vh}.normal-write{font-size:14px}.border-style{border-style:groove;width:100%}",""]),t.exports=r},737:function(t,e,n){"use strict";n.r(e);n(116),n(183);var r=n(39),o=n(59),c=n(123),l=n(119),d=n(121),f={middleware:"authenticated",components:{},directives:{facade:n(356).facade},data:function(){return{uuidPerson:"",person:{uuid:null,birthYear:null,name:"",imageLink:"",birth:null,director:!1,actor:!1,producer:!1,writer:!1,self:!1},enableSave:!0,loggedUserObject:{},notification:{title:"",description:""},directors:[],actors:[],writers:[],producers:[],selfs:[],dialogAvaliate:!1,personUser:{uuid:null,personUuid:null,userUuid:null,favorite:!1,personName:"",imageLink:""},dialogAllMovies:!1,dialogObject:{},dialogTitle:""}},mounted:function(){this.uuidPerson=this.$route.params.uuid,this.findByUuid(this.uuidPerson)},methods:{findByUuid:function(t){var e=this;t&&l.a.findById(t).then((function(n){e.person=n.data,e.personUser.personUuid=t,e.personUser.personName=e.person.name,e.personUser.imageLink=e.person.imagelink,e.loggedUser(),e.findByPersonUuid(e.person.uuid)})).catch((function(t){var n="Houve um erro inesperado.";t.response&&400===t.response.status&&(n=t.response.data.message),e.showNotification(n,"bottom-right","danger")}))},findByPersonUuid:function(t){var e=this;c.a.findByPersonUuid(t).then((function(t){t.data&&t.data.length>0&&t.data.forEach((function(t){"ACTOR"==t.job&&e.actors.push(t),"DIRECTOR"==t.job&&e.directors.push(t),"WRITER"==t.job&&e.writers.push(t),"PRODUCER"==t.job&&e.producers.push(t),"SELF"==t.job&&e.selfs.push(t)}))})).catch((function(t){var n="Houve um erro inesperado.";t.response&&400===t.response.status&&(n=t.response.data.message),e.showNotification(n,"bottom-right","danger")}))},loggedUser:function(){var t=this;r.a.getActualLogin().then((function(e){o.a.findByLoginUuid(e.data.uuid).then((function(e){t.loggedUserObject=e.data,t.personUser.userUuid=t.loggedUserObject.uuid,t.personUser.userName=t.loggedUserObject.name,t.findPersonUserRelation()})).catch((function(e){var n="Não foi possível buscar o usuário logado.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))})).catch((function(e){var n="Não foi possível buscar o usuário logado.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},findPersonUserRelation:function(){var t=this;d.a.findByUserUuidAndPersonUuid(this.personUser.userUuid,this.personUser.personUuid).then((function(e){e.data&&(t.personUser=e.data)})).catch((function(e){var n;e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},saveUserPerson:function(){var t=this;null==this.personUser.uuid&&(this.personUser.favorite=!0),d.a.save(this.personUser).then((function(e){t.personUser=e.data,t.showNotification("Favorito modificado com sucesso!","bottom-right","success")})).catch((function(e){var n="Não foi possível salvar os dados do filme para este usuário.";e.response&&400===e.response.status&&(n=e.response.data.message),t.showNotification(n,"bottom-right","danger")}))},showDialog:function(t,e){this.dialogObject=t,"ACTORS"==e?this.dialogTitle="Filmes Atuados":"DIRECTORS"==e?this.dialogTitle="Filmes Dirigidos":"WRITERS"==e?this.dialogTitle="Filmes Escritos":"PRODUCERS"==e&&(this.dialogTitle="Filmes Produzidos"),this.dialogAllMovies=!0},hideDialog:function(){this.dialogAllMovies=!1,this.dialogTitle="",this.dialogObject={}},showNotification:function(text,t,e,n){var r={};r.timeout=n?!n:3e3,e&&(r.status=e),t&&(r.pos=t),UIkit.notification(text,r)},formatDate:function(t){var e=new Array;return e[0]=t.slice(0,2),e[1]=t.slice(3,5),e[2]=t.slice(6,10),e[2]+"-"+e[1]+"-"+e[0]},redirectPage:function(t){this.$router.push({path:t})}}},v=(n(683),n(4)),m=n(58),h=n.n(m),k=n(92),y=n(23),_=n(370),w=n(310),x=n(747),C=n(365),S=n(334),O=n(366),j=n(308),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-bg-black-0",attrs:{id:"sc-page-wrapper"}},[n("div",{attrs:{id:"sc-page-content"}},[n("div",{attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[n("div",{staticClass:"uk-text-left md-color-white-0 title-custom sc-padding"},[t.person.imageLink?n("div",{staticStyle:{"border-style":"solid","background-color":"black"}},[n("img",{staticClass:"img-custom",attrs:{src:t.person.imageLink,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"md-color-white",staticStyle:{"font-size":"42px"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.person.name)+"\n\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"uk-text-left md-color-white-0 sc-padding normal-write"},[n("span",{staticClass:"md-color-grey-400 subtitle-custom uk-text-left",staticStyle:{"margin-right":"30px"},attrs:{"uk-tooltip":"Local - Ano"}},[n("div",[t.person.city&&t.person.city.length>0?n("span",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.person.city)+",\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),t.person.state&&t.person.state.length>0?n("span",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.person.state)+",\n\t\t\t\t\t\t\t")]):t._e(),t._v("\n\t\t\t\t\t\t\t"+t._s(t.person.country)+" - "+t._s(t.person.birthYear)+"\n\t\t\t\t\t\t")]),t._v(" "),n("div",[t.personUser.favorite?n("button",{staticClass:"sc-padding-remove uk-button md-color-red-700 mdi mdi-heart md-color-black-0",attrs:{"uk-tooltip":"Desfavoritar"},on:{click:function(e){t.personUser.favorite=!1,t.saveUserPerson()}}}):t._e(),t._v(" "),t.personUser.uuid&&t.personUser.favorite?t._e():n("button",{staticClass:"sc-padding-remove uk-button md-color-white-0 mdi mdi-heart-outline md-color-black-0",attrs:{"uk-tooltip":"Favoritar"},on:{click:function(e){t.personUser.favorite=!0,t.saveUserPerson()}}})])]),t._v(" "),n("div",{staticClass:"uk-margin-top"},[t.person.director?n("span",{staticClass:"uk-label md-bg-green-500"},[t._v("Diretor")]):t._e(),t._v(" "),t.person.actor?n("span",{staticClass:"uk-label md-bg-green-500"},[t._v("Ator")]):t._e(),t._v(" "),t.person.writer?n("span",{staticClass:"uk-label md-bg-green-500"},[t._v("Escritor")]):t._e(),t._v(" "),t.person.producer?n("span",{staticClass:"uk-label md-bg-green-500"},[t._v("Produtor")]):t._e()]),t._v(" "),n("div",{staticClass:"sc-padding-top"},[t._v("\n\t\t\t\t\t\t"+t._s(t.person.bio)+"\n\t\t\t\t\t")])]),t._v(" "),n("v-spacer")],1)]),t._v(" "),t.actors.length>0?n("div",{staticClass:"md-bg-blue-grey-300 uk-margin-top"},[n("v-row",{staticClass:"sc-padding-left sc-padding-right",staticStyle:{"font-size":"22px"}},[n("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\tAtuou\n\t\t\t\t")]),t._v(" "),n("v-col",{staticClass:"uk-text-right",attrs:{cols:"6"}},[n("button",{staticClass:"mdi mdi-playlist-plus",staticStyle:{"vertical-align":"middle"},on:{click:function(e){return t.showDialog(t.actors,"ACTORS")}}},[t._v("\n\t\t\t\t\t\tVer todos os filmes em que atuou\n\t\t\t\t\t")])])],1),t._v(" "),n("div",{staticClass:"uk-child-width-1-5@l sc-padding",attrs:{"data-uk-grid":""}},t._l(5,(function(i){return n("div",{key:i,staticClass:"tag"},[t.actors[i-1]?n("v-card",{attrs:{"uk-tooltip":t.actors[i-1].movieName},on:{click:function(e){return t.redirectPage("/movies/view/"+t.actors[i-1].movieUuid)}}},[t.actors[i-1].imageLinkMovie&&t.actors[i-1].imageLinkMovie.length>0?n("v-img",{attrs:{height:"125px",src:t.actors[i-1].imageLinkMovie}}):n("v-img",{attrs:{height:"100px",src:"~/assets/img/question.png"}}),t._v(" "),n("v-card-text",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.actors[i-1].movieName))])],1)],1)],1)],1):t._e()],1)})),0)],1):t._e(),t._v(" "),t.directors.length>0?n("div",{staticClass:"md-bg-blue-grey-300 uk-margin-top"},[n("v-row",{staticClass:"sc-padding-left sc-padding-right",staticStyle:{"font-size":"22px"}},[n("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\tDirigiu\n\t\t\t\t")]),t._v(" "),n("v-col",{staticClass:"uk-text-right",attrs:{cols:"6"}},[n("button",{staticClass:"mdi mdi-playlist-plus",staticStyle:{"vertical-align":"middle"},on:{click:function(e){return t.showDialog(t.directors,"DIRECTORS")}}},[t._v("\n\t\t\t\t\t\tVer todos os filmes dirigidos\n\t\t\t\t\t")])])],1),t._v(" "),n("div",{staticClass:"uk-child-width-1-5@l sc-padding",attrs:{"data-uk-grid":""}},t._l(5,(function(i){return n("div",{key:i,staticClass:"tag"},[t.directors[i-1]?n("v-card",{attrs:{"uk-tooltip":t.directors[i-1].movieName},on:{click:function(e){return t.redirectPage("/movies/view/"+t.directors[i-1].movieUuid)}}},[t.directors[i-1].imageLinkMovie&&t.directors[i-1].imageLinkMovie.length>0?n("v-img",{attrs:{height:"125px",src:t.directors[i-1].imageLinkMovie}}):n("v-img",{attrs:{height:"100px",src:"~/assets/img/question.png"}}),t._v(" "),n("v-card-text",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.directors[i-1].movieName))])],1)],1)],1)],1):t._e()],1)})),0)],1):t._e(),t._v(" "),t.writers.length>0?n("div",{staticClass:"md-bg-blue-grey-300 uk-margin-top"},[n("v-row",{staticClass:"sc-padding-left sc-padding-right",staticStyle:{"font-size":"22px"}},[n("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\tEscreveu\n\t\t\t\t")]),t._v(" "),n("v-col",{staticClass:"uk-text-right",attrs:{cols:"6"}},[n("button",{staticClass:"mdi mdi-playlist-plus",staticStyle:{"vertical-align":"middle"},on:{click:function(e){return t.showDialog(t.writers,"WRITERS")}}},[t._v("\n\t\t\t\t\t\tVer todos os filmes escritos\n\t\t\t\t\t")])])],1),t._v(" "),n("div",{staticClass:"uk-child-width-1-5@l sc-padding",attrs:{"data-uk-grid":""}},t._l(5,(function(i){return n("div",{key:i,staticClass:"tag"},[t.writers[i-1]?n("v-card",{attrs:{"uk-tooltip":t.writers[i-1].movieName},on:{click:function(e){return t.redirectPage("/movies/view/"+t.writers[i-1].movieUuid)}}},[t.writers[i-1].imageLinkMovie&&t.writers[i-1].imageLinkMovie.length>0?n("v-img",{attrs:{height:"125px",src:t.writers[i-1].imageLinkMovie}}):n("v-img",{attrs:{height:"100px",src:"~/assets/img/question.png"}}),t._v(" "),n("v-card-text",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.writers[i-1].movieName))])],1)],1)],1)],1):t._e()],1)})),0)],1):t._e(),t._v(" "),t.producers.length>0?n("div",{staticClass:"md-bg-blue-grey-300 uk-margin-top"},[n("v-row",{staticClass:"sc-padding-left sc-padding-right",staticStyle:{"font-size":"22px"}},[n("v-col",{attrs:{cols:"6"}},[t._v("\n\t\t\t\t\tProduziu\n\t\t\t\t")]),t._v(" "),n("v-col",{staticClass:"uk-text-right",attrs:{cols:"6"}},[n("button",{staticClass:"mdi mdi-playlist-plus",staticStyle:{"vertical-align":"middle"},on:{click:function(e){return t.showDialog(t.producers,"PRODUCERS")}}},[t._v("\n\t\t\t\t\t\tVer todos os filmes produzidos\n\t\t\t\t\t")])])],1),t._v(" "),n("div",{staticClass:"uk-child-width-1-5@l sc-padding",attrs:{"data-uk-grid":""}},t._l(5,(function(i){return n("div",{key:i,staticClass:"tag"},[t.producers[i-1]?n("v-card",{attrs:{"uk-tooltip":t.producers[i-1].movieName},on:{click:function(e){return t.redirectPage("/movies/view/"+t.producers[i-1].movieUuid)}}},[t.producers[i-1].imageLinkMovie&&t.producers[i-1].imageLinkMovie.length>0?n("v-img",{attrs:{height:"125px",src:t.producers[i-1].imageLinkMovie}}):n("v-img",{attrs:{height:"100px",src:"~/assets/img/question.png"}}),t._v(" "),n("v-card-text",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.producers[i-1].movieName))])],1)],1)],1)],1):t._e()],1)})),0)],1):t._e(),t._v(" "),n("v-dialog",{attrs:{"max-width":"800",persistent:""},model:{value:t.dialogAllMovies,callback:function(e){t.dialogAllMovies=e},expression:"dialogAllMovies"}},[n("v-card",[n("v-card-title",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t"+t._s(t.dialogTitle)+" \n\t\t\t\t")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"uk-child-width-1-3@l sc-padding",attrs:{"data-uk-grid":""}},t._l(t.dialogObject,(function(i){return n("div",{key:i,staticClass:"tag"},[i.movieName?n("v-card",{attrs:{"uk-tooltip":i.movieName},on:{click:function(e){return t.redirectPage("/movies/view/"+i.movieUuid)}}},[i.imageLinkMovie&&i.imageLinkMovie.length>0?n("v-img",{attrs:{height:"125px",src:i.imageLinkMovie}}):n("v-img",{attrs:{height:"100px",src:"~/assets/img/question.png"}}),t._v(" "),n("v-card-text",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i.movieName))])],1)],1)],1)],1):t._e()],1)})),0)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("div",{staticClass:"uk-margin-top uk-text-right"},[n("button",{staticClass:"sc-button uk-modal-close md-color-grey-700",attrs:{type:"button"},on:{click:function(e){t.dialogAllMovies=!1}}},[t._v("\n\t\t\t\t\t\t\tFechar\n\t\t\t\t\t\t")])])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:k.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:_.a,VDialog:w.a,VImg:x.a,VListItem:C.a,VListItemContent:S.a,VListItemTitle:S.b,VRow:O.a,VSpacer:j.a})}}]);