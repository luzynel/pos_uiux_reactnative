import {StyleSheet} from 'react-native';
import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

const TakeOrderStyles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  productListScroll: {
    width: '100%',
    flex: 1,
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 10,
  },
  productItem: {
    width: 180,
    height: 140,
    padding: 0,
    backgroundColor: color.light,
    overflow: 'hidden',
  },
  productImageWrap: {
    width: '100%',
    height: 80,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: color.light,
  },
  productImage: {
    width: '100%',
  },
  productInfo: {
    width: '100%',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color.tertiary,
  },
  productName: {
    color: color.text,
    fontFamily: font.medium,
    textAlign: 'center',
    fontSize: size.small,
    lineHeight: 22,
    marginBottom: 2,
  },
  productPrice: {
    fontFamily: font.semibold,
    fontSize: size.h3,
    lineHeight: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: color.text,
  },

  menuTabContainer: {
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  productMenuIndicator: {
    backgroundColor: color.tertiary,
    color: color.light,
  },

  //Modal
  modalContainer: {
    width: 500,
    height: 280,
    margin: 15,
    marginBottom: 30,
  },
  modalButtonWrap: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTextHeading: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: size.h3,
    fontFamily: font.regular,
    color: color.dark,
  },
  inputContainer: {
    backgroundColor: color.light,
    width: 180,
    height: 60,
    borderRadius: 5,
    elevation: 10,
    gap: 5,
    fontFamily: font.regular,
  },
  inputText: {
    height: '100%',
    fontSize: size.h2,
    fontFamily: font.semibold,
    paddingTop: 20,
    paddingHorizontal: 10,
  },

  //Tab
  tabItem: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: '100%',
    flex: 1,
  }
});

export default TakeOrderStyles;
