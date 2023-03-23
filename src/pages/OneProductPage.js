import { useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import ProductsContext from '../context/productsContext';
import Modal from '../components/Modal';
import Button from '../components/Button';

function OneProductPage() {
  const { currentProduct, setCurrentProductFn, products } =
    useContext(ProductsContext);
  const [productToShow, setProductToshow] = useState(currentProduct);
  const [itemCount, setItemCount] = useState(1);
  const { addToCartFn, removeFromCartFn } = useContext(ProductsContext);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const modal = (
    <Modal onClose={handleClose} path="/">
      Product Added TO Cart
    </Modal>
  );
  if (!productToShow) {
    let item = JSON.parse(localStorage.getItem('storedProduct'));
    if (item) {
      setProductToshow(item);
      setCurrentProductFn(item);
    } else {
      const itemId = parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 1)
      );
      if (products) {
        item = products.filter((prod) => prod.id === itemId);
        setProductToshow(...item);
        setCurrentProductFn(...item);

        localStorage.setItem('storedProduct', JSON.stringify(...item));
      }
    }
  }

  if (productToShow) {
    return (
      <div className="m-10">
        {showModal && modal}
        <div className="text-center mb-4">
          <img
            src={faker.image.business()}
            alt="just"
            className="inline-block"
          />
        </div>
        <h1 className="text-center font-bold text-3xl mb-2">
          {productToShow.title}
        </h1>
        <div className="text-center mb-6">
          <h4 className="inline font-bold py-1 bg-cyan-500 text-white">
            {productToShow.type}
          </h4>
        </div>
        <h3 className="pb-1 border-b-[3px] border-black mb-2 uppercase">
          DETAILS
        </h3>
        <p className="text-xl mb-8">{productToShow.details}</p>
        <div className="flex justify-around mb-5">
          <div className="inline-flex flex-col items-center">
            <h3 className="mb-4 text-2xl">Quantity</h3>
            <div className="flex border-zinc-500 border-2">
              <button
                className="py-3 px-5 text-3xl text-zinc-500"
                onClick={() => {
                  if (itemCount <= 1) return;
                  setItemCount(itemCount - 1);
                }}
              >
                -
              </button>
              <p className="py-3 px-5 text-3xl">{itemCount}</p>
              <button
                className="py-3 px-5 text-3xl text-zinc-500"
                onClick={() => setItemCount(itemCount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="inline-flex flex-col items-center">
            <h3 className="mb-4 text-2xl uppercase">price total</h3>
            <p className="text-5xl uppercase">
              {productToShow.price * itemCount} EGP
            </p>
          </div>
        </div>
        <Button
          product
          onClick={() => {
            removeFromCartFn();
          }}
        >
          place all your orders
        </Button>
        <Button
          cart
          onClick={() => {
            addToCartFn(productToShow, itemCount);
            handleShow();
          }}
        >
          Add product to cart
        </Button>
      </div>
    );
  }
}

export default OneProductPage;
