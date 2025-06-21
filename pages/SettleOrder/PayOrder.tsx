import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, ScrollView, TextInput, Modal, Pressable } from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'
import BankList from '../../components/SettleOrder/BankList';
import Calculator from '../../components/Calculator';

import IconItem from '../../components/IconItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModeOfPayment from '../../components/SettleOrder/ModeOfPayment';
import PaymentList from '../../components/SettleOrder/PaymentList';
import SidebarLeft from '../../components/SidebarLeft';
import OptionBar from '../../components/OptionBar';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import { PayOrderStyles } from '../../components/styles/SettleOrderPayOrderStyles';
import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

interface OrderItem {
    id: number;
    qty: number;
    menu: string;
    price: string;
}
const data: OrderItem[] = [
    {id: 1, qty: 2, menu: 'C .Fried Chicken 1pc', price: '199'},
    {id: 2, qty: 3, menu: 'Product 2', price: '285'},
    {id: 3, qty: 4, menu: 'Product 3', price: '399'},
    {id: 4, qty: 5, menu: 'Product 4', price: '199'},
    {id: 5, qty: 6, menu: 'Product 5', price: '295'},
    {id: 6, qty: 7, menu: 'Product 1', price: '158'},
    {id: 7, qty: 8, menu: 'Product 2', price: '285'},
    {id: 8, qty: 9, menu: 'Product 3', price: '399'},
    {id: 9, qty: 2, menu: 'Product 4', price: '999'},
];

interface OrderTotal {
    id: number;
    qty: number;
    menu: string;
    price: string;
}
const totalData: OrderTotal[] = [
    {id: 1, qty: 5, menu: 'Subtotal', price: '55'},
];

const discountsList = [
    {title: 'SENIOR', code: 'SENIOR', value: '20%'},
    {title: 'PWD', code: 'PWD', value: '15%'},
];

const discountChargeList = [
    {title: 'Junior Distributor', code: 'JrDist', value: '10%'},
    {title: 'Senior Distributor', code: 'SrDist', value: '12%'},
];

