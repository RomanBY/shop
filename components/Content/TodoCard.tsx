import React, { Component } from 'react'
import Link from 'next/link'
import { autorization } from '../../store/store'

export default class todoCard extends Component<any, any> {

  constructor (props: any) {
    super(props)
  }

  render () {
    return (
      <Link href={ autorization.getState() ? { pathname: '/article', query: { code: this.props.item.patio_code } } : '' }>
        <div>
          <div className="w-100 h-100 d-flex card__wrap flex-wrap">
            <p className="m-auto w-100">{this.props.item.name}</p>
            {
              this.props.item.comments &&
              <p className="m-auto w-100 alert-danger">Comments: {this.props.item.comments.length}</p>
            }
            <p className="m-auto w-100">Price: {this.props.item.priceBase} BYN</p>
          </div>
          <img className="card__img" src={this.props.item.images[0]} alt=""/>
        </div>
      </Link>
    )
  }
}