import React from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../components/xr/scene/scene-video'), { ssr: false })

type Props = {
  aframeReady: boolean,
}

export default class Video360Page extends React.Component<Props> {
  render () {
    return (
      this.props.aframeReady && (<Scene />)
    )
  }
}
