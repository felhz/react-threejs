import{p as m}from"./_-nQuHDAdD.js";import{r as o,j as e,u as r}from"./ssg-client-CyA5FH7a.js";const p=()=>{const[t,n]=o.useState('{"name": 12,"age": null}'),[l,u]=o.useState(""),c=i=>{n(i.target.value)},d=()=>{u(JSON.stringify(JSON.parse(t)))};return e.jsxs("div",{children:[e.jsx("textarea",{value:t,onChange:c}),e.jsx("br",{}),e.jsx("button",{onClick:d,children:"解析"}),e.jsx("br",{}),e.jsx("textarea",{value:l})]})},f=`import React, { useState } from 'react'

const Page = () => {
  const [value, setValue] = useState('{"name": 12,"age": null}')
  const [result, setResult] = useState('')
  const handleTextarea = (e) => {
    setValue(e.target.value)
  }
  const handleParse = () => {
    setResult(JSON.stringify(JSON.parse(value)))
  }
  return (
    <div>
      <textarea value={value} onChange={handleTextarea}></textarea>
      <br />
      <button onClick={handleParse}>解析</button>
      <br />
      <textarea value={result}></textarea>
    </div>
  )
}
export default Page
`,g=void 0,j=void 0,x={code:f,title:g,desc:j},b=!0,y=Object.freeze(Object.defineProperty({__proto__:null,default:p,demoMeta:x,isDemo:b},Symbol.toStringTag,{value:"Module"})),v=()=>e.jsx("div",{children:"利用map实现深拷贝、解决循环依赖"}),_=`const deepClone = (obj, map = new WeakMap()) => {
  const target = Array.isArray(obj) ? [] : {}
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, target)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key], map)
      } else {
        target[key] = obj[key]
      }
    }
  }
  return target
}

const Page = () => {
  return <div>利用map实现深拷贝、解决循环依赖</div>
}
export default Page
`,h=void 0,S=void 0,P={code:_,title:h,desc:S},M=!0,O=Object.freeze(Object.defineProperty({__proto__:null,default:v,demoMeta:P,isDemo:M},Symbol.toStringTag,{value:"Module"}));function a(t){const{Demo:n}={...r(),...t.components};return n||C("Demo"),e.jsxs(e.Fragment,{children:[e.jsx(n,{...y}),`
`,e.jsx(n,{...O})]})}function k(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}function C(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const D=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=m;s.main=D;export{s as default};
