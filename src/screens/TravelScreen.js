import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import VerticalList from '../components/List/VerticalList'
import useNews from '../hooks/useNews'
import StoreContext from '../context/StoreContext'

const TravelScreen = ({route}) => {

  // const [travelNews] = useNews()

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
  <VerticalList data={travelNews}></VerticalList>
)
}

export default TravelScreen

const styles = StyleSheet.create({})