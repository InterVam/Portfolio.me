


import React from 'react'
import { useGLTF } from '@react-three/drei'
import retrocomp from '../assets/retro_computer_setup_free.glb'

export function Computer3D(props) {
  const { nodes, materials } = useGLTF(retrocomp)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(retrocomp)