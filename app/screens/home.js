import { Text, View, ScrollView, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";


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
          <Pressable style={styles.sortButton}>
            <Text>Sort</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>

    </View>
  );
}
const styles = {
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
    backgroundColor: '#d2d3db',
    borderRadius: 10,

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

  }

}
