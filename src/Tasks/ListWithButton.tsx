import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//https://api.github.com/users

const ListWithButton = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [data, setData] = useState([]);
  const [save, setSave] = useState();

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  //   const saveList = async (item: string) => {
  //     console.log('Saveeee:', item);
  //     const storeListItem = await AsyncStorage.setItem(
  //       'SAVE',
  //       JSON.stringify(item),
  //     );
  //     console.log('storeListItem:', storeListItem);
  //   };

  // const getList = async () => {
  //   const getItem = await AsyncStorage.getItem('SAVE');
  // };

  const onTapProfileScreen = () => {
    console.log('onTapProfileScreen');
    navigation.navigate('Details');
  };
  const onEdit = (indxVal: any) => {
    console.log('Click_Index:', indxVal.item.login);
    //saveList(indxVal.item.login);
  };

  const renderItem = (item: any) => {
    console.log('renderItem:', item.index);
    const id = item.index;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
          width: '100%',
          marginTop: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>{item.item.login}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: '15%',
            borderRadius: 10,
            paddingVertical: 5,
            alignItems: 'center',
          }}
          key={id}
          onPress={() => onEdit(item)}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
      />
      <View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: '45%',
            borderRadius: 10,
            paddingVertical: 5,
            alignItems: 'center',
            marginBottom: 15,
            borderColor: '#fff',
          }}
          onPress={onTapProfileScreen}
        >
          <Text>ProfileScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListWithButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appPrimary,
  },
});
