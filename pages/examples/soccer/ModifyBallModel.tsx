// @ts-nocheck
import AFRAME from 'aframe'
import * as CANNON from '../../../js/cannon.min'
// @ts-ignore
import * as THREE from '../../../js/three'

export interface IAttr {}

const findMeshAndChangeMaterial = (obj) => {
  if (obj.children && obj.children.length > 0) {
    findMeshAndChangeMaterial(obj.children[0])
  } else {
    console.log('mesh = ', obj.material)
    obj.material.metalness = 0
  }
}
const ModifyBallModel: AFRAME.ComponentDefinition<IAttr> = {
  schema: {},

  init() {
    // Wait for model to load.
    this.el.addEventListener('model-loaded', () => {
      // Grab the mesh / scene.
      const obj = this.el.getObject3D('mesh')
      findMeshAndChangeMaterial(obj)
      // Go over the submeshes and modify materials we want.
      //   obj.traverse((node) => {
      //     console.log('node =', node)
      //     node.material.color.set('red')
      //   })
    })
  },

  play() {},

  pause() {}
}

export default ModifyBallModel
