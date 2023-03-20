import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Section/Footer/Footer'
import Contact from '../../components/Section/Contact/Contact'
import Donate from '../../components/Section/Donate/Donate'

const Donation = () => {
  return (
    <>
      <Header type="sticky"/>
      <Donate />
      <Contact />
      <Footer />
    </>
  )
}

export default Donation