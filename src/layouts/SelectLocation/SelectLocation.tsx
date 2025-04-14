import Color from '@/constants/color'
import useStateDate from '@/hooks/useStateDate'
import useStateLocation from '@/hooks/useStateLocation'
import { getListLocation } from '@/services/getListLocation'
import { changeLocationAction } from '@/store/reducer/reducerLocation/action'
import { initialLocation, TitemLocation } from '@/store/reducer/reducerLocation/reducer'
import { Tchildren } from '@/types'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface propsButton extends Tchildren, TitemLocation {
    handlePress: (location: TitemLocation) => void
}

export default function SelectLocation() {
    const [currentTimeDate, dispatch] = useStateDate<number>()
    const [stateLocations, setStateLocations] = useState<TitemLocation[]>([initialLocation])
    const [location, dispatchLocation] = useStateLocation()
    const currentDate = new Date(currentTimeDate)
    const changeLocation = (location: TitemLocation) => {
        dispatchLocation(changeLocationAction(location))
    }
    useEffect(() => {
        const loadLocations = async () => {
            const month = currentDate.getMonth() + 1
            const year = currentDate.getFullYear()
            const result = await getListLocation(month, year)
            const locations: TitemLocation[] = result.data.map((item: TitemLocation) => {
                return {
                    id: item.id,
                    title: item.title,
                    position: item.position,
                    count_item: item.count_item,

                }
            })
            setStateLocations(locations)
        }
        loadLocations()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView fadingEdgeLength={2} horizontal={true} showsHorizontalScrollIndicator={true} style={styles.row}>
                {
                    stateLocations.map((item: TitemLocation) => (
                        <Button id={item.id} title={item.title} position={item.position} count_item={item.count_item} key={item.id} handlePress={changeLocation}>
                            {item.title}
                        </Button>
                    ))
                }
            </ScrollView>
        </View>
    )
}
function Button(props: propsButton) {
    const { id, title, position, count_item, children, handlePress } = props
    const [location] = useStateLocation()
    const isSelected = location.id === id
    const handleChangeLocation = () => {
        if (!!handlePress) {
            handlePress({ id, position, title, count_item })
        }
    }
    return (
        <TouchableHighlight underlayColor={Color.primary_light} style={StyleSheet.flatten([styles.button, isSelected && styles.buttonActive])} onPress={handleChangeLocation}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primary
    },
    row: {
        flexDirection: 'row'
    },
    button: {
        padding: 10,
    },
    buttonText: {
        color: '#FFF',
    },
    buttonActive: {
        backgroundColor: Color.primary_light
    }
})