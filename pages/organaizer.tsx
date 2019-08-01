import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style/style.scss'
import Organaizer from '../components/Organaizer/Organaizer'

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <Organaizer></Organaizer>
        </div>
    )
  }
}