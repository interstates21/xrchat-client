import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
import React from 'react'
// import Environment from '../components/xr/scene/environment'
const SceneRoot = dynamic(() => import('../components/xr/scene'), {
  ssr: false,
})
// import Login from '../components/ui/Login'
type Props = {
  aframeReady: boolean
}
export default class IndexPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Login /> */}
        {this.props.aframeReady && <SceneRoot />}
      </Layout>
    )
  }
}
