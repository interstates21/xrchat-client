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
      <Layout pageTitle="Portals">
        {/* <Login /> */}
        <SceneRoot>
          <Cursor/>
          <Environment/>
          <Portal href="/" position={{ x: -6, y: 1, z: -5 }}/>
          <Portal
            href="/portaltest"
            position={{ x: -2, y: 1, z: -6 }}/>
          <Portal href="https://vrland.io/dome/in" position={{ x: 2, y: 1, z: -6 }}/>
          <Portal
            href="https://hubs.mozilla.com/eyUQKmn/welcome-ultimate-festivity"
            position={{ x: 6, y: 1, z: -4 }}/>
            
        </SceneRoot>
      </Layout>
    )
  }
}
