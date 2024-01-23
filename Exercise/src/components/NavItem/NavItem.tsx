import React from 'react';
import {StyleSheet, Text} from 'react-native';

const NavItem = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default NavItem;

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '400',
        fontFamily:'Popp',
        color: '#11111',
        padding: 20,
        borderBottomWidth: 5,
        borderBottomColor:'#111111'
   }
  });