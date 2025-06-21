import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, TextInput, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import {font, size} from '../assets/utils/fonts';
import {color} from '../assets/utils/colors';
import IconItem from '../components/IconItem';
import { VoidReceiptStyles } from '../components/styles/VoidReceiptStyles';
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

const VoidReceipt = () => {
    const navigation = useNavigation();
    const handleNav = (navLink) => { navigation.navigate(navLink); }
    
    const [modalVisible, setModalVisible] = useState(false);

    const orderItems = ({item}: {item: OrderItem}) => (
        <View style={VoidReceiptStyles.tblDisplayItem}>
            <Text style={[VoidReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[VoidReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                    <Text style={VoidReceiptStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={VoidReceiptStyles.tblDisplayCellPadding}>
                        <Text style={VoidReceiptStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={VoidReceiptStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={VoidReceiptStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
          <Text style={[VoidReceiptStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
            {item.price}
          </Text>
        </View>
    );

    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View style={[VoidReceiptStyles.tblDisplayItemNoBorder]}>
            <Text style={[VoidReceiptStyles.tblDisplayCellTotal, VoidReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.qty}
            </Text>
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex8]}>
                <Text style={[VoidReceiptStyles.tblDisplayCellTotal, GlobalStyles.textBold]}>{item.menu}</Text>
            </Text>
            <Text style={[VoidReceiptStyles.tblDisplayCellTotal, VoidReceiptStyles.tblCellFlex3, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );

    const searchResultItems = ({item}: {item: searchResultData}) => (
        <View style={VoidReceiptStyles.tblDisplayItem}>
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall, VoidReceiptStyles.tblDisplayCellLink]}>736366</Text>
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>321</Text>	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>10</Text>	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex2, GlobalStyles.textSmall]}>Juan U. Dela Cruz</Text>		
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>11</Text>		
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex2, GlobalStyles.textSmall]}>10/06/2024</Text> 	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>4</Text>	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>504.55</Text>	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>Benjie Talisic</Text>	
            <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textSmall]}>Dine</Text>	
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
                            <ScrollView style={VoidReceiptStyles.frameRightInner}>  
                                {/* Content Section */}
                                <View style={VoidReceiptStyles.contentSection}>
                                    
                                    {/* Search Box */}
                                    <View style={[VoidReceiptStyles.searchBoxHeader]}>
                                        <Text style={[VoidReceiptStyles.searchBoxHeaderText]}>Search by</Text>
                                    </View>
                                    <View style={VoidReceiptStyles.searchBoxContainer}>
                                        <View style={[GlobalStyles.flexRowDirection, VoidReceiptStyles.tblCellFlex5, {alignItems: 'center'}]}>
                                            {/* <Text>OR Number: </Text> */}
                                            <TextInput style={[VoidReceiptStyles.searchInputText]} placeholder='OR Number' />
                                        </View>
                                        <View style={[GlobalStyles.flexRowDirection, VoidReceiptStyles.tblCellFlex5, {alignItems: 'center'}]}>
                                            {/* <Text>Find By: </Text> */}
                                            <TextInput style={[VoidReceiptStyles.searchInputText]} placeholder='Order Date' />
                                        </View>
                                        <View style={[GlobalStyles.flexRowDirection, VoidReceiptStyles.tblCellFlex2, {alignItems: 'center'}]}>
                                            <TouchableOpacity
                                                style={[VoidReceiptStyles.buttonFlex, VoidReceiptStyles.buttonFind, {backgroundColor: color.tertiary}]}
                                            >
                                                <IconItem itype={'Foundation'} iname={'magnifying-glass'} isize={22} icolor={color.light}/>
                                                <Text style={[VoidReceiptStyles.buttonFindText, {color: color.light}]}>Find</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    {/* Search Results */}
                                    <View style={VoidReceiptStyles.searchResultsContainer}>
                                        <View style={VoidReceiptStyles.searchResultsContainerInner}>
                                            <View style={[VoidReceiptStyles.tblDisplayItem]}>
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>OR</Text>
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Order#</Text>	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Table#</Text>	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>Customer</Text>		
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Items</Text>		
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex2, GlobalStyles.textBold]}>Date</Text> 	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Pax</Text>	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Total</Text>	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Cashier</Text>	
                                                <Text style={[VoidReceiptStyles.tblDisplayCell, VoidReceiptStyles.tblCellFlex1, GlobalStyles.textBold]}>Etype</Text>		
                                            </View>

                                            <FlatList
                                            data={searchResultData}
                                            scrollEnabled={true}
                                            keyExtractor={(item, index) => index.toString()}
                                            nestedScrollEnabled={true} 
                                            renderItem={searchResultItems}></FlatList>
                                        </View>

                                        {/* Result counts */}
                                        <View style={VoidReceiptStyles.searchResultsContainer}>
                                            <Text style={[GlobalStyles.textSmall, GlobalStyles.textBold, {color: color.success}]}>1 record found</Text>
                                        </View>

                                        {/* Remarks */}
                                        <View style={[VoidReceiptStyles.searchResultsContainer, {marginVertical: 10, }]}>
                                            <Text style={[GlobalStyles.textNormal, GlobalStyles.textDark]}>Remarks: (NOTES)</Text>
                                            <Textarea 
                                                containerStyle={VoidReceiptStyles.textareaContainer}
                                                style={VoidReceiptStyles.textarea}
                                                maxLength={240}
                                                placeholder={''}
                                                placeholderTextColor={VoidReceiptStyles.textareaPlaceholder}
                                                underlineColorAndroid={'transparent'} />
                                        </View>

                                        {/* Reprint Button */}
                                        <View style={[VoidReceiptStyles.searchResultsContainer, {alignItems: 'center', alignContent: 'center', marginTop: 15, }]}>
                                            <TouchableOpacity onPress={() => setModalVisible(true)}
                                                style={[VoidReceiptStyles.buttonFlex, VoidReceiptStyles.buttonReprint, {backgroundColor: color.tertiary}]}
                                            >
                                                <IconItem itype={'MaterialCommunityIcons'} iname={'table-large-remove'} isize={22} icolor={color.light}/>
                                                <Text style={[VoidReceiptStyles.buttonReprintText, {color: color.light}]}>Void Receipt</Text>
                                            </TouchableOpacity>

                                            <Modal
                                                animationType="slide"
                                                transparent={true}
                                                visible={modalVisible}
                                                onRequestClose={() => {
                                                    setModalVisible(!modalVisible);
                                                }}>
                                                <View style={styles.centeredView}>
                                                    <View style={styles.modalView}>
                                                        <View style={[{marginVertical: 10,}]}>
                                                            <Text style={[styles.modalTextHeading, VoidReceiptStyles.textLink]}>Only Authorized Personnel can access VOID RECEIPT</Text>
                                                            <Text style={styles.modalText}>Please enter authorized credentials:</Text>
                                                        </View>
                                                        <View style={[GlobalStyles.flexContainer, {marginTop: 5,}]}>
                                                            <Text style={[GlobalStyles.textNormal]}>Pass code</Text>
                                                            <View style={styles.inputContainer}>
                                                                <TextInput style={styles.inputText} placeholder='Enter Pass code' />
                                                            </View>
                                                        </View>
                                                        <View style={[GlobalStyles.flexContainer, {gap: 10, marginTop: 15,} ]}>
                                                            <Pressable
                                                            style={[styles.button, styles.buttonAccess]}>
                                                                <Text style={styles.textStyle}>Access Now</Text>
                                                            </Pressable>
                                                            <Pressable
                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => setModalVisible(!modalVisible)}>
                                                                <Text style={styles.textStyle}>Close</Text>
                                                            </Pressable>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Modal>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>

                {/* RightBar Frame */}
                <OptionBar pageName={'VoidReceipt'} />

            </View>
        </SafeAreaView>
    )
}

export default VoidReceipt

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
    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        fontFamily: font.regular,
    },
    modalView: {
        margin: 20,
        backgroundColor: color.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.border,
        padding: 35,
        alignItems: 'center',
        shadowColor: color.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 15,
    },
    modalTextHeading: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: size.h3,
        fontWeight: '600',
        color: color.dark,
        fontFamily: font.regular,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: size.normal,
        fontWeight: '400',
        color: color.alert,
        fontFamily: font.regular,
    },
    inputContainer: {
        backgroundColor: color.light,
        width: 250,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        elevation: 10,
        gap: 5,
        fontFamily: font.regular,
    },
    inputText: {
        flex: 1,
        fontSize: size.normal,
        marginLeft: 15,
        fontFamily: font.regular,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonAccess: {
        width: 120,
        height: 40,
        backgroundColor: color.success,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 2,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: color.alert,
        width: 120,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 2,
        elevation: 5,
    },
    textStyle: {
        color: color.light,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: size.normal,
        fontFamily: font.regular,
    },

})