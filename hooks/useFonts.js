import * as Font from 'expo-font';

const fonts = () =>
  Font.loadAsync({
    'notoBold': require('../assets/fonts/NotoSansDisplayBold.ttf'),
    'noto': require('../assets/fonts/NotoSansDisplay.ttf'),
  });

  export default fonts