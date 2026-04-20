import { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";




function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
    const clearCart = () => setCart([]);

  return (
    <div>
      <NavBar cartCount={cart.length} />
      <Banner />
     

      <div className="flex justify-center gap-4 my-5">
        <button onClick={() => setView("products")} className="btn">Products</button>
        <button onClick={() => setView("cart")} className="btn">Cart</button>
      </div>

      <div className="p-5">
        {view === "products" ? (
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        )}
      </div>
      
      
      
      <PricingSection/>

       <Footer/>

      <ToastContainer />
    </div>
    
  );
}

export default App;

