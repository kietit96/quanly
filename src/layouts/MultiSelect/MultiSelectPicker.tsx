import Color from "@/constants/color";
import ModalWrapper from "@comp/Modal/Modal";
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useEffect, useReducer, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ItemSelect from "./ItemSelect";
import { setSearchedList, setSearchText, setSelectedItems, setTempSelectedItems } from "./reducer/action";
import reducerMultiSelect, { initListMulti } from "./reducer/reducer";
type TItem = {
    name: string,
    value: any,
}
interface IProps {
    items: TItem[],
    label?: string,
    onChangeValue: (value: string) => void,
    value: string
}

export default function MultiSelectPicker(props: IProps) {
    const { items, value, onChangeValue, label = "Select item..." } = props;
    const [stateItems, dispatch] = useReducer(reducerMultiSelect, initListMulti, (init) => {
        return {
            ...init,
            stateTempSelectedItems: value !== '' ? value.split(',') : []
        }
    })
    const {
        stateSearchText,
        stateTempSelectedItems,
        stateSelectedItemsConfirm,
        stateListSearched
    } = stateItems

    const [isModalVisible, setModalVisible] = useState(false)

    const handleCloseModal = () => {
        setModalVisible(false)
    }
    const handleChangeTextSearch = (value: string) => {
        dispatch(setSearchText(value))
    }
    const handleChooseMultiple = (value: string) => {
        dispatch(setTempSelectedItems(value))
    }
    const handleConfirmSelect = () => {
        onChangeValue(stateTempSelectedItems.join(','))
        dispatch(setSelectedItems({ items, states: stateTempSelectedItems }))
        setModalVisible(false)
    }
    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(setSearchedList(items))
        }
    }, [items])
    return (
        <View>
            <TouchableOpacity style={styles.buttonSection} onPress={() => setModalVisible(true)}>
                <Text style={styles.textSelection}>{label}</Text>
                <Entypo name="chevron-down" size={24} color="black" />
            </TouchableOpacity>
            {stateSelectedItemsConfirm.length > 0 &&
                <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', gap: 5, marginBottom: 10 }}>
                        {
                            stateSelectedItemsConfirm.map((item, index) =>
                                <Text style={styles.textSelectMulti} key={index}>{item.name}</Text>
                            )
                        }
                    </View>
                </ScrollView>
            }
            <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={handleCloseModal}
                visible={isModalVisible}
            >
                <ModalWrapper onClose={handleCloseModal}>
                    <View style={styles.modalContent}>
                        <View style={styles.searchSection}>
                            <EvilIcons style={styles.iconSearch} name="search" size={30} />
                            <TextInput onChangeText={handleChangeTextSearch} value={stateSearchText} style={styles.inputSearch} placeholder="Search..." />
                        </View>
                        <View style={styles.listSection}>
                            <ScrollView>
                                {
                                    (!items || items.length < 1)
                                        ?
                                        <Text style={styles.textnotfound}>No result found</Text>
                                        :
                                        stateListSearched && stateListSearched.map((item: TItem, index: number) => {

                                            return <ItemSelect isSelected={stateTempSelectedItems.some(value => value === item.value)} onPress={handleChooseMultiple} key={index} {...item} />
                                        })
                                }
                            </ScrollView>
                        </View>
                        <View style={styles.buttonConfirm}>
                            <TouchableOpacity onPress={handleConfirmSelect}><Text style={styles.buttonConfirmText}>Confirm</Text></TouchableOpacity>
                        </View>
                    </View>
                </ModalWrapper>
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
    buttonSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d2d2d2',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textSelection: {
        fontSize: 16,
        fontWeight: '400',
    },
    textSelectMulti: {
        backgroundColor: '#d2d2d2',
        padding: 5,
        marginTop: 10,
        borderRadius: 5,
    },
    modalContent: {
        position: 'relative',
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#fff',
        flex: 1
    },
    searchSection: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    iconSearch: {
        position: 'absolute',
        left: 5,
        top: '50%',
        transform: [{ translateY: -15 }],
    },
    inputSearch: {
        width: "100%",
        fontSize: 16,
        paddingLeft: 40,
        paddingVertical: 15,
    },
    listSection: {
        marginVertical: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        paddingBottom: 90,
    },
    textnotfound: {
        fontSize: 14,
        textAlign: 'center'
    },
    buttonConfirm: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Color.primary_text,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderTopLeftRadius: 5,
    },
    buttonConfirmText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase'
    }
})