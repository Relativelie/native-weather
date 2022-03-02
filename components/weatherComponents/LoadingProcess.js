import { View, Text, StyleSheet } from "react-native"


const LoadingProcess = () => {

    return (
        <View>
            <Text style={styles.serviceAnnouncement}>Loading...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    serviceAnnouncement: {
        textAlign: "center"
    }
})



export default LoadingProcess;