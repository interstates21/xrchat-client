import { Entity } from 'aframe-react';
import Camera from './camera';
import FuseCursor from './fuse-cursor'

type Props = {
  fuseCursor?: boolean,
}
//TODO: give unique id's to every Entity that exists in a scene - including this one

const CameraRig = ({ fuseCursor }: Props) => {
  return (<Entity className="camera-rig player-camera">
      <Camera/>
      {fuseCursor === true && <FuseCursor/>}
  </Entity>)
}

export default CameraRig;