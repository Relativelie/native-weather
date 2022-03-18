import * as MenuActionCreators from './menuActions'
import * as WeatherActionCreators from './weatherActions'


export default {
    ...MenuActionCreators,
    ...WeatherActionCreators
}