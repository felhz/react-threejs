import { staticPath } from '@/utils'
import {
  Extrude,
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
  Sphere,
  Text,
} from '@react-three/drei'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import * as turf from '@turf/turf'
import * as d3 from 'd3'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const projection = d3
  .geoMercator()
  .center([104.0, 37.5])
  .scale(80)
  .translate([0, 0])

const FlyLine = ({ start, end }) => {
  const [curvePoints, setCurvePoints] = useState([])
  const pointRef = useRef()
  useEffect(() => {
    const generateCurve = (start, end) => {
      let midpoint = turf.midpoint(turf.point(start), turf.point(end))
      // 生成线
      const startP = projection(start)

      const centerP = projection(midpoint.geometry.coordinates)
      const endP = projection(end)

      const startVector3 = new THREE.Vector3(startP[0], -startP[1], 0)
      const centerVector3 = new THREE.Vector3(centerP[0], -centerP[1], 4)
      const endVector3 = new THREE.Vector3(endP[0], -endP[1], 0)
      const curve3 = new THREE.CatmullRomCurve3(
        [startVector3, centerVector3, endVector3],
        false,
        'catmullrom',
        0.5
      )
      return curve3.getPoints(50)
    }
    setCurvePoints(generateCurve(start, end))
  }, [])
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()
    const t = (elapsed / 4) % 1
    const point = curvePoints[Math.floor(t * curvePoints.length)]
    if (pointRef.current) {
      pointRef.current.position.copy(point)
    }
  })
  if (!curvePoints.length) return null
  return (
    <>
      <Line points={curvePoints} color="green" opacity={0.8} />
      <Sphere ref={pointRef} material-color="red" args={[0.4]} />
    </>
  )
}

function Com() {
  const { scene } = useThree()
  const data = useLoader(THREE.FileLoader, staticPath + '/geo/china.json')
  const [fonts, setFonts] = useState([])

  const [curvePoints, setCurvePoints] = useState([
    [
      [116.419951, 40.18994],
      [116.419951, 41.56],
    ],
    [
      [116.419951, 40.18994],
      [116.419951, 34.56],
    ],
    [
      [116.419951, 40.18994],
      [100.2, 40.18994],
    ],
    [
      [116.419951, 40.18994],
      [120.2, 40.18994],
    ],
    [
      [116.419951, 40.18994],
      [116.419951, 30.18994],
    ],
  ])
  useEffect(() => {
    let _data = JSON.parse(data)
    const fontsArr = []
    const generateGeometry = (jsondata) => {
      // 墨卡托投影转换
      jsondata.features.pop()
      jsondata.features.forEach((elem) => {
        const name = elem.properties.name
        const center = projection(
          elem.properties.centroid || elem.properties.center
        )
        // 每个的 坐标 数组
        const coordinates = elem.geometry.coordinates
        const shapes = []
        // 循环坐标数组
        coordinates.forEach((multiPolygon, i) => {
          multiPolygon.forEach((polygon) => {
            if (elem.geometry.type == 'Polygon') {
              const [x, y] = projection(polygon)
              let point = new THREE.Vector2(x, -y)
              shapes.push(point)
              return
            }
            if (i > 0) return
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i])
              let point = new THREE.Vector2(x, -y)
              shapes.push(point)
            }
          })
        })
        fontsArr.push({
          name,
          position: center,
          shapes,
        })
      })
    }
    generateGeometry(_data)
    setFonts(fontsArr)
  }, [])

  const [checked, setChecked] = useState(false)
  const generateTip = (i, item) => {
    const div = document.createElement('div')
    div.innerHTML = item.name
    div.style.position = 'absolute'
    div.style.top = i.clientY + 'px'
    div.style.left = i.clientX + 'px'
    window.document.body.append(div)
    setTimeout(() => {
      div.remove()
    }, 1000)
  }

  return (
    <group position={[-15, 0, 0]}>
      {curvePoints.map((item, i) => (
        <FlyLine start={item[0]} end={item[1]} />
      ))}
      {fonts.map((item, i) => {
        let color = new THREE.Color(255 * 255 + i * 10)
        if (i === checked) {
          color = 0xffff00
        }
        if (item.name === '北京市') {
          color = new THREE.Color(0xff0000)
          color.setRGB(0.5, 0, 0)
        }
        return (
          <mesh
            key={item.name}
            onClick={(e) => {
              generateTip(e, item)
            }}
            onPointerOver={(i) => {
              setChecked(i)
            }}
          >
            <Line points={item.shapes} color="red" />
            <Extrude
              position={[0, 0, -1.2]}
              material-color={color}
              args={[new THREE.Shape(item.shapes)]}
            ></Extrude>

            <Text
              position={[item.position[0], -item.position[1], 0.1]}
              key={i}
              scale={0.4}
              color="red"
            >
              {item.name}
            </Text>
          </mesh>
        )
      })}
    </group>
  )
}

const Geo = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ height: '60vh' }}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, -50, 50], fov: 45 }}
    >
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  )
}
export default Geo
