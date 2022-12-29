import React from "react";
import {ImageBackground, StyleSheet,Text,Button,Image,View,TextInput, SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
 
const Stock = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>
    <Text style={styles.heading}>คลังสินค้า</Text>
    <Image style= {styles.search} source={require('../image/search.png')}/>

    <Image style= {styles.product} source={require('../productsimage/bestsellerproductimage/product1.png')}/>
    
    <SafeAreaView style={styles.input}>
    <Text style={styles.text}>ชื่อสินค้า</Text>
    <TextInput 
      style={styles.productname}
      value={text} />

    <Text style={styles.text}>สินค้าคงเหลือ</Text>
    <TextInput 
      style={styles.inventories}
      value={text} />

    <Text style={styles.text}>เพิ่ม-ลบ สินค้า</Text>
    <TextInput 
      style={styles.addremove}
      value={text} />
    </SafeAreaView>

    <View style={styles.save}>
        <Button title="บันทึก"color="#ff4500"
          onPress={()=> navigation.navigate("ShopProfile")}>  
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
  heading : {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:30,
    marginTop:20,
    color: 'black'
  },
  search : {
    marginLeft:27,
    marginTop:40,
    width:360,
    height:62,
    marginBottom:30
  },
  save: {
    justifyContent:'center',
    marginTop:30,
    marginHorizontal:130,
    marginBottom:100
  },
  product: {
    width:140,
    height:150,
    marginLeft:40,
    position : "absolute",
  },
  productname : {
    fontSize:18,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:40,
  },
  inventories : {
    fontSize:18,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:40,
  },
  addremove : {
    fontSize:18,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:40,
  },
  text : {
    marginLeft:40,
    fontSize:20,
    color: 'black'
  },
  input: { 
    position : "relative",
    marginLeft: 170,
    marginBottom:50
  },
});

export default Stock;

