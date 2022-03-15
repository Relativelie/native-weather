import { StyleSheet, Dimensions } from 'react-native';


export const titleAndSwitchColor = "rgba(255, 255, 255, 0.6)";
const fontFamilyLato = "lato";
const fontFamilyLatoBold = "latoBold";
const fontFamilySans = "sans";
const mainValuesFontColor = "rgba(255, 255, 255, 1)";
const paddingForMenu = 18;
const windowWidth = Dimensions.get("window").width/2 - 10;



export const generalSt = StyleSheet.create({

    title: {
        fontSize: 15,
        fontFamily: fontFamilyLato,
        color: titleAndSwitchColor
    },

    serviceAnnouncement: {
        fontSize: 20,
        fontFamily: fontFamilyLato,
        color: titleAndSwitchColor,
        textAlign: "center",
    }
});


export const appStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#7290B9',
        // paddingTop: Platform.OS === "android" ? 0 : 40
    }, 

    weatherValuesContainer: {
        height: "100%",
        justifyContent: "center"
    }
});


export const menuSt = StyleSheet.create({

    general: {
        flexDirection: "row",
        alignItems: "center"
    },

    container: {
        position: "absolute",
        width: "100%",
        zIndex: 2,
    },

    // Input container in focus.
    containerPadInput: {
        // paddingTop: Platform.OS === "android" ? 0 : 39,
    },

    cityInEditing: {
        justifyContent: "center"
    },

    focusedInput: {
        marginTop: 27,
        backgroundColor: "#FFFFFF",
        width: 332,
        height: 53,
        borderRadius: 4,
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,  
        elevation: 8
    },

    inputElemInFocus: {
        flex: 1,
        fontSize: 15,
        color: "black",
        height: "100%",
        zIndex: 2,
        paddingLeft: paddingForMenu
    },

    cityInEditingBtn: {
        fontSize: 15,
        fontFamily: fontFamilyLato,
        color: "#1086FF",
        paddingRight: paddingForMenu
    },

    // Input is not in focus.
    containerPad: {
        // paddingTop: Platform.OS === "android" ? 19 : 49,
    },

    cityAndSwitch: {
        justifyContent: "space-between",
        paddingHorizontal: paddingForMenu
    },

    cityText: {
        width: 193,
        fontSize: 30,
        fontFamily: fontFamilyLato,
        color: mainValuesFontColor
    },

    buttons: {
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: paddingForMenu
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

    textDegree: {
        paddingRight: 10,
        fontSize: 18,
        color: titleAndSwitchColor,
        fontFamily: fontFamilySans
    },

    commonFont: {
        fontFamily: fontFamilyLato,
    },

    boldFont: {
        fontFamily: fontFamilyLatoBold
    }
});


export const weatherSt = StyleSheet.create({

    weatherContainer: {
        flex: 1
    },

    temp: {
        flex: 3,
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    tempElem: {
        flexDirection: "row",
        alignItems: "center"
    },

    imgContainer: {
        width: 100,
        height: 140,
        marginHorizontal: 10
    },

    tempText: {
        fontSize: 120,
        fontFamily: fontFamilySans,
        color: mainValuesFontColor
    },

    description: {
        marginTop: -10
    },

    descriptionText: {
        fontSize: 18,
        color: mainValuesFontColor,
        fontFamily: fontFamilyLato,
        maxWidth: windowWidth
    },

    descriptionTextBold: {
        fontFamily: fontFamilyLatoBold,
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