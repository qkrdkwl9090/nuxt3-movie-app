import{F as le,s as de,c as ce,u as pe,a as ue,b as fe}from"./portal.esm.e5d5e3dc.js";import{s as M,Z as C,D as B,R as me,n as F,b as he,a as be}from"./entry.c3303402.js";import{H as Y,I as Z,E as a,M as T,Q as E,F as u,D as v,R as I,T as Q,J as z,G as d,K as S,N as _,V as J,a as V,j as W,a5 as ve,l as ge,u as f,L as ye,b as K,$ as q,a0 as ke,O as Ce}from"./swiper-vue.4f17a82e.js";var we=typeof global=="object"&&global&&global.Object===Object&&global;const xe=we;var Le=typeof self=="object"&&self&&self.Object===Object&&self,_e=xe||Le||Function("return this")();const ee=_e;var Se=ee.Symbol;const A=Se;var te=Object.prototype,Te=te.hasOwnProperty,Ee=te.toString,L=A?A.toStringTag:void 0;function Ie(e){var t=Te.call(e,L),n=e[L];try{e[L]=void 0;var r=!0}catch{}var s=Ee.call(e);return r&&(t?e[L]=n:delete e[L]),s}var $e=Object.prototype,je=$e.toString;function Be(e){return je.call(e)}var Ae="[object Null]",Oe="[object Undefined]",G=A?A.toStringTag:void 0;function Re(e){return e==null?e===void 0?Oe:Ae:G&&G in Object(e)?Ie(e):Be(e)}function De(e){return e!=null&&typeof e=="object"}var Ve="[object Symbol]";function Ne(e){return typeof e=="symbol"||De(e)&&Re(e)==Ve}var Me=/\s/;function Pe(e){for(var t=e.length;t--&&Me.test(e.charAt(t)););return t}var Ue=/^\s+/;function Fe(e){return e&&e.slice(0,Pe(e)+1).replace(Ue,"")}function O(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var H=0/0,Ze=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,We=/^0o[0-7]+$/i,Ke=parseInt;function X(e){if(typeof e=="number")return e;if(Ne(e))return H;if(O(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=O(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Fe(e);var n=ze.test(e);return n||We.test(e)?Ke(e.slice(2),n?2:8):Ze.test(e)?H:+e}var qe=function(){return ee.Date.now()};const N=qe;var Ge="Expected a function",He=Math.max,Xe=Math.min;function Ye(e,t,n){var r,s,i,c,l,b,p=0,$=!1,k=!1,w=!0;if(typeof e!="function")throw new TypeError(Ge);t=X(t)||0,O(n)&&($=!!n.leading,k="maxWait"in n,i=k?He(X(n.maxWait)||0,t):i,w="trailing"in n?!!n.trailing:w);function g(o){var y=r,x=s;return r=s=void 0,p=o,c=e.apply(x,y),c}function m(o){return p=o,l=setTimeout(j,t),$?g(o):c}function R(o){var y=o-b,x=o-p,U=t-y;return k?Xe(U,i-x):U}function h(o){var y=o-b,x=o-p;return b===void 0||y>=t||y<0||k&&x>=i}function j(){var o=N();if(h(o))return P(o);l=setTimeout(j,R(o))}function P(o){return l=void 0,w&&r?g(o):(r=s=void 0,c)}function oe(){l!==void 0&&clearTimeout(l),p=0,r=b=s=l=void 0}function ae(){return l===void 0?c:P(N())}function D(){var o=N(),y=h(o);if(r=arguments,s=this,b=o,y){if(l===void 0)return m(b);if(k)return clearTimeout(l),l=setTimeout(j,t),g(b)}return l===void 0&&(l=setTimeout(j,t)),c}return D.cancel=oe,D.flush=ae,D}var Qe="Expected a function";function Je(e,t,n){var r=!0,s=!0;if(typeof e!="function")throw new TypeError(Qe);return O(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),Ye(e,t,{leading:r,maxWait:t,trailing:s})}var ne={name:"Sidebar",extends:M,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},data(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&C.clear(this.mask),this.container=null,this.mask=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(){this.$emit("show"),this.focus(),this.autoZIndex&&C.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter(){this.enableDocumentSettings()},onBeforeLeave(){this.modal&&B.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&C.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.default&&e(this.content);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=e(this.container))),t&&t.focus()},enableDocumentSettings(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&B.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings(){this.unbindOutsideClickListener(),this.blockScroll&&B.removeClass(document.body,"p-overflow-hidden")},onKeydown(e){e.code==="Escape"&&this.hide()},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},closeButtonRef(e){this.closeButton=e},getPositionClass(){const t=["left","right","top","bottom"].find(n=>n===this.position);return t?`p-sidebar-${t}`:""},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked(e){return this.container&&!this.container.contains(e.target)}},computed:{containerClass(){return["p-sidebar p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1,"p-sidebar-full":this.fullScreen}]},fullScreen(){return this.position==="full"},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},maskClass(){return["p-sidebar-mask",this.getPositionClass(),{"p-component-overlay p-component-overlay-enter":this.modal,"p-sidebar-mask-scrollblocker":this.blockScroll,"p-sidebar-visible":this.containerVisible,"p-sidebar-full":this.fullScreen}]}},directives:{focustrap:le,ripple:me},components:{Portal:de,TimesIcon:ce}};const et=["aria-modal"],tt=["aria-label"];function nt(e,t,n,r,s,i){const c=Y("Portal"),l=Z("ripple"),b=Z("focustrap");return a(),T(c,null,{default:E(()=>[s.containerVisible?(a(),u("div",v({key:0,ref:i.maskRef,class:i.maskClass,onMousedown:t[2]||(t[2]=(...p)=>i.onMaskClick&&i.onMaskClick(...p))},e.ptm("mask")),[I(Q,{name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:E(()=>[n.visible?z((a(),u("div",v({key:0,ref:i.containerRef,class:i.containerClass,role:"complementary","aria-modal":n.modal,onKeydown:t[1]||(t[1]=(...p)=>i.onKeydown&&i.onKeydown(...p))},{...e.$attrs,...e.ptm("root")}),[d("div",v({ref:i.headerContainerRef,class:"p-sidebar-header"},e.ptm("header")),[e.$slots.header?(a(),u("div",v({key:0,class:"p-sidebar-header-content"},e.ptm("headerContent")),[S(e.$slots,"header")],16)):_("",!0),n.showCloseIcon?z((a(),u("button",v({key:1,ref:i.closeButtonRef,autofocus:"",type:"button",class:"p-sidebar-close p-sidebar-icon p-link","aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=(...p)=>i.hide&&i.hide(...p))},e.ptm("closeButton")),[S(e.$slots,"closeicon",{},()=>[(a(),T(J(n.closeIcon?"span":"TimesIcon"),v({class:["p-sidebar-close-icon ",n.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))])],16,tt)),[[l]]):_("",!0)],16),d("div",v({ref:i.contentRef,class:"p-sidebar-content"},e.ptm("content")),[S(e.$slots,"default")],16)],16,et)),[[b]]):_("",!0)]),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):_("",!0)]),_:3})}function it(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var rt=`
.p-sidebar-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}
.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}
.p-sidebar-visible {
    display: flex;
}
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}
.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}
.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}
.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Position */
.p-sidebar-left {
    justify-content: flex-start;
}
.p-sidebar-right {
    justify-content: flex-end;
}
.p-sidebar-top {
    align-items: flex-start;
}
.p-sidebar-bottom {
    align-items: flex-end;
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}
.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}
.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}
.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}
.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}
.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}
.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 64em) {
.p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
}
}
`;it(rt);ne.render=nt;var ie={name:"InputText",extends:M,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const st=["value"];function ot(e,t,n,r,s,i){return a(),u("input",v({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[0]||(t[0]=(...c)=>i.onInput&&i.onInput(...c))},e.ptm("root")),null,16,st)}ie.render=ot;const at={class:"py-4 flex items-center justify-between px-6 xl:px-8"},lt={class:"flex items-center"},dt={class:"flex items-center"},ct={class:"p-2"},pt={key:1},ut=d("h3",{class:"font-bold text-lg"},"Result",-1),ft={class:"mt-2"},mt={key:0},ht={key:1,class:"flex gap-8 flex-wrap"},bt=["onClick"],vt={class:"text-gray-300 mt-2 overflow-x-hidden text-ellipsis break-all whitespace-nowrap"},gt=["src","alt"],yt={__name:"header",setup(e){const t=pe(),n=V(!1),r=V(""),s=V(0),i=W(()=>s.value>0),c=Je(()=>{s.value=window.scrollY},100);ve(()=>{document.addEventListener("scroll",c)}),ge(()=>{container.removeEventListener("scroll",c)});const l=W(()=>`/v2/list_movies.json?query_term=${r.value}&sort_by=rating&limit=20`),b=async()=>await fe(l.value).then(g=>g.data.movies),{data:p,isFetched:$,refetch:k}=ue({queryKey:[l],queryFn:b}),w=()=>{k()};return(g,m)=>{const R=Y("Skeleton");return a(),u(q,null,[d("header",{class:ye(["w-screen | shrink-0 fixed z-10 transition-[background] duration-300",f(i)?"bg-black":"bg-transparent"])},[d("section",at,[d("div",lt,[d("p",{class:"mr-6 font-bold text-2xl text-red-600 cursor-pointer",onClick:m[0]||(m[0]=()=>("navigateTo"in g?g.navigateTo:f(F))("/"))}," Reelify ")]),d("i",{class:"pi pi-search text-white cursor-pointer",onClick:m[1]||(m[1]=()=>n.value=!0)})])],2),I(f(ne),{visible:f(n),"onUpdate:visible":m[4]||(m[4]=h=>K(n)?n.value=h:null),position:"full"},{header:E(()=>[d("section",dt,[d("p",{class:"mr-6 font-bold text-2xl text-red-600 cursor-pointer",onClick:m[2]||(m[2]=()=>("navigateTo"in g?g.navigateTo:f(F))("/"))}," Reelify "),I(f(ie),{type:"text",modelValue:f(r),"onUpdate:modelValue":m[3]||(m[3]=h=>K(r)?r.value=h:null),class:"w-full",onInput:w,placeholder:" Movie Title/IMDb Code, Actor Name/IMDb Code, Director Name/IMDb Code"},null,8,["modelValue"])])]),default:E(()=>[d("section",ct,[!f($)&&!f(r)?(a(),T(R,{key:0,width:"300"})):(a(),u("div",pt,[ut,d("section",ft,[f(p).length?(a(),u("div",ht,[(a(!0),u(q,null,ke(f(p),h=>(a(),u("div",{class:"w-[13.75rem] cursor-pointer",key:h.id,onClick:()=>f(t).show(h.id)},[d("p",vt,Ce(h.title),1),d("img",{class:"rounded-md mt-2",src:h.medium_cover_image,alt:h.title},null,8,gt)],8,bt))),128))])):(a(),u("p",mt,"Not found"))])]))])]),_:1},8,["visible"])],64)}}};var re={name:"ChevronUpIcon",extends:he};const kt=d("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),Ct=[kt];function wt(e,t,n,r,s,i){return a(),u("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ct,16)}re.render=wt;var se={name:"ScrollTop",extends:M,scrollListener:null,container:null,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},data(){return{visible:!1}},mounted(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(C.clear(this.container),this.overlay=null)},methods:{onClick(){(this.target==="window"?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener(){this.scrollListener=()=>{this.checkVisibility(this.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener(){this.scrollListener=()=>{this.checkVisibility(B.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter(e){C.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave(e){C.clear(e)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":this.target!=="window"}]},scrollTopAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:re}};const xt=["aria-label"];function Lt(e,t,n,r,s,i){return a(),T(Q,{name:"p-scrolltop",appear:"",onEnter:i.onEnter,onAfterLeave:i.onAfterLeave},{default:E(()=>[s.visible?(a(),u("button",v({key:0,ref:i.containerRef,class:i.containerClass,onClick:t[0]||(t[0]=(...c)=>i.onClick&&i.onClick(...c)),type:"button","aria-label":i.scrollTopAriaLabel},e.ptm("root")),[S(e.$slots,"icon",{},()=>[(a(),T(J(n.icon?"span":"ChevronUpIcon"),v({class:["p-scrolltop-icon",n.icon]},e.ptm("icon")),null,16,["class"]))])],16,xt)):_("",!0)]),_:3},8,["onEnter","onAfterLeave"])}function _t(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var St=`
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-scrolltop-sticky {
    position: sticky;
}
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
.p-scrolltop-enter-from {
    opacity: 0;
}
.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}
.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}
.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`;_t(St);se.render=Lt;const Tt={class:"main__container overflow-x-hidden shrink-0"},Et={class:"bg-black"},It={__name:"default",setup(e){return(t,n)=>{const r=yt;return a(),u("div",Tt,[I(r),d("main",Et,[S(t.$slots,"default",{},void 0,!0)]),I(f(se),{target:"parent"})])}}},At=be(It,[["__scopeId","data-v-b3319d6e"]]);export{At as default};
