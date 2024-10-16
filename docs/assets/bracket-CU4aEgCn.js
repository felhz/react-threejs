import{p as l}from"./index_-FU1-d8Ot.js";import{r as a,j as o,u as i}from"./ssg-client-Cr4lShia.js";function d(e){if(!e)return 0;let t=[-1],s=0;for(let n=0;n<e.length;n++)e[n]==="("?t.push(n):(t.pop(),t.length===0?t.push(n):s=Math.max(s,n-t.at(-1)));return s}const f=()=>{const[e,t]=a.useState("()"),[s,n]=a.useState(0);return a.useEffect(()=>{let r=d(e);n(r)},[e]),o.jsxs("div",{children:[o.jsxs("div",{children:["字符串1:",o.jsx("input",{value:e,onChange:r=>{t(r.target.value)}})]}),o.jsx("div",{children:s})]})},h=`import { useEffect, useState } from 'react'

function validBracket(str) {
  if (!str) return 0
  let stack = [-1]
  let maxLength = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        maxLength = Math.max(maxLength, i - stack.at(-1))
      }
    }
  }
  return maxLength
}

// 示例

const Subsequence = () => {
  const [bracket, setBracket] = useState('()')

  const [length, setLength] = useState(0)
  useEffect(() => {
    let _length = validBracket(bracket)
    setLength(_length)
  }, [bracket])

  return (
    <div>
      <div>
        字符串1:
        <input
          value={bracket}
          onChange={(e) => {
            setBracket(e.target.value)
          }}
        ></input>
      </div>
      <div>{length}</div>
    </div>
  )
}
export default Subsequence
`,m=void 0,g=void 0,p={code:h,title:m,desc:g},x=!0,k=Object.freeze(Object.defineProperty({__proto__:null,default:f,demoMeta:p,isDemo:x},Symbol.toStringTag,{value:"Module"}));function c(e){const{Demo:t}={...i(),...e.components};return t||_("Demo"),o.jsx(t,{...k})}function v(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(c,{...e})}):c(e)}function _(e,t){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),u={};u.outlineInfo=l;u.main=b;export{u as default};
