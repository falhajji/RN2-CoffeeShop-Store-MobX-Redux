import { createStackNavigator } from "react-navigation";

import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const MyStack = createStackNavigator(
  {
    // HomePage: HomePage,
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

export default MyStack;
