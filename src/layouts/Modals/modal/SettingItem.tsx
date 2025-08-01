import useStateUser from "@/hooks/useStateUser";
import { logoutUser } from "@/store/redux/ReduxUser/slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingItem() {
    const [user, dispatch] = useStateUser()
    const handleLogout = () => {
        // Logic for logout
        dispatch(logoutUser())
        AsyncStorage.setItem('user', '')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout}><Text style={styles.text}>Logout</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        color: '#333',
    }
})