import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, ScrollView, useWindowDimensions, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IconItem from '../../components/IconItem';
import ProductItem from '../../components/ProductItem';
import SidebarLeft from '../../components/SidebarLeft';
import OptionBar from '../../components/OptionBar';

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

const Menu1 = () => (
    <ScrollView style={GlobalStyles.scrollViewContainar}>
      <View style={AddOrderStyles.productList}>
            <ProductItem />
      </View>
    </ScrollView>
  );

const AddOrder = () => {
    const layout2 = useWindowDimensions();
    const [index, setIndex2] = React.useState(0);
    const [routes] = React.useState([
        {key: 'menu1', title: 'Chicken'},
        {key: 'menu2', title: 'Burgers'},
        {key: 'menu3', title: 'Desserts'},
        {key: 'menu4', title: 'Drinks'},
        {key: 'menu5', title: 'Fries'},
        {key: 'menu6', title: 'Sides'},
    ]);
    const renderScene2 = SceneMap({
        menu1: Menu1,
        menu2: Menu1,
        menu3: Menu1,
        menu4: Menu1,
        menu5: Menu1,
        menu6: Menu1,
    });

  const renderTabBar2 = (props: any) => {
    const {key, ...otherProps} = props;
    return (
      <TabBar
        {...otherProps}
        indicatorStyle={[
          GlobalStyles.indicator,
          GlobalStyles.productMenuIndicator,
        ]}
        style={GlobalStyles.tabBar}
        labelStyle={GlobalStyles.tabText}
        activeColor={color.secondary}
        inactiveColor={color.shadow}
      />
    );
  };

    /**
         * loading
         * #TODO:
         * update loading when fetching data via API
     */
    const [isLoadingMain, setIsLoadingMain] = useState(true);
    const [isLoadingAdd, setIsLoadingAdd] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoadingMain(false);
            setIsLoadingAdd(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    //dynamic styles
    const {height, width} = useWindowDimensions();
    const isLandscape = width > height;
    const dynamicStyles  = {
        sideActionBarMainButtonsWrap: {
            height: isLandscape ? height - 320 : height - 320,
        },
    };

  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

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
                    <TabView
                        style={GlobalStyles.tabView}
                        navigationState={{index, routes}}
                        renderScene={renderScene2}
                        onIndexChange={setIndex2}
                        initialLayout={{width: layout2.width}}
                        renderTabBar={renderTabBar2}
                        sceneContainerStyle={GlobalStyles.sceneContainer}
                    />  
                </View>
            </View>
        </View>

      {/* RightBar Frame */}
      <OptionBar pageName={'AddOrder'} />

    </View>
  </SafeAreaView>
  )
}

export default AddOrder

const styles = StyleSheet.create({
    
})