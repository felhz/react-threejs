import{p as N}from"./three_-FU1-d8Ot.js";import{r as f,j as i,u as Q}from"./ssg-client-yjrRXNAq.js";import{_ as k,b as X,d as tt,e as et,h as rt,a as nt,V as A,i as st,g as ot,T as at}from"./OrbitControls-D_SWTlsP.js";function it(t,r){const e=t+"Geometry";return f.forwardRef(({args:s,children:o,...a},p)=>{const h=f.useRef(null);return f.useImperativeHandle(p,()=>h.current),f.useLayoutEffect(()=>void(r==null?void 0:r(h.current))),f.createElement("mesh",k({ref:h},a),f.createElement(e,{attach:"geometry",args:s}),o)})}const U=it("sphere");function G(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}var B=Math.PI/180,q=180/Math.PI,x=function(t,r){this.lon=t,this.lat=r,this.x=B*t,this.y=B*r};x.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)};x.prototype.antipode=function(){var t=-1*this.lat,r=this.lon<0?180+this.lon:(180-this.lon)*-1;return new x(r,t)};var W=function(){this.coords=[],this.length=0};W.prototype.move_to=function(t){this.length++,this.coords.push(t)};var I=function(t){this.properties=t||{},this.geometries=[]};I.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(this.geometries.length===1)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var t=[],r=0;r<this.geometries.length;r++)t.push(this.geometries[r].coords);return{geometry:{type:"MultiLineString",coordinates:t},type:"Feature",properties:this.properties}};I.prototype.wkt=function(){for(var t="",r="LINESTRING(",e=function(a){r+=a[0]+" "+a[1]+","},s=0;s<this.geometries.length;s++){if(this.geometries[s].coords.length===0)return"LINESTRING(empty)";var o=this.geometries[s].coords;o.forEach(e),t+=r.substring(0,r.length-1)+")"}return t};var S=function(t,r,e){if(!t||t.x===void 0||t.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!r||r.x===void 0||r.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new x(t.x,t.y),this.end=new x(r.x,r.y),this.properties=e||{};var s=this.start.x-this.end.x,o=this.start.y-this.end.y,a=Math.pow(Math.sin(o/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(s/2),2);if(this.g=2*Math.asin(Math.sqrt(a)),this.g===Math.PI)throw new Error("it appears "+t.view()+" and "+r.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+t+" and "+r)};S.prototype.interpolate=function(t){var r=Math.sin((1-t)*this.g)/Math.sin(this.g),e=Math.sin(t*this.g)/Math.sin(this.g),s=r*Math.cos(this.start.y)*Math.cos(this.start.x)+e*Math.cos(this.end.y)*Math.cos(this.end.x),o=r*Math.cos(this.start.y)*Math.sin(this.start.x)+e*Math.cos(this.end.y)*Math.sin(this.end.x),a=r*Math.sin(this.start.y)+e*Math.sin(this.end.y),p=q*Math.atan2(a,Math.sqrt(Math.pow(s,2)+Math.pow(o,2))),h=q*Math.atan2(o,s);return[h,p]};S.prototype.Arc=function(t,r){var e=[];if(!t||t<=2)e.push([this.start.lon,this.start.lat]),e.push([this.end.lon,this.end.lat]);else for(var s=1/(t-1),o=0;o<t;++o){var a=s*o,p=this.interpolate(a);e.push(p)}for(var h=!1,d=0,m=r&&r.offset?r.offset:10,u=180-m,v=-180+m,w=360-m,y=1;y<e.length;++y){var C=e[y-1][0],b=e[y][0],j=Math.abs(b-C);j>w&&(b>u&&C<v||C>u&&b<v)?h=!0:j>d&&(d=j)}var M=[];if(h&&d<m){var c=[];M.push(c);for(var n=0;n<e.length;++n){var F=parseFloat(e[n][0]);if(n>0&&Math.abs(F-e[n-1][0])>w){var l=parseFloat(e[n-1][0]),P=parseFloat(e[n-1][1]),g=parseFloat(e[n][0]),_=parseFloat(e[n][1]);if(l>-180&&l<v&&g===180&&n+1<e.length&&e[n-1][0]>-180&&e[n-1][0]<v){c.push([-180,e[n][1]]),n++,c.push([e[n][0],e[n][1]]);continue}else if(l>u&&l<180&&g===-180&&n+1<e.length&&e[n-1][0]>u&&e[n-1][0]<180){c.push([180,e[n][1]]),n++,c.push([e[n][0],e[n][1]]);continue}if(l<v&&g>u){var $=l;l=g,g=$;var Y=P;P=_,_=Y}if(l>u&&g<v&&(g+=360),l<=180&&g>=180&&l<g){var D=(180-l)/(g-l),H=D*_+(1-D)*P;c.push([e[n-1][0]>u?180:-180,H]),c=[],c.push([e[n-1][0]>u?-180:180,H]),M.push(c)}else c=[],M.push(c);c.push([F,e[n][1]])}else c.push([e[n][0],e[n][1]])}}else{var L=[];M.push(L);for(var E=0;E<e.length;++E)L.push([e[E][0],e[E][1]])}for(var O=new I(this.properties),R=0;R<M.length;++R){var V=new W;O.geometries.push(V);for(var z=M[R],T=0;T<z.length;++T)V.move_to(z[T])}return O};function ht(t,r,e){if(e=e||{},typeof e!="object")throw new Error("options is invalid");var s=e.properties,o=e.npoints,a=e.offset;t=G(t),r=G(r),s=s||{},o=o||100,a=a||10;var p=new S({x:t[0],y:t[1]},{x:r[0],y:r[1]},s),h=p.Arc(o,{offset:a});return h.json()}/*!
 * Copyright (c) 2019, Dane Springmeyer
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in
 *       the documentation and/or other materials provided with the
 *       distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */const ct=(t,r)=>ht(t,r,{properties:{name:"Seattle to DC"},npoints:100}).geometry.coordinates;function J(t,r,e){const s=r*Math.PI/180,o=(t-180)*Math.PI/180,a=-e*Math.cos(s)*Math.cos(o),p=e*Math.sin(s),h=e*Math.cos(s)*Math.sin(o);return new A(a,p,h)}function lt({start:t,end:r,lineColor:e="red"}){const s=f.useRef(),o=15,a=ct(t,r),p=J(t[0],t[1],o),h=a.map((m,u)=>{const v=(u+1)/a.length;return J(m[0],m[1],o+Math.sin(v*Math.PI))}),d=new rt(h,!1,"catmullrom",.5);return nt((m,u)=>{const w=m.clock.getElapsedTime()/3%1,y=d.getPointAt(w);s.current.position.copy(y)}),new A(0,0,1).lerp(new A(1,0,0),.5),i.jsxs(i.Fragment,{children:[i.jsx(U,{position:p,scale:[.2,.2,.2],args:[1],ref:s,children:i.jsx("meshStandardMaterial",{color:"green"})}),i.jsx(st,{points:d.getPoints(50),color:e,opacity:.5})]})}const pt=()=>{const t=ot(at,"/earth.jpg");return i.jsx(U,{args:[15,1e3,1e3],children:i.jsx("meshStandardMaterial",{map:t})})},ut=()=>{const t=[[[116.2,39.56],[74.006,1.7128]],[[116.2,39.56],[116.2,30]],[[116.2,39.56],[74.006,20.7128]],[[116.2,39.56],[130.006,46.7128]]];return i.jsx("div",{style:{height:"60vh"},children:i.jsxs(X,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new tt(16777215)},camera:{position:[0,0,-70],fov:45},children:[i.jsx(et,{}),i.jsx("axesHelper",{args:[10]}),i.jsx("ambientLight",{intensity:Math.PI}),i.jsx(pt,{}),t.map((r,e)=>i.jsx(lt,{start:r[0],end:r[1]},e))]})})},gt=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as turf from '@turf/turf'
