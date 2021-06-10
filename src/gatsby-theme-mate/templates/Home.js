import React from 'react';
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
// import Header from './Header';
import Landing from 'gatsby-theme-mate/src/sections/Landing';
import About from 'gatsby-theme-mate/src/sections/About';
import Projects from 'gatsby-theme-mate/src/sections/Projects';
import Writing from 'gatsby-theme-mate/src/sections/Writing';
import Footer from './Footer';

// import Certifications from './Certifications';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default Home;
