import Color from "@/constants/color"
import useStateDate from "@/hooks/useStateDate"
import useStateLocation from "@/hooks/useStateLocation"
import fetchRequest from "@/services/requestOrigin"
import { TitemLocation } from "@/store/reducer/reducerLocation/reducer"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import ItemCompany from "./ItemCompany"
import Loading from "@comp/Loading/Loading"
type Tdata = {
    stateTimeDate: number
    location: TitemLocation
}
export default function Location() {
    const [location, dispatch] = useStateLocation()
    const [stateTimeDate, dispatchTimeDate] = useStateDate()
    const [listCompany, setListCompany] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const data = {
            stateTimeDate: stateTimeDate.date,
            location
        }
        const loadListCompany = async (data: Tdata) => {
            setLoading(true)
            const date = new Date(stateTimeDate.date)
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
            setLoading(false)
        }
        loadListCompany(data)
    }, [location, stateTimeDate])
    return (
        loading ? <Loading /> :
            <View style={styles.container}>
                <Text style={styles.titleQuan}>{location.title}</Text>
                <FlatList
                    style={{ marginBottom: 20 }}
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