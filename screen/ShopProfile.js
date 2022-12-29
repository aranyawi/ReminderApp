import React, { useEffect } from "react";
import {ImageBackground, StyleSheet,TouchableOpacity,Image,Text,View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

 
const ShopProfile = ({navigation}) => {
  const route = useRoute();
  const [profile,setProfile] = React.useState([]); 
    const [phone,setPhone] = React.useState(""); 
    const [username,setUserName] = React.useState("");
    const [address,setAddress] = React.useState("");
    useEffect(()=>{
      const getphonenumber=async()=>{
        try {
        var phonenumber=await AsyncStorage.getItem("phonenumber")
        if (phonenumber!==null){
          setPhone(phonenumber)
        }
      } catch (error) {
        console.log(error)
        
      }
    }
    getphonenumber();
    getProfile();
    },[]);
    function getProfile(){
      // console.log("1"+phone)
      axios.get("http://localhost/ReminderApp/shopprofile.php")
      .then(function(res){
        setUserName(res.data.user_name)
        setAddress(res.data.address_store)
        setPhone(res.data.user_numberphone)
        // setProfile(data)
      });
    }
    
    async function logout(){
      // try {
      //   setPhone("");
      //   await AsyncStorage.multiRemove("phonenumber");
      axios.post("http://localhost/ReminderApp/logout.php?clear=1")
      .then(function(res){
        
      })
      .catch((err)=>{
        console.log(err);
      })
        navigation.navigate("Home")
    //   } catch (error) {
    //     console.log(error)
    //   }
    }
    return (
  <NavigationContainer style={styles.container} independent={true}>
   
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.containerprofile}>
         <Text style={styles.username}>
        {username}
      </Text>
      <Text style={styles.phone}>
        {phone}
      </Text>
      <Text style={styles.address}>
        {address}
      </Text>
      </View>
    
    {/* <Image style= {styles.shopprofile} source={require('../image/shopprofile.png')}/> */}
    
    <TouchableOpacity onPress={()=> props.navigation.navigate('EditShopProfile')}>
    <Image style= {styles.button} source={require('../image/editshopprofile.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> props.navigation.navigate('AddProduct')}>
    <Image style= {styles.button} source={require('../image/addproduct.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> props.navigation.navigate('ShopReview')}>
    <Image style= {styles.button} source={require('../image/shopreview.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> props.navigation.navigate('BestSeller')}>
    <Image style= {styles.button} source={require('../image/bestseller.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> props.navigation.navigate('Store2')}>
    <Image style= {styles.button} source={require('../image/storeproduct.png')}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={logout}>
    <Image style= {styles.button} source={require('../image/logout.png')}/>
    </TouchableOpacity>
    
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
    alignItems: "center",
  },
  button : {
    width:240,
    height:70,
    marginBottom:25
  },
  containerprofile: {
    alignSelf: "stretch",
    height:180,
    marginBottom:50,
    backgroundColor:"white",
    borderBottomStartRadius: 50,
  },
  username : {
    marginTop:50,
    marginLeft:290,
    marginBottom:2,
    fontWeight:"bold",
    fontSize:25,
  },
  address : {
    marginLeft:130,
    marginBottom:4,
    fontWeight:"bold",
    fontSize:15,
  },
  phone : {
    marginLeft:275,
    marginBottom:4,
    fontWeight:"bold",
    fontSize:15,
  },

});

export default ShopProfile;

