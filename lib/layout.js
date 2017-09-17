import React, { Component } from 'react'

import Header from '../components/Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd',
}

export default (PageComponent, props) => {
  return class extends Component {
    render() {
      return(
        <div style={layoutStyle}>
          <Header />
          <PageComponent />
        </div>
      )
    }
  }
}
