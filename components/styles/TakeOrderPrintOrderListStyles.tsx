import {StyleSheet} from 'react-native';
import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

const PrintOrderList = StyleSheet.create({
  bodyContainer: {
    width: 800,
    elevation: 2,
    backgroundColor: color.light,
    padding: 20,
  },
  headingText: {
    fontSize: size.h1,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: color.text,
    letterSpacing: 2,
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
  orderList: {
    paddingTop: 20,
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
  },
});

export default PrintOrderList;
