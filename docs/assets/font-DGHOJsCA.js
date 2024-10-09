import{p as V}from"./font_-FU1-d8Ot.js";import{r as y,j as g,u as P}from"./ssg-client-CUi2nsCX.js";import{B as O,f as k,L,F as N,g as D,s as W,p as J,h as Z,i as K,_ as Q,C as U,a as X,d as Y,c as ee}from"./react-three-fiber.esm-zOucUSTv.js";import{O as te}from"./OrbitControls-quqiCxHM.js";function ne(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},r=n.getIndex(),u=n.getAttribute("position"),a=r?r.count:u.count;let i=0;const c=Object.keys(n.attributes),l={},h={},p=[],d=["getX","getY","getZ","getW"];for(let o=0,s=c.length;o<s;o++){const f=c[o];l[f]=[];const x=n.morphAttributes[f];x&&(h[f]=new Array(x.length).fill(0).map(()=>[]))}const m=Math.log10(1/e),j=Math.pow(10,m);for(let o=0;o<a;o++){const s=r?r.getX(o):o;let f="";for(let x=0,M=c.length;x<M;x++){const w=c[x],T=n.getAttribute(w),E=T.itemSize;for(let v=0;v<E;v++)f+=`${~~(T[d[v]](s)*j)},`}if(f in t)p.push(t[f]);else{for(let x=0,M=c.length;x<M;x++){const w=c[x],T=n.getAttribute(w),E=n.morphAttributes[w],v=T.itemSize,_=l[w],B=h[w];for(let F=0;F<v;F++){const H=d[F];if(_.push(T[H](s)),E)for(let C=0,$=E.length;C<$;C++)B[C].push(E[C][H](s))}}t[f]=i,p.push(i),i++}}const b=n.clone();for(let o=0,s=c.length;o<s;o++){const f=c[o],x=n.getAttribute(f),M=new x.array.constructor(l[f]),w=new O(M,x.itemSize,x.normalized);if(b.setAttribute(f,w),f in h)for(let T=0;T<h[f].length;T++){const E=n.morphAttributes[f][T],v=new E.array.constructor(h[f][T]),_=new O(v,E.itemSize,E.normalized);b.morphAttributes[f][T]=_}}return b.setIndex(p),b}let oe=class extends k{constructor(e,t={}){const{bevelEnabled:r=!1,bevelSize:u=8,bevelThickness:a=10,font:i,height:c=50,size:l=100,lineHeight:h=1,letterSpacing:p=0,...d}=t;if(i===void 0)super();else{const m=i.generateShapes(e,l,{lineHeight:h,letterSpacing:p});super(m,{...d,bevelEnabled:r,bevelSize:u,bevelThickness:a,depth:c})}this.type="TextGeometry"}};var re=Object.defineProperty,se=(n,e,t)=>e in n?re(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,A=(n,e,t)=>(se(n,typeof e!="symbol"?e+"":e,t),t);let ie=class extends L{constructor(e){super(e)}load(e,t,r,u){const a=new N(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,i=>{if(typeof i!="string")throw new Error("unsupported data type");const c=JSON.parse(i),l=this.parse(c);t&&t(l)},r,u)}loadAsync(e,t){return super.loadAsync(e,t)}parse(e){return new I(e)}},I=class{constructor(e){A(this,"data"),this.data=e}generateShapes(e,t=100,r){const u=[],a={letterSpacing:0,lineHeight:1,...r},i=ae(e,t,this.data,a);for(let c=0,l=i.length;c<l;c++)Array.prototype.push.apply(u,i[c].toShapes(!1));return u}};A(I,"isFont");A(I,"type");function ae(n,e,t,r){const u=Array.from(n),a=e/t.resolution,i=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*a,c=[];let l=0,h=0;for(let p=0;p<u.length;p++){const d=u[p];if(d===`
`)l=0,h-=i*r.lineHeight;else{const m=ce(d,a,l,h,t);m&&(l+=m.offsetX+r.letterSpacing,c.push(m.path))}}return c}function ce(n,e,t,r,u){const a=u.glyphs[n]||u.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+u.familyName+".");return}const i=new D;let c,l,h,p,d,m,j,b;if(a.o){const o=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let s=0,f=o.length;s<f;)switch(o[s++]){case"m":c=parseInt(o[s++])*e+t,l=parseInt(o[s++])*e+r,i.moveTo(c,l);break;case"l":c=parseInt(o[s++])*e+t,l=parseInt(o[s++])*e+r,i.lineTo(c,l);break;case"q":h=parseInt(o[s++])*e+t,p=parseInt(o[s++])*e+r,d=parseInt(o[s++])*e+t,m=parseInt(o[s++])*e+r,i.quadraticCurveTo(d,m,h,p);break;case"b":h=parseInt(o[s++])*e+t,p=parseInt(o[s++])*e+r,d=parseInt(o[s++])*e+t,m=parseInt(o[s++])*e+r,j=parseInt(o[s++])*e+t,b=parseInt(o[s++])*e+r,i.bezierCurveTo(d,m,j,b,h,p);break}}return{offsetX:a.ha*e,path:i}}let S=null;async function ue(n){return typeof n=="string"?await(await fetch(n)).json():n}function le(n){return S||(S=new ie),S.parse(n)}async function G(n){const e=await ue(n);return le(e)}function z(n){return W(G,[n])}z.preload=n=>J(G,[n]);z.clear=n=>Z([n]);const he=["string","number"],pe=n=>{let e="";const t=[];return y.Children.forEach(n,r=>{he.includes(typeof r)?e+=r+"":t.push(r)}),[e,...t]},de=y.forwardRef(({font:n,letterSpacing:e=0,lineHeight:t=1,size:r=1,height:u=.2,bevelThickness:a=.1,bevelSize:i=.01,bevelEnabled:c=!1,bevelOffset:l=0,bevelSegments:h=4,curveSegments:p=8,smooth:d,children:m,...j},b)=>{y.useMemo(()=>K({RenamedTextGeometry:oe}),[]);const o=y.useRef(null),s=z(n),f=y.useMemo(()=>({font:s,size:r,height:u,bevelThickness:a,bevelSize:i,bevelEnabled:c,bevelSegments:h,bevelOffset:l,curveSegments:p,letterSpacing:e,lineHeight:t}),[s,r,u,a,i,c,h,l,p,e,t]),[x,...M]=y.useMemo(()=>pe(m),[m]),w=y.useMemo(()=>[x,f],[x,f]);return y.useLayoutEffect(()=>{d&&(o.current.geometry=ne(o.current.geometry,d),o.current.geometry.computeVertexNormals())},[w,d]),y.useImperativeHandle(b,()=>o.current,[]),y.createElement("mesh",Q({},j,{ref:o}),y.createElement("renamedTextGeometry",{args:w}),M)});class fe extends k{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const u=r.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(u,t)}this.type="TextGeometry"}}class me extends L{constructor(e){super(e)}load(e,t,r,u){const a=this,i=new N(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,function(c){const l=a.parse(JSON.parse(c));t&&t(l)},r,u)}parse(e){return new xe(e)}}class xe{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const r=[],u=ge(e,t,this.data);for(let a=0,i=u.length;a<i;a++)r.push(...u[a].toShapes());return r}}function ge(n,e,t){const r=Array.from(n),u=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*u,i=[];let c=0,l=0;for(let h=0;h<r.length;h++){const p=r[h];if(p===`
`)c=0,l-=a;else{const d=ye(p,u,c,l,t);c+=d.offsetX,i.push(d.path)}}return i}function ye(n,e,t,r,u){const a=u.glyphs[n]||u.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+u.familyName+".");return}const i=new D;let c,l,h,p,d,m,j,b;if(a.o){const o=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let s=0,f=o.length;s<f;)switch(o[s++]){case"m":c=o[s++]*e+t,l=o[s++]*e+r,i.moveTo(c,l);break;case"l":c=o[s++]*e+t,l=o[s++]*e+r,i.lineTo(c,l);break;case"q":h=o[s++]*e+t,p=o[s++]*e+r,d=o[s++]*e+t,m=o[s++]*e+r,i.quadraticCurveTo(d,m,h,p);break;case"b":h=o[s++]*e+t,p=o[s++]*e+r,d=o[s++]*e+t,m=o[s++]*e+r,j=o[s++]*e+t,b=o[s++]*e+r,i.bezierCurveTo(d,m,j,b,h,p);break}}return{offsetX:a.ha*e,path:i}}const be=()=>{const n=new me;y.useEffect(()=>{n.load("/font/bold.json",function(t){const r=new fe("Hello!",{font:t,size:5,depth:1});e.current.geometry=r})},[]),Y(()=>{e.current.rotation.y+=.01});const e=y.useRef();return g.jsxs(g.Fragment,{children:[g.jsx("mesh",{ref:e,children:g.jsx("meshNormalMaterial",{})}),g.jsxs(de,{font:"/font/bold.json",position:new ee(10,0,0),children:["wooo ",g.jsx("meshNormalMaterial",{})]})]})};function we(){return g.jsx(be,{children:"4"})}const Te=()=>g.jsx("div",{style:{height:"60vh"},children:g.jsxs(U,{shadows:!0,dpr:[1,2],gl:{alpha:!1},scene:{background:new X(16777215)},camera:{position:[0,0,-70],fov:45},children:[g.jsx(te,{}),g.jsx("axesHelper",{args:[10]}),g.jsx("ambientLight",{intensity:Math.PI}),g.jsx(we,{})]})}),je=`import { OrbitControls, Text3D } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const Text = () => {
  const loader = new FontLoader()

  useEffect(() => {
    loader.load('/font/bold.json', function (font) {
      const geometry = new TextGeometry('Hello!', {
        font: font,
        size: 5,
        depth: 1,
      })
      text.current.geometry = geometry
    })
  }, [])
  useFrame(() => {
    text.current.rotation.y += 0.01
  })
  const text = useRef()
  return (
    <>
      <mesh ref={text}>
        <meshNormalMaterial />
      </mesh>
      <Text3D font={'/font/bold.json'} position={new THREE.Vector3(10, 0, 0)}>
        wooo <meshNormalMaterial />
      </Text3D>
    </>
  )
}

function Com() {
  return <Text>4</Text>
}
const Sphereg = () => {
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
        <Com />
      </Canvas>
    </div>
  )
}

export default Sphereg
`,Ee=void 0,Me=void 0,ve={code:je,title:Ee,desc:Me},Ce=!0,_e=Object.freeze(Object.defineProperty({__proto__:null,default:Te,demoMeta:ve,isDemo:Ce},Symbol.toStringTag,{value:"Module"}));function R(n){const{Demo:e}={...P(),...n.components};return e||Se("Demo"),g.jsx(e,{..._e})}function Fe(n={}){const{wrapper:e}={...P(),...n.components};return e?g.jsx(e,{...n,children:g.jsx(R,{...n})}):R(n)}function Se(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const Ae=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"})),q={};q.outlineInfo=V;q.main=Ae;export{q as default};
