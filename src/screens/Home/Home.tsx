import useStateLocation from '@/hooks/useStateLocation'
import { View } from 'react-native'
import All from './Layout/All'
import Location from './Layout/Location'
export default function Home() {
  const [location, dispatchLocation] = useStateLocation()
  return (
    <View style={{ flex: 1 }}>
      {location.id === -1 ? <All /> : <Location />}
    </View>
  )
}