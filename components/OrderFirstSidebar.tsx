import {StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import {GlobalStyles} from './styles/GlobalStyles';
import CustomerInfoStyles from './styles/CustomerInfoStyles';
import IconItem from './IconItem';
import {color} from '../assets/utils/colors';
import TakeOrderStyles from './styles/TakeOrderStyles';

interface OrderItem {
  id: number;
  qty: number;
  menu: string;
  price: string;
  to: boolean;
  mod: boolean;
}
const data0: OrderItem[] = [];
const data: OrderItem[] = [
  {id: 1, qty: 1, menu: 'C .Fried Chicken 1pc', price: '199', to: true, mod: false},
  {id: 2, qty: 2, menu: 'Product 2', price: '285', to: true, mod: false},
  {id: 3, qty: 1, menu: 'Product 3', price: '399', to: false, mod: false},
  {id: 4, qty: 1, menu: 'Product 4', price: '199', to: false, mod: false},
];
const dataModify: OrderItem[] = [
  {id: 1, qty: 1, menu: 'C .Fried Chicken 1pc', price: '199', to: true, mod: true},
  {id: 2, qty: 2, menu: 'Product 2', price: '285', to: true, mod: false},
  {id: 3, qty: 1, menu: 'Product 3', price: '399', to: false, mod: false},
  {id: 4, qty: 1, menu: 'Product 4', price: '199', to: false, mod: false},
];

interface OrderTotal {
  id: number;
  qty: number;
  menu: string;
  price: string;
}

const totalData0: OrderTotal[] = [
  {id: 1, qty: 0, menu: 'Subtotal', price: '00'},
];
const totalData: OrderTotal[] = [
  {id: 1, qty: 5, menu: 'Subtotal', price: '999'},
];

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  SetTable: undefined;
  SettleOrder: undefined;
  CustomerInfo: undefined;
  TakeOrder: undefined;
  SelectOrder: undefined;
  SetYourChoice: undefined;
  ModifyOrder: undefined;
  PrintOrderFormat: undefined;
  PendingOrders: undefined;
};

