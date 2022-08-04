import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#cfcdca',
      borderRadius: 5,
      backgroundColor: '#fff',
      margin:5,
      marginVertical:5,
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
      marginVertical: 10,
    },
    star: {
      margin: 2,
    }
  
  
  })

  export default styles ;