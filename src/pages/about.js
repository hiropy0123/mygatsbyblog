import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>This is About page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
