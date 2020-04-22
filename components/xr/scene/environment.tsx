import React from 'react'
// @ts-ignore
import { Entity } from 'aframe-react'
import Lights from './lights'
import Skybox from './skybox'
// const gltfsrc = '#' + env['scene-gltf'].src
export default class Environment extends React.Component {
  render() {
    return (
      <Entity>
        {/* <a-gltf-model src={gltfsrc} position="0 0 -50" /> */}
        <Lights />
        <Skybox />
      </Entity>
    )
  }
}
