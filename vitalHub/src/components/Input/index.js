import { InputPerfil } from "./style"

export const InputForm = ({
    placeholder,
    placeholderColor = "#33303E",
    BorderColor="#F5F3F3",
    fieldHeight = 50,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength,
    editable = false
}) => {
    return (
        <InputPerfil
            BorderColor={BorderColor}
            placeholderColor={placeholderColor}
            editable={editable}
            fieldHeight={fieldHeight}
            placeholder={placeholder}
            keyBoardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}

        />
    )
}