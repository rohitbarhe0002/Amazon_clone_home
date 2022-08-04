
import { StylesContext } from '@material-ui/styles'
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Products from '../../../assets/data/products'
import ProductItem from '../../components/ProductItem';

const HomeScreen = ({searchValue} : {searchValue : string}) => {
  console.log(searchValue,"search value");
  
  return (
    <View style={styles.page}>
    <FlatList
    data={Products}
    renderItem={({item}) => <ProductItem item={item}/>}
    showsVerticalScrollIndicator={false}

/>
    
    </View>
  )
}
const styles = StyleSheet.create({
page: {
  flex:1,
  padding: 10,
},
});
export default HomeScreen;