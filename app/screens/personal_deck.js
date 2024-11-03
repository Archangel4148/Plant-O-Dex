import { Text, View, ScrollView, Pressable, Image, StyleSheet, AppState } from "react-native";
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
  const [appState, setAppState] = useState(AppState.currentState);
  
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userObject');
      setUser((jsonValue != null) ? JSON.parse(jsonValue) : {foundPlants: [],});
    } catch (e) {
      // error reading value
    }
  };

  useFocusEffect(
    useCallback(() => {
      const handleAppStateChange = async (nextAppState) => {
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
          // Reload the user data whenever the app returns to the foreground
          await getUser();
        }
        setAppState(nextAppState);
      };

      // Use the new method to add the event listener
      const subscription = AppState.addEventListener('change', handleAppStateChange);

      // Cleanup function
      return () => {
        // Use the remove method on the subscription
        subscription.remove();
      };
    }, [appState])
  );
  
  // Ensure populatePlants updates when `user` changes
  useEffect(() => {
    getUser();
  }, []);

  const populatePlants = (searchTerm) => {
    let plantsArr = [];
    for (let plant of user.foundPlants) {
      const { plant_name, plant_image } = plant;
      // Filter plants based on search term
      if (plant_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        plantsArr.push(
          <Pressable key={plant_name} onPress={() => router.push({ pathname: "/screens/plant_locked", params: { plant: plant_name } })}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <View style={styles.plantBox}>
              <Image height={100} width={100} style={{ height: '100%', width: '100%', borderRadius: 10 }} source={{ uri: plant_image }} />
            </View>
            <View style={styles.plantBoxText}>
              <Text style={styles.plantBoxText}>{plant_name}</Text>
            </View>
          </Pressable>
        );
      }
    }
    
    // Return message if no plants found
    if (plantsArr.length === 0) {
      return (
        <View style={styles.noPlantsText}>
          <Text>You currently have no plants found yet. Find some and you'll see them here!</Text>
        </View>
      );
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
