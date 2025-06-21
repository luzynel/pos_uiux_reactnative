import {StyleSheet,Text,TouchableOpacity,View,SafeAreaView,ScrollView,FlatList,TextInput,Pressable,Modal,ActivityIndicator} from 'react-native';
  import React,{useState,useEffect} from 'react';
  import {useNavigation, useNavigationState} from '@react-navigation/native';
  import {StackNavigationProp} from '@react-navigation/stack';
  
  import {GlobalStyles} from '../components/styles/GlobalStyles';
  import CustomerInfoStyles from '../components/styles/CustomerInfoStyles';
  import TakeOrderStyles from '../components/styles/TakeOrderStyles';
  import PendingOrdersStyles from '../components/styles/PendingOrdersStyle';
  import OrderFirstSidebar from '../components/OrderFirstSidebar';
  import OptionBar from '../components/OptionBar';
  import {color} from '../assets/utils/colors';
  import IconItem from '../components/IconItem';
  
  type NavigationProp = StackNavigationProp<RootStackParamList>;
  type RootStackParamList = {
    MainViewTerminal: undefined;
    SetTable: undefined;
    PendingOrdersView: undefined;
    ModifyOrder: undefined;
  };

  interface orderList {
    id: number;
    orderno: number;
    tableno: number;
    customername: string;
    noofitems: string;
    pepreceipt: string;
    date: string;
    time: string;
    pax: string;
    total: string;
    cashier: string;
    etype: string;
    counter: string;
    or: string;
    preparetimein: string;
    status: string;
    active: boolean;
  }
  const data: orderList[] = [
    {
      id: 0,
      orderno: 321,
      tableno: 10,
      customername: 'Juan U. De la Cruz',
      noofitems: '13',
      pepreceipt: '1',
      date: '07/10/2024',
      time: '2:10pm',
      pax: '4',
      total: '409.00',
      cashier: 'Benjie Dy',
      etype: 'Dine',
      counter: '1',
      or: 'N',
      preparetimein: '20 mins',
      status: 'Ok',
      active: false,
    },
    {
      id: 1,
      orderno: 321,
      tableno: 10,
      customername: 'Juan U. De la Cruz',
      noofitems: '13',
      pepreceipt: '1',
      date: '07/10/2024',
      time: '2:10pm',
      pax: '4',
      total: '409.00',
      cashier: 'Benjie Dy',
      etype: 'Dine',
      counter: '1',
      or: 'N',
      preparetimein: '20 mins',
      status: 'Ok',
      active: true,
    },
    {
      id: 2,
      orderno: 321,
      tableno: 10,
      customername: 'Juan U. De la Cruz',
      noofitems: '13',
      pepreceipt: '1',
      date: '07/10/2024',
      time: '2:10pm',
      pax: '4',
      total: '409.00',
      cashier: 'Benjie Dy',
      etype: 'Dine',
      counter: '1',
      or: 'N',
      preparetimein: '20 mins',
      status: 'Ok',
      active: false,
    },
  ];
  
  const PendingOrdersView = () => {
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
  
    const poData = ({item}: {item: orderList}) => (
      <TouchableOpacity onPress={() => onPressNavigate('PendingOrdersView')} style={item.active && {backgroundColor: color.tertiary}}>
        <View style={GlobalStyles.tblDisplayItem}>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell,GlobalStyles.tblDisplayCellLink]}>{item.orderno}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.tableno}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell,{width: 180}]}>{item.customername}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.noofitems}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.pepreceipt}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell,{width: 120}]}>{item.date}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.time}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.pax}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.total}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell,{width: 150}]}>{item.cashier}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.etype}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.counter}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.or}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.preparetimein}</Text>
          <Text style={[GlobalStyles.tblDisplayCell,PendingOrdersStyles.tblCell]}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={GlobalStyles.safeAreaContainer}>
  
       {/** Frames Container */}
        <View style={GlobalStyles.framesWrapper}>

          {/* Order Summary Frame */}
          <OrderFirstSidebar />
  
          {/* Main Frame */}
          {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
          <View style={GlobalStyles.frameMain}>  
            <View style={[{flexDirection: 'row', alignItems: 'center',gap: 10,padding: 10,backgroundColor: color.light}]}>
              <IconItem
                itype={'AntDesign'}
                iname={'calendar'}
                isize={28}
                icolor={color.primary}
              />
              <View style={[CustomerInfoStyles.inputField, {width: 200,flex:0,}]}>
                <TextInput
                  style={[CustomerInfoStyles.inputTextField]}
                  placeholder="Today"
                  placeholderTextColor={color.shadow}
                  defaultValue='Today'
                />
              </View>
              <View><TouchableOpacity><Text style={[GlobalStyles.boldTextFormat,{color: color.link, textDecorationLine: 'underline'}]}>ALL</Text></TouchableOpacity></View>
            </View>

            {/* PendingOrders Table */}
            <View style={[CustomerInfoStyles.customerList,{flex: 1,}]}>
              <View style={CustomerInfoStyles.container}>
                <ScrollView horizontal={true}>
                  
                  <View style={[GlobalStyles.tblDisplayRows]}>
                    <View style={GlobalStyles.tblTopRow}>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Order No.</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Table No.</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell,{width: 180}]}>Customer Name</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>No.Of Items</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Prep Receipt</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell,{width: 120}]}>Date</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Time</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Pax</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Total</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell,{width: 150}]}>Cashier</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Etype</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Counter</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>OR</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Prepare Time In</Text>
                      <Text style={[GlobalStyles.tblTopCell,PendingOrdersStyles.tblHeadCell]}>Status</Text>
                    </View>
                    <FlatList
                      data={data}
                      scrollEnabled={true}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={poData} />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          }

          {/* RightBar Frame */}
          <OptionBar />
        </View>
      </SafeAreaView>
    );
  };
  
  export default PendingOrdersView;
  
  const styles = StyleSheet.create({});
  