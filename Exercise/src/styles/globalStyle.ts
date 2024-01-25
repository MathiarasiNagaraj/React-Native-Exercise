import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  text: {
    fontSize: 17,
    color: colors.black,
    fontWeight: '600',
  },
  whiteText: {
    color: colors.white,
  },

  mediumText: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 8,
  },
  greyText: {
    color: colors.grey,
  },
  lineThroughText: {
    textDecorationLine: 'line-through',
  },
  underLinedText: {
    textDecorationLine: 'underline',
  },

  bolderText: {
    fontSize: 30,
    fontWeight: '900',
  },
  boldText: {
    fontSize: 26,
    fontWeight: '800',
  },

  primaryBtn: {
    backgroundColor: colors.black,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 220,
  },
});
