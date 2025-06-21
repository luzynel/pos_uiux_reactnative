import { StyleSheet } from 'react-native';
import {font, size} from '../../assets/utils/fonts';
import {color} from '../../assets/utils/colors';

export const BillPrintoutStyles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        position: 'relative'
    },
    headingContainer: {
        width: '65%', 
        height: 60, 
        justifyContent: 'center', 
        alignContent: 'center', 
        elevation: 2, 
        backgroundColor: color.secondary, 
        marginVertical: 10, 
        marginHorizontal: 10, 
        padding: 10,
    },
    headingText: {
        fontFamily: font.regular,
        fontSize: size.h2, 
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: color.light,
    },
    bodyContainer: {
        width: '65%', 
    },
    bodyContainerInner: {
        width: '100%', 
        backgroundColor: color.light, 
        padding: 25,
        paddingVertical: 25,
    },
    bodyContainerInnerWrap: {
       justifyContent: 'space-between'
    },
    bodyContainerInnerItem: {

    },
    textTitle: {
        fontFamily: font.regular,
        fontSize: size.normal, 
        color: color.dark,
    },
    textData: {
        fontFamily: font.regular,
        fontSize: size.normal, 
        fontWeight: '700', 
        color: color.dark, 
        paddingLeft: 10, 
    },
    buttonHome: {
        width: 120,
        height: 40,
        backgroundColor: color.alert,
        marginHorizontal: 10,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        gap: 2,
        elevation: 5,
    },
    buttonTextHome: {
        fontSize: size.normal,
        fontWeight: '500',
        textAlign: 'center',
        color: color.light,
    },
    buttonOptions: {
        width: 120,
        height: 70,
        backgroundColor: color.secondary,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        gap: 2,
        elevation: 5,
    },
    buttonTextOptions: {
        fontSize: size.normal,  
        fontWeight: '500',
        textAlign: 'center',
    },
    tableWrap: {},
    tableContainer: { 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    orderDataText: { 
        fontSize: size.normal, 
        color: color.dark, 
        fontWeight: '600' 
    },
    orderDataSubText: { 
        fontSize: size.normal,         
        color: color.dark, 
    },
    orderTotalText: { 
        fontSize: size.normal,         
        color: color.dark, 
        fontWeight: '700' 
    },
    logoWrap: {
        alignItems: 'center', 
        marginVertical: 20
    },
    logo: {
        width: 240, 
        height: 80, 
        objectFit: 'contain'
    },
    orderInfoWrap: {
        marginTop: 10, 
        paddingHorizontal: 50,
    },
    orderDetailsWrap: {
        marginVertical: 20, 
    },
    orderDetailsItem: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignContent: 'flex-start', 
        alignItems: 'flex-start'
    },
    borderDashed: {
        borderRadius : 1,
        width: '100%',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgba(161,155,183,1)'
    },
    transactOrdersSummaryWrap: {
        width: '100%',
        padding: 20,
        gap: 16,
        backgroundColor: color.light,
        marginTop: 25,
    },
    tblDisplayItem: {
        width: '100%',
        flexDirection: 'row',
    },
    tblDisplayCell: {
        flex: 1,
        paddingTop: 9,
        paddingBottom: 7,
        paddingHorizontal: 5,
        fontFamily: font.regular,
        fontSize: size.normal,
        color: color.text,
    },
    tblDisplayCellData: {
        fontFamily: font.regular,
        fontSize: size.normal,
        color: color.text,
    },
    tblDisplayCellPadding: {
        paddingLeft: 20,
    },
    tblDisplayCellSubData: {
        fontFamily: font.regular,
        fontSize: size.small,
        color: color.primary,
    },
    transactOrdersTotalWrap: {
        width: '100%',
        gap: 16,
        elevation: 0,
        marginBottom: 15,
    },
    totalItemsWrap: {
      backgroundColor: color.info,
      padding: 20,
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
    buttonsWrap: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginBottom: 80,
    },
});