import { useState, createContext, useEffect } from 'react';
const NavigationContext = createContext();
function NavigationProvider({ children }) {
  //we use all this to cause rerender when user navigate in my app
  const [currentPath, setCurrentPath] = useState(window.location.pathname); //when user as for any thing in the app first renders it will be the current path
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);
  const navigate = (to) => {
    window.history.pushState({}, '', to); // to update adress bar
    setCurrentPath(to); // to cause app to rerender
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvider };
export default NavigationContext;
