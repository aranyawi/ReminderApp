// import {NativeBaseProvider} from 'native-base';
import { Dimensions, StyleSheet, Button, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import { enableLatestRenderer } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import React, {useEffect} from "react";



enableLatestRenderer();

const Map = ({navigation}) => {
    const [currentLongitude, setCurrentLongitude] = React.useState('...');
    const [currentLatitude, setCurrentLatitude] = React.useState('...');
    const [locationStatus, setLocationStatus] = React.useState('');
    const [region,setRegion] = React.useState('0.0');


    useEffect(()=>{
        const requesLocationPermission = async()=>{
            getOneTimeLocation();
            subeCribeLocation();
        }
        requesLocationPermission();
        return()=>{
            Geolocation.clearWatch(watchID);
        }
    },[]);
    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        
        Geolocation.getCurrentPosition((position) => {
            setLocationStatus('You are Here');
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude =  JSON.stringify(position.coords.latitude);
            setCurrentLongitude(currentLongitude);
            setCurrentLatitude(currentLatitude);
            // console.log(currentLongitude);
            // console.log(currentLatitude);
            setRegion({
                latitude: 8.64163667008173,
                longitude: 99.89741567888476,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            });
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 1000
          },
        );
      };
      const subeCribeLocation = () => {
        watchID = Geolocation.watchPosition((position) => {
            setLocationStatus('You are Here');
            // console.log(position); 
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            setCurrentLongitude(currentLongitude);
            setCurrentLatitude(currentLatitude);
            console.log(currentLatitude);
            console.log(currentLongitude);

            setRegion({
                latitude: 8.64163667008173,
                longitude: 99.89741567888476, 
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            });
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };
    
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
                    onRegionChange={(region)=>setRegion(region)}
                >
                    <Marker
                        coordinate={{latitude:8.64163667008173,longitude:99.89741567888476}}
                    />
                </MapView>
            </View>
            <View style={styles.Enter}>
            <Button title="ตกลง" color="#000000"
          onPress={()=> navigation.navigate("Tabs")}>  
        </Button>   
        </View>
        <View style={styles.Refresh}>
            <Button
              title="Refresh" color="#000000"
              onPress={getOneTimeLocation}
            />
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
        marginBottom:10,
        width:110,
        height:40,
        marginLeft:140,
        borderRadius:10,
        alignItems:"center",
        backgroundColor: "#FF6600",
    },
    Refresh: {
        marginBottom:40,
        width:110,
        height:40,
        marginLeft:140,
        borderRadius:10,
        backgroundColor: "#FF6600",
    },
})

export default Map;