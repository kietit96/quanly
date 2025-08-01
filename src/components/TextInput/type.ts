import { StyleProp, ViewStyle } from "react-native";

export type TProps = {
    placeholder?: string,
    placeholderColor?: string,
    value?: string,
    onChangeText: (text: string) => void | unknown | null,
    style?: StyleProp<ViewStyle>,
    onBlur?: () => void
}
export type Tkeyboardtype = 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';