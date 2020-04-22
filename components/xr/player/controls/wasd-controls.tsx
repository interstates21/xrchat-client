import { Entity } from 'aframe-react'
import Axis from '../../../../enums/axis'

type WasdControlsOptions = {
  acceleration?: number
  adAxis?: keyof typeof Axis
  adInverted?: boolean
  enabled?: boolean
  fly?: boolean
  wsAxis?: keyof typeof Axis
  wsInverted?: boolean
  // other optional props which can be applied to the entity
  [props: string]: any
}
export const defaultWasdControlsOptions: WasdControlsOptions = {
  enabled: true,
  hmdEnabled: true,
  reverseMouseDrag: true,
  reverseTouchDrag: false,
  touchEnabled: true,
  pointerLockEnabled: false,
}
const WasdControls = (
  props: WasdControlsOptions = defaultWasdControlsOptions
) => {
  return <Entity primitive="a-look-controls" {...props} />
}
export default WasdControls
