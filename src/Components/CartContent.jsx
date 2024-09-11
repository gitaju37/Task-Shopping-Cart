import { useContext } from "react";
import MyContext from "./Context/MyContext";
import ViewCart from "./ViewCart";
import CartFooter from "./CartFooter";

const CartContent = () => {
  const { cartProducts, increaseQuantity, decreaseQuantity, deleteFromCart, calculateTotal } = useContext( MyContext );

  return (
    <>
      <h2 style={{textAlign:"center"}}>CART PRODUCTS</h2>
      {cartProducts.length === 0 ? (
        <h3 style={{textAlign:"center"}}>Your cart is empty.</h3>
      ) : (
        cartProducts.map( product => (
          <ViewCart
            key={product.id}
            product={product}
            increaseQuantity={() => increaseQuantity( product.id )}
            decreaseQuantity={() => decreaseQuantity( product.id )}
            deleteFromCart={() => deleteFromCart( product.id )}
          />
        ) )
      )}
      <CartFooter total={calculateTotal()} />
    </>
  );
};

export default CartContent;
