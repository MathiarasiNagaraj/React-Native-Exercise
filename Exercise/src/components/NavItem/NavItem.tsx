import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity} from 'react-native';

const NavItem = ({ title, onClick }) => {

  return (
    <TouchableOpacity key={title} onPress={onClick} >
       <Text style={styles.tabItem}>{title}</Text>
</TouchableOpacity>
  );
};

export default NavItem;

const styles = StyleSheet.create({

  tabItem: {
  

    fontSize: 20,
    fontWeight:'400',
    color: 'black',
  },
  
});
