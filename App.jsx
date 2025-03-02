import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopComopents from "./components/TopComopents";
import TailoringService from "./components/TailoringService";
import Product from "./components/Product";
import FashionGallery from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TopComopents />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<TailoringService />} />
        <Route path="/products" element={<Product />} />
        <Route path="/abouts" element={<FashionGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
