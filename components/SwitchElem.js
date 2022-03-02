import { useRef, useState } from "react"
import React from 'react'
import { Animated, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SwitchElem = ({changeTempState, isCelsius}) => {

    const animate_state = {
        start: 35,
        end: 0
    }

    const value = useRef(new Animated.Value(animate_state.start)).current



    const startAnimate = () => {
        Animated.timing(value, { toValue: isCelsius ? animate_state.start : animate_state.end, useNativeDriver: false, duration: 300 }).start();
        changeTempState()
    }


    return (
        <View style={styles.textBlock}>
            <View style={styles.textBlockElem}>
                <Text style={styles.text}>°C</Text>
            </View>

            <View style={styles.textBlockElem}>
                <Text style={styles.text}>F</Text>
            </View>

            <Animated.View style={{
                transform: [{ translateX: value }], position: "absolute", width: "50%", height: "100%", opacity: .5,
                borderRadius: 5, backgroundColor: "black",
            }}>
                <TouchableOpacity onPress={() => startAnimate()} style={styles.btn}></TouchableOpacity>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({

    textBlock: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#4649ad",
        borderWidth: 1,
        borderRadius: 7,
        width: 70,
        height: 25
    },

    textBlockElem: {
        width: "50%",
    },

    text: {
        fontSize: 15,
        textAlign: "center"
    },

    btn: {
        width: "100%",
        height: "100%"
    }
})


export default SwitchElem;