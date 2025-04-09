import useStateDate from '@/hooks/useStateDate'
import useStateLocation from '@/hooks/useStateLocation'
import { Text, View } from 'react-native'
import All from './Layout/All'
export default function Home() {
  const [stateTimeDate, dispatchTimeDate] = useStateDate<number>()
  const [location, dispatchLocation] = useStateLocation()
  // console.log(location)
  return (
    <View>
      {location.id === -1 ? <All /> : <Text>sss</Text>}
    </View>
  )
}