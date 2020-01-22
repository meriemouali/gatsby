import React from 'react'
import {Link} from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage=()=>{
    return(
        <div>
            <Header/>
        <h1>About Me</h1>
        <p>Bio </p>
        <Link to='/contact'>Want to reach me? REACH OUT!</Link>
        <Footer/>
        </div>
    )
}
export default AboutPage