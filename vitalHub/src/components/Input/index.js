import { InputPerfil } from "./style"

export const InputForm = ({
    placeholder,
    placeholderColor = "#33303E",
    BorderColor="#F5F3F3",
    fieldHeight = 50,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength
}) => {
    return (
        <InputPerfil
            BorderColor={BorderColor}
            placeholderColor={placeholderColor}
            fieldHeight={fieldHeight}
            placeholder={placeholder}
            keyBoardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}