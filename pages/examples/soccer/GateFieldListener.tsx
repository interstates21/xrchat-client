// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'
import { Scene } from 'three'

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

const GateFieldListener: AFRAME.ComponentDefinition<IAttr> = {
  //   schema: GateFieldSchema,

  init() {
    const scene = this.el.sceneEl
    console.log('scene = ', scene)
    const ballEl = this.el.sceneEl.querySelector('#ball')

    const el = this.el
    const handleCollide = (e) => {
      if (e.detail.body.id === ballEl.body.id) {
        el.removeEventListener('collide', handleCollide)
        scene.emit('goal', { collidingEntity: scene }, false)
      }
    }

    el.addEventListener('collide', handleCollide)
  },
  play() {},

  tick() {
    // console.log('tick')
  },
  pause() {
    // this.el.removeEventListener('collide')
  },
}

export default GateFieldListener
