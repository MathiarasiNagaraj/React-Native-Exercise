import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 18,
    color: colors.black,
      fontWeight: '600',
    fontFamily:'Poppins-Regular'
  },
  whiteText: {
      color: colors.white,
      
  },

  mediumText: {
    fontSize: 17,
    fontWeight: '500',
      marginBottom: 8,
      fontFamily:'Poppins-Medium'
  },
  greyText: {
    color: colors.grey,
  },
  lineThroughText: {
    textDecorationLine: 'line-through',
  },
    underLinedText: {
   textDecorationLine:'underline'
  },

  bolderText: {
    fontSize: 30,
      fontWeight: '300',
      fontFamily:'Poppins-Bold'
  },
  boldText: {
    fontSize: 26,
      fontWeight: '800',
      fontFamily:'Poppins-Regular'
  },

  primaryBtn: {
    backgroundColor: colors.black,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    width: 210,
  },
});
