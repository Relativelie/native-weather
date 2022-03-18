import { StyleSheet } from 'react-native';
import {
    fontFamilyLato,
    fontFamilyLatoBold,
    fontFamilySans,
    mainValuesFontColor,
    windowWidth
} from "../mixinsStyles";


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