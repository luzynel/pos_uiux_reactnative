import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';    

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  RetailOrderItems: undefined;
  RetailPayOrder: undefined;
};

interface OrderItem {
  id: number;
  code: number;
  qty: number;
  uom: string;
  item: string;
  price: number;
  totalp: number;
  vat: string;
}
const data0: OrderItem[] = [];
const data: OrderItem[] = [
  {id: 0, code: 1234567, qty: 1, uom: 'pc', item: 'Marca Leon Coconut Oil 1LT', price: 135.25, totalp: 135.25, vat: 'V'},
  {id: 1, code: 10206178, qty: 8, uom: 'pc', item: 'Bearbrand Pwdr Mlk 128-192/33G', price: 11.75, totalp: 96.00, vat: 'V'},
  {id: 2, code: 20557, qty: 0.22, uom: 'kg', item: 'HPO Onion Red Local', price: 154.00, totalp: 33.88, vat: 'E'},
  {id: 3, code: 20536, qty: 0.26, uom: 'kg', item: 'HPO Tomato Local', price: 178.00, totalp: 46.28, vat: 'E'},
  {id: 4, code: 11329, qty: 0.55, uom: 'kg', item: 'CS - Breast Fillet - Kilo', price: 318.00, totalp: 173.31, vat: 'E'},
  {id: 0, code: 1234567, qty: 1, uom: 'pc', item: 'Marca Leon Coconut Oil 1LT', price: 135.25, totalp: 135.25, vat: 'V'},
  {id: 1, code: 10206178, qty: 8, uom: 'pc', item: 'Bearbrand Pwdr Mlk 128-192/33G', price: 11.75, totalp: 96.00, vat: 'V'},
  {id: 2, code: 20557, qty: 0.22, uom: 'kg', item: 'HPO Onion Red Local', price: 154.00, totalp: 33.88, vat: 'E'},
  {id: 3, code: 20536, qty: 0.26, uom: 'kg', item: 'HPO Tomato Local', price: 178.00, totalp: 46.28, vat: 'E'},
  {id: 4, code: 11329, qty: 0.55, uom: 'kg', item: 'CS - Breast Fillet - Kilo', price: 318.00, totalp: 173.31, vat: 'E'},
  {id: 0, code: 1234567, qty: 1, uom: 'pc', item: 'Marca Leon Coconut Oil 1LT', price: 135.25, totalp: 135.25, vat: 'V'},
  {id: 1, code: 10206178, qty: 8, uom: 'pc', item: 'Bearbrand Pwdr Mlk 128-192/33G', price: 11.75, totalp: 96.00, vat: 'V'},
  {id: 2, code: 20557, qty: 0.22, uom: 'kg', item: 'HPO Onion Red Local', price: 154.00, totalp: 33.88, vat: 'E'},
  {id: 3, code: 20536, qty: 0.26, uom: 'kg', item: 'HPO Tomato Local', price: 178.00, totalp: 46.28, vat: 'E'},
  {id: 4, code: 11329, qty: 0.55, uom: 'kg', item: 'CS - Breast Fillet - Kilo', price: 318.00, totalp: 173.31, vat: 'E'},
  {id: 4, code: 11329, qty: 0.55, uom: 'kg', item: 'CS - Breast Fillet - Kilo', price: 318.00, totalp: 173.31, vat: 'E'},
  {id: 0, code: 1234567, qty: 1, uom: 'pc', item: 'Marca Leon Coconut Oil 1LT', price: 135.25, totalp: 135.25, vat: 'V'},
  {id: 1, code: 10206178, qty: 8, uom: 'pc', item: 'Bearbrand Pwdr Mlk 128-192/33G', price: 11.75, totalp: 96.00, vat: 'V'},
  {id: 2, code: 20557, qty: 0.22, uom: 'kg', item: 'HPO Onion Red Local', price: 154.00, totalp: 33.88, vat: 'E'},
  {id: 3, code: 20536, qty: 0.26, uom: 'kg', item: 'HPO Tomato Local', price: 178.00, totalp: 46.28, vat: 'E'},
  {id: 4, code: 11329, qty: 0.55, uom: 'kg', item: 'CS - Breast Fillet - Kilo', price: 318.00, totalp: 173.31, vat: 'E'},
];

interface OrderTotal {
  id: number;
  items: number;
  total: number;
}
const totalData0: OrderTotal[] = [
  {id: 1, items: 0, total: 0},
];
const totalData: OrderTotal[] = [
  {id: 1, items: 15, total: 482.72},
];


