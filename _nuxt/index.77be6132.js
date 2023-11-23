import{u as B,a as V,b as H,F as oe,s as se,c as ae}from"./portal.esm.4b9be9a3.js";import{H as E,E as a,F as c,G as o,O as g,R as b,$ as C,a0 as w,Q as k,M as y,u as r,a1 as le,a2 as re,a3 as de,N as v,D as h,V as $,K as x,j as D,I as O,T as ce,J as S,a4 as M,w as F,r as me}from"./swiper-vue.4f17a82e.js";import{a as ue,s as W,b as Q,Z as I,D as f,U as G,R as pe}from"./entry.524bd5ed.js";const he={class:"h-[43.75rem] overflow-hidden relative"},ge=["src"],fe={class:"absolute bottom-16 left-16"},ve={class:"text-white font-bold text-4xl mb-5"},be={__name:"Poster",props:{movie:Object},setup(e){const t=e,s=B(),l=()=>s.show(t.movie.id);return(i,n)=>{const m=E("Button");return a(),c("div",he,[o("img",{src:e.movie.large_cover_image,alt:"",class:"w-full"},null,8,ge),o("div",fe,[o("p",ve,g(e.movie.title),1),b(m,{class:"w-[6.875rem]",label:"Info",severity:"secondary",onClick:l})])])}}},ye={class:"text-2xl font-bold"},Ce=["onClick"],_e=["src"],xe={class:"mt-2 text-left"},we={__name:"MovieList",props:{movieList:{type:Object,required:!0}},setup(e){const t=B();return(s,l)=>{const i=re,n=de;return a(),c("section",null,[(a(!0),c(C,null,w(e.movieList,(m,p)=>(a(),c("div",{key:p,class:"text-white [&+&]:mt-4"},[o("h3",ye,g(p),1),b(n,{class:"mt-4",slidesPerView:"4",breakpoints:{1024:{slidesPerView:7},640:{slidesPerView:4}},spaceBetween:"30",modules:[r(le)],scrollbar:{hide:!0}},{default:k(()=>[(a(!0),c(C,null,w(m,u=>(a(),y(i,{key:u.id,class:"cursor-pointer min-w-[40px] xl:min-w-[9.375rem]"},{default:k(()=>[o("button",{onClick:()=>r(t).show(u.id)},[o("img",{src:u.medium_cover_image,alt:"",class:"rounded-md w-full"},null,8,_e),o("p",xe,g(u.title),1)],8,Ce)]),_:2},1024))),128))]),_:2},1032,["modules"])]))),128))])}}},ke={},Le={class:"mt-4"},ze={class:"flex gap-[30px]"};function De(e,t){const s=E("Skeleton");return a(),c("section",null,[b(s,{width:"12.5rem",height:"2rem"}),o("div",Le,[o("div",ze,[(a(),c(C,null,w(7,l=>b(s,{key:l,width:"14.5rem",height:"18.75rem",class:"hidden xl:block"})),64)),(a(),c(C,null,w(4,l=>b(s,{key:l,width:"14.5rem",height:"18.75rem",class:"block xl:hidden"})),64))])])])}const Be=ue(ke,[["render",De]]),Ee={key:0,class:"p-10"},Se=o("h4",{class:"text-lg text-white font-bold"},"Suggestions",-1),Ie={class:"mt-4 flex flex-wrap gap-12 justify-between text-white cursor-pointer"},$e=["onClick"],Me=["src","alt"],Ve={class:"mt-2 text-left"},He={__name:"Suggestions",props:["id"],setup(e){const{id:t}=e,s=B(),l=`/v2/movie_suggestions.json?movie_id=${t}`,i=async()=>await H(l).then(({data:p})=>p.movies),{data:n,isSuccess:m}=V({queryKey:[l],queryFn:i});return(p,u)=>r(m)?(a(),c("section",Ee,[Se,o("div",Ie,[(a(!0),c(C,null,w(r(n),d=>(a(),c("button",{class:"w-[13.75rem]",key:d.id,onClick:()=>r(s).change(d.id)},[o("img",{class:"rounded-md",src:d.medium_cover_image,alt:d.title},null,8,Me),o("p",Ve,g(d.title),1)],8,$e))),128))])])):v("",!0)}};var J={name:"Tag",extends:W,props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};function Pe(e,t,s,l,i,n){return a(),c("span",h({class:n.containerClass},e.ptm("root")),[e.$slots.icon?(a(),y($(e.$slots.icon),h({key:0,class:"p-tag-icon"},e.ptm("icon")),null,16)):s.icon?(a(),c("span",h({key:1,class:n.iconClass},e.ptm("icon")),null,16)):v("",!0),x(e.$slots,"default",{},()=>[o("span",h({class:"p-tag-value"},e.ptm("value")),g(s.value),17)])],16)}function je(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",s==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Re=`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}
.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
`;je(Re);J.render=Pe;var ee={name:"WindowMaximizeIcon",extends:Q};const Te=o("g",{"clip-path":"url(#clip0_414_20927)"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"})],-1),Ke=o("defs",null,[o("clipPath",{id:"clip0_414_20927"},[o("rect",{width:"14",height:"14",fill:"white"})])],-1),Ze=[Te,Ke];function qe(e,t,s,l,i,n){return a(),c("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ze,16)}ee.render=qe;var te={name:"WindowMinimizeIcon",extends:Q};const Ae=o("g",{"clip-path":"url(#clip0_414_20939)"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"})],-1),Ne=o("defs",null,[o("clipPath",{id:"clip0_414_20939"},[o("rect",{width:"14",height:"14",fill:"white"})])],-1),Xe=[Ae,Ne];function Ye(e,t,s,l,i,n){return a(),c("svg",h({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Xe,16)}te.render=Ye;var ie={name:"Dialog",extends:W,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:D(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&I.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&I.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&f.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave(){this.autoZIndex&&I.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=s=>s.querySelector("[autofocus]");let t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&f.focus(t)},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?f.addClass(document.body,"p-overflow-hidden"):f.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&f.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&f.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(s=>s===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){f.hasClass(e.target,"p-dialog-header-icon")||f.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",f.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=f.getOuterWidth(this.container),s=f.getOuterHeight(this.container),l=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),m=n.left+l,p=n.top+i,u=f.getViewport();this.container.style.position="fixed",this.keepInViewport?(m>=this.minX&&m+t<u.width&&(this.lastPageX=e.pageX,this.container.style.left=m+"px"),p>=this.minY&&p+s<u.height&&(this.lastPageY=e.pageY,this.container.style.top=p+"px")):(this.lastPageX=e.pageX,this.container.style.left=m+"px",this.lastPageY=e.pageY,this.container.style.top=p+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,f.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconComponent(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},maximizeIconClass(){return`p-dialog-header-maximize-icon ${this.maximized?this.minimizeIcon:this.maximizeIcon}`},ariaId(){return G()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return G()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:pe,focustrap:oe},components:{Portal:se,WindowMinimizeIcon:te,WindowMaximizeIcon:ee,TimesIcon:ae}};const Oe=["aria-labelledby","aria-modal"],Fe=["id"],Ge=["autofocus","tabindex"],Ue=["autofocus","aria-label"];function We(e,t,s,l,i,n){const m=E("Portal"),p=O("ripple"),u=O("focustrap");return a(),y(m,{appendTo:s.appendTo},{default:k(()=>[i.containerVisible?(a(),c("div",h({key:0,ref:n.maskRef,class:n.maskClass,onClick:t[3]||(t[3]=(...d)=>n.onMaskClick&&n.onMaskClick(...d))},e.ptm("mask")),[b(ce,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:k(()=>[s.visible?S((a(),c("div",h({key:0,ref:n.containerRef,class:n.dialogClass,role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":s.modal},{...e.$attrs,...e.ptm("root")}),[s.showHeader?(a(),c("div",h({key:0,ref:n.headerContainerRef,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...d)=>n.initDrag&&n.initDrag(...d))},e.ptm("header")),[x(e.$slots,"header",{},()=>[s.header?(a(),c("span",h({key:0,id:n.ariaLabelledById,class:"p-dialog-title"},e.ptm("headerTitle")),g(s.header),17,Fe)):v("",!0)]),o("div",h({class:"p-dialog-header-icons"},e.ptm("headerIcons")),[s.maximizable?S((a(),c("button",h({key:0,ref:n.maximizableRef,autofocus:i.focusableMax,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...d)=>n.maximize&&n.maximize(...d)),type:"button",tabindex:s.maximizable?"0":"-1"},e.ptm("maximizableButton")),[x(e.$slots,"maximizeicon",{maximized:i.maximized},()=>[(a(),y($(n.maximizeIconComponent),h({class:n.maximizeIconClass},e.ptm("maximizableIcon")),null,16,["class"]))])],16,Ge)),[[p]]):v("",!0),s.closable?S((a(),c("button",h({key:1,ref:n.closeButtonRef,autofocus:i.focusableClose,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...d)=>n.close&&n.close(...d)),"aria-label":n.closeAriaLabel,type:"button"},{...s.closeButtonProps,...e.ptm("closeButton")}),[x(e.$slots,"closeicon",{},()=>[(a(),y($(s.closeIcon?"span":"TimesIcon"),h({class:["p-dialog-header-close-icon",s.closeIcon]},e.ptm("closeButtonIcon")),null,16,["class"]))])],16,Ue)),[[p]]):v("",!0)],16)],16)):v("",!0),o("div",h({ref:n.contentRef,class:n.contentStyleClass,style:s.contentStyle},{...s.contentProps,...e.ptm("content")}),[x(e.$slots,"default")],16),s.footer||e.$slots.footer?(a(),c("div",h({key:1,ref:n.footerContainerRef,class:"p-dialog-footer"},e.ptm("footer")),[x(e.$slots,"footer",{},()=>[M(g(s.footer),1)])],16)):v("",!0)],16,Oe)),[[u,{disabled:!s.modal}]]):v("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):v("",!0)]),_:3},8,["appendTo"])}function Qe(e,t){t===void 0&&(t={});var s=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",s==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Je=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;Qe(Je);ie.render=We;const et=["src"],tt={class:"absolute top-6 right-6 bg-black w-8 h-8 rounded-full hover:bg-gray-500 flex items-center justify-center"},it={class:"p-10 text-white flex justify-between gap-8"},nt={class:"w-3/4"},ot={class:"font-bold text-lg"},st={class:"text-gray-500"},at={class:"mt-4"},lt={class:"mt-4 flex gap-2"},rt={class:"mt-4 grid grid-cols-[6.25rem_1fr] text-gray-400 gap-1"},dt=o("p",null,"Runtime",-1),ct=o("p",null,"Language",-1),mt=o("p",null,"Rating",-1),ut=o("p",null,"Likes",-1),pt=o("i",{class:"pi pi-heart mr-2",style:{"font-size":"0.8125rem"}},null,-1),ht=["src"],gt={class:"mt-4 flex flex-col gap-4"},ft={__name:"MovieDetail",setup(e){const t=B(),s=D(()=>`/v2/movie_details.json?movie_id=${t.id}`),l=async()=>await H(s.value).then(({data:d})=>d.movie);D(()=>t.visible?i:{});const{data:i,isLoading:n,isRefetching:m,refetch:p}=V({queryKey:[s.value],queryFn:l,enabled:t.visible});F(()=>t.visible,d=>{d&&p()}),F(()=>t.id,d=>{if(!d)return;p();const _=document.querySelector(".p-dialog-content");_&&_.scroll(0,0)});const u=D(()=>`https://www.youtube.com/embed/${i==null?void 0:i.value.yt_trailer_code}?controls=0&showinfo=0&disablekb=1&fs=1&modestbranding=1`);return(d,_)=>{const L=E("Skeleton"),ne=He;return a(),y(r(ie),{visible:r(t).visible,modal:"",draggable:!1,closable:!1,closeOnEscape:"",header:"Header",class:"relative",style:{width:"50vw"}},{header:k(()=>{var z;return[(z=r(i))!=null&&z.yt_trailer_code&&!r(m)?(a(),c("iframe",{key:0,src:r(u),class:"w-full h-[25rem] rounded-tl-md rounded-tr-md",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},`
      `,8,et)):v("",!0),o("button",tt,[o("i",{class:"pi pi-times cursor-pointer text-white",onClick:_[0]||(_[0]=()=>r(t).close())})])]}),default:k(()=>{var z,P,j,R,T,K,Z,q,A,N,X;return[o("section",it,[!r(n)&&!r(m)?(a(),c(C,{key:0},[o("div",nt,[o("h3",ot,[M(g((z=r(i))==null?void 0:z.title)+" ",1),o("span",st,g(` (${(P=r(i))==null?void 0:P.year})`),1)]),o("p",at,g((j=r(i))==null?void 0:j.description_full),1),o("div",lt,[(a(!0),c(C,null,w((R=r(i))==null?void 0:R.genres,Y=>(a(),y(r(J),{key:Y,value:Y},null,8,["value"]))),128))]),o("div",rt,[dt,o("p",null,g((T=r(i))==null?void 0:T.runtime)+" Minute",1),ct,o("p",null,g((K=r(i))==null?void 0:K.language.toUpperCase()),1),mt,o("p",null,g((Z=r(i))==null?void 0:Z.rating)+" / 10",1),ut,o("div",null,[pt,M(g((q=r(i))==null?void 0:q.like_count),1)])])]),o("img",{class:"rounded-md h-min w-1/4",src:(A=r(i))==null?void 0:A.medium_cover_image},null,8,ht)],64)):(a(),c(C,{key:1},[o("section",null,[b(L,{width:"18.75rem"}),o("div",gt,[b(L,{width:"9.375rem"}),b(L,{width:"9.375rem"}),b(L,{width:"9.375rem"})])]),b(L,{width:"12.5rem",height:"18.75rem"})],64))]),(N=r(i))!=null&&N.id&&!r(m)?(a(),y(ne,{key:0,id:(X=r(i))==null?void 0:X.id},null,8,["id"])):v("",!0)]}),_:1},8,["visible"])}}},vt={class:"pt-16 pb-16 px-16"},U="/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=50",_t={__name:"index",setup(e){const t=me({}),s=async()=>await H(U).then(n=>{let m={};return n.data.movies.forEach(u=>{u.genres.forEach(d=>{m[d]?m[d]++:m[d]=1})}),Object.keys(m).filter(u=>m[u]>=6).forEach(u=>{t[u]=n.data.movies.filter(d=>d.genres.includes(u))}),n.data.movies}),{data:l,isSuccess:i}=V({queryKey:[U],queryFn:s});return(n,m)=>{const p=be,u=we,d=Be,_=ft;return a(),c("section",null,[r(i)?(a(),y(p,{key:0,movie:r(l)[0]},null,8,["movie"])):v("",!0),o("section",vt,[r(i)?(a(),y(u,{key:0,movieList:r(t)},null,8,["movieList"])):(a(),y(d,{key:1}))]),b(_)])}}};export{_t as default};
