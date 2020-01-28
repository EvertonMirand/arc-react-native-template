/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from '~/views/home/Home.screen.js';
import App from './App';
// import App from './App';

AppRegistry.registerComponent(appName, () => App);
