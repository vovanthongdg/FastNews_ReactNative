import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import useNews from '../hooks/useNews'
import VerticalList from '../components/List/VerticalList'
import StoreContext from '../context/StoreContext'

const FinanceScreen = ({route}) => {

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
  <VerticalList data={financeNews}></VerticalList>
)
}

export default FinanceScreen

const styles = StyleSheet.create({})