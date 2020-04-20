import { Entity } from 'aframe-react'

type RaycasterOptions = {
  autoRefresh: boolean,
  // direction: Vector3,
  enabled: boolean,
  far: number,
  interval: number,
  near: number
  objects: string | null,
  // origin: Vector3
  showLine: boolean
  useWorldCoordinates: boolean
}
export const defaultRaycasterOptions: RaycasterOptions = {
  autoRefresh: true,
  // direction: 0, 0, -1,
  enabled: true,
  far: Infinity,
  interval: 0,
  near: 0,
  objects: null,
  // origin: 0, 0, 0,
  showLine: false,
  useWorldCoordinates: false
}
const Raycaster = (props: RaycasterOptions = defaultRaycasterOptions) => {
  return (<Entity
    primitive="a-raycaster"
    {...props}
    />)
}
export default Raycaster;