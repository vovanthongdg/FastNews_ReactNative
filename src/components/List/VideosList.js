import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView, FlatList, RefreshControl } from 'react-native';
import VerticalVideo from '../Card/VerticalVideo';
import Title from '../Common/Title';


const VideosList = ({ data, title, route }) => {

  // const navigation = useNavigation();
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

  return (
    <>
    {showContent &&
      <>
        {title &&<Title size={20}>{title}</Title>}
        <View style={styles.listStyle}>
          <FlatList
            data={dataToShow}
            keyExtractor={item => item.idVideo}
            onEndReached={() => addNewData(page+1)}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <VerticalVideo             
                // onPress={() => navigation.navigate('NewsDetail', { item })}
                item={item}
                
              />
            )}
          />
        </View>
      </>
      }
      </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#4e4d4d',
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default VideosList;
