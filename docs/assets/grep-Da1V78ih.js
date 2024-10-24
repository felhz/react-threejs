import{p as i}from"./grep_-BmQSd4nB.js";import{u as t,j as e}from"./index-CrfNMau9.js";function s(r){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"grep",children:"grep"}),`
`,e.jsx(n.h3,{id:"查找匹配-scripts-并显示匹配和下边的-10-行",children:"查找匹配 scripts 并显示匹配和下边的 10 行"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -A 10 scripts package.json
`})}),`
`,e.jsx(n.h3,{id:"递归查找所有文件匹配-scripts-并显示行号",children:"递归查找./所有文件匹配 scripts 并显示行号"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -rn scripts ./
`})}),`
`,e.jsx(n.h3,{id:"搜索当前目录下所有文件中包含指定字符串scripts的行并显示上下两行",children:"搜索当前目录下所有文件中包含指定字符串（scripts）的行，并显示上下两行"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -rn -C 2 scripts
`})})]})}function o(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),c={};c.outlineInfo=i;c.main=p;export{c as default};
