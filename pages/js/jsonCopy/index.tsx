import React, { useState } from 'react'

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
