import React, {useEffect} from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,TextInput,Button,View,Image,Alert,Dimensions } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginCus = ({navigation}) => {
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [islogin, setIslogin] = React.useState(false);
  useEffect(() => {
    const login = async()=> {
      axios.post(
        "http://localhost/ReminderApp/logincus.php",
        JSON.stringify({
          phonenumber:phonenumber,
          password:password,
        })
      )
      .then((res)=>{
        setIslogin(false);
        if(res.data.empty==true){
          Alert.alert("Please complete the information");
        }
        else{
          if(res.data.match=="no phone"){
            Alert.alert("Phone number is invalid. Please register before using.");
          }
            else if(res.data.match=="no pass"){
              Alert.alert("Please enter a new password again.");
            }
          else if(res.data.match=="phone ok pass ok"){
            AsyncStorage.setItem("phonenumber",phonenumber)
            navigation.navigate("Map");
          }
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    if(islogin==true){
      login();
    }
    
  }, [islogin])
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.logo2} source={require('../image/logo2.png')}/>
    <View style={styles.all}>
      
    <Text style={styles.log}>เข้าสู่ระบบ</Text>
    <Text style={styles.text1}>เบอร์โทรศัพท์</Text>
    <TextInput 
      style={styles.phone}
      onChangeText = {(phonenumber)=>setPhoneNumber(phonenumber)} 
      keyboardType = "numeric"
      />

    <Text style={styles.text2}>รหัสผ่าน</Text>
    <TextInput 
      style={styles.password}
      onChangeText = {(password)=>setPassword(password)}
      secureTextEntry = {true}
      />

    <View style={styles.login}>
        <Button title="เข้าสู่ระบบ"color="black"
           onPress={()=> setIslogin(true)}>
        </Button>   
        </View>

        <View style={styles.regis}>
        <Button title="ลงทะเบียน"color="black"
           onPress={()=> navigation.navigate("Condition")}>
        </Button>   
    </View>
        </View>
    </ImageBackground> 
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  logo2: {
    width:300,
    height:100,
    marginLeft:10,
    transform:[{translateY:70}],
    
  },
  log : {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:135,
    marginTop:100,
    color: 'black'
  },
  phone : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginTop:10,
    fontSize:20,
    borderRadius:10
  },
  password : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:50,
    marginBottom:30,
    fontSize:20,
    borderRadius:10
  },
  text1 : {
    marginLeft:50,
    fontSize:20,
    marginTop:50,
    color: 'black'
  },
  text2 : {
    marginLeft:50,
    fontSize:20,
    color: 'black'
  },
  login : {
    marginBottom:10,  
    justifyContent: 'center',
    marginHorizontal:120,
    backgroundColor: "#FF6600",
    width:160,
    marginLeft:110,
    borderRadius:10,
    height:50
  },
  regis : {
    marginBottom:10,  
    justifyContent: 'center',
    marginLeft:220,
    width:160,
    height:50
  },
  all : {
    marginBottom:230,

  }
});

export default LoginCus;