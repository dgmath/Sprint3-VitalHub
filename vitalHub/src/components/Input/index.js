import { InputPerfil, InputPerfilCinza } from "./style"

export const InputForm = ({
    placeholder,
    BorderColor="#F5F3F3",
    fieldHeight = 50,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength,
    editable = false,
    multiline
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
            multiline={multiline}
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
    editable = false,
    multiline={multiline}

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
            multiline={multiline}
        />
    )
}