import useStateDate from '@/hooks/useStateDate'
import { View } from 'react-native'
export default function Home() {
  const [stateTimeDate, dispatch] = useStateDate<number>()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>
  )
}