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
        // src="#skyTexture"
      />
      <a-light color="white" position="0.2 12 0.4" type="point"></a-light>
      <Entity
        primitive="a-plane"
        color="white"
        dynamic-body="mass: 0"
        position="0 0.1 0"
        rotation="-90 0 0"
        height="100"
        width="100"
        material="src:#ground; repeat: 20 20; metalness: 0; normalMap:#grass-normal; normalTextureRepeat: 20 20; roughness:1"
      />
    </>
  )
}

export default Env
