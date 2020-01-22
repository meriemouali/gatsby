import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'



const AboutPage=()=>{
    return(
        <Layout>
        <h1>About Me</h1>
        <p>Bio </p>
        <Link to='/contact'>Want to reach me? REACH OUT!</Link>
        </Layout>)
}
export default AboutPage