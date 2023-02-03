import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

export default function WebScreen({route}) {

  const {url} = route.params

  return (
    <WebView 
    source={{
        uri: url
    }}
    style={{marginTop: 20}}
    />
  )
}