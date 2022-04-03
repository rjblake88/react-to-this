/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
