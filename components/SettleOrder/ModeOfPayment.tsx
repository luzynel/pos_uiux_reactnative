import { Text, View, FlatList, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BankList from './BankList';

import { GlobalStyles } from '../styles/GlobalStyles';
import { PayOrderStyles } from '../styles/SettleOrderPayOrderStyles';
import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

interface OrderTransactVals {
    id: number;
    subtotal: number;
    service: number;
    total: number;
    cash: number;
    change: number;
}
const orderTransactData: OrderTransactVals[] = [
    {id: 1, subtotal: 409, service: 20.45, total: 429.45, cash: 500, change: 70.55}
];

const ModeOfPayment = ({props}) => {
    
    const orderTransactItems = ({item}: {item: OrderTransactVals}) => (
        <View style={PayOrderStyles.tblDisplayTransactItem}>
            <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {textTransform: 'uppercase', fontSize: size.h3}]}>Sub Total: </Text>
                <View style={PayOrderStyles.orderTransactItemData}>
                    <TextInput style={[PayOrderStyles.transactInputText, {color: color.secondary, fontSize: size.h3}]} value='409.00' readOnly/>
                </View>
            </View>
            <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {textTransform: 'uppercase', fontSize: size.h3}]}>Service charge: </Text>
                <View style={PayOrderStyles.orderTransactItemData}>
                    <TextInput style={[PayOrderStyles.transactInputText, {color: color.secondary, fontSize: size.h3}]} value='20.45' readOnly/>
                </View>
            </View>
            <View style={[PayOrderStyles.totalWrap, PayOrderStyles.transactItemsWrap]}>
                <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Total: </Text>
                <View style={PayOrderStyles.orderTransactItemData}>
                    <TextInput style={[PayOrderStyles.transactInputText, {color: color.secondary, fontSize: size.h2}]} value='429.45' readOnly/>
                </View>
            </View>
            <View style={[PayOrderStyles.cashWrap, PayOrderStyles.transactItemsWrap]}>
                <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Cash: </Text>
                <View style={PayOrderStyles.orderTransactItemData}>
                    <TextInput style={[PayOrderStyles.transactInputText, {color: color.secondary, fontSize: size.h2}]} value='500.00' readOnly/>
                </View>
            </View>
            <View style={[PayOrderStyles.changeWrap, PayOrderStyles.transactItemsWrap]}>
                <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Change: </Text>
                <View style={PayOrderStyles.orderTransactItemData}>
                    <TextInput style={[PayOrderStyles.transactInputText, {color: color.secondary, fontSize: size.h2}]} value='70.55' readOnly/>
                </View>
            </View>
        </View>
    );

    const orderPaymentEwallet = () => (
        <>
            <View style={PayOrderStyles.tblDisplayTransactItem}>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Sub Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText]} value='409.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Service charge: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small}]} value='20.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.totalWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.primary, color: color.light, fontSize: size.h2}]} value='429.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.cashWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Cash: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.tertiary, color: color.light, fontSize: size.h2}]} value='500.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.changeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Change: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.success, color: color.light, fontSize: size.h2}]} value='70.55' readOnly/>
                    </View>
                </View>
                
            </View>
            <View style={PayOrderStyles.tblDisplayTransactItem}>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Reference No.: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText]} value='9474774' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Account No.: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.light}]} />
                    </View>
                </View>
            </View>
        </>
    );

    const orderPaymentCreditDebit = () => (
        <>
            <View style={PayOrderStyles.tblDisplayTransactItem}>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Sub Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText]} value='409.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Service charge: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small}]} value='20.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.totalWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.primary, color: color.light, fontSize: size.h2}]} value='429.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.cashWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Cash: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.tertiary, color: color.light, fontSize: size.h2}]} value='500.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.changeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Change: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.success, color: color.light, fontSize: size.h2}]} value='70.55' readOnly/>
                    </View>
                </View>
            </View>
            <View style={PayOrderStyles.tblDisplayTransactItem}>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Card No.: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText]} value='12345*******0906'/>
                    </View>
                </View>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Bank: </Text>
                    <View style={[PayOrderStyles.orderTransactItemData, {flexDirection: 'row', justifyContent: 'flex-start', gap: 12,}]}>
                      
                        <BankList />

                        <TextInput style={[PayOrderStyles.transactInputText, {width: '20%'}]} value='89740'/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>APPROVAL CODE: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.light}]} />
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Card Holder name: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.light}]} />
                    </View>
                </View>
            </View>
        </>
    );
    
    const orderPaymentDiscounts = () => (
        <>
            <View style={PayOrderStyles.tblDisplayTransactItem}>
                <View style={[PayOrderStyles.subTotalTransactWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem]}>Sub Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText]} value='409.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Service charge: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small}]} value='20.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Discounts: </Text>
                    <View style={[PayOrderStyles.orderTransactItemData]}>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%'}]}>
                            <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small, width: '20%'}]} value='73.04' readOnly/>
                            <Text style={[{color: color.dark, fontSize: size.small}]}>20% SENIOR</Text>
                            <Text style={[{color: color.dark, fontSize: size.small}]}>Juan Dela Cruz 45322</Text>
                        </View>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small}]}>Loyalty Pts: </Text>
                    <View style={[PayOrderStyles.orderTransactItemData]}>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%'}]}>
                            <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small, width: '20%'}]} value='50.00' readOnly/>
                            <Text style={[{color: color.dark, fontSize: size.small}]}>&nbsp;</Text>
                            <Text style={[{color: color.dark, fontSize: size.small}]}>Juan Dela Cruz LC123335</Text>
                        </View>
                    </View>
                </View>
                <View style={[PayOrderStyles.serviceChargeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, {fontSize: size.small, fontWeight: '700'}]}>Total Discounts: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {fontSize: size.small}]} value='123.04' readOnly/>
                    </View>
                </View>

                <View style={[PayOrderStyles.totalWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Total: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.primary, color: color.light, fontSize: size.h2}]} value='429.45' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.cashWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Cash: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.tertiary, color: color.light, fontSize: size.h2}]} value='500.00' readOnly/>
                    </View>
                </View>
                <View style={[PayOrderStyles.changeWrap, PayOrderStyles.transactItemsWrap]}>
                    <Text style={[PayOrderStyles.orderTransactItemName, PayOrderStyles.orderTransactItem, GlobalStyles.textUpper]}>Change: </Text>
                    <View style={PayOrderStyles.orderTransactItemData}>
                        <TextInput style={[PayOrderStyles.transactInputText, {backgroundColor: color.success, color: color.light, fontSize: size.h2}]} value='70.55' readOnly/>
                    </View>
                </View>
            </View>
        </>
    );
    
  return (
    <>
        { (props.pmode == 'cash') 
            ? 
                <FlatList
                data={orderTransactData}
                scrollEnabled={true}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled={true} 
                renderItem={orderTransactItems}></FlatList> 
            : '' 
        }   

        { (props.pmode == 'ewallet') 
            ? 
                <FlatList
                    data={orderTransactData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={orderPaymentEwallet}></FlatList>
            : '' 
        }   

        { (props.pmode == 'credit/debit') 
            ? 
                <FlatList
                    data={orderTransactData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={orderPaymentCreditDebit}></FlatList>
            : '' 
        }   

        { (props.pmode == 'discounts') 
            ? 
                <FlatList
                    data={orderTransactData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={orderPaymentDiscounts}></FlatList>
            : '' 
        }   
    </>
  )
}

export default ModeOfPayment

const styles = StyleSheet.create({
    dropdownButtonStyle: {
        width: 200,
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
});