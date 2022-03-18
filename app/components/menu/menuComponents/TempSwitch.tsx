import React, { useRef } from 'react'
import { FC } from 'react';
import { Animated, View, Text } from "react-native";

import { menuSt } from '../menuStyles';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { usedTextsMenu } from '../../../usedTexts/usedTextsMenu';


const TempSwitch: FC = () => {
    const { isCelsius } = useTypedSelector(state => state.menu);
    const { tempConversion } = useActions();

    const animate_state = {
        start: 0,
        end: 38.5
    };

    const value = useRef(new Animated.Value(animate_state.start)).current;

    const startAnimate = (): void => {
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
                        {usedTextsMenu.switchCelsius}
                    </Text>
                </View>

                <View style={menuSt.textBlockElem}>
                    <Text
                        style={[menuSt.textSwitch, isCelsius ? menuSt.commonFont : menuSt.boldFont]}
                        onPress={() => startAnimate()}>
                        {usedTextsMenu.switchFahrenheit}
                    </Text>
                </View>
                <Animated.View
                    style={[
                        { transform: [{ translateX: value }] },
                        menuSt.animationBlock
                    ]}>
                </Animated.View>
            </View>
        </View>
    );
}


export default TempSwitch;