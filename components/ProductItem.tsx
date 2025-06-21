import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import IconItem from '../components/IconItem';

import { AddOrderStyles } from '../components/styles/SettleOrderAddOrderStyles';
import {color} from '../assets/utils/colors';

const ProductItem = () => {
  return (
    <View style={AddOrderStyles.productItem}>
        <Image source={require('../assets/img/Products/Product1.png')} style={AddOrderStyles.productImg} />
        <Text style={AddOrderStyles.productItemName}>C .Fried Chicken 1pc</Text>
        <View style={AddOrderStyles.priceQtyWrap}>
            <Text style={AddOrderStyles.productItemPrice}>$55.50</Text>
            <View style={AddOrderStyles.inputContainer}>
                <TouchableOpacity>
                    <IconItem
                        itype={'AntDesign'}
                        iname={'minuscircle'}
                        isize={24}
                        icolor={color.secondary}
                    />
                </TouchableOpacity>
                <TextInput style={AddOrderStyles.inputText} placeholder='1' value='1'  />
                <TouchableOpacity>
                    <IconItem
                        itype={'AntDesign'}
                        iname={'pluscircle'}
                        isize={24}
                        icolor={color.secondary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProductItem