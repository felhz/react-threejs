import{p as a}from"./index_-nQuHDAdD.js";import{j as t,u as c}from"./ssg-client-QCL6abap.js";const i=e=>{for(let n=1;n<e.length;n++){const o=e[n];let r=n-1;for(;r>=0&&e[r]>o;)e[r+1]=e[r],r--;e[r+1]=o}return e},d=()=>{const e=[3,5,1,4,2];let n=[...e];return console.log(i(e)),t.jsxs("div",{children:["输入:",n.toString()," ",t.jsx("br",{}),"输出: ",i(e).toString()]})},m=`import React from 'react'

const inertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = element
  }
  return arr
}
const inertSortPage = () => {
  const arr = [3, 5, 1, 4, 2]
  let oldArr = [...arr]
  console.log(inertSort(arr))
  return (
    <div>
      输入:{oldArr.toString()} <br />
      输出: {inertSort(arr).toString()}
    </div>
  )
}

export default inertSortPage
`,u=void 0,j=void 0,f={code:m,title:u,desc:j},g=!0,p=Object.freeze(Object.defineProperty({__proto__:null,default:d,demoMeta:f,isDemo:g},Symbol.toStringTag,{value:"Module"}));function l(e){const n={code:"code",pre:"pre",...c(),...e.components},{Demo:o}=n;return o||x("Demo"),t.jsxs(t.Fragment,{children:[t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-js",children:`const inertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = element
  }
  return arr
}
`})}),`
`,t.jsx(o,{...p})]})}function S(e={}){const{wrapper:n}={...c(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(l,{...e})}):l(e)}function x(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const _=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),s={};s.outlineInfo=a;s.main=_;export{s as default};
