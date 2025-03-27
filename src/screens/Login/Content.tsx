import { View, Text, StyleSheet } from 'react-native'
export default function Content() {
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={styles.guideText}>Hướng dẫn nhân viên đăng nhập</Text>
            <Text style={styles.content}>
                <Text style={styles.text}>Tên đăng nhập: </Text>
                <Text>Họ tên của bạn + Năm sinh</Text>
            </Text>
            <Text style={styles.content}>(Viết liền không dấu, không dấu cách)</Text>
            <Text style={styles.content}>
                <Text>Ví dụ: Nguyễn Văn Anh sinh năm 1986 {'=>'} </Text>
                <Text style={styles.text}>nguyenvananh1986</Text>
            </Text>
            <Text style={styles.content}>
                <Text style={styles.text}>Mật khẩu:</Text> <Text>baovesaigon</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guideText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 10,
    },
    content: {
        lineHeight: 25
    },
    text: {
        fontWeight: 600
    }
})