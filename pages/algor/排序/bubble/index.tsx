import React from 'react'

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
