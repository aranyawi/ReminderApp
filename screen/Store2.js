import React, {useEffect} from "react";
import {ImageBackground, StyleSheet,Image,View,Button,Text, Alert} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from "axios";

const Store2 = ({navigation}) => {
  const route = useRoute();
  const [storeid,setStoreId] = React.useState(route.params.storeid);
  const [picstore,setPicstore] = React.useState("");
  const [namestore,setNamestore] = React.useState("");
  useEffect(() => {
    const store2 = async()=> {
      axios.post(
        "http://localhost/ReminderApp/storespec.php",
        JSON.stringify({
          storeid:storeid,
        })
      )
      .then((res)=>{
      setPicstore(res.data[0].picture_store);
      setNamestore(res.data[0].name_store);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    store2(); 
    
  }, [])
  function getImageSource(img){
    let imageSrc = {
      uri: 'http://localhost/ReminderApp/'+img
    }
    return imageSrc;
  }
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.subtract} source={require('../image/subtract.png')}/>
      <Text>
        {namestore}
      </Text>  
    <Image style= {styles.store} source={getImageSource(picstore)}/>    
    <View style={styles.products}>
        <Button title="สินค้าทั้งหมด" color="black"
          onPress={()=> navigation.navigate("Products",{
            storeid:storeid
          })}>  
        </Button>   
        </View>
        <View style={styles.history}>
        <Button title="ประวัติการซื้อ"  color="black"
          onPress={()=> props.navigation.navigate("History")}>  
        </Button> 
        </View>  
      
    </ImageBackground>
    </NavigationContainer>
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
  subtract: {
    marginLeft:30,
    marginBottom:40,
    marginTop:120,
    width:350,
    height:50,
  },
  store : {
    width:360,
    height:210,
    marginLeft: 16,
    marginBottom:30
  },
  products : {
    justifyContent:'center',
    marginTop:20, 
    marginBottom:20, 
    marginHorizontal:50,
    backgroundColor: "#FF6600",
    width:160,
    marginLeft:110,
    borderRadius:10,
  },
  history : {
    marginBottom:330,  
    justifyContent: 'center',
    marginHorizontal:50,
    backgroundColor: "#FF6600",
    width:160,
    marginLeft:110,
    borderRadius:10,
  },
});

export default Store2;

