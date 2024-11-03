import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { iconPaths } from '@/assets/user_icons/icon_paths.js'
import { useFonts } from "expo-font";


const storeUsername = async (username) => {
  try {
    await AsyncStorage.setItem('currentUsername', username);
  } catch (e) {
    // saving error
  }
};

export default function settings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [imageUri, setImageUri] = useState(null); // State to hold the image URI
  const [loaded, error] = useFonts({
    'JetBrains': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
  });

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
};

const previousIcon = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + Object.values(iconPaths).length) % Object.values(iconPaths).length);
};

const handleUsernameChange = (newUsername) => {
  setUsername(newUsername);
  storeUsername(newUsername);
};

// Effect to fetch the image URI from AsyncStorage
useEffect(() => {
  const fetchImageUri = async () => {
    try {
      const uri = await AsyncStorage.getItem('capturedImageUri');
      if (uri) {
        setImageUri(uri);
      }
    } catch (error) {
      console.error('Error fetching image URI:', error);
    }
  };

  fetchImageUri();
}, []);

    return (
  <View>
    <View style={[styles.headerContainer, {backgroundColor: "#E3FFE5"}]}>
      <Text style={styles.headerText}>Settings</Text>
    </View>
    <ScrollView style={{backgroundColor: "#E3FFE5"}}>
      <View style={styles.webContainer}>
        <View style={styles.mainBody}>
          <View style={styles.instructionAndIconContainer}>
            <Text style={styles.instructionText}>Choose your icon!</Text>
            <View style={styles.iconContainer}>
              <View style={styles.buttonWrapper}>
                <Button title="Previous" onPress={previousIcon} />
              </View>
              <Image
                source={Object.values(iconPaths)[currentIndex]}
                style={styles.userIcon}
                resizeMode="contain"
              />
              <View style={styles.buttonWrapper}>
                <Button title="Next" onPress={nextIcon} />
              </View>
            </View>
          </View>
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameLabel}>Change Username:</Text>
            <TextInput
              style={styles.usernameInput}
              value={username}
              onChangeText={handleUsernameChange}
              placeholder="Input a username"
              placeholderTextColor="#888"
            />
          </View>
          <Button onPress={clearAsyncStorage} title={"Clear Cache"} color={'red'}></Button>
        </View>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  // Header
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
    
  // Main
  },
  webContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    backgroundColor: "#E3FFE5" //The middle of the back-round
  },
  mainBody: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    
    flexWrap: 'wrap',
    backgroundColor: "#E3FFE5", //Color for the back-round bottom of the app
    
    width: 400,
    paddingBottom: 200,
    minHeight: 800,
    
    marginTop: 15,
  },

  // User Icon Switcher
  instructionAndIconContainer: {
    backgroundColor: '#BDFFC2',
    borderRadius: 10,
    width: 360,
    height: 100,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  userIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },

  // Username Input
  usernameContainer: {
    backgroundColor: '#BDFFC2',
    width: 360,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
  },
  usernameLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10
  },
  usernameInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 25,
    width: "60%",
    padding: 15
  },
  imageContainer: {
    
  },
  })
  
  