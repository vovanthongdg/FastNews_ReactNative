import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import VerticalList from '../components/List/VerticalList'
import useNews from '../hooks/useNews'
import StoreContext from '../context/StoreContext'

const EducationScreen = ({route}) => {

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
  <VerticalList data={educationNews}></VerticalList>
)
}

export default EducationScreen

const styles = StyleSheet.create({})