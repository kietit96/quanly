import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Footer() {
    const navigation = useNavigation()
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={styles.buttonBurger}>
                <FontAwesome6 name="bars" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        backgroundColor: "#000",
        paddingHorizontal: 12,
    },
    buttonBurger: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 100,
        aspectRatio: 1,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})