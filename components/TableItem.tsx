import {StyleSheet, Text, TextInput, View, TouchableOpacity,Modal,Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import {GlobalStyles} from './styles/GlobalStyles';
import SetTableStyles from './styles/SetTableStyles';
import TakeOrderStyles from './styles/TakeOrderStyles';
import IconItem from './IconItem';
import {color} from '../assets/utils/colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  SetTable: undefined;
  SetTableSelect: undefined;
  SetTableNumber: undefined;
  TakeOrder: undefined;
};

type TableItemProps = {
  tid: string;
  ttype: string;
  tpax: string;
  tname: string;
};

const TableItem: React.FC<TableItemProps> = ({tid, ttype, tpax, tname}) => {
  const navigation = useNavigation<NavigationProp>();
  const onPressNavigate = (navLinkItem: keyof RootStackParamList) => {
      navigation.navigate(navLinkItem);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('now');
  
  // Toggle between true and false
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  
  const SetTableSelectPress = () => {
    navigation.navigate('SetTableSelect');
  };
  const savePress = () => {
    setModalVisible(!modalVisible);
    handlePress();
  };
  const cancelPress = () => {
    setModalVisible(!modalVisible);
    handlePress();
  };
  const tableSelectPress = () => {
    SetTableSelectPress();
    handlePress();
  }

  return (
    <View>
      {ttype === 'dine' ? (
        <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableItem, isPressed && SetTableStyles.tableItemActive, SetTableStyles.tableDine]} onPress={handlePress}>
          <Text style={[SetTableStyles.tableText, {color: color.light, opacity: 1}]}>{tid}</Text>
          <View style={SetTableStyles.tableTextWrap}>
            <Text style={[SetTableStyles.tableSubText]}>DINE</Text>
            <Text style={[SetTableStyles.tableSubTextLarge]}>({tpax})</Text>
          </View>
        </TouchableOpacity>
      ) : ttype === 'reserved' ? (
        <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableItem,, isPressed && SetTableStyles.tableItemActive, SetTableStyles.tableReserved]} onPress={handlePress}>
          <Text style={[SetTableStyles.tableText, {color: color.light, opacity: 1}]}>{tid}</Text>
          <View style={SetTableStyles.tableTextWrap}>
            <Text style={[SetTableStyles.tableSubText]}>RESERVED</Text>
            <Text style={[SetTableStyles.tableSubTextLarge]}>({tpax})</Text>
          </View>
          <Text style={SetTableStyles.tableTextName}>By: {tname}</Text>
        </TouchableOpacity>
      ) : ttype === 'selected' ? (
        <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableItem, SetTableStyles.tableItemActive]}>
          <Text style={SetTableStyles.tableText}>{tid}</Text>
        </TouchableOpacity>
      ) : ttype === 'redirect' ? (
        <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableItem, isPressed && SetTableStyles.tableItemActive]} onPress={tableSelectPress}>
          <Text style={SetTableStyles.tableText}>{tid}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableItem, isPressed && SetTableStyles.tableItemActive]} onPress={handlePress}>
          <Text style={SetTableStyles.tableText}>{tid}</Text>
        </TouchableOpacity>
      )}

      <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
            <ScrollView style={TakeOrderStyles.modalContainer}>
              <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={cancelPress}>
                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
              </Pressable>

              <View style={[SetTableStyles.orderInfoContainer,{gap: 10}]}>
                <View style={SetTableStyles.orderInfoRow}>
                  <View style={GlobalStyles.flexRowDirection}>
                    <Text style={GlobalStyles.defaultTextFormat}>ORDER #:{' '}<Text style={GlobalStyles.boldTextFormat}>012345</Text></Text>
                  </View>
                  <View style={GlobalStyles.flexRowDirection}>
                    <Text style={GlobalStyles.defaultTextFormat}>TABLE #:{' '}<Text style={GlobalStyles.boldTextFormat}>01</Text></Text>
                  </View>
                </View>
                
                <View style={SetTableStyles.orderInfoRow}>
                  <View style={GlobalStyles.flexRowDirection}>
                    <View style={SetTableStyles.tableInfoWrap}>
                      <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>TYPE:{' '}</Text>
                      <View style={[TakeOrderStyles.inputContainer,{flex: 1}]}>
                        <Picker selectedValue={selectedValue} style={{height: '100%', width: '100%'}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                          <Picker.Item label="Dine-In" value="now" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="Reserve" value="prepare_after" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={GlobalStyles.flexRowDirection}>
                    <View style={SetTableStyles.tableInfoWrap}>
                      <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>PAX:{' '}</Text>
                      <View style={[TakeOrderStyles.inputContainer, {width: 100}]}>
                        <TextInput style={[ TakeOrderStyles.inputText, GlobalStyles.alignRight, ]} placeholderTextColor={color.dark} placeholder="04" />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={SetTableStyles.tableInfoWrap}>
                  <Text style={[GlobalStyles.defaultTextFormat, {marginBottom: 5}]}>NAME:{' '}</Text>
                  <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                    <TextInput style={[ GlobalStyles.boldTextFormat,{width: '100%', height: '100%', paddingHorizontal: 10} ]} placeholderTextColor={color.dark} value="Juan U. De la Cruz" />
                  </View>
                </View>
              </View>

              <View style={{gap: 10}}>
                
                <View style={TakeOrderStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={savePress}>
                    <Text style={GlobalStyles.buttonText}>Save</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={cancelPress}>
                    <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TableItem;

const styles = StyleSheet.create({});
