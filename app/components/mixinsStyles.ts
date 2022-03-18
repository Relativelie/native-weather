import { StyleSheet, Dimensions } from 'react-native';


export const titleAndSwitchColor = "rgba(255, 255, 255, 0.6)";
export const fontFamilyLato = "lato";
export const fontFamilyLatoBold = "latoBold";
export const fontFamilySans = "sans";
export const mainValuesFontColor = "rgba(255, 255, 255, 1)";
export const paddingForMenu = 18;
export const windowWidth = Dimensions.get("window").width / 2 - 10;



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