import { Text, View, ScrollView, Pressable, Image, StyleSheet, AppState, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from 'expo-router'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from "expo-font";

const {screenWidth, screenHeight} = Dimensions.get('window');

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
      if (!plant_name) {
        return;
      }
      if (plant_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        plantsArr.push(
          <Pressable key={plant_name} onPress={() => router.push({ pathname: "/screens/plant_locked", params: { plant: plant_name } })}
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <View style={[styles.plantBox, {position: 'relative'}]}>
              <Image height={100} width={100} style={{ height: '100%', width: '100%', borderRadius: 10 }} source={{ uri: plant_image }} />
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center',backgroundColor: 'rgba(0,0,0,0.3)', width: 190, height: 40, transform: "translateY(-10px)"}}>
              <Text style={{textTransform: 'capitalize', textAlign: 'center', color: 'rgba(255,255,255,0.8)'}}>{plant_name}</Text>
            </View>
          </Pressable>
        );
      }
    }
    
    // Return message if no plants found
    if (plantsArr.length === 0) {
      return (
        <View style={styles.noPlantsText}>
          <Text>You currently have no plants found yet. Capture some and you'll see them here!</Text>
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
    backgroundColor: "#E3FFE5" //The middle of the backround
  },
  noPlantsText: {
    width: 350,
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
    fontFamily: 'JetBrains',
    fontSize: 28,
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
    
    width: 360,
    height: 45,
    
    paddingLeft: 10,

    backgroundColor: 'gray',
    
  },
  searchTextInput: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 20,
    width: 340
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
    
    flexWrap: 'wrap',
    backgroundColor: "#E3FFE5", //Color for the backround bottom of the app

    width: 400,
    paddingBottom: 200,
    minHeight: 1000,

    marginTop: 15,
  },

  plantBox: {
    borderWidth: 1,
    width: 190, 
    height: 190,
    borderColor: "#BDFFC2",

    backgroundColor: '#555555',
    borderRadius: 10,

    marginBottom: -40,

  }

})
