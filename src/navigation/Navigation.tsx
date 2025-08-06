import GlobalStateDate from '@/global/GlobalStateDate'
import useStateUser from '@/hooks/useStateUser'
import Header from '@/layouts/Header'
import { privateRoute, publicRoute } from '@/routes'
import { RootDrawerParamList } from '@/types'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React, { Fragment } from 'react'
const Drawer = createDrawerNavigator<RootDrawerParamList>()
export default function AppNavigator() {
    const [user, dispatch] = useStateUser()
    return (
        <>
            <GlobalStateDate />
            <NavigationContainer>
                <Drawer.Navigator>
                    {
                        user === null ? (
                            publicRoute.map((item, index) => {
                                const Component = item.component
                                return <Drawer.Screen key={index} name={item.name as keyof RootDrawerParamList} component={Component}
                                    options={{ header: () => <Fragment /> }} />
                            })
                        ) : (
                            privateRoute.map((item, index) => {
                                const Component = item.component
                                const Wrapper = item.layout || Fragment
                                const Layout = () => (
                                    <Wrapper>
                                        <Component />
                                    </Wrapper>
                                )
                                return <Drawer.Screen key={index} name={item.name as keyof RootDrawerParamList} component={Layout}
                                    options={{
                                        header: () => <Header />
                                    }} />
                            })
                        )
                    }
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}