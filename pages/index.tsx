import React from 'react'
import Layout from '../components/ui/Layout'
import dynamic from 'next/dynamic'
// const Scene = dynamic(() => import('../components/xr/scene'), { ssr: false })
const ExampleFootball = dynamic(() => import('./examples/soccer'), {
  ssr: false
})
// import Login from '../components/ui/Login'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home">
        {/* <Scene /> */}
        <ExampleFootball />
      </Layout>
    )
  }
}
