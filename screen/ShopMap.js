// import {NativeBaseProvider} from 'native-base';
import { Dimensions, StyleSheet, Button, View, Text } from 'react-native'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



const ShopMap = ({navigation}) => {
    return (
        <>
        
        <View style={styles.container}>
               
                <MapView
                    provider={MapView.PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    //mapType={Platform.OS == "ios" ? "none" : "standard"}
                    region={{
                        latitude: 8.64163667008173,
                        longitude: 99.89741567888476,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
            <View style={styles.Enter}>
            <Button title="ตกลง" color="#000000"
          onPress={()=> navigation.navigate("ShopProfile")}/> 
        </View> 
        
    </>
    
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        marginTop:35
    },
    Enter: {
        marginHorizontal:160,
        marginBottom:60,
        width:110,
        height:40,
        marginLeft:140,
        borderRadius:10,
        alignItems:"center",
        backgroundColor: "#FF6600",
    },
   
       
})

export default ShopMap;