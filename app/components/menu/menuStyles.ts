import { StyleSheet, Platform } from 'react-native';
import {
    titleAndSwitchColor,
    fontFamilyLato,
    fontFamilyLatoBold,
    fontFamilySans,
    mainValuesFontColor,
    paddingForMenu
} from "../mixinsStyles";


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
        paddingTop: Platform.OS === "android" ? 0 : 39,
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
        paddingTop: Platform.OS === "android" ? 25 : 49,
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
    },

    animationBlock: {
        position: "absolute",
        width: "50%",
        height: "100%",
        opacity: .5,
        borderRadius: 5,
        backgroundColor: titleAndSwitchColor
    }
});