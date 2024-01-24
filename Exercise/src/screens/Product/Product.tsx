import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HeartSVG from '../../assets/images/icons/shoppingCart.svg';
import  LoopSVG from '../../assets/images/icons/loop.svg';
import SwitchCameraSVG from '../../assets/images/icons/switchCamera.svg';
import CameraSVG from '../../assets/images/icons/camera.svg'
import DressHangerSVG from '../../assets/images/icons/dressHanger.svg'
import LeftArrowSVG from '../../assets/images/icons/leftArrow.svg'
import StarSVG from '../../assets/images/icons/star.svg'
export const Product = ({route}) => {
  const {detail} = route.params;
  const sizes = (
    <FlatList
      horizontal
      data={detail.available_sizes}
      renderItem={({item}) => <Text style={styles.bold}>{item}</Text>}
      keyExtractor={item => item}
      style={styles.wrapper}
    />
  );
  const navigation = useNavigation();

  const handleProductClick = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text onPress={handleProductClick}>Home</Text>
        <Image style={styles.img} source={{uri: detail.modelImg}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{detail.product_name}</Text>
          <Text style={styles.orangeText}>
            {detail.price_details.currency_code}{' '}
            {detail.price_details.current_price}
          </Text>
          <Text style={styles.strikeText}>
            {' '}
            RM {detail.price_details.actual_price}{' '}
          </Text>
          <Text>{detail.price_details.discount} OFF</Text>
          <View style={styles.sizeWrapper}>
            <Text>Size Availabe: {sizes}</Text>
          </View>
        </View>
        <View style={styles.bottomWrapper}>
        
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 23,
  },
  btn: {
    backgroundColor: '#111111',
    color: '#ffffff',
    borderRadius: 10,
    padding: 20,

   height:40
  },
  bottomWrapper: {
    height: 200,
    padding:20
  },
  bold: {
    color: '#000000',
    fontWeight: '600',
  },
  textContainer: {
    backgroundColor: '#ffffff',
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
  sizeWrapper: {
    backgroundColor: '#f7f7f7',
    height: 60,
  },
  title: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '500',
  },
  orangeText: {
    color: '#e2801c',
    fontSize: 18,
  },
  img: {
    height: 600,
    width: '100%',
  },
  wrapper: {
    display: 'flex',
  },
});
