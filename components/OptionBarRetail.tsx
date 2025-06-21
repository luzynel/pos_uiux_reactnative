import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import React, {useState} from 'react';
import {useNavigation,useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import {GlobalStyles} from './styles/GlobalStyles';
import IconItem from './IconItem';
import {color} from '../assets/utils/colors';
import { font } from '../assets/utils/fonts';
import RetailStyles from './styles/RetailStyles';
import RetailCustomerInfo from '../pages/Retail/RetailCustomerInfo';
import RetailSearchItem from '../pages/Retail/RetailSearchItem';

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

const OptionBarRetail = ({ pageName }: OptionBarProps) => {

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
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalPayOrderDiscount(true)}>
              <IconItem itype={'material-icons'} iname={'discount'} isize={28} icolor={color.light} />
              <View style={[GlobalStyles.buttonTextWrap,{height:'auto',marginTop:8}]}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Discounts</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalPayOrderDiscountCharge(true)}>
              <IconItem itype={'FontAwesome5'} iname={'money-bill'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Discount Charge</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalPayOrderLoyalty(true)}>
              <IconItem itype={'Octicons'} iname={'feed-star'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Loyalty Card Point</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalPayOrderSplitEwallet(true)}>
              <IconItem itype={'FontAwesome'} iname={'copy'} isize={28} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Split Payments</Text></View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[GlobalStyles.buttonsWrap,{paddingHorizontal: 5}]}>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalCustInfo(true)}>
              <IconItem itype={'FontAwesome'} iname={'id-card-o'} isize={26} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Customer Info</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem, GlobalStyles.bgTertiary,disabledBtnsRoute1.includes(currentRouteName) && GlobalStyles.buttonDisabled]} disabled={disabledBtnsRoute1.includes(currentRouteName)} onPress={() => {onPressNavigate('RetailPayOrder')}}>
              <IconItem itype={'material-icons'} iname={'payment'} isize={34} icolor={color.light} />
              <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Pay</Text></View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const optionBarMoreButtons = (pageName?: string) => {
    if(pageName === 'RetailPayOrder'){
      return (
        <View style={[GlobalStyles.buttonsWrap]}>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem,GlobalStyles.bgSuccess,{width:140}]} onPress={() => {onPressNavigate('RetailOfficialReceipt')}}>
              <IconItem itype={'Ionicons'} iname={'receipt'} isize={28} icolor={color.light} />
              <View style={[GlobalStyles.buttonTextWrap,{height:'auto',marginTop:8}]}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Print Receipt</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonMore,GlobalStyles.bgLight]} onPress={() => onPressNavigate('MainViewTerminal')}>
            <IconItem itype={'AntDesign'} iname={'home'} isize={36} icolor={color.secondary} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={[GlobalStyles.buttonsWrap]}>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonItem]} onPress={() => setModalSearchItem(true)}>
            <IconItem itype={'FontAwesome'} iname={'search'} isize={26} icolor={color.light} />
            <View style={GlobalStyles.buttonTextWrap}><Text style={[GlobalStyles.buttonText,RetailStyles.buttonItemText]}>Search Item</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={[GlobalStyles.button, RetailStyles.buttonMore]} onPress={() => setModalVisible(true)}>
            <IconItem itype={'material-icons'} iname={'unfold-more'} isize={36} icolor={color.secondary} />
            <Text style={[GlobalStyles.buttonText,RetailStyles.buttonMoreText]}>More Options</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  return (
    <View style={RetailStyles.frameBar}>

        {/** Tables Menu */}  
        <View style={RetailStyles.frameBarTop}>
          <ScrollView style={RetailStyles.frameBarTopScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
            { optionBarButtons(pageName) }
          </ScrollView>
        </View>
        
        <View style={RetailStyles.frameBarBottom}>
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

        {/* Customer Info Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="slide" visible={modalCustInfo} transparent={true} onRequestClose={() => {setModalCustInfo(!modalCustInfo);}}>
          <View style={[GlobalStyles.centeredView,GlobalStyles.modalOptionBar]}>
            <View style={[GlobalStyles.modalView,GlobalStyles.modalViewOptionBar]}>
              <View style={[GlobalStyles.modalContainer,{backgroundColor: color.light,flex:1}]}>
                <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalCustInfo(!modalCustInfo)}>
                  <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                </Pressable>
                <RetailCustomerInfo closeModalCustInfo={() => setModalCustInfo(!modalCustInfo)} />
              </View>
            </View>
          </View>
        </Modal>

        {/* Search Item Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="slide" visible={modalSearchItem} transparent={true} onRequestClose={() => {setModalSearchItem(!modalSearchItem);}}>
          <View style={[GlobalStyles.centeredView,GlobalStyles.modalOptionBar]}>
            <View style={[GlobalStyles.modalView,GlobalStyles.modalViewOptionBar]}>
              <View style={[GlobalStyles.modalContainer,{backgroundColor: color.light,flex:1}]}>
                <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalSearchItem(!modalSearchItem)}>
                  <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
                </Pressable>
                <RetailSearchItem closeModalSearchItem={() => setModalSearchItem(!modalSearchItem)} />
              </View>
            </View>
          </View>
        </Modal>

        {/* Discount Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalPayOrderDiscount} onRequestClose={() => {setModalPayOrderDiscount(!modalPayOrderDiscount);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{width: 800, maxWidth: '90%', padding: 15,}]}>
            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalPayOrderDiscount(!modalPayOrderDiscount)}>
              <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
            </Pressable>
            <ScrollView style={GlobalStyles.modalScrollBox}>
              <View style={[GlobalStyles.formFieldsWrap,{marginBottom: 20}]}>
                <View style={GlobalStyles.formFieldGroup}>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Discount:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <View style={GlobalStyles.flex1}>
                        <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                          <Picker.Item label="SENIOR"  value="senior" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="PWD"  value="pwd" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem,{width: 260,flex: 0}]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{minWidth: 80, height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall,{width: '100%'}]}>Code:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                        aria-label="discount-code"
                        editable={true}
                        value="SENIOR"
                        textAlignVertical="center"
                      />
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.formFieldGroup}>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Discount Type:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <View style={GlobalStyles.flex1}>
                        <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                          <Picker.Item label="By Percentage"  value="percentage" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="By Amount"  value="amount" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem,{width: 260,flex: 0}]}>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                        aria-label="discount-value"
                        editable={true}
                        textAlignVertical="center"
                        placeholder="% or Amount"
                        placeholderTextColor={color.dark}
                      />
                    </View>
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{maxWidth: 152, height: 60}]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Description:</Text>
                  </View>
                  <View style={[GlobalStyles.inputField,{height: 60}]}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="discount-description"
                      editable={true}
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>

              <View style={[GlobalStyles.formFieldsWrap,{marginBottom: 30}]}>
                <View style={RetailStyles.totalDiscountInfo}>
                  <View style={RetailStyles.totalDiscountRow}>
                    <Text style={RetailStyles.totalDiscountText}>Total Based Sales:</Text>
                    <Text style={RetailStyles.totalDiscountAmount}>409.00</Text>
                  </View>
                  <View style={RetailStyles.totalDiscountRow}>
                    <Text style={RetailStyles.totalDiscountText}>Senior Discount <Text style={[GlobalStyles.boldTextFormat,{color: color.dark, fontSize: 18}]}>5%</Text>:</Text>
                    <Text style={RetailStyles.totalDiscountAmount}>24.14</Text>
                  </View>
                </View>
              </View>

              <View style={GlobalStyles.formFieldsWrap}>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'fontawesome6'} iname={'user'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-name"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="Customer Name"
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-community'} iname={'card-bulleted-outline'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-tin"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="ID No."
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-icons'} iname={'qr-code'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-code"
                      value="45322"
                      editable={false}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>

              <View style={{gap: 10}}>                    
                  <View style={RetailStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalPayOrderDiscount(!modalPayOrderDiscount),onPressNavigate('RetailPayOrderDiscount')}}>
                      <Text style={GlobalStyles.buttonText}>Apply</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalPayOrderDiscount(!modalPayOrderDiscount)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                  </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>

        {/* Discount Charge Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalPayOrderDiscountCharge} onRequestClose={() => {setModalPayOrderDiscount(!modalPayOrderDiscountCharge);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{width: 800, maxWidth: '90%', padding: 15,}]}>
            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalPayOrderDiscountCharge(!modalPayOrderDiscountCharge)}>
              <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
            </Pressable>
            <ScrollView style={GlobalStyles.modalScrollBox}>
              <View style={[GlobalStyles.formFieldsWrap,{marginBottom: 20}]}>
                <View style={GlobalStyles.formFieldGroup}>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Discount Charge:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <View style={GlobalStyles.flex1}>
                        <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                          <Picker.Item label="Junior Distributor"  value="JrDist" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="Other"  value="other" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem,{width: 260,flex: 0}]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{minWidth: 80, height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall,{width: '100%'}]}>Code:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                        aria-label="discount-code"
                        editable={true}
                        value="JrDist"
                        textAlignVertical="center"
                      />
                    </View>
                  </View>
                </View>
                <View style={GlobalStyles.formFieldGroup}>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                    <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{height: 60}]}>
                      <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Discount Type:</Text>
                    </View>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <View style={GlobalStyles.flex1}>
                        <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                          <Picker.Item label="By Percentage"  value="percentage" style={GlobalStyles.boldTextFormat} />
                          <Picker.Item label="By Amount"  value="amount" style={GlobalStyles.boldTextFormat} />
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem,{width: 260,flex: 0}]}>
                    <View style={[GlobalStyles.inputField,{height: 60}]}>
                      <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                        aria-label="discount-value"
                        editable={true}
                        textAlignVertical="center"
                        placeholder="% or Amount"
                        placeholderTextColor={color.dark}
                      />
                    </View>
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{maxWidth: 152, height: 60}]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Description:</Text>
                  </View>
                  <View style={[GlobalStyles.inputField,{height: 60}]}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="discount-description"
                      editable={true}
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{maxWidth: 152, height: 60}]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Charge Type:</Text>
                  </View>
                  <View style={[GlobalStyles.inputField,{height: 60}]}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="discount-charge"
                      editable={true}
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>

              <View style={GlobalStyles.formFieldsWrap}>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'fontawesome6'} iname={'user'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-name"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="Customer Name"
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-community'} iname={'card-bulleted-outline'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-id"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="ID No."
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-community'} iname={'card-bulleted-outline'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-tin"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="TIN"
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={GlobalStyles.iconField}>
                    <IconItem itype={'material-icons'} iname={'qr-code'} isize={22} icolor={color.border} />
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="customer-code"
                      value="45322"
                      editable={false}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>

              <View style={{gap: 10}}>                    
                  <View style={RetailStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalPayOrderDiscountCharge(!modalPayOrderDiscountCharge),onPressNavigate('RetailPayOrderDiscount')}}>
                      <Text style={GlobalStyles.buttonText}>Apply</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalPayOrderDiscountCharge(!modalPayOrderDiscountCharge)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                  </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>


        {/* Loyalty Card Point Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalPayOrderLoyalty} onRequestClose={() => {setModalPayOrderLoyalty(!modalPayOrderLoyalty);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{width: 800, maxWidth: '90%', padding: 15,}]}>
            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalPayOrderLoyalty(!modalPayOrderLoyalty)}>
              <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
            </Pressable>
            <ScrollView style={GlobalStyles.modalScrollBox}>
              <View style={[GlobalStyles.formFieldsWrap,{marginBottom: 20}]}>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Loyalty Card No.:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="loyalty-no"
                      editable={true}
                      textAlignVertical="center"
                      placeholder="{scan/enter}"
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Name:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="loyalty-name"
                      editable={false}
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={GlobalStyles.formFieldItem}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Expiry Date:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="loyalty-expiry"
                      editable={false}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>

              <View style={RetailStyles.loyaltyPointsWrap}>
                <View style={RetailStyles.loyaltyPointsItem}>
                  <View style={RetailStyles.loyaltyPointsIcon}><IconItem itype={'material-icons'} iname={'loyalty'} isize={30} icolor={color.success} /></View>
                  <Text style={RetailStyles.loyaltyPointsLabel}>Loyalty Points Earned:</Text>
                  <Text style={RetailStyles.loyaltyPointsAmount}>0</Text>
                </View>
                <View style={[RetailStyles.loyaltyPointsItem,{borderColor: color.tertiary}]}>
                  <View style={RetailStyles.loyaltyPointsIcon}><IconItem itype={'material-icons'} iname={'wallet-membership'} isize={30} icolor={color.tertiary} /></View>
                  <Text style={[RetailStyles.loyaltyPointsLabel,{color: color.tertiary}]}>Current Points Earned:</Text>
                  <Text style={RetailStyles.loyaltyPointsAmount}>2</Text>
                </View>
                <View style={[RetailStyles.loyaltyPointsItem,{borderColor: color.primary}]}>
                  <View style={RetailStyles.loyaltyPointsIcon}><IconItem itype={'material-icons'} iname={'account-balance-wallet'} isize={32} icolor={color.primary} /></View>
                  <Text style={[RetailStyles.loyaltyPointsLabel,{color: color.primary}]}>Balance:</Text>
                  <Text style={RetailStyles.loyaltyPointsAmount}>150.00</Text>
                </View>
              </View>

              <View style={RetailStyles.loyaltyPointsCredit}>
                <Text style={[RetailStyles.loyaltyPointsCreditLabel,GlobalStyles.textBold]}>Amount to Credit:</Text>
                <View style={[GlobalStyles.inputField,RetailStyles.loyaltyPointsCreditInput]}>
                  <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm,GlobalStyles.textH3,GlobalStyles.alignRight]}
                    aria-label="loyalty-credit"
                    editable={true}
                    keyboardType="numeric"
                    textAlignVertical="center"
                    defaultValue="50.00"
                  />
                </View>
              </View>

              <View style={{gap: 10}}>                    
                  <View style={RetailStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalPayOrderLoyalty(!modalPayOrderLoyalty),onPressNavigate('RetailPayOrderDiscount')}}>
                      <Text style={GlobalStyles.buttonText}>Apply</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalPayOrderLoyalty(!modalPayOrderLoyalty)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                  </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>

        {/* Split Payments Ewallet Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalPayOrderSplitEwallet} onRequestClose={() => {setModalPayOrderSplitEwallet(!modalPayOrderSplitEwallet);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{width: 800, maxWidth: '90%', padding: 15,}]}>
            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalPayOrderSplitEwallet(!modalPayOrderSplitEwallet)}>
              <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
            </Pressable>
            <ScrollView style={GlobalStyles.modalScrollBox}>
              {/* Ewallet */}
              <View style={RetailStyles.payOrderForm}>
                <View style={[GlobalStyles.formFieldItem]}>							
                  <View style={[GlobalStyles.iconField,{height:60}]}>
                    <IconItem itype={'Ionicons'} iname={'wallet-outline'} isize={28} icolor={color.shadow} />
                  </View>
                  <View style={[GlobalStyles.inputField,{height:60}]}>
                    <View style={[{width: '100%'}]}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                        <Picker.Item label="GCASH"  value="ewallet" style={GlobalStyles.boldTextFormat} />
                        <Picker.Item label="CREDIT CARD"  value="card" style={GlobalStyles.boldTextFormat} />
                      </Picker>
                    </View>
                  </View>
                </View>	
                
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Reference No:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="ewallet-reference"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Account No:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="ewallet-account"
                      editable={true}
                      textAlignVertical="center"
                    />
                  </View>
                </View>

                <View style={RetailStyles.loyaltyPointsCredit}>
                  <Text style={[RetailStyles.loyaltyPointsCreditLabel,GlobalStyles.textBold]}>GCash Amount:</Text>
                  <View style={[GlobalStyles.inputField,RetailStyles.loyaltyPointsCreditInput]}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm,GlobalStyles.textH3,GlobalStyles.alignRight]}
                      aria-label="ewallet-amount"
                      value="282.72"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>
              
              <View style={{gap: 10}}>                    
                <View style={RetailStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalPayOrderSplitEwallet(!modalPayOrderSplitEwallet);setModalPayOrderSplitCard(true);}}>
                      <Text style={GlobalStyles.buttonText}>Apply</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalPayOrderSplitEwallet(!modalPayOrderSplitEwallet)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>


        {/* Split Payments Card Modal */}
        <Modal style={GlobalStyles.modalOverlay} animationType="fade" transparent={true} visible={modalPayOrderSplitCard} onRequestClose={() => {setModalPayOrderSplitCard(!modalPayOrderSplitCard);}}>
          <View style={GlobalStyles.centeredView}><View style={[GlobalStyles.modalView,{width: 800, maxWidth: '90%', padding: 15,}]}>
            <Pressable style={[GlobalStyles.button,GlobalStyles.bgAlert,GlobalStyles.modalCloseButton]} onPress={() => setModalPayOrderSplitCard(!modalPayOrderSplitCard)}>
              <IconItem itype={'Ionicons'} iname={'close-sharp'} isize={30} icolor={color.light}/>
            </Pressable>
            <ScrollView style={GlobalStyles.modalScrollBox}>
              {/* Card */}
              <View style={RetailStyles.payOrderForm}>
                <View style={[GlobalStyles.formFieldItem]}>							
                  <View style={[GlobalStyles.iconField,{height:60}]}>
                    <IconItem itype={'Ionicons'} iname={'wallet-outline'} isize={28} icolor={color.shadow} />
                  </View>
                  <View style={[GlobalStyles.inputField,{height:60}]}>
                    <View style={[{width: '100%'}]}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]}>
                        <Picker.Item label="CREDIT CARD"  value="card" style={GlobalStyles.boldTextFormat} />
                      </Picker>
                    </View>
                  </View>
                </View>	
                
                
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Card No:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="card-number"
                      value="12345*******0906"
                      editable={false}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel,{height: 60}]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Bank:</Text>
                  </View>
                  <View style={[GlobalStyles.inputField,GlobalStyles.inputFieldRow,{height: 60}]}>
                    <View style={GlobalStyles.flex1}>
                      <Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Metrobank"  value="metrobank" style={GlobalStyles.boldTextFormat} />
                        <Picker.Item label="BDO"  value="bdo" style={GlobalStyles.boldTextFormat} />
                        <Picker.Item label="BPI"  value="bpi" style={GlobalStyles.boldTextFormat} />
                      </Picker>
                    </View>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm,RetailStyles.inputTextFieldCardNo]}
                      aria-label="card-number"
                      value="89740"
                      editable={false}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Approval Code:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="card-approval"
                      value="526845"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
                <View style={{marginTop: 20, marginBottom: 10,padding: 10, backgroundColor: color.lighter.primary}}>
                  <Text style={[GlobalStyles.textH3,{fontFamily: font.semibold, textTransform: 'uppercase', color: color.dark}]}>Additional Information:</Text>
                </View>
                <View style={[GlobalStyles.formFieldItem]}>
                  <View style={[GlobalStyles.inputLabel,RetailStyles.inputLabel]}>
                    <Text style={[GlobalStyles.inputLabelText,RetailStyles.inputLabelTotalTextSmall]}>Card Holder Name:</Text>
                  </View>
                  <View style={GlobalStyles.inputField}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm]}
                      aria-label="card-holdername"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>

                <View style={RetailStyles.loyaltyPointsCredit}>
                  <Text style={[RetailStyles.loyaltyPointsCreditLabel,GlobalStyles.textBold]}>Credit Card Amount:</Text>
                  <View style={[GlobalStyles.inputField,RetailStyles.loyaltyPointsCreditInput]}>
                    <TextInput style={[GlobalStyles.inputTextFieldLight,GlobalStyles.inputTextFieldEm,GlobalStyles.textH3,GlobalStyles.alignRight]}
                      aria-label="ewallet-amount"
                      value="282.72"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                </View>
              </View>
              
              <View style={{gap: 10}}>                    
                <View style={RetailStyles.modalButtonWrap}>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgSuccess]} onPress={() => {setModalPayOrderSplitCard(!modalPayOrderSplitCard),onPressNavigate('RetailPayOrderDiscount')}}>
                      <Text style={GlobalStyles.buttonText}>Apply</Text>
                  </Pressable>
                  <Pressable style={[GlobalStyles.button, GlobalStyles.buttonSmall, GlobalStyles.bgAlert]} onPress={() => setModalPayOrderSplitCard(!modalPayOrderSplitCard)}>
                      <Text style={GlobalStyles.buttonText}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View></View>
        </Modal>
        
    </View>
  )
}

export default OptionBarRetail

const styles = StyleSheet.create({})