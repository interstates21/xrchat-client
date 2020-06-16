// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
import Kickable from './Kickable'
import ZoneIndicator from './ZoneIndicator'
import PositionLogger from './PositionLogger'
// @ts-ignore
import * as THREE from '../../../js/three'
import Env from './Env'
import Player from './Player'
import ModifyBallModel from './ModifyBallModel'
import Ball from './Ball'
import Gates from './Gates'
import getConfig from 'next/config'
import GateFieldListener from './GateFieldListener'
import BallManager from './BallManager'
import SceneManager from './SceneManager'
const env = getConfig().publicRuntimeConfig.xr.environment

const components = [
  {
    name: 'kickable-ball',
    component: Kickable,
  },
  {
    name: 'kickable-ball',
    component: ZoneIndicator,
  },
  {
    name: 'modify-ball-model',
    component: ModifyBallModel,
  },
  {
    name: 'position-logger',
    component: PositionLogger,
  },
  {
    name: 'gate-field-listener',
    component: GateFieldListener,
  },
  {
    name: 'ball-manager',
    component: BallManager,
  },
  {
    name: 'scene-manager',
    component: SceneManager,
  },
]
interface IProps {}
class Soccer extends React.Component<PageLoaderProps> {
  constructor(props) {
    super(props)
    components.forEach((e) => {
      if (!Object.keys(AFRAME.components).find((f) => f === e.name)) {
        AFRAME.registerComponent(e.name, e.component)
      }
    })
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {/* <a-scene physics="driver: local; debug: true; iterations: 20;"> */}
        <a-scene physics="driver: local;" scene-manager>
          <a-assets>
            <audio
              id="kick-audio-src"
              preload="auto"
              crossorigin="anonymous"
              src="https://cdn.glitch.com/c5964703-a0c0-483b-b743-b13c5c85143d%2Fkick.wav?v=1588241563318"
            />
            <img id="ground" src={require('./grass.jpg')} />
            <img id="grass-normal" src={require('./grass-normal.png')} />
            <img
              id="skyTexture"
              src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            />
            <a-asset-item
              id="gun-obj"
              src="https://cdn.glitch.com/1d750fac-a652-409d-949b-156f935085a2%2Fgun-1NI7Q2_vScX-model.obj?1510641419352"
            ></a-asset-item>
            {/* <a-asset-item
              id="ball-model"
              src="./ball-model/scene.gltf"
            ></a-asset-item> */}
            <Entity
              primitive="a-gltf-model"
              id="ball-model"
              src={'/gltf/soccer_ball/scene.gltf'}
              crossOrigin="anonymous"
            />
            <Entity
              primitive="a-gltf-model"
              id="field"
              src={'/gltf/field/scene.gltf'}
              crossOrigin="anonymous"
            />
          </a-assets>
          <Ball />
          <Env />
          <Gates />
          <Player />
        </a-scene>
      </div>
    )
  }
}
export default Soccer
