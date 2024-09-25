import { Box, FirstPersonControls, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const FirstPerson = () => {
  return (
    <Canvas style={{ height: '60vh' }}>
      <FirstPersonControls autoForward={false} />
      {/* <Environment preset="city" background={'only'} /> */}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="hotpink" opacity={0.1} />
      </Box>
      <Plane
        args={[4, 4]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="red"
        position={[2, 0, 0]}
      />
      <ambientLight intensity={Math.PI} />
    </Canvas>
  )
}
export default FirstPerson
