import{p as i}from"./_-BbONP_Ue.js";import{u as c,j as e}from"./index-B8vB_q8q.js";function s(r){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"搜索当前目录文件名包含指定字符串的文件",children:"搜索当前目录文件名包含指定字符串的文件"}),`
`,e.jsx(n.p,{children:"**表示包含 name 的"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:` find ./ -name "*name*"
`})}),`
`,e.jsx(n.h2,{id:"grep",children:"grep"}),`
`,e.jsx(n.h3,{id:"查找匹配-scripts-并显示匹配和下边的-10-行",children:"查找匹配 scripts 并显示匹配和下边的 10 行"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -A 10 scripts package.json
`})}),`
`,e.jsx(n.h3,{id:"递归查找所有文件匹配-scripts-并显示行号",children:"递归查找./所有文件匹配 scripts 并显示行号"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -rn scripts ./
`})}),`
`,e.jsx(n.h3,{id:"搜索当前目录下所有文件中包含指定字符串scripts的行并显示上下两行",children:"搜索当前目录下所有文件中包含指定字符串（scripts）的行，并显示上下两行"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`grep -rn -C 2 scripts
`})})]})}function o(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),t={};t.outlineInfo=i;t.main=d;export{t as default};
