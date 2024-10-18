import{p as $}from"./datadiff_-FU1-d8Ot.js";import{r,j as t,u as L}from"./ssg-client-GvFJdTbJ.js";import{B as A,V as Y,S as F,_ as B,a as V,M as S,D as I,C as G,E as N,u as Z}from"./react-three-fiber.esm-W9vqQav0.js";import{s as j}from"./index-CSwHO5PT.js";import{u as E}from"./Texture-DNQs88YY.js";import{B as q,P as H}from"./shapes--NfsaW2A.js";import{T as C}from"./Text-12fiyKT_.js";import{O as J}from"./OrbitControls-BCBMCElI.js";import{S as K}from"./SpotLight-uIS-YKKV.js";const Q=r.forwardRef(function({children:e,disable:o,disableX:i,disableY:c,disableZ:a,left:u,right:s,top:l,bottom:p,front:x,back:g,onCentered:m,precise:T=!0,cacheKey:X=0,...k},W){const d=r.useRef(null),b=r.useRef(null),M=r.useRef(null);return r.useLayoutEffect(()=>{b.current.matrixWorld.identity();const f=new A().setFromObject(M.current,T),h=new Y,P=new F,w=f.max.x-f.min.x,v=f.max.y-f.min.y,R=f.max.z-f.min.z;f.getCenter(h),f.getBoundingSphere(P);const _=l?v/2:p?-v/2:0,y=u?-w/2:s?w/2:0,z=x?R/2:g?-R/2:0;b.current.position.set(o||i?0:-h.x+y,o||c?0:-h.y+_,o||a?0:-h.z+z),typeof m<"u"&&m({parent:d.current.parent,container:d.current,width:w,height:v,depth:R,boundingBox:f,boundingSphere:P,center:h,verticalAlignment:_,horizontalAlignment:y,depthAlignment:z})},[X,m,l,u,x,o,i,c,a,T,s,p,g]),r.useImperativeHandle(W,()=>d.current,[]),r.createElement("group",B({ref:d},k),r.createElement("group",{ref:b},r.createElement("group",{ref:M},e)))});class U extends S{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const ee=r.forwardRef(({speed:n=1,...e},o)=>{const[i]=r.useState(()=>new U);return V(c=>i&&(i.time=c.clock.getElapsedTime()*n)),r.createElement("primitive",B({object:i,ref:o,attach:"material"},e))}),te=r.forwardRef(({value:n=5,text:e="未设置",axisX:o=0,img:i},c)=>{r.useEffect(()=>{},[]);const a={width:2,z:3,img:{height:2}},u=E(j+"/diff/bar.jpg"),s=E(j+"/diff/us.jpeg"),l=E(`${j}/diff/${i||"kele.jpeg"}`);return u.repeat.set(.2,1),t.jsxs("mesh",{position:[o,0,0],ref:c,children:[t.jsx(Q,{top:!0,children:t.jsx(q,{castShadow:!0,args:[a.width,n,a.z],material:new S({opacity:1,shininess:100,map:u})})}),t.jsx(C,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"#000",position:[0,n-a.img.height-.5,a.z/2+.1],children:e}),t.jsx(H,{args:[a.width,a.img.height],position:[0,n-a.img.height/2,a.z/2+.1],material:new S({map:l,side:I})}),t.jsxs("mesh",{position:[a.width-.59,n-1,a.z/2-.1],children:[t.jsx("planeGeometry",{args:[2,2,10]}),t.jsx(ee,{factor:.3,speed:5,map:s})]}),t.jsx(C,{anchorY:"top",fontSize:1,scale:.8,maxWidth:3,color:"#000",position:[0,0,a.z],children:`销量:${n}w`})]})});function ne(){const{camera:n,scene:e}=Z(),o=r.useRef(0),i=r.useRef({}),c=[{value:5,text:"其他饮品"},{value:7,text:"百事可乐",img:"baishi.webp"},{value:10,text:"可口可乐",img:"kele.jpeg"}],a=r.useRef(),u=r.useRef();return r.useEffect(()=>{window.camera=n,setInterval(()=>{let s=i.current[o.current];a.current.target=s,a.current.position.x=s.position.x,u.current.target=s,u.current.position.x=s.position.x,o.current>=c.length-1?o.current=0:o.current+=1},1e3)},[]),t.jsxs(t.Fragment,{children:[t.jsx(K,{color:65535,distance:30,angle:Math.PI/3,attenuation:31,anglePower:.4,ref:u,position:[0,31,0]}),t.jsx("spotLight",{ref:a,castShadow:!0,args:[16777215,10,40,Math.PI/10,.4,.1],position:[0,30,7]}),c.map((s,l)=>{let p=m=>{i.current[l]=m},g=l*12;return r.createElement(te,{ref:p,...s,key:l,axisX:g})})]})}const re=()=>t.jsx("div",{style:{height:"60vh"},children:t.jsxs(G,{dpr:[1,2],shadows:!0,gl:{alpha:!1},camera:{position:[0,25,30],fov:45},children:[t.jsx(J,{}),t.jsx("axesHelper",{args:[10]}),t.jsx(ne,{}),t.jsx(H,{args:[100,100],position:[0,-1,0],receiveShadow:!0,rotation:new N(Math.PI/2,0,0,"XYZ"),children:t.jsx("meshStandardMaterial",{color:16777215,side:I})})]})}),ae=`import {
  Box,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Plane,
  SpotLight,
  Text,
  useTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { forwardRef, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

const Bar = forwardRef(
  ({ value = 5, text = '未设置', axisX = 0, img }, ref) => {
    useEffect(() => {}, [])
    const bar = {
      width: 2,
      z: 3,
      img: {
        height: 2,
      },
    }
    const texture = useTexture(staticPath + '/diff/bar.jpg')
    const flagTexture = useTexture(staticPath + '/diff/us.jpeg')
    const itemTexture = useTexture(\`\${staticPath}/diff/\${img || 'kele.jpeg'}\`)

    texture.repeat.set(0.2, 1)
    // 反转纹理
    // texture.flipY = false

    return (
      <mesh position={[axisX, 0, 0]} ref={ref}>
        <Center top>
          <Box
            castShadow={true}
            args={[bar.width, value, bar.z]}
            material={
              new THREE.MeshStandardMaterial({
                // color: new THREE.Color(0xff0000),
                opacity: 1,
                shininess: 100,
                map: texture,
              })
            }
          />
        </Center>
        <Text
          anchorY={'top'}
          fontSize={1}
          scale={0.5}
          maxWidth={3}
          color={'#000'}
          position={[0, value - bar.img.height - 0.5, bar.z / 2 + 0.1]}
        >
          {text}
        </Text>
        <Plane
          args={[bar.width, bar.img.height]}
          position={[0, value - bar.img.height / 2, bar.z / 2 + 0.1]}
          material={
            new THREE.MeshStandardMaterial({
              map: itemTexture,
              side: THREE.DoubleSide,
            })
          }
        ></Plane>
        <mesh position={[bar.width - 0.59, value - 1, bar.z / 2 - 0.1]}>
          <planeGeometry args={[2, 2, 10]} />
          <MeshWobbleMaterial factor={0.3} speed={5} map={flagTexture} />
        </mesh>
        <Text
          anchorY={'top'}
          fontSize={1}
          scale={0.8}
          maxWidth={3}
          color={'#000'}
          position={[0, 0, bar.z]}
        >
          {\`销量:\${value}w\`}
        </Text>
      </mesh>
    )
  }
)

function Com() {
  const { camera, scene } = useThree()
  const current = useRef(0)
  const barRef = useRef({})
  const data = [
    { value: 5, text: '其他饮品' },
    { value: 7, text: '百事可乐', img: 'baishi.webp' },
    { value: 10, text: '可口可乐', img: 'kele.jpeg' },
  ]
  const lightRef = useRef()
  const spoitLightRef = useRef()

  useEffect(() => {
    window.camera = camera
    setInterval(() => {
      let target = barRef.current[current.current]
      lightRef.current.target = target
      lightRef.current.position.x = target.position.x
      spoitLightRef.current.target = target
      spoitLightRef.current.position.x = target.position.x
      if (current.current >= data.length - 1) {
        current.current = 0
      } else {
        current.current += 1
      }
    }, 1000)
  }, [])
  return (
    <>
      <SpotLight
        color={0x00ffff}
        distance={30}
        angle={Math.PI / 3}
        attenuation={31}
        anglePower={0.4}
        ref={spoitLightRef}
        position={[0, 31, 0]}
      ></SpotLight>
      <spotLight
        ref={lightRef}
        castShadow={true}
        args={[0xffffff, 10, 40, Math.PI / 10, 0.4, 0.1]}
        position={[0, 30, 7]}
      />
      {data.map((item, index) => {
        let ref = (el) => {
          barRef.current[index] = el
        }
        // 间距增量
        let space = 12
        let axisX = index * space
        return <Bar ref={ref} {...item} key={index} axisX={axisX} />
      })}
    </>
  )
}
const DataDiff = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        shadows={true}
        // scene={{ background: new THREE.Color(0xead8b1) }}
        gl={{ alpha: false }}
        camera={{ position: [0, 25, 30], fov: 45 }}
      >
        {/* <Environment background={true} files={staticPath + '/pano/home.jpg'} /> */}
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />

        <Plane
          args={[100, 100]}
          position={[0, -1, 0]}
          receiveShadow={true}
          rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        >
          <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
        </Plane>
      </Canvas>
    </div>
  )
}

export default DataDiff
`,oe=void 0,ie=void 0,se={code:ae,title:oe,desc:ie},ce=!0,ue=Object.freeze(Object.defineProperty({__proto__:null,default:re,demoMeta:se,isDemo:ce},Symbol.toStringTag,{value:"Module"}));function D(n){const{Demo:e}={...L(),...n.components};return e||le("Demo"),t.jsx(e,{...ue})}function fe(n={}){const{wrapper:e}={...L(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(D,{...n})}):D(n)}function le(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const me=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),O={};O.outlineInfo=$;O.main=me;export{O as default};
