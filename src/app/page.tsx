"use client"
import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './Components/LandingPageComponents/HeroSection';
import AboutMe from '@/app/Components/LandingPageComponents/AboutMe';
import Services from './Components/LandingPageComponents/Services';
import Work from './Components/LandingPageComponents/Work';
import Contact from './Components/LandingPageComponents/Contact';
import Header from './Components/Header';
import Portofolio from './Components/LandingPageComponents/Portofolio';
export const ComponentContext = React.createContext(1);

function Page() {
  const [activeComponent, setActiveComponent] = useState(1);

  // Refs for each component
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const PortofolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the active component based on the intersecting element
          switch (entry.target.id) {
            case 'hero-section':
              setActiveComponent(1);
              break;
            case 'about-me':
              setActiveComponent(2);
              break;
            case 'services':
              setActiveComponent(3);
              break;
            case 'work':
              setActiveComponent(4);
              break;
              case 'Portofolio':
              setActiveComponent(5);
              break;
              
            case 'contact':
              setActiveComponent(6);
              break;
            default:
              console.log(1);
              break;
          }
        }
      });
    }, options);

    // Observe the component elements
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (workRef.current) observer.observe(workRef.current);
    if (PortofolioRef.current) observer.observe(PortofolioRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Clean up the observer
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (PortofolioRef.current) observer.unobserve(PortofolioRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    console.log(`Active Component: ${activeComponent}`);
  }, [activeComponent]);

  return (
    <div >
      <ComponentContext.Provider value={activeComponent}>
      <Header />
        <div className=''>
        
        <div>
          
           </div>
          <div ref={heroRef} id="hero-section" className=''>
            <HeroSection />
          </div>
          <div ref={aboutMeRef} id="about-me" className='w-[97vw] overflow-auto'>
            <AboutMe />
          </div>
         
          <div ref={servicesRef} id="services">
            <Services />
          </div>
          <div ref={workRef} id="work">
            <Work />
          </div>
          <div ref={PortofolioRef} id="work" className='w-[97vw] '>
            <Portofolio />
          </div>
          <div ref={contactRef} id="contact">
            <Contact />
          </div>
        </div>
      </ComponentContext.Provider>
    </div>
  );
}

export default Page;