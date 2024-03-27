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

                    <ProfileName onPress={onPressDoctor}>{informacao.name}</ProfileName>

                    <ProfileData>
                        <TextAge>22 Anos</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>
                    <ClockCard>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49b3ba" : "#8C8A97"} />
                        <TextBold situacao={situacao} color={"#49B3BA"}>14:00</TextBold>
                    </ClockCard>

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard>
                                <ButtonText situacao={situacao} onPress={onPressCancel}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard>
                                <ButtonText situacao={situacao} onPress={onPressAppointment}>Ver Prontuario</ButtonText>
                            </ButtonCard> 
                        )
                    }

                </ViewRow>


            </ContentCard>

        </ContainerCardList>

    )
}