import { useContext } from 'react';
import ProductsPage from './pages/ProductsPage';
import OneProductPage from './pages/OneProductPage';
import { useFetchProductsQuery } from './store';
import ProductsContext from './context/productsContext';
import Route from './components/Route';

import Header from './components/Header';
import Footer from './components/Footer';
import PerfumesPage from './pages/PerfumesPage';
function App() {
  const { data, error, isLoading } = useFetchProductsQuery();
  const { setProductsFn } = useContext(ProductsContext);

  if (!isLoading || error) {
    setProductsFn(data);
  }
  return (
    <div>
      <Header></Header>
      <Route path="/">
        <ProductsPage isLoading={isLoading} error={error} />
      </Route>
      <Route path="/id">
        <OneProductPage />
      </Route>
      <Route path="/perfumes">
        <PerfumesPage />
      </Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
