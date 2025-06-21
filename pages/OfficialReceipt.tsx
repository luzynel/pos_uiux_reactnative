import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'

import { OfficialReceiptStyles } from '../components/styles/OfficialReceiptStyles';
import { GlobalStyles } from '../components/styles/GlobalStyles';
import { TextInput } from 'react-native-paper';

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

const OfficialReceipt = () => {

    const orderItems = ({item}: {item: OrderItem}) => (
        <View style={OfficialReceiptStyles.tblDisplayItem}>
            <Text style={[OfficialReceiptStyles.tblDisplayCell, OfficialReceiptStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[OfficialReceiptStyles.tblDisplayCell, OfficialReceiptStyles.tblCellFlex8]}>
                <View>
                    <Text style={OfficialReceiptStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={OfficialReceiptStyles.tblDisplayCellPadding}>
                        <Text style={OfficialReceiptStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={OfficialReceiptStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={OfficialReceiptStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
            <Text style={[OfficialReceiptStyles.tblDisplayCell, OfficialReceiptStyles.tblCellFlex2]}>
                {item.price}
            </Text>
        </View>
    );

    const totalItems = ({item}: {item: OrderTotal}) => (
        <View style={[OfficialReceiptStyles.tblDisplayItemNoBorder, OfficialReceiptStyles.totalItemsWrap]}>
            <Text style={[OfficialReceiptStyles.tblDisplayCellTotal, OfficialReceiptStyles.tblCellFlex6, GlobalStyles.textBold, GlobalStyles.textUpper]}>Total</Text>
            <Text style={[OfficialReceiptStyles.tblDisplayCellTotal, OfficialReceiptStyles.tblCellFlex4, GlobalStyles.textBold]}>
                13 item(s)
            </Text>
            <Text style={[OfficialReceiptStyles.tblDisplayCellTotal, OfficialReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={OfficialReceiptStyles.container}>
            {/* Header */}
            <View style={OfficialReceiptStyles.headingContainer}>
                <Text style={[OfficialReceiptStyles.headingText]}>Official Receipt</Text>
            </View>
            <ScrollView style={OfficialReceiptStyles.receiptTransactScroll}>
                <View style={OfficialReceiptStyles.containerInner}>
                    {/* Logo */}
                    <View style={OfficialReceiptStyles.logoWrap}>
                        <Image source={require('../assets/img/logo.png')} style={OfficialReceiptStyles.logo} />
                    </View>

                    {/* Company Details */}
                    <View style={OfficialReceiptStyles.companyDetailsWrap}>
                        <View style={OfficialReceiptStyles.companyDetailsWrapInner}>
                            <Text style={OfficialReceiptStyles.storeName}>STORE NAME</Text>	
                            <Text style={OfficialReceiptStyles.companyName}>COMPANY NAME</Text>	
                            <Text style={OfficialReceiptStyles.compAdditionalDetails}>Address first line</Text> 	
                            <Text style={OfficialReceiptStyles.compAdditionalDetails}>Address second line</Text> 	
                            <Text style={OfficialReceiptStyles.compAdditionalDetails}>VAT REG TIN</Text>	
                            <Text style={OfficialReceiptStyles.compAdditionalDetails}>POS SN:	MIN#</Text>
                            <Text style={OfficialReceiptStyles.compAdditionalDetails}>Permit#</Text>		
                        </View>
                    </View>

                    {/* Receipt Transaction */}
                    <View style={OfficialReceiptStyles.receiptTransactionWrap}>
                        {/* TransInfo */}
                        <View style={OfficialReceiptStyles.receipTransInfoWrap}>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>Transact #:</Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>00321</Text>
                            </View>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>Date: </Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>10/26/2024</Text>
                            </View>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>SI#: </Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>736366</Text>
                            </View>
                        </View>
                        <View style={[OfficialReceiptStyles.receipTransInfoWrap]}>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>Check started Time: </Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>9:20am</Text>
                            </View>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>Counter#: </Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>1</Text>
                            </View>
                            <View style={OfficialReceiptStyles.flexWrapRow}>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark]}>User: </Text>
                                <Text style={[GlobalStyles.textNormal, OfficialReceiptStyles.textDark, GlobalStyles.textBold]}>34543</Text>
                            </View>
                        </View>
                        
                        {/* Transaction Orders */}
                        <View style={[OfficialReceiptStyles.transactOrdersSummaryWrap, OfficialReceiptStyles.borderDashed]}>
                            <FlatList
                            data={data}
                            scrollEnabled={true}
                            keyExtractor={(item, index) => index.toString()}
                            nestedScrollEnabled={true} 
                            renderItem={orderItems}></FlatList>
                        </View>
                        
                        <View style={OfficialReceiptStyles.transactOrdersTotalWrap}>
                            <FlatList
                            data={totalData}
                            scrollEnabled={true}
                            keyExtractor={(item, index) => index.toString()}
                            nestedScrollEnabled={true} 
                            renderItem={totalItems}></FlatList>
                        </View>

                        {/* LESS Discounts // Cash, Gcash, Credit/Debit, Split */}
                        <View style={[OfficialReceiptStyles.transactLessDiscountsWrap, OfficialReceiptStyles.borderDashed]}>
                            <View style={[OfficialReceiptStyles.flexWrapRow, {justifyContent: 'flex-start', gap: 10,}]}>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text style={[GlobalStyles.textH3, OfficialReceiptStyles.textDark, GlobalStyles.fontWeightBold]}>Less: </Text>
                                    <Text>&nbsp;</Text>
                                    <Text style={[GlobalStyles.textH3, OfficialReceiptStyles.textDark, GlobalStyles.fontWeightBold]}>TOTAL AMOUNT DUE: </Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.fontWeightBold]}>Discounts</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>20% SENIOR</Text>
                                    <Text>&nbsp;</Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text>&nbsp;</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>73.04</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>344.14</Text>
                                </View>
                            </View>
                            <View style={[OfficialReceiptStyles.flexWrapRow, {justifyContent: 'flex-start', gap: 10,}]}>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text>&nbsp;</Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>CASH:</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>CHANGE:</Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>500.00</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>155.86</Text>
                                </View>
                            </View>
                        </View>

                        {/* VAT */}
                        <View style={[OfficialReceiptStyles.transactLessDiscountsWrap, OfficialReceiptStyles.borderDashed, {marginTop: 10,}]}>
                            <View style={[OfficialReceiptStyles.flexWrapRow, {justifyContent: 'flex-start', gap: 10,}]}>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text>&nbsp;</Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>VAT SUMMARY: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>VAT EXEMPT: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>VATABLE SALES: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>VAT (12%): </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>ZERO-RATED SALES: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark, GlobalStyles.textBold]}>Local Tax: </Text>
                                </View>
                                <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                    <Text>&nbsp;</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>0.00</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>365.18</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>43.82</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>0.00</Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>8.18</Text>
                                </View>
                            </View>
                        </View>

                        {/* if Senior Discount */}
                        <View style={[OfficialReceiptStyles.transactLessDiscountsWrap, OfficialReceiptStyles.borderDashed, {marginTop: 10,}]}>
                            
                            <View style={[GlobalStyles.flexRowDirection, OfficialReceiptStyles.transactLessDiscountsWrap, {justifyContent: 'flex-start', alignItems: 'center', gap: 15,}]}>

                                {/* Senior item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex4, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex4]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Senior Name: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex8]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>

                                {/* Senior item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex4, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>ID: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>

                                {/* Senior item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex4, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Signature: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>
                            </View> 
                        </View>

                        {/* Customer info */}
                        <View style={[OfficialReceiptStyles.transactLessDiscountsWrap, ]}>
                            <View style={[GlobalStyles.flexRowDirection, {justifyContent: 'flex-start', alignItems: 'center', gap: 15, marginVertical: 10,}]}>
                                {/* info item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex6, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Customer Name: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>
                                {/* info item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex6, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Address: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>
                            </View>

                            <View style={[GlobalStyles.flexRowDirection, {justifyContent: 'flex-start', alignItems: 'center', gap: 15, marginVertical: 10,}]}>
                                {/* info item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex6, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>TIN: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>
                                {/* info item */}
                                <View style={[OfficialReceiptStyles.tblCellFlex6, {justifyContent: 'flex-start'}]}>
                                    <View style={[OfficialReceiptStyles.tblCellFlex2]}>
                                        <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Bus Style: </Text>
                                    </View>
                                    <View style={[OfficialReceiptStyles.tblCellFlex10]}>
                                        <TextInput style={[OfficialReceiptStyles.transactInputText]} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Footer */}
                        <View style={[OfficialReceiptStyles.transactionsContainerWrap, {marginTop: 10, marginBottom: 10,}]}>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Check closed: 10/26/2024 8:33AM</Text>
                            </View>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>THIS SERVES AS A SALES INVOICE</Text>
                            </View>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>POS PROVIDER COMPANY NAME</Text>
                            </View>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Address</Text>
                            </View>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>VAT ReG TIN</Text>
                            </View>
                            <View style={[OfficialReceiptStyles.receiptFooterWrap]}>
                                <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Accredit#</Text>
                            </View>
                            <View style={[GlobalStyles.flexRowDirection]}>
                                <View style={[GlobalStyles.flexRowDirection, OfficialReceiptStyles.receiptFooterWrap, { flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Date Issued: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>10/26/2024</Text>
                                </View>
                                <View style={[GlobalStyles.flexRowDirection, OfficialReceiptStyles.receiptFooterWrap, { flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}]}>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Date Expiry: </Text>
                                    <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>10/26/2025</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default OfficialReceipt

const styles = StyleSheet.create({})