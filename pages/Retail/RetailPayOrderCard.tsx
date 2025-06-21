import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import RetailStyles from '../../components/styles/RetailStyles';

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import OptionBarRetail from '../../components/OptionBarRetail';
import IconItem from '../../components/IconItem';
import Calculator from '../../components/Calculator';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
	MainViewTerminal: undefined;
	ModifyOrder: undefined;
	RetailOrderItems: undefined;
	RetailPayOrder: undefined;
	RetailPayOrderEwallet: undefined;
	RetailPayOrderCard: undefined;
};

const RetailPayOrderCard = () => {
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
	const [selectedValue, setSelectedValue] = useState('card');
	const handleValueChange = (value: string) => {
		setSelectedValue(value);
		if (value === "cash") {
			onPressNavigate("RetailPayOrder");
		} else if (value === "ewallet") {
			onPressNavigate("RetailPayOrderEwallet");
		} else if (value === "card") {
			onPressNavigate("RetailPayOrderCard");
		}
	};

	const [amountTendered, setAmountTendered] = useState('');
	const handleDataFromCalculator = (data: string) => {
		if(amountTendered == '' && data === '10') {
			setAmountTendered('');
		}else if(amountTendered == '' && data === '0') {
			setAmountTendered('');
		}else if (data === '10') { //if '00'
			data = '00';
			const newAmountTendered = amountTendered + data;
			setAmountTendered(newAmountTendered);
		}else if (data === '11') {  //if '.'
			data = '.';
			const newAmountTendered = amountTendered + data;
			setAmountTendered(newAmountTendered);
		}else if (data === 'C') { // if 'C'
			setAmountTendered('');
		}else {
			const newAmountTendered = amountTendered + data;
			setAmountTendered(newAmountTendered);
		}
	};

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

						<View style={[RetailStyles.payOrderWrap]}>
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
								<View style={[GlobalStyles.iconField,{height:60}]}>
									<IconItem itype={'Ionicons'} iname={'wallet-outline'} isize={28} icolor={color.shadow} />
								</View>
								<View style={[GlobalStyles.inputField,{height:60}]}>
									<View style={[{width: '100%'}]}>
										<Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={handleValueChange}>
											<Picker.Item label="CASH"  value="cash" style={GlobalStyles.boldTextFormat} />
											<Picker.Item label="GCASH"  value="ewallet" style={GlobalStyles.boldTextFormat} />
											<Picker.Item label="CREDIT CARD"  value="card" style={GlobalStyles.boldTextFormat} />
										</Picker>
									</View>
								</View>
							</View>
						</View>

						{/* Sub Total */}
						<View style={RetailStyles.payOrderTotal}>
							<View style={[GlobalStyles.formFieldsWrap]}>
								<View style={RetailStyles.totalDiscountInfo}>
									<View style={RetailStyles.totalDiscountRow}>
										<Text style={RetailStyles.totalDiscountText}>Sub Total:</Text>
										<Text style={RetailStyles.totalDiscountAmount}>482.72</Text>
									</View>
								</View>
							</View>
						</View>

						{/* Overall Total */}
						<View style={RetailStyles.payOrderTotal}>
							<View style={[GlobalStyles.formFieldsWrap]}>
								<View style={RetailStyles.totalDiscountInfo}>
									<View style={RetailStyles.totalDiscountRow}>
										<Text style={[RetailStyles.totalDiscountText,GlobalStyles.textH3]}>Total:</Text>
										<Text style={[RetailStyles.totalDiscountAmount,GlobalStyles.textH3]}>482.72</Text>
									</View>
								</View>
								<View style={RetailStyles.totalDiscountInfo}>
									<View style={RetailStyles.totalDiscountRow}>
										<Text style={RetailStyles.totalDiscountText}>Card:</Text>
										<Text style={RetailStyles.totalDiscountAmount}>482.72</Text>
									</View>
								</View>
								<View style={RetailStyles.totalDiscountInfo}>
									<View style={RetailStyles.totalDiscountRow}>
										<Text style={RetailStyles.totalDiscountText}>Change:</Text>
										<Text style={RetailStyles.totalDiscountAmount}>0.00</Text>
									</View>
								</View>
							</View>
						</View>
					</View>

					<View style={RetailStyles.retailFrame}>
						{/* Main Frame */}
						{isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
						<View style={[GlobalStyles.frameMain,RetailStyles.payOrderMainWrap]}>

							{/* Card */}
							<View style={RetailStyles.payOrderForm}>
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
											<Picker selectedValue={selectedValue} style={[GlobalStyles.pickerWrap]} onValueChange={handleValueChange}>
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
							</View>

						</View>
						}
					</View>
				</View>

				{/* RightBar Frame */}
				<OptionBarRetail pageName={'RetailPayOrder'} />

			</View>
		</SafeAreaView>
	);
}

export default RetailPayOrderCard

const styles = StyleSheet.create({})