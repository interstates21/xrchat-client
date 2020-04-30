// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

export const KickableSchema: AFRAME.MultiPropertySchema<{
  force: any
  distance: any
}> = {
  amount: { type: 'number', default: 20 },
  distance: { type: 'number', default: 4 }
}

export interface IAttr {
  pStart: any
  sourceEl: any
  accumulation: number
  firstUpdate: boolean
  accumulationInterval: any
  forcePush: () => void
}

const Kickable: AFRAME.ComponentDefinition<IAttr> = {
  schema: KickableSchema,

  init() {
    this.pStart = new THREE.Vector3()
    this.accumulation = 0
    this.accumulationInterval = null
    this.sourceEl = this.el.sceneEl.querySelector('#cam')
    console.log('this.el.body', this.el.body)
    this.sourceEl.addEventListener('mousedown', this.accumulate.bind(this))
    this.sourceEl.addEventListener('mouseup', this.forcePush.bind(this))
  },
  play() {},

  pause() {},
  accumulate() {
    const accumulateZone = this.el.sceneEl.querySelector('#accumulate-zone')
    if (accumulateZone) {
      accumulateZone.object3D.visible = true
    }
    this.accumulationInterval = setInterval(() => {
      if (this.accumulation < 6) {
        this.accumulation += 0.1
      }
    }, 50)
  },

  forcePush() {
    const data = this.data
    var el = this.el
    if (this.accumulationInterval) {
      clearInterval(this.accumulationInterval)
    }
    const accumulateZone = this.el.sceneEl.querySelector('#accumulate-zone')
    if (accumulateZone) {
      accumulateZone.object3D.visible = false
    }
    var pStart = this.pStart.copy(this.sourceEl.getAttribute('position'))
    const distance = pStart.distanceTo(el.body.position)
    console.log('distance ', distance)
    if (distance < data.distance) {
      const kickSoundEl = this.el.sceneEl.querySelector('#kick-sound')

      console.dir(kickSoundEl)
      if (kickSoundEl) {
        kickSoundEl.components.sound.playSound()
      }
      let impulse = el.body.position.vsub(pStart)
      impulse.normalize()
      impulse = impulse.scale(data.amount).scale(this.accumulation)
      impulse.y *= 2
      console.log('this.accumulation ', this.accumulation)
      el.body.velocity = impulse
    }
    this.accumulation = 0
  }
}

export default Kickable
