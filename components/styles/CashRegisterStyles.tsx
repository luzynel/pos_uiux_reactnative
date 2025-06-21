import {StyleSheet,Dimensions} from 'react-native';

import {color} from '../../assets/utils/colors';
import {font, size} from '../../assets/utils/fonts';

const windowWidth = Dimensions.get('window').width;
const calculatedMaxWidth = windowWidth * 0.5 - 12;

export const CashRegisterStyles = StyleSheet.create({
	framesWrapper: {
		flex: 1,
		flexDirection: 'row',
		padding: 0,
		backgroundColor: color.light,
	},
	headerCounterWrap: {
		paddingVertical: 7,
		paddingHorizontal: 10,
		backgroundColor: color.light,
		borderRadius: 5,
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerCounterText: {
		color: color.dark,
		fontFamily: font.regular,
		fontSize: size.normal,
		textTransform: 'uppercase',
		lineHeight: 22,
	},
	headerCounterNumber: {
		fontFamily: font.bold,
		fontSize: size.h1,
		color: color.dark,
		lineHeight: 30,
	},

	//mainframe styles
	retailWrapper: {
		backgroundColor: color.light,
		padding: 10,
		paddingBottom: 5,
	},

	//optionbar styles
	frameBar: {
		backgroundColor: color.background,
		borderTopWidth: 5,
		borderColor: color.border,
	},
	frameBarTop: {
		backgroundColor: color.light,
		gap: 15,
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 10,
	},
	frameBarTopScroll: {
		paddingVertical: 10,
	},
	frameBarBottom: {
		padding: 10,
		backgroundColor: color.background,
		borderLeftWidth: 2,
		borderColor: color.border,
		gap: 15,
	},
	frameBarWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
		padding: 10,
	},

	//button styles
	buttonItem: {
		width: 110,
		height: 80,
	borderWidth: 1,
		borderColor: color.border,
		backgroundColor: color.primary,
		opacity: 1,
	},
	buttonItemText: {
		fontSize: size.small,
		fontFamily: font.semibold,
		textAlign: 'center',
		textTransform: 'uppercase',
		opacity: 1,
		lineHeight: 16,
	},
	buttonTextNumeric: {
		fontWeight: '900',
		fontSize: size.h3,
		paddingBottom: 5,
		lineHeight: 20,
	},
	buttonMore: {
		borderWidth: 1,
		borderColor: color.border,
		backgroundColor: color.background,
		width: 122,
		height: 80,
		marginVertical: 'auto',
	},
	buttonMoreText: {
		margin: 0,
		lineHeight: 16,
		fontSize: 12,
		color: color.secondary,
	},

	// Barcode inputfield
	formBarcode: {
		width: '50%', 
		maxWidth: calculatedMaxWidth,
	},
	iconBarcode: {
		borderColor: color.secondary, 
		borderWidth: 2,
		height: 60,
	},
	inputBarcodeField: {
		maxWidth: 300,
	},
	inputBarcodeText: {
		backgroundColor: color.light,
		color: color.dark,
		fontFamily: font.bold,
	},

	// Total inputfield
	inputTotalWrap: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 10,
		paddingHorizontal: 20,
		backgroundColor: color.background,
	},
	inputTotalLabel: {
		fontSize: size.normal,
		lineHeight: 26,
		color: color.secondary,
		fontFamily: font.semibold,
	},
	inputTotalField: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputTotalSign: {
		fontSize: size.h1,
		lineHeight: 26,
		color: color.dark,
		fontFamily: font.bold,
	},
	inputTotalText: {
		fontSize: size.h1,
		color: color.dark,
		fontFamily: font.bold,
		minWidth: 80,
		maxWidth: 160,
		height: 50,
		paddingVertical: 0,
		paddingHorizontal: 5,
	},
	totalStatus: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		backgroundColor: color.alert,
		marginBottom: 5,
	},
	totalStatusText: {
		color: color.light,
		fontSize: 10,
		lineHeight: 16,
		fontFamily: font.regular,
	},

	tblDisplayCell: {
		flex: 1,
		paddingTop: 12,
		paddingBottom: 10,
		paddingHorizontal: 8,
		fontFamily: font.regular,
		fontSize: size.normal,
		color: color.text,
		borderWidth: 0,
		textAlign: 'center',
	},
	tblCellWidth: {
		width: 120,
		flex: 0,
		textAlign: 'center',
	},
	tblItemsCount: {
		paddingVertical: 5,
		flexDirection: 'row',
	},
	tblItemsCountNumber: {
		minWidth: 100,
		textAlign: 'right',
		fontSize: size.h3,
		lineHeight: 28,
		fontFamily: font.semibold,
		color: color.dark,
		paddingHorizontal: 10,
	},
	tblItemsCountText: {
		paddingHorizontal: 6,
		fontSize: size.normal,
		fontFamily: font.semibold,
		color: color.dark,
	},
	tblDisplayTotal: {
		width: '100%',
		flexDirection: 'row',
	},
	tblTotalCell: {
		flex: 1,
		paddingHorizontal: 8,
		paddingVertical: 5,
		borderWidth: 0,
	},
	tblTotalCellText: {
		fontFamily: font.semibold,
		fontSize: size.h3,
		color: color.text,
		lineHeight: 26,
		paddingHorizontal: 5,
	},

	//Modal - Quantity
	modalQtyContainer: {
		width: 500,
		height: 260,
		margin: 15,
		marginBottom: 30,
	},
	modalQtyInfos: {
		gap: 10,
	},
	qtyInfoWrap: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	qtyInfoLabel: {
		fontSize: size.normal,
		fontFamily: font.regular,
		color: color.dark,
		width: 80,
	},
	qtyInfoValue: {
		fontSize: size.normal,
		fontFamily: font.semibold,
		color: color.dark,
		textTransform: 'uppercase',
	},
	modalButtonWrap: {
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	qtyLinkText: {
		fontFamily: font.semibold,
		color: color.link,
		cursor: 'pointer',
		textDecorationLine: 'underline',
	},

	searchItemResult: {
		flexDirection: 'row',
		gap: 10,
		
		paddingTop: 20,
		paddingHorizontal: 10,
	},
	searchItemNumber: {
		fontFamily: font.bold,
		color: color.success,
		fontSize: size.normal
	},
	searchItemText: {
		fontFamily: font.medium,
		color: color.success,
		fontSize: size.normal
	},

	//retail Frames
	retailFramesWrap: {
		flexDirection: 'row',
		width: '100%',
		flex: 1,
	},
	retailFrame: {
		flex: 1,
	},
	retailFrameSide: {
		maxWidth: 500,
		borderRightWidth: 5,
		borderRightColor: color.border,
	},

	// retail Search
	searchPendingWrap: {
		flexDirection: 'row', 
		alignItems: 'center',
		gap: 10,
		padding: 10,
		paddingVertical: 20,
		backgroundColor: color.light,
	},
	searchFilterWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	searchFilterText: {
		fontSize: size.normal,
		fontFamily: font.semibold,
		color: color.primary,
		textTransform: 'uppercase',
	},

	pendingButtonsWrap: {
		marginTop: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: 10,
		flexWrap: 'wrap',
	},

	// reprint receipt
	receiptInfoWrap: {
		backgroundColor: color.light,
		padding: 10,
		gap: 10,
	},
	receiptInfoItem: {
		gap: 5,
	},
	receiptInfoText: {
		flex: 0,
		width: '40%',
		fontSize: size.small,
		fontFamily: font.regular,
		lineHeight: 18,
		color: color.dark,
	},
	receiptInfoTextIndent: {
		paddingLeft: 45,
		flex: 0,
		width: '40%',
		fontSize: size.small,
		fontFamily: font.regular,
		lineHeight: 18,
		color: color.dark,
	},
	receiptInfoNumber: {
		flex: 0,
		width: '33.33%',
		fontSize: size.small,
		fontFamily: font.semibold,
		lineHeight: 18,
		color: color.dark,
		textAlign: 'right',
	},
	receiptPaid: {
		backgroundColor: color.success,
		paddingVertical: 7,
		paddingHorizontal: 5,
	},
	receiptPaidText: {
		flex: 0,
		width: '40%',
		fontSize: size.small,
		fontFamily: font.bold,
		lineHeight: 18,
		color: color.light,
	},
	receiptPaidNumber: {
		flex: 0,
		width: '33.33%',
		fontSize: size.small,
		fontFamily: font.bold,
		lineHeight: 18,
		color: color.light,
		textAlign: 'right',
	},

	// void receipt	
	voidAccessForm: {
		gap: 10,
		paddingHorizontal: 40,
	},
	voidAccessTitle: {
		fontFamily: font.bold, 
		fontSize: size.h3, 
		color: color.link, 
		textAlign: 'center', 
		paddingBottom: 20,
		textDecorationLine:'underline',
	},
	voidAccessText: {
		fontFamily: font.medium, 
		fontSize: size.normal, 
		color: color.dark,
	},
	formFieldWrap: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	formLabelText: {
		fontSize: size.normal,
		fontFamily: font.medium,
		color: color.dark,
		width: 100,
	},

	// retail payorder
	payOrderWrap: {
		gap: 5,
		borderBottomWidth: 2,
		borderColor: color.border,
		padding: 10,
		backgroundColor: color.light,
	},
	payOrderDiscountInfo: {
		flex: 1,
	},
	payOrderTotal: {
		padding: 10,
		backgroundColor: color.background,
		gap: 5,
	},
	inputLabel: {
		width: '30%',
		maxWidth: 170,
		backgroundColor: color.background,
		color: color.dark,
		fontFamily: font.bold,
		textAlign: 'right',
		textTransform: 'uppercase',
	},
	inputLabelTotal: {
		width: '40%',
		maxWidth: 160,
	},
	inputLabelTotalText: {
		color: color.dark,
		fontFamily: font.bold,
		textAlign: 'right',
		textTransform: 'uppercase',
	},
	inputLabelTotalTextSmall: {
		color: color.dark,
		fontFamily: font.semibold,
		textAlign: 'right',
		textTransform: 'uppercase',
		fontSize: size.small,
		lineHeight: 16,
	},
	inputTextFieldTotal: {
		color: color.dark,
		fontFamily: font.bold,
		textAlign: 'right',
	},
	payOrderMainWrap: {
		padding: 10, 
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	payOrderForm: {
		width: '100%',
		backgroundColor: color.light,
		padding: 20,
	},
	inputTextFieldCardNo: {
		width: '30%',
		maxWidth: 140,
		borderLeftWidth: 1, 
		borderColor: color.border,
	},

	//modal TotalDiscount Info
	totalDiscountInfo: {
	},
	totalDiscountRow: {
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: color.border,
		columnGap: 10,
	},
	totalDiscountText: {
		fontSize: size.normal,
		textTransform: 'uppercase',
		fontFamily: font.semibold,
		flex: 1,
		color: color.success,
	},
	totalDiscountAmount: {
		width: 100,
		textAlign: 'right',
		fontFamily: font.bold,
		fontSize: size.normal,
		color: color.dark,
	},

	//loyalty card points
	loyaltyPointsWrap: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'stretch',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginBottom: 20,
	},
	loyaltyPointsItem: {
		borderWidth: 2,
		borderColor: color.lighter.success,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
		flexDirection: 'column',
		padding: 15,
		borderRadius: 15,
	},
	loyaltyPointsIcon: {
		margin: 'auto',
	},
	loyaltyPointsLabel: {
		fontFamily: font.semibold,
		textAlign: 'center',
		color: color.success,
	},
	loyaltyPointsAmount: {
		fontFamily: font.bold,
		textAlign: 'center',
		fontSize: 28,
		lineHeight: 32,
		color: color.dark,
	},
	loyaltyPointsCredit: {
		flex: 0,
		width: '100%',
		marginTop: 10,
		padding: 15,
		backgroundColor: color.background,
	},
	loyaltyPointsCreditLabel: {
		fontFamily: font.semibold,
		textTransform: 'uppercase',
		fontSize: size.normal,
		textAlign: 'center',
		color: color.dark,
		marginBottom: 5,
	},
	loyaltyPointsCreditInput: {
		width: '100%',
		borderColor: color.primary,
		maxWidth: 300,
		height: 60,
		margin: 'auto',
		borderWidth: 2,
		textAlign: 'right',
	}

});

export default CashRegisterStyles;
