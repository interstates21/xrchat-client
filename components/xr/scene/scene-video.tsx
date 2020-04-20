import React from 'react'
// @ts-ignore
import { Scene } from 'aframe-react'
import Assets from './assets'
import Video360 from '../video360/Video360Room'
import './index.scss'

type State = {
  color?: string
}

export default class VideoScene extends React.Component<State> {
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
          <Video360/>
        </Scene>
      </div>
    )
  }
}
