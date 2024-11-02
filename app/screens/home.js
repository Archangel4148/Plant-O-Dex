import { Text, View, ScrollView, TextInput, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react'; 
import {ImageView} from '@/components/ImageView.js'

import {plantData} from "@/assets/plant_data/json_data/0_combined_plants.js"
import FontAwesome from '@expo/vector-icons/FontAwesome';


const populatePlants = (searchTerm) => {
  let plantsArr = [];

  for (let plant in plantData) {
    const commonName = plantData[plant]["Common Name"];

    // Filter plants based on the search term
    if (commonName.toLowerCase().includes(searchTerm.toLowerCase())) {
      // let src = require(`@/assets/plant_data/images/` + 
      //   commonName.toLowerCase().replace(" ", "_") + '.png');
      let src = ImageView[commonName.toLowerCase()]

      const newPlant = (
        <Pressable 
          key={commonName} 
          onPress={() => { console.log(commonName); }} 
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
          <View style={styles.plantBox}>
            <Image 
              height={100} 
              width={100} 
              style={{ height: '100%', width: '100%', borderRadius: 10,}} 
              source={src} 
            />
          </View>
        </Pressable>
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

  return (
  <View>

    <View style={[styles.headerContainer, {backgroundColor: "#f7c5ff"}]}>
      <Text style={styles.headerText}>Plant Page</Text>
    </View>
    <ScrollView style={{backgroundColor: "#f7c5ff", minHeight: 800}}>
      <View style={styles.webContainer}>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
          <FontAwesome name="search" size={20} color="white" opacity={0.7} />
            <TextInput
                  style={styles.searchTextInput}
                  placeholder="Search for plants..."
                  onChangeText={setSearchTerm} // Call setSearchTerm here
                  value={searchTerm}
           />
            </View>
          <Pressable style={({pressed}) => [({opacity: pressed ? 0.5 : 1}), styles.sortButton]}>
            <Text>Sort</Text>
          </Pressable>
        </View>

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
    backgroundColor: "#f7c5ff" //The middle of the backround
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
    fontSize: 24,
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
    alignContent: 'center',
    alignItems:'center',
    flexWrap: 'wrap',
    backgroundColor: "#f7c5ff", //Color for the backround bottom of the app

    width: 400,

    marginTop: 15,
  },

  plantBox: {
    width: 190, 
    height: 190,
    borderColor: "#f3a8ff",

    backgroundColor: '#555555',
    borderRadius: 10,

  }

})
