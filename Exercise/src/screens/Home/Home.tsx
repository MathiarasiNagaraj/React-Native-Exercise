import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import { Header } from '../../container/Header/Header';
import Navbar from '../../container/Navbar/Navbar';
import { getProductsByCategory } from '../../services/ProductApi';

export const Home = ({ navigation }) => {
    
    useEffect(() => {
         const getMethod=async () => {
             const data = await getProductsByCategory('Man');
           
        }
        getMethod();
    },[])
  return (
    <View>
          <Text>Home Page</Text>
          <Header />
          <Navbar/>
      <Button
        title="Click Me"
        onPress={() => navigation.navigate('Product')}></Button>
    </View>
  );
};
