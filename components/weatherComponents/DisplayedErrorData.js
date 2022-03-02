import { View, Text, StyleSheet } from "react-native"


const DisplayedErrorData = ({data}) => {

    return (
        <View>
            <Text style={styles.serviceAnnouncement}>{data[0]}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    serviceAnnouncement: {
        textAlign: "center"
    }
})



export default DisplayedErrorData;