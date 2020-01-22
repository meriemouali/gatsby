import React from "react"
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage=()=>{
    return(
        <div>
            <Header/>
            <h1>Hello!</h1>
            <h2>I'm Meriem, a Front End developer living in Tunisia</h2>
           {/*the link from gatsby is showing in real time*/}
            <p>Need a developer?<Link to='/contact'>Contact Me</Link></p>
            <Footer/>
        </div>
    )
}
export default IndexPage
