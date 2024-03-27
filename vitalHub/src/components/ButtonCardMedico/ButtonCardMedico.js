import { ContainerPerfil } from "../Container/style"
import { ButtonContent, DataProfileCard, ImageCardMedico, NameMedico, SpecialtyText } from "./style"

export const ButtonCardMedico = ({
    selected,
    onPress,
    medico
}) => {
    return (
        <ContainerPerfil>
            <ButtonContent
                onPress={onPress}
                ClickButton={selected}
            >

                <ImageCardMedico source={require("../../../assets/Perfil.jpg")}/>

                <DataProfileCard>
                    {/* Entrando na propriedade e trazendo oq for necessarios */}
                    <NameMedico>{medico.idNavigation.nome}</NameMedico>
                    <SpecialtyText>{medico.especialidade.especialidade1}</SpecialtyText>
                </DataProfileCard>

            </ButtonContent>
        </ContainerPerfil>
    )
}