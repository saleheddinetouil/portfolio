"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{13613:function(e,t,n){n.r(t),n.d(t,{AnimationLottie:function(){return i}});var r=n(57437),a=n(43393),l=n.n(a);function i(e){let{animationData:t,width:n}=e;return(0,r.jsx)(l(),{loop:!0,autoplay:!0,animationData:t,style:{width:null!=n?n:"100%"}})}},54507:function(e,t,n){n.r(t),n.d(t,{Modal:function(){return c},ModalBody:function(){return u},ModalContent:function(){return x},ModalFooter:function(){return p},ModalTrigger:function(){return d}});var r=n(57437),a=n(37440),l=n(95127),i=n(83907),s=n(2265),o=n(88358);function c(e){let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})}function d(e){let{children:t,className:n}=e,{setOpen:a}=(0,o.d)();return(0,r.jsx)("div",{className:n,onClick:()=>a(!0),children:t})}function u(e){var t;let{children:n,className:c}=e,{open:d,setModalData:u}=(0,o.d)();(0,s.useEffect)(()=>{d?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[d]);let x=(0,s.useRef)(null),{setOpen:p}=(0,o.d)();return t=function(){u(null),p(!1)},(0,s.useEffect)(()=>{let e=e=>{!x.current||x.current.contains(e.target)||t(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[x,t]),(0,r.jsx)(l.M,{children:d&&(0,r.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},className:"fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50 px-3",children:[(0,r.jsx)(m,{}),(0,r.jsxs)(i.E.div,{ref:x,className:(0,a.cn)("min-h-[50%] max-h-[90%] md:max-w-[600px] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-auto no-scrollbar",c),initial:{opacity:0,scale:.5,rotateX:40,y:40},animate:{opacity:1,scale:1,rotateX:0,y:0},exit:{opacity:0,scale:.8,rotateX:10},transition:{type:"spring",stiffness:260,damping:15},children:[(0,r.jsx)(f,{}),n]})]})})}function x(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,a.cn)("flex flex-col flex-1 p-0 py-8 px-5 sm:p-10",n),children:t})}function p(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,a.cn)("flex justify-end p-4 bg-gray-100 dark:bg-neutral-900",n),children:t})}function m(e){let{className:t}=e;return(0,r.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},className:"fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ".concat(t)})}function f(){let{setOpen:e,setModalData:t}=(0,o.d)();return(0,r.jsx)("button",{onClick:function(){t(null),e(!1)},className:"absolute top-4 right-4 group",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200",children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M18 6l-12 12"}),(0,r.jsx)("path",{d:"M6 6l12 12"})]})})}},91566:function(e,t,n){n.r(t),n.d(t,{FloatingNav:function(){return f}});var r=n(57437),a=n(2265),l=n(49754),i=n(56179),s=n(95127),o=n(83907),c=n(37440),d=n(87138),u=n(41942),x=n(16356),p=n(19675);let m=[{name:"Home",link:"/",icon:(0,r.jsx)(u.xng,{className:"h-6 w-6 text-neutral-500 dark:text-white"})},{name:"About",link:"#about",icon:(0,r.jsx)(u.Xws,{className:"h-6 w-6 text-neutral-500 dark:text-white"})},{name:"Projects",link:"#projects",icon:(0,r.jsx)(p.Zaj,{className:"h-6 w-6 text-neutral-500 dark:text-white"})},{name:"Contact",link:"#contact",icon:(0,r.jsx)(x.nsO,{className:"h-6 w-6 text-neutral-500 dark:text-white"})}];function f(e){let{className:t}=e,{scrollYProgress:n}=(0,l.v)(),[u,x]=(0,a.useState)(!0);return(0,i.W)(n,"change",e=>{if("number"==typeof e){let t=e-n.getPrevious();0>n.get()?(console.log(n.get()),x(!1)):t<0?x(!0):x(!1)}}),(0,r.jsx)(s.M,{mode:"wait",children:(0,r.jsx)(o.E.div,{initial:{opacity:1,y:100},animate:{y:u?0:100,opacity:u?1:0},transition:{duration:.5},className:(0,c.cn)("flex max-w-max fixed bottom-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-3 px-5 items-center justify-center space-x-4 backdrop-blur-sm bg-black/[0.5]",t),children:m.map((e,t)=>(0,r.jsxs)(d.default,{href:e.link,className:(0,c.cn)("relative dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"),children:[(0,r.jsx)("span",{className:"block sm:hidden",children:e.icon}),(0,r.jsx)("span",{className:"hidden sm:block text-sm font-semibold text-blue-100",children:e.name})]},"link=".concat(t)))})})}},87830:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return l}});var r=n(57437),a=n(83907);function l(e){let{children:t,className:n,delay:l=1}=e;return(0,r.jsx)(a.E.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:1.3,ease:"linear",delay:l},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:"relative inline-block py-1 px-2 rounded-md bg-gradient-to-r from-blue-900 via-indigo-900 to-indigo-500 ".concat(n),children:t})}},79792:function(e,t,n){n.r(t),n.d(t,{MagicButton:function(){return l}});var r=n(57437),a=n(16463);function l(e){let{title:t,icon:n,position:l,handleClick:i,className:s,scroll:o,externalLink:c}=e,d=(0,a.useRouter)();return(0,r.jsxs)("button",{className:"relative inline-flex h-12 w-full md:w-60  overflow-hidden rounded-lg p-[1px] focus:outline-none ".concat(s),onClick:function(){if(c&&window.open(c,"_blank"),o)return d.push(o);i&&i()},children:[(0,r.jsx)("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"}),(0,r.jsxs)("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg\n             bg-slate-950 px-3 font-medium text-white backdrop-blur-3xl gap-2",children:["left"===l&&n,t,"right"===l&&n]})]})}t.default=l},15961:function(e,t,n){n.r(t),n.d(t,{MagicCard:function(){return d}});var r=n(48646),a=n(57437),l=n(45282),i=n(83907),s=n(24846),o=n(37440);function c(){let e=(0,r._)(["\n						radial-gradient(","px circle at ","px ","px, ",", transparent 100%)\n					"]);return c=function(){return e},e}function d(e){let{children:t,className:n="",gradientSize:r=200,gradientColor:d="#262626"}=e,u=(0,l.c)(0),x=(0,l.c)(0);return(0,a.jsxs)("div",{onMouseMove:e=>{let{left:t,top:n}=e.currentTarget.getBoundingClientRect();u.set(e.clientX-t),x.set(e.clientY-n)},className:(0,o.cn)("group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-slate-900 border text-black dark:text-white",n),children:[(0,a.jsx)("div",{className:"relative z-10",children:t}),(0,a.jsx)(i.E.div,{className:"pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100",style:{background:(0,s.Y)(c(),r,u,x,d)}})]})}},48515:function(e,t,n){n.r(t),n.d(t,{MotionUp:function(){return l}});var r=n(57437),a=n(83907);function l(e){let{children:t,className:n,delay:l=0}=e;return(0,r.jsx)(a.E.div,{initial:{opacity:0,y:100},transition:{delay:l,duration:1,ease:[.4,0,.2,1]},whileInView:{opacity:1,y:[100,-10,0]},viewport:{once:!0},className:n,children:t})}},24616:function(e,t,n){n.r(t),n.d(t,{MovingBorder:function(){return m},MovingBorderChild:function(){return f}});var r=n(48646),a=n(57437),l=n(2265),i=n(45282),s=n(76227),o=n(50831),c=n(24846),d=n(83907),u=n(37440);function x(e){let{className:t,size:n=200,duration:r=15,anchor:l=90,borderWidth:i=1.5,colorFrom:s="#ffaa40",colorTo:o="#9c40ff",delay:c=0}=e;return(0,a.jsx)("div",{style:{"--size":n,"--duration":r,"--anchor":l,"--border-width":i,"--color-from":s,"--color-to":o,"--delay":"-".concat(c,"s")},className:(0,u.cn)("pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]","![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]","after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",t)})}function p(){let e=(0,r._)(["translateX(","px) translateY(","px) translateX(-50%) translateY(-50%)"]);return p=function(){return e},e}function m(e){let{borderRadius:t="1.75rem",children:n,as:r="div",containerClassName:l,borderClassName:i,duration:s,className:o,showBeam:c=!0,...d}=e;return(0,a.jsxs)(r,{className:(0,u.cn)("bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",l),style:{borderRadius:t},...d,children:[c&&(0,a.jsx)(x,{size:250,duration:15,delay:5}),(0,a.jsx)("div",{className:(0,u.cn)("relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",o),style:{borderRadius:"calc(".concat(t," * 0.96)")},children:n})]})}let f=e=>{let{children:t,duration:n=2e3,rx:r,ry:u,...x}=e,m=(0,l.useRef)(),f=(0,i.c)(0);(0,s.p)(e=>{var t;let r=null===(t=m.current)||void 0===t?void 0:t.getTotalLength();r&&f.set(r/n*e%r)});let h=(0,o.H)(f,e=>{var t;return null===(t=m.current)||void 0===t?void 0:t.getPointAtLength(e).x}),g=(0,o.H)(f,e=>{var t;return null===(t=m.current)||void 0===t?void 0:t.getPointAtLength(e).y}),b=(0,c.Y)(p(),h,g);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...x,children:(0,a.jsx)("rect",{fill:"none",width:"100%",height:"100%",rx:r,ry:u,ref:m})}),(0,a.jsx)(d.E.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:b},children:t})]})}},73402:function(e,t,n){n.r(t),n.d(t,{ProjectCard:function(){return d}});var r=n(57437),a=n(2265),l=n(83907),i=n(37440),s=n(66648),o=n(54507),c=n(88358);function d(e){let{data:t}=e,{setModalData:n}=(0,c.d)();return(0,r.jsx)(u,{title:"Read More",onClick:()=>{n(t)},className:"!w-full flex justify-center h-[360px]",children:(0,r.jsxs)("div",{className:"tracking-tight text-blue-100",children:[(0,r.jsx)(s.default,{src:t.images[0],alt:t.title,height:300,width:500,className:"rounded-lg h-[180px] max-w-full mb-5"}),(0,r.jsx)("h3",{className:"line-clamp-1 max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-100",children:t.title}),(0,r.jsx)("div",{className:"text-base !m-0 !p-0 font-normal",children:(0,r.jsx)("p",{className:"text-slate-400 line-clamp-4 ",children:t.description})})]})})}function u(e){let{children:t,title:n,className:l,containerClassName:s,onClick:c}=e,[d,u]=(0,a.useState)("translate(-50%,-50%) rotateX(0deg)");return(0,r.jsx)(o.ModalTrigger,{children:(0,r.jsxs)("button",{className:(0,i.cn)("relative group/pin z-50  cursor-pointer w-full block text-left h-[400px]",s),onMouseEnter:()=>{u("translate(-50%,-50%) rotateX(40deg) scale(0.8)")},onMouseLeave:()=>{u("translate(-50%,-50%) rotateX(0deg) scale(1)")},onClick:()=>{c&&c()},children:[(0,r.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0deg)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,r.jsx)("div",{style:{transform:d},className:"absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-slate-950 border border-white/[0.2] group-hover/pin:border-white/[0.5] transition duration-700 overflow-hidden w-[20rem]  sm:w-[21rem]",children:(0,r.jsx)("div",{className:(0,i.cn)(" relative z-50 w-[19rem] sm:w-[20rem]",l),children:t})})}),(0,r.jsx)(x,{title:n})]})})}function x(e){let{title:t}=e;return(0,r.jsx)(l.E.div,{className:"pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",children:(0,r.jsxs)("div",{className:" w-full h-full -mt-7 flex-none  inset-0",children:[(0,r.jsx)("div",{className:"absolute top-0 inset-x-0  flex justify-center",children:(0,r.jsxs)("p",{className:"relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ",children:[(0,r.jsx)("span",{className:"relative z-20 text-white text-xs font-bold inline-block py-0.5",children:t}),(0,r.jsx)("span",{className:"absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-red-500 to-red-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"})]})}),(0,r.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:0},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/20 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,r.jsx)(l.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:2},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/30 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,r.jsx)(l.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:4},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/50 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"})]})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"}),(0,r.jsx)(l.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "}),(0,r.jsx)(l.E.div,{className:"absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-red-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"}),(0,r.jsx)(l.E.div,{className:"absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-red-600 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "})]})]})})}},91481:function(e,t,n){n.r(t),n.d(t,{TextAppearAnimation:function(){return s}});var r=n(57437),a=n(83907);let l={hidden:{opacity:0},visible:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.03,delayChildren:.04*e}}}},i={visible:{opacity:1,x:0,y:0,transition:{type:"spring",damping:15,stiffness:100}},hidden:{opacity:0,x:-20,y:10,transition:{type:"spring",damping:12,stiffness:100}}};function s(e){let{text:t,className:n,center:s}=e,o=t.split(" ");return(0,r.jsx)(a.E.div,{style:{overflow:"hidden",display:"flex",flexWrap:"wrap",justifyContent:s?"center":"flex-start"},className:n,variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1},children:o.map((e,t)=>(0,r.jsx)(a.E.span,{variants:i,style:{marginRight:"6px",fontFamily:"inherit"},className:t===o.length-1?"text-purple":"",children:e},t))})}},34934:function(e,t,n){n.r(t),n.d(t,{ContactForm:function(){return p}});var r,a,l=n(57437),i=n(37406),s=n(85097),o=n(2265);n(74590);var c=n(58064);(0,c.$)("1a16b133593a855aa056574ee9c56975caabf5d0"),(0,c.$)("98bf33246b2190bc5c7056a92eedf8ea0bfd9da4");var d=(0,c.$)("835dc136ece9cd87d3ff3317189d4770971a80b7");(r=a||(a={})).UPDATE_STATE="UPDATE_STATE",r.RESET_STATE="RESET_STATE";let u={name:"",email:"",subject:"",message:"",loading:!1,error:{hasError:!1,message:""}};function x(e,t){switch(t.type){case"UPDATE_STATE":return{...e,...t.payload};case"RESET_STATE":return u;default:return e}}function p(e){let{className:t,currentEmail:n}=e,[r,a]=(0,o.useReducer)(x,u),[c,p]=(0,o.useState)(!1);function h(e){a({type:"UPDATE_STATE",payload:{[e.target.id]:e.target.value}})}async function g(e){if(e.preventDefault(),r.loading||c)return;if(!(r.name.trim()&&r.email.trim()&&r.subject.trim()&&r.message.trim()))return a({type:"UPDATE_STATE",payload:{error:{hasError:!0,message:"Pleae fill all fields!"}}});a({type:"UPDATE_STATE",payload:{loading:!0,error:{hasError:!1,message:""}}});let{success:t,message:l}=await d({...r,currentEmail:n});t&&(p(!0),a({type:"RESET_STATE",payload:u})),l&&a({type:"RESET_STATE",payload:{loading:!1,error:{hasError:!0,message:l}}})}return(0,l.jsxs)("form",{className:"relative ".concat(t),onSubmit:g,children:[(0,l.jsx)("h6",{className:"text-center text-blue-100 font-semibold mb-5",children:"Leave your email and I will get back to you within 24 hours"}),(0,l.jsxs)(i.AA,{className:"mb-4",children:[(0,l.jsx)(i.__,{htmlFor:"name",children:"Name"}),(0,l.jsx)(i.II,{id:"name",placeholder:"Abhishek Bhardwaj",type:"text",value:r.name,onChange:h})]}),(0,l.jsxs)(i.AA,{className:"mb-4",children:[(0,l.jsx)(i.__,{htmlFor:"email",children:"Email"}),(0,l.jsx)(i.II,{id:"email",placeholder:"hello@imabhishek.online",type:"email",value:r.email,onChange:h})]}),(0,l.jsxs)(i.AA,{className:"mb-4",children:[(0,l.jsx)(i.__,{htmlFor:"subject",children:"Subject"}),(0,l.jsx)(i.II,{id:"subject",placeholder:"Want to build a website",type:"text",value:r.subject,onChange:h})]}),(0,l.jsxs)(i.AA,{className:"mb-4",children:[(0,l.jsx)(i.__,{htmlFor:"message",children:"Message"}),(0,l.jsx)(i.gx,{rows:3,id:"message",placeholder:"Looking for a proficient software developer skilled in React and Next.js for a specific project",className:"resize-none",value:r.message,onChange:h})]}),c?(0,l.jsx)("p",{className:"text-center text-sm text-slate-400",children:"Your message has been sent successfully!"}):(0,l.jsxs)("button",{className:"group/btn relative h-12 w-full shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none",type:"submit",disabled:r.loading||c,children:[r.loading?(0,l.jsxs)("span",{className:"flex w-full justify-center items-center gap-2",children:["Wait! ",(0,l.jsx)(f,{})]}):(0,l.jsxs)("span",{className:"flex w-full justify-center items-center gap-2",children:["Submit ",(0,l.jsx)(s.VzJ,{})]}),(0,l.jsx)(m,{})]}),(0,l.jsx)("p",{className:"mt-4 text-sm text-center text-red-500  relative z-30",children:r.error.hasError&&(r.error.message?r.error.message:"Something went wrong! Please try again!")}),(0,l.jsx)("div",{className:"bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-10 sm:my-5 h-[1px] w-full"})]})}let m=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),(0,l.jsx)("span",{className:"group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"})]}),f=()=>(0,l.jsxs)("svg",{"aria-hidden":"true",role:"status",className:"inline mr-3 w-5 h-5 text-blue-100 animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]})},37406:function(e,t,n){n.d(t,{II:function(){return r.Input},__:function(){return a.Label},AA:function(){return s},gx:function(){return r.Textarea}});var r=n(39555),a=n(67585),l=n(57437),i=n(37440);function s(e){let{children:t,className:n}=e;return(0,l.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 w-full",n),children:t})}n(34934)},39555:function(e,t,n){n.r(t),n.d(t,{Input:function(){return x},Textarea:function(){return p}});var r=n(48646),a=n(57437),l=n(2265),i=n(37440),s=n(45282),o=n(83907),c=n(24846);function d(){let e=(0,r._)(["\n                    radial-gradient(\n                        "," circle at ","px ","px,\n                        var(--blue-500),\n                        transparent 80%\n                    )\n                "]);return d=function(){return e},e}let u=e=>{let{className:t,type:n,as:r,...u}=e,[x,p]=l.useState(!1),m=(0,s.c)(0),f=(0,s.c)(0);return(0,a.jsx)(o.E.div,{style:{background:(0,c.Y)(d(),x?"100px":"0px",m,f)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:r}=e,{left:a,top:l}=t.getBoundingClientRect();m.set(n-a),f.set(r-l)},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:"p-[2px] rounded-lg transition duration-300 group",children:(0,a.jsx)(r,{type:n,className:(0,i.cn)("flex w-full border-none bg-zinc-900 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm \n                    placeholder:text-neutral-500 dark:placeholder-text-neutral-500 \n                    focus-visible:outline-none  focus-visible:ring-0 dark:focus-visible:ring-0\n                    disabled:cursor-not-allowed disabled:opacity-50\n                    dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n                    group-hover:shadow-none transition duration-400",t),...u})})};u.displayName="MotionComponent";let x=l.forwardRef((e,t)=>(0,a.jsx)(u,{as:"input",ref:t,...e})),p=l.forwardRef((e,t)=>(0,a.jsx)(u,{as:"textarea",ref:t,...e}));x.displayName="Input",p.displayName="Textarea"},67585:function(e,t,n){n.r(t),n.d(t,{Label:function(){return s}});var r=n(57437),a=n(2265),l=n(25815),i=n(37440);let s=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(l.f,{ref:t,className:(0,i.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",n),...a})});s.displayName=l.f.displayName},19765:function(e,t,n){n.r(t),n.d(t,{Projects:function(){return v}});var r=n(57437);function a(e){let{children:t,className:n,id:a}=e;return(0,r.jsx)("div",{className:"max-w-6xl w-full mx-auto px-4 ".concat(n),id:a,children:t})}var l=n(79792),i=n(37440);function s(e){let{className:t,fill:n}=e;return(0,r.jsxs)("svg",{className:(0,i.cn)("animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3787 2842",fill:"none",children:[(0,r.jsx)("g",{filter:"url(#filter)",children:(0,r.jsx)("ellipse",{cx:"1924.71",cy:"273.501",rx:"1924.71",ry:"273.501",transform:"matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",fill:n||"white",fillOpacity:"0.21"})}),(0,r.jsx)("defs",{children:(0,r.jsxs)("filter",{id:"filter",x:"0.860352",y:"0.838989",width:"3785.16",height:"2840.26",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,r.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,r.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,r.jsx)("feGaussianBlur",{stdDeviation:"151",result:"effect1_foregroundBlur_1065_8"})]})})]})}var o=n(48515);n(87830),n(13613),n(24616),n(15961);var c=n(73402),d=n(54507);n(91566),n(91481);let u=e=>{let{children:t,className:n,id:a,mask:l=!0,element:i,spotlight:o=!1,bgClass:c}=e;return(0,r.jsxs)(i,{className:"relative w-full ".concat(c," ").concat(n),id:a,children:[o&&(0,r.jsx)(s,{className:"left-80 top-28 h-[80vh] w-[50vw]",fill:"blue"}),l&&(0,r.jsx)("div",{className:"absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"}),t]})};function x(e){return(0,r.jsx)(u,{...e,bgClass:"dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]",element:e.element||"section"})}var p=n(2265),m=n(88358),f=n(66648),h=n(87138),g=n(41942);function b(e){let{text:t,className:n}=e;return(0,r.jsx)("h2",{className:(0,i.cn)("text-center font-bold text-3xl text-blue-100 relative z-20",n),children:t})}function v(e){var t,n;let{projects:s}=e,[u,v]=(0,p.useState)((0,i.I)(s).slice(0,3)),[j,y]=(0,p.useState)(!1),{modalData:w}=(0,m.d)();return(0,r.jsxs)(x,{className:"py-10",id:"projects",children:[(0,r.jsx)(a,{children:(0,r.jsxs)(o.MotionUp,{delay:.1,children:[(0,r.jsx)(b,{text:"A Small Selection of Recent Projects"}),(0,r.jsx)("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",children:u.map((e,t)=>(0,r.jsx)(c.ProjectCard,{data:e},t))}),s.length>3&&(0,r.jsx)(l.MagicButton,{title:j?"Show Less":"Show More",handleClick:function(){j?(y(!1),v(s.slice(0,3))):(y(!0),v(s))},className:"mx-auto !block mt-12"})]})}),(0,r.jsx)(d.Modal,{children:(0,r.jsx)(d.ModalBody,{className:"!max-w-[700px]",children:(0,r.jsxs)(d.ModalContent,{className:"mt-5",children:[(0,r.jsxs)("div",{className:"mb-5 flex items-center flex-wrap gap-x-5 gap-y-2",children:[(0,r.jsx)("h5",{className:"text-xl font-semibold text-blue-100",children:null==w?void 0:w.title}),(0,r.jsxs)("div",{className:"flex gap-4 items-center",children:[(null==w?void 0:w.liveUrl)&&(0,r.jsxs)(h.default,{href:null==w?void 0:w.liveUrl,target:"_blank",className:"flex justify-center items-center text-purple",children:[(0,r.jsx)(g.dSq,{className:"me-1"}),(0,r.jsx)("span",{className:"text-[15px]",children:"Check Live Site"})]}),(null==w?void 0:w.gitUrl)&&(0,r.jsxs)(h.default,{href:null==w?void 0:w.gitUrl,target:"_blank",className:"flex justify-center items-center text-purple",children:[(0,r.jsx)(g.hJX,{className:"me-1"}),(0,r.jsx)("span",{className:"relative top-[1px] text-[15px]",children:"Get code"})]})]})]}),(0,r.jsx)("div",{className:"border border-gray-700 border-opacity-75 p-4 rounded-lg mb-5",children:(0,r.jsx)("p",{className:"leading-relaxed text-sm text-blue-100",children:null==w?void 0:w.description})}),(0,r.jsx)("div",{className:"flex flex-wrap gap-3 mb-5",children:null==w?void 0:null===(t=w.techStack)||void 0===t?void 0:t.map(e=>(0,r.jsx)("p",{className:"bg-slate-800/50  px-5 py-2 text-sm text-blue-100 rounded-sm",children:e},e))}),(0,r.jsx)("div",{className:"flex flex-wrap gap-x-2 gap-y-5 mb-5",children:null==w?void 0:null===(n=w.images)||void 0===n?void 0:n.map(e=>(0,r.jsx)(h.default,{className:"w-full sm:w-[49%]",href:e,target:"_blank",children:(0,r.jsx)(f.default,{src:e,alt:w.title,height:500,width:500,className:"rounded-lg w-full  max-h-48 cursor-pointer aspect-video object-cover"})},e))})]})})})]})}n(21932),n(37406)},88358:function(e,t,n){n.d(t,{d:function(){return r.useModal}});var r=n(32968)},32968:function(e,t,n){n.r(t),n.d(t,{ModalProvider:function(){return i},useModal:function(){return s}});var r=n(57437),a=n(2265);let l=(0,a.createContext)(void 0);function i(e){let{children:t}=e,[n,i]=(0,a.useState)(!1),[s,o]=(0,a.useState)(null);return(0,r.jsx)(l.Provider,{value:{open:n,setOpen:i,modalData:s,setModalData:o},children:t})}function s(){let e=(0,a.useContext)(l);if(!e)throw Error("useModal must be used within a ModalProvider");return e}},37440:function(e,t,n){n.d(t,{I:function(){return i},cn:function(){return l}});var r=n(44839),a=n(96164);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}function i(e){return e.sort((e,t)=>e.priority-t.priority)}}}]);