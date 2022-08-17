import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cartItems,

    addToCart: (item) => {
      if (cartItems.find((x) => x.id === item.id)) {
        if (item.count === 0) {
          setCartItems(cartItems.filter((x) => x.id !== item.id));
        } else {
          setCartItems(cartItems.map((x) => (x.id === item.id ? { ...x, count: item.count } : x)));
        }
      } else {
        setCartItems([...cartItems, item]);
      }
    },

    getItemCount: (id) => cartItems.find((x) => x.id === id)?.count ?? 0,

    deleteItem: (id) => setCartItems(cartItems.filter((x) => x.id !== id)),
  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

// TODO: useCart custom hook

export default CartContext;
