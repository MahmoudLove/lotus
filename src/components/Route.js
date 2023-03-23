import { useContext } from 'react';
import NavigationContext from '../context/navigationContext';
function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);
  if (path === currentPath) {
    return children;
  } else if (path.includes('id') && currentPath.includes('id')) {
    return children;
  } else return null;
}

export default Route;
