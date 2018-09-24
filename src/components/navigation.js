import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

class Navigation extends Component {
  items = [
    { path: '/', name: 'Home' },
    { path: '/about/', name: 'About' },
    { path: '/works/', name: 'Works' },
    { path: '/access/', name: 'Access' },
    { path: '/contact/', name: 'Contact' },
    { path: '/blog/', name: 'blog' },
  ]

  styles = {
    nav: {
      position: 'absolute',
      top: '35px',
      right: 0
    },
    ul: {
      listStyle: 'none',
      display: 'flex'
    },
    li: {
      marginLeft: '1.6rem',
      marginRight: '1.6rem'
    },
    a: {
      textDecoration: 'none',
      color: '#fff'
    }
  }


  render() {
    return (
      <nav style={this.styles.nav}>
        <ul style={this.styles.ul}>
        { 
          this.items.map((data, index) => {
            return (
              <li key={index} style={this.styles.li}>
                <Link to={data.path} style={this.styles.a}>{data.name}</Link>
              </li>
            )
          })
        }
        </ul>
      </nav>
    )
  }
}


export default Navigation
