import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Photography from './components/Photography';
import Software from './components/Software';
import About from './components/About';
import Contact from './components/Contact';
import Collection from './components/Collection';
import CategoryDetail from './components/CategoryDetail';
import CategoriesGrid from './components/CategoriesGrid';
import './App.css';

// Layout component to conditionally render header
const Layout = () => {
  const location = useLocation();
  
  // Check if we're in a category detail page
  const isCategoryPage = location.pathname.includes('/category/');
  
  return (
    <div className="App">
      {!isCategoryPage && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/software" element={<Software />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection/:type" element={<Collection />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
          <Route path="/categories" element={<CategoriesGrid />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
