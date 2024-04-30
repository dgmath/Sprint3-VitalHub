import { useEffect, useState } from "react";
import { Button, ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { LinkEndModal } from "../../components/Link/style";
import { TitleModal, TitleSelect } from "../../components/Title/style";
import { ListComponent } from "../../components/List/list";
import { ButtonCardMedico } from "../../components/ButtonCardMedico/ButtonCardMedico";

import api from "../../Services/Services";

export const SelecionarMedico = ({ navigation, route }) => {

    const [border, setBorder] = useState(null)

    const [selected, setSelected] = useState("")
    //Array para receber a lista de medicos
    const [medicoLista, setMedicoLista] = useState([]);

    async function ListarMedico() {
        //Instanciar a nossa conexao da api
        //chamando o metodo via a api passando dentro do metodo o caminho da chamada'
        await api.get(`/Medicos/BuscarPorIdClinica?id=${route.params.agendamento.clinicaId}`)
            .then(response => {
                //setando a lista com o response.data ou seja todo o retorno
                setMedicoLista(response.data);
                console.log(medicoLista);
            })
            .catch(error => {
                console.log(error);
            })
    }

    //função onde passa os dados do agendamento de uma tela para outra
    function handleContinue() {
        navigation.replace("SelecionarData", {
            agendamento: {
                ...route.params.agendamento,

                ...medico
            }
        })
    }

    useEffect(() => {
        ListarMedico();
    }, [])

    useEffect(() => {
        console.log(route);
    }, [route])

    const [medico, setMedico] = useState()

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

                            <ButtonCardMedico
                                selected={medicoLista && medicoLista.medicoClinicaId == item.id}
                                medico={item}
                                setMedico={setMedico}
                                clickButton={item.id == border}
                                setBorder={setBorder}
                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <ButtonRecover onPress={() => handleContinue()}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonRecover>

                    <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}