import { Entity } from 'aframe-react'
import LookControls from './look-controls'
import WasdControls from './wasd-controls'

type Props = {
  lookProps?: any
  wasdProps?: any
}

const PlayerControls = ({ lookProps, wasdProps }: Props) => {
  return (
    <Entity className="player-controls">
      <LookControls {...lookProps} />
      <WasdControls {...wasdProps} />
    </Entity>
  )
}

export default PlayerControls
