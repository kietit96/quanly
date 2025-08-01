import InputCopy from "@comp/TextInput/InputCopy";
import { Controller } from "react-hook-form";
import TextError from "./TextError";
import { TFormProps } from "./type";

export default function InputCopyController(props: TFormProps) {
    const { name, control, placeholder = "input...", error } = props

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) =>
                <>
                    <InputCopy placeholder={placeholder} value={value} onChangeText={onChange} />
                    {error && <TextError message={error} />}
                </>
            }
        />
    )
}