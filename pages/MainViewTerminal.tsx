import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';

import IconItem from '../components/IconItem';
import MainViewItem from '../components/MainViewItem';
import { GlobalStyles } from '../components/styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import {color} from '../assets/utils/colors';
import {font, size} from '../assets/utils/fonts';

const MainViewTerminal = () => {
  
  const navigation = useNavigation();
  //navigation
  const onPressNavigate = (navLinkItem) => {
    navigation.navigate(navLinkItem);
  };

  // loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.container}>

      <View style={GlobalStyles.headerContainer}>
        <Text style={[styles.headerTitle]}>Avanta POS</Text>
      </View>

      <View style={[styles.mainTerminalContainer, GlobalStyles.mainBackground]}>
        
          { isLoading ? 
            <ActivityIndicator color="white" size="large" />
          : 
            <>
              <MainViewItem caption='Register Order' itype='material-icons' iname='shopping-cart-checkout' isize={60}  icolor={color.primary} onPress={() => onPressNavigate('SetTable') } />
              <MainViewItem caption='RO - Retail' itype='material-icons' iname='shopping-cart-checkout' isize={60}  icolor={color.primary} onPress={() => onPressNavigate('RetailOrderHome') } />
              <MainViewItem caption='Cash Register' itype='material-community' iname='cash-register' isize={60} icolor={color.primary} onPress={() => onPressNavigate('CashRegisterHome') } />
              <MainViewItem caption='Returns' itype='material-icons' iname='assignment-return' isize={60} icolor={color.primary} />
              <MainViewItem caption='Employee' itype='fontawesome5' iname='user-tie' isize={60} icolor={color.primary} />
              <MainViewItem caption='Reports' itype='material-icons' iname='report' isize={60} icolor={color.primary} />        
              <MainViewItem caption='Inventory' itype='material-icons' iname='inventory' isize={60} icolor={color.primary} />
              <MainViewItem caption='Membership' itype='material-icons' iname='card-membership' isize={60} icolor={color.primary} />
              <MainViewItem caption='Settings' itype='material-icons' iname='settings' isize={60} icolor={color.primary} /> 
            </>
          } 
      </View>
    </SafeAreaView>
  );
}

export default MainViewTerminal;

const styles = StyleSheet.create({
    mainTerminalContainer: {
        width: '100%',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    headerTitle: {
      color: color.dark,
      fontSize: size.h1,
      fontFamily: font.regular,
      fontWeight: '700',
      marginVertical: 15,
      textTransform: 'uppercase',
    },
});