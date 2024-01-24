import React from 'react';
import {Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductCard = ({detail}) => {
  return (
    <SafeAreaView style={styles.card}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
      <View style={styles.container}>
        <Text style={styles.bold}>{detail.discountText}</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {' '}
            Use Code:{' '}
            <Text style={styles.underline}>{detail.discountCode}</Text>
          </Text>
          <Text style={styles.text}>{detail.discountSlogan}</Text>
        </View>
      </View>
     
    </SafeAreaView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 350,
    fontSize: 10,
    fontWeight: '500',
    height: 420,
    margin: 15,
    marginTop: 0,
    position: 'relative',
  },
  btn:{},
  bottomWrapper: {
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  horizontalLine: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  underline: {
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#ffffff',
  },
  bold: {
    fontWeight: '800',
    fontSize: 30,
    color: '#ffffff',
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});
