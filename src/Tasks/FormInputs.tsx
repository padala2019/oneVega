import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import colors from '../constants/colors';

const FormInputs = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
  });

  const onChangeTextUserName = (text: any) => {
    console.log('UserName:', text);
    setName(text);
  };

  const onChangeTextPassword = (text: any) => {
    console.log('Password:', text);
    setPassword(text);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    console.log('onSubmit', formData);
  };

  return (
    <View style={{ marginTop: 40, paddingLeft: 10 }}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="userName"
        placeholderTextColor={'#fff'}
        value={formData.name}
        onChangeText={text => handleChange('name', text)}
      />

      <TextInput
        style={styles.textInputStyle}
        placeholder="passWord"
        placeholderTextColor={'#fff'}
        value={formData.password}
        onChangeText={text => handleChange('password', text)}
      />

      <TextInput
        style={styles.textInputStyle}
        placeholder="email"
        placeholderTextColor={'#fff'}
        value={formData.email}
        onChangeText={text => handleChange('email', text)}
      />

      <Button title="submit" onPress={onSubmit} color={'#fff'} />
    </View>
  );
};

export default FormInputs;

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#fff',
    borderWidth: 2,
    height: 45,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    color: '#fff',
  },
});
