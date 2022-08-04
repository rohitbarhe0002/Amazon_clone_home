
import { StylesContext } from '@material-ui/styles'
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Products from '../../../assets/data/cart'
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

import ShopingCartItem from '../../components/ShopingCartItem';

const ShopingCartScreen = () => {
    const navigation = useNavigation();
    const totalPrice = Products.reduce (
        (summedPrice,product)=>
        summedPrice+product.item.price*product.quantity,0,
    )
    const omCheckout = () => {
        navigation.navigate('Address')
    }
  return (
    <View style={styles.page}>
      
    <FlatList
    data={Products}
    renderItem={({item}) => <ShopingCartItem cartItem={item}/>}
    showsVerticalScrollIndicator={false}
   showsHorizontalScrollIndicator={false}
   ListHeaderComponent={()=>(
    <View>
    <Text style={{fontSize:18,fontWeight:'bold'}}>
        Subtotal({Products.length}items):{' '}
        <Text style={{color:'#e47911'}}>${totalPrice.toFixed(2)}</Text>

    </Text>
    <Button text={'Proceed to checkout' } onPress={omCheckout} containerStyles={{backgroundColor:'#f7e300',borderColor:'#c7b702'}}/>
</View>

   )}
/>
    
    </View>
  )
}
const styles = StyleSheet.create({
page: {
  padding: 10,

},
});
export default ShopingCartScreen;