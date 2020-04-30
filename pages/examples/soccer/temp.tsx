AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.
    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    // console.log(this.el.object3D.rotation)
    // `position` is a three.js Vector3.
    // console.log(this.el.object3D.position)
  }
})

// AFRAME.registerComponent('click-impulse', {
//   schema: {
//     force: { default: 5 }
//   },
//   init: function () {
//     this.pStart = new THREE.Vector3()
//     this.sourceEl = this.el.sceneEl.querySelector('#cam')
//     console.log('src = ', this.sourceEl)
//     this.el.addEventListener('click', this.forcePush.bind(this))
//   },
//   forcePush: function () {
//     console.log('click')
//     var el = this.el
//     var pStart = this.pStart.copy(this.sourceEl.getAttribute('position'))
//     console.log('pstart ', pStart)
//     // const impulse = new CANNON.Vec3(
//     //   ballPos.x - pStart.x,
//     //   1,
//     //   ballPos.z - pStart.z
//     // )
//     const impulse = el.body.position.vsub(pStart)
//     impulse.normalize()
//     const amount = this.data.force
//     console.log('amount', amount)
//     el.body.velocity = impulse.scale(amount)
//   }
// })

// const handleClick = (e: any) => {
//   return
//   if (ballRef && camRef) {
//     console.log('e', e)
//     // const camBody = camRef.current.el.body
//     const object3D = camRef.current.el.object3D
//     const camPos = object3D.position

//     const ball = ballRef.current as any

//     // impulse = impulse.mult(dir)

//     if (ball) {
//       const f = 30
//       const ballPos = ball.object3D.position
//       const impulse = new CANNON.Vec3(
//         ballPos.x - camPos.x,
//         1,
//         ballPos.z - camPos.z
//       )
//       impulse.normalize()
//       console.log('impulse', impulse)
//       // const point = new CANNON.Vec3(0, 0, 0)
//       // ball.body.applyLocalImpulse(impulse.scale(f), point)
//       ball.body.velocity = impulse.scale(f)
//     }
//   }
// }
