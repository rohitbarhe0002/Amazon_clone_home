import { View, Text, TextInput, Alert, KeyboardAvoidingView, Platform,ScrollView } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import countryList from  'country-list';
import { useState } from 'react';
import Button from '../../components/Button';
const AdressScreen = () => {
    const countries = countryList.getData();
    const [country,setCountry] = useState(countries[0].code);
    const [fullname,setfullname] = useState('');
    const [phone,setPhone] = useState('');
    const [adress,setAdress] = useState('');
    const [adressError,setAdressError] = useState('invalid error adress');

    const [city,setCity] = useState('');

    const onCheckout = () => {
        if(!fullname) {
           Alert.alert('please enter fullname ');
           return;
        }
        if(!phone && phone.length < 10 ) {
            Alert.alert('please enter phonenmber and muust be  10 number ');
            return;
         }
         if(!fullname) {
            Alert.alert('please enter fullname ');
            return;
         }
         if(!fullname) {
            Alert.alert('please enter fullname ');
            return;
         }

        console.warn('checkout successfully');
    }
    

  return (
      <KeyboardAvoidingView
      behavior={Platform.os === 'ios'? 'padding':'height'}
      keyboardVerticalOffset={Platform.os === 'ios' ? 10 :0}>
    <ScrollView style={styles.root}>
   <View style={styles.row}>
       <Picker selectedValue={country} onValueChange={setCountry}>
           {countries.map (country => (
            <Picker.Item value={country.code} label={country.name}/>
           ))}
           
       </Picker>
   </View>
   {/* fullname */}
   <View style={styles.row}>
       <Text style={styles.label}> Full Name(First name and Last name)</Text>
       <TextInput style={styles.input} placeholder={'full name'} onChangeText={setfullname} value={fullname}/>
   </View>
  {/* phonenumber */}
  <View style={styles.row}>
       <Text style={styles.label}> Phone</Text>
       <TextInput style={styles.input} placeholder={'Phone numnber'} onChangeText={setPhone} value={phone} keyboardType={'phone-pad'}/>
   </View>
{/* adress filed */}
<View style={styles.row}>
       <Text style={styles.label}> Adress </Text>
       <TextInput style={styles.input} placeholder={'adress or street number'} value={adress} onChangeText={(text)=>{setAdress(text),setAdressError('')}}/>
       {adressError && <Text style={styles.errorLabel}>{adressError}</Text> }
   </View>
   {/* city */}
   <View style={styles.row}>
       <Text style={styles.label}> City </Text>
       <TextInput style={styles.input} placeholder={'City'} value={city} onChangeText={setCity}   />
   </View>
   {/* Zip code  */}
   <View style={{flex:1,flexDirection:'row',width:"100%"} }>
       <View style={{width:"50%"}}>
       <Text style={styles.label}> Postal Code </Text>
       <TextInput style={{marginHorizontal:10,
        // width:'50%',
        height:40,
        backgroundColor:'#fff',
        padding:10,
        marginVertical:5,
        borderRadius:2,
        borderWidth:1,
        borderColor:'light-grey',}} placeholder={'City'} value={city} onChangeText={setCity}   />
       </View>

       <View style={{width:"50%"}}>
       <Text style={[styles.label]}> Zip Code </Text>
       <TextInput style={{marginHorizontal:10,
        // width:'50%',   
        height:40,
        backgroundColor:'#fff',
        padding:10,
        marginVertical:5,
        borderRadius:2,
        borderWidth:1,
        borderColor:'light-grey',}} placeholder={'City'} value={city} onChangeText={setCity}   />
       </View>
   </View>
   <Button text={'Checkout'} onPress={onCheckout}/>
   </ScrollView>
   </KeyboardAvoidingView>
    
  )
}

export default AdressScreen