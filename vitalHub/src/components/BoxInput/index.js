import { FieldContent } from "../BoxInput/style"
import { InputForm, InputForm2 } from "../Input"
import { Label } from "../Label"

export const BoxInput = ({
    fieldWidth = 100,
    fieldHeight = 50,
    BorderColor = "#49B3BA",
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
    multiline
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label
                textLabel={textLabel}
            />

            <InputForm
                BorderColor={BorderColor}
                fieldHeight={fieldHeight}
                editable={editable}
                placeholder={placeholder}
                keyBoardType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                multiline={multiline}
            />
        </FieldContent>
    )
}
export const BoxInput2 = ({
    fieldWidth = 100,
    fieldHeight = 50,
    BorderColor = "#F5F3F3",
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
            <Label
                textLabel={textLabel}
            />

            <InputForm2
                BorderColor={BorderColor}
                fieldHeight={fieldHeight}
                editable={editable}
                placeholder={placeholder}
                keyBoardType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    )
}