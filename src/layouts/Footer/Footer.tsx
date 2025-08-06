import { useStateChooseItem } from "@/hooks/useStateChooseItem";
import { changeChooseItem } from "@/store/reducer/reducerChooseItem/action";
import { TchooseItem } from "@/store/reducer/reducerChooseItem/reducer";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ChooseItems from "../ChooseItems";
import { useCallback } from "react";

export default function Footer() {
    const navigation = useNavigation()
    const [statechoosenItem, dispatch] = useStateChooseItem()
    const handleChange = useCallback((value: TchooseItem) => {
        dispatch(changeChooseItem(value))
    }, [])
    return (
        <View style={styles.footer}>
            <View style={styles.boxLeft}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={styles.buttonBurger}>
                    <FontAwesome6 name="bars" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.boxRight}>
                {
                    statechoosenItem.choosen_item.id !== -2 &&
                    <ChooseItems onChange={handleChange} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        backgroundColor: "#C99F66",
        paddingHorizontal: 12,
        paddingVertical: 5,
        gap: 5
    },
    boxLeft: {
        flex: 1.8,
    },
    boxRight: {
        flex: 9.2,
        width: '100%',
    },
    buttonBurger: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 100,
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})