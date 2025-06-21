import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, useWindowDimensions, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import IconItem from '../components/IconItem';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import {color} from '../assets/utils/colors';

interface OrderItem {
    id: number;
    qty: number;
    product: string;
    total: string;
}

const data: OrderItem[] = [
    {id: 1, qty: 2, product: 'C .Fried Chicken 1pc', total: '199'},
    {id: 2, qty: 3, product: 'Product 2', total: '285'},
    {id: 3, qty: 4, product: 'Product 3', total: '399'},
];

interface OrderTotal {
    id: number;
    qty: number;
    menu: string;
    price: string;
}

const totalData: OrderTotal[] = [
    {id: 1, qty: 5, menu: 'Subtotal', price: '543.00'},
];

const SidebarLeft = ({ onPressLink }) => {
    const navigation = useNavigation();
    const onPressNavigate = (navLinkItem) => {
        navigation.navigate(navLinkItem);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const cancelOrderModal = () => {
        onPressNavigate('SettleCancelOrder');
        setModalVisible(!modalVisible);
    };

    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View>
            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.sideTblDisplayCellSubTotal, GlobalStyles.textBold, GlobalStyles.textUpper]}>Subtotal: </Text>
                </Text>
                <Text style={[GlobalStyles.sideTblDisplayCellSubTotal, GlobalStyles.tblCellFlex4, GlobalStyles.textBold, GlobalStyles.textRight]}>
                    {item.price}
                </Text>
            </View>
            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges, GlobalStyles.textUpper]}>Discounts: </Text>
                </Text>
                <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges, GlobalStyles.tblCellFlex4, GlobalStyles.textRight]}>
                    0
                </Text>
            </View>
            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges,  GlobalStyles.textUpper]}>Service Charge: </Text>
                </Text>
                <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges, GlobalStyles.tblCellFlex4, GlobalStyles.textRight]}>
                    15.00
                </Text>
            </View>
            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges, GlobalStyles.textUpper]}>Tax: </Text>
                </Text>
                <Text style={[GlobalStyles.sideTblDisplayCellOtherCharges, GlobalStyles.tblCellFlex4, GlobalStyles.textRight]}>
                    22.00
                </Text>
            </View>
            <View style={[GlobalStyles.tblDisplayItemNoBorder]}>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.sideTblDisplayCellTotal, GlobalStyles.textBold, GlobalStyles.textUpper]}>TOTAL: </Text>
                </Text>
                <Text style={[GlobalStyles.sideTblDisplayCellTotal, GlobalStyles.tblCellFlex4, GlobalStyles.textBold, GlobalStyles.textRight]}>
                    580.00
                </Text>
            </View>
        </View>
    );

    //dynamic styles
    const {height, width} = useWindowDimensions();
    const isLandscape = width > height;
    const dynamicStyles  = {
        sideOrderSummaryHeight: {
            height: isLandscape ? height - 320 : height - 340,
        },
        sideSubtotalWrapHeight: {
            height: isLandscape ? 150 : 180,
        },
    };

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    //products
    // const [orderList, setOrderList] = useState([]);
    // useEffect(() => {
    //     getOrderSummary();
    // }, []);
    // const getOrderSummary = async () => {
    //     try {
    //         const apiUrl = "https://01fe-180-190-155-250.ngrok-free.app/orders";
    //         const response = await fetch(apiUrl);
    //         const data = await response.json();
    //         setOrderList(data);
    //         setIsLoading(false);
    //     }catch(error) {
    //         console.log('error', error);
    //     }
    // };

    // //product
    // const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     getProduct();
    // });

    const orderItems = ({ item }) => (
        <TouchableOpacity activeOpacity={0.5}>

            <View style={GlobalStyles.tblDisplayItem}>
                <View style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1, GlobalStyles.orderSummaryMinus]}>
                    <IconItem itype={'AntDesign'} iname={'minuscircleo'} isize={16} icolor={color.alert} />
                </View>
               <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex2, GlobalStyles.tblDisplayCellData]}>
                    {item.orderno}
                </Text>
                <View style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex6]}>
                    <Text style={[GlobalStyles.tblDisplayCellData, {color: color.tertiary}]}>{item.product}</Text>
                    <View style={GlobalStyles.tblDisplayCellPadding}>
                        <Text style={GlobalStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={GlobalStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={GlobalStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
                <Text style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex3, GlobalStyles.tblDisplayCellData]}>
                    {item.total}
                </Text>
                <View style={[GlobalStyles.tblDisplayCell, GlobalStyles.tblCellFlex1]}>
                    <IconItem itype={'MaterialCommunityIcons'} iname={'food-off'} isize={24} icolor={color.purple} />
                </View>
            </View>

        </TouchableOpacity>
    );
  return (
    <>
         {/* hello section */}
         <View style={[GlobalStyles.mainBackground]}>
            <View style={GlobalStyles.sideHeaderInfoWrap}>
                <View style={[GlobalStyles.sideHeaderInfoItem]}>
                    <TouchableOpacity style={[GlobalStyles.buttonTopBack,]} onPress={ () => {onPressNavigate(onPressLink)}}>
                        <IconItem itype={'MaterialIcons'} iname={'arrow-back'} isize={24} icolor={color.secondary} />
                    </TouchableOpacity>  
                    <View>
                        <Text style={GlobalStyles.sideCustomerSectionText}>Customer 1</Text>
                    </View> 
                </View>       
                <View style={[GlobalStyles.sideHeaderInfoItem]}> 
                    <Text style={[GlobalStyles.sideHeaderInfoItemData, GlobalStyles.textUpper]}>Table #01</Text>
                </View>   
            </View>
        </View> 

        {/* Order Summary */}
        <View style={[GlobalStyles.sideOrderSummaryWrap, dynamicStyles.sideOrderSummaryHeight]}>
            { isLoading ? 
                <ActivityIndicator color="blue" size="small" />
            : 
                <FlatList
                data={data}
                scrollEnabled={true}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled={true} 
                renderItem={orderItems}></FlatList>
            } 
        </View>
      
        {/* subtotal */}
        <View style={[GlobalStyles.sideSubtotalWrap]}>
            <FlatList
            data={totalData}
            scrollEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled={true} 
            renderItem={subtotalItems}></FlatList>
        </View>
    </>
  )
}

export default SidebarLeft

const styles = StyleSheet.create({})