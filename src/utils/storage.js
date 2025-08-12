import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};

export {saveData, getData, removeData};
