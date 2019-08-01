import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style/style.scss'
import LoginForm from '../components/Login/Login'

export default class extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginForm/>
      </div>
    )
  }
}