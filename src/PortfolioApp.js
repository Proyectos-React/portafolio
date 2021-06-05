import React, { useEffect } from 'react';
import './styles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card } from './partials/Card';
import { About } from './partials/About';
import { Skills } from './partials/Skills';
import { Footer } from './partials/Footer';

export const PortfolioApp = () => {
    
    useEffect(() => {
        AOS.init({
            once: true
        })
    },[]);
    
    return (
        <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
            <div data-aos="fade-down" data-aos-duration="800">
                <Card />
            </div>
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <About />
                <Skills />
                <Footer />
            </div>
        </div>
    )
}
