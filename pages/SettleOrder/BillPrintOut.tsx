import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import IconItem from '../../components/IconItem';
import { GlobalStyles } from '../../components/styles/GlobalStyles';
import { BillPrintoutStyles } from '../../components/styles/SettleOrderBillPrintoutStyles';
import {color} from '../../assets/utils/colors';

interface OrderItem {
  id: number;
  qty: number;
  menu: string;
  price: string;
}
const data: OrderItem[] = [
  {id: 1, qty: 3, menu: 'C .Fried Chicken 1pc', price: '199'},
  {id: 2, qty: 1, menu: 'D .Fried Chicken - 1pc', price: '285'},
  {id: 3, qty: 1, menu: 'Product 3', price: '399'},
  {id: 4, qty: 2, menu: 'Product 4', price: '199'},
  {id: 5, qty: 6, menu: 'Product 5', price: '295'},
];

interface OrderTotal {
  id: number;
  qty: number;
  menu: string;
  price: string;
}
const totalData: OrderTotal[] = [
  {id: 1, qty: 5, menu: 'Total', price: '545.90'},
];

const SettleOrderPrintBill = () => {
  const navigation = useNavigation();
  const onPressPrint = () => console.log('Print');

  //use global here
  const onPressNavigate = (navLinkItem) => {
    navigation.navigate(navLinkItem);
  };

  const orderItems = ({item}: {item: OrderItem}) => (
    <View style={BillPrintoutStyles.tblDisplayItem}>
        <Text style={[BillPrintoutStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
            {item.qty}
        </Text>
        <Text style={[BillPrintoutStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
            <View>
                <Text style={BillPrintoutStyles.tblDisplayCellData}>{item.menu}</Text>
                <View style={BillPrintoutStyles.tblDisplayCellPadding}>
                    <Text style={BillPrintoutStyles.tblDisplayCellSubData}>1 original</Text>
                    <Text style={BillPrintoutStyles.tblDisplayCellSubData}>2 spicy</Text>
                    <Text style={BillPrintoutStyles.tblDisplayCellSubData}>2 regular coke</Text>
                </View>
            </View>
        </Text>
        <Text style={[BillPrintoutStyles.tblDisplayCell, BillPrintoutStyles.tblCellFlex2]}>
            {item.price}
        </Text>
    </View>
  );

  const totalItems = ({item}: {item: OrderTotal}) => (
      <View style={[GlobalStyles.tblDisplayItemNoBorder, BillPrintoutStyles.totalItemsWrap]}>
          <Text style={[BillPrintoutStyles.tblDisplayCellTotal, GlobalStyles.tblCellFlex6, GlobalStyles.textBold, GlobalStyles.textUpper]}>Total</Text>
          <Text style={[BillPrintoutStyles.tblDisplayCellTotal, GlobalStyles.tblCellFlex4, GlobalStyles.textBold]}>
              13 item(s)
          </Text>
          <Text style={[BillPrintoutStyles.tblDisplayCellTotal, GlobalStyles.tblCellFlex2, GlobalStyles.textBold]}>
              {item.price}
          </Text>
      </View>
  );

  return (
    <SafeAreaView style={BillPrintoutStyles.container}>

        {/* Header */}
        <View style={BillPrintoutStyles.headingContainer}>
          <Text style={[BillPrintoutStyles.headingText]}>Bill Printout View</Text>
        </View>

        {/* Body */}
        <ScrollView style={BillPrintoutStyles.bodyContainer}>
          <View style={BillPrintoutStyles.bodyContainerInner}>
            
            {/* Top Data */}
            <View style={[GlobalStyles.flexContainer, BillPrintoutStyles.bodyContainerInnerWrap]}>
              <View style={[BillPrintoutStyles.bodyContainerInnerItem]}>
                <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                  <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Bill No: </Text>
                  <Text style={[ BillPrintoutStyles.textData ]}>1001</Text>
                </View>
                <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                  <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Cashier: </Text>
                  <Text style={[ BillPrintoutStyles.textData ]}>Benjie Dy</Text>
                </View>
              </View>
              <View style={[BillPrintoutStyles.bodyContainerInnerItem]}>
                <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                  <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Date: </Text>
                  <Text style={[ BillPrintoutStyles.textData ]}>07/22/2024</Text>
                </View>
                <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                  <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Time: </Text>
                  <Text style={[ BillPrintoutStyles.textData ]}>5:09pm</Text>
                </View>
              </View>
              <View style={[BillPrintoutStyles.bodyContainerInnerItem]}>
                  <TouchableOpacity onPress={onPressPrint}>
                      <View style={[BillPrintoutStyles.buttonHome, GlobalStyles.shadowProp ]}>
                          <IconItem itype='fontawesome5' iname='print' isize={15} icolor='#FFF'/>
                          <Text style={[BillPrintoutStyles.buttonTextHome, GlobalStyles.textUpper]}>Print</Text>    
                      </View>
                  </TouchableOpacity>
              </View>
            </View>

            {/* Logo */}
            <View style={BillPrintoutStyles.logoWrap}>
              <Image source={require('../../assets/img/logo.png')} style={BillPrintoutStyles.logo} />
            </View>

            {/* Order Info */}
            <View style={BillPrintoutStyles.orderInfoWrap}>
              
              <View style={[GlobalStyles.flexContainer, BillPrintoutStyles.bodyContainerInnerWrap]}>
                <View style={[BillPrintoutStyles.bodyContainerInnerItem]}>
                  <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                    <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Order No: </Text>
                    <Text style={[ BillPrintoutStyles.textData ]}>321</Text>
                  </View>
                  <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                    <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Pax: </Text>
                    <Text style={[ BillPrintoutStyles.textData ]}>4</Text>
                  </View>
                </View>
                <View style={[BillPrintoutStyles.bodyContainerInnerItem]}>
                  <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                    <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Customer name: </Text>
                    <Text style={[ BillPrintoutStyles.textData ]}>Juan U. Dela Cruz</Text>
                  </View>
                  <View style={[GlobalStyles.flexContainer, {alignItems: 'flex-start'}]}>
                    <Text style={[ GlobalStyles.textUpper, BillPrintoutStyles.textTitle ]}>Table: </Text>
                    <Text style={[ BillPrintoutStyles.textData ]}>Table 10</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Order Details */}
            <View style={[BillPrintoutStyles.tableContainer, BillPrintoutStyles.orderDetailsWrap]}>    
              {/* orders */}
              <View style={[BillPrintoutStyles.transactOrdersSummaryWrap, BillPrintoutStyles.borderDashed]}>
                  <FlatList
                  data={data}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  nestedScrollEnabled={true} 
                  renderItem={orderItems}></FlatList>
              </View>
              <View style={BillPrintoutStyles.transactOrdersTotalWrap}>
                    <FlatList
                    data={totalData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={totalItems}></FlatList>
                </View>
            </View>

            {/* Buttons */}
              <View style={[ BillPrintoutStyles.buttonsWrap ]}>
                <TouchableOpacity onPress={() => onPressNavigate('SettleOrder') }>
                  <View style={[BillPrintoutStyles.buttonOptions, GlobalStyles.shadowProp]}>
                    <IconItem itype='material-icons' iname="shopping-cart-checkout" isize={22} icolor={color.light} />
                    <Text style={[BillPrintoutStyles.buttonTextOptions, {color: color.light}]}>Settle Order</Text>    
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressNavigate('SetTable') }>
                  <View style={[BillPrintoutStyles.buttonOptions, GlobalStyles.shadowProp, {backgroundColor: color.primary}]}>
                    <IconItem itype='material-icons' iname='home' isize={22} icolor={color.light}/>
                    <Text style={[BillPrintoutStyles.buttonTextOptions, {color: color.light}]}>Home</Text>    
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        
        </ScrollView>

    </SafeAreaView>
  );
}

export default SettleOrderPrintBill;

const styles = StyleSheet.create({});