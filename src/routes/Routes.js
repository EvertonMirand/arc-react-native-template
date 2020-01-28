import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '~/views/home/Home.screen';
import DetailCharacter from '~/views/detail/DetailCharacter.screen';

const App = createStackNavigator(
  {
    Home: {
      screen: Home,
      title: 'Rick & Morty',
    },
    DetailCharacter,
  },
  {
    defaultNavigationOptions: {
      title: 'Rick & Morty',
      headerStyle: {
        backgroundColor: 'rgb(57, 190, 140)',
        elevation: 0,
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        // color: colors.text,
      },
    },
    initialRouteName: 'Home',
  },
);

const Routes = createAppContainer(App);

export default Routes;
