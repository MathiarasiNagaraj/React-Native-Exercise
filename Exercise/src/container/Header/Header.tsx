import React from 'react';
import {Image, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {TITLE} from '../../constants/commonConstants';

export const Header = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.title}>{TITLE}</Text>
      <Image source={require('../../assets/images/icons/shoppingCart.svg')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding:20
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#000000',

  },
});
