import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import newsApi from '../service/api/GetAPI';
import Trending from '../components/Trending';
import VerticalList from '../components/List/VerticalList';



const TrendingScreen = () => {

  const [
    lawNews,
    healthNews, 
    sportVnNews, 
    culinaryNews, 
    financeNews, 
    carNews, 
    travelNews,
    realEstateNews,
    educationNews] = useNews();


return (
  <VerticalList data={lawNews}></VerticalList>
)
}

export default TrendingScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FF',
    
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  }
})