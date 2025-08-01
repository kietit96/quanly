import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default function MessageItem(props) {
    const { id, reply: reply_item, nhanvien_title, time, content } = props
    const inputRef = useRef<TextInput>(null)
    const [reply, setReply] = useState({ replyOrigin: reply_item, replyChange: reply_item })
    const [isShow, setShow] = useState(false)
    const openInput = () => {
        setShow(true)
    }
    const closeInput = () => {
        setShow(false)
    }
    const changeBackValue = () => {
        setReply({ ...reply, replyChange: reply.replyOrigin })
    }
    const changeInput = (text: string) => {
        setReply({ ...reply, replyChange: text })
    }
    const confirmValue = (text: string) => {
        setReply({ ...reply, replyOrigin: text })
    }
    useEffect(() => {
        if (isShow) {
            const timeOut = setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
            return () => clearTimeout(timeOut)
        }
    }, [isShow])
    return (
        <View style={styles.boxcontent}>
            <Text style={styles.titleNV}>{nhanvien_title}</Text>
            <Text style={styles.titleTime}>{time}</Text>
            <Text style={styles.feedback_content}>{content}</Text>
            {reply_item && <Text style={styles.feedback_reply}>Trả lời: {reply.replyOrigin}</Text>}
            <View style={styles.buttons}>
                <TouchableOpacity onPress={openInput} style={[styles.button, styles.buttonReply]}><Entypo name="reply" size={24} color="#FFF" /></TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonRead]}><Entypo name="eye" size={24} color="black" /></TouchableOpacity>
            </View>
            <Modal animationType="fade"
                visible={isShow}
                transparent={true}
                backdropColor={"#FFF"}>
                <View style={styles.modal_container}>
                    <View style={styles.modal_box}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Trả lời</Text>
                        <TextInput ref={inputRef} onChangeText={changeInput} value={reply.replyChange} style={styles.textArea} multiline />
                        <View style={styles.buttons_edit}>
                            <TouchableOpacity onPress={() => { closeInput(); changeBackValue() }} style={[styles.button, styles.button_edit, styles.buttonCancel]}><AntDesign style={{ textAlign: 'center' }} name="closecircleo" size={32} color="#FFF" /></TouchableOpacity>
                            <TouchableOpacity onPress={() => { closeInput(); confirmValue(reply.replyChange) }} style={[styles.button, styles.button_edit, styles.confirmReply]}><AntDesign style={{ textAlign: 'center' }} name="checkcircleo" size={32} color="#FFF" /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    boxcontent: {
        padding: 15,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#d2d2d2",
        position: 'relative'
    },
    titleNV: {
        fontSize: 16,
        fontWeight: '600',
    },
    titleTime: {
        fontSize: 13,
        color: "#999999"
    },
    feedback_content: {
        marginTop: 10,
        fontSize: 15,
    },
    feedback_reply: {
        marginTop: 10,
        fontSize: 15,
        backgroundColor: '#DFEFFF',
        padding: 15,
        fontStyle: "italic"
    },
    buttons: {
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        right: 10,
        gap: 5,
    },
    button: {
        padding: 8,
        borderRadius: 10,
    },
    confirmReply: {
        backgroundColor: '#11A1E8',
    },
    buttonCancel: {
        backgroundColor: '#ff2000'
    },
    buttonReply: {
        backgroundColor: '#11A1E8',
    },
    buttonRead: {
        backgroundColor: '#fee086ff',
    },
    textArea: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#d2d2d2",
        borderStyle: "solid",
        padding: 10,
        height: 150,
        marginVertical: 10,
        textAlignVertical: 'top',
        flex: 0.8,
    },
    input_box: {
        flexDirection: 'row'
    },
    display_none: {
        display: 'none'
    },
    modal_container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal_box: {
        backgroundColor: '#fff',
        width: "80%",
        height: "50%",
        padding: 10,
        borderRadius: 10,
    },
    buttons_edit: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    button_edit: {
        flex: 0.5,
    }
})