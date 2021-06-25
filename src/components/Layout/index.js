import React from 'react'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
    <Header />   
    {props.children}
    </>
   )

 }

export default Layout