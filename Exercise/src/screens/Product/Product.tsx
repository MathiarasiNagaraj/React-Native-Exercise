import BottomSheet from '@gorhom/bottom-sheet';
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

import {useContext, useMemo} from 'react';
import DressHangerSVG from '../../assets/images/icons/dressHanger.svg';
import HeartSVG from '../../assets/images/icons/heart.svg';
import LeftArrowSVG from '../../assets/images/icons/leftArrow.svg';
import StarSVG from '../../assets/images/icons/star.svg';
import Cart from '../../components/Cart/Cart';
import {CartContext} from '../../context/CartContext';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import {HOME} from '../../messages/CommonMessages';
import { useNavigation } from '@react-navigation/native';

export const Product = ({route}) => {
  const {detail} = route.params;
  const snapPoints = useMemo(() => ['40%', '60%'], []);
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.navigate('Home');
  };
  const sizes = (
    <FlatList
      horizontal
      data={detail.available_sizes}
      renderItem={({item}) => <Text style={styles.itemWrapper}>{item}</Text>}
      keyExtractor={item => item}
      style={styles.wrapper}
    />
  );

  const onAddToCartHandler = () => {
    addToCart(detail.id);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{position:'relative',backgroundColor:'pink'}}>
        <View>
          <Image style={styles.img} source={{uri: detail.modelImg}} />
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={handleBackClick}>
            <View style={styles.icon}>
              <LeftArrowSVG />
              </View>
              </TouchableOpacity>
            <View style={styles.icon}>
              <Cart />
            </View>
          </View>
        </View>
        {/* <BottomSheet style={{backgroundColor: 'red'}} snapPoints={snapPoints}> */}
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
        {/* </BottomSheet> */}
        <View style={styles.bottomWrapper}>
          <View style={styles.greyIcon}>
            <HeartSVG height={30} width={28} />
          </View>
          <View style={styles.greyIcon}>
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
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 600,
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    columnGap: 20,
    alignSelf: 'center',

    rowGap: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    position: 'absolute',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
    width: 57,
    borderRadius: 999,
    backgroundColor: colors.white,
  },
  greyIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 999,
    backgroundColor: colors.lightGrey,
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
  bottomWrapper: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // left:0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    columnGap: 20,
    padding:30,
    backgroundColor: colors.white,

  
  },
});
