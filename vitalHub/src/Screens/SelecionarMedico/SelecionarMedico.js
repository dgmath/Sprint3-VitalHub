import { useState } from "react";
import { Button, ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { LinkEndModal } from "../../components/Link/style";
import { TitleModal, TitleSelect } from "../../components/Title/style";
import { ListComponent } from "../../components/List/list";
import { ButtonCardMedico } from "../../components/ButtonCardMedico/ButtonCardMedico";

// criar state para receber a lista de medicos(array)
// criar a funcao para obter a lista de medicos da api e setar no state
// criar um effect 
export const SelecionarMedico = ({navigation}) => {

    const [selected, setSelected] = useState("")

    const [medico, setMedico] = useState([
        {
            id: "1",
            name: "Dra Alessandra",
            especialidade: "Demartologa, Esteticista",
        },
        {
            id: "2",
            name: "Dr Kumushiro",
            especialidade: "Cirurgião, Cardiologista",
        },
        {
            id: "3",
            name: "Dr Rodrigo Santos",
            especialidade: "Clínico, Pediatra",
        },
    ]);

    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <TitleSelect>Selecionar Medico</TitleSelect>

                    <ListComponent
                        data={medico}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                            <ButtonCardMedico
                                name={item.name}
                                especialidade={item.especialidade}
                                selected={item.name === selected}
                                onPress={() => {
                                    setSelected(item.name);
                                }}
                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <ButtonRecover onPress={() => navigation.navigate("SelecionarData")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonRecover>

                    <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}