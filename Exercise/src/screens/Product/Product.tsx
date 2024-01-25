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

import Cart from '../../components/Cart/Cart';
import {CartContext} from '../../context/CartContext';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import {HOME} from '../../messages/CommonMessages';
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../../components/BottomNavigator/BottomNavigator';

export const Product = ({route}) => {
  const {detail} = route.params;
  const snapPoints = useMemo(() => ['20%', '50%'], []);
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.navigate('Home');
  };

  const onAddToCartHandler = () => {
    addToCart(detail.id);
  };

  return (

      <ScrollView style={styles.container}>
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
        <BottomNavigator detail={detail}/>
    
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
   
  );
};
const styles = StyleSheet.create({
  container: {

  },
  img: {
    height: 635,
    width: '100%',
  },

  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    position: 'absolute',
  },
  greyIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: 53,
    borderRadius: 999,
    backgroundColor: colors.lightGrey,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
    width: 57,
    borderRadius: 999,
    backgroundColor: colors.white,
  },

  bottomWrapper: {
   
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    columnGap: 20,
    padding:30,
    backgroundColor: colors.white,

  
  },
});
