import{u as p,H as C,J as b,K as R,N as x,X as T,a as F,_ as v,m as w,o as L}from"./react-three-fiber.esm-mK3N1tVz.js";import{r as e}from"./index-CrfNMau9.js";function S(n,u,c){const t=p(o=>o.size),s=p(o=>o.viewport),a=typeof n=="number"?n:t.width*s.dpr,l=typeof u=="number"?u:t.height*s.dpr,g=(typeof n=="number"?c:n)||{},{samples:d=0,depth:m,...i}=g,f=e.useMemo(()=>{const o=new C(a,l,{minFilter:b,magFilter:b,type:R,...i});return m&&(o.depthTexture=new x(a,l,T)),o.samples=d,o},[]);return e.useLayoutEffect(()=>{f.setSize(a,l),d&&(f.samples=d)},[d,f,a,l]),e.useEffect(()=>()=>f.dispose(),[]),f}const H=n=>typeof n=="function",I=e.forwardRef(({envMap:n,resolution:u=256,frames:c=1/0,children:t,makeDefault:s,...a},l)=>{const g=p(({set:r})=>r),d=p(({camera:r})=>r),m=p(({size:r})=>r),i=e.useRef(null);e.useImperativeHandle(l,()=>i.current,[]);const f=e.useRef(null),o=S(u);e.useLayoutEffect(()=>{a.manual||i.current.updateProjectionMatrix()},[m,a]),e.useLayoutEffect(()=>{i.current.updateProjectionMatrix()}),e.useLayoutEffect(()=>{if(s){const r=d;return g(()=>({camera:i.current})),()=>g(()=>({camera:r}))}},[i,s,g]);let E=0,y=null;const h=H(t);return F(r=>{h&&(c===1/0||E<c)&&(f.current.visible=!1,r.gl.setRenderTarget(o),y=r.scene.background,n&&(r.scene.background=n),r.gl.render(r.scene,i.current),r.scene.background=y,r.gl.setRenderTarget(null),f.current.visible=!0,E++)}),e.createElement(e.Fragment,null,e.createElement("orthographicCamera",v({left:m.width/-2,right:m.width/2,top:m.height/2,bottom:m.height/-2,ref:i},a),!h&&t),e.createElement("group",{ref:f},h&&t(o.texture)))});function _({defaultScene:n,defaultCamera:u,renderPriority:c=1}){const{gl:t,scene:s,camera:a}=p();let l;return F(()=>{l=t.autoClear,c===1&&(t.autoClear=!0,t.render(n,u)),t.autoClear=!1,t.clearDepth(),t.render(s,a),t.autoClear=l},c),e.createElement("group",{onPointerOver:()=>null})}function M({children:n,renderPriority:u=1}){const{scene:c,camera:t}=p(),[s]=e.useState(()=>new w);return e.createElement(e.Fragment,null,L(e.createElement(e.Fragment,null,n,e.createElement(_,{defaultScene:c,defaultCamera:t,renderPriority:u})),s,{events:{priority:u+1}}))}export{M as H,I as O,S as u};
