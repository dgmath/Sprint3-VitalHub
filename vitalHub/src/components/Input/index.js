import { InputPerfil, InputPerfilCinza } from "./style"

export const InputForm = ({
    placeholder,
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

export const InputForm2 = ({
    placeholder,
    BorderColor="#F5F3F3",
    fieldHeight = 50,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength,
    editable = false
}) => {
    return (
        <InputPerfilCinza
            BorderColor={BorderColor}
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