import * as Location from 'expo-location';

interface ResultType {
    [key: string]: string | any
}


export const getLocation = async (): Promise<ResultType> => {
    const result: ResultType | Promise<object> = {};
    let regionName: object;

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
        };
    }
    catch (err) {
        console.log(err)
    }
    finally {
        result.city = regionName != undefined && regionName[0].city;
    }


    return result;
}