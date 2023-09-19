import { useEffect, useState } from 'react';
 export function usePathname() {
   const [pathname, setPathname] = useState('');

   useEffect(() => {
     setPathname(window.location.pathname);
     const handleRouteChange = () => setPathname(window.location.pathname);
     window.addEventListener('popstate', handleRouteChange);
     return () => {
       window.removeEventListener('popstate', handleRouteChange);
     };
   }, []);

  return pathname;
}