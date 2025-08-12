import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../constants/colors';

const AlbumsFlatList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(res => setData(res));
    } catch (error) {
      console.log('Error:', error);
    }
  }, []);

  const addListView = () => {
    const deleteItemFromList = (id: number) => {
      console.log('ID:', id);
      const filterData = data.filter((_item, _Index) => _Index !== id);
      setData(filterData);
    };

    const renderItemView = (item: any) => {
      console.log('index:', item.index);
      return (
        <View>
          <TouchableOpacity
            style={{
              width: '100%',
              marginTop: 20,
              height: 90,
              backgroundColor: '#fff',
              borderRadius: 5,
              flexDirection: 'row',
            }}
            onPress={() => deleteItemFromList(item.index)}
          >
            <Image
              source={{ uri: item.item.image }}
              style={{
                width: 70,
                height: 70,
                margin: 10,
                resizeMode: 'contain',
              }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ paddingTop: 15 }}>
                {item.item.title.length > 30
                  ? `${item.item.title.substring(0, 30)}`
                  : `${item.item.title.substring(0, 20)}...`}
              </Text>
              <Text style={{ marginTop: 3 }} numberOfLines={1}>
                {item.item.description.substring(0, 30)}
              </Text>
              <Text style={{ marginTop: 3, color: 'green' }} numberOfLines={1}>
                {`$ ${item.item.price}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        data={data}
        renderItem={renderItemView}
        keyExtractor={(item: any) => item.id}
        onEndReached={() => console.log('onEndReached')}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    );
  };

  const addHorizontalView = () => {
    return (
      <View>
        <Text>Horizontal</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {addListView()}
      {/* {addHorizontalView()} */}
    </View>
  );
};

export default AlbumsFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appPrimary,
  },
});
