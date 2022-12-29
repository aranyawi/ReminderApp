import React, {useEffect} from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,TextInput,Button,View,Image, Alert } from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddProduct = ({navigation}) => {
  const route = useRoute();
  const [phone,setPhone] = React.useState(""); 
  const [barcode, setBarCode] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const [productname, setProductName] = React.useState("");
  const [type_product, setType_Product] = React.useState("");
  const [product_price, setProduct_Price] = React.useState(0.0);
  const [isSave, setIsSave] = React.useState(false);
  useEffect(() => {
    getphonenumber();
    const addproduct = async()=> {
      axios.post(
        "http://localhost/ReminderApp/addproduct.php",
        JSON.stringify({
          product_name:productname,
          product_barcode:barcode,
          product_picture:picture,
          product_type:type_product,
          product_price:product_price,
          phone:phone,
        })
      )
      .then((res)=>{
        console.log(phone);
        setIsSave(false);
        if(res.data.empty == true){
          Alert.alert("Please complete the information");
        }
        else{
          if(res.data.result == true){
            Alert.alert('Success',"Product added successfully",[
              {text:"OK",onPress:()=>navigation.navigate("ShopProfile",{
                phonenumber:phone
              })}
            ]);
          }else if(res.data.result == false){
            Alert.alert("Failed to save data");
          }
        }
        
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    if(isSave==true){
      addproduct();
    }
    
  }, [isSave])
  async function getphonenumber(){
    try {
    var phonenumber=await AsyncStorage.getItem("phonenumber")
    setPhone(phonenumber)
    } catch (error) {
      console.log(error)
      
    }
  }
  
  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>

    <Text style={styles.text}>ScanBarcode</Text>
    <TextInput 
      style={styles.scanbarcode}
      onChangeText = {(barcode)=>setBarCode(barcode)}
      />

    <Text style={styles.text}>รูปถ่ายสินค้า</Text>
    <TextInput 
      style={styles.picture}
      onChangeText = {(picture)=>setPicture(picture)}
      />

    <Text style={styles.text}>ชื่อสินค้า</Text>
    <TextInput 
      style={styles.productname}
      onChangeText = {(productname)=>setProductName(productname)}
      />

    <Text style={styles.text}>ประเภทสินค้า</Text>
    <TextInput 
      style={styles.producttype}
      onChangeText = {(type_product)=>setType_Product(type_product)}
      />

    <Text style={styles.text}>ราคา</Text>
    <TextInput 
      style={styles.price}
      keyboardType="numeric" 
      onChangeText = {(product_price)=>setProduct_Price(product_price)}
      />

    <View style={styles.save}>
        <Button title="บันทึก"color="#ff4500"
          onPress={()=> setIsSave(true)}> 
        </Button>   
        </View>
    </ImageBackground> 
  </SafeAreaView>
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
  scanbarcode : {
    fontSize:18,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  picture : {
    fontSize:18,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  productname : {
    fontSize:18,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  producttype : {
    fontSize:18,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  price : {
    fontSize:18,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  text : {
    marginLeft:50,
    fontSize:22,
    color: 'black'
  },
  save : { 
    justifyContent: 'center',
    marginHorizontal:110,
    marginTop:20
  }
});

export default AddProduct;