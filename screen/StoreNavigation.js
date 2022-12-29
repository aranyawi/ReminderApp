import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../screen/Store';
import Store2 from '../screen/Store2';
import Products from '../screen/Products';
import History from '../screen/History';
import Notification from '../screen/Notification';


const StoreNavigation = () => {

const Stack = createStackNavigator();

const MenuStore = () => {
  return(
<Stack.Navigator screenOptions={{headerShown:false,headerBackTitleVisible:false,headerTransparent:true}}>
  <Stack.Screen name="Store" component={Store}options={{title:""}}/>
  <Stack.Screen name="Store2" component={Store2}options={{title:""}}/>
  <Stack.Screen name="Products" component={Products}options={{title:""}}/>
  <Stack.Screen name="History" component={History}options={{title:""}}/>
  <Stack.Screen name="Notification" component={Notification}options={{title:""}}/>
</Stack.Navigator>)
}

return (
<NavigationContainer independent={true}>
  <MenuStore/>
</NavigationContainer> 
)
};
export default StoreNavigation;
