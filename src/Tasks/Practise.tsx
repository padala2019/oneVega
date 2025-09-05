import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Practise = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    console.log('Effect A');
    return () => console.log('Cleanup A');
  }, []);

  useEffect(() => {
    console.log('Effect B');
    return () => console.log('Cleanup B');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Practise </Text>
      <CustomButton
        title="Details "
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Practise;

const styles = StyleSheet.create({});
