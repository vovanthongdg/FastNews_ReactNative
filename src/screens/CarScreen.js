import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import VerticalList from '../components/List/VerticalList'
import useNews from '../hooks/useNews'
import StoreContext from '../context/StoreContext'

const CarScreen = ({data}) => {

  
  const [
    
    carNews, 
    ] = useNews();


  
  return (
      
        <VerticalList data={carNews}></VerticalList>
     
  )  
  
}

export default CarScreen

const styles = StyleSheet.create({})