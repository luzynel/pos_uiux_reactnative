import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { GlobalStyles } from './styles/GlobalStyles';

const IconItem = ({ itype, iname, isize, icolor }) => {
    if(itype == 'material-icons' || itype == 'MaterialIcons'){
      return <MaterialIcons name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />
    
    }else if(itype == 'material-community' || itype == 'MaterialCommunityIcons'){
      return <MaterialCommunityIcons name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />
    
    }else if(itype == 'AntDesign'){
      return <AntDesign name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />
    
    }else if(itype == 'Entypo'){
      return <Entypo name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />
    
    }else if(itype == 'FontAwesome'){
      return <FontAwesome name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />

    }else if(itype == 'Ionicons'){
      return <Ionicons name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} />

    }else if(itype == 'fontawesome6' || itype == 'FontAwesome6'){
      return <FontAwesome6 name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 

    }else if(itype == 'Octicons'){
      return <Octicons name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 

    }else if(itype == 'Fontisto'){
      return <Fontisto name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 

    }else if(itype == 'Foundation'){
      return <Foundation name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 

    }else if(itype == 'SimpleLineIcons'){
        return <SimpleLineIcons name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 

    }else{ //fontawesome5
      return <FontAwesome5 name={iname} size={isize} color={icolor} style={[GlobalStyles.vectoIcon, GlobalStyles.shadowProp, ]} /> 
    }
  }

export default IconItem;

const styles = StyleSheet.create({});