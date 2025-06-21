import {StyleSheet,Dimensions} from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

const CustomerInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainViewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  sceneContainer: {
    backgroundColor: color.light,
  },

  //Tab
  customerInfoContainer: {
    marginTop: 10,
    height: 250,
  },

  //Form fields
  formFieldGroup: {
    flexDirection: 'row',
    gap: 5,
  },
  fieldGroupItem: {
    flex: 1,
  },
  formFieldItem: {
    flexDirection: 'row',
    borderWidth: 0,
    marginBottom: 5,
  },
  formFieldArea: {
    height: 150,
  },
  iconField: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: color.border,
    backgroundColor: color.background,
  },
  inputField: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: color.border,
    color: color.dark,
  },
  inputTextField: {
    width: '100%',
    height: '100%',
    backgroundColor: color.light,
    color: color.dark,
    borderWidth: 0,
    fontFamily: font.medium,
    fontSize: size.normal,
    lineHeight: 22,
    padding: 10,
  },
  inputTextFieldEm: {
    fontFamily: font.bold,
    lineHeight: 22,
  },
  inputTextAreaField: {
    backgroundColor: color.light,
    borderWidth: 0,
    paddingHorizontal: 10,
    fontFamily: font.medium,
    fontSize: size.normal,
    height: '100%',
  },
  inputFieldGroup: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  inputLabel: {
    height: 50,
    borderWidth: 1,
    borderColor: color.border,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  inputLabelText: {
    fontFamily: font.medium,
    fontSize: size.normal,
    lineHeight: 22,
    color: color.shadow,
  },

  //Table
  searchBox: {
    flex: 1,
    padding: 20,
  },
  customerList: {
    borderBottomWidth: 1,
    borderColor: color.border,
    flex: 1,
    overflow: 'hidden',
    marginTop: 10,
    padding: 10,
    backgroundColor: color.light,
  },

  //Modal
  modalContainer: {
    width: 500,
    height: 600,
    margin: 15,
    marginBottom: 30,
  },
  infoItemGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  infoItem: {
    flex: 1,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: size.normal,
    color: color.text,
    fontFamily: font.regular,
  },
  infoWrapper: {
    borderWidth: 1,
    borderColor: color.border,
    padding: 8,
    paddingTop: 10,
    borderRadius: 4,
    backgroundColor: color.background,
  },
  disabled: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    fontFamily: font.bold,
    fontSize: size.normal,
  },
  infoText: {
    color: color.text,
    fontSize: size.normal,
    fontFamily: font.medium,
    lineHeight: 20,
  },
  disabledText: {
    fontFamily: font.bold,
  },
  moreInfo: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: color.border,
  },
});

export default CustomerInfoStyles;
