import Color from "@/constants/color"
import { formatDate } from "@/functions/lib"
import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import ToastManager, { Toast } from 'toastify-react-native'
enum VoteStatus {
    Neutral = 0,
    Approve = 1,
    Disapprove = 2,
}

interface Icompany {
    title: string,
    address: string
}

interface IProps {
    nv: string,
    approve: VoteStatus,
    time: string,
    date: string,
    reason: string,
    note: string,
    companylist: Icompany[]
}
function CompStateApprovement(props: { approvement: VoteStatus }) {
    const { approvement } = props
    const stateApprovement_text = approvement === 1 ? "Chấp nhận" : approvement === 2 && "Không chấp nhận"
    const stateApprovement_style = approvement === 1 ? styles.approve : approvement === 2 && styles.disapprove
    const iconApprovement = approvement === 1 ? "check-circle" : approvement === 2 && "times-circle"
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textApprovement, stateApprovement_style]}><FontAwesome5 name={iconApprovement || 'times'} size={15} color="#FFFFFF" /> {stateApprovement_text}</Text>
        </View>
    )

}
export default function AbsentItem(props: IProps) {
    const { nv, note, approve, time, date, reason, companylist } = props
    const { id: idNV, title: titleNV, phone: phoneNV } = JSON.parse(nv) // parse 
    const [stateApprovement, setStateApprovement] = useState({
        originApprovement: +approve,
        changedApprovement: +approve
    })
    const [stateNote, setStateNote] = useState({
        originNote: note,
        changedNote: note
    })
    const { originApprovement, changedApprovement } = stateApprovement
    const { originNote, changedNote } = stateNote
    const [isEdit, setEdit] = useState(originApprovement === 0 ? true : false)
    const switchApprovement = (value: number) => {
        setStateApprovement({ ...stateApprovement, changedApprovement: value })
    }
    const editNote = (value: string) => {
        setStateNote({ ...stateNote, changedNote: value })
    }
    const goBack = () => {
        setStateApprovement({ ...stateApprovement, changedApprovement: originApprovement })
        setStateNote({ ...stateNote, changedNote: originNote })
        setEdit(false)
    }
    const sendApprovement = () => {
        if (changedApprovement === 0) {
            Toast.show({
                type: "error",
                text1: "Gửi thất bại",
                text2: "Chưa chọn chấp nhận hoặc từ chối đơn xin nghỉ phép",
                position: 'top',
                useModal: true,
                visibilityTime: 2000,
            })
            return
        }
        setStateApprovement({ ...stateApprovement, originApprovement: changedApprovement })
        setStateNote({ ...stateNote, originNote: changedNote })
        setEdit(false)
    }
    return (
        <View style={[styles.container, originApprovement === 1 ? { backgroundColor: '#D5F5E3' } : originApprovement === 2 && { backgroundColor: '#FFE1E1' }]}>
            <View style={styles.top}>
                {originApprovement !== 0 && <CompStateApprovement approvement={originApprovement} />}
                <Text style={styles.textTime}>{time}</Text>
                <View style={styles.top_content}><Text style={styles.textNV}>{titleNV}</Text><Text>{' - ' + phoneNV}</Text></View>
            </View>
            <View style={styles.company_info}>
                {
                    companylist.map((company: Icompany, index: number) => (
                        <View key={index}>
                            <Text style={{ marginBottom: 5 }}>▸ Mục tiêu: {company.title}</Text>
                            <Text>▸ Địa chỉ: {company.address}</Text>
                        </View>
                    ))}
            </View>
            <View style={styles.absent_info}>
                <Text style={{ paddingBottom: 5 }}><Text style={{ fontWeight: "600" }}>Ngày nghỉ: </Text>{formatDate(date)}</Text>
                <Text><Text style={{ fontWeight: "600" }}>Lý do: </Text>{reason}</Text>
            </View>
            <View style={styles.control_box}>
                {isEdit && (
                    <View>
                        <View style={{ flexDirection: "row", marginBottom: 10 }}>
                            <TouchableOpacity style={styles.backEdit} onPress={goBack}><Text style={styles.backEditText}><FontAwesome5 name="backspace" size={15} color="#FFFFFF" /> Back</Text></TouchableOpacity>
                        </View>
                        <View style={styles.controlsBtn}>
                            <TouchableOpacity style={[styles.button, styles.approve, changedApprovement === 1 && styles.selected]} onPress={() => switchApprovement(1)}><Text style={styles.buttonText}>Chấp nhận</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.disapprove, changedApprovement === 2 && styles.selected]} onPress={() => switchApprovement(2)}><Text style={styles.buttonText}>Không chấp nhận</Text></TouchableOpacity>
                        </View>
                    </View>)}
                {!isEdit &&
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={styles.edit} onPress={() => setEdit(!isEdit)}><FontAwesome5 name="edit" size={24} color="#FFFFFF" /></TouchableOpacity>
                    </View>
                }
                <TextInput onChangeText={editNote} value={changedNote} readOnly={isEdit ? false : true} placeholder="Lý do chấp nhận hoặc từ chối đơn xin nghỉ phép..." style={styles.textInput} multiline />
                {isEdit && <TouchableOpacity style={[styles.button, styles.send, { marginTop: 10 }]} onPress={sendApprovement}><Text style={styles.buttonText}>Gửi</Text></TouchableOpacity>}
            </View>
            <ToastManager />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
    },
    top: {
        borderBottomColor: '#C7C7C7',
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingBottom: 10,
    },
    top_content: {
        flexDirection: "row",
        alignItems: "center",
    },
    textApprovement: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 10,
        color: "#FFFFFF",
        fontWeight: "600",
        width: 'auto',
        fontSize: 15,
    },
    textNV: {
        fontSize: 16,
        fontWeight: "600",
    },
    company_info: {
        paddingVertical: 10,
        borderBottomColor: '#C7C7C7',
        borderBottomWidth: 1,
        borderStyle: "solid",
    },
    control_box: {
        paddingVertical: 10,
    },
    controlsBtn: {
        flexDirection: 'row',
        gap: 5
    },
    absent_info: {
        paddingVertical: 10,
        borderBottomColor: '#C7C7C7',
        borderBottomWidth: 1,
        borderStyle: "solid",
    },
    textTime: {
        fontSize: 12,
        color: "#8e8e8eff"
    },
    button: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#C7C7C7",
        borderStyle: "solid",
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    buttonText: {
        textAlign: "center",
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontWeight: "800"
    },
    approve: {
        backgroundColor: '#1695AD'
    },
    disapprove: {
        backgroundColor: '#D45385',
    },
    selected: {
        backgroundColor: '#1DD827'
    },
    send: {
        backgroundColor: Color.primary_text
    },
    edit: {
        backgroundColor: Color.primary,
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
    },
    backEdit: {
        backgroundColor: '#A6A4A4',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    backEditText: {
        textAlign: "center",
        color: "#FFFFFF",
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#C7C7C7",
        borderStyle: "solid",
        marginTop: 10,
        padding: 10,
        height: 120,
        textAlignVertical: "top",
        backgroundColor: "#FFFFFF"
    }
})