import { ContainerPerfil } from "../Container/style"
import { ButtonContent, DataProfileCard, ImageCardMedico, NameMedico, SpecialtyText } from "./style"

export const ButtonCardMedico = ({
    name,
    especialidade,
    selected,
    onPress
}) => {
    return (
        <ContainerPerfil>
            <ButtonContent
                onPress={onPress}
                ClickButton={selected}
            >

                <ImageCardMedico source={require("../../../assets/Perfil.jpg")}/>

                <DataProfileCard>
                    <NameMedico>{name}</NameMedico>
                    <SpecialtyText>{especialidade}</SpecialtyText>
                </DataProfileCard>

            </ButtonContent>
        </ContainerPerfil>
    )
}