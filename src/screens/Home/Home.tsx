import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const date = useSelector((state: { date: { date: number } }) => state.date.date)
  const dateState = new Date(date)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{dateState.toLocaleDateString()}</Text>
    </View>
  )
}