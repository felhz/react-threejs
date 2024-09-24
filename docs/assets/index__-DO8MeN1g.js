import{p as v}from"./_-FU1-d8Ot.js";import{j as n,r as C,u as h}from"./index-CPgobmJe.js";import{C as y,V as S,a as b,b as w,O as E,u as T,L as _}from"./OrbitControls-C6VbckK3.js";import{S as u}from"./shapes-BOxPPXpl.js";function c(t,e,o){const s=t*Math.PI/180,r=(e-180)*Math.PI/180,i=-o*Math.cos(s)*Math.cos(r),j=o*Math.sin(s),M=o*Math.cos(s)*Math.sin(r);return new S(i,j,M)}const l=40.7128,d=-74.006,a=15,p=c(l,d,a),m=new y([p,c(l-10,d,a+2),c(l-20,d,a)],!1,"catmullrom",.5);function L(){const t=C.useRef();return T((e,o)=>{const s=e.clock.getElapsedTime(),r=Math.min(s/3,1),i=m.getPointAt(r);t.current.position.copy(i)}),console.log(p),n.jsxs(n.Fragment,{children:[n.jsx(u,{args:[a],children:n.jsx("meshStandardMaterial",{color:"hotpink",wireframe:!0})}),n.jsx(u,{position:p,scale:[.2,.2,.2],args:[1],ref:t,children:n.jsx("meshStandardMaterial",{color:"green"})}),n.jsx(_,{points:m.getPoints(50)})]})}const P=()=>n.jsxs(b,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new w(16777215)},camera:{position:[0,0,40],fov:45},children:[n.jsx(E,{}),n.jsx("axesHelper",{args:[10]}),n.jsx("ambientLight",{intensity:Math.PI}),n.jsx(L,{})]}),R=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
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
`,O=void 0,D=void 0,V={code:R,title:O,desc:D},k=!0,H=Object.freeze(Object.defineProperty({__proto__:null,default:P,demoMeta:V,isDemo:k},Symbol.toStringTag,{value:"Module"}));function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",...h(),...t.components},{Demo:o}=e;return o||z("Demo"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"vite-pages-app-starter",children:"vite-pages app starter"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"/react-threejs/",children:"展示地址"})}),`
`,n.jsx(o,{...H}),`
`,n.jsx(e.h1,{id:"how-to-use",children:"How to use"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"npm install"})," or ",n.jsx(e.code,{children:"pnpm install"})," or ",n.jsx(e.code,{children:"yarn"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"npm run dev"})," You can now play with the local develop environment."]}),`
`,n.jsxs(e.p,{children:["Edit ",n.jsx(e.code,{children:"pages/page1$.tsx"})," or other source files, the playground will inflect your change instantly."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"npm run build"})," The app are built and served."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"npm run ssr"})," The app are built into a static site (Static-Site Generation) and served."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h1,{id:"react-threejs",children:"react-threejs"})]})}function I(t={}){const{wrapper:e}={...h(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(f,{...t})}):f(t)}function z(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function x(t){return n.jsx(I,{})}function F(t={}){const{wrapper:e}={...h(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(x,{...t})}):x()}const X=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),g={};g.outlineInfo=v;g.main=X;export{g as default};
