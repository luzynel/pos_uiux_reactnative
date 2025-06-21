import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';    
import { GlobalPrintStyles,OfficialReceiptStyles } from '../../components/styles/GlobalPrintStyles';

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  RetailOfficialReceipt: undefined;
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
const data: OrderItem[] = [
  {id: 0, code: 10097044, qty: 1, uom: 'pc', item: 'Marca Leon Coconut Oil 1LT', price: 135.25, totalp: 135.25, vat: 'V'},
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
const totalData: OrderTotal[] = [
  {id: 1, items: 12, total: 458.58},
];

interface pendingUnpaidList {
  id: number;
  orno: number;
  transno: number;
  itemsno: number;
  pdate: string;
  otime: string;
  ortime: string;
  total: number;
  cashier: string;
  pickup: string;
  status: string;
  reprinted: number;
}
const pendingData: pendingUnpaidList[] = [
  {id: 0, orno: 736366, transno: 321, itemsno: 12, pdate: '07/10/2024', otime: '2:10pm', ortime: '2:15pm', total: 458.58, cashier: 'Benjie Dy', pickup: 'N', status: 'Ok', reprinted: 0},
];

const RetailVoidReceipt = () => {
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
  const [isComponentVisible, setComponentVisible] = useState(false);
	const [modalVoidReceipt, setModalVoidReceipt] = useState(false);
  const [selectedValue, setSelectedValue] = useState('now'); 

  const orderItems = ({item}: {item: OrderItem}) => (
    <TouchableOpacity>
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
      </View>
    </View>
  );

  const puData = ({item}: {item: pendingUnpaidList}) => (
    <TouchableOpacity onPress={() => setComponentVisible(true)}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblDisplayCellLink,{width: 100}]}>{item.orno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.transno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.itemsno}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 140}]}>{item.pdate}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.otime}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.ortime}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight,{width: 140}]}>{item.total.toFixed(2)}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 150}]}>{item.cashier}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.pickup}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 100}]}>{item.status}</Text>
        <Text style={[RetailStyles .tblDisplayCell,RetailStyles.tblCellWidth,{width: 110}]}>{item.reprinted}</Text>
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
              
              {/* Receipt Details */}
              <View style={RetailStyles.receiptInfoWrap}>            
                <View style={RetailStyles.receiptInfoItem}>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={RetailStyles.receiptInfoText}>Less: Discounts</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>5% SENIOR</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>24.14</Text>
                  </View>
                </View>
                <View style={RetailStyles.receiptInfoItem}>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoText,GlobalStyles.textBold]}>TOTAL AMOUNT DUE:</Text>
                    <Text style={[RetailStyles.receiptInfoNumber,GlobalStyles.textBold]}>458.58</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>CASH:</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>500.00</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>CHANGE:</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>41.42</Text>
                  </View>
                </View>
                <View style={[RetailStyles.receiptInfoItem]}>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoText,GlobalStyles.textBold]}>VAT SUMMARY:</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>VAT EXEMPT</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>253.47</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>VATABLE SALES</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>204.69</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>VAT (12%)</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>24.56</Text>
                  </View>
                  <View style={GlobalStyles.flexRow}>
                    <Text style={[RetailStyles.receiptInfoTextIndent]}>ZERO-RATED SALES</Text>
                    <Text style={RetailStyles.receiptInfoNumber}>0.00</Text>
                  </View>
                </View>                
                <View style={RetailStyles.receiptPaid}>
                    <View style={GlobalStyles.flexRow}>
                    <Text style={RetailStyles.receiptPaidText}>PAID OR:</Text>
                    <Text style={RetailStyles.receiptPaidNumber}>736366</Text>
                    </View>
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
                  <Text style={RetailStyles.searchFilterText}>OR Number:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField, {width: 160,flex:0,}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]} defaultValue="736366" />
                    </View>
                  </View>
                </View>
                <View style={{gap:10}}>
                  <Text style={RetailStyles.searchFilterText}>Find By:</Text>
                  <View style={RetailStyles.searchFilterWrap}>
                    <View style={[GlobalStyles.selectOptionField,{width: 140}]}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="OR Date"  value="date" enabled={false} style={GlobalStyles.inputTextField} />
                        <Picker.Item label="Order No."  value="orderno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cntr No."  value="cntrno" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Status"  value="status" style={GlobalStyles.defaultTextFormat} />
                        <Picker.Item label="Cashier"  value="cashier" style={GlobalStyles.defaultTextFormat} />
                      </Picker>
                    </View>
                    <View style={[GlobalStyles.selectOptionField, {width: 200,flex:0,}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]} placeholder="{Enter}" />
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
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Order</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Trans No.</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>No.Of Items</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Paid Date</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Order Time</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>OR Time</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 140}]}>Total</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 150}]}>Cashier</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Pickup</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 100}]}>Status</Text>
                        <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 110}]}>Reprinted</Text>
                      </View>
                      <FlatList
                        data={pendingData}
                        scrollEnabled={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={puData} />
                    </View>
                  </ScrollView>
                  <View style={[RetailStyles.searchItemResult,{paddingVertical:20,paddingHorizontal:20,borderTopWidth:2, borderTopColor: color.border}]}>
                    <Text style={RetailStyles.searchItemNumber}>1</Text>
                    <Text style={RetailStyles.searchItemText}>record(s) found.</Text>
                  </View>
                </View>
              </View>

              <View style={[{marginTop: 20}]}>
                <View style={[GlobalStyles.formFieldItem,GlobalStyles.formFieldArea]}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-icons'} iname={'notes'} isize={22} icolor={color.border} />
                  </View>
                  <View style={[GlobalStyles.inputField,{height: '100%'}]}>
                    <TextInput style={[GlobalStyles.inputTextField, GlobalStyles.inputTextAreaField, GlobalStyles.inputTextFieldLight]}
                      placeholder="Remarks/Notes"
                      placeholderTextColor="#A9A9A9"
                      multiline={true}
                      numberOfLines={10}
                      textAlignVertical="top" // Ensures text starts at the top
                    />
                  </View>
                </View>
              </View>

              <View style={RetailStyles.pendingButtonsWrap}>
                <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonTertiary]} onPress={() => setModalVoidReceipt(true)}>
                  <IconItem itype={'Ionicons'} iname={'print-outline'} isize={32} icolor={color.light} />
                  <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText]}>Void Receipt</Text></View>
                </TouchableOpacity>
              </View>
            </View>
            }

          </View>
        </View>
      </View>

      {/* Authorized Access Modal */}
			<Modal style={GlobalStyles.modalOverlay} animationType="fade" visible={modalVoidReceipt} transparent={true} onRequestClose={() => {setModalVoidReceipt(!modalVoidReceipt);}}>
				<View style={GlobalStyles.centeredView}>
				<View style={GlobalStyles.modalView}>
					<View style={[RetailStyles.modalQtyContainer,{height: 340}]}>		
						<Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalVoidReceipt(!modalVoidReceipt)}>
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
								<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSuccess,{width:180}]} onPress={() => setModalVoidReceipt(!modalVoidReceipt)}>
									<Text style={GlobalStyles.buttonText}>Access Now</Text>
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

export default RetailVoidReceipt

const styles = StyleSheet.create({})