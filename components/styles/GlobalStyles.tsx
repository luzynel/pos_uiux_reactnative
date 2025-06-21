import {StyleSheet} from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

export const GlobalStyles = StyleSheet.create({
	primaryBackground: {
		backgroundColor: color.primary,
	},
	container: {
		flex: 1,
		backgroundColor: color.background,
	},
	mainBackground: {
		backgroundColor: color.secondary,
	},
	vectoIcon: {
		textAlign: 'center',
	},
	headerContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: 5,
	},
	headerTitle: {
		fontSize: size.h1,
		fontFamily: font.semibold,
		marginVertical: 15,
		textTransform: 'uppercase',
		color: color.light,
	},
	alignCenter: {
		textAlign: 'center',
	},
	alignRight: {
		textAlign: 'right',
	},
	shadowProp: {
		shadowColor: '#CCC',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.8,
		shadowRadius: 3,
	},
	textUpper: {
		textTransform: 'uppercase',
	},
	textCenter: {
		textAlign: 'center',
	},
	textRight: {
		textAlign: 'right',
	},
	textBold: {
		fontFamily: font.bold,
	},
	flex1: {
		flex: 1,
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexContainer: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
	},
	flexItemStart: {
		alignItems: 'flex-start',
	},
	flexContentStart: {
		alignItems: 'flex-start',
	},
	flexJustifyBetween: {
		justifyContent: 'space-between',
	},
	flexJustifyEven: {
		justifyContent: 'space-evenly',
	},
	primarySpacing: {
		marginVertical: 6,
	},
	buttonPrimary: {
		width: 130,
		height: 80,
		backgroundColor: color.primary,
		borderRadius: 6,
		elevation: 4,
		color: '#000',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	buttonSecondary: {
		width: 130,
		height: 80,
		backgroundColor: color.secondary,
		borderRadius: 6,
		elevation: 4,
		color: '#000',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	buttonTertiary: {
		width: 130,
		height: 80,
		backgroundColor: color.tertiary,
		borderRadius: 6,
		elevation: 4,
		color: '#000',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	buttonSuccess: {
		width: 130,
		height: 80,
		backgroundColor: color.success,
		borderRadius: 6,
		elevation: 4,
		color: '#000',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},

	//Frame Container - common classes
	safeAreaContainer: {
		width: '100%',
		flex: 1,
	},
	mainViewContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		overflow: 'hidden',
	},
	scrollViewContainar: {
		width: '100%',
		flex: 1,
	},
	scrollViewContainer: {
		width: '100%',
		flex: 1,
	},
	flexRowDirection: {
		flexDirection: 'row',
		flex: 1,
	},
	defaultTextFormat: {
		fontFamily: font.regular,
		color: color.text,
		fontSize: size.normal,
	},
	boldTextFormat: {
		fontFamily: font.semibold,
		color: color.text,
		fontSize: size.normal,
	},

	//Frame Header
	frameHeader: {
		backgroundColor: color.secondary,
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
	},
	headerWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
	},
	headerButton: {
		alignItems: 'center',
		gap: 0,
		width: 50,
		height: 50,
	},
	headerButtonText: {
		fontSize: 12,
		color: color.primary,
		fontFamily: font.semibold,
		lineHeight: 12,
		textTransform: 'uppercase',
	},
	headerWrapInner: {
		flexDirection: 'row',
		gap: 10,
	},
	headerText: {
		color: color.light,
		fontFamily: font.regular,
		fontSize: size.normal,
		lineHeight: 26,
	},
	headerTextLarge: {
		fontSize: size.h3,
		fontFamily: font.medium,
	},
	headerTextSmall: {
		fontSize: size.small,
		color: color.light,
	},
	borderSeparator: {
		width: 1,
		height: 16,
		backgroundColor: color.light,
	},

	//Frames Container
	framesContainer: {
		flexDirection: 'row',
		flex: 1,
		gap: 5,
		padding: 0,
		backgroundColor: color.background,
	},

	//Frame 1
	frame1: {
		width: 380,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	frame1Inner: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: 10,
		paddingBottom: 15,
	},
	frameScrollView: {
		width: '100%',
		flex: 1,
	},
	frame2: {
		flex: 1,
	},
	frame2Inner: {
		flex: 1,
		flexDirection: 'row',
		gap: 15,
	},

	//Headings
	defaultHeading: {
		backgroundColor: color.background,
		width: '100%',
		height: 45,
		justifyContent: 'center',
		paddingHorizontal: 10,
		borderBottomWidth: 4,
		borderBottomColor: color.border,
	},
	defaultHeadingWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	defaultHeadingText: {
		color: color.text,
		fontSize: size.h2,
		lineHeight: 28,
		fontFamily: font.semibold,
		textTransform: 'uppercase',
	},

	//Button
	buttonsWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
	},
	buttonFlex: {
		flex: 1,
	},
	buttonRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	button: {
		flex: 0,
		width: 122,
		height: 60,
		padding: 5,
		backgroundColor: color.background,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,
		shadowColor: color.dark,
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 4,
	},
	buttonSmall: {
		height: 45,
	},
	buttonLarge: {
		width: 130,
		height: 80,
	},
	buttonDisabled: {
		backgroundColor: color.border
	},
	buttonTextDisabled: {
		color: color.background,
	},
	bgPrimary: {
		backgroundColor: color.primary,
	},
	bgSecondary: {
		backgroundColor: color.secondary,
	},
	bgTertiary: {
		backgroundColor: color.tertiary,
	},
	bgPurple: {
		backgroundColor: color.purple,
	},
	bgSuccess: {
		backgroundColor: color.success,
	},
	bgBorder: {
		backgroundColor: color.border,
	},
	bgInfo: {
		backgroundColor: color.info,
	},
	bgAlert: {
		backgroundColor: color.alert,
	},
	bgShadow: {
		backgroundColor: color.shadow,
	},
	bgLight: {
		backgroundColor: color.light,
	},
	bgBackground: {
		backgroundColor: color.background,
	},
	buttonText: {
		fontSize: size.small,
		fontFamily: font.semibold,
		color: color.light,
		textAlign: 'center',
		textTransform: 'uppercase',
		lineHeight: 16,
	},
	buttonTextDark: {
		color: color.dark,
	},
	buttonTextGray: {
		color: color.border,
	},
	buttonIcon: {
		fontSize: size.h1,
		color: color.light,
	},
	buttonIconDark: {
		color: color.dark,
	},

	//Main Menu
	mainMenuButtons: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 4,
	},
	menuButton: {
		flex: 0,
		width: 110,
		backgroundColor: color.tertiary,
		paddingHorizontal: 10,
	},
	menuText: {
		fontSize: size.small,
		fontFamily: font.semibold,
		color: color.primary,
		textTransform: 'uppercase',
	},

	//Flatlist Table
	tblTopRow: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 1,
	},
	tblTopCell: {
		flex: 1,
		color: color.primary,
		paddingTop: 10,
		paddingBottom: 5,
		paddingHorizontal: 10,
		fontSize: size.normal,
		fontFamily: font.medium,
		textTransform: 'uppercase',
		borderBottomColor: color.border,
		borderBottomWidth: 2,
	},
	tblCellFlex10: {
		flex: 10,
	},
	tblCellFlex9: {
		flex: 8,
	},
	tblCellFlex8: {
		flex: 8,
	},
	tblCellFlex7: {
		flex: 7,
	},
	tblCellFlex6: {
		flex: 6,
	},
	tblCellFlex5: {
		flex: 5,
	},
	tblCellFlex4: {
		flex: 4,
	},
	tblCellFlex3: {
		flex: 3,
	},
	tblCellFlex2: {
		flex: 2,
	},
	tblCellFlex1: {
		flex: 1,
	},
	tblCellRight: {
		textAlign: 'right',
	},
	tblCellLeft: {
		textAlign: 'left',
	},
	tblCellCenter: {
		textAlign: 'center',
	},

	//Data Table Display
	tblDisplayRows: {
		flex: 1,
	},
	tblDisplayHeight: {
		width: '100%',
		height: 200,
		elevation: 3,
	},
	tblDisplayItem: {
		width: '100%',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: color.border,
	},
	tblDisplayItemNoBorder: {
		width: '100%',
		flexDirection: 'row',
	},
	tblDisplayCell: {
		flex: 1,
		paddingTop: 9,
		paddingBottom: 7,
		paddingHorizontal: 10,
		fontFamily: font.regular,
		fontSize: size.normal,
		color: color.text,
	},
	tblDisplayCellLink: {
		color: color.link,
		textDecorationLine: 'underline',
		lineHeight: 20,
	},
	tblDisplayCellData: {
		fontFamily: font.medium,
		fontSize: size.small,
		color: color.text,
		marginTop: 3,
	},
	tblDisplayCellSubData: {
		fontFamily: font.regular,
		fontSize: size.small,
		color: color.secondary,
	},
	tblDisplayCellPadding: {
		paddingLeft: 5,
	},

	//Table Bottom
	tblBottomRow: {
		width: '100%',
		flexDirection: 'row',
		borderTopWidth: 2,
		borderColor: color.border,
		paddingVertical: 10,
		paddingHorizontal: 5,
		gap: 16,
		backgroundColor: color.light,
	},
	tblBottomCell: {
		paddingTop: 8,
		paddingBottom: 5,
		paddingHorizontal: 5,
		fontSize: size.h3,
		fontFamily: font.bold,
		textTransform: 'uppercase',
		color: color.dark,
	},

	//Modal
	modalOverlay: {
		backgroundColor: color.dark,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalView: {
		margin: 20,
		backgroundColor: color.light,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: color.border,
		alignItems: 'center',
		shadowColor: color.shadow,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 15,
	},
	modalCloseButton: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'flex-end',
		alignSelf: 'flex-end',
		cursor: 'pointer',
		fontWeight: 700,
		marginBottom: 20,
	},

	//Tab
	tabContainer: {
		flex: 1,
		backgroundColor: color.light,
	},
	tabView: {
		width: '100%',
	},
	tabBar: {
		backgroundColor: color.light,
		borderColor: color.border,
		borderBottomWidth: 0,
		height: 60,
		justifyContent: 'center',
	},
	tabItem: {
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabItemActive: {
		backgroundColor: color.dark,
		height: 200,
		width: '100%',
		padding: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	activeTab: {
		borderWidth: 2,
		borderBottomWidth: 0,
	},
	tabText: {
		color: color.dark,
		fontFamily: font.semibold,
		fontSize: size.h3,
		textTransform: 'uppercase',
		textAlign: 'center',
		lineHeight: 20,
		borderWidth: 0,
	},
	tabTextActive: {
		color: color.light,
		fontFamily: font.medium,
		fontSize: size.normal,
		textTransform: 'uppercase',
	},
	indicator: {
		borderBottomWidth: 2,
		borderColor: color.secondary,
		backgroundColor: color.light,
		height: '100%',
	},
	scene: {
		flex: 1,
	},
	sceneContainer: {
		padding: 10,
		backgroundColor: color.background,
	},
	textSmall: {
		fontSize: size.small,
	},
	textNormal: {
		fontSize: size.normal,
	},
	textDark: {
		color: color.dark,
	},
	textH3: {
		fontSize: size.h3,
	},
	textH2: {
		fontSize: size.h2,
	},
	textH1: {
		fontSize: size.h1,
	},
	fontWeightBold: {
		fontWeight: '700',
	},
	frameContainerWrap: {
		flexDirection: 'row',
		flex: 1,
		gap: 5,
		backgroundColor: color.background,
	}, 
	frameLeft: {
		flex: 1,
		//width: 350,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	frameLeftInner: {
		width: '100%', 
		//flex: 1,
	},
	frameRight: {
			flex: 3,
	},
	frameRightInner: {
			flex: 1,
	},
	tblDisplayCellTotal: {
			flex: 1,
			paddingTop: 9,
			paddingBottom: 7,
			paddingHorizontal: 5,
			fontFamily: font.regular,
			fontSize: size.h3,
			color: color.text,
	},
	tblDisplayCellSubTotal: {
			flex: 1,
			paddingTop: 9,
			paddingBottom: 7,
			paddingHorizontal: 5,
			fontFamily: font.regular,
			fontSize: size.h3,
			color: color.light,
	},
	buttonTopBack: {
			backgroundColor: color.light,
			borderRadius: 16,
			elevation: 4,
			color: color.secondary,
	},
	mainContentArea: {
		flex: 7,
		backgroundColor: color.light,
	},
	topContainer: {
		width: '100%',
		height: 67,
		backgroundColor: color.light, 
		elevation: 2,
		borderBottomWidth: 2,
		borderBottomColor: color.border,
		alignItems: 'flex-start',
		alignContent: 'flex-start',
	},
	topContainerTitle: {
			color: color.dark,
			fontSize: size.h1,
			fontFamily: font.semibold,
			textTransform: 'uppercase',
			marginVertical: 16,
			marginHorizontal: 15,
			textAlign: 'center'
	},
	bodyContainer: {
			width: '100%',
			height: 736,
			backgroundColor: color.background, 
			//elevation: 1,
			//borderBottomWidth: 1,
			// borderBottomColor: color.border,
	},
	bodyContainerInner: {
			padding: 20,
			width: '100%',
	},
	sidebarRightActionBar: {
		// width: '100%',
		// height: 740,
		flex: 1,
		backgroundColor: color.light, 
		borderBottomWidth: 1,
		borderBottomColor: color.border,
		elevation: 1,
		alignContent: 'center',
		alignItems: 'center',
		marginHorizontal: 5,
	},
	buttonActionsWrap: {
		marginVertical: 5,
	},
	actionBarMainButtonsWrap: {
		paddingVertical: 10,
	},
	actionBarAddButtonsWrap: {
		width: '100%',
		borderTopWidth: 2,
		borderTopColor: color.border,
		paddingVertical: 10,
		alignContent: 'center',
		alignItems: 'center',
	},
	orderSummaryMinus: {
			marginTop: 5,
	},
	sideHeaderInfoWrap: {
			width: '100%',
			height: 65,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignContent: 'center',
			alignItems: 'center',
			padding: 10,
			elevation: 2,
	},
	sideHeaderInfoItem: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginVertical: 10,
	},
	sideHeaderInfoItemData: {
			fontSize: size.normal,
			fontWeight: '400',
			color: color.light,
	},
	sideHeaderTitleWrap: {
			flexDirection: 'row',
			justifyContent: 'center',
			gap: 5,
	},
	sideHeaderTitle: {
			fontSize: size.h3,
			fontWeight: '600',
	},
	sideCustomerSectionTextWrap: {
			flexDirection: 'row',
			alignItems: 'center',
			alignContent: 'center'
	},
	sideCustomerSectionText: {
			color: color.light,
			fontSize: size.normal,
			fontFamily: font.regular,
			marginLeft: 15,
	},
	sideOrderSummaryWrap: {
			width: '100%',
			padding: 10,
			marginTop: 5,
			gap: 16,
			elevation: 3,
			backgroundColor: color.light,
	},
	sideSubtotalWrap: {
			width: '100%',
			padding: 12,
			elevation: 3,
			backgroundColor: color.info,
	},
	sideTblDisplayCellSubTotal: {
		flex: 1,
		paddingTop: 9,
		paddingBottom: 7,
		paddingHorizontal: 5,
		fontFamily: font.regular,
		fontSize: size.normal,
		color: color.dark,
	},
	sideTblDisplayCellTotal: {
		flex: 1,
		paddingTop: 9,
		paddingBottom: 7,
		paddingHorizontal: 5,
		fontFamily: font.regular,
		fontSize: size.h3,
		color: color.dark,
	},
	sideTblDisplayCellOtherCharges: {
		flex: 1,
		paddingTop: 9,
		paddingBottom: 7,
		paddingHorizontal: 5,
		fontFamily: font.regular,
		fontSize: size.small,
		color: color.dark,
	},

	// New Set Table Layout
	framesWrapper: {
		flexDirection: 'row',
		flex: 1,
		padding: 0,
		backgroundColor: color.light,
	},
	frameOrderSummary: {
		width: 360,
		backgroundColor: color.background,
		borderRightWidth: 5,
		borderColor: color.border,
	},
	frameMain: {
		flex: 1,
		backgroundColor: color.background,
	},
	frameBar: {
		width: 138,
		backgroundColor: color.background,
		borderLeftWidth: 5,
		borderRightWidth: 1,
		borderColor: color.border,
	},
	frameBarTop: {
		paddingVertical: 10,
		backgroundColor: color.light,
		gap: 15,
		flex: 1,
	},
	frameBarTopScroll: {
		paddingHorizontal: 10,
	},
	frameBarBottom: {
		padding: 10,
		backgroundColor: color.background,
		borderTopWidth: 2,
		borderColor: color.border,
		gap: 15,
	},
	frameBarWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
		padding: 10,
	},
	orderSummaryBox: {
		flex: 1,
		backgroundColor: color.light,
	},
	orderSummaryWrap: {
		width: '100%',
		height: 200,
		padding: 10,
		gap: 16,
		elevation: 3,
		backgroundColor: color.light,
	},
	orderSummaryHead: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		paddingVertical: 13,
		paddingHorizontal: 10,
		width: '100%',
		borderBottomWidth: 2,
		borderColor: color.border,
		backgroundColor: color.light,
	},
	orderSummaryHeadText: {
		fontFamily: font.medium,
		color: color.secondary,
		fontSize: size.h3,
		lineHeight: 22,
		textTransform: 'uppercase',
		paddingTop: 5,
	},
	orderSummaryTotal: {
		width: '100%',
		height: 80,
		backgroundColor: color.success
	},
	buttonMore: {
		borderWidth: 1,
		borderColor: color.border,
		backgroundColor: color.background,
		width: '100%',
		height: 80,
		marginVertical: 'auto',
	},
	buttonMoreText: {
		margin: 0,
		lineHeight: 16,
		fontSize: 12,
		color: color.secondary,
	},
	modalOptionBar: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginTop: 0,
	},
	modalViewOptionBar: {
		margin: 0,
		borderRadius: 0,
		borderWidth: 0,
		flex: 1,
		width: '100%',
	},
	modalContainer: {
		backgroundColor: color.shadow,
		flex: 1,
		width: '100%',
		padding: 10,
	},
	modalScrollBox: {
		width: '100%',
	},
	modalButtonsWrap: {
		width: '80%',
		marginHorizontal: 'auto',
		justifyContent: 'center',
	},
	optionBarButton: {
		width: 150,
		height: 110,
		backgroundColor: color.tertiary,
		opacity: 1,
	},
	optionBarButtonText: {
		fontSize: size.normal,
		textAlign: 'center',
		textTransform: 'uppercase',
		opacity: 1,
		lineHeight: 20,
	},
	optionBarButtonTextWrap: {
		marginTop: 5,
		height: 40,
		width: '100%',
		justifyContent: 'center',
	},
	buttonTextWrap: {
		marginTop: 5,
		height: 30,
		width: '100%',
		justifyContent: 'center',
	},

	// Product Item
	productItemBox: {
		position: 'relative',
		width: 174,
		height: 180,
		gap: 5,
		backgroundColor: color.light,
		borderRadius: 10,
		flexDirection: 'column',
		alignContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		padding: 0,
		cursor: 'pointer',
	},
	productItemActive: {
		borderWidth: 2,
		borderColor: color.tertiary,
	},
	productImgWrap: {
		flex: 1,
		width: '100%',
		overflow: 'hidden',
		backgroundColor: color.light,
	},
	productImg: {
		margin: 'auto',
	},
	productInfo: {
		width: '100%',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: color.background,
	},
	productItemName: {
		fontSize: size.small,
		fontFamily: font.semibold,
		color: color.shadow,
		textAlign: 'center',
	},
	productItemPrice: {
			fontSize: size.h2,
			fontFamily: font.semibold,
			lineHeight: 24,
			color: color.secondary,
			textAlign: 'center',
	},
	productItemAdd: {
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		zIndex: 1,
		top: 5,
		left: 5,
		backgroundColor: color.light,
		borderRadius: 40,
	},

	// Activity Indicator Loading
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	productMenuIndicator: {
		backgroundColor: color.light,
		color: color.primary,
	},
	transactOrdersWrap: {
		width: '100%',
		height: 'auto',
		padding: 6,
		marginBottom: 10,
		backgroundColor: color.light,
	},
	mainContentAreaInner: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	payOrderPaymentsWrap: {
		width: '100%',
		height: 95,
		padding: 8,
		elevation: 3,
		backgroundColor: color.info,
		marginTop: 15,
	},
	textDisplayRow: {
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 1,
		fontFamily: font.regular,
		fontSize: size.small,
		color: color.text,
	},


	//Form fields
	formFieldsWrap: {
		width: '100%',
	},
	formFieldGroup: {
		flexDirection: 'row',
		columnGap: 5,
	},
	fieldGroupItem: {
		flex: 1,
	},
	formFieldItem: {
		flexDirection: 'row',
		borderWidth: 0,
		marginBottom: 5,
	},
	formFieldArea: {
		height: 150,
	},
	iconField: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRightWidth: 0,
		borderColor: color.border,
		backgroundColor: color.background,
	},
	inputField: {
		flex: 1,
		height: 50,
		borderWidth: 1,
		borderColor: color.border,
	},
	inputFieldRow: {
		flexDirection: 'row',
		gap: 5,
	},
	inputTextField: {
		width: '100%',
		height: '100%',
		backgroundColor: color.background,
		color: color.dark,
		borderWidth: 0,
		fontFamily: font.medium,
		fontSize: size.normal,
		lineHeight: 22,
		padding: 10,
	},
	inputTextFieldLight: {
		width: '100%',
		height: '100%',
		backgroundColor: color.light,
		color: color.dark,
		borderWidth: 0,
		fontFamily: font.medium,
		fontSize: size.normal,
		lineHeight: 22,
		padding: 10,
	},
	inputTextFieldEm: {
		fontFamily: font.bold,
		lineHeight: 22,
	},
	inputTextAreaField: {
		backgroundColor: 'transparent',
		borderWidth: 0,
		paddingHorizontal: 10,
		fontFamily: font.medium,
		fontSize: size.normal,
		height: '100%',
	},
	inputFieldGroup: {
		flex: 1,
		flexDirection: 'row',
		gap: 5,
	},
	inputLabel: {
		minWidth: 120,
		height: 50,
		borderWidth: 1,
		borderColor: color.border,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	inputLabelText: {
		fontFamily: font.medium,
		fontSize: size.small,
		lineHeight: 22,
		color: color.shadow,
	},
	selectOptionField: {
		backgroundColor: color.light,
		width: 180,
		height: 60,
		borderRadius: 5,
		elevation: 10,
		gap: 5,
		fontFamily: font.regular,
	},
	pickerWrap: {
		width: '100%',
		height: '100%',
	},
});
