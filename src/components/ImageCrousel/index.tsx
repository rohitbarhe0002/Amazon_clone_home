import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions,useCa } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';

const ImageCrousel = ({images}:{images:string[]}): JSX.Element => {

    const windowWidth = useWindowDimensions().width;
    const [activeIndex,setActiveindex] = useState(1);
    const  FlatlistUpdate = useCallback(({viewableItems}) => {
        if(viewableItems.length>0)
        {
            setActiveindex(viewableItems[0].index||0);
        }
        console.log(viewableItems,"hhhhhhhhh==============");
    
},[])
  return (
    <View style={styles.root}>
  
        <FlatList
        data={images}
        renderItem={({item})=>(
<Image style={[styles.image,{width:windowWidth-40}]} source={{uri:item}}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth-20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
        viewAreaCoveragePercentThresold:50,
        minimumViewTime:300
        }}
        onViewableItemsChanged={FlatlistUpdate}
            
    

      />
        <View style={styles.dotsContainer}>
       {images.map((item,index)=>{
           <View style={styles.dot,{backgroundColor:index===activeIndex?'#c9c9c9':'#ededed'}}/>
       })}
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    root:{

    },
    image:{
margin:10,
resizeMode:'contain',
height:250,
    },
    dotsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"grey"


    },
    dot: {
        width:20,
        height:20,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#c9c9c9',
        backgroundColor:'#ededed',
        margin:5,

    }

})
export default ImageCrousel;
