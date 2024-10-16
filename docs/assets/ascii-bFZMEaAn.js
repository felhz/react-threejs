import{p as J}from"./ascii_-FU1-d8Ot.js";import{r as h,j as r,u as T}from"./ssg-client-Cr4lShia.js";import{u as K,a as Q,C as U,b as Y}from"./react-three-fiber.esm-CJ0omfpD.js";import{O as Z}from"./OrbitControls-DZZPqe92.js";import{G as ee,a as te}from"./GizmoViewport-BPckI2em.js";import"./Hud-PGggYHUe.js";class oe{constructor(t,g=" .:-=+*#%@",a={}){const m=a.resolution||.15,c=a.scale||1,b=a.color||!1,C=a.alpha||!1,f=a.block||!1,S=a.invert||!1,x=a.strResolution||"low";let o,i;const G=document.createElement("div");G.style.cursor="default";const d=document.createElement("table");G.appendChild(d);let u,p,E;this.setSize=function(e,l){o=e,i=l,t.setSize(e,l),P()},this.render=function(e,l){t.render(e,l),q(d)},this.domElement=G;function P(){u=Math.floor(o*m),p=Math.floor(i*m),w.width=u,w.height=p,E=t.domElement,E.style.backgroundColor&&(d.rows[0].cells[0].style.backgroundColor=E.style.backgroundColor,d.rows[0].cells[0].style.color=E.style.color),d.cellSpacing=0,d.cellPadding=0;const e=d.style;e.whiteSpace="pre",e.margin="0px",e.padding="0px",e.letterSpacing=s+"px",e.fontFamily=X,e.fontSize=N+"px",e.lineHeight=W+"px",e.textAlign="left",e.textDecoration="none"}const B=" .,:;i1tfLCG08@".split(""),V=" CGO08@".split(""),X="courier new, monospace",$=t.domElement,w=document.createElement("canvas");if(!w.getContext)return;const k=w.getContext("2d");if(!k.getImageData)return;let v=b?V:B;g&&(v=g);const N=2/m*c,W=2/m*c;let s=0;if(x=="low")switch(c){case 1:s=-1;break;case 2:case 3:s=-2.1;break;case 4:s=-3.1;break;case 5:s=-4.15;break}if(x=="medium")switch(c){case 1:s=0;break;case 2:s=-1;break;case 3:s=-1.04;break;case 4:case 5:s=-2.1;break}if(x=="high")switch(c){case 1:case 2:s=0;break;case 3:case 4:case 5:s=-1;break}function q(e){k.clearRect(0,0,u,p),k.drawImage($,0,0,u,p);const l=k.getImageData(0,0,u,p).data;let j="";for(let R=0;R<p;R+=2){for(let _=0;_<u;_++){const z=(R*u+_)*4,D=l[z],I=l[z+1],L=l[z+2],H=l[z+3];let M,O;O=(.3*D+.59*I+.11*L)/255,H==0&&(O=1),M=Math.floor((1-O)*(v.length-1)),S&&(M=v.length-M-1);let y=v[M];(y===void 0||y==" ")&&(y="&nbsp;"),b?j+="<span style='color:rgb("+D+","+I+","+L+");"+(f?"background-color:rgb("+D+","+I+","+L+");":"")+(C?"opacity:"+H/255+";":"")+"'>"+y+"</span>":j+=y}j+="<br/>"}e.innerHTML=`<tr><td style="display:block;width:${o}px;height:${i}px;overflow:hidden">${j}</td></tr>`}}}function ne({renderIndex:n=1,bgColor:t="black",fgColor:g="white",characters:a=" .:-+*=%@#",invert:m=!0,color:c=!1,resolution:b=.15}){const{size:C,gl:f,scene:S,camera:x}=K(),o=h.useMemo(()=>{const i=new oe(f,a,{invert:m,color:c,resolution:b});return i.domElement.style.position="absolute",i.domElement.style.top="0px",i.domElement.style.left="0px",i.domElement.style.pointerEvents="none",i},[a,m,c,b]);return h.useLayoutEffect(()=>{o.domElement.style.color=g,o.domElement.style.backgroundColor=t},[g,t]),h.useEffect(()=>(f.domElement.style.opacity="0",f.domElement.parentNode.appendChild(o.domElement),()=>{f.domElement.style.opacity="1",f.domElement.parentNode.removeChild(o.domElement)}),[o]),h.useEffect(()=>{o.setSize(C.width,C.height)},[o,C]),Q(i=>{o.render(S,x)},n),h.createElement(h.Fragment,null)}function se(){return r.jsx("group",{position:[-15,0,0]})}const re=()=>r.jsxs(U,{shadows:!0,dpr:[1,2],style:{height:"60vh"},gl:{alpha:!1},scene:{background:new Y(16777215)},camera:{position:[0,-50,50],fov:45},children:[r.jsx(Z,{}),r.jsx(ee,{children:r.jsx(te,{axisColors:["red","green","blue"],labelColor:"black"})}),r.jsx("ambientLight",{intensity:Math.PI}),r.jsx(ne,{characters:"#"}),r.jsx(se,{})]}),ae=`import {
  AsciiRenderer,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

function Com() {
  return <group position={[-15, 0, 0]}></group>
}

const Geo = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ height: '60vh' }}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, -50, 50], fov: 45 }}
    >
      <OrbitControls />
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <AsciiRenderer characters="#" />
      <Com />
    </Canvas>
  )
}
export default Geo
`,ie=void 0,le=void 0,ce={code:ae,title:ie,desc:le},me=!0,fe=Object.freeze(Object.defineProperty({__proto__:null,default:re,demoMeta:ce,isDemo:me},Symbol.toStringTag,{value:"Module"}));function A(n){const{Demo:t}={...T(),...n.components};return t||ue("Demo"),r.jsx(t,{...fe})}function de(n={}){const{wrapper:t}={...T(),...n.components};return t?r.jsx(t,{...n,children:r.jsx(A,{...n})}):A(n)}function ue(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const pe=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),F={};F.outlineInfo=J;F.main=pe;export{F as default};
