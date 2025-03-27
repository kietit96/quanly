import { StyleProp, ViewStyle } from "react-native";

export type TProps = {
    placeholder?: string,
    placeholderColor?: string,
    value: string,
    onChangeText: (text: string) => void | unknown,
    style: StyleProp<ViewStyle>,
}