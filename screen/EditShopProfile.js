import React from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,TextInput,Button,View,Image } from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={150}
    />
  );
}

const EditShopProfile = ({navigation}) => {
  const [text, value] = React.useState(null);
  return (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../image/bg3.png')} resizeMode="cover" style={styles.image}>

    <Text style={styles.text}>ชื่อร้านค้า</Text>
    <TextInput 
      style={styles.shopname}
      value={text} />

    <Text style={styles.text}>ชื่อผู้ลงทะเบียน</Text>
    <TextInput 
      style={styles.name}
      value={text} />

    <Text style={styles.text}>เบอร์โทรศัพท์</Text>
    <TextInput 
      style={styles.phone}
      value={text} 
      keyboardType="numeric" />

    <Text style={styles.text}>ที่อยู่</Text>
    <UselessTextInput
        style={styles.address}
        value={value} 
        multiline
        numberOfLines={10}/>

    <View style={styles.save}>
        <Button title="บันทึก"color="#ff4500"
          onPress={()=> navigation.navigate("ShopProfile")}>  
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
  shopname : {
    fontSize:18,
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  name : {
    fontSize:18,
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  phone : {
    fontSize:18,
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
  },
  address : {
    fontSize:18,
    height: 90,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal:60,
    marginBottom:30
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

export default EditShopProfile;