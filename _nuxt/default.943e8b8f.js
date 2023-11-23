import{_ as le}from"./nuxt-link.44d45c76.js";import{F as de,s as ce,c as pe,u as ue,a as fe,b as me}from"./portal.esm.4b9be9a3.js";import{s as P,Z as w,D as O,R as he,b as be,a as ve}from"./entry.524bd5ed.js";import{H as Y,I as F,E as a,M as $,Q as _,F as u,D as h,R as C,T as Q,J as Z,G as c,K as I,N as E,V as J,a as N,j as z,a5 as ge,l as ye,a4 as W,L as ke,u as b,b as K,$ as q,a0 as _e,O as Ce}from"./swiper-vue.4f17a82e.js";var xe=typeof global=="object"&&global&&global.Object===Object&&global;const we=xe;var Le=typeof self=="object"&&self&&self.Object===Object&&self,Se=we||Le||Function("return this")();const ee=Se;var Te=ee.Symbol;const R=Te;var te=Object.prototype,Ee=te.hasOwnProperty,Ie=te.toString,T=R?R.toStringTag:void 0;function $e(e){var t=Ee.call(e,T),n=e[T];try{e[T]=void 0;var s=!0}catch{}var r=Ie.call(e);return s&&(t?e[T]=n:delete e[T]),r}var je=Object.prototype,Be=je.toString;function Ae(e){return Be.call(e)}var Oe="[object Null]",Re="[object Undefined]",G=R?R.toStringTag:void 0;function De(e){return e==null?e===void 0?Re:Oe:G&&G in Object(e)?$e(e):Ae(e)}function Ve(e){return e!=null&&typeof e=="object"}var Ne="[object Symbol]";function Me(e){return typeof e=="symbol"||Ve(e)&&De(e)==Ne}var Pe=/\s/;function Ue(e){for(var t=e.length;t--&&Pe.test(e.charAt(t)););return t}var Fe=/^\s+/;function Ze(e){return e&&e.slice(0,Ue(e)+1).replace(Fe,"")}function D(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var H=0/0,ze=/^[-+]0x[0-9a-f]+$/i,We=/^0b[01]+$/i,Ke=/^0o[0-7]+$/i,qe=parseInt;function X(e){if(typeof e=="number")return e;if(Me(e))return H;if(D(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=D(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ze(e);var n=We.test(e);return n||Ke.test(e)?qe(e.slice(2),n?2:8):ze.test(e)?H:+e}var Ge=function(){return ee.Date.now()};const M=Ge;var He="Expected a function",Xe=Math.max,Ye=Math.min;function Qe(e,t,n){var s,r,i,d,l,f,p=0,j=!1,k=!1,L=!0;if(typeof e!="function")throw new TypeError(He);t=X(t)||0,D(n)&&(j=!!n.leading,k="maxWait"in n,i=k?Xe(X(n.maxWait)||0,t):i,L="trailing"in n?!!n.trailing:L);function x(o){var y=s,S=r;return s=r=void 0,p=o,d=e.apply(S,y),d}function v(o){return p=o,l=setTimeout(m,t),j?x(o):d}function B(o){var y=o-f,S=o-p,U=t-y;return k?Ye(U,i-S):U}function A(o){var y=o-f,S=o-p;return f===void 0||y>=t||y<0||k&&S>=i}function m(){var o=M();if(A(o))return g(o);l=setTimeout(m,B(o))}function g(o){return l=void 0,L&&s?x(o):(s=r=void 0,d)}function oe(){l!==void 0&&clearTimeout(l),p=0,s=f=r=l=void 0}function ae(){return l===void 0?d:g(M())}function V(){var o=M(),y=A(o);if(s=arguments,r=this,f=o,y){if(l===void 0)return v(f);if(k)return clearTimeout(l),l=setTimeout(m,t),x(f)}return l===void 0&&(l=setTimeout(m,t)),d}return V.cancel=oe,V.flush=ae,V}var Je="Expected a function";function et(e,t,n){var s=!0,r=!0;if(typeof e!="function")throw new TypeError(Je);return D(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),Qe(e,t,{leading:s,maxWait:t,trailing:r})}var ne={name:"Sidebar",extends:P,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},data(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&w.clear(this.mask),this.container=null,this.mask=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(){this.$emit("show"),this.focus(),this.autoZIndex&&w.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter(){this.enableDocumentSettings()},onBeforeLeave(){this.modal&&O.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(){this.autoZIndex&&w.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.default&&e(this.content);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=e(this.container))),t&&t.focus()},enableDocumentSettings(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&O.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings(){this.unbindOutsideClickListener(),this.blockScroll&&O.removeClass(document.body,"p-overflow-hidden")},onKeydown(e){e.code==="Escape"&&this.hide()},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},closeButtonRef(e){this.closeButton=e},getPositionClass(){const t=["left","right","top","bottom"].find(n=>n===this.position);return t?`p-sidebar-${t}`:""},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.isOutsideClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked(e){return this.container&&!this.container.contains(e.target)}},computed:{containerClass(){return["p-sidebar p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1,"p-sidebar-full":this.fullScreen}]},fullScreen(){return this.position==="full"},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},maskClass(){return["p-sidebar-mask",this.getPositionClass(),{"p-component-overlay p-component-overlay-enter":this.modal,"p-sidebar-mask-scrollblocker":this.blockScroll,"p-sidebar-visible":this.containerVisible,"p-sidebar-full":this.fullScreen}]}},directives:{focustrap:de,ripple:he},components:{Portal:ce,TimesIcon:pe}};const tt=["aria-modal"],nt=["aria-label"];function it(e,t,n,s,r,i){const d=Y("Portal"),l=F("ripple"),f=F("focustrap");return a(),$(d,null,{default:_(()=>[r.containerVisible?(a(),u("div",h({key:0,ref:i.maskRef,class:i.maskClass,onMousedown:t[2]||(t[2]=(...p)=>i.onMaskClick&&i.onMaskClick(...p))},e.ptm("mask")),[C(Q,{name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:_(()=>[n.visible?Z((a(),u("div",h({key:0,ref:i.containerRef,class:i.containerClass,role:"complementary","aria-modal":n.modal,onKeydown:t[1]||(t[1]=(...p)=>i.onKeydown&&i.onKeydown(...p))},{...e.$attrs,...e.ptm("root")}),[c("div",h({ref:i.headerContainerRef,class:"p-sidebar-header"},e.ptm("header")),[e.$slots.header?(a(),u("div",h({key:0,class:"p-sidebar-header-content"},e.ptm("headerContent")),[I(e.$slots,"header")],16)):E("",!0),n.showCloseIcon?Z((a(),u("button",h({key:1,ref:i.closeButtonRef,autofocus:"",type:"button",class:"p-sidebar-close p-sidebar-icon p-link","aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=(...p)=>i.hide&&i.hide(...p))},e.ptm("closeButton")),[I(e.$slots,"closeicon",{},()=>[(a(),$(J(n.closeIcon?"span":"TimesIcon"),h({class:["p-sidebar-close-icon ",n.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))])],16,nt)),[[l]]):E("",!0)],16),c("div",h({ref:i.contentRef,class:"p-sidebar-content"},e.ptm("content")),[I(e.$slots,"default")],16)],16,tt)),[[f]]):E("",!0)]),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):E("",!0)]),_:3})}function rt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var st=`
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
`;rt(st);ne.render=it;var ie={name:"InputText",extends:P,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const ot=["value"];function at(e,t,n,s,r,i){return a(),u("input",h({class:["p-inputtext p-component",{"p-filled":i.filled}],value:n.modelValue,onInput:t[0]||(t[0]=(...d)=>i.onInput&&i.onInput(...d))},e.ptm("root")),null,16,ot)}ie.render=at;const lt={class:"py-4 flex items-center justify-between px-6 xl:px-8"},dt={class:"flex items-center"},ct=c("i",{class:"pi pi-search text-white"},null,-1),pt=[ct],ut={class:"flex items-center"},ft={class:"p-2"},mt={key:1},ht=c("h3",{class:"font-bold text-lg"},"Result",-1),bt={class:"mt-2"},vt={key:0},gt={key:1,class:"flex gap-8 flex-wrap"},yt=["onClick"],kt={class:"text-left text-gray-300 mt-2 overflow-x-hidden text-ellipsis break-all whitespace-nowrap"},_t=["src","alt"],Ct={__name:"header",setup(e){const t=ue(),n=N(!1),s=N(""),r=N(0),i=z(()=>r.value>0),d=et(()=>{r.value=window.scrollY},100);ge(()=>{document.addEventListener("scroll",d)}),ye(()=>{container.removeEventListener("scroll",d)});const l=z(()=>`/v2/list_movies.json?query_term=${s.value}&sort_by=rating&limit=20`),f=async()=>await me(l.value).then(x=>x.data.movies),{data:p,isFetching:j,refetch:k}=fe({queryKey:[l],queryFn:f}),L=()=>{k()};return(x,v)=>{const B=le,A=Y("Skeleton");return a(),u(q,null,[c("header",{class:ke(["w-screen | shrink-0 fixed z-10 transition-[background] duration-300",b(i)?"bg-black":"bg-transparent"])},[c("section",lt,[c("div",dt,[C(B,{class:"mr-6 font-bold text-2xl text-red-600 cursor-pointer",to:"/"},{default:_(()=>[W(" Reelify ")]),_:1})]),c("button",{onClick:v[0]||(v[0]=()=>n.value=!0)},pt)])],2),C(b(ne),{visible:b(n),"onUpdate:visible":v[2]||(v[2]=m=>K(n)?n.value=m:null),position:"full"},{header:_(()=>[c("section",ut,[C(B,{class:"mr-6 font-bold text-2xl text-red-600 cursor-pointer",to:"/"},{default:_(()=>[W(" Reelify ")]),_:1}),C(b(ie),{type:"text",modelValue:b(s),"onUpdate:modelValue":v[1]||(v[1]=m=>K(s)?s.value=m:null),class:"w-full",onInput:L,placeholder:" Movie Title/IMDb Code, Actor Name/IMDb Code, Director Name/IMDb Code"},null,8,["modelValue"])])]),default:_(()=>{var m;return[c("section",ft,[b(j)?(a(),$(A,{key:0,width:"300"})):(a(),u("div",mt,[ht,c("section",bt,[(m=b(p))!=null&&m.length?(a(),u("div",gt,[(a(!0),u(q,null,_e(b(p),g=>(a(),u("button",{class:"w-[13.75rem] cursor-pointer",key:g.id,onClick:()=>b(t).show(g.id)},[c("p",kt,Ce(g.title),1),c("img",{class:"rounded-md mt-2",src:g.medium_cover_image,alt:g.title},null,8,_t)],8,yt))),128))])):(a(),u("p",vt,"Not found"))])]))])]}),_:1},8,["visible"])],64)}}};var re={name:"ChevronUpIcon",extends:be};const xt=c("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),wt=[xt];function Lt(e,t,n,s,r,i){return a(),u("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),wt,16)}re.render=Lt;var se={name:"ScrollTop",extends:P,scrollListener:null,container:null,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"}},data(){return{visible:!1}},mounted(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(w.clear(this.container),this.overlay=null)},methods:{onClick(){(this.target==="window"?window:this.$el.parentElement).scroll({top:0,behavior:this.behavior})},checkVisibility(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener(){this.scrollListener=()=>{this.checkVisibility(this.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener(){this.scrollListener=()=>{this.checkVisibility(O.getWindowScrollTop())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter(e){w.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave(e){w.clear(e)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-scrolltop p-link p-component",{"p-scrolltop-sticky":this.target!=="window"}]},scrollTopAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:re}};const St=["aria-label"];function Tt(e,t,n,s,r,i){return a(),$(Q,{name:"p-scrolltop",appear:"",onEnter:i.onEnter,onAfterLeave:i.onAfterLeave},{default:_(()=>[r.visible?(a(),u("button",h({key:0,ref:i.containerRef,class:i.containerClass,onClick:t[0]||(t[0]=(...d)=>i.onClick&&i.onClick(...d)),type:"button","aria-label":i.scrollTopAriaLabel},e.ptm("root")),[I(e.$slots,"icon",{},()=>[(a(),$(J(n.icon?"span":"ChevronUpIcon"),h({class:["p-scrolltop-icon",n.icon]},e.ptm("icon")),null,16,["class"]))])],16,St)):E("",!0)]),_:3},8,["onEnter","onAfterLeave"])}function Et(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var It=`
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
`;Et(It);se.render=Tt;const $t={class:"main__container overflow-x-hidden shrink-0"},jt={class:"bg-black"},Bt={__name:"default",setup(e){return(t,n)=>{const s=Ct;return a(),u("div",$t,[C(s),c("main",jt,[I(t.$slots,"default",{},void 0,!0)]),C(b(se),{target:"parent"})])}}},Vt=ve(Bt,[["__scopeId","data-v-6e5a8a1c"]]);export{Vt as default};
