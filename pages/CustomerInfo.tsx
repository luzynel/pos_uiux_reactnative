import {StyleSheet,Text,View,SafeAreaView,TouchableOpacity,TextInput,useWindowDimensions,FlatList,Modal,Pressable,ScrollView,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {GlobalStyles} from '../components/styles/GlobalStyles';
import CustomerInfoStyles from '../components/styles/CustomerInfoStyles';
import OrderFirstSidebar from '../components/OrderFirstSidebar';
import IconItem from '../components/IconItem';
import {color} from '../assets/utils/colors';

const DetailRoute = () => (
  <View style={CustomerInfoStyles.container}>
    <View style={CustomerInfoStyles.formFieldGroup}>
      <View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
        <View style={CustomerInfoStyles.iconField}>
          <IconItem itype={'material-icons'} iname={'qr-code'} isize={22} icolor={color.border} />
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm,{color: color.dark}]}
            aria-label="customer-code"
            value="000-123"
            editable={false}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={[CustomerInfoStyles.formFieldItem,CustomerInfoStyles.fieldGroupItem]}>
        <View style={CustomerInfoStyles.iconField}>
          <IconItem itype={'material-icons'} iname={'card-membership'} isize={22} icolor={color.border} />
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={[CustomerInfoStyles.inputTextField,CustomerInfoStyles.inputTextFieldEm, {color: color.dark}]}
            aria-label="loyalty-cardno"
            value="323-323-323"
            editable={false}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
    <View style={CustomerInfoStyles.formFieldItem}>
      <View style={CustomerInfoStyles.iconField}>
        <IconItem itype={'fontawesome6'} iname={'user'} isize={22} icolor={color.border} />
      </View>
      <View style={CustomerInfoStyles.inputFieldGroup}>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={CustomerInfoStyles.inputTextField} placeholder="Last Name" placeholderTextColor={color.border} defaultValue="De la Cruz" keyboardType="default" />
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={CustomerInfoStyles.inputTextField} placeholder="First Name" placeholderTextColor={color.border} defaultValue="Juan" keyboardType="default" />
        </View>
        <View style={CustomerInfoStyles.inputField}>
          <TextInput style={CustomerInfoStyles.inputTextField} placeholder="Middle Name" placeholderTextColor={color.border} defaultValue="U." keyboardType="default" />
        </View>
      </View>
    </View>
    <View style={CustomerInfoStyles.formFieldItem}>
      <View style={CustomerInfoStyles.iconField}>
        <IconItem
          itype={'material-icons'}
          iname={'location-pin'}
          isize={22}
          icolor={color.border}
        />
      </View>
      <View style={CustomerInfoStyles.inputField}>
        <TextInput
          style={CustomerInfoStyles.inputTextField}
          placeholder="Address"
          placeholderTextColor={color.border}
          keyboardType="default"
        />
      </View>
    </View>
  </View>
);

const AddInfo = () => (
  <View style={CustomerInfoStyles.container}>
    <View style={CustomerInfoStyles.formFieldItem}>
      <View style={CustomerInfoStyles.iconField}>
        <IconItem
          itype={'material-community'}
          iname={'card-bulleted-outline'}
          isize={22}
          icolor={color.border}
        />
      </View>
      <View style={CustomerInfoStyles.inputField}>
        <TextInput
          style={CustomerInfoStyles.inputTextField}
          placeholder="TIN"
          placeholderTextColor={color.border}
          keyboardType="numeric"
        />
      </View>
    </View>
    <View style={CustomerInfoStyles.formFieldItem}>
      <View style={CustomerInfoStyles.iconField}>
        <IconItem
          itype={'material-icons'}
          iname={'business'}
          isize={22}
          icolor={color.border}
        />
      </View>
      <View style={CustomerInfoStyles.inputField}>
        <TextInput
          style={CustomerInfoStyles.inputTextField}
          placeholder="Business Style"
          placeholderTextColor={color.border}
          keyboardType="default"
        />
      </View>
    </View>
  </View>
);

const Notes = () => (
  <View style={CustomerInfoStyles.container}>
    <View
      style={[
        CustomerInfoStyles.formFieldItem,
        CustomerInfoStyles.formFieldArea,
      ]}>
      <View style={CustomerInfoStyles.iconField}>
        <IconItem
          itype={'material-icons'}
          iname={'notes'}
          isize={22}
          icolor={color.border}
        />
      </View>
      <View style={CustomerInfoStyles.inputField}>
        <TextInput
          style={[  CustomerInfoStyles.inputTextField,
            CustomerInfoStyles.inputTextAreaField,
          ]}
          placeholder="Enter your notes here"
          placeholderTextColor="#A9A9A9"
          multiline={true}
          numberOfLines={10}
          textAlignVertical="top" // Ensures text starts at the top
        />
      </View>
    </View>
  </View>
);

