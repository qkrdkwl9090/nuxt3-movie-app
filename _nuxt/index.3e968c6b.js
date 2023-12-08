import{l as w,k as x,a as T,W as H,C as N,z as o,A as c,u as a,B as t,J as u,H as m,I as y,X as k,Y as z,y as $,O as L,F as V,Z as j,M as v,_ as A}from"./swiper-vue.31d3a669.js";import{u as F,a as R,_ as U}from"./useDefaultFetch.8826c8ab.js";import{s as I,a as K,u as J}from"./entry.5817a581.js";import"./nuxt-link.df5112d9.js";const O={key:0},P={key:1},Q={class:"flex justify-end"},W=w({__name:"Description",props:{description:{type:String,required:!0}},setup(s){const{description:e}=s,n=x(()=>e.slice(0,200)),r=T(!0),i=T(!1);return H(()=>{i.value=e.length>500}),(l,p)=>{const _=N("Button");return o(),c("div",null,[a(r)&&a(i)?(o(),c("div",O,[t("p",null,u(a(n)+"..."),1)])):(o(),c("p",P,u(s.description),1)),t("div",Q,[a(i)?(o(),m(_,{key:0,onClick:()=>r.value=!a(r),label:a(r)?"More":"Hide",text:"",size:"small",severity:"secondary"},null,8,["onClick","label"])):y("",!0)])])}}}),X=["src"],Y={__name:"Trailer",props:{src:{type:String,required:!0}},setup(s){const e=s,n=x(()=>`https://www.youtube.com/embed/${e.src}?controls=0&showinfo=0&disablekb=1&fs=1&modestbranding=1`);return(r,i)=>(o(),c("iframe",{src:a(n),class:"w-full aspect-video rounded-xl",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},null,8,X))}},Z={key:0},G=t("h4",{class:"text-lg text-white font-bold"},"Suggestions",-1),ee={class:"mt-4 grid grid-cols-2 xl:grid-cols-3 gap-12 text-white"},te={__name:"Suggestions",props:["id"],setup(s){const{id:e}=s,n=`/v2/movie_suggestions.json?movie_id=${e}`,r=async()=>await R(n).then(({data:p})=>p.movies),{data:i,isSuccess:l}=F({queryKey:[n],queryFn:r});return(p,_)=>{const g=U;return a(l)?(o(),c("section",Z,[G,t("div",ee,[(o(!0),c(k,null,z(a(i),d=>(o(),m(g,{key:d.id,id:d.id,src:d.medium_cover_image,title:d.title},null,8,["id","src","title"]))),128))])])):y("",!0)}}};var E={name:"Tag",extends:I,props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};function se(s,e,n,r,i,l){return o(),c("span",$({class:l.containerClass},s.ptm("root")),[s.$slots.icon?(o(),m(L(s.$slots.icon),$({key:0,class:"p-tag-icon"},s.ptm("icon")),null,16)):n.icon?(o(),c("span",$({key:1,class:l.iconClass},s.ptm("icon")),null,16)):y("",!0),V(s.$slots,"default",{},()=>[t("span",$({class:"p-tag-value"},s.ptm("value")),u(n.value),17)])],16)}function ne(s,e){e===void 0&&(e={});var n=e.insertAt;if(!(!s||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=s:i.appendChild(document.createTextNode(s))}}var oe=`
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
`;ne(oe);E.render=se;const ie={class:"flex gap-10"},re={class:"flex-1"},ae={class:"font-bold text-lg"},ce={class:"text-gray-500"},le={class:"mt-4 flex gap-2"},de={class:"mt-4 grid grid-cols-[6.25rem_1fr] text-gray-400 gap-1"},ue=t("p",null,"Runtime",-1),pe=t("p",null,"Language",-1),me=t("p",null,"Rating",-1),_e=t("p",null,"Likes",-1),ge=t("i",{class:"pi pi-heart mr-2",style:{"font-size":"0.8125rem"}},null,-1),ve=["src"],he=w({__name:"index",props:{movie:{}},setup(s){return(e,n)=>{var p,_,g,d,f,h,b,C,S,B,D,q;const r=W,i=Y,l=te;return o(),c(k,null,[t("div",ie,[t("div",re,[t("h3",ae,[j(u((p=e.movie)==null?void 0:p.title)+" ",1),t("span",ce,u(` (${(_=e.movie)==null?void 0:_.year})`),1)]),v(r,{class:"mt-4",description:(g=e.movie)==null?void 0:g.description_full},null,8,["description"]),t("div",le,[(o(!0),c(k,null,z((d=e.movie)==null?void 0:d.genres,M=>(o(),m(a(E),{key:M,value:M},null,8,["value"]))),128))]),t("div",de,[ue,t("p",null,u((f=e.movie)==null?void 0:f.runtime)+" Minute",1),pe,t("p",null,u((h=e.movie)==null?void 0:h.language.toUpperCase()),1),me,t("p",null,u((b=e.movie)==null?void 0:b.rating)+" / 10",1),_e,t("div",null,[ge,j(u((C=e.movie)==null?void 0:C.like_count),1)])])]),t("img",{class:"rounded-md !w-[10rem] xl:w-auto h-min",src:(S=e.movie)==null?void 0:S.medium_cover_image},null,8,ve)]),(B=e.movie)!=null&&B.yt_trailer_code?(o(),m(i,{key:0,class:"mt-20",src:e.movie.yt_trailer_code},null,8,["src"])):y("",!0),(D=e.movie)!=null&&D.id?(o(),m(l,{key:1,class:"mt-20",id:(q=e.movie)==null?void 0:q.id},null,8,["id"])):y("",!0)],64)}}}),ye={},fe={class:"flex justify-between"},$e={class:"mt-4 flex flex-col gap-4"};function ke(s,e){const n=N("Skeleton");return o(),c("div",fe,[t("section",null,[v(n,{width:"18.75rem"}),t("div",$e,[v(n,{width:"9.375rem"}),v(n,{width:"9.375rem"}),v(n,{width:"9.375rem"})])]),v(n,{width:"12.5rem",height:"18.75rem"})])}const we=K(ye,[["render",ke]]),xe={class:"w-full xl:w-[50rem] mx-auto bg-slate-800 xl:rounded-xl"},be={class:"px-10 py-20 xl:p-10 text-white gap-8"},qe=w({__name:"index",setup(s){const n=J().params.id,r=x(()=>`/v2/movie_details.json?movie_id=${n}`),i=async()=>(await R(r.value)).data.movie,{data:l,isLoading:p}=F({queryKey:[n],queryFn:i});return(_,g)=>{var h;const d=he,f=we;return o(),c("div",{style:A({"background-image":`url(${(h=a(l))==null?void 0:h.background_image})`}),class:"bg-no-repeat bg-cover bg-center bg-fixed w-full xl:py-40"},[t("section",xe,[t("section",be,[a(p)?(o(),m(f,{key:1})):(o(),m(d,{key:0,movie:a(l)},null,8,["movie"]))])])],4)}}});export{qe as default};
