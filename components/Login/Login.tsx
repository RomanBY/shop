import React, { Component } from 'react'
import '../../assets/style/style.scss'
import { Col, Button, Form, FormGroup, Label } from 'reactstrap'
import Router from 'next/router'
import { autorization } from '../../store/store'

export default class LoginForm extends Component <{}, {showPopup: boolean}> {
  private login: any
  private password: any

  constructor (props: any) {
    super(props)
    this.state = {
      showPopup: false
    }
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.login.focus()
    this.password.focus()
  }


  render () {
    const openPopup: boolean = this.state.showPopup
    return (
      <main className='App-header'>
        <div className='login__content'>
          { openPopup && <div className='login__content-popup'>
            <h3>Wrong login or password</h3>
            <Button
              onClick={this.closePopup}
              color="success"
            >OK</Button>
          </div> }
          <Form>
            <FormGroup row>
              <Label for="exampleLogin" sm={4}>Login</Label>
              <Col sm={8}>
                <input type="text" ref={(input) => { this.login = input }} placeholder="login"/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={4}>Password</Label>
              <Col sm={8}>
                <input type="password" ref={(input) => { this.password = input }} placeholder="password"/>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button onClick={this.getData} >Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </main>
    )
  }

  getData = () => {
    this.focus()
    if (this.login.value === 'Admin' || this.password.value === '12345') {
      autorization.dispatch({ type: 'ISAUTORIZATED' })
      autorization.subscribe(() => console.log(autorization.getState()))
      Router.push('/profile')
    } else {
      this.setState({
        showPopup: true
      })
    }
  }

  closePopup = () => {
    this.setState({
      showPopup: false
    })
  }

}