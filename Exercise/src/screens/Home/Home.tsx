import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../../components/OfferCard/OfferCard';
import ProductImage from '../../components/ProductImage/ProductImage';
import { CATEGORY } from '../../constants/routeConstants';
import { Header } from '../../container/Header/Header';
import OfferSection from '../../container/OfferSection/OfferSection';
import { Offer, Product } from '../../interface/Products';
import { HOME } from '../../messages/CommonMessages';
import {
  getOffersByCategory,
  getProductsByCategory
} from '../../services/ProductApi';
import { colors } from '../../styles/colors';
import {  globalStyles } from '../../styles/globalStyle';

/**
 * @description Home Screen of Fashion Page
 * @returns Home Page of the Fashion App
 */
export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<Offer[]>([]);
  useEffect(() => {
    const getMethod = async () => {
      const data = await getProductsByCategory(CATEGORY[0]);
      setSelectedProduct(data);
      const offers = await getOffersByCategory(CATEGORY[0]);
      setSelectedOffers(offers);
    };
    getMethod();
  }, []);
  const Tab = createMaterialTopTabNavigator();
  const onCategoryChange = async (category: string) => {
    const data = await getProductsByCategory(category);
    setSelectedProduct(data);
    const offers = await getOffersByCategory(category);
    setSelectedOffers(offers);
  };

 

  const products = (
    <FlatList
      horizontal
      data={selectedProduct}
      renderItem={({item}) => <ProductImage detail={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Header />
      <OfferSection offers={selectedOffers} />
      <View style={styles.SectionWrapper}>
      <Text style={styles.title}>{HOME.POPULAR_PRODUCTS.title}</Text>
        <View style={styles.wrapper}>{products}</View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SectionWrapper: {
    paddingVertical:20
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,
marginLeft:20
  },
 title: {
    fontSize: 23,
    fontWeight: '600',
    color: colors.black,
    paddingHorizontal:25
  },
});
