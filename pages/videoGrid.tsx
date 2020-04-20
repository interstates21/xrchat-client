import Scene from '../components/xr/scene/scene-video-grid'
import React from 'react'

type Props = {
  aframeReady: boolean,
}

export default class MediaGridPage extends React.Component<Props> {
  render () {
    return (
      this.props.aframeReady && (<Scene />)
    )
  }
}
