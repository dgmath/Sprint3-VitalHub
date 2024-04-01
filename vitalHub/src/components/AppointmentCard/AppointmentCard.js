import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";
import { TouchableOpacity } from 'react-native';

export const AppointmentCard = ({
    onPressCancel,
    onPressAppointment,
    onPressDoctor,
    consulta,
}) => {


    return (
        <ContainerCardList>
            <TouchableOpacity onPress={onPressDoctor}>
                <ProfileImage source={require("../../../assets/Perfil.jpg")} />
            </TouchableOpacity>

            <ContentCard>
                <DataProfileCard>
                    <ProfileName>{consulta.medicoClinica.medico.idNavigation.nome}</ProfileName>

                    <ProfileData>
                        <TextAge>{consulta.medicoClinica.medico.especialidade.especialidade1}</TextAge>
                        {/* <TextAge>{consulta.situacao.situacao}</TextAge> */}
                        <TextBold>{consulta.prioridade.prioridade == '1' ? "Rotina" : consulta.prioridade.prioridade == "2" ? "Exame" : "Urgência"}</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard situacao={consulta.situacao.situacao}>
                        <AntDesign name="clockcircle" size={14} color={consulta.situacao.situacao == 'Agendadas' ? "#49B3BA" : "#4E4B59"} />
                        <TextBold situacao={consulta.situacao.situacao}>14:00</TextBold>
                    </ClockCard>

                    {
                        consulta.situacao.situacao == "Canceladas" ? (
                            <>
                            </>
                        ) : consulta.situacao.situacao == "Agendadas" ? (
                            <ButtonCard>
                                <ButtonText situacao={consulta.situacao.situacao} onPress={onPressCancel}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard>
                                <ButtonText situacao={consulta.situacao.situacao} onPress={onPressAppointment}>Ver Prontuario</ButtonText>
                            </ButtonCard>
                        )
                    }

                </ViewRow>


            </ContentCard>

        </ContainerCardList>

    )
}