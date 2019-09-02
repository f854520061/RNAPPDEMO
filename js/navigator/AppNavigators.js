import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";
import WelcomePage from '../page/welcomePage';
import HomePage from '../page/homePage';
import DetailPage from '../page/detailPage'

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
        navigationOptions:{
            header: null,
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            header: null,
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions:{
            // header: null,
        }
    }
})

const AppNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:{
        header: null,
    }
});

export default createAppContainer(AppNavigator)