import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p className="text-center">
        <Link to="/profile/">
          <br />
          <strong>{title}</strong>
        </Link>
      </p>
    </div>
  </div>
)

export default Footer
