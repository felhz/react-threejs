import{p as s}from"./index_-DQm8rX0p.js";import{j as r,u as l}from"./ssg-client-BRX11VNc.js";const o=e=>{for(let n=0;n<e.length;n++)for(let t=0;t<e.length-1;t++)if(e[t]>e[t+1]){const i=e[t];e[t]=e[t+1],e[t+1]=i}return e},u=()=>{let e=[3,5,1,4,2],n=[...e];return console.log(o(e)),r.jsxs("div",{children:["输入:",n.toString()," ",r.jsx("br",{}),"输出: ",o(e).toString()]})},d=`import React from 'react'

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
const bubblePage = () => {
  let arr = [3, 5, 1, 4, 2]
  let oldArr = [...arr]
  console.log(bubbleSort(arr))
  return (
    <div>
      输入:{oldArr.toString()} <br />
      输出: {bubbleSort(arr).toString()}
    </div>
  )
}

export default bubblePage
`,j=void 0,b=void 0,m={code:d,title:j,desc:b},f=!0,p=Object.freeze(Object.defineProperty({__proto__:null,default:u,demoMeta:m,isDemo:f},Symbol.toStringTag,{value:"Module"}));function a(e){const n={code:"code",pre:"pre",...l(),...e.components},{Demo:t}=n;return t||y("Demo"),r.jsxs(r.Fragment,{children:[r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-js",children:`const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
`})}),`
`,r.jsx(t,{...p})]})}function g(e={}){const{wrapper:n}={...l(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(a,{...e})}):a(e)}function y(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const x=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=s;c.main=x;export{c as default};
