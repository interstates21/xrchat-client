import { Entity } from 'aframe-react'

type CameraProperties = {
  active?: boolean,
  far?: number,
  fov?: number,
  near?: number,
  spectator?: boolean,
  zoom?: number
}
export const defaultCameraProperties: CameraProperties = {
  active: true,
  far: 10000,
  fov: 80,
  near: 0.005,
  spectator: false,
  zoom: 1
}
const Camera = (props: CameraProperties = defaultCameraProperties) => {
  return (<Entity
    primitive="a-camera"
    {...props}
    />)
}
export default Camera;