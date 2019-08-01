import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/style/style.scss'
import {menuData} from '../modules/api/'
import {Button} from 'reactstrap'

export default class extends React.Component <{}, {products: object[], item: {}, index: number}>  {
  private comment: any

  constructor(props: any) {
    super(props)
    this.state = {
      products: [],
      item: {},
      index: 0
    }
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.comment.focus()
  }

  render() {
    let product: any = null
    let index: number = 0
    menuData.forEach((item, i) => {
      // @ts-ignore
      if (item.patio_code === this.getCode ()) {
        product = item
        index = i
      }
    })

    return (
      <div className="App-header">
        article
        {
          product &&
          <div className='article__card'>
            <div className='d-flex'>
              <img className='article__card-img m-auto' src={product.images[1]} alt=""/>
              <div>
                <div>{product.name}</div>
                <Button>Заказать</Button>
              </div>
            </div>
            <p className='article__card-txt'>{product.propertyDisplay[0].properties[2].description}</p>
            <div className='article__card-comments mt-2'>
              <p>Комментарии:</p>
              {
                product.comments &&
                  <div>
                    {product.comments.map((comment: string, i: number) => (

                      <p key={i}>
                        {i+1}: {comment}
                      </p>
                    ))}
                  </div>
              }
              <textarea cols={30} ref={(input) => { this.comment = input }}/><br/>
              <Button className='mb-2' onClick={() => this.addComment(index)}>Оставить комментарий</Button>
            </div>
          </div>
        }
      </div>
    )
  }

  getCode (): string {
    let url: string = ''
    if (window.location.href.indexOf('code') >= 0) {
      url = window.location.href.split('code=').reverse()[0]
    }
    return url
  }

  addComment = (index: number) => {
    this.focus()
    if (this.comment.value) {
      // @ts-ignore
      if (!menuData[index].comments) {
        // @ts-ignore
        menuData[index].comments = []
      }
      // @ts-ignore
      menuData[index].comments.push(this.comment.value)
      // @ts-ignore
      this.forceUpdate()
    }
  }

}