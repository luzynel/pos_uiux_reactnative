import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainViewTerminal from './pages/MainViewTerminal';

import SettleOrder from './pages/SettleOrder';
import SettleOrderAddOrder from './pages/SettleOrder/AddOrder';
import SettleOrderPayOrder from './pages/SettleOrder/PayOrder'
import SettleOrderPrintBill from './pages/SettleOrder/BillPrintOut';
import SettleCancelOrder from './pages/SettleOrder/CancelOrder';
import OfficialReceipt from './pages/OfficialReceipt';
import ReprintReceipt from './pages/ReprintReceipt';
import VoidReceipt from './pages/VoidReceipt';

import SetTable from './pages/SetTable';
import SetTableSelect from './pages/SetTable-Select';
import SetTableNumber from './pages/SetTable-TableNumber';
import TakeOrder from './pages/TakeOrder';
import SelectOrder from './pages/TakeOrder-SelectOrder';
import PrintOrderFormat from './pages/TakeOrder-PrintOrderFormat';
import SelectPackagingMenu from './pages/TakeOrder-SelectPackagingMenu';
import SetYourChoice from './pages/TakeOrder-SetYourChoice';
import AddOns from './pages/TakeOrder-AddOns';
import CustomerInfo from './pages/CustomerInfo';
import TakeOutorPickUp from './pages/TakeOutorPickUp';
import ModifyOrder from './pages/ModifyOrder';
import PendingOrders from './pages/PendingOrders';
import PendingOrdersView from './pages/PendingOrdersView';

import RetailOrderHome from './pages/Retail/RetailOrderHome';
import RetailOrderItems from './pages/Retail/RetailOrderItems';
import RetailPayOrder from './pages/Retail/RetailPayOrder';
import RetailPayOrderEwallet from './pages/Retail/RetailPayOrderEwallet';
import RetailPayOrderCard from './pages/Retail/RetailPayOrderCard';
import RetailPayOrderDiscount from './pages/Retail/RetailPayOrderDiscount';
import RetailPendingUnpaidEmpty from './pages/Retail/RetailPendingUnpaidEmpty';
import RetailPendingUnpaidItems from './pages/Retail/RetailPendingUnpaidItems';
import RetailOfficialReceipt from './pages/Retail/RetailOfficialReceipt';
import RetailReprintReceipt from './pages/Retail/RetailReprintReceipt';
import RetailVoidReceipt from './pages/Retail/RetailVoidReceipt';

import CashRegisterHome from './pages/CashRegister/CashRegisterHome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainViewTerminal" component={MainViewTerminal} />

        <Stack.Screen name="SetTable" component={SetTable} />
        <Stack.Screen name="SetTableSelect" component={SetTableSelect} />
        <Stack.Screen name="SetTableNumber" component={SetTableNumber} />
        <Stack.Screen name="TakeOrder" component={TakeOrder} />
        <Stack.Screen name="SetYourChoice" component={SetYourChoice} />
        <Stack.Screen name="AddOns" component={AddOns} />
        <Stack.Screen name="SelectPackagingMenu" component={SelectPackagingMenu} />
        <Stack.Screen name="SelectOrder" component={SelectOrder} />
        <Stack.Screen name="PrintOrderFormat" component={PrintOrderFormat} />
        <Stack.Screen name="ModifyOrder" component={ModifyOrder} />
        <Stack.Screen name="PendingOrders" component={PendingOrders} />
        <Stack.Screen name="PendingOrdersView" component={PendingOrdersView} />
        <Stack.Screen name="CustomerInfo" component={CustomerInfo} />
        <Stack.Screen name="TakeOutorPickUp" component={TakeOutorPickUp} />

        <Stack.Screen name="SettleOrder" component={SettleOrder} />
        <Stack.Screen name="SettleOrderAddOrder" component={SettleOrderAddOrder} />
        <Stack.Screen name="SettleOrderPrintBill" component={SettleOrderPrintBill} />
        <Stack.Screen name="SettleOrderPayOrder" component={SettleOrderPayOrder} />
        <Stack.Screen name="SettleCancelOrder" component={SettleCancelOrder} />
        <Stack.Screen name="OfficialReceipt" component={OfficialReceipt} />
        <Stack.Screen name="ReprintReceipt" component={ReprintReceipt} />
        <Stack.Screen name="VoidReceipt" component={VoidReceipt} />
        
        <Stack.Screen name="RetailOrderHome" component={RetailOrderHome} />
        <Stack.Screen name="RetailOrderItems" component={RetailOrderItems} />
        <Stack.Screen name="RetailPayOrder" component={RetailPayOrder} />
        <Stack.Screen name="RetailPayOrderEwallet" component={RetailPayOrderEwallet} />
        <Stack.Screen name="RetailPayOrderCard" component={RetailPayOrderCard} />
        <Stack.Screen name="RetailPayOrderDiscount" component={RetailPayOrderDiscount} />
        <Stack.Screen name="RetailPendingUnpaidEmpty" component={RetailPendingUnpaidEmpty} />
        <Stack.Screen name="RetailPendingUnpaidItems" component={RetailPendingUnpaidItems} />
        <Stack.Screen name="RetailOfficialReceipt" component={RetailOfficialReceipt} />
        <Stack.Screen name="RetailReprintReceipt" component={RetailReprintReceipt} />
        <Stack.Screen name="RetailVoidReceipt" component={RetailVoidReceipt} />
        
        <Stack.Screen name="CashRegisterHome" component={CashRegisterHome} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
