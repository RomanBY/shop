import React, { Component } from 'react'
import Link from 'next/link'

export default class MenuItem extends Component<any, any>{

  constructor (props: any) {
    super(props)
  }

  render () {
    return (
      <Link href={ this.props.item.url }>
        <div
          className={'menu__item'}
          onClick={() => {
            this.handleClick(this.props.item.name)
          }}
        >{this.props.item.name}</div>
      </Link>
    )
  }

  handleClick = (name: string) => {
    console.log(name)
  }

}