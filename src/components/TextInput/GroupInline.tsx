import { StyleSheet, Text, View } from "react-native";

interface Iprops {
    children: React.ReactNode;
    label: string,
    labelPosition?: 'left' | 'right',
    labelWidthEqual?: boolean
}

export default function GroupInputInline(props: Iprops): React.JSX.Element {
    const { children, label, labelPosition = 'left', labelWidthEqual = false } = props;
    return (
        <View style={[styles.container, labelPosition === 'left' ? { flexDirection: 'row' } : labelPosition === 'right' && { flexDirection: 'row-reverse' }]}>
            <Text style={[styles.title, labelWidthEqual && styles.equalWidth]}>{label}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: 'center',
        gap: 5,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    equalWidth: {
        width: '60%',
    }
})