import { useRef } from 'react'
import * as THREE from 'three'

const greatArc = (start, end) => {
  return turf.greatCircle(start, end, {
    properties: { name: 'Seattle to DC' },
    npoints: 100,
  }).geometry.coordinates
}

function latLongToVector3(lon, lat, radius) {
  const phi = (lat * Math.PI) / 180 // 纬度转换为弧度
  const theta = ((lon - 180) * Math.PI) / 180 // 经度转换为弧度，经度范围从 -180 到 180 度

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

function Com({ start, end, lineColor = 'red' }) {
  const poi = useRef()
  const radius = 15 // 球体半径
  const arcPoints = greatArc(start, end)
  const position = latLongToVector3(start[0], start[1], radius)
  const points = arcPoints.map((point, i) => {
    // 归一化
    const t = (i + 1) / arcPoints.length
    return latLongToVector3(point[0], point[1], radius + Math.sin(t * Math.PI))
  })
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5)
  useFrame((state, delta) => {
    // 获取到的是秒
    const elapsed = state.clock.getElapsedTime()
    const t = (elapsed / 3) % 1 // 归一化时间

    const point = curve.getPointAt(t)
    poi.current.position.copy(point)
  })
  const gradient = new THREE.Vector3(0, 0, 1).lerp(
    new THREE.Vector3(1, 0, 0),
    0.5
  )
  return (
    <>
      <Sphere position={position} scale={[0.2, 0.2, 0.2]} args={[1]} ref={poi}>
        <meshStandardMaterial color="green" />
      </Sphere>
      <Line points={curve.getPoints(50)} color={lineColor} opacity={0.5} />
    </>
  )
}
const Earth = () => {
  const earth = useLoader(THREE.TextureLoader, '/earth.jpg')
  return (
    <Sphere args={[15, 1000, 1000]}>
      <meshStandardMaterial map={earth} />
    </Sphere>
  )
}
const Sphereg = () => {
  const lines = [
    [
      [116.2, 39.56],
      [74.006, 1.7128],
    ],
    [
      [116.2, 39.56],
      [116.2, 30],
    ],
    [
      [116.2, 39.56],
      [74.006, 20.7128],
    ],
    [
      [116.2, 39.56],
      [130.006, 46.7128],
    ],
  ]

  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ alpha: false }}
        scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 0, -70], fov: 45 }}
      >
        <OrbitControls />
        <axesHelper args={[10]} />
        <ambientLight intensity={Math.PI} />
        <Earth />
        {lines.map((line, i) => (
          <Com key={i} start={line[0]} end={line[1]} />
        ))}
      </Canvas>
    </div>
  )
}
export default Sphereg
`,mt=void 0,vt=void 0,ft={code:gt,title:mt,desc:vt},dt=!0,yt=Object.freeze(Object.defineProperty({__proto__:null,default:ut,demoMeta:ft,isDemo:dt},Symbol.toStringTag,{value:"Module"}));function K(t){const{Demo:r}={...Q(),...t.components};return r||xt("Demo"),i.jsx(r,{...yt})}function Mt(t={}){const{wrapper:r}={...Q(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(K,{...t})}):K(t)}function xt(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const wt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),Z={};Z.outlineInfo=N;Z.main=wt;export{Z as default};
