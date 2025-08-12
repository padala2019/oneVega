import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';

interface searchProps {
  onHanderSearchQueryText: (str: string) => void;
}
const CustomSearch = (props: searchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: any) => {
    console.log('handleSearch');
    setSearchQuery(text);
    props.onHanderSearchQueryText(text);
  };
  return (
    <View>
      <TextInput
        style={styles.searchbar}
        placeholder="Search items..."
        placeholderTextColor={colors.white}
        cursorColor={colors.white}
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  searchbar: {
    height: 40,
    borderColor: colors.white,
    borderWidth: 2,
    margin: 20,
    paddingLeft: 10,
    borderRadius: 10,
    color: colors.white,
  },
});
