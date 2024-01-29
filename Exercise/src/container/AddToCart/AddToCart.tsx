import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {HOME} from '../../messages/CommonMessages';
import {globalStyles} from '../../styles/globalStyle';
import DressHangerSVG from '../../assets/images/icons/dressHanger.svg';
import HeartSVG from '../../assets/images/icons/heart.svg';
import {colors} from '../../styles/colors';

const AddToCart = ({onAddToCartHandler}) => {
  return (
    <View style={[styles.bottomWrapper,styles.shadowProp]}>
      <View style={[styles.greyIcon]}>
        <HeartSVG height={30} width={28} />
      </View>
      <View style={[styles.greyIcon]}>
        <DressHangerSVG height={30} width={28} />
      </View>
      <TouchableOpacity
        style={globalStyles.primaryBtn}
        onPress={onAddToCartHandler}>
        <Text style={[globalStyles.text, globalStyles.whiteText]}>
          {HOME.POPULAR_PRODUCTS.addToCart}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;
const styles = StyleSheet.create({
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    columnGap: 30,
    padding: 30,
    backgroundColor: colors.white,
  },
  shadowProp: {
    shadowColor: colors.black,
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 19,
  },
  greyIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 999,
    backgroundColor: colors.lightGrey,
  },
});
