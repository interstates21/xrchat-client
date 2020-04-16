import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
const SceneRoot = dynamic(() => import('../components/xr/scene'), { ssr: false })
import React from 'react'
import Environment from '../components/xr/scene/environment'
import Portal from '../components/xr/portal/Portal'
import Cursor from '../components/xr/portal/Cursor'
// import Login from '../components/ui/Login'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Portal test">
        {/* <Login /> */}
        <SceneRoot>
          <Cursor/>
          <Environment/>
          <Portal href="/portals" position={{ x: 0, y: 1, z: -3 }}/>
        </SceneRoot>
      </Layout>
    )
  }
}
