// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

export interface IAttr {}

const IgnoreCollision: AFRAME.ComponentDefinition<IAttr> = {
  schema: {},

  init() {
    console.log('this.el.body', this.el.body)
    if (this.el.body) {
      this.el.body.collisionResponse = 0
    }
  },

  play() {
  },

  pause() {}
}

export default IgnoreCollision
