import { Text, View, ScrollView, TextInput, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";

import {plantData} from "@/assets/plant_data/json_data/0_combined_plants.js"

const populatePlants = () => {
  let newPlant;
  let plantsArr = []
  for (let plant in plantData) {
    let src = require (`@/assets/plant_data/images/` + (String(plantData[plant]["Common Name"])).toLowerCase().replace(" ", "_")  + '.png');
    newPlant = <Pressable onPress={() => {console.log(src)}} style={({pressed}) => ({opacity: pressed ? 0.5 : 1})} ><View style={styles.plantBox}>
        <Image  height={100} width={100} style={{height: '100%', width: '100%'} } source={src} />
      </View></Pressable>;
    plantsArr.push(newPlant)
  }
  return plantsArr;
}

export default function home() {
  console.log(plantData)

  return (
  <View>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Plant Page</Text>
    </View>
    <ScrollView>
      <View style={styles.webContainer}>
        
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBar}></TextInput>
          <Pressable style={({pressed}) => [({opacity: pressed ? 0.5 : 1}), styles.sortButton]}>
            <Text>Sort</Text>
          </Pressable>
        </View>

        <View style={styles.mainBody}>
        {populatePlants()}
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
    borderWidth: 3,
    borderRadius: 10,

    width: 270,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
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
    gap: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    flexWrap: 'wrap',

    width: 400,

    marginTop: 15,
  },

  plantBox: {
    width: 170, 
    height: 170,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,

    backgroundColor: '#555555'

  }

})
