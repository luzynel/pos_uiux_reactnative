import {StyleSheet} from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

const SetTableStyles = StyleSheet.create({
  //Order Summary Table
  orderSummary: {
    width: '100%',
    flex: 1,
    backgroundColor: color.light,
  },
  orderSummaryWrap: {
    width: '100%',
    height: 200,
    padding: 10,
    gap: 16,
    elevation: 3,
    backgroundColor: color.light,
  },

  //Order Info
  orderInfoContainer: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: color.border,
    backgroundColor: color.light,
  },
  orderInfoRow: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    gap: 10,
  },
  tableInfoWrap: {
    width: '100%',
    paddingVertical: 10
  },

  //Tables
  tablesContainer: {
    flex: 10,
  },
  tablesMenu: {
    flex: 2,
  },

  //Reserve Table Area
  tableScrollView: {
    width: '100%',
  },
  reserveTables: {
    width: '100%',
    gap: 15,
  },
  reserveTablesContainer: {
    width: '100%',
  },
  tablesMainArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
  tableItem: {
    flex: 0,
    width: 140,
    height: 90,
    backgroundColor: color.light,
  },
  tableItemActive: {
    borderWidth: 2,
    borderColor: color.tertiary,
    backgroundColor: color.background,
  },
  tableText: {
    textAlign: 'center',
    fontSize: size.h1,
    lineHeight: 26,
    fontFamily: font.semibold,
    paddingHorizontal: 15,
    opacity: 0.6,
    color: color.dark,
  },
  tableDine: {
    backgroundColor: color.success,
  },
  tableReserved: {
    backgroundColor: color.alert,
  },
  tableSubText: {
    color: color.light,
    fontFamily: font.semibold,
    lineHeight: 16,
  },
  tableSubTextLarge: {
    fontSize: size.normal,
    fontFamily: font.semibold,
    color: color.light,
  },
  tableTextWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 5,
  },
  tableTextName: {
    color: color.light,
    fontSize: size.small,
    fontFamily: font.regular,
  },

  //table Side Menu
  tableMenuItem: {
    width: 110,
    height: 80,
    backgroundColor: color.tertiary,
    opacity: 1,
  },
  tableMenuText: {
    fontSize: size.small,
    textAlign: 'center',
    textTransform: 'uppercase',
    opacity: 1,
    lineHeight: 16,
  },
  tableMenuQty: {
    backgroundColor: color.light,
    borderWidth: 1,
    borderColor: color.shadow,
    marginBottom: 10,
  },
  tableMenuQtyText: {
    color: color.dark,
    lineHeight: 22,
  },
  tableMenuQtyNum: {
    fontSize: 30,
    fontFamily: font.bold,
    color: color.dark,
    lineHeight: 36,
  }
});

export default SetTableStyles;
