(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{4184:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var u=typeof o;if("string"===u||"number"===u)e.push(o);else if(Array.isArray(o)){if(o.length){var l=r.apply(null,o);l&&e.push(l)}}else if("object"===u){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,u=n(o(7294)),l=o(6273),c=o(2725),a=o(3462),f=o(1018),s=o(7190),i=o(1210),p=o(8684);const d={};function y(e,t,o,n){if(!e)return;if(!l.isLocalURL(t))return;Promise.resolve(e.prefetch(t,o,n)).catch((e=>{0}));const r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[t+"%"+o+(r?"%"+r:"")]=!0}var b=u.default.forwardRef((function(e,t){let o;const{href:n,as:b,children:v,prefetch:g,passHref:h,replace:O,shallow:j,scroll:m,locale:x,onClick:C,onMouseEnter:_,onTouchStart:M,legacyBehavior:P=!0!==Boolean(!1)}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,!P||"string"!==typeof o&&"number"!==typeof o||(o=u.default.createElement("a",null,o));const w=!1!==g;let R=u.default.useContext(a.RouterContext);const E=u.default.useContext(f.AppRouterContext);E&&(R=E);const{href:S,as:k}=u.default.useMemo((()=>{const[e,t]=l.resolveHref(R,n,!0);return{href:e,as:b?l.resolveHref(R,b):t||e}}),[R,n,b]),T=u.default.useRef(S),I=u.default.useRef(k);let D;P&&(D=u.default.Children.only(o));const A=P?D&&"object"===typeof D&&D.ref:t,[U,B,N]=s.useIntersection({rootMargin:"200px"}),Z=u.default.useCallback((e=>{I.current===k&&T.current===S||(N(),I.current=k,T.current=S),U(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[k,A,S,N,U]);u.default.useEffect((()=>{const e=B&&w&&l.isLocalURL(S),t="undefined"!==typeof x?x:R&&R.locale,o=d[S+"%"+k+(t?"%"+t:"")];e&&!o&&y(R,S,k,{locale:t})}),[k,S,B,x,w,R]);const H={ref:Z,onClick:e=>{P||"function"!==typeof C||C(e),P&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,c,a,f,s,i){const{nodeName:p}=e.currentTarget;if("A"===p.toUpperCase()&&(function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(o)))return;e.preventDefault();const d=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:c,locale:f,scroll:a}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!i})};s?u.default.startTransition(d):d()}(e,R,S,k,O,j,m,x,Boolean(E),w)},onMouseEnter:e=>{P||"function"!==typeof _||_(e),P&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),!w&&E||l.isLocalURL(S)&&y(R,S,k,{priority:!0})},onTouchStart:e=>{P||"function"!==typeof M||M(e),P&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),!w&&E||l.isLocalURL(S)&&y(R,S,k,{priority:!0})}};if(!P||h||"a"===D.type&&!("href"in D.props)){const e="undefined"!==typeof x?x:R&&R.locale,t=R&&R.isLocaleDomain&&i.getDomainLocale(k,e,R.locales,R.domainLocales);H.href=t||p.addBasePath(c.addLocale(k,e,R&&R.defaultLocale))}return P?u.default.cloneElement(D,H):u.default.createElement("a",Object.assign({},L,H),o)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:a}=e;const f=a||!u,[s,i]=n.useState(!1),[p,d]=n.useState(null);n.useEffect((()=>{if(u){if(f||s)return;if(p&&p.tagName){const e=function(e,t,o){const{id:n,observer:r,elements:u}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},o=c.find((e=>e.root===t.root&&e.margin===t.margin));let n;if(o&&(n=l.get(o),n))return n;const r=new Map,u=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return n={id:t,observer:u,elements:r},c.push(t),l.set(t,n),n}(o);return u.set(e,t),r.observe(e),function(){if(u.delete(e),r.unobserve(e),0===u.size){r.disconnect(),l.delete(n);const e=c.findIndex((e=>e.root===n.root&&e.margin===n.margin));e>-1&&c.splice(e,1)}}}(p,(e=>e&&i(e)),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){const e=r.requestIdleCallback((()=>i(!0)));return()=>r.cancelIdleCallback(e)}}),[p,f,o,t,s]);const y=n.useCallback((()=>{i(!1)}),[]);return[d,s,y]};var n=o(7294),r=o(9311);const u="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294));const r=n.default.createContext(null);t.AppRouterContext=r;const u=n.default.createContext(null);t.LayoutRouterContext=u;const l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;const c=n.default.createContext(null);t.TemplateContext=c},9008:function(e,t,o){e.exports=o(5443)},1664:function(e,t,o){e.exports=o(8418)},1163:function(e,t,o){e.exports=o(387)},9396:function(e,t,o){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}o.d(t,{Z:function(){return n}})},9534:function(e,t,o){"use strict";function n(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}o.d(t,{Z:function(){return n}})}}]);