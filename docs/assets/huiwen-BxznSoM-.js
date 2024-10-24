import{p as f}from"./index_-BG39ATDa.js";import{r as i,j as s,u as a}from"./index-CrfNMau9.js";function p(n,t){const l=n.length,u=t.length,r=Array.from({length:l+1},()=>Array(u+1).fill(0));for(let o=1;o<=l;o++)for(let e=1;e<=u;e++)n[o-1]===t[e-1]?r[o][e]=r[o-1][e-1]+1:r[o][e]=Math.max(r[o-1][e],r[o][e-1]);return r[l][u]}const m=()=>{const[n,t]=i.useState("XTXA"),[l,u]=i.useState("GXTXAYB"),[r,o]=i.useState(0);return i.useEffect(()=>{let e=p(n,l);o(e)},[n,l]),s.jsxs("div",{children:[s.jsxs("div",{children:["字符串1:",s.jsx("input",{value:n,onChange:e=>{t(e.target.value)}})]}),s.jsxs("div",{children:["字符串2:",s.jsx("input",{value:l,onChange:e=>{u(e.target.value)}})]}),s.jsx("div",{children:r})]})},g=`import { useEffect, useState } from 'react'

/**
 * 最长公共子序列（Longest Common Subsequence, LCS）问题是计算机科学中的一个经典问题，
 * 它指的是两个或多个序列之间的最长公共子序列的长度，这个子序列不必是连续的。
 * 在JavaScript中，我们可以通过动态规划的方法来解决这个问题。
 */
function longestCommonSubsequence(str1, str2) {
  // 获取两个字符串的长度
  const len1 = str1.length
  const len2 = str2.length

  // 创建一个二维数组dp，dp[i][j]表示str1的前i个字符和str2的前j个字符的最长公共子序列的长度
  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0))

  // 填充dp数组
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // 如果当前字符相等，则当前位置的最长公共子序列长度等于左上角位置的值加1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 如果当前字符不相等，则当前位置的最长公共子序列长度等于上方和左方位置的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // dp[len1][len2]就是两个字符串的最长公共子序列的长度
  return dp[len1][len2]
}

// 示例

const Subsequence = () => {
  const [str1, setStr1] = useState('XTXA')
  const [str2, setStr2] = useState('GXTXAYB')
  const [length, setLength] = useState(0)
  useEffect(() => {
    let _length = longestCommonSubsequence(str1, str2)
    setLength(_length)
  }, [str1, str2])

  return (
    <div>
      <div>
        字符串1:
        <input
          value={str1}
          onChange={(e) => {
            setStr1(e.target.value)
          }}
        ></input>
      </div>
      <div>
        字符串2:
        <input
          value={str2}
          onChange={(e) => {
            setStr2(e.target.value)
          }}
        ></input>
      </div>
      <div>{length}</div>
    </div>
  )
}
export default Subsequence
`,h=void 0,j=void 0,S={code:g,title:h,desc:j},v=!0,x=Object.freeze(Object.defineProperty({__proto__:null,default:m,demoMeta:S,isDemo:v},Symbol.toStringTag,{value:"Module"}));function c(n){const{Demo:t}={...a(),...n.components};return t||b("Demo"),s.jsx(t,{...x})}function _(n={}){const{wrapper:t}={...a(),...n.components};return t?s.jsx(t,{...n,children:s.jsx(c,{...n})}):c(n)}function b(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const C=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),d={};d.outlineInfo=f;d.main=C;export{d as default};
