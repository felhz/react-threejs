import{p as K}from"./earth_-FU1-d8Ot.js";import{r as e,j as h,u as W}from"./index-CPgobmJe.js";import{c as w,W as N,d as z,H as U,D as $,F as ee,u as T,_ as C,S as te,e as re,V as y,f as ne,Q as O,M as oe,g as ae,a as se,b as R,O as ce,A as ie,h as le,i as ue,C as me,L as _,T as pe,j as S}from"./OrbitControls-C6VbckK3.js";function fe(t,o,m){const a=w(u=>u.size),c=w(u=>u.viewport),f=typeof t=="number"?t:a.width*c.dpr,l=a.height*c.dpr,n=(typeof t=="number"?m:t)||{},{samples:i=0,depth:g,...d}=n,p=e.useMemo(()=>{const u=new N(f,l,{minFilter:z,magFilter:z,type:U,...d});return g&&(u.depthTexture=new $(f,l,ee)),u.samples=i,u},[]);return e.useLayoutEffect(()=>{p.setSize(f,l),i&&(p.samples=i)},[i,p,f,l]),e.useEffect(()=>()=>p.dispose(),[]),p}const de=t=>typeof t=="function",he=e.forwardRef(({envMap:t,resolution:o=256,frames:m=1/0,children:a,makeDefault:c,...f},l)=>{const n=w(({set:r})=>r),i=w(({camera:r})=>r),g=w(({size:r})=>r),d=e.useRef(null);e.useImperativeHandle(l,()=>d.current,[]);const p=e.useRef(null),u=fe(o);e.useLayoutEffect(()=>{f.manual||d.current.updateProjectionMatrix()},[g,f]),e.useLayoutEffect(()=>{d.current.updateProjectionMatrix()}),e.useLayoutEffect(()=>{if(c){const r=i;return n(()=>({camera:d.current})),()=>n(()=>({camera:r}))}},[d,c,n]);let E=0,x=null;const s=de(a);return T(r=>{s&&(m===1/0||E<m)&&(p.current.visible=!1,r.gl.setRenderTarget(u),x=r.scene.background,t&&(r.scene.background=t),r.gl.render(r.scene,d.current),r.scene.background=x,r.gl.setRenderTarget(null),p.current.visible=!0,E++)}),e.createElement(e.Fragment,null,e.createElement("orthographicCamera",C({left:g.width/-2,right:g.width/2,top:g.height/2,bottom:g.height/-2,ref:d},f),!s&&a),e.createElement("group",{ref:p},s&&a(u.texture)))});function ge({defaultScene:t,defaultCamera:o,renderPriority:m=1}){const{gl:a,scene:c,camera:f}=w();let l;return T(()=>{l=a.autoClear,m===1&&(a.autoClear=!0,a.render(t,o)),a.autoClear=!1,a.clearDepth(),a.render(c,f),a.autoClear=l},m),e.createElement("group",{onPointerOver:()=>null})}function Ee({children:t,renderPriority:o=1}){const{scene:m,camera:a}=w(),[c]=e.useState(()=>new te);return e.createElement(e.Fragment,null,re(e.createElement(e.Fragment,null,t,e.createElement(ge,{defaultScene:m,defaultCamera:a,renderPriority:o})),c,{events:{priority:o+1}}))}const X=e.createContext({}),we=()=>e.useContext(X),xe=2*Math.PI,D=new ne,G=new oe,[v,j]=[new O,new O],A=new y,k=new y,Pe=t=>"minPolarAngle"in t,V=t=>"getTarget"in t,Ce=({alignment:t="bottom-right",margin:o=[80,80],renderPriority:m=1,onUpdate:a,onTarget:c,children:f})=>{const l=w(P=>P.size),n=w(P=>P.camera),i=w(P=>P.controls),g=w(P=>P.invalidate),d=e.useRef(null),p=e.useRef(null),u=e.useRef(!1),E=e.useRef(0),x=e.useRef(new y(0,0,0)),s=e.useRef(new y(0,0,0));e.useEffect(()=>{s.current.copy(n.up)},[n]);const r=e.useCallback(P=>{u.current=!0,(i||c)&&(x.current=(c==null?void 0:c())||(V(i)?i.getTarget(x.current):i==null?void 0:i.target)),E.current=n.position.distanceTo(A),v.copy(n.quaternion),k.copy(P).multiplyScalar(E.current).add(A),D.lookAt(k),j.copy(D.quaternion),g()},[i,n,c,g]);T((P,I)=>{if(p.current&&d.current){var L;if(u.current)if(v.angleTo(j)<.01)u.current=!1,Pe(i)&&n.up.copy(s.current);else{const J=I*xe;v.rotateTowards(j,J),n.position.set(0,0,1).applyQuaternion(v).multiplyScalar(E.current).add(x.current),n.up.set(0,1,0).applyQuaternion(v).normalize(),n.quaternion.copy(v),V(i)&&i.setPosition(n.position.x,n.position.y,n.position.z),a?a():i&&i.update(I),g()}G.copy(n.matrix).invert(),(L=d.current)==null||L.quaternion.setFromRotationMatrix(G)}});const Q=e.useMemo(()=>({tweenCamera:r}),[r]),[H,F]=o,Y=t.endsWith("-center")?0:t.endsWith("-left")?-l.width/2+H:l.width/2-H,Z=t.startsWith("center-")?0:t.startsWith("top-")?l.height/2-F:-l.height/2+F;return e.createElement(Ee,{renderPriority:m},e.createElement(X.Provider,{value:Q},e.createElement(he,{makeDefault:!0,ref:p,position:[0,0,200]}),e.createElement("group",{ref:d,position:[Y,Z,0]},f)))};function b({scale:t=[.8,.05,.05],color:o,rotation:m}){return e.createElement("group",{rotation:m},e.createElement("mesh",{position:[.4,0,0]},e.createElement("boxGeometry",{args:t}),e.createElement("meshBasicMaterial",{color:o,toneMapped:!1})))}function M({onClick:t,font:o,disabled:m,arcStyle:a,label:c,labelColor:f,axisHeadScale:l=1,...n}){const i=w(s=>s.gl),g=e.useMemo(()=>{const s=document.createElement("canvas");s.width=64,s.height=64;const r=s.getContext("2d");return r.beginPath(),r.arc(32,32,16,0,2*Math.PI),r.closePath(),r.fillStyle=a,r.fill(),c&&(r.font=o,r.textAlign="center",r.fillStyle=f,r.fillText(c,32,41)),new ae(s)},[a,c,f,o]),[d,p]=e.useState(!1),u=(c?1:.75)*(d?1.2:1)*l,E=s=>{s.stopPropagation(),p(!0)},x=s=>{s.stopPropagation(),p(!1)};return e.createElement("sprite",C({scale:u,onPointerOver:m?void 0:E,onPointerOut:m?void 0:t||x},n),e.createElement("spriteMaterial",{map:g,"map-anisotropy":i.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:c?1:.75,toneMapped:!1}))}const ye=({hideNegativeAxes:t,hideAxisHeads:o,disabled:m,font:a="18px Inter var, Arial, sans-serif",axisColors:c=["#ff2060","#20df80","#2080ff"],axisHeadScale:f=1,axisScale:l,labels:n=["X","Y","Z"],labelColor:i="#000",onClick:g,...d})=>{const[p,u,E]=c,{tweenCamera:x}=we(),s={font:a,disabled:m,labelColor:i,onClick:g,axisHeadScale:f,onPointerDown:m?void 0:r=>{x(r.object.position),r.stopPropagation()}};return e.createElement("group",C({scale:40},d),e.createElement(b,{color:p,rotation:[0,0,0],scale:l}),e.createElement(b,{color:u,rotation:[0,0,Math.PI/2],scale:l}),e.createElement(b,{color:E,rotation:[0,-Math.PI/2,0],scale:l}),!o&&e.createElement(e.Fragment,null,e.createElement(M,C({arcStyle:p,position:[1,0,0],label:n[0]},s)),e.createElement(M,C({arcStyle:u,position:[0,1,0],label:n[1]},s)),e.createElement(M,C({arcStyle:E,position:[0,0,1],label:n[2]},s)),!t&&e.createElement(e.Fragment,null,e.createElement(M,C({arcStyle:p,position:[-1,0,0]},s)),e.createElement(M,C({arcStyle:u,position:[0,-1,0]},s)),e.createElement(M,C({arcStyle:E,position:[0,0,-1]},s)))))};function ve(){const o=new ie(0,0,20,0,Math.PI*2,!1),m=o.getPoints(50),[a,c]=e.useState(new le),f=ue(pe,"/react-threejs/earth.jpg"),l=new S(10,Math.PI/180*0,0),n=new S(12,Math.PI/180*45,0),i=new S(13,Math.PI/180*90,0),g=new S(12,Math.PI/180*135,0),d=new S(10,Math.PI/180*180,0),u=new me([new y().setFromSpherical(l),new y().setFromSpherical(n),new y().setFromSpherical(i),new y().setFromSpherical(g),new y().setFromSpherical(d)],!1,"catmullrom",.5).getPoints(100);return T(E=>{const s=E.clock.getElapsedTime()/15%1,r=o.getPointAt(s);c(r)}),h.jsxs("group",{children:[h.jsxs("mesh",{children:[h.jsx("sphereGeometry",{args:[10]}),h.jsx("meshStandardMaterial",{map:f})]}),h.jsx(_,{points:u,color:new R(16711680)}),h.jsxs("mesh",{children:[h.jsx(_,{points:m,color:new R(65280)}),h.jsxs("mesh",{position:[...a,0],children:[h.jsx("sphereGeometry",{args:[1]}),h.jsx("meshBasicMaterial",{color:new R(255),opacity:.5,transparent:!0})]})]})]})}const Me=()=>h.jsxs(se,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new R(16777215)},camera:{position:[0,0,40],fov:45},children:[h.jsx(ce,{}),h.jsx(Ce,{children:h.jsx(ye,{axisColors:["red","green","blue"],labelColor:"black"})}),h.jsx("ambientLight",{intensity:Math.PI}),h.jsx(ve,{})]}),Se=`import {
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useState } from 'react'
import * as THREE from 'three'
const isDev = import.meta.env.MODE === 'development'
function Com() {
  const radius = 10
  const arc = new THREE.ArcCurve(0, 0, radius + 10, 0, Math.PI * 2, false)
  const arcPoints = arc.getPoints(50)
  const [position, setPosition] = useState(new THREE.Vector2())
  const earth = useLoader(
    THREE.TextureLoader,
    isDev ? '/earth.jpg' : '/react-threejs/earth.jpg'
  )
  const start = new THREE.Spherical(radius + 0, (Math.PI / 180) * 0, 0)
  const start1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 45, 0)
  const center = new THREE.Spherical(radius + 3, (Math.PI / 180) * 90, 0)
  const center1 = new THREE.Spherical(radius + 2, (Math.PI / 180) * 135, 0)
  const end = new THREE.Spherical(radius + 0, (Math.PI / 180) * 180, 0)

  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3().setFromSpherical(start),
      new THREE.Vector3().setFromSpherical(start1),
      new THREE.Vector3().setFromSpherical(center),
      new THREE.Vector3().setFromSpherical(center1),
      new THREE.Vector3().setFromSpherical(end),
    ],
    false,
    'catmullrom',
    0.5
  )
  const curvePoints = curve.getPoints(100)
  useFrame((state) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    const t = (elapsed / 15) % 1
    const point = arc.getPointAt(t)
    setPosition(point)
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[radius]} />
        <meshStandardMaterial map={earth} />
      </mesh>
      <Line points={curvePoints} color={new THREE.Color(0xff0000)} />
      <mesh>
        <Line points={arcPoints} color={new THREE.Color(0x00ff00)}></Line>
        <mesh position={[...position, 0]}>
          <sphereGeometry args={[1]} />
          <meshBasicMaterial
            color={new THREE.Color(0x0000ff)}
            opacity={0.5}
            transparent={true}
          />
        </mesh>
      </mesh>
    </group>
  )
}

const Map = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  )
}
export default Map
`,Re=void 0,Te=void 0,je={code:Se,title:Re,desc:Te},be=!0,He=Object.freeze(Object.defineProperty({__proto__:null,default:Me,demoMeta:je,isDemo:be},Symbol.toStringTag,{value:"Module"}));function q(t){const{Demo:o}={...W(),...t.components};return o||Ie("Demo"),h.jsx(o,{...He})}function Fe(t={}){const{wrapper:o}={...W(),...t.components};return o?h.jsx(o,{...t,children:h.jsx(q,{...t})}):q(t)}function Ie(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const Le=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"})),B={};B.outlineInfo=K;B.main=Le;export{B as default};
