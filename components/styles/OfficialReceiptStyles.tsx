import { StyleSheet, Text, View } from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

export const OfficialReceiptStyles = StyleSheet.create({
  container: {
      width: '100%',
      alignItems: 'center', 
      position: 'relative'
  },
  containerInner: {
    width: '100%',
    backgroundColor: color.light,
    paddingBottom: 50,
  },
  headingContainer: {
      width: '65%', 
      height: 70, 
      justifyContent: 'center', 
      alignContent: 'center', 
      elevation: 2, 
      backgroundColor: color.secondary, 
      padding: 10,
      marginBottom: 15,
  },
  headingText: {
      fontFamily: font.regular,
      fontSize: size.h2, 
      fontWeight: '700',
      textTransform: 'uppercase',
      textAlign: 'center',
      color: color.light,
  },
  logoWrap: {
      alignItems: 'center', 
      marginTop: 30,
  },
  logo: {
      width: 250, 
      height: 70, 
      objectFit: 'contain'
  },
  companyDetailsWrap: {
    width: '100%', 
    padding: 20,
  },
  companyDetailsWrapInner: {
    width: '100%',
  },
  storeName: {
    fontSize: size.h2,
    fontWeight: '700',
    color: color.dark,
    textAlign: 'center',
    marginVertical: 4,
  },
  companyName: {
    fontSize: size.h3,
    color: color.dark,
    textAlign: 'center',
    marginVertical: 4,
  },
  compAdditionalDetails: {
    fontSize: size.normal,
    color: color.dark,
    textAlign: 'center',
    marginVertical: 4,
  },
  receiptTransactScroll: {
    width: '65%',
  },
  receiptTransactionWrap: {
    width: '100%',
    paddingHorizontal: 35,
    marginVertical: 30,
  },
  receipTransInfoWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
  flexWrapRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      flex: 1,
  },
  transactOrdersSummaryWrap: {
      width: '100%',
      padding: 20,
      gap: 16,
      backgroundColor: color.light,
      marginTop: 25,
  },
  tblDisplayItem: {
      width: '100%',
      flexDirection: 'row',
      // borderBottomWidth: 1,
      // borderBottomColor: color.border,
  },
  tblDisplayCell: {
      flex: 1,
      paddingTop: 9,
      paddingBottom: 7,
      paddingHorizontal: 5,
      fontFamily: font.regular,
      fontSize: size.normal,
      color: color.text,
  },
  tblCellFlex8: {
      flex: 8,
  },
  tblCellFlex4: {
      flex: 4,
  },
  tblCellFlex2: {
      flex: 2,
  },
  tblCellFlex1: {
      flex: 1,
  },
  tblCellFlex3: {
      flex: 3,
  },
  tblCellFlex6: {
      flex: 6,
  },
  tblCellFlex5: {
      flex: 5,
  },
  tblCellFlex9: {
      flex: 9,
  },
  tblCellFlex10: {
      flex: 10,
  },
  tblCellFlex7: {
      flex: 7,
  },
  tblDisplayCellData: {
      fontFamily: font.regular,
      fontSize: size.normal,
      color: color.text,
  },
  tblDisplayCellPadding: {
      paddingLeft: 20,
  },
  tblDisplayCellSubData: {
      fontFamily: font.regular,
      fontSize: size.small,
      color: color.primary,
  },
  borderTop: {
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: color.border,
  },
  borderBottom: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: color.border,
  },
  subtotalWrap: {
      width: '100%',
      height: 50,
      padding: 6,
      gap: 16,
      elevation: 3,
      backgroundColor: color.info,
      marginBottom: 10,
  },
  tblDisplayItemNoBorder: {
      width: '100%',
      flexDirection: 'row',
  },
  tblDisplayCellTotal: {
      flex: 1,
      paddingTop: 9,
      paddingBottom: 7,
      paddingHorizontal: 5,
      fontFamily: font.regular,
      fontSize: size.h3,
      color: color.text,
  },
  transactOrdersTotalWrap: {
      width: '100%',
      gap: 16,
      elevation: 0,
      marginBottom: 15,
  },
  borderDashed: {
      borderRadius : 1,
      width: '100%',
      borderStyle: 'dashed',
      borderWidth: 1,
      borderColor: 'rgba(161,155,183,1)'
  },
  transactLessDiscountsWrap: {
    width: '100%',
    padding: 20,
  },
  transactInputText: {
      width: '100%',
      borderWidth: 1,
      borderColor: color.border,
      color: color.primary,
      fontSize: size.normal,
      backgroundColor: color.light,
  },
  transactionsContainerWrap: {
    width: '100%',
    padding: 20,
  },
  totalItemsWrap: {
    backgroundColor: color.info,
    padding: 20,
  },
  receiptFooterWrap: {
    alignItems: 'center',
    marginVertical: 3,
  },
  textDark: {
    color: color.dark
  },
})