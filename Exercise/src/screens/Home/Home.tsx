import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductImage from '../../components/ProductImage/ProductImage';
import {CATEGORY} from '../../constants/routeConstants';
import {Header} from '../../container/Header/Header';
import Navbar from '../../container/Navbar/Navbar';
import {
  getOffersByCategory,
  getProductsByCategory,
} from '../../services/ProductApi';


export const Home = ({navigation}) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState([]);

  useEffect(() => {
    const getMethod = async () => {
      const data = await getProductsByCategory(CATEGORY[0]);
      setSelectedProduct(data);
      const offers = await getOffersByCategory(CATEGORY[0]);
      setSelectedOffer(offers);
    };
    getMethod();
  }, []);

  const onCategoryChange = async (category: string) => {
    const data = await getProductsByCategory(category);
    setSelectedProduct(data);
    const offers = await getOffersByCategory(category);
    setSelectedOffer(offers);
  };

  const Offers = (
    <FlatList
      horizontal
      data={selectedOffer}
      renderItem={({item}) => <ProductCard detail={item}  />}
      keyExtractor={item => item.id.toString()}
    />
  );

  const products = (
    <FlatList
      horizontal
      data={selectedProduct}
      renderItem={({item}) => <ProductImage detail={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Navbar selectedCategory={onCategoryChange} />

      <View style={styles.wrapper}>{Offers}</View>

      <Text style={styles.bold}>Most Popular Product</Text>

      <View style={styles.wrapper}>{products}</View>

      {/* <Button title="Click Me" onPress={() => navigation.navigate('Product')} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
  
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    backgroundColor: '#f0f0f0',
  },
  bold: {
    fontSize: 23,
    fontWeight: '500',
    color: '#111111',
  },
  product: {},
});
