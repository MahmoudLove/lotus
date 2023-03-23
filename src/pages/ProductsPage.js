import { useContext } from 'react';
import ProductsContext from '../context/productsContext';
import { SlReload } from 'react-icons/sl';
import ProductCard from '../components/ProductsCard';
import NavigationContext from '../context/navigationContext';
function ProductsPage({ isLoading, error }) {
  const { setCurrentProductFn, products } = useContext(ProductsContext);
  const { navigate } = useContext(NavigationContext);
  const handleProductClick = (product) => {
    setCurrentProductFn(product);
    navigate(`/id${product.id}`);
    localStorage.setItem('storedProduct', JSON.stringify(product));
  };
  let content;
  if (isLoading)
    content = (
      <div>
        <SlReload className="text-pink-400 text-[1000px]" />
      </div>
    );
  else if (error) content = <div>Check Your internet Connection Please</div>;
  else {
    const renderedPro = products?.map((pro) => {
      return (
        <ProductCard
          key={pro.id}
          product={pro}
          onClick={() => handleProductClick(pro)}
        ></ProductCard>
      );
    });
    content = (
      <div>
        <section className="flex justify-around border-4 mx-3 my-3 py-5 border-cyan-500 relative">
          <span className="absolute -top-4 bg-white text-red-400 font-bold text-xl">
            OUR PRODUCTS
          </span>
          <h3 className="font-bold text-3xl">LIP GLOSS</h3>
          <h3 className="font-bold text-3xl">PERFUMES</h3>
          <h3 className="font-bold text-3xl">BATH BOMB</h3>
          <h3 className="font-bold text-3xl">MAKHMARYA</h3>
          <h3 className="font-bold text-3xl">ESSENTIAL OIL</h3>
        </section>
        <div>
          <div className="grid grid-parent gap-6 mx-4 my-6 px-6 py-6">
            {renderedPro}
          </div>
          ;
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ProductsPage;
