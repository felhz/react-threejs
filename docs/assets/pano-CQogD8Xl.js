import{p as c}from"./pano_-FU1-d8Ot.js";import{r as m,j as t,u as r}from"./ssg-client-CyA5FH7a.js";import{u as p,c as u,a3 as l,C as f}from"./react-three-fiber.esm-C-zgg9K9.js";import{s as d}from"./index-CSwHO5PT.js";import{u as x}from"./Texture-Bd2t9bJn.js";import{O as g}from"./OrbitControls-CXr8ktiK.js";let b=["/pano/left.png","/pano/right.png","/pano/top.png","/pano/bottom.png","/pano/front.png","/pano/back.png"].map(e=>d+e);const h=()=>{const{gl:e,camera:n}=p(),a=x(b);return m.useEffect(()=>{e.setSize(300,300),n.position.set(1,0,-1.5)},[]),t.jsx("mesh",{scale:[3,3,3],material:a.map((i,T)=>new u({map:i,side:l})),children:t.jsx("boxGeometry",{args:[3,3,3]})})},j=()=>t.jsxs(f,{children:[t.jsx(g,{enableZoom:!1}),t.jsx("ambientLight",{intensity:Math.PI}),t.jsx(h,{})]}),_=`import { OrbitControls } from '@react-three/drei';
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
`,C=void 0,M=void 0,S={code:_,title:C,desc:M},y=!0,O=Object.freeze(Object.defineProperty({__proto__:null,default:j,demoMeta:S,isDemo:y},Symbol.toStringTag,{value:"Module"}));function o(e){const{Demo:n}={...r(),...e.components};return n||v("Demo"),t.jsx(n,{...O})}function P(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(o,{...e})}):o(e)}function v(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const D=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=c;s.main=D;export{s as default};
