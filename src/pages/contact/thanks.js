import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const ThanksPage = () => (
  <Layout>
    <h1>Your Email sent!</h1>
    <p>お問い合わせありがとうございました。</p>
    <Link to="/" exact>Top</Link>
  </Layout>
)

export default ThanksPage
