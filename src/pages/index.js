import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Backdrop from "../components/backdrop"
import Content from "../components/content"
import "./index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Living Skin" />
      <div className="App">
        <Content email={undefined} setEmail={undefined} />
        <Backdrop />
      </div>
    </Layout>
  )
}

export default IndexPage
