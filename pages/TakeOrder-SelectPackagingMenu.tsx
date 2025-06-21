import { StyleSheet,Text,View,SafeAreaView,useWindowDimensions,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import React, {useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import TakeOrderStyles from '../components/styles/TakeOrderStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import OptionBar from '../components/OptionBar';
import ProductItem_TakeOrder from '../components/ProductItem-TakeOrder';
import IconItem from '../components/IconItem';
import {color} from '../assets/utils/colors';

type RootStackParamList = {
  SelectOrder: undefined;
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

const Menu4 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled pTitle={'Lettuce 1g'} pPrice={'20'} />
      <ProductItem_TakeOrder pEnabled pTitle={'Beans 10pcs'} pPrice={'10'} />
      <ProductItem_TakeOrder pEnabled pTitle={'Peanuts 2g'} pPrice={'30'} />
    </View>
  </ScrollView>
);

const Menu5 = () => (
  <ScrollView style={GlobalStyles.scrollViewContainar}>
    <View style={TakeOrderStyles.productList}>
      {/* product item */}
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={true} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />

      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
      <ProductItem_TakeOrder pEnabled={false} pTitle={''} pPrice={''} />
    </View>
  </ScrollView>
);

export default function SelectPackagingMenu() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);
  
  const layout2 = useWindowDimensions();
  const [index, setIndex2] = React.useState(4);
  const [routes] = React.useState([
    {key: 'menu1', title: 'Chicken'},
    {key: 'menu2', title: 'Drinks'},
    {key: 'menu3', title: 'Fries and Sides'},
    {key: 'menu4', title: 'Add-on Vege Sides'},
    {key: 'menu5', title: 'Packaging & Others'},
  ]);
  const renderScene2 = SceneMap({
    menu1: Menu1,
    menu2: Menu2,
    menu3: Menu3,
    menu4: Menu4,
    menu5: Menu5,
  });
  const renderTabBar2 = (props: any) => {
    const {key, ...otherProps} = props;
    return (
      <TabBar
        {...otherProps}
        indicatorStyle={[GlobalStyles.indicator]}
        style={GlobalStyles.tabBar}
        labelStyle={GlobalStyles.tabText}
        activeColor={color.shadow}
        inactiveColor={color.shadow}
        tabStyle={{ width: 220, }}
        scrollEnabled
      />
    );
  };

  const navigation = useNavigation<NavigationProp>();
  const SelectOrderPress = () => {
    navigation.navigate('SelectOrder');
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
            <TabView style={GlobalStyles.tabView}
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
