import * as Location from 'expo-location';

export const getLocation = async () => {

    // get latitude and longitude
    let locationData = await Location.getCurrentPositionAsync({});

    // get city
    let regionName = await Location.reverseGeocodeAsync({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
    });

    return regionName[0].city
}