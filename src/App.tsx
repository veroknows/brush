import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import MyArtsPage from './pages/MyArtsPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import LoadingScreen from './components/LoadingScreen';
import { defaultImages, ImageConfig } from './config/images';
import MyServicesPage from './pages/MyServicesPage';

interface AppProps {
  images?: ImageConfig;
}

function App({ images = defaultImages }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <CartProvider>
        {isLoading ? (
          <LoadingScreen 
            images={images} 
            onLoadingComplete={handleLoadingComplete}
            minDisplayTime={3000} // 3 seconds minimum display time
          />
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage images={images} />} />
              <Route path="/services" element={<MyServicesPage />} />
              <Route path="/arts" element={<MyArtsPage images={images} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Layout>
        )}
      </CartProvider>
    </Router>
  );
}

export default App;
