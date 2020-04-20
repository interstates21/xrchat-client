import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../components/xr/scene/dream'), { ssr: false })
import React from 'react'
// import Login from '../components/ui/Login'
type Props = {
  aframeReady: boolean,
}
export default class DreamPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Login /> */}
        {this.props.aframeReady && (
          <Scene />
        )}
      </Layout>
    )
  }
}
