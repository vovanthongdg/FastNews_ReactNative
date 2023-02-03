import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import getApi from '../service/api/GetAPI'
import GetData from '../service/api/GetData'
import Trending from '../components/Trending'
import useNews from '../hooks/useNews'
import VerticalList from '../components/List/VerticalList'
import StoreContext from '../context/StoreContext'

const HealthScreen = ({data, route}) => {

  const [
    lawNews,
    healthNews, 
    sportVnNews, 
    culinaryNews, 
    financeNews, 
    carNews, 
    travelNews,
    realEstateNews,
    educationNews] = useNews(route.name);


return (
  <VerticalList data={healthNews}></VerticalList>
)
}

export default HealthScreen

const styles = StyleSheet.create({})