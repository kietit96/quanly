import CheckBox from "@comp/CheckBox/CheckBox";
import { Controller } from "react-hook-form";
import { TFormProps } from "./type";

export default function CheckboxController(props: TFormProps) {
    const { name, control } = props
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) =>
                <CheckBox onChangeValue={onChange} value={value} />}
        />
    )
}