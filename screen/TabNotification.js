import React from "react";
import {ImageBackground, StyleSheet,View,Button,Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

 
const TabNotification = () => {
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.noti} source={require('../image/noti.png')}/>
    <Image style= {styles.listnoti} source={require('../image/listnoti.png')}/>
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
  noti: {
    height:85,
    width:411,
    marginTop:20
  },
  listnoti: {
    height:413,
    width:330,
    marginLeft:40,
    marginTop:30,
    marginBottom:102
  },
});

export default TabNotification;

