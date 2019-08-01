import React, { Component } from 'react'
import MenuItem from './MenuItem'
import '../../assets/style/style.scss'
import { IMenu } from '../../modules/interfaces'
import { autorization } from '../../store/store'

export default class Header extends Component <{}, { menu: IMenu[] }> {

  constructor (props: any) {
    super(props)
    this.state = {
      menu: [
        {
          name: 'Main',
          url: '/'
        },
        {
          name: 'News',
          url: '/news'
        },
        {
          name: 'Profile',
          url: '/profile'
        },
        {
          name: 'Article',
          url: '/article'
        },
        {
          name: 'Login',
          url: '/login'
        }
      ],
    }
  }

  render () {
    let arr: IMenu[] = Object.assign([], this.state.menu)
    if (autorization.getState()) {
      arr.forEach((item, index) => {
        if (item.name === 'Login') {
          arr.splice(index, 1)
          this.setState({
            menu: arr
          })
        }
      })
    }

    return (
      <header>
        {arr.map((item: object, i: number) => (
            <div
              className={'menu__item'}
              key={i}
            >
              <MenuItem
                item={item}
              />
            </div>
          )
        )}
      </header>
    )
  }

  async componentDidMount () {

  }

}