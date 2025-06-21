import {View, Text, TouchableOpacity, TextInput, Image, Dimensions} from 'react-native';
import React, { useState, useEffect } from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import IconItem from '../components/IconItem';

import { GlobalStyles } from './styles/GlobalStyles';
import {color} from '../assets/utils/colors';

type ProductItemProps = {
	pEnabled: boolean;
	pTitle: string;
	pPrice: string;
};
type RootStackParamList = {
	TakeOrder: undefined;
	SelectOrder: undefined;
	SetYourChoice: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList>;

const ProductItem_TakeOrder: React.FC<ProductItemProps> = ({pEnabled,pTitle,pPrice}) => {
	const navigation = useNavigation<NavigationProp>();
	const TakeOrderPress = () => {
		navigation.navigate('TakeOrder');
	};
	const SelectOrderPress = () => {
		navigation.navigate('SelectOrder');
	};
	const SetYourChoicePress = () => {
		navigation.navigate('SetYourChoice');
	};

	// Toggle between true and false
	const [isPressed, setIsPressed] = useState(false);
	const handlePress = () => {
		setIsPressed(!isPressed);
	};
	const handleSelectOrderPress = () => {
		setIsPressed(!isPressed);
		SelectOrderPress();
	};
	const handleSetYourChoicePress = () => {
		setIsPressed(!isPressed);
		SetYourChoicePress();
	};

	const state = useNavigationState(state => state);
	const currentRouteName = state.routes[state.index].name;

	if (currentRouteName == 'SelectPackagingMenu') {
		return (
			<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.productItemBox, isPressed && GlobalStyles.productItemActive]} onPress={handlePress}>
				<View style={GlobalStyles.productItemAdd}>
					{isPressed ? (<IconItem itype={'AntDesign'} iname={'checkcircle'} isize={30} icolor={color.tertiary} />) 
					: (<IconItem itype={'AntDesign'} iname={'pluscircleo'} isize={30} icolor={color.border} />)}
				</View>
				<View style={GlobalStyles.productImgWrap}>
					<Image source={require('../assets/img/Packaging/spoon-fork.png')} style={[GlobalStyles.productImg]} />
				</View>
				<View style={GlobalStyles.productInfo}>            
					<Text style={GlobalStyles.productItemName}>Spoon & Fork</Text>
					<Text style={GlobalStyles.productItemPrice}>$00</Text>
				</View>
			</TouchableOpacity>
		);
	} else if (currentRouteName == 'SetYourChoice' || currentRouteName == 'AddOns' || currentRouteName == 'ModifyOrder') {
		return (
			<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.productItemBox, isPressed && GlobalStyles.productItemActive]} onPress={handlePress}>
				<View style={GlobalStyles.productItemAdd}>
					{isPressed ? (<IconItem itype={'AntDesign'} iname={'checkcircle'} isize={30} icolor={color.tertiary} />) 
					: (<IconItem itype={'AntDesign'} iname={'pluscircleo'} isize={30} icolor={color.border} />)}
				</View>
				<View style={GlobalStyles.productImgWrap}>
					<Image source={require('../assets/img/Products/Product1.png')} style={[GlobalStyles.productImg]} />
				</View>
				<View style={GlobalStyles.productInfo}>            
					<Text style={GlobalStyles.productItemName}>{pTitle}</Text>
					<Text style={GlobalStyles.productItemPrice}>${pPrice}</Text>
				</View>
			</TouchableOpacity>
		);
	} else {
		if (pEnabled == true) {
			return (
				<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.productItemBox, GlobalStyles.productItemActive]} onPress={handlePress}>
					<View style={GlobalStyles.productItemAdd}><IconItem itype={'AntDesign'} iname={'checkcircle'} isize={30} icolor={color.tertiary} /></View>
					<View style={GlobalStyles.productImgWrap}>
						<Image source={require('../assets/img/Products/Product1.png')} style={[GlobalStyles.productImg]} />
					</View>
					<View style={GlobalStyles.productInfo}>            
						<Text style={GlobalStyles.productItemName}>C .Fried Chicken 1pc</Text>
						<Text style={GlobalStyles.productItemPrice}>$55.50</Text>
					</View>
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity style={[GlobalStyles.button,GlobalStyles.productItemBox, isPressed && GlobalStyles.productItemActive]} onPress={handleSetYourChoicePress}>
					<View style={GlobalStyles.productItemAdd}>
						{isPressed ? (<IconItem itype={'AntDesign'} iname={'checkcircle'} isize={30} icolor={color.tertiary} />) 
						: (<IconItem itype={'AntDesign'} iname={'pluscircleo'} isize={30} icolor={color.border} />)}
					</View>
					<View style={GlobalStyles.productImgWrap}>
						<Image source={require('../assets/img/Products/Product1.png')} style={[GlobalStyles.productImg]} />
					</View>
					<View style={GlobalStyles.productInfo}>            
						<Text style={GlobalStyles.productItemName}>C .Fried Chicken 1pc</Text>
						<Text style={GlobalStyles.productItemPrice}>$55.50</Text>
					</View>
				</TouchableOpacity>
			);
		}
	}
};

export default ProductItem_TakeOrder;