interface pendingUnpaidList {
  id: number;
  orderno: number;
  itemsno: number;
  tdate: string;
  otime: string;
  total: number;
  cashier: string;
  pickup: string;
  status: string;
  cntrno: number;
}
const pendingData: pendingUnpaidList[] = [
  {id: 0, orderno: 3210, itemsno: 15, tdate: '07/10/2024', otime: '2:10pm', total: 409.00, cashier: 'Benjie Dy', pickup: 'N', status: 'Unpaid', cntrno: 1},
  {id: 1, orderno: 1321, itemsno: 15, tdate: '07/10/2024', otime: '2:10pm', total: 409.00, cashier: 'Benjie Dy', pickup: 'N', status: 'Unpaid', cntrno: 1},
  {id: 2, orderno: 2321, itemsno: 15, tdate: '07/10/2024', otime: '2:10pm', total: 409.00, cashier: 'Benjie Dy', pickup: 'N', status: 'Unpaid', cntrno: 1},
  {id: 3, orderno: 3321, itemsno: 15, tdate: '07/10/2024', otime: '2:10pm', total: 409.00, cashier: 'Benjie Dy', pickup: 'N', status: 'Unpaid', cntrno: 1},
  {id: 4, orderno: 4321, itemsno: 15, tdate: '07/10/2024', otime: '2:10pm', total: 409.00, cashier: 'Benjie Dy', pickup: 'N', status: 'Unpaid', cntrno: 1},

];

const windowWidth = Dimensions.get('window').width;
const calculatedMaxWidth = windowWidth * 0.5 - 12;

