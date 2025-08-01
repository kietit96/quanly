import Input from "@comp/TextInput/input";
import { TFormProps } from "./type";
import { Controller } from "react-hook-form";
import { Tkeyboardtype } from "@comp/TextInput/type";
import TextError from "./TextError";

export default function InputController(props: { keyboardType?: Tkeyboardtype } & TFormProps) {
    const { name, control, error, placeholder, keyboardType = 'default' } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) =>
                <>
                    <Input value={value} onChangeText={onChange} keyboardType={keyboardType} placeholder={placeholder} />
                    {error && <TextError message={error} />}
                </>
            }
        />
    )

}