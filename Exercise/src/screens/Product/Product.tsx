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

import StarSVG from '../../assets/images/icons/star.svg';
import HeartSVG from '../../assets/images/icons/heart.svg';
import DressHangerSVG from '../../assets/images/icons/dressHanger.svg';
import LeftArrowSVG from '../../assets/images/icons/leftArrow.svg';
import ShoppingCartSVG from '../../assets/images/icons/shoppingCart.svg';
import {useContext, useRef} from 'react';
import { CartContext } from '../../context/CartContext';
import Cart from '../../components/Cart/Cart';

export const Product = ({route}) => {
  const { detail } = route.params;
  const { addToCart } = useContext(CartContext);
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
 }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: detail.modelImg}} />

          <View style={styles.iconWrappers}>
            <LeftArrowSVG style={styles.icon} />
          </View>
          <View style={styles.iconWrappers2}>
<Cart/>
          </View>
        </View>
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
                  {' '}
                  RM {detail.price_details.actual_price}{' '}
                </Text>
                <Text>{detail.price_details.discount} OFF</Text>
              </Text>
            </View>
            <View>
              <StarSVG style={styles.icon} />
              <Text>
                {detail.rating_details.rating}/{detail.rating_details.scale}
              </Text>
            </View>
          </View>
          <View style={styles.sizeWrapper}>
            <Text style={styles.text}>Size Availabe:</Text>
            {sizes}
          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <View style={styles.iconWrapper}>
            <HeartSVG style={styles.icon} />
          </View>
          <View style={styles.iconWrapper}>
            <DressHangerSVG style={styles.icon} />
          </View>
          <TouchableOpacity style={styles.btn} onPress={onAddToCartHandler}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <BottomSheet >
  
         
      
      </BottomSheet> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imgContainer: {},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrappers: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    overflow: 'hidden',

    borderRadius: 999,
    backgroundColor: '#eeeeee',
  },
  iconWrappers2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    overflow: 'hidden',
    right: 0,
    borderRadius: 999,
    backgroundColor: '#eeeeee',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    overflow: 'hidden',

    borderRadius: 999,
    backgroundColor: '#eeeeee',
  },
  priceWrapper: {
    flexDirection: 'row',
    rowGap: 20,
    columnGap: 20,

    justifyContent: 'space-between',
  },
  icon: {
    height: 30,
    width: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 12,
  },
  text: {
    color: '#949494',
    fontSize: 17,
  },
  btn: {
    backgroundColor: '#111111',
    color: '#ffffff',
    borderRadius: 10,
    textAlign: 'center',
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  itemWrapper: {
    color: '#000000',
    marginLeft: 20,
    fontWeight: '600',
  },
  textContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
  sizeWrapper: {
    backgroundColor: '#f7f7f7',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: '#000000',
    fontWeight: '500',
  },
  orangeText: {
    color: '#e2801c',
    fontSize: 18,
    fontWeight: '700',
  },
  img: {
    height: 600,
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    columnGap: 20,
    alignSelf: 'center',
    // alignItems:'center',
    rowGap: 20,
    // justifyContent:'space-between'
  },
});
