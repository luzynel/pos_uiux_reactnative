import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import {font, size} from '../assets/utils/fonts';
import {color} from '../assets/utils/colors';
import IconItem from '../components/IconItem';
import { ReprintReceiptStyles } from '../components/styles/ReprintReceiptStyles';
import SidebarLeft from '../components/SidebarLeft';
import OptionBar from '../components/OptionBar';

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
    //{id: 4, qty: 5, menu: 'Product 4', price: '199'},
    // {id: 5, qty: 6, menu: 'Product 5', price: '295'},
    // {id: 6, qty: 7, menu: 'Product 1', price: '158'},
    // {id: 7, qty: 8, menu: 'Product 2', price: '285'},
    // {id: 8, qty: 9, menu: 'Product 3', price: '399'},
    // {id: 9, qty: 2, menu: 'Product 4', price: '999'},
];

interface OrderTotal {
    id: number;
    qty: number;
    menu: string;
    price: string;
}
const totalData: OrderTotal[] = [
    {id: 1, qty: 9, menu: 'Subtotal', price: '504.55'},
];

const dateOrderList = [
    {id: '1', date: '10/01/2024'},
    {id: '2', date: '10/02/2024'},
    {id: '3', date: '10/03/2024'},
    {id: '4', date: '10/04/2024'},
    {id: '5', date: '10/05/2024'},
];

interface searchResultItem {
    id: number;
    qty: number;
    menu: string;
    price: string;
}

const searchResultData: searchResultItem[] = [
    {id: 1, qty: 2, menu: 'C .Fried Chicken 1pc', price: '199'},
];

