import {StyleSheet,Text,View,SafeAreaView,TouchableOpacity,FlatList,TextInput,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import CustomerInfoStyles from '../components/styles/CustomerInfoStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import { color } from '../assets/utils/colors';

interface PickUpList {
  id: number;
  code: string;
  name: string;
  notes: string;
  select: boolean;
}
const data: PickUpList[] = [
  {
    id: 0,
    code: 'Grab',
    name: 'GrabFood',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 1,
    code: 'Panda',
    name: 'Food Panda',
    notes: 'this is notes',
    select: true,
  },
  {
    id: 2,
    code: 'Maxim',
    name: 'Maxim',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 3,
    code: 'Grab',
    name: 'Grab',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 4,
    code: 'Panda',
    name: 'Food Panda',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 5,
    code: 'Maxim',
    name: 'Maxim',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 6,
    code: 'Grab',
    name: 'Grab',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 7,
    code: 'Panda',
    name: 'Food Panda',
    notes: 'this is notes',
    select: false,
  },
  {
    id: 8,
    code: 'Maxim',
    name: 'Maxim',
    notes: 'this is notes',
    select: false,
  },
];

export default function TakeOutorPickUp() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);

  const pickuptable = ({item}: {item: PickUpList}) => (
    <TouchableOpacity style={(item.select) && GlobalStyles.bgInfo}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.code}</Text>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.name}</Text>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.notes}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={GlobalStyles.safeAreaContainer}>

      {/** Frames Container */}
      <View style={GlobalStyles.framesWrapper}>

        {/* Order Summary Frame */}
        <OrderFirstSidebar />

        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <View style={GlobalStyles.frameMain}>

          <View style={[{flexDirection: 'row', alignItems: 'center',gap: 10,paddingVertical: 10, paddingHorizontal: 20,backgroundColor: color.light}]}>
            <Text style={[GlobalStyles.boldTextFormat,{color: color.primary}]}>Pick-Up:</Text>
            <View style={CustomerInfoStyles.inputField}>
              <TextInput style={[CustomerInfoStyles.inputTextField]} placeholder="Select Pickup Service" placeholderTextColor={color.primary} />
            </View>
          </View>
          <View style={[CustomerInfoStyles.customerList,{flex: 1}]}>
            <View style={CustomerInfoStyles.container}>
              <View style={GlobalStyles.tblTopRow}>
                <Text style={[GlobalStyles.tblTopCell]}>Code</Text>
                <Text style={[GlobalStyles.tblTopCell]}>Name</Text>
                <Text style={[GlobalStyles.tblTopCell]}>Notes</Text>
              </View>
              <View style={GlobalStyles.tblDisplayRows}>
                <FlatList
                  data={data}
                  scrollEnabled={true}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={pickuptable}></FlatList>
              </View>
            </View>
          </View>
        </View>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
