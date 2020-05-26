// @ts-nocheck
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { Entity } from 'aframe-react'

interface IProps {}
const Player = () => {
  return (
    <>
      <Entity
        // events={{
        //   click: handleClick,
        //   collide: handleCollide
        // }}
        dynamic-body="mass: 0"
        primitive="a-camera"
        rotation-reader
        height={3}
        width={2}
        id="cam"
      >
        <a-entity id="kick-sound" sound="src: #kick-audio-src"></a-entity>
        {/* <a-light
  type="point"
  color="yellow"
  intensity="15"
  penumbra="10"
  position="0 0 0"
  distance="4"
></a-light> */}
        <Entity
          primitive="a-light"
          type="point"
          id="accumulate-zone"
          color="yellow"
          intensity="15"
          penumbra="10"
          position="0 0 0"
          distance="4"
          visible="false"
        />
        <Entity
          primitive="a-cursor"
          animation__click={{
            property: 'scale',
            startEvents: 'click',
            from: '0.1 0.1 0.1',
            to: '1 1 1',
            dur: 150
          }}
        />
      </Entity>
    </>
  )
}

export default Player
