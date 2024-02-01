import { Route, RouterProvider, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPages'
import ProductsPage from './pages/ProductsPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<ProductsPage /> } />
      <Route path="/about" element={<AboutPage /> } />
    </Routes>
    <Footer/>
    </>
  )}
export default App;