const ReprintReceipt = () => {
    const navigation = useNavigation();
    const handleNav = (navLink) => { navigation.navigate(navLink); }

    const orderItems = ({item}: {item: OrderItem}) => (
        <View style={ReprintReceiptStyles.tblDisplayItem}>
            <Text style={[ReprintReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[ReprintReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                    <Text style={ReprintReceiptStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={ReprintReceiptStyles.tblDisplayCellPadding}>
                        <Text style={ReprintReceiptStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={ReprintReceiptStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={ReprintReceiptStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
          <Text style={[ReprintReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
            {item.price}
          </Text>
        </View>
    );

    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View style={[ReprintReceiptStyles.tblDisplayItemNoBorder]}>
            <Text style={[ReprintReceiptStyles.tblDisplayCellTotal, ReprintReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.qty}
            </Text>
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex8]}>
                <Text style={[ReprintReceiptStyles.tblDisplayCellTotal, GlobalStyles.textBold]}>{item.menu}</Text>
            </Text>
            <Text style={[ReprintReceiptStyles.tblDisplayCellTotal, ReprintReceiptStyles.tblCellFlex3, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );

    const searchResultItems = ({item}: {item: searchResultData}) => (
        <View style={ReprintReceiptStyles.tblDisplayItem}>
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall, ReprintReceiptStyles.tblDisplayCellLink]}>736366</Text>
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>321</Text>	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>10</Text>	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex2, GlobalStyles.textSmall]}>Juan U. Dela Cruz</Text>		
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>11</Text>		
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex2, GlobalStyles.textSmall]}>10/06/2024</Text> 	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>4</Text>	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>504.55</Text>	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>Benjie Talisic</Text>	
            <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>Dine</Text>	
        </View>
    );

    return (
        <SafeAreaView style={[GlobalStyles.safeAreaContainer]}>
            {/** Frames Container */}
            <View style={GlobalStyles.framesWrapper}>

                {/* Order Summary Frame */}
                <View style={GlobalStyles.frameOrderSummary}>
                    <SidebarLeft onPressLink={'SettleOrder'} />
                </View>

                {/* Main Frame */}
                <View style={GlobalStyles.frameMain}>
                    <View style={[GlobalStyles.mainContentArea]}>
                        {/* body section */}
                        <View style={GlobalStyles.bodyContainer}>
                            <ScrollView style={ReprintReceiptStyles.frameRightInner}>            
                            
                                {/* Content Section */}
                                <View style={ReprintReceiptStyles.contentSection}>
                                    
                                    {/* Search Box */}
                                    <View style={[ReprintReceiptStyles.searchBoxHeader]}>
                                        <Text style={[ReprintReceiptStyles.searchBoxHeaderText]}>Search by</Text>
                                    </View>
                                    <View style={ReprintReceiptStyles.searchBoxContainer}>
                                        <View style={[GlobalStyles.flexRowDirection, ReprintReceiptStyles.tblCellFlex5, {alignItems: 'center'}]}>
                                            {/* <Text>OR Number: </Text> */}
                                            <TextInput style={[ReprintReceiptStyles.searchInputText]} placeholder='OR Number' />
                                        </View>
                                        <View style={[GlobalStyles.flexRowDirection, ReprintReceiptStyles.tblCellFlex5, {alignItems: 'center'}]}>
                                            {/* <Text>Find By: </Text> */}
                                            <TextInput style={[ReprintReceiptStyles.searchInputText]} placeholder='Order Date' />
                                        </View>
                                        <View style={[GlobalStyles.flexRowDirection, ReprintReceiptStyles.tblCellFlex2, {alignItems: 'center'}]}>
                                            <TouchableOpacity
                                                style={[ReprintReceiptStyles.buttonFlex, ReprintReceiptStyles.buttonFind, {backgroundColor: color.tertiary}]}
                                            >
                                                <IconItem itype={'Foundation'} iname={'magnifying-glass'} isize={22} icolor={color.light}/>
                                                <Text style={[ReprintReceiptStyles.buttonFindText, {color: color.light}]}>Find</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    {/* Search Results */}
                                    <View style={ReprintReceiptStyles.searchResultsContainer}>
                                        <View style={ReprintReceiptStyles.searchResultsContainerInner}>
                                            <View style={[ReprintReceiptStyles.tblDisplayItem]}>
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>OR</Text>
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Order#</Text>	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Table#</Text>	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>Customer</Text>		
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Items</Text>		
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>Date</Text> 	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Pax</Text>	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Total</Text>	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Cashier</Text>	
                                                <Text style={[ReprintReceiptStyles.tblDisplayCell, ReprintReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Etype</Text>		
                                            </View>

                                            <FlatList
                                            data={searchResultData}
                                            scrollEnabled={true}
                                            keyExtractor={(item, index) => index.toString()}
                                            nestedScrollEnabled={true} 
                                            renderItem={searchResultItems}></FlatList>
                                        </View>

                                        {/* Result counts */}
                                        <View style={ReprintReceiptStyles.searchResultsContainer}>
                                            <Text style={[GlobalStyles.textSmall, GlobalStyles.textBold, {color: color.success}]}>1 record found</Text>
                                        </View>

                                        {/* Remarks */}
                                        <View style={[ReprintReceiptStyles.searchResultsContainer, {marginVertical: 10, }]}>
                                            <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Remarks: (NOTES)</Text>
                                            <Textarea 
                                                containerStyle={ReprintReceiptStyles.textareaContainer}
                                                style={ReprintReceiptStyles.textarea}
                                                maxLength={240}
                                                placeholder={''}
                                                placeholderTextColor={ReprintReceiptStyles.textareaPlaceholder}
                                                underlineColorAndroid={'transparent'} />
                                        </View>

                                        {/* Reprint Button */}
                                        <View style={[ReprintReceiptStyles.searchResultsContainer, {alignItems: 'center', alignContent: 'center', marginTop: 15, }]}>
                                            <TouchableOpacity
                                                style={[ReprintReceiptStyles.buttonFlex, ReprintReceiptStyles.buttonReprint, {backgroundColor: color.tertiary}]}
                                            >
                                                <IconItem itype={'AntDesign'} iname={'printer'} isize={22} icolor={color.light}/>
                                                <Text style={[ReprintReceiptStyles.buttonReprintText, {color: color.light}]}>Reprint Receipt</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </View>

                {/* RightBar Frame */}
                <OptionBar pageName={'ReprintReceipt'} />

            </View>
        </SafeAreaView>
    )
}

export default ReprintReceipt

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