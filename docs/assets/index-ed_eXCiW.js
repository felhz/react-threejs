import{j as e,r as w}from"./ssg-client-CkOz89ez.js";import{C as g,a as t,O as P,A as M,e as C,c as f,b as S,V as s,u as b,T as v,y as r}from"./OrbitControls-DPVObLsO.js";import{G as I,a as y}from"./GizmoViewport-C6YI2HB4.js";import{L as F}from"./Line-D3Ldhdtd.js";function G(){const a=new M(0,0,20,0,Math.PI*2,!1),o=a.getPoints(50),[n,i]=w.useState(new C),c=f(v,"/react-threejs/earth.jpg"),l=new r(10,Math.PI/180*0,0),h=new r(12,Math.PI/180*45,0),m=new r(13,Math.PI/180*90,0),p=new r(12,Math.PI/180*135,0),u=new r(10,Math.PI/180*180,0);return new S([new s().setFromSpherical(l),new s().setFromSpherical(h),new s().setFromSpherical(m),new s().setFromSpherical(p),new s().setFromSpherical(u)],!1,"catmullrom",.5).getPoints(100),b(d=>{const x=d.clock.getElapsedTime()/15%1,j=a.getPointAt(x);i(j)}),e.jsxs("group",{children:[e.jsxs("mesh",{children:[e.jsx("sphereGeometry",{args:[10]}),e.jsx("meshStandardMaterial",{map:c})]}),e.jsxs("mesh",{children:[e.jsx(F,{points:o,color:new t(65280)}),e.jsxs("mesh",{position:[...n,0],children:[e.jsx("sphereGeometry",{args:[1]}),e.jsx("meshBasicMaterial",{color:new t(255),opacity:.5,transparent:!0})]})]})]})}const O=()=>e.jsxs(g,{shadows:!0,dpr:[1,2],style:{height:"80vh"},gl:{alpha:!1},scene:{background:new t(16777215)},camera:{position:[0,0,80],fov:45},children:[e.jsx(P,{}),e.jsx(I,{children:e.jsx(y,{axisColors:["red","green","blue"],labelColor:"black"})}),e.jsx("ambientLight",{intensity:Math.PI}),e.jsx(G,{})]});export{O as M};
