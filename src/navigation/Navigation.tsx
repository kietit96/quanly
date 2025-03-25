import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { public_link } from './router'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import { Provider } from 'react-redux'
import store from '@/store/redux/store'
const Drawer = createDrawerNavigator()
export default function AppNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    {public_link.map((item, index) => {
                        return <Drawer.Screen key={index} name={item.name} component={item.component} options={{
                            header: () => <Header />
                        }} />
                    })}
                </Drawer.Navigator>
                <Footer />
            </NavigationContainer>
        </Provider>
    )
}