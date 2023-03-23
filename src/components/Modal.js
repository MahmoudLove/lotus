import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import NavigationContext from '../context/navigationContext';

function Modal({ children, onClose, path }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = () => {
    onClose();
    if (path) {
      navigate(path);
    }
  };
  return createPortal(
    <div className="bg-cyan-500 mb-2 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
      <div className="border-b-2 border-white flex justify-between">
        <h5>LOTUS STORE</h5>
        <RxCross1 onClick={handleClick} className="text-lg cursor-pointer" />
      </div>
      <p>{children}</p>
    </div>,
    document.getElementById('modal')
  );
}
export default Modal;
