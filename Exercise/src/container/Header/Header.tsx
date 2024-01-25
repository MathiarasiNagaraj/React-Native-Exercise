import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {TITLE} from '../../constants/commonConstants';
import Cart from '../../components/Cart/Cart';
import { colors } from '../../styles/colors';
/**
 * @description Header Component of the app
 * @returns Header Component of the app
 */
export const Header = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{TITLE}</Text>
      <Cart />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: colors.white,
    padding: 25,
  },
  title: {
    fontWeight: '900',
    fontSize: 27,
    color:colors.black
  }
  
});
