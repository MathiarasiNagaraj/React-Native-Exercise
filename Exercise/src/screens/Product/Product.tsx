import BottomSheet from '@gorhom/bottom-sheet';
import {
  FlatList,
  Image,
  ImageBackground,
  ImageBackgroundBase,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useContext} from 'react';

import LeftArrowSVG from '../../assets/images/icons/leftArrow.svg';

import Cart from '../../components/Cart/Cart';
import {CartContext} from '../../context/CartContext';
import {colors} from '../../styles/colors';
import {globalStyles} from '../../styles/globalStyle';
import {HOME} from '../../messages/CommonMessages';
import {useNavigation} from '@react-navigation/native';
import BottomNavigator from '../../components/ProductDetails/ProductDetails';
import AddToCart from '../../container/AddToCart/AddToCart';
import Icon from '../../components/Icon/Icon';
import {Header} from '../../container/Header/Header';
import {TITLE} from '../../constants/commonConstants';

export const Product = ({route}) => {
  const {detail} = route.params;
  const {addToCart} = useContext(CartContext);
  const navigation = useNavigation();

  const handleBackClick = () => {
    navigation.goBack();
  };

  const onAddToCartHandler = () => {
    addToCart(detail.id);
  };

  return (
    <ScrollView>
      <Header
        icon={
          <TouchableOpacity onPress={handleBackClick}>
            <Icon icon={<LeftArrowSVG />} style={globalStyles.whiteIcon} />
          </TouchableOpacity>
        }
        cart={<Icon icon={<Cart />} style={globalStyles.whiteIcon} />}
        title={undefined}
        style={globalStyles.transparentBg(0)}
      />
      <ImageBackground source={{uri: detail.modelImg}} style={styles.img} />
    

      <BottomNavigator detail={detail} />

      <AddToCart onAddToCartHandler={onAddToCartHandler} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
});
