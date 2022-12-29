import React from "react";
import {ImageBackground, StyleSheet,ScrollView,Image,TouchableOpacity,Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

 
const BestSeller = () => {
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.shopprofile} source={require('../image/shopprofile.png')}/>
    <Text style={styles.bestseller}>สินค้าขายดี </Text>

    <ScrollView>
    <Image style= {styles.product1} source={require('../productsimage/bestsellerproductimage/product1.png')}/>
    <Image style= {styles.product2} source={require('../productsimage/bestsellerproductimage/product2.png')}/>
    <Image style= {styles.product3} source={require('../productsimage/bestsellerproductimage/product3.png')}/>
    <Image style= {styles.product4} source={require('../productsimage/bestsellerproductimage/product4.png')}/>
    <Image style= {styles.product5} source={require('../productsimage/bestsellerproductimage/product5.png')}/>
    <Image style= {styles.product6} source={require('../productsimage/bestsellerproductimage/product6.png')}/>
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
  shopprofile: {
    width:413,
    height:160,
    marginBottom:10
  },
  bestseller: {
    fontSize:26,
    color: 'black',
    marginLeft:140,
    marginBottom:10
  },
  product1: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product2: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginBottom:20
  },
  product3: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product4: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginTop:179
  },
  product5: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20
  },
  product6: {
    width:150,
    height:160,
    marginLeft:221,
    position: 'absolute',
    marginTop:358
  },
});

export default BestSeller;

