import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './BottomTabNav';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import ShopingCartScreen from '../../screens/ShopingCartScreen';
import AdressScreen from '../../screens/AdresssScreen';
    const Stack = createStackNavigator();

export default function ShoppingCartStack () {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={ShopingCartScreen} name="Shopping Cart" options={{title:'shoppingcart'}}/>
            <Stack.Screen component={AdressScreen} name="Address" options={{title:'Adress'}}/>


        </Stack.Navigator>
      
    </NavigationContainer>
  );
}