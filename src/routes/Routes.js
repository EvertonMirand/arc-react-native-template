
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/views/home/Home.screen';
import DetailCharacter from '~/views/detail/DetailCharacter.screen';


const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                    title: 'Rick & Morty',
                }),
            },
            DetailCharacter: {
                screen: DetailCharacter,
                navigationOptions: ({ navigation }) => ({
                    title: 'Rick & Morty',
                    // title: navigation.state.params.character.name,
                }),
            },
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    // backgroundColor: colors.primary,
                    elevation: 0,
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // color: colors.text,
                },
            },
        },
    ),
);

export default Routes;
