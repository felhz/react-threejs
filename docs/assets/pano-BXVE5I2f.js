import{p as j}from"./pano_-FU1-d8Ot.js";import{r as i,j as r,u as d}from"./ssg-client-BjIyN6CM.js";import{e as x,u as f,T as m,y as l,K as h,D as M,C as O}from"./react-three-fiber.esm-Bq880bHc.js";import{s as T}from"./index-CSwHO5PT.js";import{O as _}from"./OrbitControls-nVXaaqoj.js";const c=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function u(e,n){const s=x(o=>o.gl),t=f(m,c(e)?Object.values(e):e);return i.useLayoutEffect(()=>{n==null||n(t)},[n]),i.useEffect(()=>{if("initTexture"in s){let o=[];Array.isArray(t)?o=t:t instanceof l?o=[t]:c(t)&&(o=Object.values(t)),o.forEach(a=>{a instanceof l&&s.initTexture(a)})}},[s,t]),i.useMemo(()=>{if(c(e)){const o={};let a=0;for(const y in e)o[y]=t[a++];return o}else return t},[e,t])}u.preload=e=>f.preload(m,e);u.clear=e=>f.clear(m,e);let C=["/pano/left.png","/pano/right.png","/pano/top.png","/pano/bottom.png","/pano/front.png","/pano/back.png"].map(e=>T+e);const S=()=>{const{gl:e,camera:n}=x(),s=u(C);return i.useEffect(()=>{e.setSize(300,300),n.position.set(1,0,-1.5)},[]),r.jsx("mesh",{scale:[3,3,3],material:s.map((t,g)=>new h({map:t,side:M})),children:r.jsx("boxGeometry",{args:[3,3,3]})})},v=()=>r.jsxs(O,{children:[r.jsx(_,{enableZoom:!1}),r.jsx("ambientLight",{intensity:Math.PI}),r.jsx(S,{})]}),E=`import { OrbitControls } from '@react-three/drei';
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
`,P=void 0,D=void 0,k={code:E,title:P,desc:D},A=!0,w=Object.freeze(Object.defineProperty({__proto__:null,default:v,demoMeta:k,isDemo:A},Symbol.toStringTag,{value:"Module"}));function p(e){const{Demo:n}={...d(),...e.components};return n||L("Demo"),r.jsx(n,{...w})}function I(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(p,{...e})}):p(e)}function L(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const z=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),b={};b.outlineInfo=j;b.main=z;export{b as default};
