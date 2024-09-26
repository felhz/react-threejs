const knapsack = (weight, values, capacity) => {
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
