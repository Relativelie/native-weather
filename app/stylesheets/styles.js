import { StyleSheet } from 'react-native';


export const titleAndSwitchColor = "rgba(255, 255, 255, 0.6)";
const fontFamilyNoto = "lato";
const fontFamilyNotoBold = "latoBold";
const mainValuesFontColor = "rgba(255, 255, 255, 1)";


export const generalSt = StyleSheet.create({

    title: {
        fontSize: 15,
        fontFamily: fontFamilyNoto,
        color: titleAndSwitchColor
    },

    serviceAnnouncement: {
        fontSize: 20,
        fontFamily: fontFamilyNoto,
        color: titleAndSwitchColor,
        textAlign: "center"
    }
});


export const appStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6592be',
        paddingTop: Platform.OS === "android" ? 0: 40
    }
    
});

export const menuSt = StyleSheet.create({

    cityAndSwitch: {
        flexDirection: "row",
        paddingHorizontal: 25,
        alignItems: "center",
    },

    inputElem: {
        flex: 1,
        fontSize: 30,
        fontFamily: fontFamilyNoto,
        color: mainValuesFontColor
    },

    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10
    },

    location: {
        flexDirection: "row",
        alignItems: "center",
    },

    // switch component
    textBlock: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: titleAndSwitchColor,
        borderWidth: 1,
        borderRadius: 7,
        width: 77,
        height: 29
    },

    textBlockElem: {
        width: "50%",
        alignItems: "center",
        paddingTop: 3
    },

    textSwitch: {
        fontSize: 18,
        color: titleAndSwitchColor,
        width: "100%",
        height: "100%", 
        textAlign: "center"
    }, 

    commonFont: {
        fontFamily: fontFamilyNoto,
    },

    boldFont: {
        fontFamily: fontFamilyNotoBold,
        // fontWeight: "700"
    }
});

export const weatherSt = StyleSheet.create({

    weatherContainer: {
        flex: 1
    },

    temp: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    tempElem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    imgContainer: {
        width: 100,
        height: 140,
        marginHorizontal: 10
    },

    tempText: {
        fontSize: 120,
        fontFamily: fontFamilyNoto,
        color: mainValuesFontColor
    },

    description: {
        marginTop: -10
    },

    descriptionText: {
        fontSize: 18,
        color: mainValuesFontColor,
        fontFamily: fontFamilyNoto,
    },

    descriptionTextBold: {
        fontFamily: fontFamilyNotoBold,
        fontWeight: "bold"
    },

    descriptionImage: {
        flex: 1
    },

    otherValues: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 30
    },

    otherValuesElem: {
        justifyContent: "space-around"
    }
});