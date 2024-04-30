import { ContainerPerfil } from "../Container/style"
import { ButtonContent, DataProfileCard, ImageCardMedico, NameMedico, SpecialtyText } from "./style"

export const ButtonCardMedico = ({
    selected,
    medico,
    setMedico
}) => {
    return (
        <ContainerPerfil>
            <ButtonContent
                onPress={() => setMedico({
                    medicoClinicaId: medico.id,
                    medicoLabel: medico.idNavigation.nome,
                    medicoEspecialidade: medico.especialidade.especialidade1
                })}
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