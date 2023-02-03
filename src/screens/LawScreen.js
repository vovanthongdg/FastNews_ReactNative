import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import useNews from '../hooks/useNews'
import VerticalList from '../components/List/VerticalList'
import StoreContext from '../context/StoreContext'

const LawScreen = ({route}) => {

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
  <VerticalList data={lawNews}></VerticalList>
)
}

export default LawScreen

const styles = StyleSheet.create({})