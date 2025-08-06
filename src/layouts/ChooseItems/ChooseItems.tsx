import { useStateChooseItem } from '@/hooks/useStateChooseItem'
import { getListChooseItem } from '@/services/getListChooseItem'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
interface Tprops {
    onChange: (item: any) => void
}

export default function ChooseItems({ onChange }: Tprops) {
    const [chooseItems, setChooseItems] = useState([])
    const [stateChoosenItem, dispatch] = useStateChooseItem()
    const { choosen_item } = stateChoosenItem
    useEffect(() => {
        const loadChooseItems = async () => {
            const list = await getListChooseItem()
            setChooseItems(list)
        }
        loadChooseItems()
    }, [])
    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => onChange({ id: -1, color: '', ten: '' })} style={[styles.circleButton, +choosen_item?.id === -1 && { borderColor: "#ff2000" }]}>
                    <FontAwesome6 name="trash-can" size={24} color={+choosen_item?.id === -1 ? '#ff2000' : '#000000'} />
                </TouchableOpacity>
                {chooseItems.length > 0 && chooseItems.map(({ id, color, ten }, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => onChange({ id, color, ten })} style={[styles.circleButton, { backgroundColor: color }, +choosen_item?.id === +id && { borderColor: "#ff2000" }]} key={index}>
                            <Text style={styles.text}>{ten}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 10,
    },
    circleButton: {
        aspectRatio: 1,
        width: 50,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#FFFFFF",
        backgroundColor: '#f2f2f2'
    },
    text: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
    }
})