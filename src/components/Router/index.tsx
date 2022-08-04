import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './BottomTabNav';
import { createStackNavigator } from '@react-navigation/stack'
    const Root = createStackNavigator();

export default function Router() {

  return (
    <NavigationContainer independent={true}>
        <Root.Navigator screenOptions={{headerShown:false}}>
            <Root.Screen component={BottomTabNav} name="HomeTabs"/>
        </Root.Navigator>
    </NavigationContainer>
  );
}