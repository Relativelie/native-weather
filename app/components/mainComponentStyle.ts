import { StyleSheet, Platform } from 'react-native';


export const appStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#7290B9',
        paddingTop: Platform.OS === "android" ? 0 : 40
    },

    weatherValuesContainer: {
        height: "100%",
        justifyContent: "center"
    }
});
