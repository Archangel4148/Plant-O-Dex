import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { iconPaths } from '@/assets/user_icons/icon_paths.js'

export default function settings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clearAsyncStorage = async() => {
    try {
    await AsyncStorage.clear();
    console.log("Storage Clear")

    }
    catch {
      console.log("Storage Clear Error")
    }
}

const nextIcon = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.values(iconPaths).length);
  console.log(currentIndex)
};

const previousIcon = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + Object.values(iconPaths).length) % Object.values(iconPaths).length);
};

    return (
      <View>
    <View style={[styles.headerContainer, {backgroundColor: "#EDFFEA"}]}>
      <Text style={styles.headerText}>Settings</Text>
    </View>
    <ScrollView style={{backgroundColor: "#EDFFEA"}}>
      <View style={styles.webContainer}>

        <View style={styles.mainBody}>

        <View style={styles.instructionAndIconContainer}>
              <Text style={styles.instructionText}>Choose your icon!</Text>
              <View style={styles.icon_container}>
                <View style={styles.buttonWrapper}>
                  <Button title="Previous" onPress={previousIcon} />
                </View>
                <Image
                  source={Object.values(iconPaths)[currentIndex]}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
                <View style={styles.buttonWrapper}>
                  <Button title="Next" onPress={nextIcon} />
                </View>
              </View>
            </View>
          <View style={styles.container}>

          </View>
          <View style={styles.container}>

          </View>
          <View style={styles.container}>

          </View>

          <Button onPress={clearAsyncStorage} title={"Clear Cache"} color={'red'}></Button>

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
      backgroundColor: "#EDFFEA" //The middle of the backround
    },
    container: {
      backgroundColor: '#DDDDDD',
      width: 360,
      height: 90,
      borderRadius: 10,
    },
    instructionAndIconContainer: {
      backgroundColor: '#DDDDDD',
      borderRadius: 10,
      width: 360,
      height: 90,
      alignItems: 'center',
    },
    icon_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: "100%"
    },
    buttonWrapper: {
      flex: 1,
      justifyContent: 'center',
      marginRight: '20px',
      marginLeft: '20px'
    },
    instructionText: {
      marginBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
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
      
      flexWrap: 'wrap',
      backgroundColor: "#EDFFEA", //Color for the backround bottom of the app
  
      width: 400,
      paddingBottom: 200,
      minHeight: 800,
  
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
  
  