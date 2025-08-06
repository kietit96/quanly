import { ScrollView, StyleSheet, View } from "react-native";
import SingleNV from "./IitemNV/SingleNV";

interface IProps {
    listNV: any[]
    listNV2: any[]
    seenStaffs: Set<number>,
    children: React.ReactNode
}

function ItemNV(props: IProps) {
    const { listNV, listNV2, seenStaffs, children } = props
    return (
        <ScrollView style={{ marginTop: 20 }} horizontal>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    {children}
                </View>
                <View style={styles.bodyContainer} >
                    {
                        listNV.length > 0 && listNV.map((employee, index) => {
                            const alreadySeen = seenStaffs.has(employee.id)
                            if (!alreadySeen) {
                                seenStaffs.add(employee.id)
                            }
                            return <SingleNV
                                key={index}
                                employee={{ ...employee, luongung: employee.luongung ? { ...employee.luongung, isSeen: alreadySeen } : employee.luongung }}
                            />
                        })
                    }
                </View >
            </View>
        </ScrollView>
    )
}
export default ItemNV
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    bodyContainer: {
        flex: 1,
    },
})