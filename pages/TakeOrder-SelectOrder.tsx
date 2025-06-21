import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import TakeOrderStyles from '../components/styles/TakeOrderStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import OptionBar from '../components/OptionBar';
import ProductItem_TakeOrder from '../components/ProductItem-TakeOrder';
import {color} from '../assets/utils/colors';

const Menu1 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />

      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
    </View>
  </ScrollView>
);

type RootStackParamList = {
  SelectPackagingMenu: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function SelectOrder() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);
  
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
      <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
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
        <TouchableOpacity
          onPress={SelectPackagingPress}
          style={[
            GlobalStyles.tabBar,
            {
              width: 220,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingTop: 7,
            },
          ]}>
          <Text style={[GlobalStyles.tabText]}>Packaging & Others</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const navigation = useNavigation<NavigationProp>();
  const SelectPackagingPress = () => {
    navigation.navigate('SelectPackagingMenu');
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
