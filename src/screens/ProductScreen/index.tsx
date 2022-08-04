import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import productstyles from './productstyles'
import styles from './styles'
import product from '../../../assets/data/product'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector/index'
import Button from '../../components/Button'
import ImageCrousel from '../../components/ImageCrousel'


const ProductScreen:React.FunctionComponent = () => {

  const  [Quantity,setQuantity] = useState(1);
  
  const [selectedOption, setSelectedOption] = useState('');
  const route = useRoute();
  console.log(route.params,"kkkkkkkkk");
  
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}> {product.title} </Text>
 <ImageCrousel images={product.images}/>
      <Picker>
       
          
          <Picker.Item label="black" value="black" />
          <Picker.Item label="space grey" value="space grey" />
          <Picker.Item label="red" value="red" />
         

      </Picker>
      <Text style={styles.price}>from ${product.price}
        {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice} </Text>)}
      </Text>
      <Text style={styles.description}> ${product.description} </Text>
      <QuantitySelector Quantity={Quantity} setQuantity={setQuantity} />
      <Button text={'Add To Cart'} onPress={()=>{}} containerStyles={{backgroundColor:'#e3c905'}}/>
      <Button text={'Buy Now'} onPress={()=>{}} />
     </ScrollView>
  )
}

export default ProductScreen;




