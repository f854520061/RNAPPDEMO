import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";
import WelcomePage from '../page/welcomePage';
import HomePage from '../page/homePage';
import DetailPage from '../page/detailPage';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware,createReduxContainer} from 'react-navigation-redux-helpers';
export const rootCom = 'Init'; // 设置根路由

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


export const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:{
        header: null,
    }
});

/**
 * 1.初始化react-navigation与redux中间件.
 * 该方法的一个很大的作用就是为createReduxContainer设置actionSubscribers(行为的订阅者)
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

/**
 * 2.将根导航器组件传递给createReduxContainer函数，
 * 并返回一个将navigation state 和 dispatch 函数作为props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware后执行
 */

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/**
 * State到Props的映射关系
 */

 const mapStateToProps = state => ({
     state: state.nav,
 })
 /**
  * 3.连接 React 组件与 Redux store
  */

  export default connect(mapStateToProps)(AppWithNavigationState);