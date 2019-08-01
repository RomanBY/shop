import React, { Component } from 'react'
import '../../assets/style/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {menuData} from '../../modules/api'
import TodoCard from './TodoCard'
import { Button} from 'reactstrap'

export default class Content extends Component <{}, any> {

  constructor (props: any) {
    super(props)
    this.state = {
      products: []
    }
  }


  render () {
    let arr: object[] = this.state.products
    return (
      <main className="App-header">
        <h3>Sort by price</h3>
        <div>
          <Button onClick={this.sortCheap} >Cheap</Button>
          <Button className='ml-1' onClick={this.SortExpansive} >Expansive</Button>
        </div>
        <div className="main__content">
          {
            arr.map((item: object, index: number) => (
                <div
                  className="main__content-card ml-auto mr-auto mt-2 mb-2"
                  key={index}
                >
                  <TodoCard
                    item={item}
                  />
                </div>
              )
            )}
        </div>
      </main>
    )
  }

  async componentDidMount () {
    this.setState({
      products: menuData
    })

  }

  sortCheap = () =>{
    let arr: object[] = this.state.products.sort((a, b) => {
      if (a.priceBase < b.priceBase) return -1
      if (a.priceBase > b.priceBase) return 1
      return 0
    })
    this.setState({
      products: arr
    })
  }

  SortExpansive = () =>{
    let arr: object[] = this.state.products.sort((a, b) => {
      if (a.priceBase < b.priceBase) return 1
      if (a.priceBase > b.priceBase) return -1
      return 0
    })
    this.setState({
      products: arr
    })
  }
}