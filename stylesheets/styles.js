import { StyleSheet } from 'react-native';


export const titleAndSwitchColor = "rgba(255, 255, 255, 0.472)";
const fontFamilyNoto = "noto";
const fontFamilyNotoBold = "notoBold";
const mainValuesFontColor = "rgba(255, 255, 255, 1)";


export const generalSt = StyleSheet.create({

    title: {
        fontSize: 15,
        fontFamily: fontFamilyNoto,
        color: titleAndSwitchColor,
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
    }
    
});

export const menuSt = StyleSheet.create({

    cityAndSwitch: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        justifyContent: "space-evenly",
        marginTop: 10
    },

    location: {
        flexDirection: "row"
    },

    // switch component
    textBlock: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: titleAndSwitchColor,
        borderWidth: 1,
        borderRadius: 7,
        width: 70,
        height: 25
    },

    textBlockElem: {
        width: "50%",
        alignItems: "center"
    },
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
        fontSize: 70,
        fontFamily: fontFamilyNoto,
        color: mainValuesFontColor
    },

    description: {
        marginTop: -10
    },

    descriptionText: {
        fontSize: 17,
        fontFamily: fontFamilyNoto,
        color: mainValuesFontColor
    },

    descriptionTextBold: {
        fontFamily: fontFamilyNotoBold,
        fontWeight: "800"
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