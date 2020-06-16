// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'

interface IProps {}
const Ball = () => {
  return (
    <>
      <a-box
        color="blue"
        depth="5"
        height="13"
        width="15"
        // static-body
        dynamic-body="mass: 0"
        gate-field-listener
        position="0 2 -89"
        // text="value: This text will be 4 units wide."
        material="opacity: 0.3; transparent: true"
      ></a-box>
      <a-box
        color="blue"
        depth="5"
        height="13"
        width="15"
        // static-body
        dynamic-body="mass: 0"
        gate-field-listener
        // text="value: This text will be 4 units wide."
        material="opacity: 0.3; transparent: true"
        position="0 2 89"
      ></a-box>
    </>
  )
}

export default Ball
