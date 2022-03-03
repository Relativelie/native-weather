import { useRef } from "react"
import React from 'react'
import { Animated, View, Text } from "react-native";
import { generalSt, menuSt, titleAndSwitchColor } from '../../stylesheets/styles';


const SwitchElem = ({changeTempState, isCelsius}) => {

    const animate_state = {
        start: 0,
        end: 35
    }

    const value = useRef(new Animated.Value(animate_state.start)).current

    const startAnimate = () => {
        changeTempState()
        Animated.timing(value, { toValue: !isCelsius ? animate_state.start : animate_state.end, useNativeDriver: false, duration: 300 }).start();
    }


    return (
        <View style={menuSt.textBlock}>
            <View style={menuSt.textBlockElem}>
                <Text style={generalSt.title} onPress={() => startAnimate()}>°C</Text>
            </View>

            <View style={menuSt.textBlockElem}>
                <Text style={generalSt.title} onPress={() => startAnimate()}>F</Text>
            </View>

            <Animated.View style={{
                transform: [{ translateX: value }], position: "absolute", width: "50%", height: "100%",
                opacity: .5, borderRadius: 1, backgroundColor: titleAndSwitchColor,
            }}>
            </Animated.View>
        </View>
    )
}


export default SwitchElem;