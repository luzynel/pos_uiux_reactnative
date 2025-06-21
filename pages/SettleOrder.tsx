import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, ScrollView, Modal, Pressable, useWindowDimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import IconItem from '../components/IconItem';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import { SettleOrderStyles } from '../components/styles/SettleOrderStyles';
import {color} from '../assets/utils/colors';
import {font, size} from '../assets/utils/fonts';
import SidebarLeft from '../components/SidebarLeft';

const SettleOrder = () => {
    const navigation = useNavigation();
    const onPressNavigate = (navLinkItem) => {
        navigation.navigate(navLinkItem);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const cancelOrderModal = () => {
        onPressNavigate('SettleCancelOrder');
        setModalVisible(!modalVisible);
    };

    const {height, width} = useWindowDimensions();
    const isLandscape = width > height;

    //dynamic styles
    const dynamicStyles  = {
       
    };
  return (
    <SafeAreaView style={[GlobalStyles.container]}>
        <View style={[GlobalStyles.frameContainerWrap]}>
            <View style={GlobalStyles.frameLeft}>
                <View style={GlobalStyles.frameLeftInner}>
                    <SidebarLeft onPressLink={'SetTable'} />
                    <Text>{ width } - { height }</Text>
                </View>
            </View>

            <View style={GlobalStyles.frameRight}>
                <View style={GlobalStyles.frameRightInner}>

                    {/* header top */}
                    <View style={GlobalStyles.topContainer}>
                       <Text style={[GlobalStyles.topContainerTitle]}>Settle Order</Text>  
                    </View>

                    {/* body section */}
                    <View style={GlobalStyles.bodyContainer}>
                       <View style={GlobalStyles.bodyContainerInner}>
                            
                            {/* Buttons */}
                            <View style={SettleOrderStyles.buttonsContainer}>
                                
                                <View style={GlobalStyles.flexContainer}>
                                    <TouchableOpacity onPress={() => onPressNavigate('SettleOrderAddOrder')}>
                                        <View style={[SettleOrderStyles.buttonOptions, GlobalStyles.shadowProp]}>
                                            <IconItem itype='material-icons' iname='add-shopping-cart' isize={32} icolor={color.light}/>
                                            <Text style={[SettleOrderStyles.buttonTextOptions]}>Add Order</Text>    
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={GlobalStyles.flexContainer}>
                                    <TouchableOpacity onPress={() => onPressNavigate('SettleOrderPrintBill')}>
                                        <View style={[SettleOrderStyles.buttonOptions, GlobalStyles.shadowProp]}>
                                            <IconItem itype='material-icons' iname='local-print-shop' isize={32} icolor={color.light}/>
                                            <Text style={[SettleOrderStyles.buttonTextOptions]}>Print Bill</Text>    
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={GlobalStyles.flexContainer}>
                                    <TouchableOpacity onPress={() => onPressNavigate('SettleOrderPayOrder')}>
                                        <View style={[SettleOrderStyles.buttonOptions, GlobalStyles.shadowProp]}>
                                            <IconItem itype='material-icons' iname='payments' isize={32} icolor={color.light}/>
                                            <Text style={[SettleOrderStyles.buttonTextOptions]}>Pay Order</Text>    
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={GlobalStyles.flexContainer}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={SettleOrderStyles.centeredView}>
                                            <View style={SettleOrderStyles.modalView}>
                                                <Text style={[SettleOrderStyles.modalTextHeading]}>Only Authorized Personnel can access cancel order</Text>
                                                <Text style={SettleOrderStyles.modalText}>Please enter authorized credentials:</Text>

                                                <View style={GlobalStyles.flexContainer}>
                                                    <Text style={ {fontSize: 16} }>Pass code</Text>
                                                    <View style={SettleOrderStyles.inputContainer}>
                                                        <TextInput style={SettleOrderStyles.inputText} placeholder='Enter Pass code' />
                                                    </View>
                                                </View>

                                                <View style={[GlobalStyles.flexContainer, {gap: 10} ]}>
                                                    <Pressable
                                                    style={[SettleOrderStyles.button, SettleOrderStyles.buttonAccess]}
                                                    onPress={() => cancelOrderModal()}>
                                                        <Text style={SettleOrderStyles.textStyle}>Access Now</Text>
                                                    </Pressable>
                                                    <Pressable
                                                    style={[SettleOrderStyles.button, SettleOrderStyles.buttonClose]}
                                                    onPress={() => setModalVisible(!modalVisible)}>
                                                        <Text style={SettleOrderStyles.textStyle}>Close</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                    </Modal>
                                
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <View style={[SettleOrderStyles.buttonOptions, GlobalStyles.shadowProp]}>
                                            <IconItem itype='material-icons' iname='cancel' isize={32} icolor={color.light}/>
                                            <Text style={[SettleOrderStyles.buttonTextOptions]}>Cancel Order</Text>    
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={() => onPressNavigate('OfficialReceipt')}>
                                    <View style={[SettleOrderStyles.buttonOptions, GlobalStyles.shadowProp]}>
                                        <IconItem itype='material-icons' iname='local-print-shop' isize={32} icolor={color.light}/>
                                        <Text style={[SettleOrderStyles.buttonTextOptions]}>Sample OR</Text>    
                                    </View>
                                </TouchableOpacity>

                            </View>

                       </View>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SettleOrder

const styles = StyleSheet.create({})