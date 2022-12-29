import React, {useEffect} from "react";
import {ImageBackground, StyleSheet,ScrollView,Image,TouchableOpacity,View,Text,Alert} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import axios from "axios";
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

 
const Products = ({navigation}) => {
  const route = useRoute();
  const [storeid,setStoreId] = React.useState(route.params.storeid);
  const [listproduct,setListProduct] = React.useState([]);
  const [cusid,setCusid] = React.useState(0);

  useEffect(() => {
    const allproducts = async()=> {
      axios.post(
        "http://localhost/ReminderApp/allproducts.php?storeid="+storeid,
      )
      .then((res)=>{
        setListProduct(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    allproducts(); 
    
  }, [])
  const addproduct=async(id)=>{
    try {
      var phonenumber=await AsyncStorage.getItem("phonenumber")
    } catch (error) {
    }
  
    axios.post(
      "http://localhost/ReminderApp/addtonoti.php?productid="+id+"&storeid="+storeid+"&phonenumber="+phonenumber,
    
    )
    .then((res)=>{
      if(res.data.match==true){
        Alert.alert("This product already exist");
      }
      else if(res.data.result==true){
        setCusid(res.data.customerid);
        navigation.navigate("Notification",{
          productid:id,
          storeid:storeid,
          cusid:res.data.customerid,
        });
      }
      else if(res.data.result==false){
        Alert.alert("Error");
      }

    })
    .catch((err)=>{
      console.log(err);
    })
    
  }
    return (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.allproducts} source={require('../image/all1.png')}/>
    <Image style= {styles.search} source={require('../image/search.png')}/>
    <ScrollView>
      {listproduct.map((item,key)=>
      <>
    
    <TouchableOpacity style={styles.pic} onPress={()=>addproduct(item.id)}>
    <Image style= {styles.product1} source={require('../productsimage/product1.png')}/>
      </TouchableOpacity>
      <Text style={styles.name}>
        {item.product_name}
      </Text>
      <Text style={styles.type}>
        {item.product_type}
      </Text>
      <Text style={styles.price}>
        {item.product_price}
      </Text>
      </>
      )}

    {/* <Image style= {styles.product2} source={require('../productsimage/product2.png')}/>
    <Image style= {styles.product3} source={require('../productsimage/product3.png')}/>
    <Image style= {styles.product4} source={require('../productsimage/product4.png')}/>
    <Image style= {styles.product5} source={require('../productsimage/product5.png')}/>
    <Image style= {styles.product6} source={require('../productsimage/product6.png')}/> */}
    </ScrollView>
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
  allproducts: {
    width:390,
    height:135,
    marginBottom:20
  },
  search: {
    width:350,
    height:60,
    marginLeft:30,
    marginBottom:10
  },
  product1: {
    width:150,
    height:160,
    marginLeft:40,
    marginBottom:20,
    
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
  name: {
    height:30,
    marginLeft:90, 
  },
  type: {
  height:30,
  marginLeft:80,
},
  price: {
  height:30,
  marginLeft:100,
},
  
});

export default Products;

