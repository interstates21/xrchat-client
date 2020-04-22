import { Entity } from 'aframe-react'

type LookControlsOptions = {
  enabled?: boolean
  hmdEnabled?: boolean
  reverseMouseDrag?: boolean
  reverseTouchDrag?: boolean
  touchEnabled?: boolean
  pointerLockEnabled?: boolean
  // other optional props which can be applied to the entity
  [props: string]: any
}
export const defaultLookControlsOptions: LookControlsOptions = {
  enabled: true,
  hmdEnabled: true,
  reverseMouseDrag: true,
  reverseTouchDrag: false,
  touchEnabled: true,
  pointerLockEnabled: false,
}
const LookControls = (
  props: LookControlsOptions = defaultLookControlsOptions
) => {
  return <Entity primitive="a-look-controls" {...props} />
}
export default LookControls
