import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import ShopingCartScreen from '../../screens/ShopingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
   
  return (
    <Tab.Navigator tabBarOptions={{showLabel:false,inactiveTintColor:'#ffbd7d' ,activeTintColor:'#e47911'}} screenOptions={{headerShown:false}}>
         <Tab.Screen name="Home" component={HomeStack} options={{  tabBarIcon : ({color})=>(
            <Entypo name="home" color={color} size={25}/>
        ), }} 
         />
        <Tab.Screen name="Profile" component={HomeScreen} options={{  tabBarIcon : ({color})=>(
            <Entypo name="user" color={color} size={25}/>
        ), }} 
         />
         
         <Tab.Screen name="shoppingCart" component={ShoppingCartStack} options={{  tabBarIcon : ({color})=>(
            <Entypo name="shopping-cart" color={color} size={25}/>
        ), }} 
         />
           <Tab.Screen name="more" component={ShopingCartScreen} options={{  tabBarIcon : ({color})=>(
            <Entypo name="menu" color={color} size={25}/>
        ), }} />
  
      </Tab.Navigator>
  )
}

export default BottomTabNav