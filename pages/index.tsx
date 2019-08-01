import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style/style.scss'

import Content from '../components/Content/Content'

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <Content></Content>
      </div>
    )
  }
}