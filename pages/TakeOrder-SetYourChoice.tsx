import { StyleSheet,Text,View,SafeAreaView,useWindowDimensions,ScrollView,Image,TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';
import React, {useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import TakeOrderStyles from '../components/styles/TakeOrderStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import OptionBar from '../components/OptionBar';
import IconItem from '../components/IconItem';
import ProductItem_TakeOrder from '../components/ProductItem-TakeOrder';
import {color} from '../assets/utils/colors';

type RootStackParamList = {
  SelectOrder: undefined;
  AddOns: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Menu1 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled pTitle={'Original'} pPrice={'0'} />
      <ProductItem_TakeOrder pEnabled pTitle={'Spicy'} pPrice={'6'} />
    </View>
  </ScrollView>
);

const Menu2 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled pTitle={'coke regular'} pPrice={'0'} />
      <ProductItem_TakeOrder pEnabled pTitle={'coke medium'} pPrice={'0'} />
      <ProductItem_TakeOrder pEnabled pTitle={'coke large'} pPrice={'30'} />
      <ProductItem_TakeOrder pEnabled pTitle={'icetea regular'} pPrice={'25'} />
      <ProductItem_TakeOrder pEnabled pTitle={'icetea medium'} pPrice={'28'} />
    </View>
  </ScrollView>
);

const Menu3 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled pTitle={'rice'} pPrice={'20'} />
      <ProductItem_TakeOrder pEnabled pTitle={'gravy'} pPrice={'10'} />
      <ProductItem_TakeOrder pEnabled pTitle={'crispy fries'} pPrice={'30'} />
      <ProductItem_TakeOrder pEnabled pTitle={'crisscut fries'} pPrice={'25'} />
    </View>
  </ScrollView>
);

export default function SetYourChoice() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  const navigation = useNavigation<NavigationProp>();
  const SelectOrderPress = () => {
    navigation.navigate('SelectOrder');
  };
  const AddOnsPress = () => {
    navigation.navigate('AddOns');
  };

  const layout2 = useWindowDimensions();
  const [index, setIndex2] = React.useState(0);
  const [routes] = React.useState([
    {key: 'menu1', title: 'Chicken'},
    {key: 'menu2', title: 'Drinks'},
    {key: 'menu3', title: 'Fries and Sides'},
  ]);
  const renderScene2 = SceneMap({
    menu1: Menu1,
    menu2: Menu2,
    menu3: Menu3,
  });
  const renderTabBar2 = (props: any) => {
    const {key, ...otherProps} = props;
    return (
      <TabBar
        {...otherProps}
        indicatorStyle={GlobalStyles.indicator}
        style={GlobalStyles.tabBar}
        labelStyle={GlobalStyles.tabText}
        activeColor={color.secondary}
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
            <View style={GlobalStyles.tabContainer}>
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
        }

        {/* RightBar Frame */}
        <OptionBar />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});