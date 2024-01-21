import { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCartClick = (e, product) => {
    e.preventDefault();
    //    add to cart
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success(`${product.name} added to cart!!✌️✌️`);
  };

  useEffect(() => {
    let existingItems = localStorage.getItem("cart");
    if (existingItems) {
      setCart(JSON.parse(existingItems));
    }
  }, []);

  const contextValue = {
    cart,
    handleCartClick,
    setCart,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

//custom hook
const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within the CartProvider');
  }

  return context;
}

export { useCart, CartProvider };
