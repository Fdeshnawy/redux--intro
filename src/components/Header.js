import classes from "./Header.module.css";
import { useSelector ,useDispatch } from "react-redux";
import { authActions } from '../store/index';
const Header = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const logOutHandler = () =>{
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;