import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { HOME } from '../../messages/CommonMessages';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyle';
import StarSVG from '../../assets/images/icons/star.svg';
import { Product } from '../../interface/Products';

interface BottomNavigatorProps{
    detail:Product
}
const BottomNavigator :React.FC<BottomNavigatorProps>= ({detail}) => {
 
  const snapPoints = useMemo(() => ['35%', '48%'], []);
  const sizes = (
    <FlatList
      horizontal
      data={detail.available_sizes}
      renderItem={({item}) => <Text style={styles.itemWrapper}>{item}</Text>}
      keyExtractor={item => item}
      style={styles.wrapper}
    />
  );


  return (
    <BottomSheet snapPoints={snapPoints}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{detail.product_name}</Text>
      <View style={styles.priceWrapper}>
        <View>
          <Text style={styles.orangeText}>
            {detail.price_details.currency_code}
            {detail.price_details.current_price}
          </Text>
          <Text>
            <Text style={styles.strikeText}>
              {HOME.POPULAR_PRODUCTS.RM}{' '}
              {detail.price_details.actual_price}{' '}
            </Text>
            <Text style={globalStyles.text}>
              {detail.price_details.discount} OFF
            </Text>
          </Text>
        </View>
        <View>
          <StarSVG style={styles.Rating} />
          <Text style={styles.Rating}>
            {detail.rating_details.rating}/{detail.rating_details.scale}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.sizeWrapper}>
      <Text style={styles.text}>
        {HOME.POPULAR_PRODUCTS.availableSizes}
      </Text>
      {sizes}
    </View>
  </BottomSheet>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        columnGap: 20,
        alignSelf: 'center',
    
        rowGap: 20,
      },
      title: {
        fontSize: 20,
        color: colors.black,
        fontWeight: '500',
        marginBottom: 10,
      },
      priceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      },
    
      text: {
        color: colors.grey,
        fontSize: 17,
      },
      textContainer: {
        backgroundColor: colors.white,
        padding: 22,
      },
    
      orangeText: {
        color: '#e2801c',
        fontSize: 21,
        fontWeight: '700',
        marginVertical: 5,
      },
      Rating: {
        textAlign: 'right',
        marginTop: 10,
      },
    
      strikeText: {
        textDecorationLine: 'line-through',
      },
      itemWrapper: {
        color: colors.black,
        marginLeft: 25,
        fontSize: 17,
        fontWeight: '600',
      },
      sizeWrapper: {
        backgroundColor: colors.lightestGrey,
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
      },
});

export default BottomNavigator;
