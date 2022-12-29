import React from "react";
import {ImageBackground, StyleSheet,ScrollView,Image,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
 
const History = (props) => {
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.history} source={require('../image/history.png')}/>
    <Image style= {styles.search} source={require('../image/search.png')}/>
    <ScrollView>

    <TouchableOpacity onPress={()=> props.navigation.navigate('Notification')}>
    <Image style= {styles.product7} source={require('../productsimage/product7.png')}/>
    </TouchableOpacity>

    <Image style= {styles.product8} source={require('../productsimage/product8.png')}/>
    <Image style= {styles.product9} source={require('../productsimage/product9.png')}/>
    <Image style= {styles.product10} source={require('../productsimage/product10.png')}/>
    <Image style= {styles.product11} source={require('../productsimage/product11.png')}/>
    <Image style= {styles.product12} source={require('../productsimage/product12.png')}/>
    <Image style= {styles.product13} source={require('../productsimage/product13.png')}/>
    <Image style= {styles.product14} source={require('../productsimage/product14.png')}/>
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
    justifyContent: "center"
  },
  history: {
    width:400,
    height:100,
    marginTop:40,
    marginBottom:20
  },
  search: {
    width:350,
    height:60,
    marginLeft:30,
    marginBottom:10
  },
  product7: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product8: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginBottom:20
  },
  product9: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product10: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginTop:179
  },
  product11: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product12: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginTop:358
  },
  product13: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product14: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginTop:537
  },
});

export default History;

