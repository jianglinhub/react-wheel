import React from 'react'
import Layout from './layout'
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside'

export default function () {
  return (
    <div>
      <div>
        <h1>例1</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>例2</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header></Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>例3</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Header></Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
      <div>
        <h1>例4</h1>
        <Layout style={{ height: 500 }} className="hi">
          <Aside>aside</Aside>
          <Layout>
            <Header></Header>
            <Content>content</Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}