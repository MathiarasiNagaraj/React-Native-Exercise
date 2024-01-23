import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavItem from '../../components/NavItem/NavItem';
import {CATEGORY} from '../../constants/routeConstants';

const Navbar = ({selectedCategory}) => {

  const navItems = CATEGORY.map(category => (
    <NavItem key={category} title={category} onClick={()=>selectedCategory(category)} />
  ));

  return <View style={styles.navBar}>{navItems}</View>
};

const styles = StyleSheet.create({
  navBar: {
    display: 'flex',
    rowGap: 10,
   columnGap:50,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding:20
  },
});
export default Navbar;
