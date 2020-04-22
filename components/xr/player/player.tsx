import { Entity } from 'aframe-react'
import PlayerControls from './controls/player-controls'
import CameraRig from './camera/camera-rig'
import Avatar from './avatar/avatar'

const Player = () => {
  return (
    <Entity className="player">
      <PlayerControls />
      <CameraRig className="player-camera" />
      <Avatar />
    </Entity>
  )
}

export default Player
