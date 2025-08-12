import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {getData, postData} from '../services/api';
import {reporter} from '../../metro.config';

const SearchWithFilter = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);

  const [dataFilter, setDataFilter] = useState<any>();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));

    //getData('/user1000');
    //postData('/user20', {name: 'Raveendra'});
  }, []);

  /* useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/users',
          );
          if (!response.ok) {
            throw new Error(`HTTP Error status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []); */

  // useEffect(() => {
  //   const fetchDataUsingPost = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/users',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             key1: 'value1',
  //             key2: 'value2',
  //           }),
  //         },
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP Error status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchDataUsingPost();
  // }, []);

  const handleSearch = (str: string) => {
    setSearchQuery(str);
    const filterText = data.filter((item: any) => {
      return item.name.toLowerCase().includes(str.toLowerCase());
    });
    setDataFilter(filterText);
  };
  const renderItemView = (item: any) => {
    return (
      <View style={styles.listViewStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {data: item})}>
          <Text style={{fontSize: 18, color: '#fff'}}>{item.item.name}</Text>
          <Text
            style={{color: '#fff'}}>{`City: ${item.item.address.city}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchbar}
        placeholder="Search items..."
        placeholderTextColor={colors.white}
        cursorColor={colors.white}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <View style={styles.flatListStyle}>
        <FlatList
          data={searchQuery.length > 0 ? dataFilter : data}
          renderItem={renderItemView}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{height: 5}} />}
        />
      </View>
      <CustomButton
        title="login"
        testID="loginButton"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appPrimary,
  },
  flatListStyle: {marginTop: 2, height: '75%'},
  loginTxtStyle: {
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
  },
  listViewStyle: {
    flex: 1,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 2,
    padding: 5,
    marginHorizontal: 20,
  },
  searchbar: {
    height: 40,
    borderColor: colors.white,
    borderWidth: 2,
    margin: 20,
    paddingLeft: 10,
    borderRadius: 10,
    color: colors.white,
  },
});

export default SearchWithFilter;
