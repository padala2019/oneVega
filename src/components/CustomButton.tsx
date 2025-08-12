import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

interface ButtonProps {
  title?: string | '';
  onPress: () => void;
  testID?: string;
}
const CustomButton = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
        <Text style={styles.loginTxtStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 30,
  },
  buttonStyle: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
    marginHorizontal: 50,
    padding: 10,
    marginTop: 10,
  },
  loginTxtStyle: {
    color: colors.white,
    fontSize: 15,
    textAlign: 'center',
  },
});
export default CustomButton;
