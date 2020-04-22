import { Entity } from 'aframe-react'
import Camera from './camera'
import FuseCursor from './fuse-cursor'

type Props = {
  className?: string
  fuseCursor?: boolean
}

const CameraRig = ({ className = '', fuseCursor }: Props) => {
  return (
    <Entity className={'camera-rig ' + className}>
      <Camera />
      {fuseCursor === true && <FuseCursor />}
    </Entity>
  )
}

export default CameraRig
