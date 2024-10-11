import{p as D}from"./hub_-FU1-d8Ot.js";import{r as e,j as r,u as P}from"./ssg-client-DrLVhK43.js";import{u as v,z as E,_ as k,f as L,aa as z,A as X,a5 as G,K as q,Q as A}from"./react-three-fiber.esm-CpNsHlsP.js";import{O as $}from"./OrbitControls-Bk6UaeQa.js";import{C as B}from"./shapes-CYq1O7gU.js";import{u as H,H as K,O as Q}from"./Hud-DLqYbN00.js";import{T as J}from"./Text-DbXc_uJO.js";const N=t=>typeof t=="function",U=e.forwardRef(({envMap:t,resolution:a=256,frames:i=1/0,makeDefault:f,children:l,...u},d)=>{const m=v(({set:o})=>o),p=v(({camera:o})=>o),n=v(({size:o})=>o),s=e.useRef(null);e.useImperativeHandle(d,()=>s.current,[]);const g=e.useRef(null),y=H(a);e.useLayoutEffect(()=>{u.manual||(s.current.aspect=n.width/n.height)},[n,u]),e.useLayoutEffect(()=>{s.current.updateProjectionMatrix()});let h=0,b=null;const c=N(l);return E(o=>{c&&(i===1/0||h<i)&&(g.current.visible=!1,o.gl.setRenderTarget(y),b=o.scene.background,t&&(o.scene.background=t),o.gl.render(o.scene,s.current),o.scene.background=b,o.gl.setRenderTarget(null),g.current.visible=!0,h++)}),e.useLayoutEffect(()=>{if(f){const o=p;return m(()=>({camera:s.current})),()=>m(()=>({camera:o}))}},[s,f,m]),e.createElement(e.Fragment,null,e.createElement("perspectiveCamera",k({ref:s},u),!c&&l),e.createElement("group",{ref:g},c&&l(y.texture)))}),V=e.forwardRef(({children:t,compute:a,width:i,height:f,samples:l=8,renderPriority:u=0,eventPriority:d=0,frames:m=1/0,stencilBuffer:p=!1,depthBuffer:n=!0,generateMipmaps:s=!1,...g},y)=>{const{size:h,viewport:b}=v(),c=H((i||h.width)*b.dpr,(f||h.height)*b.dpr,{samples:l,stencilBuffer:p,depthBuffer:n,generateMipmaps:s}),[o]=e.useState(()=>new L),F=e.useCallback((S,j,C)=>{var T,w;let x=(T=c.texture)==null?void 0:T.__r3f.parent;for(;x&&!(x instanceof z);)x=x.__r3f.parent;if(!x)return!1;C.raycaster.camera||C.events.compute(S,C,(w=C.previousRoot)==null?void 0:w.getState());const[_]=C.raycaster.intersectObject(x);if(!_)return!1;const R=_.uv;if(!R)return!1;j.raycaster.setFromCamera(j.pointer.set(R.x*2-1,R.y*2-1),j.camera)},[]);return e.useImperativeHandle(y,()=>c.texture,[c]),e.createElement(e.Fragment,null,X(e.createElement(W,{renderPriority:u,frames:m,fbo:c},t,e.createElement("group",{onPointerOver:()=>null})),o,{events:{compute:a||F,priority:d}}),e.createElement("primitive",k({object:c.texture},g)))});function W({frames:t,renderPriority:a,children:i,fbo:f}){let l=0,u,d,m,p;return E(n=>{(t===1/0||l<t)&&(u=n.gl.autoClear,d=n.gl.xr.enabled,m=n.gl.getRenderTarget(),p=n.gl.xr.isPresenting,n.gl.autoClear=!0,n.gl.xr.enabled=!1,n.gl.xr.isPresenting=!1,n.gl.setRenderTarget(f),n.gl.render(n.scene,n.camera),n.gl.setRenderTarget(m),n.gl.autoClear=u,n.gl.xr.enabled=d,n.gl.xr.isPresenting=p,l++)},a),e.createElement(e.Fragment,null,i)}let M=new G;const Y=t=>r.jsxs(V,{attach:"map",children:[r.jsx("color",{attach:"background",args:["white"]}),r.jsx(Q,{makeDefault:!0,left:-1,right:1,top:1,bottom:-1,position:[0,0,10],zoom:.5}),r.jsx(J,{color:"red",children:t.text})]});function Z(){const{camera:t,viewport:a}=v(),i=e.useRef();return e.useEffect(()=>{console.log(a,"viewport",t)},[]),E(()=>{M.copy(t.matrix).invert(),i.current.quaternion.setFromRotationMatrix(M)}),r.jsxs(K,{children:[r.jsx(U,{makeDefault:!0,position:[5,3,10]}),r.jsx("ambientLight",{intensity:Math.PI}),r.jsxs("mesh",{ref:i,children:[r.jsx("boxGeometry",{}),r.jsx("meshStandardMaterial",{color:"hotpink",children:r.jsx(Y,{text:"1"})})]})]})}const ee=()=>r.jsxs(q,{shadows:!0,gl:{alpha:!1},scene:{background:new A(16777215)},children:[r.jsx($,{}),r.jsx("ambientLight",{intensity:Math.PI}),r.jsx(Z,{}),r.jsx(B,{"material-color":"hotpink"})]}),te=`import {
  Circle,
  Hud,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

let matrix = new THREE.Matrix4();

const Textrue = (props) => {
  return (
    <RenderTexture attach="map">
      <color attach="background" args={['white']} />
      <OrthographicCamera
        makeDefault
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        position={[0, 0, 10]}
        zoom={0.5}
      />
      <Text color="red">{props.text}</Text>
    </RenderTexture>
  );
};
function Com() {
  const { camera, viewport } = useThree();
  const mesh = useRef();
  useEffect(() => {
    console.log(viewport, 'viewport', camera);
  }, []);
  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    mesh.current.quaternion.setFromRotationMatrix(matrix);
  });

  return (
    <Hud>
      <PerspectiveCamera makeDefault position={[5, 3, 10]} />
      <ambientLight intensity={Math.PI} />
      <mesh ref={mesh}>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="hotpink">
          <Textrue text="1" />
        </meshStandardMaterial>
      </mesh>
    </Hud>
  );
}

const Hub = () => {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
    >
      <OrbitControls />
      <ambientLight intensity={Math.PI} />
      <Com />
      <Circle material-color="hotpink"></Circle>
    </Canvas>
  );
};
export default Hub;
`,ne=void 0,re=void 0,oe={code:te,title:ne,desc:re},ae=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee,demoMeta:oe,isDemo:ae},Symbol.toStringTag,{value:"Module"}));function O(t){const{Demo:a}={...P(),...t.components};return a||ce("Demo"),r.jsx(a,{...ie})}function se(t={}){const{wrapper:a}={...P(),...t.components};return a?r.jsx(a,{...t,children:r.jsx(O,{...t})}):O(t)}function ce(t,a){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const le=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),I={};I.outlineInfo=D;I.main=le;export{I as default};
