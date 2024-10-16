import{p as Y}from"./earthLine_-FU1-d8Ot.js";import{j as i,r as N,u as K}from"./ssg-client-Cr4lShia.js";import{C as k,b as X,g as tt,a as et,V as R,e as rt,T as nt}from"./react-three-fiber.esm-CJ0omfpD.js";import{s as st}from"./index-CSwHO5PT.js";import{O as ot}from"./OrbitControls-DZZPqe92.js";import{S as Q}from"./shapes-BUoM3dr0.js";import{L as at}from"./Line--6Lvqyp0.js";import{g as z}from"./index-c_NJVKPv.js";var G=Math.PI/180,B=180/Math.PI,y=function(t,r){this.lon=t,this.lat=r,this.x=G*t,this.y=G*r};y.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)};y.prototype.antipode=function(){var t=-1*this.lat,r=this.lon<0?180+this.lon:(180-this.lon)*-1;return new y(r,t)};var U=function(){this.coords=[],this.length=0};U.prototype.move_to=function(t){this.length++,this.coords.push(t)};var S=function(t){this.properties=t||{},this.geometries=[]};S.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(this.geometries.length===1)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var t=[],r=0;r<this.geometries.length;r++)t.push(this.geometries[r].coords);return{geometry:{type:"MultiLineString",coordinates:t},type:"Feature",properties:this.properties}};S.prototype.wkt=function(){for(var t="",r="LINESTRING(",e=function(a){r+=a[0]+" "+a[1]+","},s=0;s<this.geometries.length;s++){if(this.geometries[s].coords.length===0)return"LINESTRING(empty)";var o=this.geometries[s].coords;o.forEach(e),t+=r.substring(0,r.length-1)+")"}return t};var I=function(t,r,e){if(!t||t.x===void 0||t.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!r||r.x===void 0||r.y===void 0)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new y(t.x,t.y),this.end=new y(r.x,r.y),this.properties=e||{};var s=this.start.x-this.end.x,o=this.start.y-this.end.y,a=Math.pow(Math.sin(o/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(s/2),2);if(this.g=2*Math.asin(Math.sqrt(a)),this.g===Math.PI)throw new Error("it appears "+t.view()+" and "+r.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+t+" and "+r)};I.prototype.interpolate=function(t){var r=Math.sin((1-t)*this.g)/Math.sin(this.g),e=Math.sin(t*this.g)/Math.sin(this.g),s=r*Math.cos(this.start.y)*Math.cos(this.start.x)+e*Math.cos(this.end.y)*Math.cos(this.end.x),o=r*Math.cos(this.start.y)*Math.sin(this.start.x)+e*Math.cos(this.end.y)*Math.sin(this.end.x),a=r*Math.sin(this.start.y)+e*Math.sin(this.end.y),g=B*Math.atan2(a,Math.sqrt(Math.pow(s,2)+Math.pow(o,2))),l=B*Math.atan2(o,s);return[l,g]};I.prototype.Arc=function(t,r){var e=[];if(!t||t<=2)e.push([this.start.lon,this.start.lat]),e.push([this.end.lon,this.end.lat]);else for(var s=1/(t-1),o=0;o<t;++o){var a=s*o,g=this.interpolate(a);e.push(g)}for(var l=!1,f=0,m=r&&r.offset?r.offset:10,p=180-m,v=-180+m,x=360-m,d=1;d<e.length;++d){var C=e[d-1][0],E=e[d][0],b=Math.abs(E-C);b>x&&(E>p&&C<v||C>p&&E<v)?l=!0:b>f&&(f=b)}var M=[];if(l&&f<m){var h=[];M.push(h);for(var n=0;n<e.length;++n){var D=parseFloat(e[n][0]);if(n>0&&Math.abs(D-e[n-1][0])>x){var c=parseFloat(e[n-1][0]),j=parseFloat(e[n-1][1]),u=parseFloat(e[n][0]),P=parseFloat(e[n][1]);if(c>-180&&c<v&&u===180&&n+1<e.length&&e[n-1][0]>-180&&e[n-1][0]<v){h.push([-180,e[n][1]]),n++,h.push([e[n][0],e[n][1]]);continue}else if(c>p&&c<180&&u===-180&&n+1<e.length&&e[n-1][0]>p&&e[n-1][0]<180){h.push([180,e[n][1]]),n++,h.push([e[n][0],e[n][1]]);continue}if(c<v&&u>p){var Z=c;c=u,u=Z;var $=j;j=P,P=$}if(c>p&&u<v&&(u+=360),c<=180&&u>=180&&c<u){var F=(180-c)/(u-c),H=F*P+(1-F)*j;h.push([e[n-1][0]>p?180:-180,H]),h=[],h.push([e[n-1][0]>p?-180:180,H]),M.push(h)}else h=[],M.push(h);h.push([D,e[n][1]])}else h.push([e[n][0],e[n][1]])}}else{var L=[];M.push(L);for(var w=0;w<e.length;++w)L.push([e[w][0],e[w][1]])}for(var O=new S(this.properties),T=0;T<M.length;++T){var A=new U;O.geometries.push(A);for(var V=M[T],_=0;_<V.length;++_)A.move_to(V[_])}return O};function it(t,r,e){if(e=e||{},typeof e!="object")throw new Error("options is invalid");var s=e.properties,o=e.npoints,a=e.offset;t=z(t),r=z(r),s=s||{},o=o||100,a=a||10;var g=new I({x:t[0],y:t[1]},{x:r[0],y:r[1]},s),l=g.Arc(o,{offset:a});return l.json()}/*!
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
 */const ht=(t,r)=>it(t,r,{properties:{name:"Seattle to DC"},npoints:100}).geometry.coordinates;function q(t,r,e){const s=r*Math.PI/180,o=(t-180)*Math.PI/180,a=-e*Math.cos(s)*Math.cos(o),g=e*Math.sin(s),l=e*Math.cos(s)*Math.sin(o);return new R(a,g,l)}function ct({start:t,end:r,lineColor:e="red"}){const s=N.useRef(),o=15,a=ht(t,r),g=q(t[0],t[1],o),l=a.map((m,p)=>{const v=(p+1)/a.length;return q(m[0],m[1],o+Math.sin(v*Math.PI))}),f=new tt(l,!1,"catmullrom",.5);return et((m,p)=>{const x=m.clock.getElapsedTime()/3%1,d=f.getPointAt(x);s.current.position.copy(d)}),new R(0,0,1).lerp(new R(1,0,0),.5),i.jsxs(i.Fragment,{children:[i.jsx(Q,{position:g,scale:[.2,.2,.2],args:[1],ref:s,children:i.jsx("meshStandardMaterial",{color:"green"})}),i.jsx(at,{points:f.getPoints(50),color:e,opacity:.5})]})}const pt=()=>{const t=rt(nt,st+"/earth2.png");return i.jsx(Q,{args:[15,1e3,1e3],children:i.jsx("meshStandardMaterial",{map:t})})},lt=()=>{const t=[[[116.2,39.56],[74.006,1.7128]],[[116.2,39.56],[116.2,30]],[[116.2,39.56],[74.006,20.7128]],[[116.2,39.56],[130.006,46.7128]]];return i.jsx("div",{style:{height:"60vh"},children:i.jsxs(k,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new X(16777215)},camera:{position:[0,0,-70],fov:45},children:[i.jsx(ot,{}),i.jsx("axesHelper",{args:[10]}),i.jsx("ambientLight",{intensity:Math.PI}),i.jsx(pt,{}),t.map((r,e)=>i.jsx(ct,{start:r[0],end:r[1]},e))]})})},ut=`import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as turf from '@turf/turf'
import { useRef } from 'react'
import * as THREE from 'three'
import { staticPath } from '../../../utils'

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
  const earth = useLoader(THREE.TextureLoader, staticPath + '/earth2.png')
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
`,gt=void 0,mt=void 0,vt={code:ut,title:gt,desc:mt},ft=!0,dt=Object.freeze(Object.defineProperty({__proto__:null,default:lt,demoMeta:vt,isDemo:ft},Symbol.toStringTag,{value:"Module"}));function J(t){const{Demo:r}={...K(),...t.components};return r||yt("Demo"),i.jsx(r,{...dt})}function Mt(t={}){const{wrapper:r}={...K(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(J,{...t})}):J(t)}function yt(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const xt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),W={};W.outlineInfo=Y;W.main=xt;export{W as default};
