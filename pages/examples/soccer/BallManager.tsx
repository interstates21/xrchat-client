// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

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

const BallManager: AFRAME.ComponentDefinition<IAttr> = {
  //   schema: GateFieldSchema,

  init() {
    const el = this.el

    el.addEventListener('respawn', (e) => {
      console.log('respawn')
      this.respawn()
    })
  },
  play() {},

  respawn() {
    this.el.body.velocity = new CANNON.Vec3(0, 0, 0)
    this.el.body.position = new CANNON.Vec3(0, 5, 0)
    this.el.object3D.position.set(0, 5, 0)
  },
  tick() {
    const { x, z } = this.el.object3D.position
    if (x > 90 || x < -90 || z > 100 || z < -100) {
      this.respawn()
    }
  },
  pause() {
    // this.el.removeEventListener('collide')
  },
}

export default BallManager
