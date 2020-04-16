import React from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./scene'), { ssr: false })

type Props = {
  children?: any
}

type State = {
  loggedIn: true // TODO: Add auth and redux store
}

// Networking
export default class SceneRoot extends React.Component<Props> {
  state: State = {
    loggedIn: true // TODO: Add auth and redux store
  }

  render() {
    return (
      <div>
        <Scene>
          {this.props.children}
        </Scene>
      </div>

    )
  }
}
