import * as Location from 'expo-location';

export const getLocation = async () => {

    const result = {};
    let regionName;

    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {

            // Get latitude and longitude.
            let locationData = await Location.getCurrentPositionAsync({});

            // Get city.
            regionName = await Location.reverseGeocodeAsync({
                latitude: locationData.coords.latitude,
                longitude: locationData.coords.longitude,
            });
        }
    }
    catch {
        result.error = true;
    }
    finally {
        result.city = regionName != undefined && regionName[0].city;
    }
    

    return result;
}