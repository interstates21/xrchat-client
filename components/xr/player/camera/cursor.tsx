import { Entity } from 'aframe-react'

type CursorOptions = {
  // Whether cursor is fuse-based.
  fuse?: boolean
  // How long to wait (in milliseconds) before triggering a fuse-based click event.
  fuseTimeout?: number
  // Whether to show pointer cursor in rayOrigin: mouse mode when hovering over entity.
  mouseCursorStylesEnabled?: boolean
  // Where the intersection ray is cast from (i.e.,entity or mouse).
  // rayOrigin: mouse is extremely useful for VR development on a mouse and keyboard.
  rayOrigin?: string
  // events such as { click, mouseup, mouseleave }
  events?: object
  // other optional props which can be applied to the entity
  [props: string]: any
}
export const defaultCursorOptions: CursorOptions = {
  fuse: false,
  fuseTimeout: 1500,
  mouseCursorStylesEnabled: true,
  rayOrigin: 'entity',
  events: {},
}
const Cursor = (props: CursorOptions = defaultCursorOptions) => {
  return <Entity primitive="a-cursor" {...props} />
}
export default Cursor
