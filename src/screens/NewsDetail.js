import React, { useState, useEffect,useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {setFont, setSave} from '../redux/actions'

import { getFocusedRouteNameFromRoute, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import GetData from '../service/api/GetData';
import VerticalList from '../components/List/VerticalList';
import ActivityIndicator from '../components/Common/ActivityIndicator';
import Close from '../components/Common/Close';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import TrackPlayer from 'react-native-track-player';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import VerticalCard from '../components/Card/VerticalCard';

const { width, height } = Dimensions.get('window');


TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

const NewsDetail = ({navigation, route}) => {

  const {font} = useSelector(state => state.fontReducer);
  const dispatch = useDispatch();
  // const [range, setRange] = useState();
  // const routee = useRoute()
  const myScroll = useRef(null);
  const routeName = getFocusedRouteNameFromRoute(route)
  // console.log(route)
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const { idArticle: postId, idCategory: postCategory } = route.params.item;
  const [loading, setLoading] = useState(false);
  // const [au, setAu] = useState('');
  const isFocused = useIsFocused();

  //read news
  console.log(news.urlAudio)
  
  // const tracks = [
  //   {
  //     url: 'https://fastnews68.000webhostapp.com/audio/'+news.urlAudio+'.wav',
  //   },
  // ];
  // let id = news.urlAudio

  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({url: 'http://13.250.231.139/audio/243469.mp3'});
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  // const [audio, setAudio] = useState(null)
  // const play = () => {
  //   let read = new Sound("https://data.chiasenhac.com/down2/2270/3/2269935-4b168192/128/Ngoi%20Sao%20Co%20Don%20-%20Thuy%20Loan%20cover.mp3", null, (err) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     read.play((success) => {
  //       console.log('end', success)
  //     })
  //   })
  //   console.log('read', read)
  //   setAudio(read)
  // }

  // const navigation = useNavigation();

  const fetchPost = async id => {
    setLoading(true);
    const result = await GetData.getSingle(id);
    // console.log(result)
    setNews(result);
  };

  const fetchRelatedPosts = async category => {
    const result = await GetData.getByCategory(category, 6);
    setRelatedNews(result.filter(item => item.idCategory !== postId));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
  };

  // useEffect(()=>{
  //   navigation.addListener('focus',()=>{
  //     myScroll.current.scrollTo({
  //       y: 0,
  //       animated: true,
  //     });
  //   })
    
  // },[])
  useEffect(() => {
  //   const willFocus = navigation.addListener('focus', () => {
      
  //   });

      // return willFocus;
    // if(isFocused){
    //   fetchPost(postId)
    //   fetchRelatedPosts(postCategory)
    // }
    isFocused && fetchPost(postId)
    fetchRelatedPosts(postCategory)
    myScroll.current.scrollTo({
      y: 0,
      animated: true,
    })

    // set idarticle save
    dispatch(setSave(postId))
    console.log(postId)

    // setUpTrackPlayer();
    // return () => TrackPlayer.destroy();
    
  }, [isFocused]);

  // const playAu = async () => {
  //   await TrackPlayer.play();
  // }

  useEffect(() => {
    setUpTrackPlayer()
    
    
  }, [news]);

  const { title, content, urlImage} = news;
  return (
    <>
    {/* <SheetProvider> */}
      <ActivityIndicator visible={loading} />
      <ScrollView 
        style={styles.container}
        ref={myScroll}
        >
        <Image style={styles.image} source={{ uri: urlImage }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{
                fontSize: font,
                color: '#4e4d4d',
                }}>
                  {content}
            </Text>
        </View>
        <View style={styles.relatedPostContainer}>
          <VerticalList data={relatedNews} title='Tin liên quan' />
        </View>
      </ScrollView>
      {/* <Close onPress={() => navigation.popToTop()} /> */}
      {/* </SheetProvider> */}
      <View style={styles.footer}>
        <TouchableOpacity 
          onPress={() => TrackPlayer.play()}
          
          >
        
          <Ionicons 
                size={30} 
                style={styles.icon}
                name="md-volume-high" 
                
                />
          <Text style={styles.textfooter}>Nghe tin</Text>
        </TouchableOpacity>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 26,
    color: '#4e4d4d',
  },
  relatedPostContainer: {
    padding: 10,
  },
  footer: {
    height: 40,
    backgroundColor: 'yellow',
    borderTopColor: '#6B6A6A',
    borderTopWidth: 2,
    alignItems: 'flex-end',
    justifyContent:'center',
    
    

  },
  icon: {
    
    top: 5,
    alignSelf: 'center'
  },
  textfooter:{
    fontSize: 16,
    bottom: 5,
    marginRight: 10,




  }
});

export default NewsDetail;
