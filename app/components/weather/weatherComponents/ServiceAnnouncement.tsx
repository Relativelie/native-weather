import { FC } from "react";
import { View, Text } from "react-native"

import { generalSt } from '../../mixinsStyles';


interface Props {
    text: string 
}


const ServiceAnnouncement:FC<Props> = ({text}) => {

    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>{text}</Text>
        </View>
    );
}


export default ServiceAnnouncement;