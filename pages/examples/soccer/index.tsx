// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
import Kickable from './Kickable'
import ZoneIndicator from './ZoneIndicator'
import RotationLogger from './RotationLogger'
// @ts-ignore
import * as THREE from '../../../js/three'

interface IProps {}
class Soccer extends React.Component<PageLoaderProps> {
  constructor(props) {
    super(props)
    AFRAME.registerComponent('kickable-ball', Kickable)
    AFRAME.registerComponent('zone-indicator', ZoneIndicator)
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {/* <a-scene physics="driver: local; debug: true; iterations: 20;"> */}
        <a-scene physics="driver: local;">
          <a-assets>
            <audio
              id="kick-audio-src"
              preload="auto"
              crossorigin="anonymous"
              src="https://cdn.glitch.com/c5964703-a0c0-483b-b743-b13c5c85143d%2Fkick.wav?v=1588241563318"
            />
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
            kickable-ball="distance: 5; amount: 20"
            dynamic-body="mass: 5; linearDamping: 0.001"
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
          <a-light color="white" position="0.2 12 0.4" type="point"></a-light>
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
            color="white"
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
            <a-entity id="kick-sound" sound="src: #kick-audio-src"></a-entity>
            {/* <a-light
              type="point"
              color="yellow"
              intensity="15"
              penumbra="10"
              position="0 0 0"
              distance="4"
            ></a-light> */}
            <Entity
              primitive="a-light"
              type="point"
              id="accumulate-zone"
              color="yellow"
              intensity="15"
              penumbra="10"
              position="0 0 0"
              distance="4"
              visible="false"
            />
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
