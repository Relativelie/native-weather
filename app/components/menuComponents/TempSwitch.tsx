import React, { useRef } from 'react'
import { FC } from 'react';
import { Animated, View, Text } from "react-native";

import { menuSt, titleAndSwitchColor } from '../../stylesheets/styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';


const TempSwitch: FC = () => {
    const { isCelsius } = useTypedSelector(state => state.menu);
    const { tempConversion } = useActions();

    const animate_state = {
        start: 0,
        end: 38.5
    };

    const value = useRef(new Animated.Value(animate_state.start)).current;

    const startAnimate = ():void => {
        tempConversion()
        Animated.timing(value, { toValue: !isCelsius ? animate_state.start : animate_state.end, useNativeDriver: false, duration: 300 }).start();
    };


    return (
        <View style={menuSt.general}>
            <Text style={menuSt.textDegree}>°</Text>
            <View style={menuSt.textBlock}>

                <View style={menuSt.textBlockElem}>
                    <Text
                        style={[menuSt.textSwitch, !isCelsius ? menuSt.commonFont : menuSt.boldFont]}
                        onPress={() => startAnimate()}>
                        C
                    </Text>
                </View>

                <View style={menuSt.textBlockElem}>
                    <Text
                        style={[menuSt.textSwitch, isCelsius ? menuSt.commonFont : menuSt.boldFont]}
                        onPress={() => startAnimate()}>
                        F
                    </Text>
                </View>

                <Animated.View style={{
                    transform: [{ translateX: value }], position: "absolute", width: "50%", height: "100%",
                    opacity: .5, borderRadius: 5, backgroundColor: titleAndSwitchColor,
                }}>
                </Animated.View>
            </View>
        </View>
    );
}


export default TempSwitch;