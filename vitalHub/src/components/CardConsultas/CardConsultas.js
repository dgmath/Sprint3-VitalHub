import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, TextBold2, ViewRow } from "./style";
import { Text, TouchableOpacity } from 'react-native';
import { calcularIdade } from '../../utils/Auth';
import moment from 'moment';
import { TextNotifications } from '../ModalNotifications/style';

export const CardConsultas = ({
    consulta,
    profile,
    setDataConsulta,
    setShowModalNotifications
}) => {


    return (
        <ContainerCardList onPress={setDataConsulta}>
            {profile.role == 'Paciente' ?

                (
                    <TouchableOpacity>
                        <ProfileImage source={{ uri: consulta.medicoClinica.medico.idNavigation.foto }} />
                    </TouchableOpacity>
                )
                : (
                    <TouchableOpacity>
                        <ProfileImage source={{ uri: consulta.paciente.idNavigation.foto }} />
                    </TouchableOpacity>
                )}


            <ContentCard>
                    <TextNotifications>Data da consulta: {moment(consulta.dataConsulta).format("DD/MM")}</TextNotifications>
            </ContentCard>

        </ContainerCardList>

    )
}