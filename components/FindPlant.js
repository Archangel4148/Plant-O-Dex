import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUser = async (user) => {
    try {
      const jsonValue = JSON.stringify(userObject);
      await AsyncStorage.setItem('userObject', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userObject');
      return jsonValue != null ? JSON.parse(jsonValue) : {foundPlants: []};
    } catch (e) {
      // error reading value
    }
  };

export default FindPlant = async (plant) => {
    try {
        const userObject = await getUser()
        userObject.then(() => {
            console.log(userObject[userObject])
        })
        
        userObject[foundPlants].push(plant)
        await storeUser(userObject)
    }
    catch (e) {
        console.log('Error finding plant to user' + e);
    }

}