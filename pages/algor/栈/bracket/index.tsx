import { useEffect, useState } from 'react'

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
