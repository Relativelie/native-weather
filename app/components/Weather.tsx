import { FC } from "react";
import { useEffect, useState } from "react";

import DisplayedErrorData from "./weatherComponents/DisplayedErrorData";
import DisplayedSuccessfulData from "./weatherComponents/DisplayedSuccessfulData";
import LoadingProcess from "./weatherComponents/LoadingProcess";


const Weather:FC = () => {
    const [isLoading, setIsLoading] = useState(false);


    // Loading value from api.
    useEffect(() => {
        props.data.length === 0 ? setIsLoading(true) : setIsLoading(false);
    });


    // Displayed components.
    const displayedValue = () => {
        if (isLoading) return <LoadingProcess />;

        else {
            if (Array.isArray(props.data)) {
                return <DisplayedErrorData data={props.data} />
            }
            else return (
                <DisplayedSuccessfulData
                    data={props.data}
                    isCelsius={props.isCelsius}
                />
            );
        };
    };


    return displayedValue();
}


export default Weather;

