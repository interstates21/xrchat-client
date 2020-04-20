import Layout from '../components/ui/Layout'
import React from 'react'

import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../components/xr/scene/scene-environment'), { ssr: false })
type Props = {
  aframeReady: boolean,
}
export default class EnvironmentPage extends React.Component<Props> {
  render () {
    return (
      <Layout pageTitle="Environment">
        {this.props.aframeReady && (<Scene />)}
      </Layout>
    )
  }
}
