import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style/style.scss'
import Profile from '../components/Profile/Profile'

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile/>
      </div>
    )
  }
}