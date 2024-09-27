const deepClone = (obj, map = new WeakMap()) => {
  const target = Array.isArray(obj) ? [] : {}
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, target)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key], map)
      } else {
        target[key] = obj[key]
      }
    }
  }
  return target
}

const Page = () => {
  return <div>利用map实现深拷贝、解决循环依赖</div>
}
export default Page
