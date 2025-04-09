import Color from "@/constants/color";
import gradients, { Tcolors } from "@/constants/gradient";
import useStateDate from "@/hooks/useStateDate";
import { getListLocation } from "@/services/getListLocation";
import { initialLocation, TitemLocation } from "@/store/reducer/reducerLocation/reducer";
import { LinearGradient } from "expo-linear-gradient";
import { useLayoutEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function All() {
    const [stateLocations, setStateLocations] = useState<TitemLocation[]>([initialLocation])
    const [currentTimeDate, dispatch] = useStateDate<number>()
    const currentDate = new Date(currentTimeDate)
    const [isLoading, setLoading] = useState<boolean>(false)
    useLayoutEffect(() => {
        setLoading(true)
        const loadLocations = async () => {
            const month = currentDate.getMonth() + 1
            const year = currentDate.getFullYear()
            const result = await getListLocation(month, year)
            const locations: TitemLocation[] = result.data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.title,
                    position: item.pos,
                    count_item: item.countItem,

                }
            })
            setStateLocations(locations)
            setLoading(false)
        }
        loadLocations()
    }, [])
    return (
        isLoading
            ?
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={Color.primary} />
            </View>
            :
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 25 }}
                    numColumns={2}
                    data={stateLocations}
                    renderItem={({ item }) => {
                        const count = item.count_item
                        const styleCount = count < 10 ? 'targetLow' : (count >= 10 && count < 30 ? 'targetMedium' : 'targetHigh')
                        const colors: Tcolors = gradients[styleCount].colors
                        return (
                            <TouchableOpacity style={styles.button}>
                                <LinearGradient style={styles.buttonBackground} colors={colors}>
                                    <View style={styles.foldCorner} />
                                    <Text style={styles.count}>{item.count_item}</Text>
                                    <Text style={styles.text}>{item.name}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        position: 'relative',
        fontWeight: 500,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonBackground: {
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 0, // Shadow for Android
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    count: {
        position: 'absolute',
        top: -5,
        left: -5,
        width: 32,
        aspectRatio: 1,
        backgroundColor: '#ff5a5f',
        borderRadius: 20,
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        verticalAlign: 'middle',
        zIndex: 1,
    },
    foldCorner: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 25,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.15)',
        transform: [{ rotate: '180deg' }],
        zIndex: 2,
        borderStyle: 'solid',
        borderRightWidth: 25,
        borderBottomWidth: 25,
        borderBottomLeftRadius: 10,
        borderRightColor: 'rgba(0,0,0,.10)',
        borderBottomColor: 'rgba(0,0,0,.30)', // Slightly darker green for the fold
    }
})