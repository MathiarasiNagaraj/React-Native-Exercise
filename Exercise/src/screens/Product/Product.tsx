import React from 'react';
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export const Product = ({route}) => {
  const {detail} = route.params;
  console.log(detail);
  const sizes = <FlatList
    horizontal
    data={detail.available_sizes}
    renderItem={({ item }) => <Text>{item}</Text>}
    keyExtractor={item => item}
    style={styles.wrapper}
  />
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={{uri: detail.modelImg }} />
      <View>
        <Text>{detail.product_name}</Text>
        <Text>{detail.price_details.currency_code} {detail.price_details.current_price}</Text>
        <Text>{detail.price_details.actual_price} {detail.price_details.discount} OFF</Text>
        <View>
          <Text>Size Availabe: {sizes}</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:20
  },
  img: {
    height: 600,
    width:'100%'
  }
  ,
  wrapper: {
    display: 'flex',
columnGap:10
  }
})