import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import IconItem from '../../components/IconItem';
import { GlobalStyles } from '../../components/styles/GlobalStyles';
import { CancelOrderStyles } from '../../components/styles/CancelOrderStyles'
import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';
import SidebarLeft from '../../components/SidebarLeft';
import OptionBar from '../../components/OptionBar';

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

const dataCancel: OrderItem[] = [
    {id: 1, qty: 2, menu: 'C .Fried Chicken 1pc', price: '199'},
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
const CancelOrder = () => {
    const navigation = useNavigation();
    const onPressNavigate = (navLinkItem) => {
        navigation.navigate(navLinkItem);
    };

    const orderItems = ({item}: {item: OrderItem}) => (
        <TouchableOpacity style={CancelOrderStyles.tblDisplayItem}>
            <Text style={[CancelOrderStyles.tblDisplayCell, GlobalStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCell, GlobalStyles.tblCellFlex8]}>
                <View>
                    <Text style={CancelOrderStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={CancelOrderStyles.tblDisplayCellPadding}>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex2]}>
            {item.price}
            </Text>
        </TouchableOpacity>
    );

    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View style={[CancelOrderStyles.tblDisplayItemNoBorder]}>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex1]}></Text>
            <Text style={[CancelOrderStyles.tblDisplayCellTotal, CancelOrderStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.qty}
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex8]}>
                <Text style={[CancelOrderStyles.tblDisplayCellTotal, GlobalStyles.textBold]}>{item.menu}</Text>
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCellTotal, CancelOrderStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );

    const cancelOrderItems = ({item}: {item: OrderItem}) => (
        <View style={CancelOrderStyles.tblDisplayItemNoBorder}>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex8]}>
                <View>
                    <Text style={CancelOrderStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={CancelOrderStyles.tblDisplayCellPadding}>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={CancelOrderStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
            <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex2]}>
            {item.price}
            </Text>
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
                            <ScrollView style={CancelOrderStyles.frameRightInner}>
                                <View style={CancelOrderStyles.cancelOrderSummaryWrap}>
                                    <View style={CancelOrderStyles.tblDisplayItem}>
                                        <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex2, {fontWeight: '700'}]}>Qty</Text>
                                        <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex8, {fontWeight: '700'}]}>Name</Text>
                                        <Text style={[CancelOrderStyles.tblDisplayCell, CancelOrderStyles.tblCellFlex2, {fontWeight: '700'}]}>Price</Text>
                                    </View>
                                    <FlatList
                                        data={dataCancel}
                                        scrollEnabled={true}
                                        keyExtractor={(item, index) => index.toString()}
                                        nestedScrollEnabled={true} 
                                        renderItem={cancelOrderItems}></FlatList>
                                </View>

                                {/* Cancel Notes */}
                                <View style={CancelOrderStyles.cancelOrderNotesWrap}>
                                    <View style={[CancelOrderStyles.notesWrap]}>
                                        <Text style={[CancelOrderStyles.notesText]}>Notes</Text>
                                        <Textarea 
                                            containerStyle={CancelOrderStyles.textareaContainer}
                                            style={CancelOrderStyles.textarea}
                                            maxLength={240}
                                            placeholder={'Enter cancel notes here'}
                                            placeholderTextColor={CancelOrderStyles.textareaPlaceholder}
                                            underlineColorAndroid={'transparent'} />
                                    </View>
                                    <View style={[CancelOrderStyles.notesInfoWrap]}>
                                        <View style={[CancelOrderStyles.flexWrapRow, CancelOrderStyles.notesInfoTextsWrap, {justifyContent: 'space-between'}]}>
                                            <Text style={[CancelOrderStyles.notesInfoTexts]}>
                                                Authorized by: <Text style={[{fontWeight: '700'}]}>Hector Santillan</Text>
                                            </Text>
                                            <Text style={[CancelOrderStyles.notesInfoTexts]}>
                                                Cashier: <Text style={[{fontWeight: '700'}]}>Benjie Talisic</Text>
                                            </Text>
                                        </View>
                                        <View style={[CancelOrderStyles.notesInfoTextsWrap]}>
                                            <Text style={[CancelOrderStyles.notesInfoTexts]}>
                                                Name: <Text style={[{fontWeight: '700'}]}>Mega Sardines</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* button CANCEL */}
                                <View style={[{margin: 'auto', marginVertical: 20,}]}>
                                    <TouchableOpacity style={[ CancelOrderStyles.buttonFlex, CancelOrderStyles.buttonSecondary, {backgroundColor: color.alert, width: 300,}]}>
                                        <IconItem itype={'MaterialIcons'} iname={'free-cancellation'} isize={28} icolor={color.light} />
                                        <Text style={CancelOrderStyles.buttonsApplyText}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>

                {/* RightBar Frame */}
                <OptionBar pageName={'CancelOrder'} />

            </View>
        </SafeAreaView>
    )
}

export default CancelOrder

const styles = StyleSheet.create({})