import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GetData from '../service/api/GetData';
import { useNavigation } from '@react-navigation/native';
import SearchModel from './Common/SearchModel';

let timeOutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setSearchFocused }) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState('');

  const handleChange = ({ nativeEvent}) => {
    const { text } = nativeEvent;
    setSearch(text);
    setVisible(true);
    debounceSearch(search);
  };

  const handleSearch = async value => {
    const res = await GetData.searchPost(value);
    if (res.success) {
      setNotFound('');
      setData(res.news);
      console.log(res)
    }

    if (!res.success) {
      setNotFound(res.message);
    }
  };

  const debounceSearch = debounce(handleSearch, 500);



  return (
    <>
    <View style={styles.container}>
    <TextInput
          // value={search}
          style={styles.searchInput}
          returnKeyType='done'
          returnKeyLabel='Tìm'
          placeholder='Tìm kiếm...'
          onSubmitEditing={handleChange}
          onChangeText={(text) => setSearch(text)}
          onFocus={() => {
            setSearchFocused(true);
          }}
          onBlur={() => {
            setSearchFocused(false);
            // setSearch('');
            // setVisible(false);
            // setData([]);
            setNotFound('');
          }}
        />
        <View style={styles.close}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Đóng</Text>
          </TouchableOpacity>
        </View>
    </View>
    <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 7,
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchInput: {
        width: '90%',
        
        paddingLeft: 8,
        
        fontSize: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,     
    },
    close:{
      margin: 3,
    },
})