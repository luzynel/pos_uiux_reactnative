import {StyleSheet,Text,View,TouchableOpacity,TextInput,useWindowDimensions,FlatList,ScrollView,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import CustomerInfoStyles from '../../components/styles/CustomerInfoStyles';
import IconItem from '../../components/IconItem';
import { color } from '../../assets/utils/colors';

interface ModalContentProps {
	closeModalCustInfo: () => void; // Function to close modal
}

const DetailRoute = () => (
	<View style={[CustomerInfoStyles.container]}>
		<View style={CustomerInfoStyles.formFieldGroup}>
			<View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
				<View style={CustomerInfoStyles.iconField}>
					<IconItem itype={'material-icons'} iname={'qr-code'} isize={22} icolor={color.border} />
				</View>
				<View style={CustomerInfoStyles.inputField}>
					<TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm,{color: color.dark}]}
						aria-label="customer-code"
						value="000-123"
						editable={false}
						keyboardType="numeric"
					/>
				</View>
			</View>
			<View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
				<View style={CustomerInfoStyles.iconField}>
					<IconItem itype={'material-icons'} iname={'card-membership'} isize={22} icolor={color.border} />
				</View>
				<View style={CustomerInfoStyles.inputField}>
					<TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm, {color: color.dark}]}
						aria-label="loyalty-cardno"
						value="323-323-323"
						editable={false}
						keyboardType="numeric"
					/>
				</View>
			</View>
		</View>
		<View style={CustomerInfoStyles.formFieldItem}>
			<View style={CustomerInfoStyles.iconField}>
				<IconItem itype={'fontawesome6'} iname={'user'} isize={22} icolor={color.border} />
			</View>
			<View style={CustomerInfoStyles.inputFieldGroup}>
				<View style={CustomerInfoStyles.inputField}>
					<TextInput style={CustomerInfoStyles.inputTextField} placeholder="Last Name" placeholderTextColor={color.border} defaultValue="De la Cruz" keyboardType="default" />
				</View>
				<View style={CustomerInfoStyles.inputField}>
					<TextInput style={CustomerInfoStyles.inputTextField} placeholder="First Name" placeholderTextColor={color.border} defaultValue="Juan" keyboardType="default" />
				</View>
				<View style={CustomerInfoStyles.inputField}>
					<TextInput style={CustomerInfoStyles.inputTextField} placeholder="Middle Name" placeholderTextColor={color.border} defaultValue="U." keyboardType="default" />
				</View>
			</View>
		</View>
		<View style={CustomerInfoStyles.formFieldItem}>
			<View style={CustomerInfoStyles.iconField}>
				<IconItem itype={'material-icons'} iname={'location-pin'} isize={22} icolor={color.border} />
			</View>
			<View style={CustomerInfoStyles.inputField}>
				<TextInput style={CustomerInfoStyles.inputTextField}
					placeholder="Address"
					placeholderTextColor={color.border}
					keyboardType="default"
				/>
			</View>
		</View>
	</View>
);

const AddInfo = () => (
	<View style={CustomerInfoStyles.container}>
		<View style={CustomerInfoStyles.formFieldItem}>
			<View style={CustomerInfoStyles.iconField}>
				<IconItem itype={'material-community'} iname={'card-bulleted-outline'} isize={22} icolor={color.border} />
			</View>
			<View style={CustomerInfoStyles.inputField}>
				<TextInput style={CustomerInfoStyles.inputTextField}
					placeholder="TIN"
					placeholderTextColor={color.border}
					keyboardType="numeric"
				/>
			</View>
		</View>
		<View style={CustomerInfoStyles.formFieldItem}>
			<View style={CustomerInfoStyles.iconField}>
				<IconItem itype={'material-icons'} iname={'business'} isize={22} icolor={color.border} />
			</View>
			<View style={CustomerInfoStyles.inputField}>
				<TextInput style={CustomerInfoStyles.inputTextField}
					placeholder="Business Style"
					placeholderTextColor={color.border}
					keyboardType="default"
				/>
			</View>
		</View>
	</View>
);

const Notes = () => (
	<View style={CustomerInfoStyles.container}>
		<View style={[CustomerInfoStyles.formFieldItem, CustomerInfoStyles.formFieldArea]}>
			<View style={CustomerInfoStyles.iconField}>
				<IconItem itype={'material-icons'} iname={'notes'} isize={22} icolor={color.border} />
			</View>
			<View style={[CustomerInfoStyles.inputField,{height: '100%'}]}>
				<TextInput style={[  CustomerInfoStyles.inputTextField, CustomerInfoStyles.inputTextAreaField]}
					placeholder="Enter your notes here"
					placeholderTextColor="#A9A9A9"
					multiline={true}
					numberOfLines={10}
					textAlignVertical="top" // Ensures text starts at the top
				/>
			</View>
		</View>
	</View>
);

