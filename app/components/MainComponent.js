import { Keyboard, StatusBar, View } from "react-native"
import Menu from "./Menu"
import Weather from './Weather';
import { appStyles } from "../stylesheets/styles";
import { useActions } from "../hooks/useActions";



const MainComponent = () => {

    const { selectingCity, inputOnFocus, bringLocationError } = useActions()

    const selectAnotherCity = () => {
        selectingCity();

        Keyboard.dismiss();
        inputOnFocus(false);
        bringLocationError(false)
    }


    return (
        <View style={appStyles.container} onStartShouldSetResponder={() => selectAnotherCity()}>

            <StatusBar
                hidden={false}
                backgroundColor="#7290B9"
                barStyle={"light-content"}
                translucent={true} />
            <Menu selectAnotherCity={selectAnotherCity} />
            <View style={appStyles.weatherValuesContainer}>
                <Weather />
            </View>

        </View>

    )
}

export default MainComponent