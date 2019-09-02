export default class NavigationUtil {
    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面
     */
    static goPage(page,params) {
        const navigation = NavigationUtil.navigation;
        if(!navigation) {
            console.log('NavigationUtil.navigation is null')
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    /**
     * 返回上一页
     * @param {*} navigation 
     */
    static goback(navigation) {
        navigation.goback();
    }
    /**
     * 重置到首页
     * @param {*} params 
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate("Main");
    }
}