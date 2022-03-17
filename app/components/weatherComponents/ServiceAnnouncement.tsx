import { FC } from "react";
import { View, Text } from "react-native"
import { generalSt } from '../../stylesheets/styles';

interface Props {
    text: string | object | any
}

const ServiceAnnouncement:FC<Props> = ({text}) => {

    return (
        <View>
            <Text style={generalSt.serviceAnnouncement}>{text}</Text>
        </View>
    );
}


export default ServiceAnnouncement;