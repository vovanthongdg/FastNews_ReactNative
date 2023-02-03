import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CustomTabBar from '../components/CustomTabBar'
import CustomHeader from '../components/CustomHeader'
import SearchModel from '../components/Common/SearchModel'




const SearchScreen = () => {


  const [isSearchFocused, setSearchFocused] = useState(false);

  return (
    <ScrollView 
      scrollEnabled={!isSearchFocused}
    >
      <SearchBar setSearchFocused={setSearchFocused} />
      
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#000',
        flex: 1,
    },
    keyword: {
        flex: 0.2,
        backgroundColor: '#fff'
    },
})