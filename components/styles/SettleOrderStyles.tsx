import { StyleSheet } from 'react-native';
import {font, size} from '../../assets/utils/fonts';
import {color} from '../../assets/utils/colors';

export const SettleOrderStyles = StyleSheet.create({   
    headerInfoWrap: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        elevation: 2,
    },
    headerInfoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    headerInfoItemData: {
        fontSize: size.normal,
        fontWeight: '400',
        color: color.light,
    },
    headerTitleWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
    },
    headerTitle: {
        fontSize: size.h3,
        fontWeight: '600',
    },
    customerSection: {
        justifyContent: 'center',
        width: '100%',
        height: 67,
        backgroundColor: color.light, 
        elevation: 2,
        borderBottomWidth: 2,
        borderBottomColor: color.border,
        paddingHorizontal: 5,
    },
    customerSectionTextWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    customerSectionText: {
        color: color.light,
        fontSize: size.normal,
        fontFamily: font.regular,
        marginLeft: 15,
    },
    orderSummaryWrap: {
        width: '100%',
        height: 614,
        padding: 10,
        marginTop: 5,
        gap: 16,
        elevation: 3,
        backgroundColor: color.light,
    },
    
    subtotalWrap: {
        width: '100%',
        padding: 8,
        gap: 16,
        elevation: 3,
        backgroundColor: color.link,
    },
    buttonFlex: {
        gap: 6,
    },
    buttonsContainer: {
        height: 500,
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 20,
        margin: 'auto',
    },
    buttonOptions: {
        width: 140,
        height: 100,
        backgroundColor: color.link,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        gap: 2,
        elevation: 2,
        padding: 10,
        borderWidth: 1,
        borderColor: color.border,
    },
    buttonTextOptions: {
        fontSize: size.h3,
        fontWeight: '500',
        textAlign: 'center',
        color: color.light,
    },
    // modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        fontFamily: font.regular,
    },
    modalView: {
        margin: 20,
        backgroundColor: color.light,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.border,
        padding: 35,
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
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonAccess: {
        width: 120,
        height: 40,
        backgroundColor: color.success,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 2,
        elevation: 5,
    },
    buttonClose: {
        backgroundColor: color.alert,
        width: 120,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        gap: 2,
        elevation: 5,
    },
    textStyle: {
        color: color.light,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: size.normal,
        fontFamily: font.regular,
    },
    modalTextHeading: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: size.h3,
        fontWeight: '600',
        color: color.dark,
        fontFamily: font.regular,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: size.normal,
        fontWeight: '400',
        color: color.alert,
        fontFamily: font.regular,
    },
    inputContainer: {
        backgroundColor: color.light,
        width: 250,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        elevation: 10,
        gap: 5,
        fontFamily: font.regular,
    },
    inputText: {
        flex: 1,
        fontSize: size.normal,
        marginLeft: 15,
        fontFamily: font.regular,
    },
});