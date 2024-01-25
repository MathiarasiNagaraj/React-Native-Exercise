import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Offer} from '../../interface/Products';
import { HOME } from '../../messages/CommonMessages';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/globalStyle';

interface OfferProps {
  detail: Offer;
}
const OfferCard: React.FC<OfferProps> = ({detail}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: detail.modelImg}} style={styles.img} />
      <View style={styles.textWrapper}>
        <Text style={[globalStyles.bold,globalStyles.whiteText]}>{detail.discountText}</Text>
        <View style={styles.horizontalLine} />
        <View >
          <Text style={[globalStyles.whiteText,globalStyles.mediumText]}>
          
       {HOME.OFFER.useCode}
            <Text style={[globalStyles.mediumText,globalStyles.whiteText,globalStyles.underLinedText]}>{detail.discountCode}</Text>
          </Text>
          <Text style={[globalStyles.mediumText,globalStyles.whiteText]}>{detail.discountSlogan}</Text>
        </View>
      </View>
    </View>
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
  
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  bottomWrapper: {
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 25,
  },
  horizontalLine: {
    borderBottomColor:colors.white,
    borderBottomWidth: 0.5,
    marginVertical: 20,
  },



});
