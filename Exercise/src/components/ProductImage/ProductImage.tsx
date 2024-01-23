import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const ProductImage = ({ detail }) => {
  const navigation = useNavigation();

  const handleProductClick = () => {
console.log('hi')
    navigation.navigate('Product', { detail: detail });
  };
  return (
    <TouchableOpacity onPress={handleProductClick}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
    </TouchableOpacity>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  img: {
    height: 170,
    width: 150,
    margin: 10,
    borderRadius: 10,
  },
});