const SettleOrderPayOrder = () => {
    const navigation = useNavigation();
    const onPressNavigate = (navLinkItem) => {
        navigation.navigate(navLinkItem);
    };
   
    const orderItems = ({item}: {item: OrderItem}) => (
        <View style={PayOrderStyles.tblDisplayItem}>
            <Text style={[PayOrderStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[PayOrderStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                    <Text style={PayOrderStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={PayOrderStyles.tblDisplayCellPadding}>
                        <Text style={PayOrderStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={PayOrderStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={PayOrderStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
          <Text style={[PayOrderStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
            {item.price}
          </Text>
        </View>
    );

    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View style={[PayOrderStyles.tblDisplayItemNoBorder]}>
            <Text style={[PayOrderStyles.tblDisplayCell, PayOrderStyles.tblCellFlex1]}></Text>
            <Text style={[PayOrderStyles.tblDisplayCellTotal, GlobalStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.qty}
            </Text>
            <Text style={[PayOrderStyles.tblDisplayCell, PayOrderStyles.tblCellFlex8]}>
                <Text style={[PayOrderStyles.tblDisplayCellTotal, GlobalStyles.textBold]}>{item.menu}</Text>
            </Text>
            <Text style={[PayOrderStyles.tblDisplayCellTotal, GlobalStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );
    
    //Payment Mode Modal
    const [paymentMode, setPaymentMode] = useState('cash');
    const [modalVisible, setModalVisible] = useState(false);
    const handlePaymentMode = (mode) => {
         setModalVisible(!modalVisible);
         setPaymentMode(mode);
    }

    //discounts modal
    const [discountsModal, setdDiscountsModal] = useState(false);
    const [discountChargeModal, setDiscountChargeModal] = useState(false);
    const [discountLoyaltyPointsModal, setDiscountLoyaltyPointsModal] = useState(false);
    const [splitPaymentsModal, setSplitPaymentsModal] = useState(false);
    
    //discount types radio button
    const discountTypeOptions = useMemo(() => ([
        {
            id: '1', 
            label: 'Percentage',
            value: 'percentage'
        },
        {
            id: '2',
            label: 'Amount',
            value: 'amount'
        }
    ]), []);
    const [discountTypeSelected, setdiscountTypeSelected] = useState();

    const [amountTendered, setAmountTendered] = useState('');
    const handleDataFromCalculator = (data) => {

        if(amountTendered == '' && data === '10') {
            setAmountTendered('');
        
        }else if(amountTendered == '' && data === '0') {
            setAmountTendered('');

        }else if (data === '10') { //if '00'
            data = '00';
            const newAmountTendered = amountTendered + data; 
            setAmountTendered(newAmountTendered);

        }else if (data === '11') {  //if '.'
            data = '.';
            const newAmountTendered = amountTendered + data; 
            setAmountTendered(newAmountTendered);

        }else if (data === 'C') { // if 'C'
            setAmountTendered('');

        }else {
            const newAmountTendered = amountTendered + data; 
            setAmountTendered(newAmountTendered);
        }
    };
 
  return (
    <SafeAreaView style={[GlobalStyles.safeAreaContainer]}>

        <View style={GlobalStyles.framesWrapper}>

            <View style={GlobalStyles.frameOrderSummary}>
                <SidebarLeft onPressLink={'SettleOrder'} />
            </View>

            <View style={GlobalStyles.frameMain}>
                <View style={[GlobalStyles.mainContentArea]}>
                    <View style={[GlobalStyles.mainContentAreaInner]}>
                        <View style={[GlobalStyles.flexRow]}>
                            <View style={[GlobalStyles.tblCellFlex3, {marginVertical: 6,}]}>
                                <Text style={[GlobalStyles.textBold, GlobalStyles.textH1, GlobalStyles.textDark]}>Balance due: </Text>
                            </View>
                            <View style={[]}>
                                <View style={[GlobalStyles.flexContainer]}>
                                    <IconItem itype={'FontAwesome6'} iname={'peso-sign'} isize={20} icolor={color.dark} /> 
                                    <Text style={[GlobalStyles.textBold, GlobalStyles.textH1, GlobalStyles.textDark]}>580.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[GlobalStyles.flexRow, {marginVertical: 6,}]}>
                            <View style={[GlobalStyles.tblCellFlex3]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textNormal, GlobalStyles.textDark]}>Change due: </Text>
                            </View>
                            <View style={[]}>
                                <View style={[GlobalStyles.flexContainer]}>
                                    <IconItem itype={'FontAwesome6'} iname={'peso-sign'} isize={20} icolor={color.success} /> 
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textNormal, GlobalStyles.textDark, {color: color.success}]}>0.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[GlobalStyles.flexRow, {alignItems: 'center', marginVertical: 2,}]}>
                            <View style={[GlobalStyles.tblCellFlex3]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textNormal, GlobalStyles.textDark]}>Amount tendered: </Text>
                            </View>
                            <View style={[GlobalStyles.tblCellFlex9]}>
                                <View style={[GlobalStyles.flexContainer]}>
                                    <TextInput style={[PayOrderStyles.amountTenderedText, GlobalStyles.textRight, GlobalStyles.textBold, {color: color.success}]} value={amountTendered} placeholder='0.00' inputMode='decimal'/>
                                </View>
                            </View>
                        </View>

                        {/* Payment Used */}
                        <ScrollView style={[GlobalStyles.payOrderPaymentsWrap]}>
                            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex6]}>
                                    <Text style={[GlobalStyles.textUpper, {color: color.dark}]}>Cash (Payment): </Text>
                                </Text>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex4, GlobalStyles.textBold, GlobalStyles.textRight, {color: color.dark}]}>
                                    250.00
                                </Text>
                            </View>
                            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex6]}>
                                    <Text style={[GlobalStyles.textUpper, {color: color.dark}]}>Credit/Debit (Payment): </Text>
                                </Text>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex4, GlobalStyles.textBold, GlobalStyles.textRight, {color: color.dark}]}>
                                    330.00
                                </Text>
                            </View>
                            {/* <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex6]}>
                                    <Text style={[GlobalStyles.textUpper, {color: color.dark}]}>E-Wallet (Payment): </Text>
                                </Text>
                                <Text style={[GlobalStyles.textDisplayRow, GlobalStyles.tblCellFlex4, GlobalStyles.textBold, GlobalStyles.textRight, {color: color.dark}]}>
                                    80.00
                                </Text>
                            </View> */}
                        </ScrollView>
                        
                        {/* Calculator */}
                        <View style={[GlobalStyles.flexRow, {marginVertical: 6,}]}>
                            <Calculator onDataTendered={handleDataFromCalculator} />
                        </View>


                        {/* <View style={[GlobalStyles.transactOrdersWrap, {marginTop: 50,}]}>
                            <ModeOfPayment props={ {pmode: paymentMode} } />
                        </View>*/}
                        
                        <View style={[GlobalStyles.buttonsWrap, {marginTop: 10,}]}>
                            <TouchableOpacity style={[PayOrderStyles.buttonConfirm, {backgroundColor: color.info}]} disabled>
                                <IconItem itype={'AntDesign'} iname={'checkcircle'} isize={26} icolor={color.light} />
                                <Text style={[PayOrderStyles.buttonText, PayOrderStyles.buttonMoreText]}>Confirm</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </View>

            {/* RightBar Frame */}
            <OptionBar pageName={'PayOrder'} amountTendered={amountTendered} />

        </View>

    </SafeAreaView>
  )
}

export default SettleOrderPayOrder

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: 220,
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownButtonArrowStyle: {
        fontSize: 28,
      },
      dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
      dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
      },
      dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
      },
      dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
})