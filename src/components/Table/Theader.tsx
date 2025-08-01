import { View, Text, StyleSheet } from 'react-native'

interface Iprops {
    title: string
    width?: number
    bold?: boolean
}
export default function Theader(props: Iprops) {
    const { title, bold, width } = props
    const styleBold = bold ? styles.textBold : {}
    return (
        <View style={StyleSheet.flatten([styles.container, { width: width }])}>
            <Text style={[styles.text, styleBold]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    textBold: {
        fontWeight: '800'
    }
})