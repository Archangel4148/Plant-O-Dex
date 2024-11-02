import { Text, View, ScrollView, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";

const populatePlants = () => {
  let newPlant;
  let plantsArr = []
  for (let i = 0; i < 20; i++) {
    newPlant = <Pressable id={i} style={({pressed}) => ({opacity: pressed ? 0.5 : 1})} ><View style={styles.plantBox}></View></Pressable>
    plantsArr.push(newPlant)
  }
  return plantsArr;
}

export default function home() {
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
