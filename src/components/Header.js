import { useContext } from 'react';
import classNames from 'classnames';
import NavigationContext from '../context/navigationContext';

function Header({ className }) {
  const { navigate } = useContext(NavigationContext);
  const headerStyle = classNames(
    'uppercase text-2xl text-white py-2 px-2 font-bold border-b-4 border-b-transparent hover:border-b-red-400',
    className
  );
  return (
    <div className="bg-cyan-500 flex justify-between items-center">
      <div className="h-full w-20 py-3">
        <img
          src={require('../images/headerLogo.png')}
          className="h-full w-full"
          alt="the ahghah"
        />
      </div>
      <div className="flex gap-4">
        <span className={headerStyle} onClick={() => navigate('/')}>
          home
        </span>
        <span className={headerStyle}>store</span>
        <span className={headerStyle} onClick={() => navigate('/perfumes')}>
          perfumes
        </span>
        <span className={headerStyle}>cart</span>
        <span className={headerStyle}>contact us</span>
      </div>
    </div>
  );
}

export default Header;
