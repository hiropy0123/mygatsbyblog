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
    { path: '/contact/', name: 'Contact' }
  ]

  styles = {
    nav: {
      position: 'absolute',
      right: 0
    },
    ul: {
      listStyle: 'none',
      display: 'flex'
    },
    li: {
      marginLeft: '1.6rem'
    }
  }


  render() {
    return (
      <nav style={this.styles.nav}>
        <ul style={this.styles.ul}>
        { 
          this.items.map((data, index) => {
            return (
              <li style={this.styles.li}>
                <Link to={data.path} key={index}>{data.name}</Link>
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
