import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import VerticalList from '../components/List/VerticalList'
import useNews from '../hooks/useNews'
import StoreContext from '../context/StoreContext'

const RealEstateScreen = ({data, route}) => {

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
  <VerticalList data={realEstateNews}></VerticalList>
)
}

export default RealEstateScreen

const styles = StyleSheet.create({})