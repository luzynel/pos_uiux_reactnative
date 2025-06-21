import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import {useNavigation,useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import { GlobalPrintStyles,OfficialReceiptStyles } from '../../components/styles/GlobalPrintStyles';
import RetailStyles from '../../components/styles/RetailStyles';
import SetTableStyles from '../../components/styles/SetTableStyles';
import { BillPrintoutStyles } from '../../components/styles/SettleOrderBillPrintoutStyles';
import PrintOrderList from '../../components/styles/TakeOrderPrintOrderListStyles';

import IconItem from '../../components/IconItem';
import { color } from '../../assets/utils/colors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
	MainViewTerminal: undefined;
	SetTable: undefined;
};

const RetailOfficialReceipt = () => {
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

	return (
		<SafeAreaView style={GlobalStyles.container}>

			{/* Header */}
			<View style={GlobalPrintStyles.headerContainer}>
				<Text style={GlobalPrintStyles.headerContainerText}>Official Receipt</Text>
			</View>

			{/* Body */}
			{isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
			<ScrollView style={GlobalPrintStyles.container}>
				<View style={GlobalPrintStyles.containerInner}>

					{/* header details */}
					<View style={GlobalPrintStyles.receiptWrap}>
						<Image source={require('../../assets/img/logo-dark.png')} style={GlobalPrintStyles.logoImg} />
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptText}>Store Name</Text>
							<Text style={GlobalPrintStyles.receiptText}>Company Name</Text>
							<Text style={[GlobalPrintStyles.receiptTextSmall]}>Address first line</Text>
							<Text style={[GlobalPrintStyles.receiptTextSmall]}>Address second line</Text>
						</View>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptTextSmall}>VAT/TIN: <Text style={{fontWeight:'700'}}>000-001-234-567</Text></Text>
							<View style={GlobalPrintStyles.flexTextCenter}>
								<Text style={GlobalPrintStyles.receiptTextSmall}>POS SN: <Text style={{fontWeight:'700'}}>ABCD0012</Text></Text>
								<Text style={GlobalPrintStyles.receiptTextSmall}>MIN: <Text style={{fontWeight:'700'}}>012346789</Text></Text>
							</View>
						</View>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptTextSmall}>Permit: <Text style={{fontWeight:'700'}}>000-001-234-567</Text></Text>
						</View>
					</View>            
					<View style={GlobalPrintStyles.receiptDetails}>
						<View style={GlobalPrintStyles.flexTextCenter}>
							<Text style={GlobalPrintStyles.normalText}>Date: <Text style={{fontWeight:'700'}}>17 Jan 2025</Text></Text>
							<View style={GlobalPrintStyles.infoSeparatorBorder}></View>
							<Text style={GlobalPrintStyles.normalText}>Check started: <Text style={{fontWeight:'700'}}>17:00:00</Text></Text>
							<View style={GlobalPrintStyles.infoSeparatorBorder}></View>
							<Text style={GlobalPrintStyles.normalText}>Counter#: <Text style={{fontWeight:'700'}}>01</Text></Text>
						</View>
						<View style={GlobalPrintStyles.flexTextCenter}>
							<Text style={GlobalPrintStyles.normalText}>Trans#: <Text style={{fontWeight:'700'}}>00321</Text></Text>
							<View style={GlobalPrintStyles.infoSeparatorBorder}></View>
							<Text style={GlobalPrintStyles.normalText}>SI#: <Text style={{fontWeight:'700'}}>736366</Text></Text>
							<View style={GlobalPrintStyles.infoSeparatorBorder}></View>
							<Text style={GlobalPrintStyles.normalText}>User: <Text style={{fontWeight:'700'}}>34543</Text></Text>
						</View>
					</View>

					{/* order lists */}
					<View style={OfficialReceiptStyles.orderList}>
						<View style={OfficialReceiptStyles.itemWrap}>
							<View style={OfficialReceiptStyles.itemFlex}>
								<Text style={OfficialReceiptStyles.itemText}>MARCA LEON COCONUT OIL 1LT</Text>
								<Text style={OfficialReceiptStyles.itemPriceText}>135.25 V</Text>
							</View>
							<View style={OfficialReceiptStyles.itemFlexCenter}>
								<Text style={OfficialReceiptStyles.itemFlexCell}>10097044</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>1</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>@</Text>
								<Text style={[OfficialReceiptStyles.itemFlexCell,GlobalStyles.textRight]}>135.25</Text>
							</View>
						</View>
						<View style={OfficialReceiptStyles.itemWrap}>
							<View style={OfficialReceiptStyles.itemFlex}>
								<Text style={OfficialReceiptStyles.itemText}>BEARBRAND PWDR MLK 128-192/33G</Text>
								<Text style={OfficialReceiptStyles.itemPriceText}>94.00 V</Text>
							</View>
							<View style={OfficialReceiptStyles.itemFlexCenter}>
								<Text style={OfficialReceiptStyles.itemFlexCell}>10206178</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>8</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>@</Text>
								<Text style={[OfficialReceiptStyles.itemFlexCell,GlobalStyles.textRight]}>11.75</Text>
							</View>
						</View>
						<View style={OfficialReceiptStyles.itemWrap}>
							<View style={OfficialReceiptStyles.itemFlex}>
								<Text style={OfficialReceiptStyles.itemText}>HPO ONION RED LOCAL</Text>
								<Text style={OfficialReceiptStyles.itemPriceText}>33.88 E</Text>
							</View>
							<View style={OfficialReceiptStyles.itemFlexCenter}>
								<Text style={OfficialReceiptStyles.itemFlexCell}>20557</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>0.22</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>@</Text>
								<Text style={[OfficialReceiptStyles.itemFlexCell,GlobalStyles.textRight]}>154.00</Text>
							</View>
						</View>
						<View style={OfficialReceiptStyles.itemWrap}>
							<View style={OfficialReceiptStyles.itemFlex}>
								<Text style={OfficialReceiptStyles.itemText}>HPO TOMATO LOCAL</Text>
								<Text style={[OfficialReceiptStyles.itemPriceText,GlobalStyles.textRight]}>26.28 E</Text>
							</View>
							<View style={OfficialReceiptStyles.itemFlexCenter}>
								<Text style={OfficialReceiptStyles.itemFlexCell}>20536</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>0.26</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>@</Text>
								<Text style={[OfficialReceiptStyles.itemFlexCell,GlobalStyles.textRight]}>178.00</Text>
							</View>
						</View>
						<View style={OfficialReceiptStyles.itemWrap}>
							<View style={OfficialReceiptStyles.itemFlex}>
								<Text style={OfficialReceiptStyles.itemText}>CS - BREAST FILLET - KILO</Text>
								<Text style={[OfficialReceiptStyles.itemPriceText,GlobalStyles.textRight]}>173.31 E</Text>
							</View>
							<View style={OfficialReceiptStyles.itemFlexCenter}>
								<Text style={OfficialReceiptStyles.itemFlexCell}>11329</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>0.545</Text>
								<Text style={OfficialReceiptStyles.itemFlexCell}>@</Text>
								<Text style={[OfficialReceiptStyles.itemFlexCell,GlobalStyles.textRight]}>318.00</Text>
							</View>
						</View>
					</View>

					{/* Total details */}
					<View style={OfficialReceiptStyles.orderTotal}>
						<View style={GlobalStyles.flexRow}>
							<Text style={OfficialReceiptStyles.totalText}>TOTAL</Text>
							<Text style={[OfficialReceiptStyles.totalText,GlobalStyles.textRight]}>12 item(s)</Text>
							<Text style={[OfficialReceiptStyles.totalNumber,{fontWeight:'700'}]}>1,999.00</Text>
						</View>
					</View>
					<View style={OfficialReceiptStyles.orderTotal}>
						<View style={GlobalStyles.flexRow}>
							<Text style={OfficialReceiptStyles.totalText}>Less: Discounts</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>5% SENIOR</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>24.14</Text>
						</View>
					</View>
					<View style={OfficialReceiptStyles.orderTotal}>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalText,{fontWeight:'700'}]}>TOTAL AMOUNT DUE:</Text>
							<Text style={[OfficialReceiptStyles.totalNumber,{fontWeight:'700'}]}>458.58</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>CASH:</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>500.00</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>CHANGE:</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>41.42</Text>
						</View>
					</View>
					<View style={[OfficialReceiptStyles.orderTotalBorder]}>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalText,{fontWeight:'700'}]}>VAT SUMMARY:</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>VAT EXEMPT</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>253.47</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>VATABLE SALES</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>204.69</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>VAT (12%)</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>24.56</Text>
						</View>
						<View style={GlobalStyles.flexRow}>
							<Text style={[OfficialReceiptStyles.totalTextIndent]}>ZERO-RATED SALES</Text>
							<Text style={OfficialReceiptStyles.totalNumber}>0.00</Text>
						</View>
					</View>

					{/* customer details */}
					<View style={OfficialReceiptStyles.customerDetails}>
						<View style={OfficialReceiptStyles.custWrap}>
							<Text style={OfficialReceiptStyles.custLabel}>Senior Name:</Text>
							<View style={OfficialReceiptStyles.custInputText}></View>
						</View>
						<View style={[GlobalStyles.flexRow,{gap: 25}]}>
							<View style={[OfficialReceiptStyles.custWrap,{flex:0,width:320}]}>
								<Text style={OfficialReceiptStyles.custLabel}>ID:</Text>
								<View style={OfficialReceiptStyles.custInputText}></View>
							</View>
							<View style={OfficialReceiptStyles.custWrap}>
								<Text style={[OfficialReceiptStyles.itemText,{textTransform:'none'}]}>Signature:</Text>
								<View style={OfficialReceiptStyles.custInputText}></View>
							</View>
						</View>
						<View style={OfficialReceiptStyles.custWrap}>
							<Text style={OfficialReceiptStyles.custLabel}>Customer Name:</Text>
							<View style={OfficialReceiptStyles.custInputText}></View>
						</View>
						<View style={OfficialReceiptStyles.custWrap}>
							<Text style={OfficialReceiptStyles.custLabel}>Address:</Text>
							<View style={OfficialReceiptStyles.custInputText}></View>
						</View>
						<View style={[GlobalStyles.flexRow,{gap: 25}]}>
							<View style={[OfficialReceiptStyles.custWrap,{flex:0,width:320}]}>
								<Text style={OfficialReceiptStyles.custLabel}>TIN:</Text>
								<View style={OfficialReceiptStyles.custInputText}></View>
							</View>
							<View style={OfficialReceiptStyles.custWrap}>
								<Text style={[OfficialReceiptStyles.itemText,{textTransform:'none'}]}>Bus Style:</Text>
								<View style={OfficialReceiptStyles.custInputText}></View>
							</View>
						</View>
					</View>

					{/* footer details */}
					<View style={GlobalPrintStyles.receiptWrap}>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptTextSmall}>Check closed: <Text style={{fontWeight:'700'}}>17 Jan 2025 18:35:00</Text></Text>
							<Text style={GlobalPrintStyles.receiptText}>THIS SERVES AS A SALES INVOICE</Text>
						</View>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptText}>POS PROVIDER COMPANY NAME</Text>
							<Text style={[GlobalPrintStyles.receiptTextSmall]}>Address first line</Text>
							<Text style={[GlobalPrintStyles.receiptTextSmall]}>Address second line</Text>
						</View>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<Text style={GlobalPrintStyles.receiptTextSmall}>VAT ReG TIN: <Text style={{fontWeight:'700'}}>000-001-234-567</Text></Text>
							<Text style={GlobalPrintStyles.receiptTextSmall}>Accredit#: <Text style={{fontWeight:'700'}}>ABCD0012</Text></Text>
						</View>
						<View style={GlobalPrintStyles.receiptTextWrap}>
							<View style={[GlobalPrintStyles.flexTextCenter,{justifyContent: 'space-between'}]}>
								<Text style={GlobalPrintStyles.receiptTextSmall}>Date Issued: <Text style={{fontWeight:'700'}}>17 Jan 2025</Text></Text>
								<Text style={GlobalPrintStyles.receiptTextSmall}>Date Expiry: <Text style={{fontWeight:'700'}}>31 Dec 2026</Text></Text>
							</View>
						</View>
					</View>

				</View>        
			</ScrollView>
			}

			
			{/* Buttons */}
			<View style={GlobalPrintStyles.footerContainer}>
				<View style={[ GlobalStyles.buttonsWrap ]}>
					<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.buttonPrimary]} onPress={() => onPressNavigate('MainViewTerminal')}>
						<IconItem itype={'AntDesign'} iname={'home'} isize={30} icolor={color.light} />
						<View style={[GlobalStyles.buttonTextWrap,{marginTop: 5, height: 'auto'}]}><Text style={[GlobalStyles.buttonText,SetTableStyles.tableMenuText]}>HOME</Text></View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default RetailOfficialReceipt;

const styles = StyleSheet.create({});