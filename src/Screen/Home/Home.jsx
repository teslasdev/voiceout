import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Blogs from '../../components/Section/Campaigns/Blogs';
import Campaigns from '../../components/Section/Campaigns/Campaigns';
import Events from '../../components/Section/Campaigns/Events';
import Contact from '../../components/Section/Contact/Contact';
import Footer from '../../components/Section/Footer/Footer';
import Involve from '../../components/Section/Involve/Involve';
import Section from '../../components/Section/Section';
import Sponsors from '../../components/Section/Sponsors/Sponsors';
import Testimonial from '../../components/Section/Testimonial/Testimonial';



const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Section />
      <Involve />
      <Campaigns />
      <Sponsors />
      <Events />
      <Testimonial />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home