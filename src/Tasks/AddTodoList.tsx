import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import colors from '../constants/colors';

const AddTodoList = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>([]);
  const onChangeText = (str: string) => {
    setInput(str);
  };

  const addButtonPress = () => {
    setResult([...result, input]);
    setInput('');
  };

  const deleteItem = (index: number) => {
    const filterVal = result.filter((_: any, i: any) => i !== index);
    setResult(filterVal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtHeading}>Add Todo List</Text>
      <View style={styles.viewHeader}>
        <TextInput
          style={styles.txtInput}
          placeholder="enter your text"
          value={input}
          onChangeText={onChangeText}
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addButtonPress()}>
          <Text style={{color: colors.white, fontSize: 20}}>Add</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 5,
        }}>
        {result.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.listItemStyle}
              onPress={() => deleteItem(index)}>
              <Text style={{color: colors.white, fontSize: 20}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AddTodoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  txtHeading: {color: colors.white, fontSize: 25, marginBottom: 10},
  viewHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  txtInput: {
    width: '70%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addBtn: {
    borderColor: colors.white,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  listItemStyle: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
});
