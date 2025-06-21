import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import IconItem from './IconItem';;
import { GlobalStyles } from './styles/GlobalStyles';
import { color } from '../assets/utils/colors'
import {font, size} from '../assets/utils/fonts';

const mainViewItem = ({ caption, itype, iname, isize, icolor, onPress }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {height, width} = useWindowDimensions();
  const isLandscape = width > height;
  
  //dynamic styles
  const dynamicStyles  = {
    itemsWrap: {
      marginHorizontal: width > 800 ? 10 : 20,
      marginVertical: height > 600 ? 10 : 20,
      paddingTop: width > 980 ? 40 : 40,
      paddingBottom: width > 980 ? 40 : 40,
    },
    textStyles: {
      fontSize: width > 800 ? size.h2 : size.normal,
    },
    buttonStyles: {
      width: width > 800 ? 200 : 150,
      height: 'auto',
    },
  };

  return (
      <TouchableOpacity style={styles.mainTerminalButton} onPress={onPress}>
          <View style={[styles.mainTerminalItem, GlobalStyles.shadowProp, dynamicStyles.itemsWrap]}>
              <IconItem itype={itype} iname={iname} isize={isize} icolor={icolor} />
              <Text style={[styles.maiTerminalText, dynamicStyles.textStyles, dynamicStyles.buttonStyles]}>{ caption }</Text>    
          </View>
      </TouchableOpacity>
  );
}

export default mainViewItem;

const styles = StyleSheet.create({
  mainTerminalButton: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  mainTerminalItem: {
    // width: 240,
    // height: 200,
    backgroundColor: color.light,
    // marginHorizontal: 20,
    // marginVertical: 20,
    borderRadius: 10,
  },
  maiTerminalText: {
    // fontSize: size.h3,
    fontFamily: font.bold,
    textAlign: 'center',
    color: color.dark,
    textTransform: 'uppercase',
  },
});