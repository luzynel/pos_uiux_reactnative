import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import OptionBarRetail from '../../components/OptionBarRetail';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
	MainViewTerminal: undefined;
	ModifyOrder: undefined;
	RetailOrderItems: undefined;
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

interface OrderTotal {
	id: number;
	items: number;
}
const totalData0: OrderTotal[] = [
	{id: 1, items: 0},
];

const windowWidth = Dimensions.get('window').width;
const calculatedMaxWidth = windowWidth * 0.5 - 12;

const RetailOrderHome = () => {
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

	const orderItems = ({item}: {item: OrderItem}) => (
		<View style={[GlobalStyles.tblDisplayItemNoBorder]}>      
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,GlobalStyles.tblCellRight,{width: 100}]}>{item.qty}</Text>
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex1,{width: 80}]}>{item.uom}</Text>
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex10,{textTransform: 'uppercase',width: 460}]}>{item.item}</Text>
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth]}>{item.code}</Text>
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,RetailStyles.tblCellWidth]}>@ {item.price.toFixed(2)}</Text>
			<Text style={[RetailStyles.tblDisplayCell,GlobalStyles.tblCellFlex2,GlobalStyles.tblCellRight,RetailStyles.tblCellWidth,{fontFamily: font.semibold, paddingRight: 20}]}>{item.totalp.toFixed(2)} {item.vat}</Text>
		</View>
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
										onSubmitEditing={() => onPressNavigate('RetailOrderItems')}
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
											editable={true}
											keyboardType="numeric"
											textAlignVertical="center"
										/>
									</View>
								</View>
							</View>
						</View>
					</View>


					<View style={[GlobalStyles.orderSummaryBox,{borderTopWidth: 2, borderBottomWidth: 2, borderColor: color.border}]}>
					
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[GlobalStyles.tblDisplayRows,{paddingVertical: 20}]}>
							
							<FlatList
								data={data0}
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
								data={totalData0}
								scrollEnabled={true}
								keyExtractor={(item, index) => index.toString()}
								renderItem={subtotalItems}></FlatList>
						</View>
					</View>

				</View>
				}

				{/* RightBar Frame */}
				<OptionBarRetail pageName={'RetailOrderHome'} />
			</View>
		</SafeAreaView>
	);
}

export default RetailOrderHome

const styles = StyleSheet.create({})