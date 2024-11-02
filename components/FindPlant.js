import AsyncStorage from "@react-native-async-storage/async-storage";


export default FindPlant = async (plant) => {
    const getUser = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('userObject');
          return (jsonValue != null) ? JSON.parse(jsonValue) : {foundPlants: [],};
        } catch (e) {
          // error reading value
        }
      };
      const storeUser = async (user) => {
        try {
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem('userObject', jsonValue);
        } catch (e) {
          // saving error
        }
      };

    try {
        const userObject = await getUser()
        console.log(userObject)
        if (!userObject["foundPlants"].includes(plant.toLowerCase().replace("_", " "))) {
            userObject["foundPlants"].push(plant.toLowerCase().replace("_", " "))
        }
        await storeUser(userObject)
    }
    catch (e) {
        console.log('Error finding plant to user' + e);
    }

}