// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

export const Schema: AFRAME.MultiPropertySchema<{
  distance: any
}> = {
  distance: { type: 'number', default: 4 }
}

export interface IAttr {
  sourceEl: any
  pStart: any
}

const ZoneIndicator: AFRAME.ComponentDefinition<IAttr> = {
  schema: Schema,

  init() {
    this.pStart = new THREE.Vector3()
    this.sourceEl = this.el.sceneEl.querySelector('#cam')
    console.dir(this.el)
  },

  tick() {
    const data = this.data
    const el = this.el
    const pStart = this.pStart.copy(this.sourceEl.getAttribute('position'))
    const distance = pStart.distanceTo(el.parentNode.object3D.position)
    if (distance < data.distance) {
      el.object3D.visible = true
    } else {
      el.object3D.visible = false
    }
  }
}

export default ZoneIndicator
