import React, { useEffect } from "react";
import {ImageBackground, StyleSheet,TouchableOpacity,ScrollView,Image,TextInput,View,Button,Alert,Text} from "react-native";
import {NavigationContainer } from '@react-navigation/native';
import axios from "axios"
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const im = require('../image/store1.png');
 
const Store = ({navigation}) => {
  const route = useRoute();
  const [text,onChangeText] = React.useState(""); 
  const [stores,setStore] = React.useState([]);
  // const [phone,setPhone] = React.useState(route.params.phonenumber);
  useEffect(()=>{
    getstore();
  },[]);
  function getstore(){
    axios.get("http://localhost/ReminderApp/store.php")
    .then(function(res){
      let data = res.data;
      setStore(data)
    });

  }

  function getImageSource(img){
    console.log(img);
    let imageSrc = {
      uri: 'http://localhost/ReminderApp/'+img
    }
    return imageSrc;
  }

  function searchstore(){

    var storeall=["เป็นใหญ่","กุ้กๆ","ไก่","เมี๊ยว"];
    if(storeall.includes(text)==true){
      Alert.alert("เป็นใหญ่")
    
    }
    else{
      Alert.alert("ไม่พบ")
    }
  }
  return (
    // <View>
    // <NavigationContainer style={styles.container} independent={true}>
      <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
        <Image style= {styles.subtract} source={require('../image/subtract.png')}/>
        <TextInput style= {styles.search} placeholder="Search" onChangeText={onChangeText} value={text}/> 
        <Button title="Search" onPress={searchstore} />    

        <ScrollView>
          {stores.map((store,key)=>
          <>
          <Text key={key} >{store.name_store} </Text>
          <Text key={key} >{store.picture_store}</Text>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Store2',{
            storeid:store.id
          })} key={key}>
          <Image style= {styles.store} source={getImageSource(store.picture_store)}/>

           
           </TouchableOpacity>
          </> 
          )}        
          {/* <Image style= {styles.store} source={require('../image/store2.png')}/>
          <Image style= {styles.store} source={require('../image/store3.png')}/> */}
        
        </ScrollView>
      </ImageBackground>
    // </NavigationContainer>
      // </View>
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
    width:350,
    height:50,
    marginLeft:15,
    marginBottom:28,
    marginTop:60
  },
  search: {
    width:250,
    height:40,
    marginLeft:65,
    backgroundColor:"white",
    borderRadius:10,
    padding:10
  },
  store : {
    width:320,
    height:190,
    marginLeft: 36,
    marginTop:20,
    

  },
});

export default Store;

