import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React,{useState,useEffect} from 'react';
import {useNavigation,useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import IconItem from '../components/IconItem';
import { GlobalStyles } from '../components/styles/GlobalStyles';
import SetTableStyles from '../components/styles/SetTableStyles';
import { BillPrintoutStyles } from '../components/styles/SettleOrderBillPrintoutStyles';
import PrintOrderList from '../components/styles/TakeOrderPrintOrderListStyles';
import {color} from '../assets/utils/colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  SetTable: undefined;
};

const PrintOrderFormat = () => {
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

  return (
    <SafeAreaView style={BillPrintoutStyles.container}>

        {/* Header */}
        <View style={BillPrintoutStyles.headingContainer}>
          <Text style={[BillPrintoutStyles.headingText]}>Print Order List View</Text>
        </View>

        {/* Body */}
        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <ScrollView style={BillPrintoutStyles.bodyContainer}>
          <View style={BillPrintoutStyles.bodyContainerInner}>
            
            <Text style={PrintOrderList.headingText}>Kitchen</Text>
            <View style={PrintOrderList.orderDetails}>
              <Text style={PrintOrderList.normalText}>07 Oct 2024 17:00</Text>
              <View style={PrintOrderList.infoSeparatorBorder}></View>
              <Text style={PrintOrderList.normalText}>#ORD-321</Text>
              <View style={PrintOrderList.infoSeparatorBorder}></View>
              <Text style={PrintOrderList.normalText}>Server 1</Text>
            </View>

            <Text style={PrintOrderList.orderListHeading}>{'---  '} Order {'  ---'}</Text>

            <View style={PrintOrderList.orderList}>
              
              <Text style={[PrintOrderList.normalText,GlobalStyles.textH3,GlobalStyles.textBold]}>Set001 Chicken Joy with drinks</Text>
              <View style={PrintOrderList.categoryTable}>
                <View style={PrintOrderList.categoryTblHead}>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex5]}>
                    <Text style={PrintOrderList.categoryHeadText}>Category</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex1]}>
                    <Text style={PrintOrderList.categoryHeadText}>Qty</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex4]}>
                    <Text style={PrintOrderList.categoryHeadText}>Order:</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex2]}>
                    <Text style={PrintOrderList.categoryHeadText}></Text>
                  </View>
                </View>
                <View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Chicken</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>2</Text>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>Chicken 1pc</Text>
                      <Text style={PrintOrderList.bodyText}>Chicken 1pc</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                      <Text style={[PrintOrderList.bodyText]}> Spicy</Text>
                      <Text style={[PrintOrderList.bodyText]}> Original</Text>
                    </View>
                  </View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Drinks</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>2</Text>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>coke regular</Text>
                      <Text style={PrintOrderList.bodyText}>coke  medium</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                    </View>
                  </View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Extras</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>rice</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                    </View>
                  </View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Addon</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>Lettuce 1g</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={PrintOrderList.orderList}>
              <Text style={[PrintOrderList.normalText,GlobalStyles.textH3,GlobalStyles.textBold]}>Set002 Chicken Joy with drinks</Text>
              <View style={PrintOrderList.categoryTable}>
                <View style={PrintOrderList.categoryTblHead}>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex5]}>
                    <Text style={PrintOrderList.categoryHeadText}>Category</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex1]}>
                    <Text style={PrintOrderList.categoryHeadText}>Qty</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex4]}>
                    <Text style={PrintOrderList.categoryHeadText}>Order:</Text>
                  </View>
                  <View
                    style={[PrintOrderList.tblCell, GlobalStyles.tblCellFlex2]}>
                    <Text style={PrintOrderList.categoryHeadText}></Text>
                  </View>
                </View>
                <View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Chicken</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>Chicken 1pc</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                      <Text style={[PrintOrderList.bodyText]}> Original</Text>
                    </View>
                  </View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Drinks</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>coke regular</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                    </View>
                  </View>
                  <View style={[GlobalStyles.flexRowDirection,PrintOrderList.tblRow]}>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex5]}>
                      <Text style={PrintOrderList.bodyText}>Fries</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex1]}>
                      <Text style={PrintOrderList.bodyText}>1</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex4]}>
                      <Text style={PrintOrderList.bodyText}>regular fries</Text>
                    </View>
                    <View style={[PrintOrderList.tblCell,GlobalStyles.tblCellFlex2]}>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Total */}
            <View style={[GlobalStyles.flexRowDirection, {gap: 20,marginBottom: 20}]}>
              <Text style={PrintOrderList.normalText}>Total:</Text>
              <Text style={[PrintOrderList.normalText,GlobalStyles.boldTextFormat]}>13 items</Text>
            </View>

            {/* Buttons */}
            <View style={[ BillPrintoutStyles.buttonsWrap ]}>
              <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableMenuItem,GlobalStyles.bgPrimary,]} onPress={() => onPressNavigate('MainViewTerminal')}>
                  <IconItem itype={'AntDesign'} iname={'home'} isize={30} icolor={color.light} />
                  <View style={[GlobalStyles.buttonTextWrap,{marginTop: 5, height: 'auto'}]}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>HOME</Text></View>
              </TouchableOpacity>
            </View>
          </View>        
        </ScrollView>
        }
    </SafeAreaView>
  );
}

export default PrintOrderFormat;

const styles = StyleSheet.create({});