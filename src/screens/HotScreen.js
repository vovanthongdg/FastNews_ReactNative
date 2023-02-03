import React, { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, ActivityIndicator, Switch, Text, FlatList, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'




import { EventRegister } from 'react-native-event-listeners'
import Card from '../components/CardNews';
import VerticalList from '../components/List/VerticalList';
import getApi from '../service/api/GetAPI';






import themeContext from '../theme/themeContext';


//API call
const HotScreen = ({ navigation }) => {
  // const [isLoading, setLoading] = useState(true);
  // const [news, setNews] = useState([])

  // useEffect(() => {
  //   getNewsFromAPI()
  // }, [])

  // /* const newsResponse = async() => {
  //     const response = await newAPI.get('everything?q=tesla&from=2021-07-19&sortBy=publishedAt&apiKey=920deb9f754348c0bec4871fef36d971')
  //     console.log(response.data)
  // } */

  // function getNewsFromAPI() {
  //   getApi.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f2bb7a17a3a54da0a1ba17dec3020cd8')
  //   .then(function (response) {
  //     setNews(response.data)
  //     // console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
      
  //   });
    
  // }

  // if (!news) {
  //   return null
  // }else {
  //   console.log(news.status);
  // }


  //Theme
  const theme = useContext(themeContext);
  const [isEnabled, setIsEnabled] = useState(false);


  // //Dates
  // var date = new Date().getDate();
  // function months() {

  //   var month = new Date().getMonth() + 1; //To get the Current Month

  //   if (month == 1) {
  //     return "January"
  //   } else if (month == 2) {
  //     return "February"
  //   } else if (month == 3) {
  //     return "March"
  //   } else if (month == 4) {
  //     return "April"
  //   } else if (month == 5) {
  //     return "May"
  //   } else if (month == 6) {
  //     return "June"
  //   } else if (month == 7) {
  //     return "July"
  //   } else if (month == 8) {
  //     return "August"
  //   } else if (month == 9) {
  //     return "September"
  //   } else if (month == 10) {
  //     return "October"
  //   } else if (month == 11) {
  //     return "November"
  //   } else if (month == 12) {
  //     return "December"
  //   }
  // }
  // var year = new Date().getFullYear();

  const [
    lawNews,
    healthNews, 
    sportVnNews, 
    culinaryNews, 
    financeNews, 
    carNews, 
    travelNews,
    realEstateNews,
    educationNews,
    ] = useNews();

  return (
    <VerticalList data={lawNews}></VerticalList>
      
        
          
          
          

        //   <View
        //     style={{
        //       borderBottomColor: 'gray',
        //       borderBottomWidth: 0.5,
        //       width: '90%',
        //       alignSelf: 'center',
        //       marginTop: 5
        //     }}
        //   />
        //   <Text style={{
        //     fontSize: 30,
        //     fontWeight: 'bold',
        //     marginTop: 10,
        //     marginLeft: 20,
        //     color: theme.textColor
        //   }}
        //   >Recent News</Text>
        //   <FlatList
            
        //     data={news.articles}
        //     keyExtractor={(item, index) => 'key' + index}
        //     renderItem={({ item }) => (
        //       <Card
        //         item={item}
        //       />
        //     )}
        //     style={{ marginBottom: 65 }}
        //   />
        // </View>
      
    
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 60,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  }
});


export default HotScreen;