import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, FlatList } from 'react-native';
import VerticalCard from '../Card/VerticalCard';
import { useNavigation } from '@react-navigation/native';
import Title from '../Common/Title';
import SmallCard from '../Card/SmallCard';
import GetData from '../../service/api/GetData';

const VerticalList = ({ title, data, route}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [refreshControl, setRefreshControl] = useState(false)
  const [dataU, setDataU] = useState()
  const navigation = useNavigation();
  const [dataToShow,setDataToShow] = useState([]);
  const [page,setPage] = useState(1);
  const perPage = 10;
  const [showContent,setShowContent] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(()=>{
    handleData();
  },[data])

  const handleData = ()=> {
    let arr = [...dataToShow];
    let i = (page*perPage)-perPage;
    for(i;i<page*perPage;i++){
      if(i<data.length){
        arr.push(data[i])
      }
    }
    setShowContent(true);
    setDataToShow(arr);
  }
  const addNewData = (pagec)=>{
    let arr = [...dataToShow];
    let i = (pagec*perPage)-perPage; 
    for(i;i<pagec*perPage;i++){
      if(i<data.length){
        arr.push(data[i])
      }
    }
    setPage(pagec)
    setDataToShow(arr);
  }
  const onRefresh = ()=>{
    setRefreshing(true)
  }
  // const filterBtCategory = (data, category) => {
  //   const result = data
  //     .filter(item => item.nameCategory === category)
  //     .reverse()
  //     console.log(result);

  //     return result;
  // }
  
  // const filterMultipleNews = async() => {
  //   const allNews = await GetData.getAll()
    
  //   setHealthNews(filterBtCategory(allNews, 'Sức khoẻ'))
  //   setLawNews(filterBtCategory(allNews, 'Pháp luật'))
  //   setSportVnNews(filterBtCategory(allNews, 'Bóng đá Việt Nam'))
  //   setCulinaryNews(filterBtCategory(allNews, 'Ẩm thực'))
  //   setFinanceNews(filterBtCategory(allNews, 'Kinh tế'))
  //   setCarNews(filterBtCategory(allNews, 'Xe cộ'))
  //   setTralvelNews(filterBtCategory(allNews, 'Du lịch'))
  //   setRealEstateNews(filterBtCategory(allNews, 'Nhà đất'))
  //   setEducationNews(filterBtCategory(allNews, 'Giáo dục'))
    
  // };
  
  // useEffect(() => {
  //   filterMultipleNews()
  
  // }, []);

  return (
    <>
    {showContent &&
      <>
        {title &&<Title size={20}>{title}</Title>}
        <View style={styles.listStyle}>
          <FlatList
            data={dataToShow}
            keyExtractor={item => item.idArticle}
            onEndReached={() => addNewData(page+1)}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <VerticalCard             
                onPress={() => navigation.push('NewsDetail', { item })}
                item={item}
                
              />
            )}
            //refresh
            // refreshControl={
            //   <RefreshControl refreshing={refreshControl} onRefresh={() => {
            //     setRefreshControl(true)
            //     // setData()
            //     setDataU(data)
            //     setRefreshControl(false)
            //   }} colors={['green']} />
            // }
          />
        </View>
      </>
      }
      </>

    // <ScrollView>
    //   <View>
    //     {title && <Title>{title}</Title>}
    //     <View style={styles.container}>
    //       {data.map(item => (
    //         <VerticalCard
    //           item={item}
    //           key={item.idArticle}
    //           onPress={() => navigation.navigate('NewsDetail', { item })}
              
    //         />
            
    //       ))}
    //     </View>
    //   </View>
    //   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticalList;
