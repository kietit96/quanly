import Color from '@/constants/color'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Loading() {
    return (
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Color.primary} />
        </View>
    )
}