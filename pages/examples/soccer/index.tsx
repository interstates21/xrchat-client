// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
import Kickable from './Kickable'
import RotationLogger from './RotationLogger'
// @ts-ignore
import * as THREE from '../../../js/three'

interface IProps {}
class Soccer extends React.Component<PageLoaderProps> {
  constructor(props) {
    super(props)
    AFRAME.registerComponent('kickable-ball', Kickable)
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <a-scene physics="driver: local; debug: true; iterations: 20;">
          <a-assets>
            <img
              id="groundTexture"
              src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            />
            <img
              id="skyTexture"
              src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            />
            <a-asset-item
              id="gun-obj"
              src="https://cdn.glitch.com/1d750fac-a652-409d-949b-156f935085a2%2Fgun-1NI7Q2_vScX-model.obj?1510641419352"
            ></a-asset-item>
            <a-asset-item
              id="gun-mtl"
              src="https://cdn.glitch.com/1d750fac-a652-409d-949b-156f935085a2%2Fgun-1NI7Q2_vScX-materials.mtl?1510641419027"
            ></a-asset-item>
          </a-assets>
          <Entity
            primitive="a-sphere"
            id="ball"
            radius="0.5"
            position="0 5 -5"
            color="black"
            kickable-ball
            dynamic-body="mass: 3; linearDamping: 0.001"
          ></Entity>
          <a-box
            position="1 1.5 -4"
            color="#ffffbf"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <a-box
            position="1 0.5 -8"
            color="#fdae61"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <a-box
            position="0 1.5 -8"
            color="#d9ef8b"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <a-box
            position="1 1.5 -8"
            color="#a6d96a"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <a-box
            position="0 2.5 -8"
            color="#1a9850"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <a-box
            position="1 2.5 -8"
            color="#006837"
            dynamic-body="mass: 2"
            shadow
          ></a-box>
          <Entity
            primitive="a-sky"
            color="#101"
            // src="#skyTexture"
          />
          <Entity
            primitive="a-plane"
            src="#groundTexture"
            dynamic-body="mass: 0"
            rotation="-90 0 0"
            height="100"
            width="100"
          />
          <Entity
            primitive="a-box"
            color="white"
            dynamic-body="mass: 0"
            position="0 50 0"
            rotation="90 0 0"
            height="100"
            width="100"
          />
          <Entity
            primitive="a-box"
            color="white"
            position="0 0 50"
            dynamic-body="mass: 0"
            rotation="180 0 0"
            height="100"
            width="100"
          />
          <Entity
            primitive="a-box"
            color="white"
            position="0 0 -50"
            dynamic-body="mass: 0"
            rotation="0 0 0"
            height="100"
            width="100"
          />
          <Entity
            primitive="a-box"
            color="white"
            position="50 0 0"
            dynamic-body="mass: 0"
            rotation="0 -90 0"
            height="100"
            width="100"
          />
          <Entity
            primitive="a-box"
            color="white"
            position="-50 0 0"
            dynamic-body="mass: 0"
            rotation="0 90 0"
            height="100"
            width="100"
          />
          <Entity
            // events={{
            //   click: handleClick,
            //   collide: handleCollide
            // }}
            dynamic-body="mass: 0"
            primitive="a-camera"
            rotation-reader
            height={3}
            width={2}
            id="cam"
          >
            <Entity
              primitive="a-cursor"
              animation__click={{
                property: 'scale',
                startEvents: 'click',
                from: '0.1 0.1 0.1',
                to: '1 1 1',
                dur: 150
              }}
            />
          </Entity>
        </a-scene>
      </div>
    )
  }
}
export default Soccer