interface CustomerList {
	id: number;
	customerno: string;
	lastname: string;
	firstname: string;
	middlename: string;
	loyaltycardno: string;
	notes: string;
}
const data: CustomerList[] = [
	{ id: 0, customerno: '000-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 1, customerno: '100-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 2, customerno: '200-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 3, customerno: '300-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 4, customerno: '400-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 5, customerno: '500-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 6, customerno: '600-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
	{ id: 7, customerno: '700-123', lastname: 'De la Cruz', firstname: 'Juan', middlename: 'U.', loyaltycardno: '323-323-323', notes: 'this is notes', },
];


const RetailCustomerInfo: React.FC<ModalContentProps> = ({ closeModalCustInfo }) => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
				setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);
	const layout = useWindowDimensions();
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{key: 'tab1', title: 'Detail'},
		{key: 'tab2', title: 'Additional Info'},
		{key: 'tab3', title: 'Notes'},
	]);
	const renderScene = SceneMap({
		tab1: DetailRoute,
		tab2: AddInfo,
		tab3: Notes,
	});
	const renderTabBar = (props: any) => {
		const {key, ...otherProps} = props;
		return (
			<TabBar
				{...otherProps}
				indicatorStyle={GlobalStyles.indicator}
				style={GlobalStyles.tabBar}
				labelStyle={GlobalStyles.tabText}
				inactiveColor={color.shadow}
			/>
		);
	};

	const [modalVisible, setModalVisible] = useState(false);
	const [modalCustInfo, setModalCustInfo] = useState(false);

	const customertable = ({item}: {item: CustomerList}) => (
		<TouchableOpacity onPress={closeModalCustInfo}>
			<View style={GlobalStyles.tblDisplayItem}>
				<Text style={[GlobalStyles.tblDisplayCell,{width: 240,flex:0}]}>{item.firstname}</Text>
				<Text style={[GlobalStyles.tblDisplayCell,{width: 80,flex:0}]}>{item.middlename}</Text>
				<Text style={[GlobalStyles.tblDisplayCell,{width: 240,flex:0}]}>{item.lastname}</Text>
				<Text style={[GlobalStyles.tblDisplayCell,GlobalStyles.textBold,{width: 200,flex:0}]}>{item.customerno}</Text>
				<Text style={[GlobalStyles.tblDisplayCell,GlobalStyles.textBold,{width: 200,flex:0}]}>{item.loyaltycardno}</Text>
				<Text style={[GlobalStyles.tblDisplayCell,{width: 280,flex:0}]}>{item.notes}</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={[GlobalStyles.frameMain]}>

			{/** Info Tab */}
			<View style={[GlobalStyles.tabContainer]}>
				<TabView style={GlobalStyles.tabView}
					navigationState={{index, routes}}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{width: layout.width}}
					renderTabBar={renderTabBar}
					sceneContainerStyle={[GlobalStyles.sceneContainer,CustomerInfoStyles.sceneContainer,{backgroundColor: color.background}]}
				/>
			</View>

			{/** SearchBox */}
			<View style={[CustomerInfoStyles.searchBox,{flex: 0, minHeight: 380,height:'45%',backgroundColor: color.light,paddingHorizontal:0}]}>
				<View style={GlobalStyles.buttonsWrap}>
					<TouchableOpacity style={[GlobalStyles.button, GlobalStyles.bgSuccess, GlobalStyles.buttonRow]}>
						<IconItem itype={'material-icons'} iname={'add'} isize={22} icolor={color.light} />
						<Text style={[GlobalStyles.buttonText]}>Add New</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[GlobalStyles.button, GlobalStyles.bgTertiary, GlobalStyles.buttonRow]}>
						<IconItem itype={'material-icons'} iname={'search'} isize={22} icolor={color.light} />
						<Text style={[GlobalStyles.buttonText]}>Search</Text>
					</TouchableOpacity>
				</View>

				{/* Customer List */}
				{isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
				<View style={[CustomerInfoStyles.customerList,{borderWidth: 1,marginTop: 20}]}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={[CustomerInfoStyles.container]}>
						<View style={GlobalStyles.tblTopRow}>
							<Text style={[GlobalStyles.tblTopCell,{width: 240,flex:0}]}>FirstName</Text>
							<Text style={[GlobalStyles.tblTopCell,{width: 80,flex:0}]}>MI</Text>
							<Text style={[GlobalStyles.tblTopCell,{width: 240,flex:0}]}>LastName</Text>
							<Text style={[GlobalStyles.tblTopCell,{width: 200,flex:0}]}>Customer Code</Text>
							<Text style={[GlobalStyles.tblTopCell,{width: 200,flex:0}]}>Loyalty CardNo.</Text>
							<Text style={[GlobalStyles.tblTopCell,{width: 280,flex:0}]}>Notes</Text>
						</View>
						<View style={GlobalStyles.tblDisplayRows}>
							<FlatList
								data={data}
								scrollEnabled={true}
								keyExtractor={(item, index) => index.toString()}
								renderItem={customertable}></FlatList>
						</View>
					</View>
					</ScrollView>
				</View>
				}
			</View>
		</View>
	)
}

export default RetailCustomerInfo;

const styles = StyleSheet.create({})