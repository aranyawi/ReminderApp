import React from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,TextInput,Button,View,Image} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UselessTextInput = (props) => {
   
    return (
      <TextInput
        {...props}
        editable
        maxLength={150}
      />
    );
  }

const Profile = ({navigation}) => {
  async function logout(){
    try {
    await AsyncStorage.clear()
    navigation.navigate("Home");
    } catch (error) {
      console.log(error)
    }
  }
  const [text,value] = React.useState(null);
  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.profile} source={require('../image/profile.png')}/>

    <Text style={styles.text1}>ชื่อ-นามสกุล</Text>
    <TextInput 
      style={styles.name}
      value={text} />

    <Text style={styles.text2}>เบอร์โทรศัพท์</Text>
    <TextInput 
      style={styles.phone}
      value={text}
      keyboardType="numeric" />

    <Text style={styles.text3}>ที่อยู่</Text>
    <UselessTextInput
        style={styles.address}
        value={value} 
        multiline
        numberOfLines={10}/>

    <View style={styles.save}>
        <Button title="บันทึก"color="black"
          onPress={()=> navigation.navigate("Store")}>  
        </Button>   
        </View>
    
    <View style={styles.logout}>
        <Button title="ออกจากระบบ"color="black"
          onPress={logout}>  
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
  profile: {
    width:395,
    height:170,
    marginTop:110
  },
  name : {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 60,
    fontSize:20,
    borderRadius:10
  },
  phone : {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
    marginBottom:10,
    fontSize:20,
    borderRadius:10
  },
  address : {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
    marginBottom:30,
    fontSize:20,
    marginTop:10,
    borderRadius:10
  },
  text1 : {
    marginLeft:60,
    fontSize:20,
    marginTop:20,
    color: 'black',
  },
  text2 : {
    marginLeft:60,
    fontSize:20,
    color: 'black',
  },
  text3 : {
    marginLeft:60,
    fontSize:20,
    color: 'black',
  },
  save : {
    marginBottom:20,  
    justifyContent: 'center',
    marginHorizontal:140,
    borderRadius:10,
    alignItems:"center",
    backgroundColor: "#FF6600",
  },
  logout : {
    marginBottom:180,  
    marginHorizontal:130,
    alignItems:"center",
    borderRadius:10,
    backgroundColor: "#FF6600",
  }
});

export default Profile;