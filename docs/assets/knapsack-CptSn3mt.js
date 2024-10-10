import{p as l}from"./index_-uZ6EmBjL.js";import{j as c,u as a}from"./ssg-client-BeeT-Wr-.js";const p=(e,t,s)=>{const i=[];for(let n=0;n<t.length;n++){i[n]=[];for(let o=0;o<=s;o++){if(o===0){i[n][o]=0;continue}e[n]>o?n===0?i[n][o]=0:i[n][o]=i[n-1][o]:n===0?i[n][o]=t[n]:i[n][o]=Math.max(t[n]+i[n-1][o-e[n]],i[n-1][o])}}return i},u=()=>{const e=[1,2,3,2],t=[1e4,3e3,4e3,8e3],s=6,i=p(e,t,s);return c.jsxs("div",{children:[c.jsxs("div",{children:["重量：",e.toString()]}),c.jsxs("div",{children:["价值：",t.toString()]}),c.jsxs("div",{children:["容量：",s]}),c.jsxs("div",{children:["最大价值：",i[t.length-1][s]]})]})},f=`const knapsack = (weight, values, capacity) => {
  const dep = []
  for (let i = 0; i < values.length; i++) {
    dep[i] = []

    for (let j = 0; j <= capacity; j++) {
      // 重量为0是设置默认值
      if (j === 0) {
        dep[i][j] = 0
        continue
      }
      // 如果放不进去
      if (weight[i] > j) {
        if (i === 0) {
          dep[i][j] = 0
        } else {
          dep[i][j] = dep[i - 1][j]
        }
      } else {
        // 可以放进去
        if (i === 0) {
          dep[i][j] = values[i]
        } else {
          dep[i][j] = Math.max(
            values[i] + dep[i - 1][j - weight[i]],
            dep[i - 1][j]
          )
        }
      }
    }
  }
  return dep
}
const Package = () => {
  const weight = [1, 2, 3, 2]
  const values = [10000, 3000, 4000, 8000]
  const capacity = 6
  const dep = knapsack(weight, values, capacity)
  return (
    <div>
      <div>重量：{weight.toString()}</div>
      <div>价值：{values.toString()}</div>
      <div>容量：{capacity}</div>
      <div>最大价值：{dep[values.length - 1][capacity]}</div>
    </div>
  )
}
export default Package
`,j=void 0,v=void 0,g={code:f,title:j,desc:v},m=!0,h=Object.freeze(Object.defineProperty({__proto__:null,default:u,demoMeta:g,isDemo:m},Symbol.toStringTag,{value:"Module"}));function d(e){const{Demo:t}={...a(),...e.components};return t||y("Demo"),c.jsx(t,{...h})}function x(e={}){const{wrapper:t}={...a(),...e.components};return t?c.jsx(t,{...e,children:c.jsx(d,{...e})}):d(e)}function y(e,t){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const _=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),r={};r.outlineInfo=l;r.main=_;export{r as default};
