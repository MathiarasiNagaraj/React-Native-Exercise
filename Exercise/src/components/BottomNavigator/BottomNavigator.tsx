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
      style={{borderRadius: 0}}
      snapPoints={snapPoints}
      handleIndicatorStyle={handleStyle}
      containerStyle={{borderRadius: 0}}
      backgroundStyle={{borderRadius: 0}}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{detail.product_name}</Text>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.orangeText}>
              {detail.price_details.currency_code} {''}
              {detail.price_details.current_price}
            </Text>
            <Text>
              <Text
                style={[
                  globalStyles.lineThroughText,
                  globalStyles.text,
                  globalStyles.greyText,
                ]}>
                {HOME.POPULAR_PRODUCTS.RM}
                {detail.price_details.actual_price}
              </Text>
              <Text style={[globalStyles.text]}>
                {''} {detail.price_details.discount} {HOME.POPULAR_PRODUCTS.OFF}
              </Text>
            </Text>
          </View>
          <View>
            <StarSVG style={[styles.Rating]} />
            <Text style={styles.Rating}>
              {detail.rating_details.rating}/{detail.rating_details.scale}
            </Text>
          </View>
         
        </View>
        <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sequi culpa error sapiente tenetur enim cupiditate corporis incidunt consequatur ipsam ut, necessitatibus expedita voluptas? Fugiat debitis ad sit mollitia earum!
              Veritatis quis quia deserunt assumenda recusandae incidunt sapiente a amet impedit nemo natus et sequi rem illo totam, voluptates nesciunt pariatur? Enim eveniet earum voluptas repellat, corporis itaque quas quis!
              Id, nisi accusantium. Quibusdam, cum autem blanditiis repellat, delectus consequatur, laborum non quo voluptates obcaecati quas quasi porro. Ex corrupti iure expedita mollitia. Quidem similique distinctio, aliquid repellendus eius consequuntur?
              Eveniet minima enim pariatur blanditiis accusamus laborum sed ipsam id velit delectus, impedit nam assumenda facere accusantium. Dolorum odit pariatur laboriosam ullam alias id quis! Fugit unde quaerat nemo tempora.
              Accusantium iste nisi adipisci ex numquam dicta eaque nulla, cumque reprehenderit blanditiis repellendus ipsam. Rerum beatae dolores unde aliquam minus culpa nobis voluptates voluptatum quisquam dicta ullam, enim, delectus adipisci.
              Error quas dolorem aliquid repellat. Quisquam qui amet adipisci commodi autem labore, similique natus nemo ab dicta expedita hic dolor modi maiores facilis ad suscipit quasi aspernatur atque recusandae eveniet.
              Sed accusantium perspiciatis sequi minima eaque officia architecto, deserunt minus voluptatum nemo repellat dicta unde totam quibusdam nulla corrupti aliquid necessitatibus rem, quos molestias vel? Totam veniam sapiente recusandae mollitia.
            </Text>
      </View>
      <View style={styles.sizeWrapper}>
        <Text style={styles.text}>{HOME.POPULAR_PRODUCTS.availableSizes}</Text>

        <View>{sizes}</View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    columnGap: 10,
    rowGap: 20,
    marginLeft: 35,
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
    alignItems: 'flex-end',
  },

  text: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontSize: 16,
    // marginRight: 4,
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
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  itemWrapper: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '900',
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 13,
  },
  sizeWrapper: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.lightestGrey,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 'auto',
  },
});

export default BottomNavigator;
