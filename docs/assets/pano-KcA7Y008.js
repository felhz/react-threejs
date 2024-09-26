import{p as j}from"./pano_-FU1-d8Ot.js";import{r as i,j as r,u as d}from"./ssg-client-4kCfdLIF.js";import{e as x,u as f,T as u,y as m,K as h,D as M,C as O}from"./react-three-fiber.esm-BGKXzqMs.js";import{O as _}from"./OrbitControls-HsT3lwqv.js";const c=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function l(e,n){const s=x(o=>o.gl),t=f(u,c(e)?Object.values(e):e);return i.useLayoutEffect(()=>{n==null||n(t)},[n]),i.useEffect(()=>{if("initTexture"in s){let o=[];Array.isArray(t)?o=t:t instanceof m?o=[t]:c(t)&&(o=Object.values(t)),o.forEach(a=>{a instanceof m&&s.initTexture(a)})}},[s,t]),i.useMemo(()=>{if(c(e)){const o={};let a=0;for(const y in e)o[y]=t[a++];return o}else return t},[e,t])}l.preload=e=>f.preload(u,e);l.clear=e=>f.clear(u,e);const T=()=>{const{gl:e,camera:n}=x(),s=l(["/pano/left.png","/pano/right.png","/pano/top.png","/pano/bottom.png","/pano/front.png","/pano/back.png"]);return i.useEffect(()=>{e.setSize(300,300),n.position.set(1,0,-1.5)},[]),r.jsx("mesh",{scale:[3,3,3],material:s.map((t,g)=>new h({map:t,side:M})),children:r.jsx("boxGeometry",{args:[3,3,3]})})},C=()=>r.jsxs(O,{children:[r.jsx(_,{enableZoom:!1}),r.jsx("ambientLight",{intensity:Math.PI}),r.jsx(T,{})]}),S=`import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const Pano = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={Math.PI} />
      <Scene></Scene>
    </Canvas>
  );
};
export default Pano;
`,v=void 0,E=void 0,D={code:S,title:v,desc:E},P=!0,k=Object.freeze(Object.defineProperty({__proto__:null,default:C,demoMeta:D,isDemo:P},Symbol.toStringTag,{value:"Module"}));function p(e){const{Demo:n}={...d(),...e.components};return n||w("Demo"),r.jsx(n,{...k})}function A(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(p,{...e})}):p(e)}function w(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const I=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),b={};b.outlineInfo=j;b.main=I;export{b as default};
