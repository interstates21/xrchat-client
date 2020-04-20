import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('../components/xr/scene'), { ssr: false })
import React from 'react'
// import Login from '../components/ui/Login'

type Props = {
  aframeReady: boolean,
}

// TODO: Make an actual privacy policy page
export default class PrivacyPolicyPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Login /> */}
        {this.props.aframeReady && (<Scene />)}
      </Layout>
    )
  }
}