const OrderFirstSidebar = () => {
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
  const PrintOrderPress = () => {
    navigation.navigate('PrintOrderFormat');
  };
  const backPress = () => {
    navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('now');
  const state = useNavigationState(state => state);
  const currentRouteName = state.routes[state.index].name;
  const route1 = ['SetTable','SetTableSelect','PendingOrders'];
  const route2 = ['SelectOrder','SelectPackagingMenu','SetYourChoice','AddOns','TakeOutorPickUp','ModifyOrder'];
  const route3 = ['TakeOrder','SelectOrder','SelectPackagingMenu','CustomerInfo','SetYourChoice','AddOns','TakeOutorPickUp','ModifyOrder'];
  const routeToDisableTakeOrderBtn = ['TakeOrder','SelectOrder','SelectPackagingMenu','SetYourChoice','AddOns','TakeOutorPickUp','ModifyOrder'];
  const routePickUp = ['TakeOutorPickUp'];
  const routeTakeOrder = ['SetTableNumber','TakeOrder'];
  const routeMainScreen = ['SetTable','PendingOrders'];
  const routeTableSelect = ['SetTableSelect','SetTableNumber'];
  const routeModifyOrder = ['ModifyOrder'];

  const routeEmptyOrderBox = ['SetTable','SetTableSelect','SetTableNumber','TakeOrder','SetYourChoice','AddOns','PendingOrders','CustomerInfo'];

  const orderItems = ({item}: {item: OrderItem}) => (
    <View style={[GlobalStyles.tblDisplayItem, item.mod && {borderWidth: 1, borderColor: color.border, backgroundColor: color.background}]}>
      <TouchableOpacity style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1,{marginTop: 3}]}>
        <IconItem itype={'AntDesign'} iname={'minuscircleo'} isize={16} icolor={color.alert} />
      </TouchableOpacity>
      <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
        {item.qty}
      </Text>
      <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex10]}>
        <View><TouchableOpacity onPress={() => onPressNavigate('ModifyOrder')}>
          <Text style={GlobalStyles.tblDisplayCellData}>{item.menu}</Text>
          <View style={GlobalStyles.tblDisplayCellPadding}>
            <Text style={GlobalStyles.tblDisplayCellSubData}>1 original</Text>
            <Text style={GlobalStyles.tblDisplayCellSubData}>2 spicy</Text>
            <Text style={GlobalStyles.tblDisplayCellSubData}>2 coke regular</Text>
            <Text style={GlobalStyles.tblDisplayCellSubData}>1 extra rice</Text>
            <Text style={GlobalStyles.tblDisplayCellSubData}>2 spicy</Text>
            <Text style={[GlobalStyles.tblDisplayCellSubData,{color: color.success}]}>2 addon Lettuce 1g</Text>
          </View>
        </TouchableOpacity></View>
      </Text>
      <Text style={[GlobalStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight]}>
        {item.price}
      </Text>

      {route2.includes(currentRouteName) && ( //show this column only in TakeOutorPickup Screen
      <View style={[GlobalStyles.tblBottomCell,{width: 30,paddingTop: 10}]}>
        {item.to ? (<IconItem itype={'material-icons'} iname={'shopping-bag'} isize={20} icolor={color.tertiary} />) 
        : (<IconItem itype={'fontawesome6'} iname={'utensils'} isize={20} icolor={color.shadow} />)}
      </View>
      )}
    </View>
  );

  const subtotalItems = ({item}: {item: OrderTotal}) => (
    <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
      <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1]}></Text>
      <Text style={[GlobalStyles.tblBottomCell, GlobalStyles.tblCellFlex2]}>{item.qty}</Text>
      <Text style={[GlobalStyles.tblBottomCell, GlobalStyles.tblCellFlex10]}>{item.menu}</Text>
      <Text style={[GlobalStyles.tblBottomCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight]}>{item.price}</Text>

      {route2.includes(currentRouteName) && ( //show this column only in TakeOutorPickup Screen
      <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1]}></Text>
      )}
    </View>
  );

  return (
    <View style={GlobalStyles.frameOrderSummary}>
      
      {/* frameHeader */}
      {routeMainScreen.includes(currentRouteName) ? (
      <View style={GlobalStyles.frameHeader}>
        <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
          <TouchableOpacity onPress={() => onPressNavigate('MainViewTerminal')} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
            <IconItem itype="AntDesign" iname="home" isize={28} icolor={color.secondary} />
          </TouchableOpacity>
          <View style={GlobalStyles.headerWrap}>
            <Text style={[GlobalStyles.headerText]}>Benjie</Text>
          </View>
        </View>
      </View>
      ) : routeTableSelect.includes(currentRouteName) ? (
      <View style={GlobalStyles.frameHeader}>
        <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
          <TouchableOpacity onPress={() => onPressNavigate('MainViewTerminal')} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
            <IconItem itype="AntDesign" iname="home" isize={28} icolor={color.secondary} />
          </TouchableOpacity>
          <View style={GlobalStyles.headerWrap}>
            <Text style={[GlobalStyles.headerText]}>Benjie</Text>
          </View>
        </View>
        <View style={GlobalStyles.borderSeparator}></View>
        <View style={GlobalStyles.headerWrap}>
          <Text style={GlobalStyles.headerText}>Table <Text style={GlobalStyles.headerTextLarge}>#001</Text></Text>
        </View>
      </View>
      ) : (
        <View style={GlobalStyles.frameHeader}>
          <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
            <TouchableOpacity onPress={backPress} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
              <IconItem itype="Ionicons" iname="return-up-back-outline" isize={28} icolor={color.secondary} />
            </TouchableOpacity>
            <View style={GlobalStyles.headerWrap}>
              <Text style={[GlobalStyles.headerText]}>Benjie</Text>
            </View>
          </View>
          <View style={GlobalStyles.borderSeparator}></View>
          <View style={GlobalStyles.headerWrap}>
            <Text style={GlobalStyles.headerText}>Table <Text style={GlobalStyles.headerTextLarge}>#001</Text></Text>
          </View>
        </View>
      )}

      {/* Empty Order Summary*/}
      {routeEmptyOrderBox.includes(currentRouteName) ? (
        <View style={GlobalStyles.orderSummaryBox}>

          {!route1.includes(currentRouteName) && (
          <View style={GlobalStyles.orderSummaryHead}>
            <IconItem itype="FontAwesome" iname="user-circle-o" isize={26} icolor={color.secondary} />
            <Text style={GlobalStyles.orderSummaryHeadText}>Juan De la Cruz</Text>
          </View>
          )}

          <View style={[GlobalStyles.tblDisplayRows,GlobalStyles.orderSummaryWrap]}>
            <FlatList
              data={data0}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={orderItems}></FlatList>
          </View>

          {/* Order Summary Subtotal */}
          <View style={GlobalStyles.tblBottomRow}>
            <FlatList
              data={totalData0}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={subtotalItems}></FlatList>
          </View>
        </View>
          
      /** Order Summary - Select Packaging and Others */
      ) : currentRouteName == 'SelectPackagingMenu' ? (
        <View style={GlobalStyles.orderSummaryBox}>
          <View style={GlobalStyles.orderSummaryHead}>
            <IconItem itype="FontAwesome" iname="user-circle-o" isize={26} icolor={color.secondary} />
            <Text style={GlobalStyles.orderSummaryHeadText}>Juan De la Cruz</Text>
          </View>
          <View style={[GlobalStyles.tblDisplayRows,GlobalStyles.orderSummaryWrap]}>
            <View style={GlobalStyles.tblDisplayItem}>
              <TouchableOpacity style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1,{marginTop: 3}]}>
                <IconItem itype={'AntDesign'} iname={'minuscircleo'} isize={16} icolor={color.alert} />
              </TouchableOpacity>
              <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>2</Text>
              <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                  <Text style={GlobalStyles.tblDisplayCellData}>C .Fried Chicken 1pc</Text>
                  <View style={GlobalStyles.tblDisplayCellPadding}>
                    <Text style={GlobalStyles.tblDisplayCellSubData}>2 originals</Text>
                  </View>
                </View>
              </Text>
              <Text style={[GlobalStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight]}>199</Text>
            </View>
            <View style={GlobalStyles.tblDisplayItem}>
              <TouchableOpacity style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1,{marginTop: 3}]}>
                <IconItem itype={'AntDesign'} iname={'minuscircleo'} isize={16} icolor={color.alert} />
              </TouchableOpacity>
              <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>2</Text>
              <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                  <Text style={[GlobalStyles.tblDisplayCellData,{color: color.alert}]}>Packaging and others</Text>
                  <View style={GlobalStyles.tblDisplayCellPadding}>
                    <Text style={[GlobalStyles.tblDisplayCellSubData]}>1 spoon and fork</Text>
                    <Text style={[GlobalStyles.tblDisplayCellSubData]}>2 paper bag</Text>
                  </View>
                </View>
              </Text>
              <Text style={[GlobalStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight]}>00</Text>
            </View>
          </View>

          {/* Order Summary Subtotal */}
          <View style={GlobalStyles.tblBottomRow}>
            <FlatList
              data={totalData}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={subtotalItems}></FlatList>
          </View>
        </View>
      
      /* Modify Orders Summary - Highlighted */
      ) : routeModifyOrder.includes(currentRouteName) ? (
        <View style={GlobalStyles.orderSummaryBox}>
          <View style={GlobalStyles.orderSummaryHead}>
            <IconItem itype="FontAwesome" iname="user-circle-o" isize={26} icolor={color.secondary} />
            <Text style={GlobalStyles.orderSummaryHeadText}>Juan De la Cruz</Text>
          </View>
          
          <View style={[GlobalStyles.tblDisplayRows,GlobalStyles.orderSummaryWrap]}>
            <FlatList
              data={dataModify}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={orderItems}></FlatList>
          </View>

          {/* Order Summary Subtotal */}
          <View style={GlobalStyles.tblBottomRow}>
            <FlatList
              data={totalData0}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={subtotalItems}></FlatList>
          </View>
        </View>

      /**  Default List: Order Summary - Select Orders in Menu */
      ) : (
        <View style={GlobalStyles.orderSummaryBox}>
          <View style={GlobalStyles.orderSummaryHead}>
            <IconItem itype="FontAwesome" iname="user-circle-o" isize={26} icolor={color.secondary} />
            <Text style={GlobalStyles.orderSummaryHeadText}>Juan De la Cruz</Text>
          </View>
          <View style={[GlobalStyles.tblDisplayRows,GlobalStyles.orderSummaryWrap]}>
            <FlatList
              data={data}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={orderItems}></FlatList>
          </View>

          {/* Order Summary Subtotal */}
          <View style={GlobalStyles.tblBottomRow}>
            <FlatList
              data={totalData}
              scrollEnabled={true}
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled={true}
              renderItem={subtotalItems}></FlatList>
          </View>
        </View>
      )}
      
    </View>
  );
};

export default OrderFirstSidebar;

const styles = StyleSheet.create({});
