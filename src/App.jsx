import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Blogs from './components/Blogs/Blogs';

const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About />
            <Experience />
            <Portfolio />
            <Blogs></Blogs>
            <Contact />
            <Testimonials />
            <Footer />
        </>
    );
};

export default App;