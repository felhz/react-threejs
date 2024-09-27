import { useEffect, useState } from 'react'

class Sandbox {
  windowSnapshoot = {}
  modifyMap = {}
  constructor() {
    console.log('Sandbox')
  }
  active() {
    for (const key in window) {
      this.windowSnapshoot[key] = window[key]
    }
    Object.keys(this.modifyMap).forEach((i) => {
      window[i] = this.modifyMap[i]
    })
  }
  inActive() {
    for (const key in window) {
      if (window[key] !== this.windowSnapshoot[key]) {
        this.modifyMap[key] = window[key]
        window[key] = this.windowSnapshoot[key]
      }
    }
  }
}
const sandBox = new Sandbox()
const Page = () => {
  const [activeSandbox, setActiveSandbox] = useState(true)

  useEffect(() => {
    activeSandbox ? sandBox.active() : sandBox.inActive()
  }, [activeSandbox])
  return (
    <div>
      是否激活沙箱:
      <input
        type="checkbox"
        checked={activeSandbox}
        onChange={(e) => {
          setActiveSandbox(e.target.checked)
        }}
      />
    </div>
  )
}
export default Page
