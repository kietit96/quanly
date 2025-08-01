import { blacklistCheck } from "@/constants/blacklistCheck";
import Color from "@/constants/color";
import MultiSelectPicker from "@/layouts/MultiSelect";
import { getListBank } from "@/services/api/getListBank";
import { getBlacklistNote } from "@/services/getBlacklistNote";
import { getListChucvu } from "@/services/getListChucvu";
import { getListTinhTrang } from "@/services/getListTinhTrang";
import { TemployeeInfo, TinputFormNV } from "@/store/reducer/reducerEmployee/reducer";
import DateSelect from "@comp/DateSelect/DateSelect";
import CheckboxController from "@comp/Form/CheckboxController";
import InputController from "@comp/Form/InputController";
import InputCopyController from "@comp/Form/InputCopyController";
import InputNumberFormatControler from "@comp/Form/InputNumberFormatController";
import RadioCheckers from "@comp/RadioCheck/RadioCheck";
import GroupInput from "@comp/TextInput/Group";
import GroupInputInline from "@comp/TextInput/GroupInline";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { yupResolver } from "@hookform/resolvers/yup";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as yup from 'yup';
interface Ipros {
    employeeEditInfo: TemployeeInfo,
    onSubmit: (value: TinputFormNV) => void
}

export default function StaffEdit(props: Ipros) {
    const { employeeEditInfo, onSubmit } = props
    const { result, luongung, checkIfExit, phatsinh, ...employeeNoilam } = employeeEditInfo
    const { noilamID,
        noilam,
        noilam2,
        month,
        year,
        nhanvien, ...defaultValues
    } = employeeNoilam as { noilamID: string, noilam: string, noilam2: string, month: string, year: string, nhanvien: string } & TinputFormNV
    const schema = yup.object().shape({
        id: yup.number().required(),
        title: yup.string().required('Tên đăng nhập không được để trống'),
        phone: yup.string().nullable().default(''),
        phone2: yup.string().nullable().default(''),
        phonenguoithan: yup.string().nullable().default(''),
        luong: yup.object().shape({
            luong: yup.string().default(''),
            standard_working: yup.string().required('Ca không được để trống'),
            cadiem: yup.number().required(),
            chinhthuc: yup.number().required(),
        }),
        chucvu: yup.number().required(),
        tinhtrang: yup.number().required(),
        list_blacklist: yup.string().default(''),
        blacklist: yup.string().required(),
        address: yup.string().default(''),
        tamtru: yup.string().default(''),
        CCCD: yup.string().default(''),
        ngaycap: yup.string().default(''),
        nganhang: yup.string().default(''),
        nganhang_bin: yup.string().default(''),
        nganhang_stk: yup.string().default(''),
        ngaysinh: yup.string().default(''),
        ghichucanhan: yup.string().default(''),
    }).required()
    const { handleSubmit, control, formState: { errors } } = useForm<TinputFormNV>({
        defaultValues,
        resolver: yupResolver(schema),
    })
    const [listBank, setListBank] = useState([])
    const [blacklistNote, setBlacklistNote] = useState([])

    const handleSubmitForm = (data: TinputFormNV) => {
        onSubmit(data)
    }
    useEffect(() => {
        async function initLoad() {
            const listBank = await getListBank()
            setListBank(listBank.data)
            const blacklistnote = await getBlacklistNote()
            setBlacklistNote(blacklistnote)
        }
        initLoad()
    }, [])
    const listTinhTrang = getListTinhTrang()
    const listChucvu = getListChucvu()
    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={{ marginBottom: 5 }}>
                    <Text style={styles.modalTitle}>Thông tin nhân viên</Text>
                    <Text>{JSON.stringify(errors)}</Text>
                    <GroupInput label="Tên nhân viên">
                        <InputCopyController
                            placeholder="Nhập tên nhân viên..."
                            name="title"
                            error={errors?.title?.message}
                            control={control}
                        />
                    </GroupInput>
                    <GroupInput label="Ca làm việc">
                        <InputController
                            name="luong.standard_working"
                            control={control}
                            error={errors?.luong?.standard_working?.message}
                            placeholder="Nhập ca..."
                            keyboardType="numeric"
                        />
                    </GroupInput>
                    <GroupInput label="Lương cơ bản">
                        <View style={{ flexDirection: 'row', gap: 2 }}>
                            <View style={{ flex: 10 }}>
                                <InputNumberFormatControler
                                    name="luong.luong"
                                    control={control}
                                    error={errors?.luong?.luong?.message}
                                    placeholder="Nhập lương cơ bản..."
                                />
                            </View>
                            <TouchableOpacity style={[styles.buttonNextLuong, { flex: 2 }]} onPress={handleSubmit((data) => console.log(data))}><Image source={require('@/assets/icon/nextmonth.png')} style={{ width: 40, height: 40 }} /></TouchableOpacity>
                        </View>
                    </GroupInput>
                    <View style={styles.group}>
                        <GroupInputInline labelPosition="right" label="Ca đêm">
                            <CheckboxController
                                name="luong.cadiem"
                                control={control}
                            />
                        </GroupInputInline>
                        <GroupInputInline labelPosition="right" label="Chính thức">
                            <CheckboxController
                                name="luong.chinhthuc"
                                control={control}
                            />
                        </GroupInputInline>
                    </View>
                    <View style={styles.group}>
                        <GroupInputInline labelPosition="right" label="1-10">
                            <Checkbox style={{ padding: 15 }} />
                        </GroupInputInline>
                        <GroupInputInline labelPosition="right" label="11-25">
                            <Checkbox style={{ padding: 15 }} />
                        </GroupInputInline>
                        <GroupInputInline labelPosition="right" label="26-30">
                            <Checkbox style={{ padding: 15 }} />
                        </GroupInputInline>
                    </View>
                    <View style={[styles.blacklist, { marginBottom: 15 }]}>
                        <Controller
                            name="blacklist"
                            control={control}
                            render={({ field: { onChange, value } }) =>
                                <RadioCheckers value={value} onChangeValue={onChange} listCheck={blacklistCheck} />
                            }
                        />
                        <GroupInput label="Các thông tin danh sách đen">
                            <Controller
                                name="list_blacklist"
                                control={control}
                                render={({ field: { onChange, value } }) =>
                                    <MultiSelectPicker onChangeValue={onChange} value={value} items={blacklistNote} />
                                }
                            />
                        </GroupInput>
                    </View>
                    <Text style={styles.modalTitle}>Cập nhật thông tin cá nhân</Text>
                    <GroupInput label="Số điện thoại">
                        <InputController
                            name="phone"
                            control={control}
                            keyboardType="phone-pad"
                            placeholder="Nhập số điện thoại..."
                        />
                    </GroupInput>
                    <GroupInput label="Số điện thoại 2">
                        <InputController
                            name="phone2"
                            control={control}
                            keyboardType="phone-pad"
                            placeholder="Nhập số điện thoại 2..."
                        />
                    </GroupInput>
                    <GroupInput label="Số điện thoại người thân">
                        <InputController
                            name="phonenguoithan"
                            control={control}
                            placeholder="Nhập số điện thoại người thân..."
                        />
                    </GroupInput>
                    <GroupInput label="Tài khoản ngân hàng">
                        <InputController
                            name="nganhang"
                            control={control}
                            placeholder="Nhập tài khoản ngân hàng..."
                        />
                    </GroupInput>
                    <GroupInput label="Mã ngân hàng">
                        <Controller
                            name="nganhang_bin"
                            control={control}
                            render={({ field: { onChange, value } }) =>
                                <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
                                    {listBank.length > 0 && listBank.map((item: { shortName: string, name: string, bin: string }, index) => (
                                        <Picker.Item key={index} label={`${item.shortName} (${item.name})`} value={item.bin} />
                                    ))}
                                </Picker>
                            }
                        />
                    </GroupInput>
                    <GroupInput label="Số tài khoản">
                        <InputController
                            name="nganhang_stk"
                            control={control}
                            keyboardType="numeric"
                            placeholder="Nhập số tài khoản..."
                        />
                    </GroupInput>
                    <GroupInput label="Ngày sinh">
                        <Controller
                            name="ngaysinh"
                            control={control}
                            render={({ field: { value, onChange } }) =>
                                <DateSelect onChangeValue={onChange} value={value} />
                            }
                        />
                    </GroupInput>
                    <GroupInput label="Địa chỉ tạm trú">
                        <InputController placeholder="Nhập địa chỉ tạm trú..." name="tamtru" control={control} />
                    </GroupInput>
                    <GroupInput label="Địa chỉ thường trú">
                        <InputController placeholder="Nhập địa chỉ thường trú..." name="address" control={control} />
                    </GroupInput>
                    <GroupInput label="Số CCCD">
                        <InputController placeholder="Nhập số CCCD..." name="CCCD" control={control} />
                    </GroupInput>
                    <GroupInput label="Ngày cấp CCCD">
                        <InputController placeholder="Nhập ngày cấp CCCD..." name="ngaycap" control={control} />
                    </GroupInput>
                    <GroupInput label="Ghi chú cá nhân">
                        <InputController placeholder="Nhập ghi chú cá nhân..." name="ghichucanhan" control={control} />
                    </GroupInput>
                    <GroupInput label="Tình trạng">
                        <Controller
                            name="tinhtrang"
                            control={control}
                            render={({ field: { onChange, value } }) =>
                                <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
                                    {listTinhTrang && listTinhTrang.map((item: { value: number, label: string }, index) => (
                                        <Picker.Item key={index} label={item.label} value={item.value} />
                                    ))}
                                </Picker>
                            }
                        />
                    </GroupInput>
                    <GroupInput label="Chức vụ">
                        <Controller
                            name="chucvu"
                            control={control}
                            render={({ field: { onChange, value } }) =>
                                <Picker selectedValue={value} onValueChange={onChange} style={styles.picker}>
                                    {listChucvu && listChucvu.map((item: { value: number, label: string }, index) => (
                                        <Picker.Item key={index} label={item.label} value={item.value} />
                                    ))}
                                </Picker>
                            }
                        />
                    </GroupInput>
                </View>
            </ScrollView>
            <View style={styles.buttonSection}>
                <TouchableOpacity style={[styles.buttonDelete, styles.button]}>
                    <Text style={styles.buttonSubmitText}><FontAwesome name="trash-o" size={24} color="#FFFFFF" /> Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit(handleSubmitForm)} style={[styles.buttonSubmit, styles.button]}>
                    <Text style={styles.buttonSubmitText}><FontAwesome name="save" size={24} color="#FFFFFF" /> Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
    modalTitle: {
        fontWeight: '800',
        fontSize: 20,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundColor: Color.primary_bg,
        color: '#FFFFFF',
    },
    buttonNextLuong: {
        backgroundColor: Color.primary_bg,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textButtonNextLuong: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '600',
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
    },
    blacklist: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
    },
    picker: {
        backgroundColor: "#f2f2f2",
    },
    buttonSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    button: {
        flex: 1,
        borderRadius: 5,
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    buttonDelete: {
        backgroundColor: '#FF5C5C',
    },
    buttonSubmit: {
        backgroundColor: Color.primary_bg,
    },
    buttonSubmitText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#FFFFFF"
    }
})