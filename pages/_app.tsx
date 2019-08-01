import App, {Container} from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {autorization} from '../store/store'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Provider store={autorization}>
      <Container>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </Container>
    </Provider>
  }
}