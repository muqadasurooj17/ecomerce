import { Routes, Route } from 'react-router-dom';
import Home from "./screens/home";
import ProductDetails from './screens/productDetails';
import NotFound from './screens/notFound';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={< ProductDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
