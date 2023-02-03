import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import useNews from '../hooks/useNews'
import VerticalList from '../components/List/VerticalList'
import StoreContext from '../context/StoreContext'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const SportVNScreen = ({route}) => {
  

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
  <VerticalList data={sportVnNews}></VerticalList>
)
}

export default SportVNScreen

const styles = StyleSheet.create({})