// src/pages/index.js
import * as React from "react"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "../pages/ Home"

import "../styles/styles.css"; 

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка на початок сторінки при завантаженні
  }, []);
  return (
    <>
      <Helmet>
        <title>Serhii Chabanow's Personal Website</title>
      </Helmet>


      <Header />
      <Home />
      <Footer />
    </>
  )
}

