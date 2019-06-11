import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.jpg'

const NavLink = props => <Link getProps={isActive} {...props} />

const isActive = ({ isCurrent }) => {
  return {
    className: isCurrent ? 'active' : 'navlink'
  }
}

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `#072044`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >

        {/* Title/Logo */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="OneStepLogo" 
            style={{ 
              borderRadius: '100%',
              border: '6px solid #8EC8BF',
              margin: '0 5px',
              width: '50px' 
            }}/>
          <h1 style={{ margin: 0 }}>
            <NavLink to="/">ne Step</NavLink>
          </h1>
        </span>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </div>
    </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
