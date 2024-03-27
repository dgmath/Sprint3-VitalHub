import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonContent, CalendarText, CalendarView, Container, DataProfileCard, DataProfileCard2, LocalText, StarText, StarView, TitleClinica } from './style';

export const ButtonCardClinica = ({
    // name,
    // stars,
    // local,
    operatingDays,
    selected = true,
    onPress,
    listaClinica
}) => {
    return (
        <Container>
            <ButtonContent 
                onPress={onPress}
                ClickButton={selected}
            >
                <DataProfileCard>
                    <TitleClinica>{listaClinica.nomeFantasia}</TitleClinica>
                    <LocalText>{listaClinica.endereco.cidade}</LocalText>
                </DataProfileCard>
                <DataProfileCard2>
                    {/* <StarView>
                        <AntDesign name="star" size={20} color="#F9A620" />
                        <StarText>{stars}</StarText>
                    </StarView> */}
                    <CalendarView>
                        <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                        <CalendarText>{operatingDays}</CalendarText>
                    </CalendarView>
                </DataProfileCard2>
            </ButtonContent>
        </Container>
    )
}