import * as Location from 'expo-location';

export const getLocation = async () => {

    const result = {};
    let regionName;

    try {
        // get latitude and longitude
        let locationData = await Location.getCurrentPositionAsync({});

        // get city
        regionName = await Location.reverseGeocodeAsync({
            latitude: locationData.coords.latitude,
            longitude: locationData.coords.longitude,
        });
    }
    catch {
        result.error = true;
    }
    finally {
        if (regionName != undefined) {
            result.city = regionName[0].city;
        }
    }


    return result
}