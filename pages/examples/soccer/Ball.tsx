// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'

interface IProps {}
const Ball = () => {
  return (
    <>
      <Entity
        primitive="a-sphere"
        ball-manager
        id="ball"
        radius="0.4"
        position="0 5 -5"
        color="#fff"
        scale="0.4 0.4 0.4"
        // material="shader: flat; color: red"
        // modify-ball-model
        gltf-model="#ball-model"
        kickable-ball="distance: 5; amount: 20"
        // material="wireframe: true; emissive: #fff; wireframeLinewidth: 2"
        dynamic-body="mass: 5; aw: 0.001"
      >
        <a-light
          type="point"
          color="blue"
          intensity="1"
          penumbra="0"
          position="0 0 0"
          distance="4"
          zone-indicator="distance: 4"
        ></a-light>
      </Entity>
    </>
  )
}

export default Ball
