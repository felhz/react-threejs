import{p as K}from"./earth_-FU1-d8Ot.js";import{r as e,j as h,u as W}from"./index-BALAsH1c.js";import{u as w,W as N,L as z,H as U,D as $,F as ee,a as T,_ as C,S as te,c as ne,V as y,O as re,Q as O,M as oe,C as ae,b as se,d as R,e as ce,A as ie,f as le,g as ue,h as me,i as _,T as pe,j as S}from"./OrbitControls-HGFTzvJh.js";function fe(t,o,m){const a=w(u=>u.size),c=w(u=>u.viewport),f=typeof t=="number"?t:a.width*c.dpr,l=a.height*c.dpr,r=(typeof t=="number"?m:t)||{},{samples:i=0,depth:g,...d}=r,p=e.useMemo(()=>{const u=new N(f,l,{minFilter:z,magFilter:z,type:U,...d});return g&&(u.depthTexture=new $(f,l,ee)),u.samples=i,u},[]);return e.useLayoutEffect(()=>{p.setSize(f,l),i&&(p.samples=i)},[i,p,f,l]),e.useEffect(()=>()=>p.dispose(),[]),p}const de=t=>typeof t=="function",he=e.forwardRef(({envMap:t,resolution:o=256,frames:m=1/0,children:a,makeDefault:c,...f},l)=>{const r=w(({set:n})=>n),i=w(({camera:n})=>n),g=w(({size:n})=>n),d=e.useRef(null);e.useImperativeHandle(l,()=>d.current,[]);const p=e.useRef(null),u=fe(o);e.useLayoutEffect(()=>{f.manual||d.current.updateProjectionMatrix()},[g,f]),e.useLayoutEffect(()=>{d.current.updateProjectionMatrix()}),e.useLayoutEffect(()=>{if(c){const n=i;return r(()=>({camera:d.current})),()=>r(()=>({camera:n}))}},[d,c,r]);let E=0,x=null;const s=de(a);return T(n=>{s&&(m===1/0||E<m)&&(p.current.visible=!1,n.gl.setRenderTarget(u),x=n.scene.background,t&&(n.scene.background=t),n.gl.render(n.scene,d.current),n.scene.background=x,n.gl.setRenderTarget(null),p.current.visible=!0,E++)}),e.createElement(e.Fragment,null,e.createElement("orthographicCamera",C({left:g.width/-2,right:g.width/2,top:g.height/2,bottom:g.height/-2,ref:d},f),!s&&a),e.createElement("group",{ref:p},s&&a(u.texture)))});function ge({defaultScene:t,defaultCamera:o,renderPriority:m=1}){const{gl:a,scene:c,camera:f}=w();let l;return T(()=>{l=a.autoClear,m===1&&(a.autoClear=!0,a.render(t,o)),a.autoClear=!1,a.clearDepth(),a.render(c,f),a.autoClear=l},m),e.createElement("group",{onPointerOver:()=>null})}function Ee({children:t,renderPriority:o=1}){const{scene:m,camera:a}=w(),[c]=e.useState(()=>new te);return e.createElement(e.Fragment,null,ne(e.createElement(e.Fragment,null,t,e.createElement(ge,{defaultScene:m,defaultCamera:a,renderPriority:o})),c,{events:{priority:o+1}}))}const X=e.createContext({}),we=()=>e.useContext(X),xe=2*Math.PI,G=new re,A=new oe,[M,b]=[new O,new O],k=new y,V=new y,Pe=t=>"minPolarAngle"in t,D=t=>"getTarget"in t,Ce=({alignment:t="bottom-right",margin:o=[80,80],renderPriority:m=1,onUpdate:a,onTarget:c,children:f})=>{const l=w(P=>P.size),r=w(P=>P.camera),i=w(P=>P.controls),g=w(P=>P.invalidate),d=e.useRef(null),p=e.useRef(null),u=e.useRef(!1),E=e.useRef(0),x=e.useRef(new y(0,0,0)),s=e.useRef(new y(0,0,0));e.useEffect(()=>{s.current.copy(r.up)},[r]);const n=e.useCallback(P=>{u.current=!0,(i||c)&&(x.current=(c==null?void 0:c())||(D(i)?i.getTarget(x.current):i==null?void 0:i.target)),E.current=r.position.distanceTo(k),M.copy(r.quaternion),V.copy(P).multiplyScalar(E.current).add(k),G.lookAt(V),b.copy(G.quaternion),g()},[i,r,c,g]);T((P,I)=>{if(p.current&&d.current){var L;if(u.current)if(M.angleTo(b)<.01)u.current=!1,Pe(i)&&r.up.copy(s.current);else{const J=I*xe;M.rotateTowards(b,J),r.position.set(0,0,1).applyQuaternion(M).multiplyScalar(E.current).add(x.current),r.up.set(0,1,0).applyQuaternion(M).normalize(),r.quaternion.copy(M),D(i)&&i.setPosition(r.position.x,r.position.y,r.position.z),a?a():i&&i.update(I),g()}A.copy(r.matrix).invert(),(L=d.current)==null||L.quaternion.setFromRotationMatrix(A)}});const Q=e.useMemo(()=>({tweenCamera:n}),[n]),[H,F]=o,Y=t.endsWith("-center")?0:t.endsWith("-left")?-l.width/2+H:l.width/2-H,Z=t.startsWith("center-")?0:t.startsWith("top-")?l.height/2-F:-l.height/2+F;return e.createElement(Ee,{renderPriority:m},e.createElement(X.Provider,{value:Q},e.createElement(he,{makeDefault:!0,ref:p,position:[0,0,200]}),e.createElement("group",{ref:d,position:[Y,Z,0]},f)))};function j({scale:t=[.8,.05,.05],color:o,rotation:m}){return e.createElement("group",{rotation:m},e.createElement("mesh",{position:[.4,0,0]},e.createElement("boxGeometry",{args:t}),e.createElement("meshBasicMaterial",{color:o,toneMapped:!1})))}function v({onClick:t,font:o,disabled:m,arcStyle:a,label:c,labelColor:f,axisHeadScale:l=1,...r}){const i=w(s=>s.gl),g=e.useMemo(()=>{const s=document.createElement("canvas");s.width=64,s.height=64;const n=s.getContext("2d");return n.beginPath(),n.arc(32,32,16,0,2*Math.PI),n.closePath(),n.fillStyle=a,n.fill(),c&&(n.font=o,n.textAlign="center",n.fillStyle=f,n.fillText(c,32,41)),new ae(s)},[a,c,f,o]),[d,p]=e.useState(!1),u=(c?1:.75)*(d?1.2:1)*l,E=s=>{s.stopPropagation(),p(!0)},x=s=>{s.stopPropagation(),p(!1)};return e.createElement("sprite",C({scale:u,onPointerOver:m?void 0:E,onPointerOut:m?void 0:t||x},r),e.createElement("spriteMaterial",{map:g,"map-anisotropy":i.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:c?1:.75,toneMapped:!1}))}const ye=({hideNegativeAxes:t,hideAxisHeads:o,disabled:m,font:a="18px Inter var, Arial, sans-serif",axisColors:c=["#ff2060","#20df80","#2080ff"],axisHeadScale:f=1,axisScale:l,labels:r=["X","Y","Z"],labelColor:i="#000",onClick:g,...d})=>{const[p,u,E]=c,{tweenCamera:x}=we(),s={font:a,disabled:m,labelColor:i,onClick:g,axisHeadScale:f,onPointerDown:m?void 0:n=>{x(n.object.position),n.stopPropagation()}};return e.createElement("group",C({scale:40},d),e.createElement(j,{color:p,rotation:[0,0,0],scale:l}),e.createElement(j,{color:u,rotation:[0,0,Math.PI/2],scale:l}),e.createElement(j,{color:E,rotation:[0,-Math.PI/2,0],scale:l}),!o&&e.createElement(e.Fragment,null,e.createElement(v,C({arcStyle:p,position:[1,0,0],label:r[0]},s)),e.createElement(v,C({arcStyle:u,position:[0,1,0],label:r[1]},s)),e.createElement(v,C({arcStyle:E,position:[0,0,1],label:r[2]},s)),!t&&e.createElement(e.Fragment,null,e.createElement(v,C({arcStyle:p,position:[-1,0,0]},s)),e.createElement(v,C({arcStyle:u,position:[0,-1,0]},s)),e.createElement(v,C({arcStyle:E,position:[0,0,-1]},s)))))};function Me(){const o=new ie(0,0,20,0,Math.PI*2,!1),m=o.getPoints(50),[a,c]=e.useState(new le),f=ue(pe,"/earth.jpg"),l=new S(10,Math.PI/180*0,0),r=new S(12,Math.PI/180*45,0),i=new S(13,Math.PI/180*90,0),g=new S(12,Math.PI/180*135,0),d=new S(10,Math.PI/180*180,0),u=new me([new y().setFromSpherical(l),new y().setFromSpherical(r),new y().setFromSpherical(i),new y().setFromSpherical(g),new y().setFromSpherical(d)],!1,"catmullrom",.5).getPoints(100);return T(E=>{const s=E.clock.getElapsedTime()/15%1,n=o.getPointAt(s);c(n)}),h.jsxs("group",{children:[h.jsxs("mesh",{children:[h.jsx("sphereGeometry",{args:[10]}),h.jsx("meshStandardMaterial",{map:f})]}),h.jsx(_,{points:u,color:new R(16711680)}),h.jsxs("mesh",{children:[h.jsx(_,{points:m,color:new R(65280)}),h.jsxs("mesh",{position:[...a,0],children:[h.jsx("sphereGeometry",{args:[1]}),h.jsx("meshBasicMaterial",{color:new R(255),opacity:.5,transparent:!0})]})]})]})}const ve=()=>h.jsxs(se,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new R(16777215)},camera:{position:[0,0,40],fov:45},children:[h.jsx(ce,{}),h.jsx(Ce,{children:h.jsx(ye,{axisColors:["red","green","blue"],labelColor:"black"})}),h.jsx("ambientLight",{intensity:Math.PI}),h.jsx(Me,{})]}),Se=`import {
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useState } from 'react'
import * as THREE from 'three'
function Com() {
  const radius = 10
  const arc = new THREE.ArcCurve(0, 0, radius + 10, 0, Math.PI * 2, false)
  const arcPoints = arc.getPoints(50)
  const [position, setPosition] = useState(new THREE.Vector2())
  const earth = useLoader(THREE.TextureLoader, '/earth.jpg')
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
`,Re=void 0,Te=void 0,be={code:Se,title:Re,desc:Te},je=!0,He=Object.freeze(Object.defineProperty({__proto__:null,default:ve,demoMeta:be,isDemo:je},Symbol.toStringTag,{value:"Module"}));function q(t){const{Demo:o}={...W(),...t.components};return o||Ie("Demo"),h.jsx(o,{...He})}function Fe(t={}){const{wrapper:o}={...W(),...t.components};return o?h.jsx(o,{...t,children:h.jsx(q,{...t})}):q(t)}function Ie(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const Le=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"})),B={};B.outlineInfo=K;B.main=Le;export{B as default};
