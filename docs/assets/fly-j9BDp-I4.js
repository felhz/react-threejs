import{p as x}from"./fly_-FU1-d8Ot.js";import{r as v,j as h,u as M}from"./ssg-client-B4kbL9vE.js";import{c as p,E as D,S as E,M as m,e as u,d as L,_ as j,C as F}from"./react-three-fiber.esm-CtKwVee1.js";import{B as _,P}from"./shapes-CZq-CLjR.js";var S=Object.defineProperty,K=(o,s,a)=>s in o?S(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,e=(o,s,a)=>(K(o,typeof s!="symbol"?s+"":s,a),a);const b=new p;let C=class extends D{constructor(s,a){super(),e(this,"object"),e(this,"domElement"),e(this,"enabled",!0),e(this,"movementSpeed",1),e(this,"lookSpeed",.005),e(this,"lookVertical",!0),e(this,"autoForward",!1),e(this,"activeLook",!0),e(this,"heightSpeed",!1),e(this,"heightCoef",1),e(this,"heightMin",0),e(this,"heightMax",1),e(this,"constrainVertical",!1),e(this,"verticalMin",0),e(this,"verticalMax",Math.PI),e(this,"mouseDragOn",!1),e(this,"autoSpeedFactor",0),e(this,"mouseX",0),e(this,"mouseY",0),e(this,"moveForward",!1),e(this,"moveBackward",!1),e(this,"moveLeft",!1),e(this,"moveRight",!1),e(this,"moveUp",!1),e(this,"moveDown",!1),e(this,"viewHalfX",0),e(this,"viewHalfY",0),e(this,"lat",0),e(this,"lon",0),e(this,"lookDirection",new p),e(this,"spherical",new E),e(this,"target",new p),e(this,"connect",t=>{t.setAttribute("tabindex","-1"),t.style.touchAction="none",t.addEventListener("contextmenu",this.contextmenu),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),this.domElement=t,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.handleResize()}),e(this,"dispose",()=>{var t,i,r,c;(t=this.domElement)==null||t.removeEventListener("contextmenu",this.contextmenu),(i=this.domElement)==null||i.removeEventListener("mousedown",this.onMouseDown),(r=this.domElement)==null||r.removeEventListener("mousemove",this.onMouseMove),(c=this.domElement)==null||c.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}),e(this,"handleResize",()=>{this.domElement&&(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)}),e(this,"onMouseDown",t=>{var i;if((i=this.domElement)==null||i.focus(),this.activeLook)switch(t.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0}),e(this,"onMouseUp",t=>{if(this.activeLook)switch(t.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1}),e(this,"onMouseMove",t=>{this.domElement&&(this.mouseX=t.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=t.pageY-this.domElement.offsetTop-this.viewHalfY)}),e(this,"onKeyDown",t=>{switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}}),e(this,"onKeyUp",t=>{switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}}),e(this,"lookAt",(t,i,r)=>(t instanceof p?this.target.copy(t):i&&r&&this.target.set(t,i,r),this.object.lookAt(this.target),this.setOrientation(),this)),e(this,"update",t=>{if(!this.enabled)return;if(this.heightSpeed){const n=m.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=t*(n*this.heightCoef)}else this.autoSpeedFactor=0;const i=t*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(i+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(i),this.moveLeft&&this.object.translateX(-i),this.moveRight&&this.object.translateX(i),this.moveUp&&this.object.translateY(i),this.moveDown&&this.object.translateY(-i);let r=t*this.lookSpeed;this.activeLook||(r=0);let c=1;this.constrainVertical&&(c=Math.PI/(this.verticalMax-this.verticalMin)),this.lon-=this.mouseX*r,this.lookVertical&&(this.lat-=this.mouseY*r*c),this.lat=Math.max(-85,Math.min(85,this.lat));let d=m.degToRad(90-this.lat);const f=m.degToRad(this.lon);this.constrainVertical&&(d=m.mapLinear(d,0,Math.PI,this.verticalMin,this.verticalMax));const w=this.object.position;b.setFromSphericalCoords(1,d,f).add(w),this.object.lookAt(b)}),e(this,"contextmenu",t=>t.preventDefault()),e(this,"setOrientation",()=>{this.lookDirection.set(0,0,-1).applyQuaternion(this.object.quaternion),this.spherical.setFromVector3(this.lookDirection),this.lat=90-m.radToDeg(this.spherical.phi),this.lon=m.radToDeg(this.spherical.theta)}),this.object=s,this.domElement=a,this.setOrientation(),a&&this.connect(a)}};const R=v.forwardRef(({domElement:o,makeDefault:s,...a},t)=>{const i=u(n=>n.camera),r=u(n=>n.gl),c=u(n=>n.events),d=u(n=>n.get),f=u(n=>n.set),w=o||c.connected||r.domElement,[l]=v.useState(()=>new C(i,w));return v.useEffect(()=>{if(s){const n=d().controls;return f({controls:l}),()=>f({controls:n})}},[s,l]),L((n,y)=>{l.update(y)},-1),l?v.createElement("primitive",j({ref:t,object:l},a)):null}),A=()=>h.jsxs(F,{style:{height:"60vh"},children:[h.jsx(R,{autoForward:!1}),h.jsx(_,{args:[1,1,1],position:[0,0,0],children:h.jsx("meshStandardMaterial",{color:"hotpink",opacity:.1})}),h.jsx(P,{args:[4,4],rotation:[Math.PI/2,0,0],"material-color":"red",position:[2,0,0]}),h.jsx("ambientLight",{intensity:Math.PI})]}),U=`import { Box, FirstPersonControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const FirstPerson = () => {
  return (
    <Canvas style={{ height: '60vh' }}>
      <FirstPersonControls autoForward={false} />
      {/* <Environment preset="city" background={'only'} /> */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="hotpink" opacity={0.1} />
      </Box>
      <Plane
        args={[4, 4]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="red"
        position={[2, 0, 0]}
      />
      <ambientLight intensity={Math.PI} />
    </Canvas>
  )
}
export default FirstPerson
`,B=void 0,O=void 0,X={code:U,title:B,desc:O},Y=!0,I=Object.freeze(Object.defineProperty({__proto__:null,default:A,demoMeta:X,isDemo:Y},Symbol.toStringTag,{value:"Module"}));function g(o){const{Demo:s}={...M(),...o.components};return s||H("Demo"),h.jsx(s,{...I})}function T(o={}){const{wrapper:s}={...M(),...o.components};return s?h.jsx(s,{...o,children:h.jsx(g,{...o})}):g(o)}function H(o,s){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const V=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),k={};k.outlineInfo=x;k.main=V;export{k as default};
