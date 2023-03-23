import { createContext, useState } from 'react';

const ProductsContext = createContext();
function Providerpro({ children }) {
  // Global States ------------------
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState();
  const [currentProduct, setCurrentProduct] = useState();

  // Functions To Change Global States--------------
  const addToCartFn = (p, itemCount) => {
    p.itemCount = itemCount;
    console.log(p);
    setCart([...cart, p]);
  };
  const removeFromCartFn = (p) => {
    // const elements = cart.filter((prod) => prod.id !== p.id);
    // setCart(elements);
    console.log(cart);
  };
  const setProductsFn = (ps) => setProducts(ps);
  const setCurrentProductFn = (p) => {
    setCurrentProduct(p);
  };

  //values to be shared with All Aplication
  const valueToShare = {
    cart,
    addToCartFn,
    removeFromCartFn,
    products,
    setProductsFn,
    currentProduct,
    setCurrentProductFn,
  };
  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
}

export { Providerpro };
export default ProductsContext;
