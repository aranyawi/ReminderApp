import React, {useEffect} from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,TextInput,Button,View,Image,Alert } from "react-native";
import axios from "axios";



const Register = ({navigation}) => {
  const [store_name, setStoreName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [id_card, setIdCard] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [isRegister, setIsRegister] = React.useState(false);
  useEffect(() => {
    const register = async()=> {
      axios.post(
        "http://localhost/ReminderApp/register.php",
        JSON.stringify({
          store_name:store_name,
          username:username,
          id_card:id_card,
          phonenumber:phonenumber,
          password:password,
        })
      )
      .then((res)=>{
        setIsRegister(false);
        if(res.data.empty == true){
          Alert.alert("Please complete the information");
        }
        else{
          if(res.data.match == true){
            Alert.alert("Phone Number already exists");
          }else{
            if (res.data.result == true) {
              Alert.alert('Success',"Successful registration",[
                {text:"Yes",onPress:()=>navigation.navigate("Shoplogin")}
              ]);
            }
          }
        }
        
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    if(isRegister==true){
      register();
    }
    
  }, [isRegister])
  
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.logo2} source={require('../image/logo2.png')}/>
    <Text style={styles.regis}>ลงทะเบียนร้านค้า</Text>
    <Text style={styles.text}>ชื่อร้านค้า</Text>
    <TextInput 
      style={styles.shopname}
      onChangeText = {(store_name)=>setStoreName(store_name)}
    />

    <Text style={styles.text}>ชื่อผู้ใช้</Text>
    <TextInput 
      style={styles.name}
      onChangeText = {(username)=>setUserName(username)}
    />

    <Text style={styles.text}>สแกนบัตรประจำตัวประชาชน</Text>
    <TextInput 
      style={styles.idcard}
      onChangeText = {(id_card)=>setIdCard(id_card)}
      keyboardType = "numeric"
    />

   <Text style={styles.text}>เบอร์โทรศัพท์</Text>
    <TextInput 
      style={styles.phonenumber}
      onChangeText = {(phonenumber)=>setPhoneNumber(phonenumber)}
      keyboardType = "numeric"
   />

    <Text style={styles.text}>รหัสผ่าน</Text>
    <TextInput 
      style={styles.password}
      onChangeText = {(password)=>setPassword(password)}
   />

    <View style={styles.register}>
        <Button title="ลงทะเบียน"color="black"
          onPress={()=> setIsRegister(true)}>  
        </Button>   
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
  },
  regis : {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:20,
    color: 'black'
  },
  shopname : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 50,
    borderRadius:10
  },
  name : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:50,
    borderRadius:10
  },
  idcard : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:50,
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
    borderRadius:10
  },
  phonenumber : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:50,
    borderRadius:10
  },
  text : {
    marginLeft:50,
    fontSize:18,
    color: 'black'
  },
  register : {
    marginBottom:120,  
    justifyContent: 'center',
    marginHorizontal:120,
    backgroundColor: "#FF6600",
    width:160,
    marginLeft:110,
    borderRadius:10,
    height:50
  },
  
});

export default Register;