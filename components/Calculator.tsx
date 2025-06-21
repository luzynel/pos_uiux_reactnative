import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import IconItem from '../components/IconItem';
import {color} from '../assets/utils/colors';
import { font } from '../assets/utils/fonts';
import { GlobalStyles } from './styles/GlobalStyles';

type CalculatorProps = {
  onDataTendered: (num: string) => void;
};

export default function Calculator({ onDataTendered }: CalculatorProps) {
  const [amountTendered, setAmountTendered] = useState('');

  const handleNumberInput = (num: number) => {
    setAmountTendered((prev) => prev + num.toString());
    onDataTendered(num.toString());
  };

  const handleClear = () => {
    onDataTendered('C');
    setAmountTendered('');
  };
  const handleBackspace = () => {};

  const handleDataFromCalculator = (data: string) => {
    if(amountTendered == '' && data === '10') {
      setAmountTendered('');
    }else if(amountTendered == '' && data === '0') {
      setAmountTendered('');
    }else if (data === '10') { //if '00'
      data = '00';
      const newAmountTendered = amountTendered + data; 
      setAmountTendered(newAmountTendered);
    }else if (data === '11') {  //if '.'
      data = '.';
      const newAmountTendered = amountTendered + data; 
      setAmountTendered(newAmountTendered);
    }else if (data === 'C') { // if 'C'
      setAmountTendered('');
    }else {
      const newAmountTendered = amountTendered + data; 
      setAmountTendered(newAmountTendered);
    }
  };

  return (
    <View style={[styles.container]}>

      
      {/* calculator */}
      <View style={styles.buttonContainer}>
        <View style={[styles.row]}>
          <View style={[GlobalStyles.inputField,{height: 80,}]}>
            <TextInput style={[GlobalStyles.inputTextFieldLight,styles.inputTextFieldTotal]}
              aria-label="total-change"
              value={amountTendered}
              editable={true}
              keyboardType="numeric"
              textAlignVertical="center"
              placeholder="0.00" 
              placeholderTextColor={color.light}
              inputMode="decimal"
            />
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(0)}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(10)}><Text style={styles.buttonText}>00</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(11)}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}><Text style={styles.clearButtonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={handleBackspace}><IconItem itype={'Ionicons'} iname={'backspace-outline'} isize={40} icolor={color.dark} /></TouchableOpacity>
          <TouchableOpacity style={styles.enterButton}><Text style={styles.enterButtonText}>ENTER</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 380,
    padding: 5,
    margin: 'auto',
    gap: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.shadow,
    elevation: 5,
    padding: 10,
    borderColor: color.border,
    borderWidth: 1,
    height: 80,
  },
  buttonText: {
    fontSize: 26,
    color: color.light,
    fontFamily: font.semibold,
  },
  zeroButton: {
    flex: 2,
    paddingLeft: 35,
    paddingRight: 35,
  },
  clearButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    elevation: 3,
    padding: 10,
    borderColor: color.border,
    borderWidth: 1,
    height: 80,
  },
  clearButtonText: {
    fontSize: 30,
    color: '#333',
    fontFamily: font.semibold,
  },
  enterButton: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.tertiary,
    elevation: 3,
    padding: 10,
    borderColor: color.border,
    borderWidth: 1,
    height: 80,
  },
  enterButtonText: {
    fontSize: 24,
    color: color.light,
    fontFamily: font.semibold,
  },

  inputTextFieldTotal: {
    backgroundColor: color.shadow,
    fontSize:28,
    fontFamily: font.bold,
    elevation:3,
    color: color.light,
    lineHeight: 32,
  },
});
