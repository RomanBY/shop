import React, { Component } from 'react'
import '../../assets/style/style.scss'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {store} from '../../store/store'
//import Card from '../components/Organaizer/Card'

export default class Organaizer extends Component <{}, {startDate: any, showDatePicker: boolean, showEmptyCard: boolean, selectedTime: string}> {

  constructor (props: any) {
    super(props)
    this.state = {
      startDate: new Date(),
      showDatePicker: false,
      showEmptyCard: false,
      selectedTime: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render () {
    const showDate: boolean = this.state.showDatePicker
    const showCard: boolean = this.state.showEmptyCard

    return (
      <main className="App-header">
        <Link href="/">
          <Button
            color="primary"
          >Link to BACK</Button>
        </Link>
        <div>
          <Button
            onClick={this.getData}
            color="success"
          >Data</Button>
          <Button
            onClick={()=>this.addCard()}
            color="danger"
          >Add</Button>
          <span>Counter: { store.getState()}</span>
        </div>
        <div>
          {
            showDate &&
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          }
        </div>
        <div>
          {
            showCard &&
              <div className={'new-card'}>

                <Form onSubmit={this.submitData}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Title</Label>
                    <Col sm={10}>
                      <Input type="email" id="title" placeholder="title" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="examplePassword" sm={2}>Info</Label>
                    <Col sm={10}>
                      <Input type="password"  id="info" placeholder="info" />
                    </Col>
                  </FormGroup>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">Status</legend>
                    <Col sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" />{' '}
                          true
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" />{' '}
                          false
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
          }
        </div>

      </main>
    )
  }

  getData = () => {
    this.setState({
      showDatePicker: true
    })
  }


  addCard = () =>  {
    this.setState({
      showEmptyCard: true
    })
    store.dispatch({ type: 'INCREMENT' })
    store.subscribe(() => console.log(store.getState()))
  }

  submitData = (e) => {
    e.preventDefault()
  }

  getPickerValue = value => {
    console.log(value);
  }

}