import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';    

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  RetailPendingUnpaidItems: undefined;
};

interface pendingUnpaidList {
  id: number;
  orderno: number;
  itemsno: number;
  tdate: string;
  otime: string;
  total: number;
  cashier: string;
  pickup: string;
  status: string;
  cntrno: number;
}
const pendingData0: pendingUnpaidList[] = [];

const RetailPendingUnpaidEmpty = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  const navigation = useNavigation<NavigationProp>();
  const onPressNavigate = (navLinkItem: keyof RootStackParamList) => {
    navigation.navigate(navLinkItem);
  };
  const backPress = () => {
    navigation.goBack();
  };
  const [modalQuantity, setModalQuantity] = useState(false);
  const [modalRemoveItem, setModalRemoveItem] = useState(false);
  const [modalCancelUnpaid, setModalCancelUnpaid] = useState(false);
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [inputValue, setInputValue] = useState('8');
  const isSaveDisabled = !inputValue || inputValue.trim() === '0';
  const [selectedValue, setSelectedValue] = useState('now'); 

  const puData = ({item}: {item: pendingUnpaidList}) => (
    <TouchableOpacity onPress={() => setComponentVisible(true)}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblDisplayCellLink,{width: 100}]}>{item.orderno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.itemsno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 140}]}>{item.tdate}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.otime}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight,{width: 140}]}>{item.total.toFixed(2)}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 150}]}>{item.cashier}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.pickup}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.status}</Text>
        <Text style={[RetailStyles .tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.cntrno}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/** Frames Container */}
      <View style={[RetailStyles.framesWrapper]}>

        <View style={RetailStyles.retailFramesWrap}>
          <View style={[RetailStyles.retailFrame,RetailStyles.retailFrameSide]}>
            {/* frameHeader */}
            <View style={GlobalStyles.frameHeader}>
              <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
                <TouchableOpacity onPress={backPress} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
                  <IconItem itype="Ionicons" iname="return-up-back-outline" isize={28} icolor={color.secondary} />
                </TouchableOpacity>
                <View style={GlobalStyles.headerWrap}>
                  <Text style={[GlobalStyles.headerText]}>Hello, Benjie</Text>
                </View>
              </View>
              <View style={[GlobalStyles.headerWrap, RetailStyles.headerCounterWrap]}>
                <Text style={[RetailStyles.headerCounterText]}>Cntr:</Text><Text style={RetailStyles.headerCounterNumber}>01</Text>
              </View>
            </View>
          </View>

          <View style={RetailStyles.retailFrame}>
            {/* Main Frame */}
            {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
            <View style={[GlobalStyles.frameMain,{padding: 10}]}>

              <View style={[RetailStyles.searchPendingWrap,{columnGap: 30,paddingHorizontal:20,flexWrap: 'wrap',alignItems: 'flex-end'}]}>
                <View style={{gap:10}}>
                  <Text style={RetailStyles.searchFilterText}>By Default:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField, {width: 160,flex:0,}]}>
                      <TextInput style={GlobalStyles.inputTextFieldLight} placeholder="Today" placeholderTextColor={color.shadow} defaultValue='Today' />
                    </View>
                  </View>
                </View>
                <View style={{gap:10}}>
                  <Text style={RetailStyles.searchFilterText}>By Filter:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField,{width: 140}]}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Order No."  value="orderno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cntr No."  value="cntrno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Status"  value="status" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cashier"  value="cashier" style={GlobalStyles.defaultTextFormat} />
                      </Picker>
                    </View>
                    <View style={[GlobalStyles.selectOptionField, {width: 200,flex:0,}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]} value="321" />
                    </View>
                  </View>
                </View>
                <View style={RetailStyles.searchFilterWrap}>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgPrimary,{width: 70, height: 60}]} onPress={() => onPressNavigate('RetailPendingUnpaidItems')}>
                    <IconItem itype={'material-icons'} iname={'search'} isize={34} icolor={color.light} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgPrimary,{width: 70, height: 60}]}>
                    <Text style={[GlobalStyles.boldTextFormat,GlobalStyles.textH3,{color: color.light}]}>ALL</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* PendingOrders Table */}
              <View style={[{flex: 1, marginTop: 20}]}>
                <View style={[GlobalStyles.container,{backgroundColor: color.light}]}>
                  <ScrollView horizontal={true}>
                    
                    <View style={[GlobalStyles.tblDisplayRows]}>
                      <View style={GlobalStyles.tblTopRow}>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Order No.</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>No.Of Items</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Transaction Date</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Order Time</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Total</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 150}]}>Cashier</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Pickup</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Status</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Counter</Text>
                      </View>
                      <FlatList
                        data={pendingData0}
                        scrollEnabled={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={puData} />
                    </View>
                  </ScrollView>
                  <View style={[RetailStyles.searchItemResult,{paddingVertical:20,paddingHorizontal:20,borderTopWidth:2, borderTopColor: color.border}]}>
                    <Text style={RetailStyles.searchItemNumber}>0</Text>
                    <Text style={RetailStyles.searchItemText}>record(s) found.</Text>
                  </View>
                </View>
              </View>
            </View>
            }

          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default RetailPendingUnpaidEmpty

const styles = StyleSheet.create({})