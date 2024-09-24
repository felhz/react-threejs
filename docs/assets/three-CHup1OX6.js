import{p as C}from"./three_-FU1-d8Ot.js";import{r as s,j as e,u as x}from"./index-BALAsH1c.js";import{_ as v,h as E,V as y,b as S,d as b,e as _,a as w,i as R}from"./OrbitControls-HGFTzvJh.js";function T(n,t){const r=n+"Geometry";return s.forwardRef(({args:o,children:a,...i},u)=>{const c=s.useRef(null);return s.useImperativeHandle(u,()=>c.current),s.useLayoutEffect(()=>void(t==null?void 0:t(c.current))),s.createElement("mesh",v({ref:c},i),s.createElement(r,{attach:"geometry",args:o}),a)})}const f=T("sphere");function d(n,t,r){const o=n*Math.PI/180,a=(t-180)*Math.PI/180,i=-r*Math.cos(o)*Math.cos(a),u=r*Math.sin(o),c=r*Math.cos(o)*Math.sin(a);return new y(i,u,c)}const p=40.7128,m=-74.006,l=15,h=d(p,m,l),g=new E([h,d(p-10,m,l+2),d(p-20,m,l)],!1,"catmullrom",.5);function L(){const n=s.useRef();return w((t,r)=>{const o=t.clock.getElapsedTime(),a=Math.min(o/3,1),i=g.getPointAt(a);n.current.position.copy(i)}),console.log(h),e.jsxs(e.Fragment,{children:[e.jsx(f,{args:[l],children:e.jsx("meshStandardMaterial",{color:"hotpink",wireframe:!0})}),e.jsx(f,{position:h,scale:[.2,.2,.2],args:[1],ref:n,children:e.jsx("meshStandardMaterial",{color:"green"})}),e.jsx(R,{points:g.getPoints(50)})]})}const P=()=>e.jsxs(S,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new b(16777215)},camera:{position:[0,0,40],fov:45},children:[e.jsx(_,{}),e.jsx("axesHelper",{args:[10]}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(L,{})]}),I=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function latLongToVector3(lat, lon, radius) {
  const phi = (lat * Math.PI) / 180 // 纬度转换为弧度
  const theta = ((lon - 180) * Math.PI) / 180 // 经度转换为弧度，经度范围从 -180 到 180 度

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

// 示例使用
const latitude = 40.7128 // 纬度，例如纽约市
const longitude = -74.006 // 经度，例如纽约市
const radius = 15 // 球体半径

const position = latLongToVector3(latitude, longitude, radius)
const curve = new THREE.CatmullRomCurve3(
  [
    position,
    latLongToVector3(latitude - 10, longitude, radius + 2),
    latLongToVector3(latitude - 20, longitude, radius),
  ],
  false,
  'catmullrom',
  0.5
)
function Com() {
  const poi = useRef()
  useFrame((state, delta) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    // console.log(elapsed, 'elapsed');
    const t = Math.min(elapsed / 3, 1) // 归一化时间

    const point = curve.getPointAt(t)
    poi.current.position.copy(point)
  })
  console.log(position)
  return (
    <>
      <Sphere args={[radius]}>
        <meshStandardMaterial color="hotpink" wireframe />
      </Sphere>
      <Sphere position={position} scale={[0.2, 0.2, 0.2]} args={[1]} ref={poi}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <Line points={curve.getPoints(50)} />
    </>
  )
}

const Sphereg = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      <axesHelper args={[10]} />
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  )
}
export default Sphereg
`,O=void 0,V=void 0,k={code:I,title:O,desc:V},H=!0,D=Object.freeze(Object.defineProperty({__proto__:null,default:P,demoMeta:k,isDemo:H},Symbol.toStringTag,{value:"Module"}));function M(n){const{Demo:t}={...x(),...n.components};return t||F("Demo"),e.jsx(t,{...D})}function z(n={}){const{wrapper:t}={...x(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(M,{...n})}):M(n)}function F(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const X=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),j={};j.outlineInfo=C;j.main=X;export{j as default};
