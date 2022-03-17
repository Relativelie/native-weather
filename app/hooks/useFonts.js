import * as Font from 'expo-font';


const fonts = () =>
  Font.loadAsync({
    'latoBold': require('../../assets/fonts/Lato-Bold.ttf'),
    'lato': require('../../assets/fonts/Lato-Regular.ttf'),
    'sans': require('../../assets/fonts/PTSans-Regular.ttf'),
  });

export default fonts