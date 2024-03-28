import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./style";

export const AppointmentCard = ({
    onPressCancel,
    onPressAppointment,
    onPressDoctor,
    consulta
}) => {


    return (
        <ContainerCardList>

            <ProfileImage source={require("../../../assets/Perfil.jpg")}/>

            <ContentCard>
                <DataProfileCard>

                    <ProfileName onPress={onPressDoctor}>{consulta.medicoClinica.medico.idNavigation.nome}</ProfileName>

                    <ProfileData>
                        <TextAge>{consulta.medicoClinica.medico.especialidade.especialidade1}</TextAge>
                        <TextBold>{consulta.prioridade.prioridade == '1' ? "Rotina" : consulta.prioridade.prioridade == "2" ? "Exame" : "Urgência"}</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard>
                        <AntDesign name="clockcircle" size={14} color="#8C8A97" />
                        <TextBold color={"#49B3BA"}>14:00</TextBold>
                    </ClockCard>

                    {/* {
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
                    } */}

                </ViewRow>


            </ContentCard>

        </ContainerCardList>

    )
}