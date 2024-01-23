import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';
import { Header } from '../../container/Header/Header';
import Navbar from '../../container/Navbar/Navbar';
import { getProductsByCategory } from '../../services/ProductApi';

export const Home = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  useEffect(() => {
    const getMethod = async () => {
      const data = await getProductsByCategory('Man');
      setSelectedProduct(data);
      console.log(data)
    }
    getMethod();
  }, []);
  const onCategoryChange = async (category) => {


    const data = await getProductsByCategory(category);
  
    setSelectedProduct(data);

  }
  return (
    <View>
          <Text>Home Page</Text>
          <Header />
      <Navbar selectedCategory={onCategoryChange} />
      <View>{selectedProduct[0] }</View>
      <Button
        title="Click Me"
        onPress={() => navigation.navigate('Product')}></Button>
    </View>
  );
};
