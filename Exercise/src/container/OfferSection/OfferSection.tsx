import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import OfferCard from '../../components/OfferCard/OfferCard';
import {Offer} from '../../interface/Products';
import {colors} from '../../styles/colors';

interface OfferSectionProps {
  offers: Offer[];
}
/**
 * @description Container Component for Offers
 * @param Offers array
 * @returns  Offer Section
 */
const OfferSection: React.FC<OfferSectionProps> = ({offers}) => {
  const Offers = (
    <FlatList
      horizontal
      data={offers}
      renderItem={({item}) => <OfferCard detail={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
  return <View style={styles.SectionWrapper}>{Offers}</View>;
};

export default OfferSection;

const styles = StyleSheet.create({
  SectionWrapper: {
    height: 540,
    paddingVertical: 30,
    backgroundColor: colors.lightGrey,
  },
});