interface CustomerList {
  id: number;
  customerno: string;
  lastname: string;
  firstname: string;
  middlename: string;
  loyaltycardno: string;
  notes: string;
}
const data: CustomerList[] = [
  {
    id: 0,
    customerno: '000-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 1,
    customerno: '100-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 2,
    customerno: '200-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 3,
    customerno: '300-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 4,
    customerno: '400-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 5,
    customerno: '500-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 6,
    customerno: '600-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
  {
    id: 7,
    customerno: '700-123',
    lastname: 'De la Cruz',
    firstname: 'Juan',
    middlename: 'U.',
    loyaltycardno: '323-323-323',
    notes: 'this is notes',
  },
];

export default function CustomerInfo() {
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
    {key: 'tab1', title: 'Detail'},
    {key: 'tab2', title: 'Additional Info'},
    {key: 'tab3', title: 'Notes'},
  ]);
  const renderScene = SceneMap({
    tab1: DetailRoute,
    tab2: AddInfo,
    tab3: Notes,
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
  const customertable = ({item}: {item: CustomerList}) => (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={GlobalStyles.tblDisplayItem}>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.customerno}</Text>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.lastname}</Text>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.firstname}</Text>
        <Text style={[GlobalStyles.tblDisplayCell]}>{item.middlename}</Text>
        <Text
          style={[  GlobalStyles.tblDisplayCell,
            GlobalStyles.tblDisplayCellLink,
          ]}>
          {item.loyaltycardno}
        </Text>
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

        {/* Main Frame */}
        {isLoading ? <View style={GlobalStyles.loadingContainer}><ActivityIndicator color="blue" size="small" /></View> :
        <View style={GlobalStyles.frameMain}>

          {/** Info Tab */}
          <View style={[GlobalStyles.tabContainer]}>
            <TabView
              style={GlobalStyles.tabView}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={renderTabBar}
              sceneContainerStyle={[GlobalStyles.sceneContainer,CustomerInfoStyles.sceneContainer]}
            />
          </View>

          {/** SearchBox */}
          <View style={CustomerInfoStyles.searchBox}>
            <View style={GlobalStyles.buttonsWrap}>
              <TouchableOpacity
                style={[    GlobalStyles.button,
                  GlobalStyles.bgSuccess,
                  GlobalStyles.buttonRow,
                ]}>
                <IconItem       itype={'material-icons'}
                  iname={'add'}
                  isize={22}
                  icolor={color.light}
                />
                <Text style={[GlobalStyles.buttonText]}>Add New</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[    GlobalStyles.button,
                  GlobalStyles.bgTertiary,
                  GlobalStyles.buttonRow,
                ]}>
                <IconItem       itype={'material-icons'}
                  iname={'search'}
                  isize={22}
                  icolor={color.light}
                />
                <Text style={[GlobalStyles.buttonText]}>Search</Text>
              </TouchableOpacity>
            </View>

            {/* Customer List */}
            <View style={CustomerInfoStyles.customerList}>
              <View style={CustomerInfoStyles.container}>
                <View style={GlobalStyles.tblTopRow}>
                  <Text style={[GlobalStyles.tblTopCell]}>Cust Code</Text>
                  <Text style={[GlobalStyles.tblTopCell]}>LName</Text>
                  <Text style={[GlobalStyles.tblTopCell]}>FName</Text>
                  <Text style={[GlobalStyles.tblTopCell]}>M.I</Text>
                  <Text style={[GlobalStyles.tblTopCell]}>Loyalty No.</Text>
                  <Text style={[GlobalStyles.tblTopCell]}>Notes</Text>
                </View>
                <View style={GlobalStyles.tblDisplayRows}>
                  <FlatList
                    data={data}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={customertable}></FlatList>
                </View>
              </View>
            </View>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={GlobalStyles.centeredView}>
              <View style={GlobalStyles.modalView}>
                <View style={CustomerInfoStyles.modalContainer}>
                  <Pressable
                    style={[        GlobalStyles.button,
                      GlobalStyles.bgAlert,
                      GlobalStyles.modalCloseButton,
                    ]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <IconItem           itype={'Ionicons'}
                      iname={'close-sharp'}
                      isize={30}
                      icolor={color.light}
                    />
                  </Pressable>
                  <ScrollView>
                    <View style={CustomerInfoStyles.infoItemGroup}>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Customer Code
                        </Text>
                        <View
                          style={[              CustomerInfoStyles.infoWrapper,
                            CustomerInfoStyles.disabled,
                          ]}>
                          <Text
                            style={[                CustomerInfoStyles.infoText,
                              CustomerInfoStyles.disabledText,
                            ]}>
                            000-123
                          </Text>
                        </View>
                      </View>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Loyalty Card No.
                        </Text>
                        <View
                          style={[              CustomerInfoStyles.infoWrapper,
                            CustomerInfoStyles.disabled,
                          ]}>
                          <Text
                            style={[                CustomerInfoStyles.infoText,
                              CustomerInfoStyles.disabledText,
                            ]}>
                            323-323-323
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={CustomerInfoStyles.moreInfo}>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Customer Name:
                        </Text>
                        <View style={CustomerInfoStyles.infoWrapper}>
                          <Text style={CustomerInfoStyles.infoText}>
                            Juan U. De la Cruz
                          </Text>
                        </View>
                      </View>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Address
                        </Text>
                        <View style={CustomerInfoStyles.infoWrapper}>
                          <Text style={CustomerInfoStyles.infoText}>
                            Address 1 Street, City, Province
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={CustomerInfoStyles.moreInfo}>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Card Issued Date:
                        </Text>
                        <View style={CustomerInfoStyles.infoWrapper}>
                          <Text style={CustomerInfoStyles.infoText}>
                            09/04/2024
                          </Text>
                        </View>
                      </View>
                      <View style={CustomerInfoStyles.infoItem}>
                        <Text style={CustomerInfoStyles.infoLabel}>
                          Available Balance (pts)
                        </Text>
                        <View style={CustomerInfoStyles.infoWrapper}>
                          <Text style={CustomerInfoStyles.infoText}>123</Text>
                        </View>
                      </View>
                      <Text style={CustomerInfoStyles.infoLabel}>Expiry</Text>
                      <View style={CustomerInfoStyles.infoWrapper}>
                        <Text style={CustomerInfoStyles.infoText}>
                          09/04/2029
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        }

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
