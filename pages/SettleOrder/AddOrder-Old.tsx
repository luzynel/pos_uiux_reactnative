import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, ScrollView, useWindowDimensions } from 'react-native';
import {React, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IconItem from '../../components/IconItem';
import ProductItem from '../../components/ProductItem';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import { AddOrderStyles } from '../../components/styles/SettleOrderAddOrderStyles';
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

interface AdditionalOrders {
    id: number;
    qty: number;
    menu: string;
    price: string;
}
const dataAdd: AdditionalOrders[] = [
    {id: 1, qty: 2, menu: 'Add 1', price: '55'},
    {id: 2, qty: 3, menu: 'Add 2', price: '77'},
    {id: 3, qty: 4, menu: 'Add 3', price: '45'},
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

const renderScene = ({ route }) => {
    switch (route.key) {
        case 'chicken':
            return <RenderSceneRoute />; 
        case 'burger':
            return <RenderSceneRoute />;
        default:
            return <RenderSceneRoute />;
    }
};

const RenderSceneRoute = () => {
    return (
        <ScrollView style={AddOrderStyles.frameRightInner}>
            <View style={[AddOrderStyles.productItemsContainer]}>
                {/* product item */}
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />

                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </View>      
        </ScrollView>
    );
}

const AddOrder = () => {
    const navigation = useNavigation();
    const onPressNavigate = (navLinkItem) => {
        navigation.navigate(navLinkItem);
    };

    const orderItems = ({item}: {item: OrderItem}) => (
        <View style={AddOrderStyles.tblDisplayItem}>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex8]}>
                <View>
                    <Text style={AddOrderStyles.tblDisplayCellData}>{item.menu}</Text>
                    <View style={AddOrderStyles.tblDisplayCellPadding}>
                        <Text style={AddOrderStyles.tblDisplayCellSubData}>1 original</Text>
                        <Text style={AddOrderStyles.tblDisplayCellSubData}>2 spicy</Text>
                        <Text style={AddOrderStyles.tblDisplayCellSubData}>2 regular coke</Text>
                    </View>
                </View>
            </Text>
          <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex2]}>
            {item.price}
          </Text>
        </View>
      );

    const orderAdditionalItems = ({item}: {item: AdditionalOrders}) => (
        <View style={AddOrderStyles.tblDisplayItem}>
            <TouchableOpacity style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex1]}>
                <IconItem itype={'AntDesign'} iname={'minuscircleo'} isize={16} icolor={color.alert} />
            </TouchableOpacity>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex2]}>
                {item.qty}
            </Text>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex8]}>
                <Text style={AddOrderStyles.tblDisplayCellData}>{item.menu}</Text>
            </Text>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex2]}>
            {item.price}
            </Text>
        </View>
    );
    const subtotalItems = ({item}: {item: OrderTotal}) => (
        <View style={[AddOrderStyles.tblDisplayItemNoBorder]}>
            <Text style={[AddOrderStyles.tblDisplayCellTotal, AddOrderStyles.tblCellFlex1, GlobalStyles.textBold]}></Text>
            <Text style={[AddOrderStyles.tblDisplayCellTotal, AddOrderStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.qty}
            </Text>
            <Text style={[AddOrderStyles.tblDisplayCell, AddOrderStyles.tblCellFlex8]}>
                <Text style={[AddOrderStyles.tblDisplayCellTotal, GlobalStyles.textBold]}>{item.menu}</Text>
            </Text>
            <Text style={[AddOrderStyles.tblDisplayCellTotal, AddOrderStyles.tblCellFlex2, GlobalStyles.textBold]}>
                {item.price}
            </Text>
        </View>
    );

    // Tabs
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'chicken', title: 'Chicken' },
        { key: 'burger', title: 'Burger' },
        { key: 'drinks', title: 'Drinks' },
        { key: 'desserts', title: 'Desserts' },
        { key: 'fries', title: 'Fries' },
        { key: 'sides', title: 'Sides' },
        { key: 'package', title: 'Packaging & Others' },
    ]);
    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={AddOrderStyles.tabIndicator}
          style={AddOrderStyles.tabItem}
          labelStyle={AddOrderStyles.tabItemLabel}
        />
      );

  return (
    <SafeAreaView style={[GlobalStyles.container]}>

        {/* header title */}
        <View style={[AddOrderStyles.headerContainerWrap, GlobalStyles.mainBackground]}>
            <View style={AddOrderStyles.headerInfoWrap}>
                <View style={AddOrderStyles.headerInfoItem}>
                    <Text style={AddOrderStyles.headerInfoItemData}>Hello, Benjie</Text> 
                </View>       
                <View style={[AddOrderStyles.headerInfoItem, AddOrderStyles.headerTitleWrap]}> 
                    <View style={[AddOrderStyles.headerTitleWrapInner]}>
                        <IconItem itype='material-icons' iname="add-shopping-cart" isize={24} icolor={color.light} />
                        <Text style={[AddOrderStyles.headerInfoItemData, AddOrderStyles.headerTitle, GlobalStyles.textUpper]}>Add Order</Text>
                    </View>
                </View>       
                <View style={AddOrderStyles.headerInfoItem}>   
                    <Text style={[AddOrderStyles.headerInfoItemData, GlobalStyles.alignRight]}>Wednesday, July 10, 2024 2:12pm</Text>
                </View>
            </View>
        </View>

        {/** Frames Container */}
      <View style={[AddOrderStyles.frameContainerWrap, {backgroundColor: color.background}]}>
        
        <View style={AddOrderStyles.frameLeft}>
            <ScrollView style={AddOrderStyles.frameLeftInner}>
                
                {/* ButtonsWrap */}
                <View style={GlobalStyles.buttonsWrap}>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                        ]}>
                        <IconItem
                        itype={'fontawesome6'}
                        iname={'utensils'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={AddOrderStyles.buttonText}>Dine-IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                        ]}>
                        <IconItem
                        itype={'material-icons'}
                        iname={'shopping-bag'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={AddOrderStyles.buttonText}>Take-Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                        ]}>
                        <IconItem
                        itype={'fontawesome6'}
                        iname={'truck-pickup'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={AddOrderStyles.buttonText}>Pick-Up</Text>
                    </TouchableOpacity>
                </View>

                {/* Order Summary */}
                <View style={AddOrderStyles.orderSummaryHeading}>
                    <View style={AddOrderStyles.orderSummaryHeadingWrap}>
                        <Text style={AddOrderStyles.orderSummaryHeadingText}>
                            Order Summary
                        </Text>
                    </View>         
                </View>
                
                <View style={AddOrderStyles.orderSummaryWrap}>
                    <FlatList
                    data={data}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={orderItems}></FlatList>
                </View>

                {/* Additional Order */}
                <View style={AddOrderStyles.orderSummaryHeading}>
                    <View style={AddOrderStyles.orderSummaryHeadingWrap}>
                        <Text style={[AddOrderStyles.orderSummaryHeadingText, {color: color.success}]}>
                            Additional Order 
                        </Text>
                    </View>         
                </View>

                <View style={[AddOrderStyles.orderAdditionalWrap, {backgroundColor: '#FCE4D6'}]}>
                    <FlatList
                    data={dataAdd}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={orderAdditionalItems}></FlatList>
                </View>
                <View style={AddOrderStyles.subtotalWrap}>
                    <FlatList
                    data={totalData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true} 
                    renderItem={subtotalItems}></FlatList>
                </View>

                {/* Order Info */}
                <View style={AddOrderStyles.OrderInfoContainer}>
                    <View style={AddOrderStyles.orderInfoRow}>
                        <View style={GlobalStyles.flexRowDirection}>
                        <Text style={GlobalStyles.defaultTextFormat}>
                            ORDER NO.:{' '}
                            <Text style={GlobalStyles.boldTextFormat}>012345</Text>
                        </Text>
                        </View>
                        <View style={GlobalStyles.flexRowDirection}>
                        <Text style={GlobalStyles.defaultTextFormat}>
                            PAX: <Text style={GlobalStyles.boldTextFormat}>4</Text>
                        </Text>
                        </View>
                    </View>
                    <View style={AddOrderStyles.orderInfoRow}>
                        <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>
                        RESERVE NAME:{' '}
                        <Text style={GlobalStyles.boldTextFormat}>
                            Juan U. De la Cruz
                        </Text>
                        </Text>
                    </View>
                    <View style={AddOrderStyles.orderInfoRow}>
                        <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>
                        TABLE: <Text style={GlobalStyles.boldTextFormat}>Table 10</Text>
                        </Text>
                    </View>
                </View>

                {/* Confirm / Cancel Order Buttons */}
                <View style={AddOrderStyles.buttonsWrap}>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                            {backgroundColor: color.success}
                        ]}>
                        <IconItem
                        itype={'Ionicons'}
                        iname={'bag-check'}
                        isize={24}
                        icolor={color.light}
                        />
                        <Text style={[GlobalStyles.buttonText, {marginTop: 6,}]}>Confirm Orders</Text>
                    </TouchableOpacity>
                </View>

                <View style={AddOrderStyles.buttonsWrap}>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                            {backgroundColor: color.alert}
                        ]}
                        onPress={() => onPressNavigate('SettleOrder')}>
                        <IconItem
                        itype={'material-icons'}
                        iname={'cancel'}
                        isize={24}
                        icolor={color.light}
                        />
                        <Text style={[GlobalStyles.buttonText, {marginTop: 6,}]}>Cancel Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                            {backgroundColor: color.primary}
                        ]}
                        onPress={() => onPressNavigate('SetTable')}>
                        <IconItem
                        itype={'fontawesome5'}
                        iname={'home'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={[GlobalStyles.buttonText, {marginTop: 6, color: color.light}]}>Home</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Prepare / Not Prepare Buttons */}
                <View style={AddOrderStyles.buttonsWrap}>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                        ]}>
                        <IconItem
                        itype={'material-icons'}
                        iname={'checklist'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={GlobalStyles.buttonText}>Prepare</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            AddOrderStyles.buttonFlex,
                            AddOrderStyles.buttonSecondary,
                        ]}>
                        <IconItem
                        itype={'material-icons'}
                        iname={'free-cancellation'}
                        isize={22}
                        icolor={color.light}
                        />
                        <Text style={GlobalStyles.buttonText}>Not Prepare</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

        <View style={AddOrderStyles.frameRight}>

            {/* Tabs  */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />             

          {/* Done Button */}
          <View style={[AddOrderStyles.buttonsWrap]}>
                <TouchableOpacity
                    style={[
                        AddOrderStyles.buttonFlex,
                        AddOrderStyles.buttonSecondary,
                    ]}>
                    <IconItem
                    itype={'material-icons'}
                    iname={'check'}
                    isize={28}
                    icolor={color.light}
                    />
                    <Text style={[GlobalStyles.buttonText, {marginTop: 6,}]}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddOrder

const styles = StyleSheet.create({
    
})