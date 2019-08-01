import React, { Component } from 'react'
import { autorization } from '../../store/store'
import '../../assets/style/style.scss'
import Router from 'next/router'

export default class Profile extends Component<{}, any>{

  constructor (props: any) {
    super(props)
  }

  render () {
    return (
      <div className="App-header">profile</div>
    )
  }

  componentDidMount () {
    if (!autorization.getState()) {
      Router.push('/login')
    }

  }



}