import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const SceneRoot = dynamic(() => import('../components/xr/scene'), { ssr: false })
import React from 'react'
import Environment from '../components/xr/scene/environment'
import Portal from '../components/xr/portal/Portal'
import Cursor from '../components/xr/portal/Cursor'
// import Login from '../components/ui/Login'
type Props = {
  aframeReady: boolean,
}
export default class PortalTestPage extends React.Component<Props> {
  render() {
    return (
      <Layout pageTitle="Portal test">
        {/* <Login /> */}
        {this.props.aframeReady && (<SceneRoot>
          <Cursor/>
          <Environment/>
          <Portal href="/portals" position={{ x: 0, y: 1, z: -3 }}/>
        </SceneRoot>)}
      </Layout>
    )
  }
}
