import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Julien Froidefond</h1>
        <p>Front-end Architect <br /><i>&amp;&amp;</i><br /> Web developer.</p>
    </header>
)

export default Header
