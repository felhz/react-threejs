import{p as r}from"./_-C3c3qQ6q.js";import{r as i,j as e,u as d}from"./ssg-client-CTSCcih9.js";class w{constructor(){this.windowSnapshoot={},this.modifyMap={},console.log("Sandbox")}active(){for(const n in window)this.windowSnapshoot[n]=window[n];Object.keys(this.modifyMap).forEach(n=>{window[n]=this.modifyMap[n]})}inActive(){for(const n in window)window[n]!==this.windowSnapshoot[n]&&(this.modifyMap[n]=window[n],window[n]=this.windowSnapshoot[n])}}const s=new w,f=()=>{const[o,n]=i.useState(!0);return i.useEffect(()=>{o?s.active():s.inActive()},[o]),e.jsxs("div",{children:["是否激活沙箱:",e.jsx("input",{type:"checkbox",checked:o,onChange:t=>{n(t.target.checked)}})]})},h=`import { useEffect, useState } from 'react'

class Sandbox {
  windowSnapshoot = {}
  modifyMap = {}
  constructor() {
    console.log('Sandbox')
  }
  active() {
    for (const key in window) {
      this.windowSnapshoot[key] = window[key]
    }
    Object.keys(this.modifyMap).forEach((i) => {
      window[i] = this.modifyMap[i]
    })
  }
  inActive() {
    for (const key in window) {
      if (window[key] !== this.windowSnapshoot[key]) {
        this.modifyMap[key] = window[key]
        window[key] = this.windowSnapshoot[key]
      }
    }
  }
}
const sandBox = new Sandbox()
const Page = () => {
  const [activeSandbox, setActiveSandbox] = useState(true)

  useEffect(() => {
    activeSandbox ? sandBox.active() : sandBox.inActive()
  }, [activeSandbox])
  return (
    <div>
      是否激活沙箱:
      <input
        type="checkbox"
        checked={activeSandbox}
        onChange={(e) => {
          setActiveSandbox(e.target.checked)
        }}
      />
    </div>
  )
}
export default Page
`,u=void 0,p=void 0,m={code:h,title:u,desc:p},x=!0,y=Object.freeze(Object.defineProperty({__proto__:null,default:f,demoMeta:m,isDemo:x},Symbol.toStringTag,{value:"Module"}));function c(o){const n={h2:"h2",...d(),...o.components},{Demo:t}=n;return t||S("Demo"),e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"沙箱简易版",children:"沙箱简易版"}),`
`,e.jsx(t,{...y})]})}function l(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}function S(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}const b=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),a={};a.outlineInfo=r;a.main=b;export{a as default};
