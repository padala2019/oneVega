import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import {TextInput} from 'react-native-paper';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButtonPress = () => {
    if (!email) {
      Alert.alert('Enter valid Email address');
      return;
    }
    if (!password) {
      Alert.alert('Enter valid passord address');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'password must be at least 6 characters');
      return;
    }
    Alert.alert('Success', 'login successful');
  };

  return (
    <View>
      <Text style={styles.titleHead}>Login</Text>

      <View style={styles.inputsViewStyle}>
        <TextInput
          style={styles.email}
          placeholder="username"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.password}
          placeholder="password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.login} onPress={loginButtonPress}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormValidation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appPrimary,
  },
  titleHead: {
    padding: 20,
    fontSize: 25,
    color: colors.white,
  },
  inputsViewStyle: {
    marginHorizontal: 20,
    //backgroundColor: colors.white,
  },
  email: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#fff',
    backgroundColor: colors.white,
  },
  password: {
    width: '90%',
    height: 35,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  login: {
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#fff',
    borderWidth: 2,
    width: '30%',
    height: 30,
    borderRadius: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#fff',
  },
});
