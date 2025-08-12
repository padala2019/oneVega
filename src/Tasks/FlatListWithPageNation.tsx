import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import {ActivityIndicator} from 'react-native-paper';

const PAGE_SIZE = 10;
const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const FlatListWithPageNation = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isListEnd, setISListEnd] = useState(false);

  //const listRef = useRef(null);

  const fetchData = async () => {
    if (loading || isListEnd) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}posts?_page=${page}&_limit=${PAGE_SIZE}`,
      );
      const newData: [] = await response.json();
      if (newData.length > 0) {
        setData(prevData => [...prevData, ...newData]);
        setPage(prevPage => prevPage + 1);
      } else {
        setISListEnd(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleMore = () => {
    fetchData();
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{paddingVertical: 10}}>
        <ActivityIndicator size="small" color="#fff" />
      </View>
    );
  };
  const renderItem = (item: any) => {
    console.log('renderItem:', item);
    return (
      <View style={styles.itemList}>
        <Text style={styles.itemTextStyle}>{item.item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FlatList With PageNation</Text>
      <View style={styles.flatListStyle}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          onEndReached={handleMore}
          onEndReachedThreshold={0.5}
          //ListFooterComponent={renderFooter}
          // initialNumToRender={10}
          // maxToRenderPerBatch={10}
          ItemSeparatorComponent={() => {
            return <View style={{margin: 5}} />;
          }}
        />
      </View>
    </View>
  );
};

export default FlatListWithPageNation;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    //backgroundColor: colors.appPrimary,
  },
  textStyle: {
    padding: 20,
    color: colors.white,
    fontSize: 20,
  },
  flatListStyle: {
    flex: 1,
    backgroundColor: colors.appPrimary,
    marginHorizontal: 15,
  },
  itemList: {
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
  },
  itemTextStyle: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
});
