import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import { Text,SafeAreaView, View, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import { useState } from 'react';

    const Stack = createStackNavigator();
    interface HeaderComponentProps {
searchValue : string,
setSearchvalue : () => void;
    }
    const HeaderComponent = ( {searchValue,setSearchValue}:HeaderComponentProps ) => {


        return (
            <SafeAreaView style={{height:50,backgroundColor:'#22e3dd'}}>
                <View style={{margin:10,flex:1,backgroundColor:'white',padding:5,flexDirection:'row',alignItems:'center'}}>
                    <Feather name="search" size={20}/>
      <TextInput onChangeText={setSearchValue} placeholder='search' value={searchValue}   style={{height:40,marginLeft:10}}/>
      </View>
        </SafeAreaView>)
       
    }
export default function HomeStack() {

const [searchValue,setSearchValue] = useState('');
  return (
    <NavigationContainer independent={true} >
        
        <Stack.Navigator screenOptions={{ headerShown:false,
            header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        }}>
             {/* pass props to screen */}
            <Stack.Screen name="HomeScreen"  options={{title:'Home'}}> 
            {()=><HomeScreen searchValue={searchValue}/>}
            </Stack.Screen>
            <Stack.Screen component={ProductScreen} name="Productdetails"  options={{title:'Product Details'}} />
         

        </Stack.Navigator>
    
    </NavigationContainer>
  );
}