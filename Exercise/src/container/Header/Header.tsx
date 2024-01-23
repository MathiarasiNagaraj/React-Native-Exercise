import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'
import { TITLE } from '../../constants/commonConstants'

export const Header = () => {
  return (
      <View style={styles.flex}>
          <Text style={styles.title}>
              {TITLE}
      </Text>
      <Image source={require('../../assets/images/icons/shoppingCart.svg')} style={ styles.img} />
     
 </View>
  )
}
const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
justifyContent:'space-between'
    
  },
  title: {
    
    fontSize: 23,
    fontWeight: "700",
    color:'#000000'
  },
  img:{
    height: 100,
    width: 100,
   // backgroundColor: '#000000',
    //color:'#ffffff'
  }
})