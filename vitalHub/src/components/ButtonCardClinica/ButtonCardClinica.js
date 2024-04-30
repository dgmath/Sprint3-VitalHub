import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonContent, CalendarText, CalendarView, Container, DataProfileCard, DataProfileCard2, LocalText, StarText, StarView, TitleClinica } from './style';
import { useState } from 'react';

export const ButtonCardClinica = ({
    // name,
    // stars,
    // local,
    clickButton,
    clinica,
    setClinica,
    selected,
    setBorder
}) => {

    function borda() {
        setBorder(clinica.id)
        setClinica({
            clinicaId: clinica.id,
            clinicaLabel: clinica.nomeFantasia
        })
    }
    return (
        <Container>
            <ButtonContent
                selected={selected}
                clickButton={clickButton}
                onPress={() => borda()}

            >
                <DataProfileCard>
                    <TitleClinica>{clinica.nomeFantasia}</TitleClinica>
                    <LocalText>{clinica.endereco.cidade}</LocalText>
                </DataProfileCard>
                <DataProfileCard2>
                    {/* <StarView>
                        <AntDesign name="star" size={20} color="#F9A620" />
                        <StarText>{stars}</StarText>
                    </StarView> */}
                    <CalendarView>
                        <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                        <CalendarText>seg-sex</CalendarText>
                    </CalendarView>
                </DataProfileCard2>
            </ButtonContent>
        </Container>
    )
}