import InputNumberFormat from "@comp/TextInput/InputNumberFormat";
import { Controller } from "react-hook-form";
import TextError from "./TextError";
import { TFormProps } from "./type";

export default function InputNumberFormatControler(props: TFormProps) {
    const { name, control , error, placeholder = "Input number..." } = props
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) =>
                <>
                    <InputNumberFormat value={value} onChangeText={onChange} placeholder={placeholder} />
                    {error && <TextError message={error} />}
                </>
            }
        />
    )
}