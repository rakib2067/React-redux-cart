import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
const CartItem = (props) => {
  const { title, quantity, totalPrice, price, itemId } = props.item;

  const dispatch = useDispatch();
  const addHandler = () => {
    const item = {
      itemId: itemId,
      price: price,
      name: title,
    };

    dispatch(cartActions.addItem(item));
  };
  const removeHandler = () => {
    dispatch(cartActions.removeItem(itemId));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
