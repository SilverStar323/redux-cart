import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";

export const ProductCard = ({ product }) => {
  const products = useSelector(state => state.cartState.cartList);
  const dispatch = useDispatch();
  
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, name, price, image } = product;
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isProductIn = products.find(item => item.id === id);
    setIsAdded(Boolean(isProductIn));
  }, [cartList, id, products]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isAdded
          ? <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
          : <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        }
      </div>
    </div>
  )
}