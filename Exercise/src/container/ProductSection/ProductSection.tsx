import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, View, Text} from 'react-native';
import ProductImage from '../../components/ProductImage/ProductImage';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';

const ProductSection = ({selectedProduct}) => {
  const products = (
    <FlatList
      horizontal
      data={selectedProduct}
      renderItem={({item}) => <ProductImage detail={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
  return (
    <View style={styles.SectionWrapper}>
      <Text style={styles.title}>{HOME.POPULAR_PRODUCTS.title}</Text>
      <View style={styles.wrapper}>{products}</View>
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  SectionWrapper: {
    paddingVertical: 20,
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,
    marginLeft: 20,
  },
  title: {
    fontSize: 23,
fontWeight:'600',
    color: colors.black,
    paddingHorizontal: 25,
  },
});
