import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {GlobalStyles} from './styles/GlobalStyles';
import {color} from '../assets/utils/colors';
import IconItem from './IconItem';

type RootStackParamList = {
  MainViewTerminal: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList>;

const FrameHeader = () => {
  const navigation = useNavigation<NavigationProp>();
  const MainPress = () => {
    navigation.navigate('MainViewTerminal');
  };

  return (
    <View style={GlobalStyles.frameHeader}>
      <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
        <TouchableOpacity
          onPress={MainPress}
          style={[GlobalStyles.button, GlobalStyles.headerButton]}>
          <IconItem
            itype="material-icons"
            iname="dashboard"
            isize={36}
            icolor={color.primary}
          />
          <Text style={GlobalStyles.headerButtonText}>Main</Text>
        </TouchableOpacity>
        <View style={GlobalStyles.headerWrap}>
          <IconItem
            itype="AntDesign"
            iname="user"
            isize={22}
            icolor={color.light}
          />
          <Text style={GlobalStyles.headerText}>
            Hello,{' '}
            <Text
              style={(GlobalStyles.headerText, GlobalStyles.headerTextLarge)}>
              Luzy
            </Text>
          </Text>
        </View>
      </View>
      <View style={GlobalStyles.headerWrap}>
        <Text style={GlobalStyles.headerText}>
          Wednesday, September 04, 2024
        </Text>
        <View style={GlobalStyles.borderSeparator}></View>
        <Text style={GlobalStyles.headerText}>14:00</Text>
      </View>
    </View>
  );
};

export default FrameHeader;

const styles = StyleSheet.create({});
