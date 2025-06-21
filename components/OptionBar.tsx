import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';
import {useNavigation,useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import {GlobalStyles} from './styles/GlobalStyles';
import SetTableStyles from './styles/SetTableStyles';
import TakeOrderStyles from './styles/TakeOrderStyles';
import { PayOrderStyles } from '../components/styles/SettleOrderPayOrderStyles';
import IconItem from './IconItem';
import {color} from '../assets/utils/colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  ModifyOrder: undefined;
  SetTable: undefined;
  SetTableNumber: undefined;
  SettleOrder: undefined;
  CustomerInfo: undefined;
  TakeOrder: undefined;
  SelectOrder: undefined;
  AddOns: undefined;
  SelectPackagingMenu: undefined;
  PendingOrders: undefined;
  PrintOrderFormat: undefined;
  TakeOutorPickUp: undefined;
  ReprintReceipt: undefined;
  VoidReceipt: undefined;
};
type OptionBarProps = {
  pageName?: string;
};
const OptionBar = ({ pageName }: OptionBarProps) => {
    const navigation = useNavigation<NavigationProp>();
    const onPressNavigate = (navLinkItem: keyof RootStackParamList) => {
        navigation.navigate(navLinkItem);
    };
    const [modalVisible, setModalVisible] = useState(false);

    const [selectedValue, setSelectedValue] = useState('now'); 
    const [modalSetReserve, setModalSetReserve] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);
    const [modalCancel, setModalCancel] = useState(false);
    const state = useNavigationState(state => state);
    const currentRouteName = state.routes[state.index].name;
    const routeSetTable = ['SetTable'];
    const route0Qty = ['TakeOrder','SetYourChoice','AddOns','SelectPackagingMenu'];
    const route1 = ['SetTable','SetTableSelect','SetTableNumber'];
    const routeSelectMenu = ['TakeOrder','SelectOrder'];
    const routeSetYourChoice = ['SetYourChoice','AddOns','SelectPackagingMenu','ModifyOrder','PendingOrdersView'];
    const routeConfirm = ['SelectOrder']
    const routeModifyOrder = ['ModifyOrder'];

    const backPress = () => {
      currentRouteName === 'ModifyOrder' ? navigation.navigate('SelectOrder') : 
      (currentRouteName === 'PendingOrdersView' ? navigation.navigate('PendingOrders') : navigation.navigate('TakeOrder'))
    };
    const donePress = () => {
      currentRouteName === 'SetYourChoice' && navigation.navigate('AddOns')
      currentRouteName === 'AddOns' && navigation.navigate('SelectPackagingMenu')
      currentRouteName === 'SelectPackagingMenu' && navigation.navigate('SelectOrder')
      currentRouteName === 'ModifyOrder' && navigation.navigate('SelectOrder')
      currentRouteName === 'PendingOrdersView' && navigation.navigate('PendingOrders')
    }

    const [modalDiscounts, setModalDiscounts] = useState(false);
    const [modalCreditDebit, setModalCreditDebit] = useState(false);
    const [modalEwallet, setModalEwallet] = useState(false);
    const optionBarButtons = (pageName?: string, amountTendered: number = 0) => {
        if(pageName === 'AddOrder'){
           return (
               <View style={[GlobalStyles.buttonsWrap]}>
                   <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, SetTableStyles.tableMenuQty]}>
                       <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyText]}>QTY</Text>
                       <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>0</Text></View>
                   </TouchableOpacity>
                   <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                       <IconItem itype={'fontawesome6'} iname={'utensils'} isize={30} icolor={color.light} />
                       <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Dine-In</Text></View>
                   </TouchableOpacity>
                   <TouchableOpacity
                       style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                       <IconItem itype={'material-icons'} iname={'shopping-bag'} isize={30} icolor={color.light} />
                       <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take-Out</Text></View>
                   </TouchableOpacity>
                   <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                       <IconItem itype={'fontawesome6'} iname={'truck-pickup'} isize={30} icolor={color.light} />
                       <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pick-Up</Text></View>
                   </TouchableOpacity>
               </View>
           );

        }else if(pageName === 'PayOrder'){
            console.log(amountTendered);
          return (
              <View style={[GlobalStyles.buttonsWrap]}>
                  <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices, ]} onPress={() => setModalDiscounts(true)}>
                      <IconItem itype={'MaterialIcons'} iname={'discount'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>Apply Discount</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices]}>
                      <IconItem itype={'fontawesome5'} iname={'money-bill'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>Cash</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices, ]} onPress={() => setModalCreditDebit(true)}>
                      <IconItem itype={'Fontisto'} iname={'credit-card'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>Credit / Debit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices, ]} onPress={() => setModalEwallet(true)}>
                      <IconItem itype={'Fontisto'} iname={'google-wallet'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>E-wallet</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices, ]}>
                      <IconItem itype={'MaterialIcons'} iname={'payment'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>Split Payment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ PayOrderStyles.buttonPaymentChoices, ]}>
                      <IconItem itype={'FontAwesome6'} iname={'thumbs-up'} isize={30} icolor={color.light} />
                      <Text style={GlobalStyles.buttonText}>Apply Payment</Text>
                  </TouchableOpacity> */}
              </View>
           );

        }else if(pageName === 'ReprintReceipt') {
            return (
                <View style={[GlobalStyles.buttonsWrap]}>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, SetTableStyles.tableMenuQty]}>
                        <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyText]}>QTY</Text>
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>0</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'utensils'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Dine-In</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'material-icons'} iname={'shopping-bag'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take-Out</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'truck-pickup'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pick-Up</Text></View>
                    </TouchableOpacity>
                </View>
            );
        }else if(pageName === 'VoidReceipt') {
            return (
                <View style={[GlobalStyles.buttonsWrap]}>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, SetTableStyles.tableMenuQty]}>
                        <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyText]}>QTY</Text>
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>0</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'utensils'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Dine-In</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'material-icons'} iname={'shopping-bag'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take-Out</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'truck-pickup'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pick-Up</Text></View>
                    </TouchableOpacity>
                </View>
            );
        }else if(pageName === 'CancelOrder') {
            return (
                <View style={[GlobalStyles.buttonsWrap]}>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, SetTableStyles.tableMenuQty]}>
                        <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyText]}>QTY</Text>
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>0</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'utensils'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Dine-In</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'material-icons'} iname={'shopping-bag'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take-Out</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                        <IconItem itype={'fontawesome6'} iname={'truck-pickup'} isize={30} icolor={color.light} />
                        <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pick-Up</Text></View>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    const optionBarMoreButtons = (pageName?: string) => {
      if(pageName == 'AddOrder'){
           return (
               <View style={[GlobalStyles.buttonsWrap]}>
                  <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem,GlobalStyles.bgSuccess]}>
                      <IconItem itype={'AntDesign'} iname={'checkcircle'} isize={26} icolor={color.light} />
                      <View style={[GlobalStyles.buttonTextWrap,{marginTop: 5}]}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Confirm Order</Text></View>
                  </TouchableOpacity> 
                  <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem,GlobalStyles.bgAlert]}>
                      <IconItem itype={'MaterialIcons'} iname={'cancel'} isize={26} icolor={color.light} />
                      <View style={[GlobalStyles.buttonTextWrap,{marginTop: 5}]}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Cancel/Back</Text></View>
                  </TouchableOpacity> 
               </View>
           );
      }
   };

  return (
    <View style={GlobalStyles.frameBar}>

        {/** Tables Menu */}  
        <View style={GlobalStyles.frameBarTop}>
          <ScrollView style={GlobalStyles.frameBarTopScroll} showsVerticalScrollIndicator={false}>
            { optionBarButtons(pageName) }

            {routeSetYourChoice.includes(currentRouteName) && (
              <View style={[GlobalStyles.buttonsWrap]}>
                <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, GlobalStyles.bgSuccess,]} onPress={donePress}>
                  <IconItem itype={'material-icons'} iname={'check-circle'} isize={30} icolor={color.light} />
                  <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Done</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, GlobalStyles.bgAlert]} onPress={backPress}>
                  <IconItem itype={'material-icons'} iname={'cancel'} isize={30} icolor={color.light} />
                  <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Cancel</Text></View>
                </TouchableOpacity>
              </View>
            )}
            {route1.includes(currentRouteName) && (
            <View style={[GlobalStyles.buttonsWrap]}>                
                <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, routeSetTable.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={routeSetTable.includes(currentRouteName)}  onPress={() => setModalSetReserve(true)}>
                    <IconItem itype={'material-community'} iname={'table-check'} isize={30} icolor={routeSetTable.includes(currentRouteName) ? color.background : color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText, routeSetTable.includes(currentRouteName) && GlobalStyles.buttonTextDisabled]}>Set/Reserve</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, routeSetTable.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={routeSetTable.includes(currentRouteName)}>
                    <IconItem itype={'material-community'} iname={'table-edit'} isize={30} icolor={routeSetTable.includes(currentRouteName) ? color.background : color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,routeSetTable.includes(currentRouteName) && GlobalStyles.buttonTextDisabled]}>Change Table</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem,routeSetTable.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={routeSetTable.includes(currentRouteName)}>
                    <IconItem itype={'material-icons'} iname={'person-search'} isize={30} icolor={routeSetTable.includes(currentRouteName) ? color.background : color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,routeSetTable.includes(currentRouteName) && GlobalStyles.buttonTextDisabled]}>Set Vacant</Text></View>
                </TouchableOpacity>
                
                <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableMenuItem,GlobalStyles.bgPrimary,]} onPress={() => onPressNavigate('TakeOrder')}>
                    <IconItem itype={'material-community'} iname={'text-box-plus-outline'} isize={30} icolor={color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take Order</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableMenuItem,GlobalStyles.bgPrimary,]} onPress={() => onPressNavigate('SettleOrder')}>
                    <IconItem itype={'material-community'} iname={'text-box-check-outline'} isize={30} icolor={color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Settle Order</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyles.button,SetTableStyles.tableMenuItem,GlobalStyles.bgPrimary,]} onPress={() => onPressNavigate('PendingOrders')}>
                    <IconItem itype={'material-community'} iname={'timetable'} isize={30} icolor={color.light} />
                    <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pending Orders(2)</Text></View>
                </TouchableOpacity>
            </View>
            )}
            {routeSelectMenu.includes(currentRouteName) && (
            <View style={[GlobalStyles.buttonsWrap]}>
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, SetTableStyles.tableMenuQty]}>
                <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyText]}>QTY</Text>
                <View style={GlobalStyles.buttonTextWrap}>
                    {route0Qty.includes(currentRouteName) ? (
                        <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>0</Text>
                    ) : (
                        <Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText,SetTableStyles.tableMenuQtyNum]}>5</Text>
                    )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                <IconItem itype={'fontawesome6'} iname={'utensils'} isize={30} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Dine-In</Text></View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[GlobalStyles.button, SetTableStyles.tableMenuItem]}>
                <IconItem itype={'material-icons'} iname={'shopping-bag'} isize={30} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Take-Out</Text></View>
              </TouchableOpacity>
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem]} onPress={() => onPressNavigate('TakeOutorPickUp')}>
                <IconItem itype={'fontawesome6'} iname={'truck-pickup'} isize={30} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Pick-Up</Text></View>
              </TouchableOpacity>
              {routeModifyOrder.includes(currentRouteName) ?
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem,GlobalStyles.bgPrimary]}>
                <IconItem itype={'material-community'} iname={'label-percent'} isize={34} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Discount</Text></View>
              </TouchableOpacity>
              :
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem,GlobalStyles.bgSecondary]} onPress={() => onPressNavigate('CustomerInfo')}>
                <IconItem itype={'FontAwesome'} iname={'id-card-o'} isize={26} icolor={color.light} />
                <View style={[GlobalStyles.buttonTextWrap,{marginTop: 5}]}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Customer Info</Text></View>
              </TouchableOpacity> 
              }
            </View>
            )}
          </ScrollView>
        </View>
        
        <View style={GlobalStyles.frameBarBottom}>

          { optionBarMoreButtons(pageName) }

            {routeSelectMenu.includes(currentRouteName) && (
            <View style={[GlobalStyles.buttonsWrap]}>
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, GlobalStyles.bgSuccess,!routeConfirm.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={!routeConfirm.includes(currentRouteName)} onPress={() => setModalConfirm(true)}>
                <IconItem itype={'Ionicons'} iname={'bag-check-sharp'} isize={30} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Confirm Orders</Text></View>
              </TouchableOpacity>
              <TouchableOpacity style={[GlobalStyles.button, SetTableStyles.tableMenuItem, GlobalStyles.bgAlert]} onPress={() => setModalCancel(true)}>
                <IconItem itype={'material-icons'} iname={'cancel'} isize={30} icolor={color.light} />
                <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>Cancel/Back</Text></View>
              </TouchableOpacity>
            </View>
            )}
           
            <View style={[GlobalStyles.buttonsWrap]}>
            <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.buttonMore]} onPress={() => setModalVisible(true)}>
                <IconItem itype={'material-icons'} iname={'unfold-more'} isize={36} icolor={color.secondary} />
                <Text style={[GlobalStyles.buttonText,GlobalStyles.buttonMoreText]}>More Options</Text>
            </TouchableOpacity>
            </View>
        </View>

        {/* Modal More option buttons */}
        <Modal style={[GlobalStyles.modalOverlay]} animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
          <View style={[GlobalStyles.centeredView,GlobalStyles.modalOptionBar]}>
            <View style={[GlobalStyles.modalView,GlobalStyles.modalViewOptionBar]}>
              <View style={GlobalStyles.modalContainer}>
                <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalVisible(!modalVisible)}>
                  <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light} />
                </Pressable>

                <View style={[GlobalStyles.buttonsWrap,GlobalStyles.modalButtonsWrap]}>        
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,]} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('ReprintReceipt');}}>
                    <IconItem itype={'SimpleLineIcons'} iname={'printer'} isize={34} icolor={color.light} />
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Reprint Receipt</Text></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,]} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('VoidReceipt');}}>
                    <IconItem itype={'Ionicons'} iname={'receipt-outline'} isize={34} icolor={color.light} />
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Void Receipt</Text></View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal for Set/Reserve */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalSetReserve} onRequestClose={() => {setModalSetReserve(!modalSetReserve);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{height: 480}]}>
            <ScrollView style={TakeOrderStyles.modalContainer}>
              <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalSetReserve(!modalSetReserve)}>
                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
              </Pressable>
              <View style={[SetTableStyles.orderInfoContainer,{gap: 10}]}>
                <View style={SetTableStyles.orderInfoRow}>
                  <View style={GlobalStyles.flexRowDirection}>
                    <Text style={GlobalStyles.defaultTextFormat}>ORDER #:{' '}<Text style={GlobalStyles.boldTextFormat}>012345</Text></Text>
                  </View>
                  <View style={GlobalStyles.flexRowDirection}>
                    <Text style={GlobalStyles.defaultTextFormat}>TABLE #:{' '}<Text style={GlobalStyles.boldTextFormat}>01</Text></Text>
                  </View>
                </View>
                    
                <View style={SetTableStyles.orderInfoRow}>
                  <View style={GlobalStyles.flexRowDirection}>
                    <View style={SetTableStyles.tableInfoWrap}>
                      <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>TYPE:{' '}</Text>
                      <View style={[TakeOrderStyles.inputContainer,{flex: 1}]}>
                        <Picker selectedValue={selectedValue} style={{height: '100%', width: '100%'}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                          <Picker.Item label="Dine-In" value="now" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="Reserve" value="prepare_after" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={GlobalStyles.flexRowDirection}>
                    <View style={SetTableStyles.tableInfoWrap}>
                      <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>PAX:{' '}</Text>
                      <View style={[TakeOrderStyles.inputContainer, {width: 100}]}>
                        <TextInput style={[ TakeOrderStyles.inputText, GlobalStyles.alignRight, ]} placeholderTextColor={color.dark} placeholder="04" />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={SetTableStyles.tableInfoWrap}>
                  <Text style={[GlobalStyles.defaultTextFormat, {marginBottom: 5}]}>NAME:{' '}</Text>
                  <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                    <TextInput style={[ GlobalStyles.boldTextFormat,{width: '100%', height: '100%', paddingHorizontal: 10} ]} placeholderTextColor={color.dark} value="Juan U. De la Cruz" />
                  </View>
                </View>
              </View>

              <View style={{gap: 10}}>                    
                  <View style={TakeOrderStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalSetReserve(!modalSetReserve),onPressNavigate('SetTableNumber')}}>
                      <Text style={GlobalStyles.buttonText}>Save</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalSetReserve(!modalSetReserve)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                  </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>

        {/* Modal for Confirm Orders */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalConfirm} onRequestClose={() => {setModalConfirm(!modalConfirm);}}>
          <View style={GlobalStyles.centeredView}>
            <View style={GlobalStyles.modalView}>
              <View style={TakeOrderStyles.modalContainer}>
                <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalConfirm(!modalConfirm)}>
                  <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                </Pressable>

                <View style={{gap: 10}}>
                  <Text style={[TakeOrderStyles.modalTextHeading]}>Would you like to prepare the order:</Text>
                  <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={TakeOrderStyles.inputContainer}>
                      <Picker selectedValue={selectedValue} style={{height: '100%', width: 180}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Now" value="now" style={GlobalStyles.boldTextFormat} />
                        <Picker.Item label="Prepare After" value="prepare_after" style={GlobalStyles.boldTextFormat} />
                      </Picker>
                    </View>
                    <View style={[TakeOrderStyles.inputContainer, {width: 100}]}>
                      <TextInput style={[ TakeOrderStyles.inputText, GlobalStyles.alignRight, ]} placeholderTextColor={color.dark} placeholder="00" />
                    </View>
                    <Text style={GlobalStyles.defaultTextFormat}>mins</Text>
                  </View>
                  <View style={TakeOrderStyles.modalButtonWrap}>
                    <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalConfirm(!modalConfirm); onPressNavigate('PrintOrderFormat') }}>
                      <Text style={GlobalStyles.buttonText}>Ok</Text>
                    </Pressable>
                    <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalConfirm(!modalConfirm)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal Cancel Orders - button */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalCancel} onRequestClose={() => {setModalCancel(!modalCancel);}}>
          <View style={GlobalStyles.centeredView}>
            <View style={GlobalStyles.modalView}>
              <View style={[TakeOrderStyles.modalContainer,{height: 230}]}>
                <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalCancel(!modalCancel)}>
                  <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                </Pressable>
                <View style={{gap: 10}}>
                  <Text style={[TakeOrderStyles.modalTextHeading]}>Are you sure you want to CANCEL orders?</Text>
                  <View style={TakeOrderStyles.modalButtonWrap}>
                    <Pressable style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgSuccess,]} onPress={() => {setModalCancel(!modalCancel),onPressNavigate('SetTable')}}>
                        <Text style={GlobalStyles.buttonText}>Yes</Text>
                    </Pressable>
                    <Pressable style={[GlobalStyles.button,GlobalStyles.buttonSmall,GlobalStyles.bgAlert,]} onPress={() => setModalCancel(!modalCancel)}>
                        <Text style={GlobalStyles.buttonText}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal for Discounts */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalDiscounts} onRequestClose={() => {setModalDiscounts(!modalDiscounts);}}>
          <View style={GlobalStyles.centeredView}>

            <View style={GlobalStyles.modalView}>
                <ScrollView style={TakeOrderStyles.modalContainer}>
                    <View style={[GlobalStyles.flexRow]}>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Text style={[GlobalStyles.textH1, GlobalStyles.textDark, GlobalStyles.textUpper, GlobalStyles.textBold, {color: color.secondary}]}>Apply Discounts</Text>
                        </View>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalDiscounts(!modalDiscounts)}>
                                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                            </Pressable>
                        </View>
                    </View>
                    <View style={[SetTableStyles.orderInfoContainer,{gap: 10}]}>
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <Text style={GlobalStyles.defaultTextFormat}>ORDER #:{' '}<Text style={GlobalStyles.boldTextFormat}>012345</Text></Text>
                            </View>
                            <View style={GlobalStyles.flexRowDirection}>
                                <Text style={GlobalStyles.defaultTextFormat}>TABLE #:{' '}<Text style={GlobalStyles.boldTextFormat}>01</Text></Text>
                            </View>
                        </View>
                            
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>DISCOUNTS:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer,{flex: 1}]}>
                                        <Picker selectedValue={selectedValue} style={{height: '100%', width: '100%'}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                        <Picker.Item label="Senior" value="Senior" style={GlobalStyles.boldTextFormat} />
                                        <Picker.Item label="PWD" value="PWD" style={GlobalStyles.boldTextFormat} />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>CODE:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: 200}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, GlobalStyles.alignCenter, ]} placeholderTextColor={color.dark} placeholder="SENIOR" />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>TYPE:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer,{flex: 1}]}>
                                        <Picker selectedValue={selectedValue} style={{height: '100%', width: '100%'}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                        <Picker.Item label="Percentage" value="Percentage" style={GlobalStyles.boldTextFormat} />
                                        <Picker.Item label="Amount" value="Amount" style={GlobalStyles.boldTextFormat} />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat, {marginTop: 5}]}>% or Amount:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: 200}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, GlobalStyles.alignCenter, ]} placeholderTextColor={color.dark} placeholder="% or amount" />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={SetTableStyles.tableInfoWrap}>
                            <Text style={[GlobalStyles.defaultTextFormat, {marginBottom: 5}]}>CUSTOMER NAME:{' '}</Text>
                            <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                <TextInput style={[ GlobalStyles.boldTextFormat,{width: '100%', height: '100%', paddingHorizontal: 10} ]} placeholderTextColor={color.dark} value="Juan U. De la Cruz" />
                            </View>
                        </View>
                    </View>
                    <View style={{gap: 10}}>                    
                        <View style={TakeOrderStyles.modalButtonWrap}>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {}}>
                            <Text style={GlobalStyles.buttonText}>Apply</Text>
                        </Pressable>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalDiscounts(!modalDiscounts)}>
                            <Text style={GlobalStyles.buttonText}>Cancel</Text>
                        </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
          </View>
        </Modal>

        {/* Modal for Credit/Debit */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalCreditDebit} onRequestClose={() => {setModalCreditDebit(!modalCreditDebit);}}>
          <View style={GlobalStyles.centeredView}>

            <View style={GlobalStyles.modalView}>
                <ScrollView style={TakeOrderStyles.modalContainer}>
                    <View style={[GlobalStyles.flexRow]}>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Text style={[GlobalStyles.textH1, GlobalStyles.textDark, GlobalStyles.textUpper, GlobalStyles.textBold, {color: color.secondary}]}>Credit/Debit</Text>
                        </View>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalCreditDebit(!modalCreditDebit)}>
                                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                            </Pressable>
                        </View>
                    </View>
                    <View style={[SetTableStyles.orderInfoContainer]}>
                        {/* <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <Text style={GlobalStyles.defaultTextFormat}>ORDER #:{' '}<Text style={GlobalStyles.boldTextFormat}>012345</Text></Text>
                            </View>
                            <View style={GlobalStyles.flexRowDirection}>
                                <Text style={GlobalStyles.defaultTextFormat}>TABLE #:{' '}<Text style={GlobalStyles.boldTextFormat}>01</Text></Text>
                            </View>
                        </View> */}
                            
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>CARD Number:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, ]} placeholderTextColor={color.border} placeholder="******" secureTextEntry={true}  />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>BANK:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer,{flex: 1}]}>
                                        <Picker selectedValue={selectedValue} style={{height: '100%', width: '100%'}} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                        <Picker.Item label="Metrobank" value="Metrobank" style={GlobalStyles.boldTextFormat} />
                                        <Picker.Item label="BPI" value="BPI" style={GlobalStyles.boldTextFormat} />
                                        <Picker.Item label="BDO" value="BDO" style={GlobalStyles.boldTextFormat} />
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>CODE:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: 200}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, ]} placeholderTextColor={color.dark} placeholder="CODE" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>APPROVAL CODE:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, ]} placeholderTextColor={color.border} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={SetTableStyles.tableInfoWrap}>
                            <Text style={[GlobalStyles.defaultTextFormat]}>CARD HOLDER NAME:{' '}</Text>
                            <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                <TextInput style={[ GlobalStyles.boldTextFormat,{width: '100%', height: '100%', paddingHorizontal: 10} ]} placeholderTextColor={color.dark} value="Juan U. De la Cruz" />
                            </View>
                        </View>
                    </View>
                    <View style={{gap: 10}}>                    
                        <View style={TakeOrderStyles.modalButtonWrap}>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {}}>
                            <Text style={GlobalStyles.buttonText}>Apply</Text>
                        </Pressable>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalCreditDebit(!modalCreditDebit)}>
                            <Text style={GlobalStyles.buttonText}>Cancel</Text>
                        </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
          </View>
        </Modal>
        
        {/* Modal for E-Wallet */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalEwallet} onRequestClose={() => {setModalEwallet(!modalEwallet);}}>
          <View style={GlobalStyles.centeredView}>

            <View style={GlobalStyles.modalView}>
                <ScrollView style={TakeOrderStyles.modalContainer}>
                    <View style={[GlobalStyles.flexRow]}>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Text style={[GlobalStyles.textH1, GlobalStyles.textDark, GlobalStyles.textUpper, GlobalStyles.textBold, {color: color.secondary}]}>E-Wallet</Text>
                        </View>
                        <View style={[GlobalStyles.tblCellFlex6]}>
                            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalEwallet(!modalEwallet)}>
                                <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                            </Pressable>
                        </View>
                    </View>
                    <View style={[SetTableStyles.orderInfoContainer]}>
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>REFERENCE Number:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, ]}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={SetTableStyles.orderInfoRow}>
                            <View style={GlobalStyles.flexRowDirection}>
                                <View style={SetTableStyles.tableInfoWrap}>
                                    <Text style={[GlobalStyles.defaultTextFormat]}>Account Number:{' '}</Text>
                                    <View style={[TakeOrderStyles.inputContainer, {width: '100%'}]}>
                                        <TextInput style={[ TakeOrderStyles.inputText, ]}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{gap: 10}}>                    
                        <View style={TakeOrderStyles.modalButtonWrap}>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {}}>
                            <Text style={GlobalStyles.buttonText}>Apply</Text>
                        </Pressable>
                        <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalEwallet(!modalEwallet)}>
                            <Text style={GlobalStyles.buttonText}>Cancel</Text>
                        </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default OptionBar

const styles = StyleSheet.create({})