import React from 'react'
// @ts-ignore
import { Scene } from 'aframe-react'
import Assets from './assets'
import Environment from './environment'
import Player from '../player/player'
import './index.scss'

type State = {
  color?: string
}

export default class EnvironmentScene extends React.Component<State> {
  state: State = {
    color: 'red'
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Scene
          class="scene"
          renderer="antialias: true"
          background="color: #FAFAFA"
        >
          <Assets/>
          <Environment/>
          <Player/>
        </Scene>
      </div>
    )
  }
}
