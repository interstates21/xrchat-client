import Layout from '../components/ui/Layout'
import Scene from '../components/ui/Videos/index'
import React from 'react'

type Props = {
  aframeReady: boolean,
}

export default class VideosPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Videos">
        {this.props.aframeReady && (<Scene />)}
      </Layout>
    )
  }
}
