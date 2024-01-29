import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {Offer} from '../../interface/Products';
import {HOME} from '../../messages/CommonMessages';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import DropShadow from 'react-native-drop-shadow';
interface OfferProps {
  detail: Offer;
}
/**
 * @description Offer card component with offer details
 * @param detail Offer detail Object
 * @returns Offer card component
 */
const OfferCard: React.FC<OfferProps> = ({detail}) => {
  return (
    <DropShadow style={[styles.shadowProp, styles.card]}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
      <View style={styles.textWrapper}>
        <Text style={[globalStyles.bolderText, globalStyles.whiteText]}>
          {detail.discountText}
        </Text>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={[globalStyles.whiteText, globalStyles.mediumText]}>
            {HOME.OFFER.useCode}
            <Text
              style={[
                globalStyles.mediumText,
                globalStyles.whiteText,
                globalStyles.underLinedText,
              ]}>
              {detail.discountCode}
            </Text>
          </Text>
          <Text style={[globalStyles.mediumText, globalStyles.whiteText]}>
            {detail.discountSlogan}
          </Text>
        </View>
      </View>
    </DropShadow>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  card: {
    width: 340,
    height: 460,
    marginLeft: 30,
    marginTop: 0,
    position: 'relative',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  textWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
  },
  horizontalLine: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
    marginVertical: 20,
  },
});
