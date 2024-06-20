/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';


export default props =>{
    return(
        <PaperProvider>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);