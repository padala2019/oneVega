import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { use, useEffect, useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import colors from '../constants/colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AlbumsFlatList from '../Tasks/AlbumsFlatList';
import FormInputs from '../Tasks/FormInputs';
import useFetch from '../Hooks/CustomHook';
import SearchWithFilter from '../Tasks/SearchWithFilter';
import ListWithButton from '../Tasks/ListWithButton';
import Practise from '../Tasks/Practise';
import { UserContext } from '../Hooks/UserContext';
import Accordion from '../Tasks/Accordion';

const Obj1 = {
  name: 'CCC',
  email: 'ccc@gmail.com',
};
export const UserProvider = ({ children }: any) => {
  return <UserContext.Provider value={Obj1}>{children}</UserContext.Provider>;
};
const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [message, setMessage] = useState('Hi');
  //const [data, setData] = useState([]);

  let str = 'ABC';
  const data = useFetch('https://jsonplaceholder.typicode.com/users');
  //console.log('Custom_Hooks:', data);
  //console.log('DATA:', data);
  // const handleBackPress = () => {
  //   console.log('handleBackPress');
  //   return true;
  // };
  /* useEffect(() => {
    console.log('UseEffect First');
    // const subscription = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   handleBackPress,
    // );
    // const setTimeOutID = setTimeout(() => {
    //   setMessage('Hello Good!');
    // }, 8000);
    return () => {
      console.log('UseEffect return');
      //clearTimeout(setTimeOutID);
      //subscription.remove();
    };
  }, []); */

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/users',
  //     );
  //     const jsonRes = await response.json();
  //     //setData(jsonRes);
  //     console.log('JSON_Res:', jsonRes);
  //   };
  //   fetchData();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Home Screen Focus');
      setTimeout(() => {
        setMessage('Normal Home Screen');
      }, 8000);
      return () => {
        console.log('Home Screen Focus effect cleanup');
        setMessage('Hi');
      };
    }, []),
  );
  // const flatListSearch = () => {
  //   console.log('flatListSearch');
  //   return <SearchWithFilter />;
  // };

  console.log('render Home');

  return (
    <View style={styles.container}>
      {/* <FormInputs /> */}
      {/* <SearchWithFilter /> */}
      {/* <AlbumsFlatList /> */}
      {/* <AddTodos /> */}
      {/* <FlatListWithPageNation /> */}
      {/* <AddTodoList /> */}
      {/* <FormValidation /> */}
      {/* <Counter /> */}
      {/* <ListWithButton /> */}
      {/* <Accordion /> */}
      <Practise />
      <CustomButton
        title="Details A"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: colors.appPrimary,
  },
  btnStyle: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: colors.white,
    justifyContent: 'center',
  },
  txtStyle: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
});
export default HomeScreen;
