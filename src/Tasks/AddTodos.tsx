import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {TextInput} from 'react-native-paper';

const ListComponent = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.title}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};
const AddTodos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.heading}>AddTodos</Text>
        <View style={styles.items}>
          <ListComponent title={'Hello'} />
          <ListComponent title={'Hello1'} />
        </View>
      </View>

      <TextInput style={styles.input} placeholder="Write a task" />
      {/* Write a task  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddTodos;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.appPrimary},
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'bold',
    color: colors.white,
    padding: 10,
  },
  items: {marginTop: 20},
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    marginRight: 15,
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '60%',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#55BCF6',
    borderWidth: 2,
  },
  bottomView: {},
  textInput: {
    width: '60%',
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: colors.white,
    borderWidth: 2,
    margin: 20,
    paddingLeft: 10,
    borderRadius: 10,
    //color: colors.white,
  },
  addWrapper: {},
  addText: {},
});
