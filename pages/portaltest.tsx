import Layout from '../components/ui/Layout'
import React from 'react'
import Portal from '../components/xr/portal/Portal'
import Cursor from '../components/xr/portal/Cursor'
import SceneRoot from '../components/xr/scene'
// import Login from '../components/ui/Login'
type Props = {
  aframeReady: boolean
}
export default class PortalTestPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Portal test">
        {/* <Login /> */}
        {this.props.aframeReady && (
          <SceneRoot>
            <Cursor />
            <Portal href="/portals" position={{ x: 0, y: 1, z: -3 }} />
          </SceneRoot>
        )}
      </Layout>
    )
  }
}
