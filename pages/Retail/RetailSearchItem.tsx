import {StyleSheet,Text,View,TouchableOpacity,TextInput,useWindowDimensions,FlatList,ScrollView,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import { GlobalStyles } from '../../components/styles/GlobalStyles';
import CustomerInfoStyles from '../../components/styles/CustomerInfoStyles';
import IconItem from '../../components/IconItem';
import { color } from '../../assets/utils/colors';;
import { font } from '../../assets/utils/fonts'
import RetailStyles from '../../components/styles/RetailStyles';

interface ModalContentProps {
    closeModalSearchItem: () => void; // Function to close modal
}

const DetailRoute = () => (
  <View style={[CustomerInfoStyles.container]}>
    <View style={CustomerInfoStyles.formFieldGroup}>
      <View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
        <View style={GlobalStyles.inputLabel}>
          <Text style={[GlobalStyles.inputLabelText,GlobalStyles.inputTextFieldEm]}>Item Code:</Text>
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm]}
            aria-label="item-code"
            placeholder="000000"
            keyboardType="numeric"
            placeholderTextColor={color.dark}
          />
        </View>
      </View>
      <View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
        <View style={GlobalStyles.inputLabel}>
          <Text style={GlobalStyles.inputLabelText}>Item Category:</Text>
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm]} aria-label="item-category"/>
        </View>
      </View>
    </View>
    
    <View style={CustomerInfoStyles.formFieldGroup}>
      <View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
        <View style={GlobalStyles.inputLabel}>
          <Text style={GlobalStyles.inputLabelText}>Item Name:</Text>
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm]} aria-label="item-name"/>
        </View>
      </View>
    </View>
  </View>
);


interface ItemList {
  id: number;
  code: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  uom: string;
  stocks: number;
}
const data: ItemList[] = [
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  {id: 0, code: 1234567, name: 'Bearbrand Pwdr Mlk 128-192/33G', category: 'Powder Milk', price: 135.25, desc: 'Pwdr Mlk 128-192/33G', uom: 'pc', stocks: 100},
  
];
const data0: ItemList[] = [];


const RetailSearchItem: React.FC<ModalContentProps> = ({ closeModalSearchItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }, []);
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'tab1', title: 'Search Item'},
  ]);
  const renderScene = SceneMap({
    tab1: DetailRoute,
  });
  const renderTabBar = (props: any) => {
    const {key, ...otherProps} = props;
    return (
      <TabBar
        {...otherProps}
        indicatorStyle={GlobalStyles.indicator}
        style={GlobalStyles.tabBar}
        labelStyle={GlobalStyles.tabText}
        inactiveColor={color.shadow}
      />
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalCustInfo, setModalCustInfo] = useState(false);

  const customertable = ({item}: {item: ItemList}) => (
    <TouchableOpacity onPress={closeModalSearchItem}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{fontFamily: font.semibold}]}>{item.code}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 300}]}>{item.name}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 200}]}>{item.category}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.price}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth,{width: 260}]}>{item.desc}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.uom}</Text>
        <Text style={[RetailStyles.tblDisplayCell,RetailStyles.tblCellWidth]}>{item.stocks}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[GlobalStyles.frameMain]}>

      {/** Info Tab */}
      <View style={[GlobalStyles.tabContainer,{height: 210,flex: 0}]}>
        <TabView
          style={GlobalStyles.tabView}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
          sceneContainerStyle={[GlobalStyles.sceneContainer,CustomerInfoStyles.sceneContainer,{backgroundColor: color.background}]}
        />
      </View>

      {/** SearchBox */}
      <View style={[CustomerInfoStyles.searchBox,{flex: 1,backgroundColor: color.light,paddingHorizontal:0}]}>
        <View style={GlobalStyles.buttonsWrap}>
          <TouchableOpacity  style={[GlobalStyles.button,GlobalStyles.bgTertiary,GlobalStyles.buttonRow]}>
            <IconItem itype={'material-icons'} iname={'search'} isize={22} icolor={color.light}/>
            <Text style={[GlobalStyles.buttonText]}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Customer List */}
        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <View style={[CustomerInfoStyles.customerList,{borderWidth: 1,marginTop: 20}]}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={CustomerInfoStyles.container}>
            <View style={GlobalStyles.tblTopRow}>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Code</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 300}]}>Name</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 200}]}>Category</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Price</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth,{width: 260}]}>Description</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>UOM</Text>
              <Text style={[GlobalStyles.tblTopCell,RetailStyles.tblCellWidth]}>Stocks</Text>
            </View>
            <View style={[GlobalStyles.tblDisplayRows,{borderBottomWidth: 1,borderBottomColor: color.primary,}]}>
              <FlatList
                data={data}
                scrollEnabled={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={customertable}></FlatList>
            </View>
            <View style={RetailStyles.searchItemResult}>
              <Text style={RetailStyles.searchItemNumber}>8</Text>
              <Text style={RetailStyles.searchItemText}>item(s) found</Text>
            </View>
          </View>
          </ScrollView>
        </View>
        }
      </View>
    </View>
  )
}

export default RetailSearchItem;

const styles = StyleSheet.create({})