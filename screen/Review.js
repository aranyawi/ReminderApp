import React, {useEffect} from "react";
import {ImageBackground, StyleSheet,Text,Button,Image,ScrollView,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import axios from "axios";
 
const Review = () => {
  const [stores,setStore] = React.useState([]);
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


    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Text style={styles.heading}>Reviews</Text>
    <Text style={styles.description}>Browse any reviews for you reference</Text>
    {/* <Image style= {styles.review} source={require('../image/review.png')}/> */}
    <ScrollView>
    {stores.map((item,key)=>
          <>
          <Text>{item.name_store}</Text>
          <Text>{item.picture_store}</Text>
          
          <TouchableOpacity onPress={()=> props.navigation.navigate('Store2',{
            storeid:item.id
          })}>
          <Image style= {styles.store} source={getImageSource(item.picture_store)}/>

           
           </TouchableOpacity>
          </> 
          )}        
    </ScrollView>
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
    
  },
  heading : {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:50,
    marginTop:50,
    color: 'black'
  },
  description : {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:50,
    marginTop:10,
    marginBottom:20,
    color: 'black'
  },

  // review: {
  //   height:200,
  //   width:311,
  //   marginTop:300,
  //   marginLeft:40,
  // },
});

export default Review;

