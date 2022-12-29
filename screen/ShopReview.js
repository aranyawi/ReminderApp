import React from "react";
import {ImageBackground, StyleSheet,Text,Button,Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
 
const ShopReview = () => {
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>
    <Text style={styles.heading}>Reviews</Text>
    <Text style={styles.description}>Browse any reviews for you reference</Text>
    <Image style= {styles.review} source={require('../image/review.png')}/>
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
  heading : {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:20,
    marginTop:20,
    color: 'black'
  },
  description : {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:20,
    marginTop:10,
    marginBottom:20,
    color: 'black'
  },
  review: {
    height:350,
    width:361,
    marginTop:10,
    marginLeft:25,
    marginBottom:150
  },
});

export default ShopReview;

