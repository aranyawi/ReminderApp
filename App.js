import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from  './screen/Home';
import Register from './screen/Register';
import Condition from './screen/Condition';
import Map from './screen/Map';
import Shoplogin from './screen/Shoplogin';
import Shopcondition from './screen/Shopcondition';
import Tabs from './screen/Tabs';
import TabNotification from './screen/TabNotification';
import Review from './screen/Review';
import Profile from './screen/Profile';
import ShopMap from './screen/ShopMap';
import ShopProfile from './screen/ShopProfile';
import EditShopProfile from './screen/EditShopProfile';
import AddProduct from './screen/AddProduct';
import ShopReview from './screen/ShopReview';
import BestSeller from './screen/BestSeller';
import RegisterCus from './screen/RegisterCus';
import LoginCus from './screen/LoginCus';
import Stock from './screen/Stock';


const App = () => {

const Stack = createStackNavigator();

const Menu = () => {
  return(
<Stack.Navigator screenOptions={{headerShown:true,headerBackTitleVisible:false,headerTransparent:true}}initialRouteName="Home">
<Stack.Screen name="Home" component={Home}options={{title:""}}/>
  <Stack.Screen name="Register" component={Register}options={{title:""}}/>
  <Stack.Screen name="Condition" component={Condition}options={{title:""}}/>
  <Stack.Screen name="Map" component={Map}options={{title:""}}/>
  <Stack.Screen name="Shoplogin" component={Shoplogin}options={{title:""}}/>
  <Stack.Screen name="Shopcondition" component={Shopcondition}options={{title:""}}/>
  <Stack.Screen name="Tabs" component={Tabs}options={{title:""}}/>
  <Stack.Screen name="TabNotification" component={TabNotification}options={{title:""}}/>
  <Stack.Screen name="Review" component={Review}options={{title:""}}/>
  <Stack.Screen name="Profile" component={Profile}options={{title:""}}/>
  <Stack.Screen name="ShopMap" component={ShopMap}options={{title:""}}/>
  <Stack.Screen name="ShopProfile" component={ShopProfile}options={{title:""}}/>
  <Stack.Screen name="EditShopProfile" component={EditShopProfile}options={{title:""}}/>
  <Stack.Screen name="AddProduct" component={AddProduct}options={{title:""}}/>
  <Stack.Screen name="ShopReview" component={ShopReview}options={{title:""}}/>
  <Stack.Screen name="BestSeller" component={BestSeller}options={{title:""}}/>
  <Stack.Screen name="RegisterCus" component={RegisterCus}options={{title:""}}/>
  <Stack.Screen name="LoginCus" component={LoginCus}options={{title:""}}/>
  <Stack.Screen name="Stock" component={Stock}options={{title:""}}/>
</Stack.Navigator>)
}

return (
<NavigationContainer>
  <Menu/>
</NavigationContainer> 
)
};
export default App;
