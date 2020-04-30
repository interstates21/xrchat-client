// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

export const ComponentName = 'player'

export const KickableSchema: AFRAME.MultiPropertySchema<{ force: any }> = {
  amount: { type: 'number', default: 20 }
}

export interface IAttr {
  pStart: any
  sourceEl: any
  firstUpdate: boolean
  forcePush: () => void
}

const Kickable: AFRAME.ComponentDefinition<IAttr> = {
  schema: KickableSchema,

  init() {
    this.pStart = new THREE.Vector3()
    this.sourceEl = this.el.sceneEl.querySelector('#cam')
    // console.log('src = ', this.sourceEl.body)
    // this.el.addEventListener('click', this.forcePush.bind(this))
    this.sourceEl.addEventListener('click', this.forcePush.bind(this))
  },

  play() {},

  pause() {},

  forcePush() {
    // const data = this.data
    var el = this.el
    var pStart = this.pStart.copy(this.sourceEl.getAttribute('position'))
    console.log('pstart ', pStart)
    const impulse = el.body.position.vsub(pStart)
    impulse.normalize()
    el.body.velocity = impulse.scale(20)
  }
}

export default Kickable
