import React from "react";
import {ImageBackground, StyleSheet, Text, SafeAreaView,ScrollView,Button,View,Image } from "react-native";

const Shopcondition = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.logo2} source={require('../image/logo2.png')}/>
        <Text style={styles.shopcondition}>เงื่อนไขการลงทะเบียน</Text>
        <ScrollView style={styles.scrollView}>
    <Text style={styles.text}>1) ลงทะเบียนการใช้งานหรือชื่อผู้ใช้งาน และ ตั้งรหัสผ่าน โดยให้รายละเอียดเกี่ยวข้องกับท่าน อย่างถูกต้อง สมบูรณ์ และเป็นจริง ซึ่งในการลงทะเบียน บริษัทฯมีความจำเป็นให้ท่านแจ้งและระบุรายละเอียดข้อมูลส่วนบุคคลเพื่อใช้ประกอบการระบุตัวตน ซึ่งจะป้องกันการเข้าถึงข้อมูลของท่านโดยบุคคลที่ไม่ได้รับอนุญาต และ เพื่อให้การบริการมีประสิทธิภาพและเหมาะสม</Text>
    <Text style={styles.text}>2) ปรับปรุงบัญชีผู้ใช้งานหรือชื่อผู้ใช้งานให้ถูกต้องและตรงต่อความเป็นจริงในปัจจุบันเสมอ รับผิดชอบการใช้บัญชีผู้ใช้งานหรือชื่อผู้ใช้งาน  และ แจ้งบริษัทฯทันทีเมื่อพบว่ามีบุคคลอื่นใช้บัญชีผู้ใช้งานหรือชื่อผู้ใช้งานของท่านโดยไม่ได้รับอนุญาต</Text>
    <Text style={styles.text}>3) บรรดาชื่อทางการค้า ชื่อสินค้า เครื่องหมายการค้า เครื่องหมายบริการ และเครื่องหมายอื่น ๆ รวมถึงทรัพย์สินทางปัญญาอื่นใดที่ปรากฏในเว็บไซต์นี้ นอกเหนือจากสิ่งที่เป็นทรัพย์สินทางปัญญาของออนไลน์ แอสเซ็ท ซึ่งได้ถูกนำมาเรียบเรียงหรือจัดให้มีขึ้นเพื่อใช้เป็นส่วนประกอบของเว็บไซต์นี้ มีขึ้นเพื่อวัตถุประสงค์ในการตกแต่งรูปลักษณ์ของเว็บไซต์ โดยออนไลน์ แอสเซ็ทในฐานะผู้ให้บริการเว็บไซต์ไม่ได้มีเจตนาที่จะกระทำการใด ๆ อันเป็นการละเมิดสิทธิในทางการค้าหรือทรัพย์สินทางปัญญาของผู้ใด เว้นแต่มีข้อความระบุไว้เป็นอย่างอื่นในเว็บไซต์นี้</Text>
    </ScrollView>
    <View style={styles.button}>
        <Button title="ยินยอม"  color="#000000"
            onPress={()=> navigation.navigate("ShopMap")}>  
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
  shopcondition : {
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
    marginBottom:10,
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
    marginTop:20,
    backgroundColor: "#FF6600",
    width:110,
    height:50,
    marginLeft:140,
    borderRadius:10,
    marginBottom:20,
    alignItems:"center"
  },
  logo2: {
    width:300,
    height:100,
    marginLeft:70,
    marginTop:50
  },
});

export default Shopcondition;