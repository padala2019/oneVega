import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useReducer, useRef} from 'react';
import colors from '../constants/colors';

// intial State
const intialState = {count: 0};

const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return {count: Math.min(state.count + 1, 10)};
    case 'decrement':
      return {count: Math.max(state.count - 1, 0)};
    default:
      return state;
  }
};
const Counter = () => {
  // Use Reducer Hook
  const [state, dispatch] = useReducer(countReducer, intialState);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Count:{state.count}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <Button
          title="INCREMENT"
          //disabled={state.count === 10 ? true : false}
          onPress={() => dispatch({type: 'increment'})}
        />
        <Button
          title="DECREMENT"
          //disabled={state.count === 0 ? true : false}
          onPress={() => dispatch({type: 'decrement'})}
        />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 25,
  },
});
