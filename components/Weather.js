import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import DisplayedErrorData from "./weatherComponents/DisplayedErrorData";
import DisplayedSuccessfulData from "./weatherComponents/DisplayedSuccessfulData";
import LoadingProcess from "./weatherComponents/LoadingProcess";


const Weather = (props) => {
    
    const [isLoading, setIsLoading] = useState(false)

    // loading value from api
    useEffect(() => {
        if (props.data.length === 0) {
            setIsLoading(true);
        }
        else {
            setIsLoading(false);
        }
    })



    // displayed components
    const displayedValue = () => {
        if (isLoading) {
            return <LoadingProcess />
        }
        
        else {
            if (Array.isArray(props.data)) {
                return <DisplayedErrorData data={props.data} />
            }
            else return (
                <DisplayedSuccessfulData data={props.data} />
            )
        }
    }

    return (
        displayedValue()
    )
}


export default Weather;

