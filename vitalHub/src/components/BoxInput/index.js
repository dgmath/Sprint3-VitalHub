import { FieldContent } from "../BoxInput/style"
import { InputForm } from "../Input"
import { Label } from "../Label"

export const BoxInput = ({
    fieldWidth = 100,
    fieldHeight = 50,
    placeholderColor = "#33303E",
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

            <InputForm
                BorderColor={BorderColor}
                placeholderColor={placeholderColor}
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