// @ts-nocheck
import AFRAME from 'aframe'
// @ts-ignore
import * as THREE from '../../../js/three'

const Ground: AFRAME.ComponentDefinition<IAttr> = {
  schema: {},

  init() {
    var objectLoader
    var object3D = this.el.object3D
    var MODEL_URL = 'https://cdn.aframe.io/link-traversal/models/ground.json'
    if (this.objectLoader) {
      return
    }
    objectLoader = this.objectLoader = new THREE.ObjectLoader()
    objectLoader.crossOrigin = ''
    objectLoader.load(MODEL_URL, function (obj) {
      obj.children.forEach(function (value) {
        value.receiveShadow = true
        value.material.shading = THREE.FlatShading
      })
      object3D.add(obj)
    })
  },

  play() {},

  pause() {}
}

export default Ground
