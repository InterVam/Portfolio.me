


// import React from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Computer3D(props) {
//   const { nodes, materials } = useGLTF('src/assets/3D/my_computer.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Object_2.geometry} material={materials.palette} rotation={[-Math.PI / 2, 0, 0]} />
//     </group>
//   )
// }

// useGLTF.preload('/src/assets/3D/my_computer.glb')

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Computer3D(props) {
  const { nodes, materials } = useGLTF('src/assets/3D/retro_computer_setup_free.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('src/assets/3D/retro_computer_setup_free.glb')