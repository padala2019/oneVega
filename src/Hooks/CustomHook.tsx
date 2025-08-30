import { StyleSheet, Text, View } from 'react-native';
import React, { use, useEffect, useState } from 'react';

const fetchApi = async (url: any) => {
  const response = await fetch(url);
  return await response.json();
};
const useFetch = (url: any) => {
  //const dataUsers = use(fetchApi(url));
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(dataVal => setData(dataVal));
  }, [url]);
  return { data: data, isLoading: true, error: 'No Error' };
};

export default useFetch;
