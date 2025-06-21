import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';
import TakeOrderStyles from '../../components/styles/TakeOrderStyles';

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import OptionBarRetail from '../../components/OptionBarRetail';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
  MainViewTerminal: undefined;
  ModifyOrder: undefined;
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
}

const totalData0: OrderTotal[] = [
  {id: 1, items: 0},
];
const totalData: OrderTotal[] = [
  {id: 1, items: 15},
];

const windowWidth = Dimensions.get('window').width;
const calculatedMaxWidth = windowWidth * 0.5 - 12;

const RetailOrderItems = () => {
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
  const [modalQuantity, setModalQuantity] = useState(false);
  const [modalRemoveItem, setModalRemoveItem] = useState(false);
  const [modalAuthorizedAccess, setModalAuthorizedAccess] = useState(false);
  const [inputValue, setInputValue] = useState('8');
  const isSaveDisabled = !inputValue || inputValue.trim() === '0';

  const orderItems = ({item}: {item: OrderItem}) => (
    <TouchableOpacity onPress={() => setModalQuantity(true)}>
    <View style={[GlobalStyles.tblDisplayItemNoBorder]}>      
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,GlobalStyles.tblCellRight,{width: 100,color: color.link}]}>{item.qty}</Text>      
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,{width: 80}]}>{item.uom}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex10,GlobalStyles.tblCellLeft,{textTransform: 'uppercase',width: 460}]}>{item.item}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight]}>{item.code}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight]}>@ {item.price.toFixed(2)}</Text>
      <Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth,GlobalStyles.tblCellRight,{fontFamily: font.semibold, paddingRight: 20}]}>{item.totalp.toFixed(2)} {item.vat}</Text>
    </View>
    </TouchableOpacity>
  );

  const subtotalItems = ({item}: {item: OrderTotal}) => (
    <View style={[RetailStyles.tblItemsCount]}>
      <Text style={[RetailStyles.tblItemsCountNumber]}>{item.items}</Text><Text style={RetailStyles.tblItemsCountText}>item(s)</Text>
    </View>
  );
  
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/** Frames Container */}
      <View style={[RetailStyles.framesWrapper]}>

        {/* frameHeader */}
        <View style={GlobalStyles.frameHeader}>
          <View style={[GlobalStyles.headerWrap, GlobalStyles.headerWrapInner]}>
            <TouchableOpacity onPress={() => onPressNavigate('MainViewTerminal')} style={[GlobalStyles.button, GlobalStyles.headerButton]}>
              <IconItem itype="AntDesign" iname="home" isize={28} icolor={color.secondary} />
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
        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <View style={GlobalStyles.frameMain}>  

          

          {/* Barcode */}
          <View style={[RetailStyles.retailWrapper,{backgroundColor: '#eee'}]}>            
            <View style={GlobalStyles.formFieldGroup}>
              <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                <View style={GlobalStyles.iconField}>
                  <IconItem itype={'FontAwesome6'} iname={'barcode'} isize={22} icolor={color.dark} />
                </View>
                <View style={[GlobalStyles.inputField,RetailStyles.inputBarcodeField]}>
                  <TextInput style={[GlobalStyles.inputTextField,RetailStyles.inputBarcodeText]}
                    aria-label="barcode"
                    placeholder="{scan/enter}"
                    editable={true}
                    keyboardType="numeric"
                    textAlignVertical="center"
                  />
                </View>
              </View>

              <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem,{justifyContent: 'flex-end'}]}>
                <View style={RetailStyles.inputTotalWrap}>
                  <Text style={RetailStyles.inputTotalLabel}>Total:</Text>
                  <View style={RetailStyles.inputTotalField}>
                    <Text style={RetailStyles.inputTotalSign}>$</Text>
                    <TextInput style={[RetailStyles.inputTotalText]}
                      aria-label="total"
                      value="995.00"
                      editable={true}
                      keyboardType="numeric"
                      textAlignVertical="center"
                    />
                  </View>
                  <View style={RetailStyles.totalStatus}><Text style={RetailStyles.totalStatusText}>Unpaid</Text></View>
                </View>
              </View>
            </View>
          </View>


          <View style={[GlobalStyles.orderSummaryBox,{borderTopWidth: 2, borderBottomWidth: 2, borderColor: color.border}]}>
          
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[GlobalStyles.tblDisplayRows,{paddingVertical: 20}]}>
              
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
            <View style={GlobalStyles.formFieldGroup}>
              <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
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
              <View style={[GlobalStyles.formFieldItem,GlobalStyles.fieldGroupItem]}>
                <View style={GlobalStyles.iconField}>
                  <IconItem itype={'material-icons'} iname={'qr-code'} isize={22} icolor={color.shadow} />
                </View>
                <View style={GlobalStyles.inputField}>
                  <TextInput style={[GlobalStyles.inputTextField,GlobalStyles.inputTextFieldEm, {color: color.dark}]}
                    aria-label="customer-code"
                    value="000-323-323"
                    editable={false}
                    keyboardType="numeric"
                    textAlignVertical="center"
                  />
                </View>
              </View>
            </View>
          </View>

        </View>
        }

        {/* RightBar Frame */}
        <OptionBarRetail />
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

    </SafeAreaView>
  );
}

export default RetailOrderItems

const styles = StyleSheet.create({})