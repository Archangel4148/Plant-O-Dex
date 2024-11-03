import { Text, View, ScrollView, Pressable, Image, Dimensions} from "react-native";
import { StyleSheet } from "react-native";
import {router, useLocalSearchParams} from 'expo-router'
import {ImageView} from "@/components/ImageView"
import {plantData} from "@/assets/plant_data/json_data/0_combined_plants.js"
import FindPlant from '@/components/FindPlant.js'

const backButtonIcon = require('@/assets/temp_images/temp_back_button.png');
const lockIconImage = require('@/assets/temp_images/temp_lock_icon.png');
const {screenWidth, screenHeight} = Dimensions.get('window');

const formatAttributes = (selectedPlant) => {
  return Object.entries(selectedPlant)
    .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
    .join('\n');
};

export default function plant_locked() {
  const {plant} = useLocalSearchParams();
  const dataObject = plantData[plant.toLowerCase().replace(/ /g, "_")]
  return (
    <View>
      <View styles={styles.headerContainer}>
        <Text style={styles.headerText}>Floradex</Text>
        <View styles={styles.headerContainer}>
          <Text style={styles.headerText}>Floradex</Text>
        </View>

        <ScrollView style={styles.mainScroll}>
          <View style={styles.main}>
            <View style={styles.topBar}>
            
        <Pressable 
          key={0} 
          onPress={() => { router.push({
            pathname: "/screens/home"
          }); 
        }}          
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
          <View style={styles.plantBox}>
          <Image source={backButtonIcon} style={styles.backButton}/>
          </View>
        </Pressable>
              <View style={styles.pageHeader}>
                <Text style={styles.plantNameText}>{String(plant)}</Text>
                <Text style={styles.plantScientificNameText}>{dataObject["Scientific Name"]}</Text>
              </View>
              <Image source={lockIconImage} style={styles.lockIcon}/>
            </View>
            <View style={styles.imageWrapper}>
              <Image source={ImageView[plant.toLowerCase()]} style={styles.plantImage}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Pressable onPress={() => {FindPlant(plant, router)}}style={{borderRadius: 10, backgroundColor: 'red', width: 100, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Find Plant</Text>
              </Pressable>
              <Text style={styles.attributesText}>{formatAttributes(dataObject)}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={styles.mainScroll}>
        <View style={styles.main}>
          <View style={styles.topBar}> 
            <Pressable 
              key={0} 
              onPress={() => { router.push({
                pathname: "/screens/home"
              });}}        
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
                <View style={styles.plantBox}>
                  <Image source={backButtonIcon} style={styles.backButton}/>
                </View>
            </Pressable>
            <View style={styles.pageHeader}>
              <Text style={styles.plantNameText}>{String(plant)}</Text>
              <Text style={styles.plantScientificNameText}>{dataObject["Scientific Name"]}</Text>
            </View>
            <Image source={lockIconImage} style={styles.lockIcon}/>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={ImageView[plant.toLowerCase()]} style={styles.plantImage}/>
          </View>
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Pressable onPress={() => {FindPlant(plant)}}
              style={{borderRadius: 10, backgroundColor: 'red', width: 100,
              height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white'}}>Find Plant</Text>
            </Pressable>
            <Text style={styles.attributesText}>{formatAttributes(dataObject)}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Header Elements
  headerContainer: {
    backgroundColor: '#d2d3db',
    borderRadius: 10,
  
    width: '100%',
    height: 100,
  
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center',
  },
  headerText: {
    fontSize: 24,
    margin: 50,
  },

  // Main Elements
  mainScroll: {
    },
  main: {
    width: screenWidth,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 200,
  },

  // Top Bar Elements
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginBottom: 20,
  },
  backButton: {
    borderRadius: 50,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 'auto',
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '62.5%',
  },
  plantNameText: {
    textTransform: 'capitalize',
    backgroundColor: '#dddddd',
    fontSize: 30,
    textAlign: 'center',
  },
  plantScientificNameText: {
    textTransform: 'capitalize',
    backgroundColor: '#eeeeee',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  lockIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 'auto',
  },

  // Plant Image
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  plantImage: {
    resizeMode: 'contain',
    borderRadius: 10,
  },

  attributesText: {

  }
  })
  