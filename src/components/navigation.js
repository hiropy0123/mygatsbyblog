import React, { Component } from 'react'
import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

class Navigation extends Component {
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
          <li style={this.styles.li}>
            <Link to='/'>Home</Link>
          </li>
          <li style={this.styles.li}>
            <Link to='/about/'>About</Link>
          </li>
          <li style={this.styles.li}>
            <Link to='/works/'>Works</Link>
          </li>
          <li style={this.styles.li}>
            <Link to='/access/'>Access</Link>
          </li>
          <li style={this.styles.li}>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}


export default Navigation
