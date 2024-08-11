import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import { useSelector } from "react-redux";

export const Cart = () => {
  const products = useSelector(state => state.cartState.cartList);
  const totalAmount = useSelector(state => state.cartState.total);
  const { total, cartList } = useCart();
  useTitle("Cart");
  
  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length} / ${totalAmount}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
