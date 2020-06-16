// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'
import Alert from '@material-ui/lab/Alert'

// export const GateFieldSchema: AFRAME.MultiPropertySchema<{
//   force: any
//   distance: any
// }> = {
// //   amount: { type: 'number', default: 20 },
// //   distance: { type: 'number', default: 4 },
// }

export interface IAttr {
  ballEl: any
}

const SceneManager: AFRAME.ComponentDefinition<IAttr> = {
  //   schema: GateFieldSchema,

  init() {
    console.log('init!!!!!!!!!!!!!!!!')
    const el = this.el
    const ballEl = this.el.sceneEl.querySelector('#ball')
    el.addEventListener('goal', (e) => {
      setTimeout(() => {
        console.log('goal!!!!')
        this.el.sceneEl.pause()
        ballEl.emit('respawn')
      }, 500)
      setTimeout(() => {
        this.el.sceneEl.play()
      }, 5000)
    })
  },
  play() {},

  tick() {
    // console.log('tick')
  },
  pause() {
    // this.el.removeEventListener('collide')
  },
}

export default SceneManager
