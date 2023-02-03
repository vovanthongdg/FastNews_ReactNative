import { Alert, StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import React, {useRef, createRef, useState, useEffect, useContext } from 'react'
import ActionSheet, {
    ActionSheetRef,
    SheetProps,
  } from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider'
import {useSelector, useDispatch} from 'react-redux'
import {setFont, setSave} from '../../redux/actions'
import GetData from '../../service/api/GetData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext, AuthProvider} from '../../context/AuthContext';

function ActionSheetBottom({sheetId, payload}: SheetProps<{data: string}>) {

    const actionSheetRef = useRef<ActionSheetRef>(null);
    const {font} = useSelector(state => state.fontReducer);
    const {save} = useSelector(state => state.saveReducer);
    const dispatch = useDispatch();
    const [infoSave, setInfoSave] = useState({})
    const {userInfo, rendering} = useContext(AuthContext);
    const [color, setColor] = useState(false)
    
    const savenews = async (iduser: any, idarticle:any) => {
      const result = await GetData.saveNews(iduser, idarticle);
      setInfoSave(result)
      setColor(result.success)
      Alert.alert(
        'Đánh dấu thành công!',
        );
      console.log(result)
      
    };

    const handlerClick = () => {
      savenews(userInfo.id_user,save)
    }

    useEffect(() => {
      setColor(false)

    }, []);

    // const [range, setRange] = useState(0);

    // dispatch(setFont(font));

  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      containerStyle={{
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}
      indicatorStyle={{
        width:100
      }}
      gestureEnabled={true}>
      <View style={styles.containline}>
        <Text 
          style={{fontSize: 20, alignSelf: 'center', fontWeight: '600', bottom: 10 }}
          >Tuỳ chỉnh
        </Text>

        <View style={styles.line1}>
          <TouchableOpacity 
            style={styles.btnline}
            onPress={() => {
              handlerClick()
              // savenews(userInfo.id_user,save)
              // console.log(userInfo.id_user, save)
            }}
          >
            <Ionicons 
              size={25} 
              name="bookmark-outline" 
              style={styles.icon}
              color={color? '#00AA00' : '#fff'}
                  
            />
            <Text style={{fontSize: 20}}>Đánh dấu tin</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line1}>
          <Ionicons 
            size={25} 
            name="options-sharp" 
            style={styles.icon}
                
          />
          <Text style={{fontSize: 20}}>Cỡ chữ</Text>
          <Slider

            value={font}
            style={styles.slider}
            minimumValue={20}
            maximumValue={32}
            step={2}
            onValueChange={(value)=> {
              dispatch(setFont(value))
            }}
            // onSlidingStart={(value) => {
            //   dispatch(setFont(value))
            // }}
            
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"

          />
        </View>

        <View style={{flexGrow:1}}>
          
        </View>
        
      </View>
    </ActionSheet>
  )
}

export default ActionSheetBottom

const styles = StyleSheet.create({
  containline:{
    padding:20,
    height:300,
    flexDirection:'column',
    width:'100%',
    backgroundColor: '#CFCFCF'
  },
  line1:{
    
    // width:50,
    // height:50,
    marginRight:10,
    flexDirection: 'row',
    marginBottom: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    
    
  },
  btnline: {
    flexDirection: 'row',
    marginBottom: 10,
  
  },
  icon: {
    right: 5,
  },
  text: {
    fontSize: 20,
  },
  slider: {
    
    width: 200,
    height: 40,
    
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
  }


})