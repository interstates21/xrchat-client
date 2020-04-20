import { Entity } from 'aframe-react'

type CursorOptions = {
  fuse: boolean, // Whether cursor is fuse-based.
  fuseTimeout: number, // How long to wait (in milliseconds) before triggering a fuse-based click event.
  mouseCursorStylesEnabled: boolean, // Whether to show pointer cursor in rayOrigin: mouse mode when hovering over entity.
  rayOrigin: string, // Where the intersection ray is cast from (i.e.,entity or mouse). rayOrigin: mouse is extremely useful for VR development on a mouse and keyboard.
  events: object // events such as { click, mouseup, mouseleave }
}
export const defaultCursorOptions: CursorOptions = {
  fuse: false,
  fuseTimeout: 1500,
  mouseCursorStylesEnabled: true,
  rayOrigin: 'entity',
  events: {}
}
const Cursor = (props: CursorOptions = defaultCursorOptions) => {
  return (<Entity
    primitive= "a-cursor"
    {...props }
  />)
}
export default Cursor;