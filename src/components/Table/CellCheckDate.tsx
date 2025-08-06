import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Iprops {
    width: number
    rawlist: [string, string]
    date: string
    onPress: (value: string) => void
}

export type Tcong = {
    date: string,
    rawlist: [string, string]
}

export default function CellChkDate(props: Iprops) {
    const { width, rawlist, date, onPress } = props
    const status: string[] = Array.isArray(rawlist) ? rawlist : [date, '#FFFFFF', '#dbd6d6'];
    const [textDate, color, textColor = "#FFFFFF"] = status

    return (
        <View style={[styles.attendanceCell, { width }]}>
            <TouchableOpacity onPress={() => onPress(date)}>
                <View style={[
                    styles.statusCircle,
                    { backgroundColor: color },
                ]}>
                    <Text style={[styles.statusText, { color: textColor }]}>{textDate}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    attendanceCell: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusCircle: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dbd6d6',
        borderRadius: 50,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})