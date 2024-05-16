import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, TextBold2, ViewRow } from "./style";
import { TouchableOpacity } from 'react-native';
import { calcularIdade } from '../../utils/Auth';
import moment from 'moment';

export const AppointmentCard = ({
    onPressCancel,
    onPressAppointment,
    onPressDoctor,
    consulta,
    profile
}) => {


    return (
        <ContainerCardList>
            {profile.role == 'Paciente' ?

                (
                    <TouchableOpacity onPress={onPressDoctor}>
                        <ProfileImage source={{ uri: consulta.medicoClinica.medico.idNavigation.foto }} />
                    </TouchableOpacity>
                )
                : (
                    <TouchableOpacity onPress={onPressAppointment}>
                        <ProfileImage source={{ uri: consulta.paciente.idNavigation.foto }} />
                    </TouchableOpacity>
                )}


            <ContentCard>
                <DataProfileCard>
                    <ProfileName>{profile.role == 'Paciente' ? consulta.medicoClinica.medico.idNavigation.nome : consulta.paciente.idNavigation.nome}</ProfileName>

                    <ProfileData>
                        <TextAge>{profile.role == 'Paciente' ? consulta.medicoClinica.medico.especialidade.especialidade1 : calcularIdade(consulta.paciente.dataNascimento.split('T', [1]))} {profile.role == 'Medico' ? 'anos' : ''}</TextAge>
                        {/* <TextAge>{consulta.situacao.situacao}</TextAge> */}
                        <TextBold2>{consulta.prioridade.prioridade == '1' ? "Rotina" : consulta.prioridade.prioridade == "2" ? "Exame" : "Urgência"}</TextBold2>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard situacao={consulta.situacao.situacao}>
                        <AntDesign name="clockcircle" size={14} color={consulta.situacao.situacao == 'Agendadas' ? "#49B3BA" : "#4E4B59"} />
                        <TextBold situacao={consulta.situacao.situacao}>{moment(consulta.dataConsulta).format("HH:mm")}</TextBold>
                    </ClockCard>

                    {
                        consulta.situacao.situacao == "Realizadas" ? (
                            <ButtonCard>
                                <ButtonText situacao={consulta.situacao.situacao} onPress={onPressAppointment}>Ver Prontuario</ButtonText>
                            </ButtonCard>
                        ) : consulta.situacao.situacao == "Agendadas" ? (
                            <ButtonCard>
                                <ButtonText situacao={consulta.situacao.situacao} onPress={onPressCancel}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <>
                            </>
                        )
                    }

                </ViewRow>


            </ContentCard>

        </ContainerCardList>

    )
}