import React, {useEffect} from "react";
import {ImageBackground, StyleSheet,View,Button,Image,ScrollView,Platform,Text, Alert} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import axios from "axios";
import { useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { err } from "react-native-svg/lib/typescript/xml";
 
const Notification = ({navigation}) => {
  const route = useRoute();
  const [productid,setProductId] = React.useState(route.params.productid);
  const [storeid,setStoreId] = React.useState(route.params.storeid);
  const [cusid,setCusId] = React.useState(route.params.cusid);
  const [listproduct,setListProduct] = React.useState([]);
  const [date,setDate] = React.useState(new Date());
  const [time,setTime] = React.useState(new Date());
  const [text,setText] = React.useState('Empty');
  const [mode,setMode] = React.useState('date');
  const [show,setShow] = React.useState(false);
  const [dateshow, setDateShow] = React.useState(false);
  const [timeshow, setTimeShow] = React.useState(false);
  const [dateformat, setdateformat] = React.useState("");
  const [timeformat, settimeformat] = React.useState("");
  const [issave, setissave] = React.useState(false);
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateShow(Platform.OS === 'ios');
    setTimeShow(currentDate);

    var tempDate = new Date(currentDate);
    var fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    var fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)
    setdateformat(fDate)
    settimeformat(fTime)

    //console.log(fDate + '(' + fTime +')')
    
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  useEffect(() => {
    const notification = async()=> {
      //console.log(cusid)
      axios.post(
        "http://localhost/ReminderApp/showproduct.php?storeid="+storeid+"&cusid="+cusid,
        /*JSON.stringify({
          storeid:storeid,
          // productid:productid,
          cusid:cusid,
        })*/
      )
      .then((res)=>{
        //console.log(res.data)
        setListProduct(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    notification();
    if(issave==true){
      updatetime();
    } 
    
  }, [issave])

  const updatetime = ()=> {
    
    axios.post(
      "http://localhost/ReminderApp/updatetime.php?storeid="+storeid+"&cusid="+cusid+"&date="+dateformat+"&time="+timeformat
    )
    .then((res)=>{
      setissave(false);
      if(res.data.result==true){
        Alert.alert("","Succeed",[
          {text:"OK",onPress:()=>navigation.navigate("Store")}
        ])
      }
      else if(res.data.result==false){
        Alert.alert("Unsucceed")
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
    return (
  <NavigationContainer style={styles.container} independent={true}>
    <ImageBackground source={require('../image/bg2.png')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.noti} source={require('../image/noti3.png')}/>
    <View style= {styles.datetimecontainer}>
    <View slyle= {styles.datebtn}>
    <Button title="Show Date Picker" onPress={() => showMode('date')}/>
    </View>
    <View slyle= {styles.timebtn}>
    <Button title="Show Time Picker" onPress={() => showMode('time')}/>
    </View> 
      {show && (
        <DateTimePicker
          testID="dateTimepicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display='default'
        /> 
      )}
    </View>

    <ScrollView style={styles.product}>
      {listproduct.map((item,key)=>
      <>
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
    </ScrollView>
    <View style={styles.save}>
        <Button title="บันทึก" color="black"
          onPress={()=> setissave(true)}>  
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
  noti: {
    marginBottom:500,
    height:160,
    width:390,
    marginEnd:20,
  },
  listnoti: {
    height:413,
    width:330,
    marginLeft:40,
    marginTop:30
  },
  save: {
    marginHorizontal:140,
    marginBottom:100,
    backgroundColor:"#FF6600",
    borderRadius:10,
    padding:3
  },
  name: {
  
    height:20,
    marginLeft:50,
  },
  type: {
    height:30,
    marginLeft:35,
  },
    price: {
    height:80,
    marginLeft:60,
  },
  product: {
    width:150,
    height:380,
    marginLeft:10,
    position: 'absolute',
    marginBottom:20
  },
  datetimecontainer: {
    position: 'absolute',
    top: 150,
    right: 20, 
  },
  datebtn:{
    borderColor: "white",
    borderWidth: 20,
    backgroundColor: "red"
  } 
});

export default Notification;

