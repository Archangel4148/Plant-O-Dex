import { Text, View, ScrollView, TextInput, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react'; 
import {ImageView} from '@/components/ImageView.js'
import {plantData} from "@/assets/plant_data/json_data/0_combined_plants.js"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from "expo-font";


export default function home() {
  const [user, setUser] = useState({foundPlants: [],})
  const [searchTerm, setSearchTerm] = useState(''); // Initializing state
  const [loaded, error] = useFonts({
    'JetBrains': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
  });
  
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userObject');
      setUser((jsonValue != null) ? JSON.parse(jsonValue) : {foundPlants: [],});
    } catch (e) {
      // error reading value
    }
  };


  const populatePlants = (searchTerm) => {
    let plantsArr = [];
  
    for (let plant in plantData) {
      const commonName = plantData[plant]["Common Name"];
  
      // Filter plants based on the search term
      if (commonName.toLowerCase().includes(searchTerm.toLowerCase())) {
        let src = ImageView[commonName.toLowerCase()]
  
        const newPlant = (
          <Pressable 
            key={commonName} 
            onPress={() => { router.push({
              pathname: "/screens/plant_locked", params: {plant: commonName}
            }); 
          }} 
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <View style={styles.plantBox}>
              <Image 
                height={100} 
                width={100} 
                style={{ height: '100%', width: '100%', borderRadius: 10,}} 
                source={src} 
              />
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center',backgroundColor: 'rgba(0,0,0,0.3)', width: 190, height: 40, transform: "translateY(-10px)"}}>
              <Text style={{textTransform: 'capitalize', textAlign: 'center', color: 'rgba(255,255,255,0.8)'}}>{commonName}</Text>
            </View>
          </Pressable>
        );
  
        if (src && user["foundPlants"].includes(commonName.toLowerCase())) {
          plantsArr.push(newPlant);
        }
      }
    }
    if (plantsArr.length == 0) {
      return <View style={{color: 'rgba(255,255,255,0.7)', textAlign: 'center', width: 300}}>
          <Text style={{color: 'rgba(0,0,0,0.7)', fontSize: 20 }}>You currently have no plants found yet. Find some and you'll see them here!</Text>
        </View>
    }
  
    return plantsArr;
  };

  useFocusEffect(
    useCallback(() => {
      getUser()

      return () => {
      }
    }, [])
  );

  useEffect(() => {
    getUser()
  }, [])
  return (
  <View>

    <View style={[styles.headerContainer, {backgroundColor: "#E3FFE5"}]}>
      <Text style={styles.headerText}>{user["foundPlants"].length}/ 94 Collected</Text>
    </View>
    <ScrollView style={{backgroundColor: "#E3FFE5"}}>
      <View style={styles.webContainer}>

        <View style={styles.mainBody}>
        {populatePlants(searchTerm)}
        </View>
      </View>
    </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
  webContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    backgroundColor: "#E3FFE5" //The middle of the background
  },
  headerContainer: {
    backgroundColor: '#d2d3db',
    borderRadius: 10,

    width: '100%',
    height: 100,

    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center'
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'JetBrains',
    marginTop: 'auto',
    marginBottom: 15,
    
  },
  searchContainer: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  
  },
  searchBar: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 70,

    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    
    width: 270,
    height: 45,
    
    paddingLeft: 10,

    backgroundColor: 'gray',
    
  },
  searchTextInput: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 20,
    width: 240,
  },

  sortButton: {
    width: 60,
    height: 50,
    
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  mainBody: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    
    alignItems:'center',
    flexWrap: 'wrap',
    backgroundColor: "E3FFE5", //Color for the backround bottom of the app

    width: 400,
    paddingBottom: 200,
    minHeight: 700,

    marginTop: 15,
  },

  plantBox: {
    width: 170, 
    height: 170,
    borderColor: "#FCEAFF",
    borderWidth: 0,
    width: 190, 
    height: 190,
    borderColor: "#f3a8ff",

    backgroundColor: '#555555',
    borderRadius: 10,
    marginBottom: -40,

  }

})
