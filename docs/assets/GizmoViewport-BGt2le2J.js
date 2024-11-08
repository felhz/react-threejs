import{u as w,V as C,a as X,n as Y,i as b,Q as q,_ as d,q as j}from"./react-three-fiber.esm-BcJ7ils1.js";import{r as e}from"./ssg-client-CTSCcih9.js";import{H as Z,O as _}from"./Hud-DYKJu_o6.js";const Q=e.createContext({}),B=()=>e.useContext(Q),J=2*Math.PI,H=new Y,T=new b,[P,M]=[new q,new q],G=new C,I=new C,K=a=>"minPolarAngle"in a,F=a=>"getTarget"in a,$=({alignment:a="bottom-right",margin:f=[80,80],renderPriority:l=1,onUpdate:h,onTarget:s,children:x})=>{const i=w(c=>c.size),n=w(c=>c.camera),o=w(c=>c.controls),g=w(c=>c.invalidate),y=e.useRef(null),u=e.useRef(null),p=e.useRef(!1),m=e.useRef(0),E=e.useRef(new C(0,0,0)),t=e.useRef(new C(0,0,0));e.useEffect(()=>{t.current.copy(n.up)},[n]);const r=e.useCallback(c=>{p.current=!0,(o||s)&&(E.current=(s==null?void 0:s())||(F(o)?o.getTarget(E.current):o==null?void 0:o.target)),m.current=n.position.distanceTo(G),P.copy(n.quaternion),I.copy(c).multiplyScalar(m.current).add(G),H.lookAt(I),M.copy(H.quaternion),g()},[o,n,s,g]);X((c,R)=>{if(u.current&&y.current){var S;if(p.current)if(P.angleTo(M)<.01)p.current=!1,K(o)&&n.up.copy(t.current);else{const V=R*J;P.rotateTowards(M,V),n.position.set(0,0,1).applyQuaternion(P).multiplyScalar(m.current).add(E.current),n.up.set(0,1,0).applyQuaternion(P).normalize(),n.quaternion.copy(P),F(o)&&o.setPosition(n.position.x,n.position.y,n.position.z),h?h():o&&o.update(R),g()}T.copy(n.matrix).invert(),(S=y.current)==null||S.quaternion.setFromRotationMatrix(T)}});const W=e.useMemo(()=>({tweenCamera:r}),[r]),[A,O]=f,k=a.endsWith("-center")?0:a.endsWith("-left")?-i.width/2+A:i.width/2-A,D=a.startsWith("center-")?0:a.startsWith("top-")?i.height/2-O:-i.height/2+O;return e.createElement(Z,{renderPriority:l},e.createElement(Q.Provider,{value:W},e.createElement(_,{makeDefault:!0,ref:u,position:[0,0,200]}),e.createElement("group",{ref:y,position:[k,D,0]},x)))};function z({scale:a=[.8,.05,.05],color:f,rotation:l}){return e.createElement("group",{rotation:l},e.createElement("mesh",{position:[.4,0,0]},e.createElement("boxGeometry",{args:a}),e.createElement("meshBasicMaterial",{color:f,toneMapped:!1})))}function v({onClick:a,font:f,disabled:l,arcStyle:h,label:s,labelColor:x,axisHeadScale:i=1,...n}){const o=w(t=>t.gl),g=e.useMemo(()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const r=t.getContext("2d");return r.beginPath(),r.arc(32,32,16,0,2*Math.PI),r.closePath(),r.fillStyle=h,r.fill(),s&&(r.font=f,r.textAlign="center",r.fillStyle=x,r.fillText(s,32,41)),new j(t)},[h,s,x,f]),[y,u]=e.useState(!1),p=(s?1:.75)*(y?1.2:1)*i,m=t=>{t.stopPropagation(),u(!0)},E=t=>{t.stopPropagation(),u(!1)};return e.createElement("sprite",d({scale:p,onPointerOver:l?void 0:m,onPointerOut:l?void 0:a||E},n),e.createElement("spriteMaterial",{map:g,"map-anisotropy":o.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:s?1:.75,toneMapped:!1}))}const ee=({hideNegativeAxes:a,hideAxisHeads:f,disabled:l,font:h="18px Inter var, Arial, sans-serif",axisColors:s=["#ff2060","#20df80","#2080ff"],axisHeadScale:x=1,axisScale:i,labels:n=["X","Y","Z"],labelColor:o="#000",onClick:g,...y})=>{const[u,p,m]=s,{tweenCamera:E}=B(),t={font:h,disabled:l,labelColor:o,onClick:g,axisHeadScale:x,onPointerDown:l?void 0:r=>{E(r.object.position),r.stopPropagation()}};return e.createElement("group",d({scale:40},y),e.createElement(z,{color:u,rotation:[0,0,0],scale:i}),e.createElement(z,{color:p,rotation:[0,0,Math.PI/2],scale:i}),e.createElement(z,{color:m,rotation:[0,-Math.PI/2,0],scale:i}),!f&&e.createElement(e.Fragment,null,e.createElement(v,d({arcStyle:u,position:[1,0,0],label:n[0]},t)),e.createElement(v,d({arcStyle:p,position:[0,1,0],label:n[1]},t)),e.createElement(v,d({arcStyle:m,position:[0,0,1],label:n[2]},t)),!a&&e.createElement(e.Fragment,null,e.createElement(v,d({arcStyle:u,position:[-1,0,0]},t)),e.createElement(v,d({arcStyle:p,position:[0,-1,0]},t)),e.createElement(v,d({arcStyle:m,position:[0,0,-1]},t)))))};export{$ as G,ee as a};
