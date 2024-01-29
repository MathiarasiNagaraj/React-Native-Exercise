import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import StarSVG from '../../assets/images/icons/star.svg';
import {Product} from '../../interface/Products';

interface BottomNavigatorProps {
  detail: Product;
}
const BottomNavigator: React.FC<BottomNavigatorProps> = ({detail}) => {
  const snapPoints = useMemo(() => ['39%', '55%'], []);
  const sizes = (
    <FlatList
      horizontal
      data={detail.available_sizes}
      renderItem={({item}) => <Text style={styles.itemWrapper}>{item}</Text>}
      keyExtractor={item => item}
      style={styles.wrapper}
    />
  );
  const handleStyle = {
    height: 5.5,
    width: 100,
    borderRadius: 200,
    backgroundColor: colors.lightGrey,
  };

  return (
      <BottomSheet
          style={{borderRadius:0}}
      snapPoints={snapPoints}
      handleIndicatorStyle={handleStyle}
      containerStyle={{borderRadius: 0}}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{detail.product_name}</Text>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.orangeText}>
              {detail.price_details.currency_code} {''}
              {detail.price_details.current_price}
            </Text>
            <Text>
              <Text style={[globalStyles.lineThroughText,globalStyles.text,globalStyles.greyText]}>
                {HOME.POPULAR_PRODUCTS.RM}
                     {detail.price_details.actual_price}
              </Text>
              <Text style={[globalStyles.text]}>
              {''}  {detail.price_details.discount} {HOME.POPULAR_PRODUCTS.OFF}
              </Text>
            </Text>
          </View>
          <View >
            <StarSVG style={ [styles.Rating]} />
            <Text style={styles.Rating}>
              {detail.rating_details.rating}/{detail.rating_details.scale}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.sizeWrapper}>
        <Text style={styles.text}>{HOME.POPULAR_PRODUCTS.availableSizes}</Text>
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
    fontSize: 19,
    color: colors.black,

    marginBottom: 10,
    fontWeight: '500',
          fontFamily: 'Poppins-Medium',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
      alignItems: 'flex-end'
  },

    text: {
        fontFamily: 'Poppins-Regular',
    color: colors.grey,
        fontSize: 16,
    marginRight:4
  },
  textContainer: {
    backgroundColor: colors.white,
    padding: 22,
  },

    orangeText: {
        fontFamily: 'Poppins-Regular',
    color: colors.darkOrange,
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 5,
  },
    Rating: {
        fontFamily: 'Poppins-Regular',
    textAlign: 'right',
      marginTop: 10,
    

    },
  


  itemWrapper: {
    color: colors.black,
    marginLeft: 27,
    fontSize: 17,
    fontWeight: '900',
    fontFamily: 'Poppins-Bold',
  },
    sizeWrapper: {
        fontFamily: 'Poppins-Regular',
    backgroundColor: colors.lightestGrey,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

export default BottomNavigator;
