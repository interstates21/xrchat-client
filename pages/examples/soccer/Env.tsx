// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'

interface IProps {}
const Env = () => {
  return (
    <>
      <Entity
        primitive="a-sky"
        color="#101"
        src="#skyTexture"
      />
      <a-light color="white" position="0.2 12 0.4" type="point"></a-light>
      <Entity
        // primitive="a-sphere"
        id="field"
        radius="0.5"
        position="0 0 0"
        color="#fff"
        scale="4 4 4"
        // material="shader: flat; color: red"
        // modify-ball-model
        gltf-model="#field"
        // kickable-ball="distance: 5; amount: 20"
        // material="wireframe: true; emissive: #fff; wireframeLinewidth: 2"
        // dynamic-body="mass: 0; aw: 0.001"
      ></Entity>
      <Entity
        primitive="a-plane"
        color="white"
        dynamic-body="mass: 0"
        position="0 0.2 0"
        rotation="-90 0 0"
        height="200"
        width="200"
        // material="src:#ground; repeat: 20 20; metalness: 0; normalMap:#grass-normal; normalTextureRepeat: 20 20; roughness:1"
      />
    </>
  )
}

export default Env
