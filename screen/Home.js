import React, { useEffect } from "react";
import { Image,ImageBackground,StyleSheet,SafeAreaView,Button,View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({navigation}) => {
  useEffect(()=>{
    async function clear(){
      try {
        await AsyncStorage.clear();
      } catch (error) {
        console.log(error);
      }
    }
  },[]);

  return (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={styles.image}>
      <Image style= {styles.tinylogo} source={require('../image/logo.png')}/>
      <Image style= {styles.name} source={require('../image/name.png')}/>
      <Image style= {styles.names} source={require('../image/name.png')}/>
      <View style={styles.start}>
        <Button title="เริ่มต้นใช้งาน" color="#000000"
          onPress={()=> navigation.navigate("LoginCus")}>  
        </Button>   
      </View>
      <View style={styles.button}>
        <Button title="ลงทะเบียนร้านค้า"  color="#000000"
          onPress={()=> navigation.navigate("Register")}>  
        </Button>   
       </View>    
      <View style={styles.shoplogin}>
        <Button title="เข้าสู่ระบบร้านค้า"  color="#000000"
          onPress={()=> navigation.navigate("Shoplogin")}>  
        </Button>   
       </View>    
    </ImageBackground>
  </View>  
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  tinylogo: {
    width:410,
    height:300,
    marginTop:300,
  },
  name : {
    width:300,
    height:60,
    marginLeft:50,
  },
  names : {
    width:300,
    height:60,
    marginLeft:50,
  },
  start : {
    justifyContent:'center',
    marginTop:20, 
    marginBottom:20, 
    marginHorizontal:50,
    backgroundColor: "#E76F00",
    width:160,
    marginLeft:110,
    borderRadius:10,
    height:50
  },
  button : {
    marginBottom:20,  
    justifyContent: 'center',
    marginHorizontal:50,
    backgroundColor: "#E76F00",
    width:160,
    marginLeft:110,
    borderRadius:10,
    height:50
  },
  shoplogin : {
    marginBottom:330,  
    justifyContent: 'center',
    marginHorizontal:50,
    backgroundColor: "#E76F00",
    width:160,
    marginLeft:110,
    borderRadius:10,
    height:50
  },
});

export default Home;
