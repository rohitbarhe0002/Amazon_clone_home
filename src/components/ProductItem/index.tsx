

















import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Pinterest } from '@material-ui/icons'

interface ProductItemProps {
    item : {
        id:String,
        title:String,
        image:String,
        avgRating:number,
        ratings:number,
        price:number,
        oldPrice?:number,
    };
}

const ProductItem = ({item}:ProductItemProps) => {
  const navigation = useNavigation();
const onPress = () => {

navigation.navigate('Productdetails',{id:item.id})


}
const restValue = item.avgRating -  Math.floor(item.avgRating)
  return (
 
    <Pressable onPress={onPress} style={styles.root}>
    <Image style={styles.image} source={{ uri: item.image}} />
    <View style={styles.rightContainer}>
      <Text style={styles.title} numberOfLines={3}> {item.title}</Text>
      {/*rating*/}
      <View style={styles.ratingsContainer}>
     
          {[0,0,0,0,0].map((el,i)=> (
            <View>
          


        <FontAwesome 
        key={`${item.id}-i`}
        style={styles.star} 
        name={ i <  Math.floor(item.avgRating) ? 'star' : (restValue&& i < item.avgRating ) ? 'star-half-full': 'star-o'  } 
        size={18} 
        color={"#e47911"} />
</View>
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

  </Pressable>
  )
}

export default ProductItem;