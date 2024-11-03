import { TouchableOpacity, Text, View, ScrollView, TextInput, Pressable, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react'; 
import { useFonts } from "expo-font";
import {router} from 'expo-router'

import {ImageView} from '@/components/ImageView.js'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {plantData} from "@/assets/plant_data/json_data/0_combined_plants.js"

const {screenWidth, screenHeight} = Dimensions.get('window');
const populatePlants = (searchTerm) => {
  let plantsArr = [];
  for (let plant in plantData) {
    const commonName = plant.replace(/_/g, " ");

    // Filter plants based on the search term
    if (commonName.toLowerCase().includes(searchTerm.toLowerCase())) {
      let src = ImageView[commonName.toLowerCase()]

      const newPlant = (
        <TouchableOpacity 
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
          <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center',backgroundColor: 'rgba(0,0,0,0.5)', width: 160, height: 40, transform: "translateY(-10px)"}}>
            <Text style={{textTransform: 'capitalize', textAlign: 'center', color: 'rgba(255,255,255,0.9)'}}>{commonName}</Text>
          </View>
        </TouchableOpacity>
      );

      if (src) {
        plantsArr.push(newPlant);
      }
    }
  }

  return plantsArr;
};

export default function home() {
  const [searchTerm, setSearchTerm] = useState(''); // Initializing state
  const [loaded, error] = useFonts({
    'JetBrains': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
  });
  return (
  <View style={{flex: 1}}>

    <View style={[styles.headerContainer, {backgroundColor: "#E3FFE5"}]}>
      <Text style={[styles.headerText, {fontFamily: 'JetBrains'}]}>All Plants</Text>
    </View>
    <ScrollView style={{backgroundColor: "#E3FFE5"}}>
      <View style={[styles.webContainer]}>
        
        <View style={[styles.searchContainer]}>
          <View style={[styles.searchBar, {backgroundColor: '#BDFFC2'}, {borderColor: "#BDFFC2"}]}> 
          <FontAwesome name="search" size={20} color="black" opacity={0.7} />
            <TextInput
                  style={[styles.searchTextInput]}
                  placeholder="Search for plants..."
                  onChangeText={setSearchTerm} // Call setSearchTerm here
                  value={searchTerm}
                  placeholderTextColor="black"
                  color = 'black'
           />
            </View>
          {/* <Pressable style={({pressed}) => [({opacity: pressed ? 0.5 : 1}), styles.sortButton]}> //Got rid of the sort button for now
            <Text>Sort</Text>
          </Pressable> */} 
        </View>

        <View style={[styles.mainBody, {backgroundColor: "#E3FFE5"}]}>
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
    backgroundColor: "#E3FFE5", //The middle of the backround
    width: screenWidth,
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
    marginTop: 'auto',
    marginBottom: 15,
    
  },
  searchContainer: {
    width: '95%',

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
    
    width: '100%',
    height: 45,
    
    paddingLeft: 10,

    backgroundColor: 'gray',
    
  },
  searchTextInput: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 20,
    width: '100%'
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
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: "#E3FFE5", //Color for the backround bottom of the app

    width: '95%',
    paddingBottom: 200,
    minHeight: 1000,
    marginTop: 15,
  },

  plantBox: {
    borderWidth: 1,
    width: 160, 
    height: 160,
    borderColor: "#BDFFC2",

    backgroundColor: '#555555',
    borderRadius: 10,
    marginBottom: -40,
    marginTop: 10,
  }

})
