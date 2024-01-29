import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, View, Text} from 'react-native';
import ProductImage from '../../components/ProductImage/ProductImage';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {Product} from '../../interface/Products';

interface ProductSectionProps {
  selectedProduct: Product[];
}
/**
 * @description Component for Products Container
 * @param array of selected Category Products
 * @returns  Product Container Component
 */
const ProductSection: React.FC<ProductSectionProps> = ({selectedProduct}) => {
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
    marginVertical: 20,
    marginTop: 30,
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,
    marginLeft: 20,
  },
  title: {
    fontSize: 22.5,
    fontWeight: '900',
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    paddingLeft: 30,
  },
});
