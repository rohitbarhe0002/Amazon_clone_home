import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
root : {
padding:10,
},
    row:{
       marginVertical:10,
        
    },
    label : {
fontWeight:'bold',
marginHorizontal:5,
    },
    input:{
        height:40,
        backgroundColor:'#fff',
        padding:10,
        marginVertical:5,
        borderRadius:2,
        borderWidth:1,
        borderColor:'light-grey',
    },
    errorLabel : {
        color:'red'
    }
})

export default styles;