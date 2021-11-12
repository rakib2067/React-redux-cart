import classes from "./CartButton.module.css";
import { uiActions } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleVisible = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={toggleVisible} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
