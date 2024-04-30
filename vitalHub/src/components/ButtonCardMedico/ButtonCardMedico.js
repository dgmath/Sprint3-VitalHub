import { ContainerPerfil } from "../Container/style"
import { ButtonContent, DataProfileCard, ImageCardMedico, NameMedico, SpecialtyText } from "./style"

export const ButtonCardMedico = ({
    selected,
    medico,
    setMedico,
    setBorder,
    clickButton
}) => {
    function borda() {
        setBorder(medico.id)
        setMedico({
            medicoClinicaId: medico.id,
            medicoLabel: medico.idNavigation.nome,
            medicoEspecialidade: medico.especialidade.especialidade1
        })
    }
    return (
        <ContainerPerfil>
            <ButtonContent
                clickButton={clickButton}
                onPress={() => borda()}
                selected={selected}
            >

                <ImageCardMedico source={{ uri: medico.idNavigation.foto }} />

                <DataProfileCard>
                    {/* Entrando na propriedade e trazendo oq for necessarios */}
                    <NameMedico>{medico.idNavigation.nome}</NameMedico>
                    <SpecialtyText>{medico.especialidade.especialidade1}</SpecialtyText>
                </DataProfileCard>

            </ButtonContent>
        </ContainerPerfil>
    )
}