import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';


interface ShopingCartItemProps {
   cartItem : {
       id:string,
quantity:number,
    
    item : {
        id:String,
        title:String,
        image:String,
        avgRating:number,
        ratings:number,
        price:number,
        oldPrice?:number,
        option:string
    };
};
}

const  ShopingCartItem = ({cartItem}:ShopingCartItemProps) => {
  const   {quantity:quantityProp,item} = cartItem;
  const [quantity,setQuantity] = useState(quantityProp)

  return (

    <View style={styles.root} >
          <View style={styles.row}>
    <Image style={styles.image} source={{ uri: item.image}} />
    <View style={styles.rightContainer}>
      <Text style={styles.title} numberOfLines={3}> {item.title}</Text>
      {/*rating*/}
      <View style={styles.ratingsContainer}>
          {[0,0,0,0,0].map((el,i)=> (
        <FontAwesome 
        key={`${item.id}-i`}
        style={styles.star} 
        name={i < Math.floor(item.avgRating) ? 'star' : 'star-half-full' } 
        size={18} 
        color={"#e47911"} />

          ))}
        {/* <FontAwesome style={styles.star} name='star' size={18} color={"#e47911"} />
        <FontAwesome style={styles.star} name='star-half-full' size={18} color={"#e47911"} />
        <FontAwesome style={styles.star} name='star-o' size={18} color={"#e47911"} /> */}
        <Text>{item.ratings}</Text>
      </View>
      <Text style={styles.price}>from ${item.price}
      {item.oldPrice && (<Text style={styles.oldPrice}> ${item.oldPrice} </Text>) }
      </Text>
 
    </View>

    </View>
    <QuantitySelector Quantity={quantity} setQuantity={setQuantity}/>
    </View>
  

  )
}

export default ShopingCartItem;