import{p as j}from"./light_-FU1-d8Ot.js";import{r as t,j as e,u as S}from"./ssg-client-Cr4lShia.js";import{r as E,w as _,V as M,b as C,d as L,_ as D,u as x,a as I,a9 as R,i as w,aa as T,C as Z,ab as F,D as H}from"./react-three-fiber.esm-CJ0omfpD.js";import{O as N}from"./OrbitControls-DZZPqe92.js";import{B as O,S as V}from"./shapes-BUoM3dr0.js";const z=()=>parseInt(E.replace(/\D+/g,"")),k=z();class X extends _{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new M(0,0,0)},lightColor:{value:new C("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new L(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;
        uniform vec3 spotPosition;
        uniform float attenuation;

        #include <common>
        #include <logdepthbuf_pars_vertex>

        void main() {
          // compute intensity
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1);
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewZ = viewPosition.z;

          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);

          gl_Position = projectionMatrix * viewPosition;

          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;

        uniform vec3 lightColor;
        uniform float anglePower;
        uniform sampler2D depth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float opacity;

        #include <packing>
        #include <logdepthbuf_pars_fragment>

        float readDepth(sampler2D depthSampler, vec2 uv) {
          float fragCoordZ = texture(depthSampler, uv).r;

          // https://github.com/mrdoob/three.js/issues/23072
          #ifdef USE_LOGDEPTHBUF
            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));
          #else
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
          #endif

          return viewZ;
        }

        void main() {
          #include <logdepthbuf_fragment>

          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));
          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);
          float intensity = vIntensity * angleIntensity;

          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
          if (isSoft) {
            vec2 uv = gl_FragCoord.xy / resolution;
            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));
          }

          gl_FragColor = vec4(lightColor, intensity * opacity);

          #include <tonemapping_fragment>
          #include <${k>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}}function G({opacity:n=1,radiusTop:o,radiusBottom:i,depthBuffer:m,color:f="white",distance:s=5,angle:p=.15,attenuation:g=5,anglePower:v=5}){const l=t.useRef(null),c=x(r=>r.size),u=x(r=>r.camera),d=x(r=>r.viewport.dpr),[h]=t.useState(()=>new X),[a]=t.useState(()=>new M);o=o===void 0?.1:o,i=i===void 0?p*7:i,I(()=>{h.uniforms.spotPosition.value.copy(l.current.getWorldPosition(a)),l.current.lookAt(l.current.parent.target.getWorldPosition(a))});const b=t.useMemo(()=>{const r=new R(o,i,s,128,64,!0);return r.applyMatrix4(new w().makeTranslation(0,-s/2,0)),r.applyMatrix4(new w().makeRotationX(-Math.PI/2)),r},[s,o,i]);return t.createElement(t.Fragment,null,t.createElement("mesh",{ref:l,geometry:b,raycast:()=>null},t.createElement("primitive",{object:h,attach:"material","uniforms-opacity-value":n,"uniforms-lightColor-value":f,"uniforms-attenuation-value":g,"uniforms-anglePower-value":v,"uniforms-depth-value":m,"uniforms-cameraNear-value":u.near,"uniforms-cameraFar-value":u.far,"uniforms-resolution-value":m?[c.width*d,c.height*d]:[0,0]})))}const B=t.forwardRef(({opacity:n=1,radiusTop:o,radiusBottom:i,depthBuffer:m,color:f="white",distance:s=5,angle:p=.15,attenuation:g=5,anglePower:v=5,volumetric:l=!0,debug:c=!1,children:u,...d},h)=>{const a=t.useRef(null);return t.useImperativeHandle(h,()=>a.current,[]),t.createElement("group",null,c&&a.current&&t.createElement("spotLightHelper",{args:[a.current]}),t.createElement("spotLight",D({ref:a,angle:p,color:f,distance:s,castShadow:!0},d),l&&t.createElement(G,{debug:c,opacity:n,radiusTop:o,radiusBottom:i,depthBuffer:m,color:f,distance:s,angle:p,attenuation:g,anglePower:v})),u&&t.cloneElement(u,{spotlightRef:a,debug:c}))});console.log(T);const W=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{args:[1,1,1],position:[1,1,0],castShadow:!0,children:e.jsx("meshLambertMaterial",{color:"pink"})}),e.jsx("spotLight",{castShadow:!0,args:[16777215,1,100,Math.PI/18,.3,.01],position:[-2,15,0]}),e.jsx(B,{color:65535,distance:10,angle:Math.PI/2,attenuation:5,anglePower:1,position:[3,3,0]}),e.jsx("directionalLight",{castShadow:!0,args:[16777215,1],position:[-20,12,0]}),e.jsx(V,{args:[1,32,32],position:[5,1,0],castShadow:!0,children:e.jsx("meshLambertMaterial",{color:"red",opacity:.1})}),e.jsxs("mesh",{receiveShadow:!0,rotation:new F(Math.PI/2,0,0,"XYZ"),position:[0,-1,0],children:[e.jsx("planeGeometry",{args:[40,30]}),e.jsx("meshStandardMaterial",{color:16777215,side:H})]})]});function U(){return e.jsx(W,{})}const Y=()=>e.jsx("div",{style:{height:"60vh"},children:e.jsxs(Z,{dpr:[1,2],gl:{alpha:!1},shadows:!0,camera:{position:[0,7,7],fov:70},children:[e.jsx(N,{}),e.jsx("axesHelper",{args:[10]}),e.jsx(U,{})]})}),A=`import { Box, OrbitControls, Sphere, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
console.log(THREE)
const TextD = () => {
  return (
    <>
      <Box args={[1, 1, 1]} position={[1, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'pink'} />
      </Box>
      <spotLight
        castShadow={true}
        args={[0xffffff, 1, 100, Math.PI / 18, 0.3, 0.01]}
        position={[-2, 15, 0]}
      />
      <SpotLight
        color={0x00ffff}
        distance={10}
        angle={Math.PI / 2}
        attenuation={5}
        anglePower={1}
        position={[3, 3, 0]}
      ></SpotLight>
      <directionalLight
        castShadow={true}
        args={[0xffffff, 1]}
        position={[-20, 12, 0]}
      ></directionalLight>
      <Sphere args={[1, 32, 32]} position={[5, 1, 0]} castShadow={true}>
        <meshLambertMaterial color={'red'} opacity={0.1} />
      </Sphere>
      <mesh
        receiveShadow={true}
        rotation={new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ')}
        position={[0, -1, 0]}
      >
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial color={0xffffff} side={THREE.DoubleSide} />
      </mesh>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const Light = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false }}
        shadows={true}
        // scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 7, 7], fov: 70 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        {/* <ambientLight intensity={Math.PI} /> */}
        <Com />
      </Canvas>
    </div>
  )
}

export default Light
`,$=void 0,q=void 0,J={code:A,title:$,desc:q},K=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,default:Y,demoMeta:J,isDemo:K},Symbol.toStringTag,{value:"Module"}));function y(n){const{Demo:o}={...S(),...n.components};return o||te("Demo"),e.jsx(o,{...Q})}function ee(n={}){const{wrapper:o}={...S(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(y,{...n})}):y(n)}function te(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"})),P={};P.outlineInfo=j;P.main=oe;export{P as default};
