import{p as Ct}from"./font_-FU1-d8Ot.js";import{r as e,c as Et,j as V,u as at}from"./ssg-client-C6-up7Ct.js";import{e as ne,d as be,c as p,_ as Le,D as ve,O as lt,P as ut,V as Rt,Q as He,f as B,g as dt,M as kt,R as ft,B as pt,h as St,L as Tt,F as Ft,i as Wt,C as Ot,a as zt}from"./react-three-fiber.esm-B87Saucm.js";import{O as jt}from"./OrbitControls-CtZFSSzX.js";import{L as Me}from"./Line-BKnen9CK.js";import{T as _e}from"./Text-Dxos5wiL.js";const fe=new p,$e=new p,Dt=new p,Ge=new Rt;function It(o,t,n){const r=fe.setFromMatrixPosition(o.matrixWorld);r.project(t);const s=n.width/2,i=n.height/2;return[r.x*s+s,-(r.y*i)+i]}function Lt(o,t){const n=fe.setFromMatrixPosition(o.matrixWorld),r=$e.setFromMatrixPosition(t.matrixWorld),s=n.sub(r),i=t.getWorldDirection(Dt);return s.angleTo(i)>Math.PI/2}function Ht(o,t,n,r){const s=fe.setFromMatrixPosition(o.matrixWorld),i=s.clone();i.project(t),Ge.set(i.x,i.y),n.setFromCamera(Ge,t);const c=n.intersectObjects(r,!0);if(c.length){const f=c[0].distance;return s.distanceTo(n.ray.origin)<f}return!0}function $t(o,t){if(t instanceof lt)return t.zoom;if(t instanceof ut){const n=fe.setFromMatrixPosition(o.matrixWorld),r=$e.setFromMatrixPosition(t.matrixWorld),s=t.fov*Math.PI/180,i=n.distanceTo(r);return 1/(2*Math.tan(s/2)*i)}else return 1}function Bt(o,t,n){if(t instanceof ut||t instanceof lt){const r=fe.setFromMatrixPosition(o.matrixWorld),s=$e.setFromMatrixPosition(t.matrixWorld),i=r.distanceTo(s),c=(n[1]-n[0])/(t.far-t.near),f=n[1]-c*t.far;return Math.round(c*i+f)}}const Ie=o=>Math.abs(o)<1e-10?0:o;function mt(o,t,n=""){let r="matrix3d(";for(let s=0;s!==16;s++)r+=Ie(t[s]*o.elements[s])+(s!==15?",":")");return n+r}const Nt=(o=>t=>mt(t,o))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),_t=(o=>(t,n)=>mt(t,o(n),"translate(-50%,-50%)"))(o=>[1/o,1/o,1/o,1,-1/o,-1/o,-1/o,-1,1/o,1/o,1/o,1,1,1,1,1]);function Gt(o){return o&&typeof o=="object"&&"current"in o}const Ce=e.forwardRef(({children:o,eps:t=.001,style:n,className:r,prepend:s,center:i,fullscreen:c,portal:f,distanceFactor:m,sprite:x=!1,transform:y=!1,occlude:u,onOcclude:T,castShadow:_,receiveShadow:I,material:w,geometry:M,zIndexRange:b=[16777271,0],calculatePosition:E=It,as:O="div",wrapperClass:F,pointerEvents:k="auto",...R},L)=>{const{gl:G,camera:W,scene:U,size:D,raycaster:A,events:X,viewport:N}=ne(),[S]=e.useState(()=>document.createElement(O)),g=e.useRef(),l=e.useRef(null),a=e.useRef(0),d=e.useRef([0,0]),v=e.useRef(null),C=e.useRef(null),P=(f==null?void 0:f.current)||X.connected||G.domElement.parentNode,z=e.useRef(null),H=e.useRef(!1),h=e.useMemo(()=>u&&u!=="blending"||Array.isArray(u)&&u.length&&Gt(u[0]),[u]);e.useLayoutEffect(()=>{const Z=G.domElement;u&&u==="blending"?(Z.style.zIndex=`${Math.floor(b[0]/2)}`,Z.style.position="absolute",Z.style.pointerEvents="none"):(Z.style.zIndex=null,Z.style.position=null,Z.style.pointerEvents=null)},[u]),e.useLayoutEffect(()=>{if(l.current){const Z=g.current=Et(S);if(U.updateMatrixWorld(),y)S.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const j=E(l.current,W,D);S.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${j[0]}px,${j[1]}px,0);transform-origin:0 0;`}return P&&(s?P.prepend(S):P.appendChild(S)),()=>{P&&P.removeChild(S),Z.unmount()}}},[P,y]),e.useLayoutEffect(()=>{F&&(S.className=F)},[F]);const Q=e.useMemo(()=>y?{position:"absolute",top:0,left:0,width:D.width,height:D.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:i?"translate3d(-50%,-50%,0)":"none",...c&&{top:-D.height/2,left:-D.width/2,width:D.width,height:D.height},...n},[n,i,c,D,y]),J=e.useMemo(()=>({position:"absolute",pointerEvents:k}),[k]);e.useLayoutEffect(()=>{if(H.current=!1,y){var Z;(Z=g.current)==null||Z.render(e.createElement("div",{ref:v,style:Q},e.createElement("div",{ref:C,style:J},e.createElement("div",{ref:L,className:r,style:n,children:o}))))}else{var j;(j=g.current)==null||j.render(e.createElement("div",{ref:L,style:Q,className:r,children:o}))}});const q=e.useRef(!0);be(Z=>{if(l.current){W.updateMatrixWorld(),l.current.updateWorldMatrix(!0,!1);const j=y?d.current:E(l.current,W,D);if(y||Math.abs(a.current-W.zoom)>t||Math.abs(d.current[0]-j[0])>t||Math.abs(d.current[1]-j[1])>t){const Y=Lt(l.current,W);let K=!1;h&&(Array.isArray(u)?K=u.map(ee=>ee.current):u!=="blending"&&(K=[U]));const ae=q.current;if(K){const ee=Ht(l.current,W,A,K);q.current=ee&&!Y}else q.current=!Y;ae!==q.current&&(T?T(!q.current):S.style.display=q.current?"block":"none");const me=Math.floor(b[0]/2),xt=u?h?[b[0],me]:[me-1,0]:b;if(S.style.zIndex=`${Bt(l.current,W,xt)}`,y){const[ee,Be]=[D.width/2,D.height/2],Ee=W.projectionMatrix.elements[5]*Be,{isOrthographicCamera:Ne,top:yt,left:Pt,bottom:wt,right:Mt}=W,bt=Nt(W.matrixWorldInverse),vt=Ne?`scale(${Ee})translate(${Ie(-(Mt+Pt)/2)}px,${Ie((yt+wt)/2)}px)`:`translateZ(${Ee}px)`;let te=l.current.matrixWorld;x&&(te=W.matrixWorldInverse.clone().transpose().copyPosition(te).scale(l.current.scale),te.elements[3]=te.elements[7]=te.elements[11]=0,te.elements[15]=1),S.style.width=D.width+"px",S.style.height=D.height+"px",S.style.perspective=Ne?"":`${Ee}px`,v.current&&C.current&&(v.current.style.transform=`${vt}${bt}translate(${ee}px,${Be}px)`,C.current.style.transform=_t(te,1/((m||10)/400)))}else{const ee=m===void 0?1:$t(l.current,W)*m;S.style.transform=`translate3d(${j[0]}px,${j[1]}px,0) scale(${ee})`}d.current=j,a.current=W.zoom}}if(!h&&z.current&&!H.current)if(y){if(v.current){const j=v.current.children[0];if(j!=null&&j.clientWidth&&j!=null&&j.clientHeight){const{isOrthographicCamera:Y}=W;if(Y||M)R.scale&&(Array.isArray(R.scale)?R.scale instanceof p?z.current.scale.copy(R.scale.clone().divideScalar(1)):z.current.scale.set(1/R.scale[0],1/R.scale[1],1/R.scale[2]):z.current.scale.setScalar(1/R.scale));else{const K=(m||10)/400,ae=j.clientWidth*K,me=j.clientHeight*K;z.current.scale.set(ae,me,1)}H.current=!0}}}else{const j=S.children[0];if(j!=null&&j.clientWidth&&j!=null&&j.clientHeight){const Y=1/N.factor,K=j.clientWidth*Y,ae=j.clientHeight*Y;z.current.scale.set(K,ae,1),H.current=!0}z.current.lookAt(Z.camera.position)}});const $=e.useMemo(()=>({vertexShader:y?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[y]);return e.createElement("group",Le({},R,{ref:l}),u&&!h&&e.createElement("mesh",{castShadow:_,receiveShadow:I,ref:z},M||e.createElement("planeGeometry",null),w||e.createElement("shaderMaterial",{side:ve,vertexShader:$.vertexShader,fragmentShader:$.fragmentShader})))}),Vt=e.forwardRef(function({children:t,follow:n=!0,lockX:r=!1,lockY:s=!1,lockZ:i=!1,...c},f){const m=e.useRef(null),x=e.useRef(null),y=new He;return be(({camera:u})=>{if(!n||!x.current)return;const T=x.current.rotation.clone();x.current.updateMatrix(),x.current.updateWorldMatrix(!1,!1),x.current.getWorldQuaternion(y),u.getWorldQuaternion(m.current.quaternion).premultiply(y.invert()),r&&(x.current.rotation.x=T.x),s&&(x.current.rotation.y=T.y),i&&(x.current.rotation.z=T.z)}),e.useImperativeHandle(f,()=>x.current,[]),e.createElement("group",Le({ref:x},c),e.createElement("group",{ref:m},t))}),Ut=new p,qt=new p,At=new p,Qt=(o,t,n)=>{const r=n.width/2,s=n.height/2;t.updateMatrixWorld(!1);const i=o.project(t);return i.x=i.x*r+r,i.y=-(i.y*s)+s,i},Xt=(o,t,n,r=1)=>{const s=Ut.set(o.x/n.width*2-1,-(o.y/n.height)*2+1,r);return s.unproject(t),s},ht=(o,t,n,r)=>{const s=Qt(At.copy(o),n,r);let i=0;for(let c=0;c<2;++c){const f=qt.copy(s).setComponent(c,s.getComponent(c)+t),m=Xt(f,n,r,f.z);i=Math.max(i,o.distanceTo(m))}return i},pe=e.createContext(null),he=new p,Ve=new p,Zt=(o,t,n,r)=>{const s=t.dot(t),i=t.dot(o)-t.dot(n),c=t.dot(r);return c===0?-i/s:(he.copy(r).multiplyScalar(s/c).sub(t),Ve.copy(r).multiplyScalar(i/c).add(n).sub(o),-he.dot(Ve)/he.dot(he))},Kt=new p(0,1,0),Ue=new B,Re=({direction:o,axis:t})=>{const{translation:n,translationLimits:r,annotations:s,annotationsClass:i,depthTest:c,scale:f,lineWidth:m,fixed:x,axisColors:y,hoveredColor:u,opacity:T,onDragStart:_,onDrag:I,onDragEnd:w,userData:M}=e.useContext(pe),b=ne(l=>l.controls),E=e.useRef(null),O=e.useRef(null),F=e.useRef(null),k=e.useRef(0),[R,L]=e.useState(!1),G=e.useCallback(l=>{s&&(E.current.innerText=`${n.current[t].toFixed(2)}`,E.current.style.display="block"),l.stopPropagation();const a=new B().extractRotation(O.current.matrixWorld),d=l.point.clone(),v=new p().setFromMatrixPosition(O.current.matrixWorld),C=o.clone().applyMatrix4(a).normalize();F.current={clickPoint:d,dir:C},k.current=n.current[t],_({component:"Arrow",axis:t,origin:v,directions:[C]}),b&&(b.enabled=!1),l.target.setPointerCapture(l.pointerId)},[s,o,b,_,n,t]),W=e.useCallback(l=>{if(l.stopPropagation(),R||L(!0),F.current){const{clickPoint:a,dir:d}=F.current,[v,C]=(r==null?void 0:r[t])||[void 0,void 0];let P=Zt(a,d,l.ray.origin,l.ray.direction);v!==void 0&&(P=Math.max(P,v-k.current)),C!==void 0&&(P=Math.min(P,C-k.current)),n.current[t]=k.current+P,s&&(E.current.innerText=`${n.current[t].toFixed(2)}`),Ue.makeTranslation(d.x*P,d.y*P,d.z*P),I(Ue)}},[s,I,R,n,r,t]),U=e.useCallback(l=>{s&&(E.current.style.display="none"),l.stopPropagation(),F.current=null,w(),b&&(b.enabled=!0),l.target.releasePointerCapture(l.pointerId)},[s,b,w]),D=e.useCallback(l=>{l.stopPropagation(),L(!1)},[]),{cylinderLength:A,coneWidth:X,coneLength:N,matrixL:S}=e.useMemo(()=>{const l=x?m/f*1.6:f/20,a=x?.2:f/5,d=x?1-a:f-a,v=new He().setFromUnitVectors(Kt,o.clone().normalize()),C=new B().makeRotationFromQuaternion(v);return{cylinderLength:d,coneWidth:l,coneLength:a,matrixL:C}},[o,f,m,x]),g=R?u:y[t];return e.createElement("group",{ref:O},e.createElement("group",{matrix:S,matrixAutoUpdate:!1,onPointerDown:G,onPointerMove:W,onPointerUp:U,onPointerOut:D},s&&e.createElement(Ce,{position:[0,-N,0]},e.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:E})),e.createElement("mesh",{visible:!1,position:[0,(A+N)/2,0],userData:M},e.createElement("cylinderGeometry",{args:[X*1.4,X*1.4,A+N,8,1]})),e.createElement(Me,{transparent:!0,raycast:()=>null,depthTest:c,points:[0,0,0,0,A,0],lineWidth:m,side:ve,color:g,opacity:T,polygonOffset:!0,renderOrder:1,polygonOffsetFactor:-10,fog:!1}),e.createElement("mesh",{raycast:()=>null,position:[0,A+N/2,0],renderOrder:500},e.createElement("coneGeometry",{args:[X,N,24,1]}),e.createElement("meshBasicMaterial",{transparent:!0,depthTest:c,color:g,opacity:T,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))))},ke=new p,Se=new p,Te=o=>o*180/Math.PI,Jt=o=>o*Math.PI/180,Yt=(o,t,n,r,s)=>{ke.copy(o).sub(n),Se.copy(t).sub(n);const i=r.dot(r),c=s.dot(s),f=ke.dot(r)/i,m=ke.dot(s)/c,x=Se.dot(r)/i,y=Se.dot(s)/c,u=Math.atan2(m,f);return Math.atan2(y,x)-u},en=(o,t)=>{let n=Math.floor(o/t);return n=n<0?n+1:n,o-n*t},qe=o=>{let t=en(o,2*Math.PI);return Math.abs(t)<1e-6?0:(t<0&&(t+=2*Math.PI),t)},ge=new B,Ae=new p,xe=new ft,Fe=new p,We=({dir1:o,dir2:t,axis:n})=>{const{rotationLimits:r,annotations:s,annotationsClass:i,depthTest:c,scale:f,lineWidth:m,fixed:x,axisColors:y,hoveredColor:u,opacity:T,onDragStart:_,onDrag:I,onDragEnd:w,userData:M}=e.useContext(pe),b=ne(g=>g.controls),E=e.useRef(null),O=e.useRef(null),F=e.useRef(0),k=e.useRef(0),R=e.useRef(null),[L,G]=e.useState(!1),W=e.useCallback(g=>{s&&(E.current.innerText=`${Te(k.current).toFixed(0)}º`,E.current.style.display="block"),g.stopPropagation();const l=g.point.clone(),a=new p().setFromMatrixPosition(O.current.matrixWorld),d=new p().setFromMatrixColumn(O.current.matrixWorld,0).normalize(),v=new p().setFromMatrixColumn(O.current.matrixWorld,1).normalize(),C=new p().setFromMatrixColumn(O.current.matrixWorld,2).normalize(),P=new dt().setFromNormalAndCoplanarPoint(C,a);R.current={clickPoint:l,origin:a,e1:d,e2:v,normal:C,plane:P},_({component:"Rotator",axis:n,origin:a,directions:[d,v,C]}),b&&(b.enabled=!1),g.target.setPointerCapture(g.pointerId)},[s,b,_,n]),U=e.useCallback(g=>{if(g.stopPropagation(),L||G(!0),R.current){const{clickPoint:l,origin:a,e1:d,e2:v,normal:C,plane:P}=R.current,[z,H]=(r==null?void 0:r[n])||[void 0,void 0];xe.copy(g.ray),xe.intersectPlane(P,Fe),xe.direction.negate(),xe.intersectPlane(P,Fe);let h=Yt(l,Fe,a,d,v),Q=Te(h);g.shiftKey&&(Q=Math.round(Q/10)*10,h=Jt(Q)),z!==void 0&&H!==void 0&&H-z<2*Math.PI?(h=qe(h),h=h>Math.PI?h-2*Math.PI:h,h=kt.clamp(h,z-F.current,H-F.current),k.current=F.current+h):(k.current=qe(F.current+h),k.current=k.current>Math.PI?k.current-2*Math.PI:k.current),s&&(Q=Te(k.current),E.current.innerText=`${Q.toFixed(0)}º`),ge.makeRotationAxis(C,h),Ae.copy(a).applyMatrix4(ge).sub(a).negate(),ge.setPosition(Ae),I(ge)}},[s,I,L,r,n]),D=e.useCallback(g=>{s&&(E.current.style.display="none"),g.stopPropagation(),F.current=k.current,R.current=null,w(),b&&(b.enabled=!0),g.target.releasePointerCapture(g.pointerId)},[s,b,w]),A=e.useCallback(g=>{g.stopPropagation(),G(!1)},[]),X=e.useMemo(()=>{const g=o.clone().normalize(),l=t.clone().normalize();return new B().makeBasis(g,l,g.clone().cross(l))},[o,t]),N=x?.65:f*.65,S=e.useMemo(()=>{const l=[];for(let a=0;a<=32;a++){const d=a*(Math.PI/2)/32;l.push(new p(Math.cos(d)*N,Math.sin(d)*N,0))}return l},[N]);return e.createElement("group",{ref:O,onPointerDown:W,onPointerMove:U,onPointerUp:D,onPointerOut:A,matrix:X,matrixAutoUpdate:!1},s&&e.createElement(Ce,{position:[N,N,0]},e.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:i,ref:E})),e.createElement(Me,{points:S,lineWidth:m*4,visible:!1,userData:M}),e.createElement(Me,{transparent:!0,raycast:()=>null,depthTest:c,points:S,lineWidth:m,side:ve,color:L?u:y[n],opacity:T,polygonOffset:!0,polygonOffsetFactor:-10,fog:!1}))},tn=(o,t,n)=>{const r=Math.abs(o.x)>=Math.abs(o.y)&&Math.abs(o.x)>=Math.abs(o.z)?0:Math.abs(o.y)>=Math.abs(o.x)&&Math.abs(o.y)>=Math.abs(o.z)?1:2,s=[0,1,2].sort((I,w)=>Math.abs(t.getComponent(w))-Math.abs(t.getComponent(I))),i=r===s[0]?s[1]:s[0],c=o.getComponent(r),f=o.getComponent(i),m=t.getComponent(r),x=t.getComponent(i),y=n.getComponent(r),T=(n.getComponent(i)-y*(f/c))/(x-m*(f/c));return[(y-T*m)/c,T]},ye=new ft,Pe=new p,Qe=new B,Oe=({dir1:o,dir2:t,axis:n})=>{const{translation:r,translationLimits:s,annotations:i,annotationsClass:c,depthTest:f,scale:m,lineWidth:x,fixed:y,axisColors:u,hoveredColor:T,opacity:_,onDragStart:I,onDrag:w,onDragEnd:M,userData:b}=e.useContext(pe),E=ne(d=>d.controls),O=e.useRef(null),F=e.useRef(null),k=e.useRef(null),R=e.useRef(0),L=e.useRef(0),[G,W]=e.useState(!1),U=e.useCallback(d=>{i&&(O.current.innerText=`${r.current[(n+1)%3].toFixed(2)}, ${r.current[(n+2)%3].toFixed(2)}`,O.current.style.display="block"),d.stopPropagation();const v=d.point.clone(),C=new p().setFromMatrixPosition(F.current.matrixWorld),P=new p().setFromMatrixColumn(F.current.matrixWorld,0).normalize(),z=new p().setFromMatrixColumn(F.current.matrixWorld,1).normalize(),H=new p().setFromMatrixColumn(F.current.matrixWorld,2).normalize(),h=new dt().setFromNormalAndCoplanarPoint(H,C);k.current={clickPoint:v,e1:P,e2:z,plane:h},R.current=r.current[(n+1)%3],L.current=r.current[(n+2)%3],I({component:"Slider",axis:n,origin:C,directions:[P,z,H]}),E&&(E.enabled=!1),d.target.setPointerCapture(d.pointerId)},[i,E,I,n]),D=e.useCallback(d=>{if(d.stopPropagation(),G||W(!0),k.current){const{clickPoint:v,e1:C,e2:P,plane:z}=k.current,[H,h]=(s==null?void 0:s[(n+1)%3])||[void 0,void 0],[Q,J]=(s==null?void 0:s[(n+2)%3])||[void 0,void 0];ye.copy(d.ray),ye.intersectPlane(z,Pe),ye.direction.negate(),ye.intersectPlane(z,Pe),Pe.sub(v);let[q,$]=tn(C,P,Pe);H!==void 0&&(q=Math.max(q,H-R.current)),h!==void 0&&(q=Math.min(q,h-R.current)),Q!==void 0&&($=Math.max($,Q-L.current)),J!==void 0&&($=Math.min($,J-L.current)),r.current[(n+1)%3]=R.current+q,r.current[(n+2)%3]=L.current+$,i&&(O.current.innerText=`${r.current[(n+1)%3].toFixed(2)}, ${r.current[(n+2)%3].toFixed(2)}`),Qe.makeTranslation(q*C.x+$*P.x,q*C.y+$*P.y,q*C.z+$*P.z),w(Qe)}},[i,w,G,r,s,n]),A=e.useCallback(d=>{i&&(O.current.style.display="none"),d.stopPropagation(),k.current=null,M(),E&&(E.enabled=!0),d.target.releasePointerCapture(d.pointerId)},[i,E,M]),X=e.useCallback(d=>{d.stopPropagation(),W(!1)},[]),N=e.useMemo(()=>{const d=o.clone().normalize(),v=t.clone().normalize();return new B().makeBasis(d,v,d.clone().cross(v))},[o,t]),S=y?1/7:m/7,g=y?.225:m*.225,l=G?T:u[n],a=e.useMemo(()=>[new p(0,0,0),new p(0,g,0),new p(g,g,0),new p(g,0,0),new p(0,0,0)],[g]);return e.createElement("group",{ref:F,matrix:N,matrixAutoUpdate:!1},i&&e.createElement(Ce,{position:[0,0,0]},e.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:c,ref:O})),e.createElement("group",{position:[S*1.7,S*1.7,0]},e.createElement("mesh",{visible:!0,onPointerDown:U,onPointerMove:D,onPointerUp:A,onPointerOut:X,scale:g,userData:b},e.createElement("planeGeometry",null),e.createElement("meshBasicMaterial",{transparent:!0,depthTest:f,color:l,polygonOffset:!0,polygonOffsetFactor:-10,side:ve,fog:!1})),e.createElement(Me,{position:[-g/2,-g/2,0],transparent:!0,depthTest:f,points:a,lineWidth:x,color:l,opacity:_,polygonOffset:!0,polygonOffsetFactor:-10,userData:b,fog:!1})))},de=new p,Xe=new p,nn=(o,t,n,r)=>{const s=t.dot(t),i=t.dot(o)-t.dot(n),c=t.dot(r);return c===0?-i/s:(de.copy(r).multiplyScalar(s/c).sub(t),Xe.copy(r).multiplyScalar(i/c).add(n).sub(o),-de.dot(Xe)/de.dot(de))},on=new p(0,1,0),le=new p,Ze=new B,ze=({direction:o,axis:t})=>{const{scaleLimits:n,annotations:r,annotationsClass:s,depthTest:i,scale:c,lineWidth:f,fixed:m,axisColors:x,hoveredColor:y,opacity:u,onDragStart:T,onDrag:_,onDragEnd:I,userData:w}=e.useContext(pe),M=ne(a=>a.size),b=ne(a=>a.controls),E=e.useRef(null),O=e.useRef(null),F=e.useRef(null),k=e.useRef(1),R=e.useRef(1),L=e.useRef(null),[G,W]=e.useState(!1),U=m?1.2:1.2*c,D=e.useCallback(a=>{r&&(E.current.innerText=`${R.current.toFixed(2)}`,E.current.style.display="block"),a.stopPropagation();const d=new B().extractRotation(O.current.matrixWorld),v=a.point.clone(),C=new p().setFromMatrixPosition(O.current.matrixWorld),P=o.clone().applyMatrix4(d).normalize(),z=O.current.matrixWorld.clone(),H=z.clone().invert(),h=m?1/ht(O.current.getWorldPosition(de),c,a.camera,M):1;L.current={clickPoint:v,dir:P,mPLG:z,mPLGInv:H,offsetMultiplier:h},T({component:"Sphere",axis:t,origin:C,directions:[P]}),b&&(b.enabled=!1),a.target.setPointerCapture(a.pointerId)},[r,b,o,T,t,m,c,M]),A=e.useCallback(a=>{if(a.stopPropagation(),G||W(!0),L.current){const{clickPoint:d,dir:v,mPLG:C,mPLGInv:P,offsetMultiplier:z}=L.current,[H,h]=(n==null?void 0:n[t])||[1e-5,void 0],J=nn(d,v,a.ray.origin,a.ray.direction)*z,q=m?J:J/c;let $=Math.pow(2,q*.2);a.shiftKey&&($=Math.round($*10)/10),$=Math.max($,H/k.current),h!==void 0&&($=Math.min($,h/k.current)),R.current=k.current*$,F.current.position.set(0,U+J,0),r&&(E.current.innerText=`${R.current.toFixed(2)}`),le.set(1,1,1),le.setComponent(t,$),Ze.makeScale(le.x,le.y,le.z).premultiply(C).multiply(P),_(Ze)}},[r,U,_,G,n,t]),X=e.useCallback(a=>{r&&(E.current.style.display="none"),a.stopPropagation(),k.current=R.current,L.current=null,F.current.position.set(0,U,0),I(),b&&(b.enabled=!0),a.target.releasePointerCapture(a.pointerId)},[r,b,I,U]),N=e.useCallback(a=>{a.stopPropagation(),W(!1)},[]),{radius:S,matrixL:g}=e.useMemo(()=>{const a=m?f/c*1.8:c/22.5,d=new He().setFromUnitVectors(on,o.clone().normalize()),v=new B().makeRotationFromQuaternion(d);return{radius:a,matrixL:v}},[o,c,f,m]),l=G?y:x[t];return e.createElement("group",{ref:O},e.createElement("group",{matrix:g,matrixAutoUpdate:!1,onPointerDown:D,onPointerMove:A,onPointerUp:X,onPointerOut:N},r&&e.createElement(Ce,{position:[0,U/2,0]},e.createElement("div",{style:{display:"none",background:"#151520",color:"white",padding:"6px 8px",borderRadius:7,whiteSpace:"nowrap"},className:s,ref:E})),e.createElement("mesh",{ref:F,position:[0,U,0],renderOrder:500,userData:w},e.createElement("sphereGeometry",{args:[S,12,12]}),e.createElement("meshBasicMaterial",{transparent:!0,depthTest:i,color:l,opacity:u,polygonOffset:!0,polygonOffsetFactor:-10}))))},Ke=new B,Je=new B,Ye=new B,we=new B,je=new B,oe=new B,et=new B,tt=new B,nt=new B,re=new pt,De=new pt,ot=new p,rt=new p,st=new p,it=new p,ue=new p,se=new p(1,0,0),ie=new p(0,1,0),ce=new p(0,0,1),rn=e.forwardRef(({enabled:o=!0,matrix:t,onDragStart:n,onDrag:r,onDragEnd:s,autoTransform:i=!0,anchor:c,disableAxes:f=!1,disableSliders:m=!1,disableRotations:x=!1,disableScaling:y=!1,activeAxes:u=[!0,!0,!0],offset:T=[0,0,0],rotation:_=[0,0,0],scale:I=1,lineWidth:w=4,fixed:M=!1,translationLimits:b,rotationLimits:E,scaleLimits:O,depthTest:F=!0,axisColors:k=["#ff2060","#20df80","#2080ff"],hoveredColor:R="#ffff40",annotations:L=!1,annotationsClass:G,opacity:W=1,visible:U=!0,userData:D,children:A,...X},N)=>{const S=ne(h=>h.invalidate),g=e.useRef(null),l=e.useRef(null),a=e.useRef(null),d=e.useRef(null),v=e.useRef([0,0,0]),C=e.useRef(new p(1,1,1)),P=e.useRef(new p(1,1,1));e.useLayoutEffect(()=>{c&&(d.current.updateWorldMatrix(!0,!0),we.copy(d.current.matrixWorld).invert(),re.makeEmpty(),d.current.traverse(h=>{h.geometry&&(h.geometry.boundingBox||h.geometry.computeBoundingBox(),oe.copy(h.matrixWorld).premultiply(we),De.copy(h.geometry.boundingBox),De.applyMatrix4(oe),re.union(De))}),ot.copy(re.max).add(re.min).multiplyScalar(.5),rt.copy(re.max).sub(re.min).multiplyScalar(.5),st.copy(rt).multiply(new p(...c)).add(ot),it.set(...T).add(st),a.current.position.copy(it),S())});const z=e.useMemo(()=>({onDragStart:h=>{Ke.copy(l.current.matrix),Je.copy(l.current.matrixWorld),n&&n(h),S()},onDrag:h=>{Ye.copy(g.current.matrixWorld),we.copy(Ye).invert(),je.copy(Je).premultiply(h),oe.copy(je).premultiply(we),et.copy(Ke).invert(),tt.copy(oe).multiply(et),i&&l.current.matrix.copy(oe),r&&r(oe,tt,je,h),S()},onDragEnd:()=>{s&&s(),S()},translation:v,translationLimits:b,rotationLimits:E,axisColors:k,hoveredColor:R,opacity:W,scale:I,lineWidth:w,fixed:M,depthTest:F,userData:D,annotations:L,annotationsClass:G}),[n,r,s,v,b,E,O,F,I,w,M,...k,R,W,D,i,L,G]),H=new p;return be(h=>{if(M){const Q=ht(a.current.getWorldPosition(H),I,h.camera,h.size);C.current.setScalar(Q)}t&&t instanceof B&&(l.current.matrix=t),l.current.updateWorldMatrix(!0,!0),nt.makeRotationFromEuler(a.current.rotation).setPosition(a.current.position).premultiply(l.current.matrixWorld),P.current.setFromMatrixScale(nt),ue.copy(C.current).divide(P.current),(Math.abs(a.current.scale.x-ue.x)>1e-4||Math.abs(a.current.scale.y-ue.y)>1e-4||Math.abs(a.current.scale.z-ue.z)>1e-4)&&(a.current.scale.copy(ue),h.invalidate())}),e.useImperativeHandle(N,()=>l.current,[]),e.createElement(pe.Provider,{value:z},e.createElement("group",{ref:g},e.createElement("group",Le({ref:l,matrix:t,matrixAutoUpdate:!1},X),e.createElement("group",{visible:U,ref:a,position:T,rotation:_},o&&e.createElement(e.Fragment,null,!f&&u[0]&&e.createElement(Re,{axis:0,direction:se}),!f&&u[1]&&e.createElement(Re,{axis:1,direction:ie}),!f&&u[2]&&e.createElement(Re,{axis:2,direction:ce}),!m&&u[0]&&u[1]&&e.createElement(Oe,{axis:2,dir1:se,dir2:ie}),!m&&u[0]&&u[2]&&e.createElement(Oe,{axis:1,dir1:ce,dir2:se}),!m&&u[2]&&u[1]&&e.createElement(Oe,{axis:0,dir1:ie,dir2:ce}),!x&&u[0]&&u[1]&&e.createElement(We,{axis:2,dir1:se,dir2:ie}),!x&&u[0]&&u[2]&&e.createElement(We,{axis:1,dir1:ce,dir2:se}),!x&&u[2]&&u[1]&&e.createElement(We,{axis:0,dir1:ie,dir2:ce}),!y&&u[0]&&e.createElement(ze,{axis:0,direction:se}),!y&&u[1]&&e.createElement(ze,{axis:1,direction:ie}),!y&&u[2]&&e.createElement(ze,{axis:2,direction:ce}))),e.createElement("group",{ref:d},A))))});class sn extends St{constructor(t,n={}){const r=n.font;if(r===void 0)super();else{const s=r.generateShapes(t,n.size);n.depth===void 0&&n.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),n.depth=n.depth!==void 0?n.depth:n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(s,n)}this.type="TextGeometry"}}class cn extends Tt{constructor(t){super(t)}load(t,n,r,s){const i=this,c=new Ft(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(f){const m=i.parse(JSON.parse(f));n&&n(m)},r,s)}parse(t){return new an(t)}}class an{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100){const r=[],s=ln(t,n,this.data);for(let i=0,c=s.length;i<c;i++)r.push(...s[i].toShapes());return r}}function ln(o,t,n){const r=Array.from(o),s=t/n.resolution,i=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,c=[];let f=0,m=0;for(let x=0;x<r.length;x++){const y=r[x];if(y===`
`)f=0,m-=i;else{const u=un(y,s,f,m,n);f+=u.offsetX,c.push(u.path)}}return c}function un(o,t,n,r,s){const i=s.glyphs[o]||s.glyphs["?"];if(!i){console.error('THREE.Font: character "'+o+'" does not exists in font family '+s.familyName+".");return}const c=new Wt;let f,m,x,y,u,T,_,I;if(i.o){const w=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let M=0,b=w.length;M<b;)switch(w[M++]){case"m":f=w[M++]*t+n,m=w[M++]*t+r,c.moveTo(f,m);break;case"l":f=w[M++]*t+n,m=w[M++]*t+r,c.lineTo(f,m);break;case"q":x=w[M++]*t+n,y=w[M++]*t+r,u=w[M++]*t+n,T=w[M++]*t+r,c.quadraticCurveTo(u,T,x,y);break;case"b":x=w[M++]*t+n,y=w[M++]*t+r,u=w[M++]*t+n,T=w[M++]*t+r,_=w[M++]*t+n,I=w[M++]*t+r,c.bezierCurveTo(u,T,_,I,x,y);break}}return{offsetX:i.ha*t,path:c}}const dn=()=>{const o=new cn;e.useEffect(()=>{o.load("/font/bold.json",function(s){const i=new sn("Hello!",{font:s,size:3,depth:1});n.current.geometry=i}),window.pivotControl=r.current},[]);const t=s=>{console.log("Billboard clicked",s)};be(()=>{});const n=e.useRef(),r=e.useRef();return V.jsxs(V.Fragment,{children:[V.jsx("mesh",{ref:n,children:V.jsx("meshNormalMaterial",{})}),V.jsx(rn,{ref:r,anchor:[0,0,0],children:V.jsx(_e,{fontSize:1,position:[0,5,0],children:"旋转文字"})}),V.jsx(Vt,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:V.jsx(_e,{fontSize:1,position:[0,10,0],onClick:t,children:"面向相机的文字"})})]})};function fn(){return V.jsx(dn,{})}const pn=()=>V.jsx("div",{style:{height:"60vh"},children:V.jsxs(Ot,{dpr:[1,2],gl:{alpha:!1},scene:{background:new zt(16777215)},camera:{position:[0,0,-40],fov:70},children:[V.jsx(jt,{}),V.jsx("axesHelper",{args:[10]}),V.jsx("ambientLight",{intensity:Math.PI}),V.jsx(fn,{})]})}),mn=`import {
  Billboard,
  OrbitControls,
  PivotControls,
  Text,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

const TextD = () => {
  const loader = new FontLoader()

  useEffect(() => {
    loader.load('/font/bold.json', function (font) {
      const geometry = new TextGeometry('Hello!', {
        font: font,
        size: 3,
        depth: 1,
      })
      text.current.geometry = geometry
    })
    // pivotControl.current.matrix.makeRotationZ
    window.pivotControl = pivotControl.current
  }, [])
  const handleBillboardClick = (e) => {
    console.log('Billboard clicked', e)
  }
  useFrame(() => {
    // console.log(pivotControl.current.rotation)
    // text.current.rotation.z += 0.01
  })
  const text = useRef()
  const pivotControl = useRef()

  return (
    <>
      <mesh ref={text}>
        <meshNormalMaterial />
      </mesh>
      <PivotControls ref={pivotControl} anchor={[0, 0, 0]}>
        <Text fontSize={1} position={[0, 5, 0]}>
          旋转文字
        </Text>
      </PivotControls>

      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text fontSize={1} position={[0, 10, 0]} onClick={handleBillboardClick}>
          面向相机的文字
        </Text>
      </Billboard>
    </>
  )
}

function Com() {
  return <TextD></TextD>
}
const Sphereg = () => {
  return (
    <div style={{ height: '60vh' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: false }}
        scene={{ background: new THREE.Color(0xffffff) }}
        camera={{ position: [0, 0, -40], fov: 70 }}
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
`,hn=void 0,gn=void 0,xn={code:mn,title:hn,desc:gn},yn=!0,Pn=Object.freeze(Object.defineProperty({__proto__:null,default:pn,demoMeta:xn,isDemo:yn},Symbol.toStringTag,{value:"Module"}));function ct(o){const{Demo:t}={...at(),...o.components};return t||Mn("Demo"),V.jsx(t,{...Pn})}function wn(o={}){const{wrapper:t}={...at(),...o.components};return t?V.jsx(t,{...o,children:V.jsx(ct,{...o})}):ct(o)}function Mn(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const bn=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"})),gt={};gt.outlineInfo=Ct;gt.main=bn;export{gt as default};
