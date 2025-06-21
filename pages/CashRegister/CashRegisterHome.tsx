import { StyleSheet, Text, TextInput, View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import CashRegisterStyles from '../../components/styles/CashRegisterStyles';

import { color } from '../../assets/utils/colors';
import { font } from '../../assets/utils/fonts';
import OptionBarCR from '../../components/OptionBarCR';
import IconItem from '../../components/IconItem';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RootStackParamList = {
	MainViewTerminal: undefined;
	ModifyOrder: undefined;
	RetailOrderItems: undefined;
};

const windowWidth = Dimensions.get('window').width;
const calculatedMaxWidth = windowWidth * 0.5 - 12;

const CashRegisterHome = () => {
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
		<SafeAreaView style={GlobalStyles.safeAreaContainer}>

			{/** Frames Container */}
			<View style={[CashRegisterStyles.framesWrapper]}>

				{/* Main Frame */}
				{isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
				<View style={GlobalStyles.frameMain}>

					<View style={[GlobalStyles.orderSummaryBox,{borderTopWidth: 2, borderBottomWidth: 2, borderColor: color.border}]}>
					
						<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[GlobalStyles.tblDisplayRows,{paddingVertical: 20}]}>
							
							        
						</View>
						</ScrollView>
					</View>

				</View>
				}

				{/* RightBar Frame */}
				<OptionBarCR pageName={'CashRegisterHome'} />
			</View>
		</SafeAreaView>
	);
}

export default CashRegisterHome

const styles = StyleSheet.create({})