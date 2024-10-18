import{p as $}from"./datadiff_-FU1-d8Ot.js";import{r,j as t,u as B}from"./ssg-client-DElkHeyq.js";import{B as Y,V,S as F,_ as k,a as G,M as j,D as I,C as N,E as Z,u as q}from"./react-three-fiber.esm-DG6tMjmU.js";import{s as b}from"./index-CSwHO5PT.js";import{u as E}from"./Texture-BCPFX2tu.js";import{B as J,P as X}from"./shapes-DutNn_W8.js";import{T as C}from"./Text-CYfidOMw.js";import{O as K}from"./OrbitControls-BNyP8YTw.js";import{S as Q}from"./SpotLight-DNB14aEA.js";const U=r.forwardRef(function({children:e,disable:o,disableX:i,disableY:s,disableZ:a,left:f,right:c,top:u,bottom:m,front:R,back:S,onCentered:d,precise:T=!0,cacheKey:O=0,...W},A){const p=r.useRef(null),x=r.useRef(null),M=r.useRef(null);return r.useLayoutEffect(()=>{x.current.matrixWorld.identity();const l=new Y().setFromObject(M.current,T),h=new V,y=new F,g=l.max.x-l.min.x,w=l.max.y-l.min.y,v=l.max.z-l.min.z;l.getCenter(h),l.getBoundingSphere(y);const P=u?w/2:m?-w/2:0,_=f?-g/2:c?g/2:0,z=R?v/2:S?-v/2:0;x.current.position.set(o||i?0:-h.x+_,o||s?0:-h.y+P,o||a?0:-h.z+z),typeof d<"u"&&d({parent:p.current.parent,container:p.current,width:g,height:w,depth:v,boundingBox:l,boundingSphere:y,center:h,verticalAlignment:P,horizontalAlignment:_,depthAlignment:z})},[O,d,u,f,R,o,i,s,a,T,c,m,S]),r.useImperativeHandle(A,()=>p.current,[]),r.createElement("group",k({ref:p},W),r.createElement("group",{ref:x},r.createElement("group",{ref:M},e)))});class ee extends j{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._factor={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.factor=this._factor,e.vertexShader=`
      uniform float time;
      uniform float factor;
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`)}get time(){return this._time.value}set time(e){this._time.value=e}get factor(){return this._factor.value}set factor(e){this._factor.value=e}}const te=r.forwardRef(({speed:n=1,...e},o)=>{const[i]=r.useState(()=>new ee);return G(s=>i&&(i.time=s.clock.getElapsedTime()*n)),r.createElement("primitive",k({object:i,ref:o,attach:"material"},e))}),D=r.forwardRef(({value:n=5,text:e="未设置",axisX:o=0,img:i},s)=>{r.useEffect(()=>{},[]);const a={width:2,z:3,img:{height:2}},f=E(b+"/diff/bar.jpg"),c=E(b+"/diff/us.jpeg"),u=E(`${b}/diff/${i||"kele.jpeg"}`);return f.repeat.set(.2,1),t.jsxs("mesh",{position:[o,0,0],ref:s,children:[t.jsx(U,{top:!0,children:t.jsx(J,{castShadow:!0,args:[a.width,n,a.z],material:new j({opacity:1,shininess:100,map:f})})}),t.jsx(C,{anchorY:"top",fontSize:1,scale:.5,maxWidth:3,color:"#000",position:[0,n-a.img.height-.5,a.z/2+.1],children:e}),t.jsx(X,{args:[a.width,a.img.height],position:[0,n-a.img.height/2,a.z/2+.1],material:new j({map:u,side:I})}),t.jsxs("mesh",{position:[a.width-.59,n-1,a.z/2-.1],children:[t.jsx("planeGeometry",{args:[2,2,10]}),t.jsx(te,{factor:.3,speed:5,map:c})]}),t.jsx(C,{anchorY:"top",fontSize:1,scale:.8,maxWidth:3,color:"#000",position:[0,0,a.z],children:`销量:${n}w`})]})});function ne(){const{camera:n,scene:e}=q(),o=r.useRef(1),i=r.useRef(),s=[{value:5,text:"其他饮品"},{value:7,text:"百事可乐",img:"baishi.webp"},{value:10,text:"可口可乐",img:"kele.jpeg"}],a=r.useRef();return r.useEffect(()=>{window.camera=n,setInterval(()=>{o.current>s.length&&(o.current=1,n.position.x=0)},1e3)},[]),t.jsxs(t.Fragment,{children:[t.jsx(Q,{color:65535,distance:30,angle:Math.PI/3,attenuation:31,anglePower:.4,position:[0,31,0]}),t.jsx("spotLight",{ref:a,castShadow:!0,args:[16777215,10,40,Math.PI/10,.3,.1],position:[0,30,7]}),s.map((f,c)=>{let m=c*12;return c===s.length-1?r.createElement(D,{ref:i,...f,key:c,axisX:m}):r.createElement(D,{...f,key:c,axisX:m})})]})}const re=()=>t.jsx("div",{style:{height:"60vh"},children:t.jsxs(N,{dpr:[1,2],shadows:!0,gl:{alpha:!1},camera:{position:[0,25,30],fov:45},children:[t.jsx(K,{}),t.jsx("axesHelper",{args:[10]}),t.jsx(ne,{}),t.jsx(X,{args:[100,100],position:[0,-1,0],receiveShadow:!0,rotation:new Z(Math.PI/2,0,0,"XYZ"),children:t.jsx("meshStandardMaterial",{color:16777215,side:I})})]})}),ae=`import {
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
  const current = useRef(1)
  const wallRef = useRef()
  const data = [
    { value: 5, text: '其他饮品' },
    { value: 7, text: '百事可乐', img: 'baishi.webp' },
    { value: 10, text: '可口可乐', img: 'kele.jpeg' },
  ]
  const lightRef = useRef()
  useEffect(() => {
    window.camera = camera
    // lightRef.current.target = wallRef.current

    // scene.add(new THREE.DirectionalLightHelper(lightRef.current))
    setInterval(() => {
      // current.current += 1
      // camera.position.x = 7 * current.current
      // camera.lookAt(
      //   new THREE.Vector3(
      //     7 * current.current,
      //     // data[current.current - 1].value,
      //     0,
      //     0
      //   )
      // )

      if (current.current > data.length) {
        current.current = 1
        camera.position.x = 0
      }
    }, 1000)
  }, [])
  return (
    <>
      {/* <directionalLight
        ref={lightRef}
        position={[5, 20, 20]}
        args={[0xffffff, 1]}
        castShadow={true}
      /> */}
      <SpotLight
        color={0x00ffff}
        distance={30}
        angle={Math.PI / 3}
        attenuation={31}
        anglePower={0.4}
        position={[0, 31, 0]}
      ></SpotLight>
      <spotLight
        ref={lightRef}
        castShadow={true}
        args={[0xffffff, 10, 40, Math.PI / 10, 0.3, 0.1]}
        position={[0, 30, 7]}
      />
      {data.map((item, index) => {
        // 间距增量
        let space = 12
        let axisX = index * space
        if (index === data.length - 1) {
          return <Bar ref={wallRef} {...item} key={index} axisX={axisX} />
        }
        return <Bar {...item} key={index} axisX={axisX} />
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
`,oe=void 0,ie=void 0,se={code:ae,title:oe,desc:ie},ce=!0,le=Object.freeze(Object.defineProperty({__proto__:null,default:re,demoMeta:se,isDemo:ce},Symbol.toStringTag,{value:"Module"}));function H(n){const{Demo:e}={...B(),...n.components};return e||ue("Demo"),t.jsx(e,{...le})}function fe(n={}){const{wrapper:e}={...B(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(H,{...n})}):H(n)}function ue(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const me=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),L={};L.outlineInfo=$;L.main=me;export{L as default};
