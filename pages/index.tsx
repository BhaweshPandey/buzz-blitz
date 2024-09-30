/* eslint-disable linebreak-style */
/* eslint-disable radix */

import { useContext, useEffect, useState } from 'react';
import LandingPage9 from './landing-page-9';
import I18nContext from '@/context/i18nContext';


const HomePage = () => {
  function saveScrollPosition() {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition.toString());
  }

  function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', saveScrollPosition);
    setTimeout(restoreScrollPosition, 500);
    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
    };
  }, []);
  

  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  
  return (
    <div dir={language == "ar"? 'rtl' : 'ltr'}>
      {isClient && <LandingPage9 />}
    </div>
  );
}
export default HomePage;
