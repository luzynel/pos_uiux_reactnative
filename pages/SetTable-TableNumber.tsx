import { StyleSheet,View,SafeAreaView,ScrollView,useWindowDimensions,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import SetTableStyles from '../components/styles/SetTableStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import OptionBar from '../components/OptionBar';
import {color} from '../assets/utils/colors';
import TableItem from '../components/TableItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
};

const MainArea = () => (
  <ScrollView style={SetTableStyles.tableScrollView}>
    <View style={SetTableStyles.tablesMainArea}>
      <TableItem tid={'01'} ttype={'dine'} tpax={'4'} tname={''} />
      <TableItem tid={'02'} ttype={'reserved'} tpax={'4'} tname={'Juan De'} />
      <TableItem tid={'03'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'04'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'05'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'06'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'07'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'08'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'09'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'10'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'11'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'12'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'13'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'14'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'15'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'16'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'17'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'18'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'19'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'20'} ttype={''} tpax={''} tname={''} />
    </View>
</ScrollView>
);

const LobbyArea = () => (
  <ScrollView style={SetTableStyles.tableScrollView}>
    <View style={SetTableStyles.tablesMainArea}>
      <TableItem tid={'21'} ttype={'reserved'} tpax={'2'} tname={'Juan De'} />
      <TableItem tid={'22'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'23'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'24'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'25'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'26'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'27'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'28'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'29'} ttype={''} tpax={''} tname={''} />
      <TableItem tid={'30'} ttype={''} tpax={''} tname={''} />
    </View>
</ScrollView>
);

const TakeOut = () => (
  <ScrollView style={SetTableStyles.tableScrollView}>
    <View style={SetTableStyles.tablesMainArea}>
      
    </View>
</ScrollView>
);

export default function SetTableNumber() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const onPressNavigate = (navLinkItem: keyof RootStackParamList) => {
    navigation.navigate(navLinkItem);
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'tab1', title: 'Main Area'},
    {key: 'tab2', title: 'Lobby Area'},
    {key: 'tab3', title: 'Take-Out'},
  ]);
  const renderScene = SceneMap({
    tab1: MainArea,
    tab2: LobbyArea,
    tab3: TakeOut,
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
};

const styles = StyleSheet.create({});