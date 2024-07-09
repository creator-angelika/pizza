
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Pizza(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/pizzaanim-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="pizza001" position={[0.18, 2.05, 0.091]} rotation={[0.208, 0.574, -0.114]}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.007']} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials['Material.008']} />
          <mesh name="Cube004_2" geometry={nodes.Cube004_2.geometry} material={materials['Material.009']} />
          <mesh name="Cube004_3" geometry={nodes.Cube004_3.geometry} material={materials['Material.010']} />
          <mesh name="Cube004_4" geometry={nodes.Cube004_4.geometry} material={materials['Material.011']} />
          <mesh name="Cube004_5" geometry={nodes.Cube004_5.geometry} material={materials['Material.012']} />
          <mesh name="Cube004_6" geometry={nodes.Cube004_6.geometry} material={materials['basil.001']} />
        </group>
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.018']} position={[0, -0.507, 0]} />
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['basil.001']} position={[1.478, 1.421, -1.114]} rotation={[0.558, -0.092, 2.692]} />
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['basil.001']} position={[-1.981, 1.269, 1.578]} rotation={[2.344, 0.699, 1.412]} />
        <mesh name="pepperoni" geometry={nodes.pepperoni.geometry} material={materials['Material.009']} position={[-3.073, 1.623, 0.61]} rotation={[0.512, 0.658, -0.744]} />
        <mesh name="pepperoni001" geometry={nodes.pepperoni001.geometry} material={materials['Material.009']} position={[1.862, 0.849, -0.389]} rotation={[-2.459, 0.338, -1.334]} />
        <mesh name="olives" geometry={nodes.olives.geometry} material={materials['Material.011']} position={[-2.374, 2.762, -1.198]} rotation={[0, 0, -0.958]} scale={0.118} />
        <mesh name="olives001" geometry={nodes.olives001.geometry} material={materials['Material.011']} position={[1.809, 0.893, 1.331]} rotation={[-2.335, -0.085, -2.611]} scale={0.118} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pizzaanim-transformed.glb')
