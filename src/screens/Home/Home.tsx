import { useStateDate } from '@/hooks/useStateDate'
import { View, Text } from 'react-native'
export default function Home() {
  const stateDate = new Date(useStateDate())
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{stateDate.toDateString()}</Text>
    </View>
  )
}