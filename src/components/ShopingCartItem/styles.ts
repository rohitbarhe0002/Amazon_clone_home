import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    root: {
      borderWidth: 1,
      borderColor: '#cfcdca',
      borderRadius: 10,
      backgroundColor: '#fff',
      margin:5,
      marginVertical:5,
    },
    row : {
    flexDirection:'row'
    },
    image: {
      flex: 2,
      height: 150,
      resizeMode: 'contain',
    },
    rightContainer: {
      padding: 10,
      flex: 3,
      // backgroundColor:'red'
    },
    title: {
      fontSize: 18,
  
    },
    price: {
  
      fontSize: 18,
      fontWeight: 'bold',
    },
    oldPrice : {
  
      fontSize:12,
      fontWeight:'normal',
      textDecorationLine:'line-through'
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    star: {
      margin: 2,
    },
    quantityConatainer : {
margin:5,

    }
  })

  export default styles ;