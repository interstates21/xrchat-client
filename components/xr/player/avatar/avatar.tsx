import { Entity } from 'aframe-react'

// TODO: dynamically load asset model, instead of use below dummy data

const Avatar = () => {
  return (
    <Entity className="avatar">
      <Entity
        primitive="a-sphere"
        className="avatar-head"
        scale="0.45 0.5 0.4"
      ></Entity>
      <Entity className="avatar-face" position="0 0.05 0">
        <Entity
          primitive="a-sphere"
          className="avatar-eye"
          color="#efefef"
          position="0.16 0.1 -0.35"
          scale="0.12 0.12 0.12"
        >
          <Entity
            primitive="a-sphere"
            className="avatar-pupil"
            color="#000"
            position="0 0 -1"
            scale="0.2 0.2 0.2"
          ></Entity>
        </Entity>
        <Entity
          primitive="a-sphere"
          className="avatar-eye"
          color="#efefef"
          position="-0.16 0.1 -0.35"
          scale="0.12 0.12 0.12"
        >
          <Entity
            primitive="a-sphere"
            className="avatar-pupil"
            color="#000"
            position="0 0 -1"
            scale="0.2 0.2 0.2"
          ></Entity>
        </Entity>
      </Entity>
    </Entity>
  )
}

export default Avatar
