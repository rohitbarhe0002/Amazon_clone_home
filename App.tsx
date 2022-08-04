
import 'react-native-gesture-handler';
import { StyleSheet,SafeAreaView, Text, StatusBar,View } from 'react-native';
import ProductItem from './src/components/ProductItem';
import AdressScreen from './src/screens/AdresssScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShopingCartScreen from './src/screens/ShopingCartScreen'

import Router from './src/components/Router';

export default function App() {


  return (

<View style={styles.root}>
  <StatusBar backgroundColor={'#e37911'}/>
    <Router/>

</View>

 
  );
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }

});
