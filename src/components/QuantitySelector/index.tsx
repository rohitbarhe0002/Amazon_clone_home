import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const QuantitySelector = ({ Quantity, setQuantity }) => {

  const onMinus = () => {
    setQuantity(Math.max(0, Quantity - 1));

  }

  const onPlus = () => {
    setQuantity(Quantity + 1)
  }
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{Quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: '#e3e3e3',
    width: 100,

  },

  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#d1d1d1',


  },
  buttonText: {
    fontSize: 18,

  },
  quantity: {
    color: '#007eb9'
  }
})
export default QuantitySelector