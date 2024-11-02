
export default FindPlant = async (plant) => {
    try {
        const value = await AsyncStorage.getItem('userObject');
        let parsedJSON  = value != null ? JSON.parse(json) : {foundPlants: []}

        parsedJSON[foundPlant].push(plant)
        await AsyncStorage.storeData('userObject', JSON.stringify(parsedJSON))
    }
    catch {
        console.log('Error finding plant to user Object')
    }

}