const RetailPendingUnpaidItems = () => {
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
  const backPress = () => {
    navigation.goBack();
  };
  const [modalQuantity, setModalQuantity] = useState(false);
  const [modalRemoveItem, setModalRemoveItem] = useState(false);
  const [modalAuthorizedAccess, setModalAuthorizedAccess] = useState(false);
  const [modalCancelUnpaid, setModalCancelUnpaid] = useState(false);
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [inputValue, setInputValue] = useState('8');
  const isSaveDisabled = !inputValue || inputValue.trim() === '0';
  const [selectedValue, setSelectedValue] = useState('now'); 

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  // Open date picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Close date picker
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  // Handle date selection
  const handleConfirm = (date: Date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD')); // Format date as desired
    hideDatePicker();
  };

  const orderItems = ({item}: {item: OrderItem}) => (
    <TouchableOpacity onPress={() => setModalQuantity(true)}>
    <View style={[GlobalStyles.tblDisplayItemNoBorder]}>      
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,GlobalStyles.tblCellRight,{width: 70,color: color.link}]}>{item.qty}</Text>      
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,{width: 60}]}>{item.uom}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex10,GlobalStyles.tblCellLeft,{textTransform: 'uppercase',width: 260}]}>{item.item}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight]}>{item.code}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight,RetailStyles.tblCellWidth]}>@ {item.price.toFixed(2)}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight,RetailStyles.tblCellWidth,{fontFamily: font.semibold, paddingRight: 20}]}>{item.totalp.toFixed(2)} {item.vat}</Text>
    </View>
    </TouchableOpacity>
  );

  const subtotalItems = ({item}: {item: OrderTotal}) => (
    <View style={[RetailStyles.tblDisplayTotal]}>   
      <View style={[RetailStyles.tblTotalCell,{width: '25%',flex:0}]}>
        <Text style={[GlobalStyles.boldTextFormat]}>TOTAL:</Text>
      </View>
      <View style={[RetailStyles.tblTotalCell]}>
        <Text style={[GlobalStyles.boldTextFormat]}>{item.items} item(s)</Text>
      </View>
      <View style={[RetailStyles.tblTotalCell,{flexDirection: 'row',justifyContent: 'flex-end'}]}>
        <Text style={[RetailStyles.tblTotalCellText]}>$ {item.total}</Text>
        <View style={[RetailStyles.totalStatus,{marginBottom: 0,marginLeft:5}]}><Text style={RetailStyles.totalStatusText}>Unpaid</Text></View>
      </View>
    </View>
  );

  const puData = ({item}: {item: pendingUnpaidList}) => (
    <TouchableOpacity onPress={() => setComponentVisible(true)}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblDisplayCellLink,{width: 100}]}>{item.orderno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.itemsno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 140}]}>{item.tdate}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.otime}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight,{width: 140}]}>{item.total.toFixed(2)}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 150}]}>{item.cashier}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.pickup}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.status}</Text>
        <Text style={[RetailStyles .tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.cntrno}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/** Frames Container */}
      <View style={[RetailStyles.framesWrapper]}>

        <View style={RetailStyles.retailFramesWrap}>
          <View style={[RetailStyles.retailFrame,RetailStyles.retailFrameSide]}>

            {/* frameHeader */}
            <View style={GlobalStyles.frameHeader}>
              <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
                <TouchableOpacity onPress={backPress} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
                  <IconItem itype="Ionicons" iname="return-up-back-outline" isize={28} icolor={color.secondary} />
                </TouchableOpacity>
                <View style={GlobalStyles.headerWrap}>
                  <Text style={[GlobalStyles.headerText]}>Hello, Benjie</Text>
                </View>
              </View>
              <View style={[GlobalStyles.headerWrap, RetailStyles.headerCounterWrap]}>
                <Text style={[RetailStyles.headerCounterText]}>Cntr:</Text><Text style={RetailStyles.headerCounterNumber}>01</Text>
              </View>
            </View>


            {/* Main Frame */}
            {isComponentVisible && (
            isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
            
            <View style={GlobalStyles.frameMain}>
              <View style={[GlobalStyles.orderSummaryBox,{borderTopWidth: 2, borderBottomWidth: 2, borderColor: color.border, padding: 10, backgroundColor: color.background}]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={[GlobalStyles.tblDisplayRows,{paddingVertical: 5,backgroundColor: color.light}]}>              
                    <FlatList
                      data={data}
                      scrollEnabled={true}
                      keyExtractor={(item, index) => index.toString()}
                      nestedScrollEnabled={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={orderItems}></FlatList>             
                  </View>
                </ScrollView>
                
                {/* Order Summary Subtotal */}
                <View style={GlobalStyles.tblBottomRow}>
                  <FlatList
                    data={totalData}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={subtotalItems}></FlatList>
                </View>
              </View>   
              
              {/* Customer Info */}
              <View style={RetailStyles.retailWrapper}>            
                
                  <View style={[GlobalStyles.formFieldItem]}>
                    <View style={GlobalStyles.iconField}>
                      <IconItem itype={'FontAwesome6'} iname={'money-bill-transfer'} isize={22} icolor={color.shadow} />
                    </View>
                    <View style={GlobalStyles.inputField}>
                      <TextInput style={[GlobalStyles.inputTextField,GlobalStyles.inputTextFieldEm, {color: color.dark}]}
                        aria-label="transaction-number"
                        value="000123"
                        editable={false}
                        keyboardType="numeric"
                        textAlignVertical="center"
                      />
                    </View>
                  </View>
                  <View style={[GlobalStyles.formFieldItem]}>
                    <View style={GlobalStyles.iconField}>
                      <IconItem itype={'FontAwesome'} iname={'user-circle-o'} isize={22} icolor={color.shadow} />
                    </View>
                    <View style={GlobalStyles.inputField}>
                      <TextInput style={[GlobalStyles.inputTextField,GlobalStyles.inputTextFieldEm,{color: color.dark}]}
                        aria-label="customer-name"
                        value="Juan De La Cruz"
                        editable={true}
                        textAlignVertical="center"
                      />
                    </View>
                  </View>
              </View>

            </View>
            )}

          </View>
          <View style={RetailStyles.retailFrame}>

            {/* Main Frame */}
            {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
            <View style={[GlobalStyles.frameMain,{padding: 10}]}>

              <View style={[RetailStyles.searchPendingWrap,{columnGap: 30,paddingHorizontal:20,flexWrap: 'wrap',alignItems: 'flex-end'}]}>
                <View style={{gap:10}}>
                  <Text style={RetailStyles.searchFilterText}>By Default:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField, {width: 160,flex:0,}]}>
                      <TextInput style={GlobalStyles.inputTextFieldLight} placeholder="Today" placeholderTextColor={color.shadow} defaultValue='Today' />
                    </View>
                    {/* 
                    <View style={[GlobalStyles.selectOptionField, {width: 160,flex:0,}]}>
                      <TouchableOpacity onPress={showDatePicker}>
                        <TextInput
                          style={GlobalStyles.inputTextFieldLight}
                          placeholder="Select Date"
                          value={selectedDate}
                          editable={false} // Prevent manual editing
                          pointerEvents="none" // Disable input interaction, so TouchableOpacity works
                        />
                      </TouchableOpacity>
                    </View>                   
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date" // Select only date
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                     */}
                  </View>
                </View>
                <View style={{gap:10}}>
                  <Text style={RetailStyles.searchFilterText}>By Filter:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField,{width: 140}]}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Order No."  value="orderno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cntr No."  value="cntrno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Status"  value="status" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cashier"  value="cashier" style={GlobalStyles.defaultTextFormat} />
                      </Picker>
                    </View>
                    <View style={[GlobalStyles.selectOptionField, {width: 200,flex:0,}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]} value="321" />
                    </View>
                  </View>
                </View>
                <View style={RetailStyles.searchFilterWrap}>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgPrimary,{width: 70, height: 60}]}>
                    <IconItem itype={'material-icons'} iname={'search'} isize={34} icolor={color.light} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgPrimary,{width: 70, height: 60}]}>
                    <Text style={[GlobalStyles.boldTextFormat,GlobalStyles.textH3,{color: color.light}]}>ALL</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* PendingOrders Table */}
              <View style={[{flex: 1, marginTop: 20}]}>
                <View style={[GlobalStyles.container,{backgroundColor: color.light}]}>
                  <ScrollView horizontal={true}>
                    
                    <View style={[GlobalStyles.tblDisplayRows]}>
                      <View style={GlobalStyles.tblTopRow}>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Order No.</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>No.Of Items</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Transaction Date</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Order Time</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Total</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 150}]}>Cashier</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Pickup</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Status</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Counter</Text>
                      </View>
                      <FlatList
                        data={pendingData}
                        scrollEnabled={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={puData} />
                    </View>
                  </ScrollView>
                  <View style={[RetailStyles.searchItemResult,{paddingVertical:20,paddingHorizontal:20,borderTopWidth:2, borderTopColor: color.border}]}>
                    <Text style={RetailStyles.searchItemNumber}>10</Text>
                    <Text style={RetailStyles.searchItemText}>record(s) found.</Text>
                  </View>
                </View>
              </View>

              <View style={RetailStyles.pendingButtonsWrap}>
                <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgSuccess,GlobalStyles.buttonRow]} onPress={() => onPressNavigate('RetailOrderItems')}>
                  <IconItem itype={'material-icons'} iname={'add'} isize={22} icolor={color.light} />
                  <Text style={[GlobalStyles.buttonText]}>Add Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgTertiary,GlobalStyles.buttonRow]} onPress={() => onPressNavigate('RetailPayOrder')}>
                  <IconItem itype={'material-icons'} iname={'payment'} isize={22} icolor={color.light} />
                  <Text style={[GlobalStyles.buttonText]}>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.buttonRow]} onPress={() => setModalCancelUnpaid(true)}>
                  <IconItem itype={'material-icons'} iname={'close'} isize={22} icolor={color.light} />
                  <Text style={[GlobalStyles.buttonText]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
            }

          </View>
        </View>
      </View>
      
      {/* Modify Quantity Modal */}
      <Modal style={GlobalStyles.modalOverlay} animationType="fade" visible={modalQuantity} transparent={true} onRequestClose={() => {setModalQuantity(!modalQuantity);}}>
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
            <View style={RetailStyles.modalQtyContainer}>
              <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalQuantity(!modalQuantity)}>
                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
              </Pressable>
              <View>
                <View style={RetailStyles.modalQtyInfos}>
                  <View style={RetailStyles.qtyInfoWrap}>
                    <Text style={RetailStyles.qtyInfoLabel}>Item:</Text>
                    <Text style={RetailStyles.qtyInfoValue}>BearBrand Pwdr Mlk 128-192/33g</Text>
                  </View>
                  <View style={RetailStyles.qtyInfoWrap}>
                    <Text style={RetailStyles.qtyInfoLabel}>Code:</Text>
                    <Text style={RetailStyles.qtyInfoValue}>10206178</Text>
                  </View>
                  <View style={RetailStyles.qtyInfoWrap}>
                    <Text style={RetailStyles.qtyInfoLabel}>Quantity:</Text>
                    <TextInput style={[GlobalStyles.inputTextField,{width: 100, fontFamily: font.semibold}]}
                      aria-label="item-quantity"
                      value={inputValue}
                      editable={true}
                      textAlignVertical="center"
                      onChangeText={(text) => setInputValue(text)}
                    />
                  </View>
                </View>
                <View style={RetailStyles.modalButtonWrap}>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall, isSaveDisabled ? GlobalStyles.bgBorder : GlobalStyles.bgSuccess]} onPress={() => setModalQuantity(!modalQuantity)} disabled={isSaveDisabled}>
                      <Text style={GlobalStyles.buttonText}>Post</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSecondary,{width: 160}]} onPress={() => setModalAuthorizedAccess(true)}>
                      <Text style={GlobalStyles.buttonText}>More Actions</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Authorized Access Modal */}
			<Modal style={GlobalStyles.modalOverlay} animationType="fade" visible={modalAuthorizedAccess} transparent={true} onRequestClose={() => {setModalAuthorizedAccess(!modalAuthorizedAccess);}}>
				<View style={GlobalStyles.centeredView}>
				<View style={GlobalStyles.modalView}>
					<View style={[RetailStyles.modalQtyContainer,{height: 340}]}>		
						<Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalAuthorizedAccess(!modalAuthorizedAccess)}>
							<IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
						</Pressable>				
						<View>
							<Text style={RetailStyles.voidAccessTitle}>Only Authorized Personnel can VOID RECEIPT</Text>
							<View style={RetailStyles.voidAccessForm}>
								<Text style={[RetailStyles.voidAccessText,{color:color.alert}]}>Please enter authorized credentials:</Text>
								<View style={RetailStyles.formFieldWrap}>
									<Text style={RetailStyles.formLabelText}>Account:</Text>
									<TextInput style={[GlobalStyles.inputTextField,{width: 240, fontFamily: font.semibold}]}
										aria-label="item-quantity"
										editable={true}
										textAlignVertical="center"
									/>
								</View>
								<View style={RetailStyles.formFieldWrap}>
									<Text style={RetailStyles.formLabelText}>Password:</Text>
									<TextInput style={[GlobalStyles.inputTextField,{width: 240, fontFamily: font.semibold}]}
										aria-label="item-quantity"
										editable={true}
										textAlignVertical="center"
										secureTextEntry={true}
									/>
								</View>
							</View>
							<View style={RetailStyles.modalButtonWrap}>
								<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSuccess,{width:180}]} onPress={() => {setModalAuthorizedAccess(!modalAuthorizedAccess),setModalRemoveItem(true)}}>
									<Text style={GlobalStyles.buttonText}>Access Now</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
				</View>
			</Modal>

      {/* Confirm To Remove Item Modal */}
      <Modal style={GlobalStyles.modalOverlay} animationType="fade" visible={modalRemoveItem} transparent={true} onRequestClose={() => {setModalRemoveItem(!modalRemoveItem);}}>
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
            <View style={[RetailStyles.modalQtyContainer,{flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 260}]}>
              
              <View>
                <Text style={{fontFamily: font.bold, fontSize: 18, color: color.dark, textAlign: 'center', paddingVertical: 20}}>Are you sure you want remove the item?</Text>
                <View style={RetailStyles.modalButtonWrap}>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSuccess,]} onPress={() => {setModalRemoveItem(!modalRemoveItem),setModalQuantity(!modalQuantity)}}>
                      <Text style={GlobalStyles.buttonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgAlert]} onPress={() => setModalRemoveItem(!modalRemoveItem)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Confirm to Cancel Unpaid Items Modal */}
      <Modal style={GlobalStyles.modalOverlay} animationType="fade" visible={modalCancelUnpaid} transparent={true} onRequestClose={() => {setModalCancelUnpaid(!modalCancelUnpaid);}}>
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
            <View style={[RetailStyles.modalQtyContainer,{flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 260}]}>
              
              <View>
                <Text style={{fontFamily: font.bold, fontSize: 18, color: color.dark, textAlign: 'center', paddingVertical: 20}}>Are you sure you want to CANCEL unpaid items?</Text>
                <View style={RetailStyles.modalButtonWrap}>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSuccess,]} onPress={() => {setModalCancelUnpaid(!modalCancelUnpaid);navigation.goBack();}}>
                      <Text style={GlobalStyles.buttonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgAlert]} onPress={() => setModalCancelUnpaid(!modalCancelUnpaid)}>
                      <Text style={GlobalStyles.buttonText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

export default RetailPendingUnpaidItems

const styles = StyleSheet.create({})