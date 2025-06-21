import { StyleSheet, View, SafeAreaView, useWindowDimensions, ScrollView, ActivityIndicator } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import TakeOrderStyles from '../components/styles/TakeOrderStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import OptionBar from '../components/OptionBar';
import ProductItem_TakeOrder from '../components/ProductItem-TakeOrder';
import {color} from '../assets/utils/colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  ModifyOrder: undefined;
  SetTable: undefined;
};

const Menu1 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainer}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />

      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
    </View>
  </ScrollView>
);

export default function TakeOrder() {
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

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'menu1', title: 'Chicken'},
    {key: 'menu2', title: 'Burgers'},
    {key: 'menu3', title: 'Desserts'},
    {key: 'menu4', title: 'Drinks'},
    {key: 'menu5', title: 'Fries'},
    {key: 'menu6', title: 'Sides'},
  ]);
  const renderScene = SceneMap({
    menu1: Menu1,
    menu2: Menu1,
    menu3: Menu1,
    menu4: Menu1,
    menu5: Menu1,
    menu6: Menu1,
  });
  const renderTabBar = (props: any) => {
    const {key, ...otherProps} = props;
    return (
      <TabBar
        {...otherProps}
        indicatorStyle={GlobalStyles.indicator}
        style={GlobalStyles.tabBar}
        labelStyle={GlobalStyles.tabText}
        inactiveColor={color.dark}
        tabStyle={{ width: 220, }}
        scrollEnabled
      />
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/** Frames Container */}
      <View style={GlobalStyles.framesWrapper}>

        {/* Order Summary Frame */}
        <OrderFirstSidebar />

        {/* Main Frame */}
        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <View style={GlobalStyles.frameMain}>
          {/** Product List */}
          <View style={[GlobalStyles.tabContainer]}>
            <TabView
              style={GlobalStyles.tabView}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={renderTabBar}
              sceneContainerStyle={GlobalStyles.sceneContainer}
            />
          </View>
        </View>
        }

        {/* RightBar Frame */}
        <OptionBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
