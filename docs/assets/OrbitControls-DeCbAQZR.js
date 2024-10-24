import{R as Ke,j as Ve,g as We,V as E,ac as z,ad as Y,Q as we,P as Q,O as $,e as je,c as y,u as C,a as Be,_ as Ge}from"./react-three-fiber.esm-mK3N1tVz.js";import{r as H}from"./index-CrfNMau9.js";var qe=Object.defineProperty,Qe=(b,h,f)=>h in b?qe(b,h,{enumerable:!0,configurable:!0,writable:!0,value:f}):b[h]=f,n=(b,h,f)=>(Qe(b,typeof h!="symbol"?h+"":h,f),f);const J=new Ke,Ae=new Ve,$e=Math.cos(70*(Math.PI/180)),ve=(b,h)=>(b%h+h)%h;let Je=class extends We{constructor(h,f){super(),n(this,"object"),n(this,"domElement"),n(this,"enabled",!0),n(this,"target",new E),n(this,"minDistance",0),n(this,"maxDistance",1/0),n(this,"minZoom",0),n(this,"maxZoom",1/0),n(this,"minPolarAngle",0),n(this,"maxPolarAngle",Math.PI),n(this,"minAzimuthAngle",-1/0),n(this,"maxAzimuthAngle",1/0),n(this,"enableDamping",!1),n(this,"dampingFactor",.05),n(this,"enableZoom",!0),n(this,"zoomSpeed",1),n(this,"enableRotate",!0),n(this,"rotateSpeed",1),n(this,"enablePan",!0),n(this,"panSpeed",1),n(this,"screenSpacePanning",!0),n(this,"keyPanSpeed",7),n(this,"zoomToCursor",!1),n(this,"autoRotate",!1),n(this,"autoRotateSpeed",2),n(this,"reverseOrbit",!1),n(this,"reverseHorizontalOrbit",!1),n(this,"reverseVerticalOrbit",!1),n(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),n(this,"mouseButtons",{LEFT:z.ROTATE,MIDDLE:z.DOLLY,RIGHT:z.PAN}),n(this,"touches",{ONE:Y.ROTATE,TWO:Y.DOLLY_PAN}),n(this,"target0"),n(this,"position0"),n(this,"zoom0"),n(this,"_domElementKeyEvents",null),n(this,"getPolarAngle"),n(this,"getAzimuthalAngle"),n(this,"setPolarAngle"),n(this,"setAzimuthalAngle"),n(this,"getDistance"),n(this,"listenToKeyEvents"),n(this,"stopListenToKeyEvents"),n(this,"saveState"),n(this,"reset"),n(this,"update"),n(this,"connect"),n(this,"dispose"),this.object=h,this.domElement=f,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=t=>{let o=ve(t,2*Math.PI),a=u.phi;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),d.phi=o-a,e.update()},this.setAzimuthalAngle=t=>{let o=ve(t,2*Math.PI),a=u.theta;a<0&&(a+=2*Math.PI),o<0&&(o+=2*Math.PI);let s=Math.abs(o-a);2*Math.PI-s<s&&(o<a?o+=2*Math.PI:a+=2*Math.PI),d.theta=o-a,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",ae),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(V),e.update(),c=i.NONE},this.update=(()=>{const t=new E,o=new E(0,1,0),a=new we().setFromUnitVectors(h.up,o),s=a.clone().invert(),m=new E,L=new we,_=2*Math.PI;return function(){const Me=e.object.position;a.setFromUnitVectors(h.up,o),s.copy(a).invert(),t.copy(Me).sub(e.target),t.applyQuaternion(a),u.setFromVector3(t),e.autoRotate&&c===i.NONE&&ee(De()),e.enableDamping?(u.theta+=d.theta*e.dampingFactor,u.phi+=d.phi*e.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let x=e.minAzimuthAngle,I=e.maxAzimuthAngle;isFinite(x)&&isFinite(I)&&(x<-Math.PI?x+=_:x>Math.PI&&(x-=_),I<-Math.PI?I+=_:I>Math.PI&&(I-=_),x<=I?u.theta=Math.max(x,Math.min(I,u.theta)):u.theta=u.theta>(x+I)/2?Math.max(x,u.theta):Math.min(I,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(R,e.dampingFactor):e.target.add(R),e.zoomToCursor&&T||e.object.isOrthographicCamera?u.radius=oe(u.radius):u.radius=oe(u.radius*P),t.setFromSpherical(u),t.applyQuaternion(s),Me.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(d.theta*=1-e.dampingFactor,d.phi*=1-e.dampingFactor,R.multiplyScalar(1-e.dampingFactor)):(d.set(0,0,0),R.set(0,0,0));let Z=!1;if(e.zoomToCursor&&T){let X=null;if(e.object instanceof Q&&e.object.isPerspectiveCamera){const K=t.length();X=oe(K*P);const q=K-X;e.object.position.addScaledVector(U,q),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const K=new E(g.x,g.y,0);K.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),e.object.updateProjectionMatrix(),Z=!0;const q=new E(g.x,g.y,0);q.unproject(e.object),e.object.position.sub(q).add(K),e.object.updateMatrixWorld(),X=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;X!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(X).add(e.object.position):(J.origin.copy(e.object.position),J.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(J.direction))<$e?h.lookAt(e.target):(Ae.setFromNormalAndCoplanarPoint(e.object.up,e.target),J.intersectPlane(Ae,e.target))))}else e.object instanceof $&&e.object.isOrthographicCamera&&(Z=P!==1,Z&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),e.object.updateProjectionMatrix()));return P=1,T=!1,Z||m.distanceToSquared(e.object.position)>W||8*(1-L.dot(e.object.quaternion))>W?(e.dispatchEvent(V),m.copy(e.object.position),L.copy(e.object.quaternion),Z=!1,!0):!1}})(),this.connect=t=>{e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Oe),e.domElement.addEventListener("pointerdown",ye),e.domElement.addEventListener("pointercancel",F),e.domElement.addEventListener("wheel",Pe)},this.dispose=()=>{var t,o,a,s,m,L;e.domElement&&(e.domElement.style.touchAction="auto"),(t=e.domElement)==null||t.removeEventListener("contextmenu",Oe),(o=e.domElement)==null||o.removeEventListener("pointerdown",ye),(a=e.domElement)==null||a.removeEventListener("pointercancel",F),(s=e.domElement)==null||s.removeEventListener("wheel",Pe),(m=e.domElement)==null||m.ownerDocument.removeEventListener("pointermove",ne),(L=e.domElement)==null||L.ownerDocument.removeEventListener("pointerup",F),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ae)};const e=this,V={type:"change"},N={type:"start"},S={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const W=1e-6,u=new je,d=new je;let P=1;const R=new E,M=new y,w=new y,j=new y,A=new y,v=new y,D=new y,O=new y,p=new y,l=new y,U=new E,g=new y;let T=!1;const r=[],B={};function De(){return 2*Math.PI/60/60*e.autoRotateSpeed}function G(){return Math.pow(.95,e.zoomSpeed)}function ee(t){e.reverseOrbit||e.reverseHorizontalOrbit?d.theta+=t:d.theta-=t}function se(t){e.reverseOrbit||e.reverseVerticalOrbit?d.phi+=t:d.phi-=t}const re=(()=>{const t=new E;return function(a,s){t.setFromMatrixColumn(s,0),t.multiplyScalar(-a),R.add(t)}})(),ce=(()=>{const t=new E;return function(a,s){e.screenSpacePanning===!0?t.setFromMatrixColumn(s,1):(t.setFromMatrixColumn(s,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(a),R.add(t)}})(),k=(()=>{const t=new E;return function(a,s){const m=e.domElement;if(m&&e.object instanceof Q&&e.object.isPerspectiveCamera){const L=e.object.position;t.copy(L).sub(e.target);let _=t.length();_*=Math.tan(e.object.fov/2*Math.PI/180),re(2*a*_/m.clientHeight,e.object.matrix),ce(2*s*_/m.clientHeight,e.object.matrix)}else m&&e.object instanceof $&&e.object.isOrthographicCamera?(re(a*(e.object.right-e.object.left)/e.object.zoom/m.clientWidth,e.object.matrix),ce(s*(e.object.top-e.object.bottom)/e.object.zoom/m.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function te(t){e.object instanceof Q&&e.object.isPerspectiveCamera||e.object instanceof $&&e.object.isOrthographicCamera?P/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function le(t){e.object instanceof Q&&e.object.isPerspectiveCamera||e.object instanceof $&&e.object.isOrthographicCamera?P*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ue(t){if(!e.zoomToCursor||!e.domElement)return;T=!0;const o=e.domElement.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top,m=o.width,L=o.height;g.x=a/m*2-1,g.y=-(s/L)*2+1,U.set(g.x,g.y,1).unproject(e.object).sub(e.object.position).normalize()}function oe(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function pe(t){M.set(t.clientX,t.clientY)}function Le(t){ue(t),O.set(t.clientX,t.clientY)}function he(t){A.set(t.clientX,t.clientY)}function xe(t){w.set(t.clientX,t.clientY),j.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(ee(2*Math.PI*j.x/o.clientHeight),se(2*Math.PI*j.y/o.clientHeight)),M.copy(w),e.update()}function Ie(t){p.set(t.clientX,t.clientY),l.subVectors(p,O),l.y>0?te(G()):l.y<0&&le(G()),O.copy(p),e.update()}function Ne(t){v.set(t.clientX,t.clientY),D.subVectors(v,A).multiplyScalar(e.panSpeed),k(D.x,D.y),A.copy(v),e.update()}function Re(t){ue(t),t.deltaY<0?le(G()):t.deltaY>0&&te(G()),e.update()}function _e(t){let o=!1;switch(t.code){case e.keys.UP:k(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:k(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:k(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:k(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function me(){if(r.length==1)M.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);M.set(t,o)}}function de(){if(r.length==1)A.set(r[0].pageX,r[0].pageY);else{const t=.5*(r[0].pageX+r[1].pageX),o=.5*(r[0].pageY+r[1].pageY);A.set(t,o)}}function fe(){const t=r[0].pageX-r[1].pageX,o=r[0].pageY-r[1].pageY,a=Math.sqrt(t*t+o*o);O.set(0,a)}function Ce(){e.enableZoom&&fe(),e.enablePan&&de()}function Se(){e.enableZoom&&fe(),e.enableRotate&&me()}function be(t){if(r.length==1)w.set(t.pageX,t.pageY);else{const a=ie(t),s=.5*(t.pageX+a.x),m=.5*(t.pageY+a.y);w.set(s,m)}j.subVectors(w,M).multiplyScalar(e.rotateSpeed);const o=e.domElement;o&&(ee(2*Math.PI*j.x/o.clientHeight),se(2*Math.PI*j.y/o.clientHeight)),M.copy(w)}function ge(t){if(r.length==1)v.set(t.pageX,t.pageY);else{const o=ie(t),a=.5*(t.pageX+o.x),s=.5*(t.pageY+o.y);v.set(a,s)}D.subVectors(v,A).multiplyScalar(e.panSpeed),k(D.x,D.y),A.copy(v)}function Ee(t){const o=ie(t),a=t.pageX-o.x,s=t.pageY-o.y,m=Math.sqrt(a*a+s*s);p.set(0,m),l.set(0,Math.pow(p.y/O.y,e.zoomSpeed)),te(l.y),O.copy(p)}function ke(t){e.enableZoom&&Ee(t),e.enablePan&&ge(t)}function ze(t){e.enableZoom&&Ee(t),e.enableRotate&&be(t)}function ye(t){var o,a;e.enabled!==!1&&(r.length===0&&((o=e.domElement)==null||o.ownerDocument.addEventListener("pointermove",ne),(a=e.domElement)==null||a.ownerDocument.addEventListener("pointerup",F)),Ze(t),t.pointerType==="touch"?Ue(t):Ye(t))}function ne(t){e.enabled!==!1&&(t.pointerType==="touch"?Fe(t):He(t))}function F(t){var o,a,s;Xe(t),r.length===0&&((o=e.domElement)==null||o.releasePointerCapture(t.pointerId),(a=e.domElement)==null||a.ownerDocument.removeEventListener("pointermove",ne),(s=e.domElement)==null||s.ownerDocument.removeEventListener("pointerup",F)),e.dispatchEvent(S),c=i.NONE}function Ye(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case z.DOLLY:if(e.enableZoom===!1)return;Le(t),c=i.DOLLY;break;case z.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;he(t),c=i.PAN}else{if(e.enableRotate===!1)return;pe(t),c=i.ROTATE}break;case z.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;pe(t),c=i.ROTATE}else{if(e.enablePan===!1)return;he(t),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(N)}function He(t){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;xe(t);break;case i.DOLLY:if(e.enableZoom===!1)return;Ie(t);break;case i.PAN:if(e.enablePan===!1)return;Ne(t);break}}function Pe(t){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(t.preventDefault(),e.dispatchEvent(N),Re(t),e.dispatchEvent(S))}function ae(t){e.enabled===!1||e.enablePan===!1||_e(t)}function Ue(t){switch(Te(t),r.length){case 1:switch(e.touches.ONE){case Y.ROTATE:if(e.enableRotate===!1)return;me(),c=i.TOUCH_ROTATE;break;case Y.PAN:if(e.enablePan===!1)return;de(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case Y.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ce(),c=i.TOUCH_DOLLY_PAN;break;case Y.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Se(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(N)}function Fe(t){switch(Te(t),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;be(t),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;ge(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ke(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ze(t),e.update();break;default:c=i.NONE}}function Oe(t){e.enabled!==!1&&t.preventDefault()}function Ze(t){r.push(t)}function Xe(t){delete B[t.pointerId];for(let o=0;o<r.length;o++)if(r[o].pointerId==t.pointerId){r.splice(o,1);return}}function Te(t){let o=B[t.pointerId];o===void 0&&(o=new y,B[t.pointerId]=o),o.set(t.pageX,t.pageY)}function ie(t){const o=t.pointerId===r[0].pointerId?r[1]:r[0];return B[o.pointerId]}f!==void 0&&this.connect(f),this.update()}};const at=H.forwardRef(({makeDefault:b,camera:h,regress:f,domElement:e,enableDamping:V=!0,keyEvents:N=!1,onChange:S,onStart:i,onEnd:c,...W},u)=>{const d=C(l=>l.invalidate),P=C(l=>l.camera),R=C(l=>l.gl),M=C(l=>l.events),w=C(l=>l.setEvents),j=C(l=>l.set),A=C(l=>l.get),v=C(l=>l.performance),D=h||P,O=e||M.connected||R.domElement,p=H.useMemo(()=>new Je(D),[D]);return Be(()=>{p.enabled&&p.update()},-1),H.useEffect(()=>(N&&p.connect(N===!0?O:N),p.connect(O),()=>void p.dispose()),[N,O,f,p,d]),H.useEffect(()=>{const l=T=>{d(),f&&v.regress(),S&&S(T)},U=T=>{i&&i(T)},g=T=>{c&&c(T)};return p.addEventListener("change",l),p.addEventListener("start",U),p.addEventListener("end",g),()=>{p.removeEventListener("start",U),p.removeEventListener("end",g),p.removeEventListener("change",l)}},[S,i,c,p,d,w]),H.useEffect(()=>{if(b){const l=A().controls;return j({controls:p}),()=>j({controls:l})}},[b,p]),H.createElement("primitive",Ge({ref:u,object:p,enableDamping:V},W))});export{at as O};
