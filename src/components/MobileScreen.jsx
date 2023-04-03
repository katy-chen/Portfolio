import { useState, useEffect } from 'react';
import '../sass/styles.scss';

export default function MobileScreen() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {   

    const handleScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleScreenSize);
    return() => {
      window.removeEventListener('resize', handleScreenSize);
    }

  },[]);

  return isMobile;
}
