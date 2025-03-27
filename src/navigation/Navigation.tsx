import GlobalStateDate from '@/global/GlobalStateDate'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import { privateRoute, publicRoute } from '@/routes'
import store from '@/store/redux/store'
import WrapperDefault from '@/wrapper/WrapperDefault'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
const Drawer = createDrawerNavigator()
export default function AppNavigator() {
    return (
        <Provider store={store}>
            <GlobalStateDate />
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Login">
                    {
                        publicRoute.map((item, index) => {
                            const Component = item.component
                            return <Drawer.Screen key={index} name={item.name} component={Component}
                                options={{ header: () => <Fragment /> }} />
                        })
                    }
                    {
                        privateRoute.map((item, index) => {
                            const Component = item.component
                            const Wrapper = item.layout || Fragment
                            const Layout = () => (
                                <Wrapper>
                                    <Component />
                                </Wrapper>
                            )
                            return <Drawer.Screen key={index} name={item.name} component={Layout}
                                options={{
                                    header: () => <Header />
                                }} />
                        })
                    }
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    )
}