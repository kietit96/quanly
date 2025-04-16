import Color from "@/constants/color"
import useStateDate from "@/hooks/useStateDate"
import useStateLocation from "@/hooks/useStateLocation"
import fetchRequest from "@/services/requestOrigin"
import { TitemLocation } from "@/store/reducer/reducerLocation/reducer"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ItemCompany from "./ItemCompany"
type Tdata = {
    stateTimeDate: number
    location: TitemLocation
}
export default function Location() {
    const [location, dispatch] = useStateLocation()
    const [stateTimeDate, dispatchTimeDate] = useStateDate<number>()
    const [listCompany, setListCompany] = useState([])
    useEffect(() => {
        const data = {
            stateTimeDate,
            location
        }
        const loadListCompany = async (data: Tdata) => {
            const date = new Date(stateTimeDate)
            const year = date.getFullYear()
            const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
            const formData = new FormData()
            formData.append('month', month.toString())
            formData.append('year', year.toString())
            formData.append('location_id', location.id.toString())
            const result = await fetchRequest('/home?do=get_base_on_location', {
                method: "POST",
                body: formData
            })
            setListCompany(result.data)
        }
        loadListCompany(data)
    }, [location])
    return (
        <View style={styles.container}>
            <Text style={styles.titleQuan}>{location.title}</Text>
            <FlatList
                data={listCompany}
                renderItem={({ item }: any) => <ItemCompany company={item.company} />}
                keyExtractor={(item: any) => item.company.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        marginHorizontal: 'auto',
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
    },
    titleQuan: {
        marginVertical: 15,
        alignSelf: 'flex-start',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        padding: 5,
        borderRadius: 5,
        backgroundColor: Color.primary
    }
})