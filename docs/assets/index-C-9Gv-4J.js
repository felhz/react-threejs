import{_ as f}from"./OrbitControls-BaRFn3-G.js";import{r as e}from"./ssg-client-Dg7YBUPF.js";function s(a,r){const o=a+"Geometry";return e.forwardRef(({args:n,children:c,...u},m)=>{const t=e.useRef(null);return e.useImperativeHandle(m,()=>t.current),e.useLayoutEffect(()=>void(r==null?void 0:r(t.current))),e.createElement("mesh",f({ref:t},u),e.createElement(o,{attach:"geometry",args:n}),c)})}const i=s("sphere"),p=s("extrude"),E="/react-threejs";export{p as E,i as S,E as s};
