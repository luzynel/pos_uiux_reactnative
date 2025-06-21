import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import {useNavigation,useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import {GlobalStyles} from './styles/GlobalStyles';
import IconItem from './IconItem';
import {color} from '../assets/utils/colors';
import { font } from '../assets/utils/fonts';
import CashRegisterStyles from './styles/CashRegisterStyles';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  RetailPayOrder: undefined;
  RetailPayOrderDiscount: undefined;
  RetailPendingUnpaidEmpty: undefined;
  RetailOfficialReceipt: undefined;
  RetailReprintReceipt: undefined;
  RetailVoidReceipt: undefined;
};
type OptionBarProps = {
  pageName?: string;
};

const OptionBarCR = ({ pageName }: OptionBarProps) => {

  const navigation = useNavigation<NavigationProp>();
  const onPressNavigate = (navLinkItem: keyof RootStackParamList) => {
      navigation.navigate(navLinkItem);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCustInfo, setModalCustInfo] = useState(false);
  const [modalSearchItem, setModalSearchItem] = useState(false);
  const [modalPayOrderDiscount, setModalPayOrderDiscount] = useState(false);
  const [modalPayOrderDiscountCharge, setModalPayOrderDiscountCharge] = useState(false);
  const [modalPayOrderLoyalty, setModalPayOrderLoyalty] = useState(false);
  const [modalPayOrderSplitEwallet, setModalPayOrderSplitEwallet] = useState(false);
  const [modalPayOrderSplitCard, setModalPayOrderSplitCard] = useState(false);
  const [selectedValue, setSelectedValue] = useState('cash'); 

  const state = useNavigationState(state => state);
  const currentRouteName = state.routes[state.index].name;
  const disabledBtnsRoute1 = ['RetailOrderHome'];
  const disabledBtnsRoute2 = ['RetailOrderItems'];

  const optionBarButtons = (pageName?: string) => {
    if(pageName === 'RetailPayOrder'){
      return (
        <View style={[GlobalStyles.buttonsWrap,{paddingHorizontal: 5}]}>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalPayOrderDiscount(true)}>
              <IconItem itype={'material-icons'} iname={'discount'} isize={28} icolor={color.light} />
              <View style={[GlobalStyles.buttonTextWrap,{height:'auto',marginTop:8}]}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Discounts</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalPayOrderDiscountCharge(true)}>
              <IconItem itype={'FontAwesome5'} iname={'money-bill'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Discount Charge</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalPayOrderLoyalty(true)}>
              <IconItem itype={'Octicons'} iname={'feed-star'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Loyalty Card Point</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalPayOrderSplitEwallet(true)}>
              <IconItem itype={'FontAwesome'} iname={'copy'} isize={28} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Split Payments</Text></View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[GlobalStyles.buttonsWrap,{paddingHorizontal: 5}]}>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalCustInfo(true)}>
              <IconItem itype={'FontAwesome'} iname={'id-card-o'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Customer Info</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem, GlobalStyles.bgTertiary,disabledBtnsRoute1.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={disabledBtnsRoute1.includes(currentRouteName)} onPress={() => {onPressNavigate('RetailPayOrder')}}>
              <IconItem itype={'material-icons'} iname={'payment'} isize={34} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Pay</Text></View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const optionBarMoreButtons = (pageName?: string) => {
    
    return (
      <View style={[GlobalStyles.buttonsWrap]}>
        <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonItem]} onPress={() => setModalSearchItem(true)}>
          <IconItem itype={'FontAwesome'} iname={'search'} isize={26} icolor={color.light} />
          <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonItemText]}>Search Item</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={[GlobalStyles.button, CashRegisterStyles.buttonMore]} onPress={() => setModalVisible(true)}>
          <IconItem itype={'material-icons'} iname={'unfold-more'} isize={36} icolor={color.secondary} />
          <Text style={[GlobalStyles.buttonText,CashRegisterStyles.buttonMoreText]}>More Options</Text>
        </TouchableOpacity>
      </View>
    );
    
  }
  return (
    <View style={GlobalStyles.frameBar}>

        {/** Tables Menu */}  
        <View style={GlobalStyles.frameBarTop}>
          <ScrollView style={GlobalStyles.frameBarTopScroll} showsHorizontalScrollIndicator={false}>
            { optionBarButtons(pageName) }
          </ScrollView>
        </View>
        
        <View style={GlobalStyles.frameBarBottom}>
          { optionBarMoreButtons(pageName) }
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
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,disabledBtnsRoute2.includes(currentRouteName) && GlobalStyles.buttonDisabled]}  disabled={disabledBtnsRoute2.includes(currentRouteName)} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('RetailPendingUnpaidEmpty');}}>
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Pending Unpaid Items(10)</Text></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,disabledBtnsRoute2.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={disabledBtnsRoute2.includes(currentRouteName)} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('RetailOfficialReceipt');}}>
                    <IconItem itype={'FontAwesome6'} iname={'receipt'} isize={34} icolor={disabledBtnsRoute2.includes(currentRouteName) ? color.background : color.light} />
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Official Receipt</Text></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,disabledBtnsRoute2.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={disabledBtnsRoute2.includes(currentRouteName)} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('RetailReprintReceipt');}}>
                    <IconItem itype={'SimpleLineIcons'} iname={'printer'} isize={34} icolor={color.light} />
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Reprint Receipt</Text></View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[GlobalStyles.button,GlobalStyles.optionBarButton,GlobalStyles.bgPrimary,disabledBtnsRoute2.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={disabledBtnsRoute2.includes(currentRouteName)} onPress={() => {setModalVisible(!modalVisible); onPressNavigate('RetailVoidReceipt');}}>
                    <IconItem itype={'Ionicons'} iname={'receipt-outline'} isize={34} icolor={color.light} />
                    <View style={GlobalStyles.optionBarButtonTextWrap}><Text style={[GlobalStyles.buttonText,GlobalStyles.optionBarButtonText]}>Void Receipt</Text></View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        
    </View>
  )
}

export default OptionBarCR

const styles = StyleSheet.create({})