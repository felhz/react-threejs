import{p as J}from"./earth_-FU1-d8Ot.js";import{r as e,j as h,u as q}from"./ssg-client-yjrRXNAq.js";import{u as x,W as K,L as z,H as N,D as U,F as $,a as R,_ as C,S as ee,c as te,V as P,O as re,Q as O,M as ne,C as oe,b as ae,d as j,e as se,A as ce,f as ie,g as le,h as ue,i as me,T as pe,j as S}from"./OrbitControls-D_SWTlsP.js";function de(t,o,m){const a=x(u=>u.size),c=x(u=>u.viewport),d=typeof t=="number"?t:a.width*c.dpr,l=a.height*c.dpr,n=(typeof t=="number"?m:t)||{},{samples:i=0,depth:g,...f}=n,p=e.useMemo(()=>{const u=new K(d,l,{minFilter:z,magFilter:z,type:N,...f});return g&&(u.depthTexture=new U(d,l,$)),u.samples=i,u},[]);return e.useLayoutEffect(()=>{p.setSize(d,l),i&&(p.samples=i)},[i,p,d,l]),e.useEffect(()=>()=>p.dispose(),[]),p}const fe=t=>typeof t=="function",he=e.forwardRef(({envMap:t,resolution:o=256,frames:m=1/0,children:a,makeDefault:c,...d},l)=>{const n=x(({set:r})=>r),i=x(({camera:r})=>r),g=x(({size:r})=>r),f=e.useRef(null);e.useImperativeHandle(l,()=>f.current,[]);const p=e.useRef(null),u=de(o);e.useLayoutEffect(()=>{d.manual||f.current.updateProjectionMatrix()},[g,d]),e.useLayoutEffect(()=>{f.current.updateProjectionMatrix()}),e.useLayoutEffect(()=>{if(c){const r=i;return n(()=>({camera:f.current})),()=>n(()=>({camera:r}))}},[f,c,n]);let E=0,w=null;const s=fe(a);return R(r=>{s&&(m===1/0||E<m)&&(p.current.visible=!1,r.gl.setRenderTarget(u),w=r.scene.background,t&&(r.scene.background=t),r.gl.render(r.scene,f.current),r.scene.background=w,r.gl.setRenderTarget(null),p.current.visible=!0,E++)}),e.createElement(e.Fragment,null,e.createElement("orthographicCamera",C({left:g.width/-2,right:g.width/2,top:g.height/2,bottom:g.height/-2,ref:f},d),!s&&a),e.createElement("group",{ref:p},s&&a(u.texture)))});function ge({defaultScene:t,defaultCamera:o,renderPriority:m=1}){const{gl:a,scene:c,camera:d}=x();let l;return R(()=>{l=a.autoClear,m===1&&(a.autoClear=!0,a.render(t,o)),a.autoClear=!1,a.clearDepth(),a.render(c,d),a.autoClear=l},m),e.createElement("group",{onPointerOver:()=>null})}function Ee({children:t,renderPriority:o=1}){const{scene:m,camera:a}=x(),[c]=e.useState(()=>new ee);return e.createElement(e.Fragment,null,te(e.createElement(e.Fragment,null,t,e.createElement(ge,{defaultScene:m,defaultCamera:a,renderPriority:o})),c,{events:{priority:o+1}}))}const W=e.createContext({}),we=()=>e.useContext(W),xe=2*Math.PI,_=new re,D=new ne,[v,T]=[new O,new O],G=new P,A=new P,ye=t=>"minPolarAngle"in t,k=t=>"getTarget"in t,Ce=({alignment:t="bottom-right",margin:o=[80,80],renderPriority:m=1,onUpdate:a,onTarget:c,children:d})=>{const l=x(y=>y.size),n=x(y=>y.camera),i=x(y=>y.controls),g=x(y=>y.invalidate),f=e.useRef(null),p=e.useRef(null),u=e.useRef(!1),E=e.useRef(0),w=e.useRef(new P(0,0,0)),s=e.useRef(new P(0,0,0));e.useEffect(()=>{s.current.copy(n.up)},[n]);const r=e.useCallback(y=>{u.current=!0,(i||c)&&(w.current=(c==null?void 0:c())||(k(i)?i.getTarget(w.current):i==null?void 0:i.target)),E.current=n.position.distanceTo(G),v.copy(n.quaternion),A.copy(y).multiplyScalar(E.current).add(G),_.lookAt(A),T.copy(_.quaternion),g()},[i,n,c,g]);R((y,I)=>{if(p.current&&f.current){var L;if(u.current)if(v.angleTo(T)<.01)u.current=!1,ye(i)&&n.up.copy(s.current);else{const Z=I*xe;v.rotateTowards(T,Z),n.position.set(0,0,1).applyQuaternion(v).multiplyScalar(E.current).add(w.current),n.up.set(0,1,0).applyQuaternion(v).normalize(),n.quaternion.copy(v),k(i)&&i.setPosition(n.position.x,n.position.y,n.position.z),a?a():i&&i.update(I),g()}D.copy(n.matrix).invert(),(L=f.current)==null||L.quaternion.setFromRotationMatrix(D)}});const B=e.useMemo(()=>({tweenCamera:r}),[r]),[H,F]=o,Q=t.endsWith("-center")?0:t.endsWith("-left")?-l.width/2+H:l.width/2-H,Y=t.startsWith("center-")?0:t.startsWith("top-")?l.height/2-F:-l.height/2+F;return e.createElement(Ee,{renderPriority:m},e.createElement(W.Provider,{value:B},e.createElement(he,{makeDefault:!0,ref:p,position:[0,0,200]}),e.createElement("group",{ref:f,position:[Q,Y,0]},d)))};function b({scale:t=[.8,.05,.05],color:o,rotation:m}){return e.createElement("group",{rotation:m},e.createElement("mesh",{position:[.4,0,0]},e.createElement("boxGeometry",{args:t}),e.createElement("meshBasicMaterial",{color:o,toneMapped:!1})))}function M({onClick:t,font:o,disabled:m,arcStyle:a,label:c,labelColor:d,axisHeadScale:l=1,...n}){const i=x(s=>s.gl),g=e.useMemo(()=>{const s=document.createElement("canvas");s.width=64,s.height=64;const r=s.getContext("2d");return r.beginPath(),r.arc(32,32,16,0,2*Math.PI),r.closePath(),r.fillStyle=a,r.fill(),c&&(r.font=o,r.textAlign="center",r.fillStyle=d,r.fillText(c,32,41)),new oe(s)},[a,c,d,o]),[f,p]=e.useState(!1),u=(c?1:.75)*(f?1.2:1)*l,E=s=>{s.stopPropagation(),p(!0)},w=s=>{s.stopPropagation(),p(!1)};return e.createElement("sprite",C({scale:u,onPointerOver:m?void 0:E,onPointerOut:m?void 0:t||w},n),e.createElement("spriteMaterial",{map:g,"map-anisotropy":i.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:c?1:.75,toneMapped:!1}))}const Pe=({hideNegativeAxes:t,hideAxisHeads:o,disabled:m,font:a="18px Inter var, Arial, sans-serif",axisColors:c=["#ff2060","#20df80","#2080ff"],axisHeadScale:d=1,axisScale:l,labels:n=["X","Y","Z"],labelColor:i="#000",onClick:g,...f})=>{const[p,u,E]=c,{tweenCamera:w}=we(),s={font:a,disabled:m,labelColor:i,onClick:g,axisHeadScale:d,onPointerDown:m?void 0:r=>{w(r.object.position),r.stopPropagation()}};return e.createElement("group",C({scale:40},f),e.createElement(b,{color:p,rotation:[0,0,0],scale:l}),e.createElement(b,{color:u,rotation:[0,0,Math.PI/2],scale:l}),e.createElement(b,{color:E,rotation:[0,-Math.PI/2,0],scale:l}),!o&&e.createElement(e.Fragment,null,e.createElement(M,C({arcStyle:p,position:[1,0,0],label:n[0]},s)),e.createElement(M,C({arcStyle:u,position:[0,1,0],label:n[1]},s)),e.createElement(M,C({arcStyle:E,position:[0,0,1],label:n[2]},s)),!t&&e.createElement(e.Fragment,null,e.createElement(M,C({arcStyle:p,position:[-1,0,0]},s)),e.createElement(M,C({arcStyle:u,position:[0,-1,0]},s)),e.createElement(M,C({arcStyle:E,position:[0,0,-1]},s)))))};function ve(){const o=new ce(0,0,20,0,Math.PI*2,!1),m=o.getPoints(50),[a,c]=e.useState(new ie),d=le(pe,"/react-threejs/earth.jpg"),l=new S(10,Math.PI/180*0,0),n=new S(12,Math.PI/180*45,0),i=new S(13,Math.PI/180*90,0),g=new S(12,Math.PI/180*135,0),f=new S(10,Math.PI/180*180,0);return new ue([new P().setFromSpherical(l),new P().setFromSpherical(n),new P().setFromSpherical(i),new P().setFromSpherical(g),new P().setFromSpherical(f)],!1,"catmullrom",.5).getPoints(100),R(u=>{const w=u.clock.getElapsedTime()/15%1,s=o.getPointAt(w);c(s)}),h.jsxs("group",{children:[h.jsxs("mesh",{children:[h.jsx("sphereGeometry",{args:[10]}),h.jsx("meshStandardMaterial",{map:d})]}),h.jsxs("mesh",{children:[h.jsx(me,{points:m,color:new j(65280)}),h.jsxs("mesh",{position:[...a,0],children:[h.jsx("sphereGeometry",{args:[1]}),h.jsx("meshBasicMaterial",{color:new j(255),opacity:.5,transparent:!0})]})]})]})}const Me=()=>h.jsxs(ae,{shadows:!0,dpr:[1,2],style:{height:"80vh"},gl:{alpha:!1},scene:{background:new j(16777215)},camera:{position:[0,0,80],fov:45},children:[h.jsx(se,{}),h.jsx(Ce,{children:h.jsx(Pe,{axisColors:["red","green","blue"],labelColor:"black"})}),h.jsx("ambientLight",{intensity:Math.PI}),h.jsx(ve,{})]}),Se=`import {
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
      style={{ height: '80vh' }}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 80], fov: 45 }}
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
`,Re=void 0,Te=void 0,be={code:Se,title:Re,desc:Te},je=!0,He=Object.freeze(Object.defineProperty({__proto__:null,default:Me,demoMeta:be,isDemo:je},Symbol.toStringTag,{value:"Module"}));function V(t){const{Demo:o}={...q(),...t.components};return o||Ie("Demo"),h.jsx(o,{...He})}function Fe(t={}){const{wrapper:o}={...q(),...t.components};return o?h.jsx(o,{...t,children:h.jsx(V,{...t})}):V(t)}function Ie(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const Le=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"})),X={};X.outlineInfo=J;X.main=Le;export{X as default};
