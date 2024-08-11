import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { removeFromCart } = useCart();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}
