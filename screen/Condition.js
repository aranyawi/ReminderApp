import React from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,ScrollView,Button,View,Image } from "react-native";

const Condition = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.logo2} source={require('../image/logo2.png')}/>
      <Text style={styles.condition}>เงื่อนไขการใช้งานฟรี</Text>
      <ScrollView style={styles.scrollView}>
    <Text style={styles.text}>1) การใช้งานในรูปแบบปกติ คุณจะไม่สามารถใช้ฟังก์ชันเสริม เช่น เพิ่มสินค้าลงในการแจ้งเตือนได้เกิน 7 อย่าง</Text>
    <Text style={styles.text}>2) หากคุณต้องการใช้ฟังก์ชันเสริม เพื่อตอบสนองการใช้งานที่มากกว่าเดิม สามารถสมัครสมาชิกในรูปแบบ Premium ได้</Text>
    <Text style={styles.text}>3) Reminder อาจมีการเปลี่ยนแปลงข้อกำหนดการใช้งานนี้ในบางเวลา การที่คุณเข้าถึง ถือว่าคุณยอมรับการเปลี่ยนแปลงดังกล่าว การเข้าถึงและใช้แอพพลิเคชันจะเป็นไปตามข้อกำหนดการใช้งานตามนโยบาย</Text>
    </ScrollView>
    <View style={styles.button}>
        <Button title="ยินยอม"  color="#000000"
            onPress={()=> navigation.navigate("RegisterCus")}>  
        </Button>
    </View>
    </ImageBackground> 
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  condition : {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:85,
    marginTop:20,
    color: 'black'
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal:50,
    marginTop:20,
    marginBottom:30,
    borderRadius:20
  },
  text: {
    fontSize: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    color: 'black'
  },
  button : { 
    justifyContent: 'space-between',
    marginHorizontal:120,
    backgroundColor: "#FF6600",
    width:110,
    height:50,
    marginLeft:140,
    borderRadius:10,
    marginBottom:40,
    alignItems:"center",
    
  },
  logo2: {
    width:300,
    height:100,
    marginLeft:70,
    marginTop:50
  },
});

export default Condition;