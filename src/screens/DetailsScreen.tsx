import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = (props: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  //const {item} = props.route.params.data;
  const [expand, setExpand] = useState(false);

  const data = {
    paragraphs: [
      'The holiday’s typically a good time to save on home and kitchen appliances, mattresses and seasonal products, according to experts in our Memorial Day shopping guide. Experts also say that now might be a “pivotal moment” to.',
      'I’ve reported on holiday and daily sales at NBC Select for years — below are some of the best deals I’ve found so far. I’ll update this list with new deals, especially as prices and inventory changes over the weekend',
      'All of our recommendations are based on our previous coverage and reporting. We also included products we tried and tested ourselves, including expert-recommended products and NBC Select Award winners',
    ],
  };

  useEffect(() => {
    //props.navigation.setOptions({title: item.name});
    props.navigation.setOptions({ title: 'Detail' });
  }, []);

  /* useEffect(() => {
    console.log('UseEffect Details First');
    // const subscription = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   handleBackPress,
    // );
    // const setTimeOutID = setTimeout(() => {
    //   setMessage('Hello Good!');
    // }, 8000);
    return () => {
      console.log('UseEffect Details return');
      //clearTimeout(setTimeOutID);
      //subscription.remove();
    };
  }, []); */

  useFocusEffect(
    React.useCallback(() => {
      console.log('Details Screen Focus');
      return () => {
        console.log('Details Screen Focus effect cleanup');
      };
    }, []),
  );

  console.log('render Details');

  const readMoreButtonPress = () => {
    console.log('readMoreButtonPress');
    expand === false ? setExpand(true) : setExpand(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, { lineHeight: 25, padding: 10 }]}>
        {expand ? data.paragraphs : data.paragraphs[0]}
      </Text>

      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2,
            width: '50%',
          }}
          onPress={readMoreButtonPress}
        >
          <Text style={styles.textStyle}>
            {expand ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>

      <CustomButton
        title="Details"
        onPress={() => navigation.navigate('Component1')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appPrimary,
  },
  textStyle: {
    fontSize: 20,
    //color: '#fff',
  },
});
export default DetailsScreen;
