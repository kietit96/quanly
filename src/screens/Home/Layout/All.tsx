import gradients, { Tcolors } from "@/constants/gradient";
import useStateDate from "@/hooks/useStateDate";
import useStateLocation from "@/hooks/useStateLocation";
import { getListLocation } from "@/services/getListLocation";
import { changeLocationAction } from "@/store/reducer/reducerLocation/action";
import { TitemLocation } from "@/store/reducer/reducerLocation/reducer";
import Loading from "@comp/Loading/Loading";
import { LinearGradient } from "expo-linear-gradient";
import { memo, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
function All() {
    const [stateLocations, setStateLocations] = useState<TitemLocation[]>([])
    const [currentTimeDate] = useStateDate()
    const currentDate = new Date(currentTimeDate.date)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [location, dispatchLocation] = useStateLocation()
    useLayoutEffect(() => {
        setLoading(true)
        const loadLocations = async () => {
            const month = currentDate.getMonth() + 1
            const year = currentDate.getFullYear()
            const result = await getListLocation(month, year)
            const locations: TitemLocation[] = result.data.filter((item: TitemLocation) => item.id !== -1).map((item: TitemLocation) => ({
                id: item.id,
                title: item.title,
                position: item.position,
                count_item: item.count_item,
            }))
            setStateLocations(locations)
            setLoading(false)
        }
        loadLocations()
    }, [])
    const handleChangeLocation = (location: TitemLocation) => {
        dispatchLocation(changeLocationAction(location))
    }
    return (
        isLoading
            ?
            <Loading />
            :
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 25 }}
                    numColumns={2}
                    data={stateLocations}
                    renderItem={({ item }) => {
                        const { id, title, position, count_item } = item
                        const styleCount = count_item < 10 ? 'targetLow' : (count_item >= 10 && count_item < 30 ? 'targetMedium' : 'targetHigh')
                        const colors: Tcolors = gradients[styleCount].colors
                        return (
                            <TouchableOpacity onPress={() => handleChangeLocation({ id, title, position, count_item })} style={styles.button}>
                                <LinearGradient style={styles.buttonBackground} colors={colors}>
                                    <View style={styles.foldCorner} />
                                    <Text style={styles.count}>{count_item}</Text>
                                    <Text style={styles.text}>{title}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
    )
}
export default memo(All)
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