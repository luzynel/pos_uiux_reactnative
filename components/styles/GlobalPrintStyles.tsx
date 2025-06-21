import {StyleSheet} from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

export const GlobalPrintStyles = StyleSheet.create({
  headerContainer: {
    width: 680,
    maxWidth: '100%',
    height: 60, 
    marginHorizontal: 'auto',
    elevation: 2, 
    backgroundColor: color.secondary, 
    marginVertical: 10, 
    padding: 10,
    justifyContent: 'center',
  },
  headerContainerText: {
    fontFamily: font.semibold,
    fontSize: size.h2, 
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: color.light,
  },    
  footerContainer: {
    width: 680,
    maxWidth: '100%',
    backgroundColor: color.light,
    marginHorizontal: 'auto',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
		width: 680,
    maxWidth: '100%',
		backgroundColor: color.light,
		marginHorizontal: 'auto',
	},
	containerInner: {
		flex: 1,
		padding: 25,
	},

  //header
  receiptWrap: {},
  logoImg: {
      width: 250,
      height: 51,
      objectFit: 'contain',
      alignSelf: 'center',
      marginBottom: 15,
  },
  receiptTextWrap: {
    marginVertical: 10,
  },
  receiptText: {
    fontSize: size.h3,
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: color.dark,
    letterSpacing: 2,
  },
  receiptTextSmall: {
    fontSize: size.normal,
    textAlign: 'center',
    color: color.dark,
    letterSpacing: 2,
  },
  defautText: {
    fontSize: size.normal,
    fontWeight: '400',
    color: color.dark,
    letterSpacing: 2,
  },
  flexTextCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 10,
  },

  //body
  receiptDetails: {
    paddingVertical: 20,
    marginTop: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: color.border,
    rowGap: 10,
  },




  orderDetails: {
    paddingVertical: 30,
    marginVertical: 20,
    marginBottom: 30,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: color.border,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    columnGap: 20,
  },
  infoSeparatorBorder: {
    width: 1,
    height: '100%',
    backgroundColor: color.shadow,
  },
  normalText: {
    fontSize: size.normal,
    fontWeight: '400',
    color: color.text,
    letterSpacing: 2,
  },
});

export const OfficialReceiptStyles = StyleSheet.create({
  orderList: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  itemWrap: {
    flex: 1,
    width: '100%',
  },
  itemFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemFlexCenter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemFlexCell: {
    flex: 1,
    fontSize: size.small,
    letterSpacing: 2,
    color: color.text,
    paddingVertical: 5,
    paddingHorizontal: 20,
    lineHeight: 16,
  },
  itemText: {
    fontSize: size.normal,
    letterSpacing: 2,
    color: color.text,
    paddingVertical: 5,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  itemPriceText: {
    fontSize: size.normal,
    letterSpacing: 2,
    color: color.text,
    paddingVertical: 5,
    textAlign: 'right',
    lineHeight: 16,
  },
  orderTotal: {
    paddingVertical: 15,
    gap: 5,
  },
  orderTotalBorder: {
    paddingVertical: 15,
    gap: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: color.border,
  },
  totalText: {
    flex: 0,
    width: '33.33%',
    fontSize: size.normal,
    letterSpacing: 2,
    lineHeight: 18,
    color: color.dark,
  },
  totalNumber: {
    flex: 0,
    width: '33.33%',
    fontSize: size.normal,
    letterSpacing: 2,
    lineHeight: 18,
    color: color.dark,
    textAlign: 'right',
  },
  totalTextIndent: {
    paddingLeft: 55,
    flex: 0,
    width: '33.33%',
    fontSize: size.normal,
    letterSpacing: 2,
    lineHeight: 18,
    color: color.dark,
  },

  //customer details
  customerDetails: {
    paddingBottom: 25,
  },
  custWrap: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    height: 45,
    alignItems: 'flex-end',
  },
  custLabel: {
    width: 180,
    textAlign: 'right',
    fontSize: size.normal,
    letterSpacing: 2,
    lineHeight: 18,
    color: color.dark,
  },
  custInputText: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: color.dark,
  }
});

export const PrintOrderStyles = StyleSheet.create({
  orderList: {
    paddingTop: 10,
    paddingBottom: 10,
    gap: 10,
  },
  orderListHeading: {
    fontSize: size.h3,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
    color: color.text,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  orderListContainer: {
    gap: 10,
  },
  orderItemWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  categoryTable: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: color.border,
  },
  categoryTblHead: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: color.border,
    backgroundColor: color.background,
  },
  tblCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tblRow: {
    borderBottomWidth: 1,
    borderColor: color.border,
  },
  categoryHeadText: {
    fontSize: size.normal,
    letterSpacing: 2,
    color: color.text,
  },
  bodyText: {
    fontSize: size.normal,
    letterSpacing: 2,
    color: color.text,
    paddingVertical: 5,
    lineHeight: 16,
  },
  priceText: {
    fontSize: size.normal,
    letterSpacing: 2,
    color: color.text,
    paddingVertical: 5,
    textAlign: 'right',
    lineHeight: 16,
  },
});