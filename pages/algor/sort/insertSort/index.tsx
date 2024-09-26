import React from 'react'

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
  console.log(inertSort(arr))
  return (
    <div>
      输入:{arr.toString()} <br />
      输出: {inertSort(arr).toString()}
    </div>
  )
}

export default inertSortPage
