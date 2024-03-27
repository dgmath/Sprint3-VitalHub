import { useEffect, useState } from "react";
import { Button, ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { LinkEndModal } from "../../components/Link/style";
import { TitleModal, TitleSelect } from "../../components/Title/style";
import { ListComponent } from "../../components/List/list";
import { ButtonCardMedico } from "../../components/ButtonCardMedico/ButtonCardMedico";

import api from "../../Services/Services";

export const SelecionarMedico = ({ navigation }) => {

    const [selected, setSelected] = useState("")
    //Array para receber a lista de medicos
    const [medicoLista, setMedicoLista] = useState([]);

    async function ListarMedico() {
        //Instanciar a nossa conexao da api
        //chamando o metodo via a api passando dentro do metodo o caminho da chamada
       await api.get('/Medicos')
        .then(response => {
            //setando a lista com o response.data ou seja todo o retorno
            setMedicoLista(response.data);
            console.log(medicoLista);
        })
        .catch( error => {
            console.log(error);
        })
    }

    useEffect(() => {
        ListarMedico();
    }, [])

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

    //Criar state para receber a lista de medicos (array)

    //Criar função obter a lista de medicos da api e setar no state
    //receber dados = lista

    //Criar um effect para a chamada da função

    return (


        //Passar os dados do state para o flatlist
        //Passar o medico como prop no ButtonCardMedico

        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <TitleSelect>Selecionar Medico</TitleSelect>

                    <ListComponent
                        data={medicoLista}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                        
                            <ButtonCardMedico medico={item}/>
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