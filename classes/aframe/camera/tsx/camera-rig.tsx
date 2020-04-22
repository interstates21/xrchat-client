import { Entity } from 'aframe-react'
import Camera from './camera'
import FuseCursor from './fuse-cursor'

type Props = {
  fuseCursor?: boolean
}

const CameraRig = ({ fuseCursor }: Props) => {
  return (
    <Entity className="camera-rig">
      <Camera />
      {fuseCursor === true && <FuseCursor />}
    </Entity>
  )
}

export default CameraRig
