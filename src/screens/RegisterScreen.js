import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext, AuthProvider} from '../context/AuthContext';

 
 
const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const {isLoading, register} = useContext(AuthContext);
 
  return (
    <View style={styles.body} 
      > 
        <Text style={styles.txtlogin}>Đăng Ký</Text>
        <Spinner visible={isLoading} />
        <View style={styles.containinput}>

        <Ionicons
            name="call"
            size={40}
          />
        <TextInput 
          style={styles.input}
          value={username}
          placeholder='Username...'
          onChangeText={text => setUsername(text)}
        />
        
        </View>

        <View style={styles.containinput}>

            <Ionicons
                name="call"
                size={40}
            />
            <TextInput 
            style={styles.input}
            value={email}
            placeholder='Email...'
            onChangeText={text => setEmail(text)}
            />

        </View>

        <View style={styles.containinput}>

        <Ionicons
            name="md-lock-closed"
            size={40}   
          />
        <TextInput 
          style={styles.input}
          value={password}
          placeholder='Mật khẩu...'
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        </View>
        <TouchableOpacity
          style={{backgroundColor:'#54700b',padding:10, top: 10}}
          onPress={() => {
            register(username, email, password)
          }}
        >
          <Text style={{color:'#fff',textAlign:'center', fontSize: 20}}>Đăng ký</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', marginTop: 20}}>
           <Text style={{fontSize: 18}}>Bạn đã có tài khoản? </Text>
           <TouchableOpacity onPress={() => navigation.navigate('login')}>
             <Text style={{color:'#54700b',textAlign:'center', fontSize: 18}}>Đăng nhập ngay</Text>
           </TouchableOpacity>
         </View>
    </View>

    // <View style={styles.container}>
    //   <Spinner visible={isLoading} />
    //   <View style={styles.wrapper}>
    //     <TextInput
    //       style={styles.input}
    //       value={email}
    //       placeholder="Enter email"
    //       onChangeText={text => setEmail(text)}
    //     />

    //     <TextInput
    //       style={styles.input}
    //       value={password}
    //       placeholder="Enter password"
    //       onChangeText={text => setPassword(text)}
    //       secureTextEntry
    //     />
    //     <TouchableOpacity
    //       style={{backgroundColor:'#54700b',padding:10, top: 10}}
    //       onPress={() => {
    //         // login(email, password)
    //       }}
    //     >
    //       <Text>Đăng nhập</Text>
    //     </TouchableOpacity>

    //     <View style={{flexDirection: 'row', marginTop: 20}}>
    //       <Text>Don't have an account? </Text>
    //       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
    //         <Text style={styles.link}>Register</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
};
 
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  txtlogin: {
    fontSize: 38,
    fontWeight: '500',
    top: -100,

  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    width: 300,
    marginLeft: 10,
    marginTop: 10,

  },
  containinput: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // wrapper: {
  //   width: '80%',
  // },
  // input: {
  //   marginBottom: 12,
  //   borderWidth: 1,
  //   borderColor: '#bbb',
  //   borderRadius: 5,
  //   paddingHorizontal: 14,
  // },
  // link: {
  //   color: 'blue',
  // },
});

export default RegisterScreen;