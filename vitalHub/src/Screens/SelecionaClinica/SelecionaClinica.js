import { useEffect, useState } from "react"
import { ButtonCardClinica } from "../../components/ButtonCardClinica/ButtonCardClinica"
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { ListComponent } from "../../components/List/list"
import { TitleModal } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { LinkEndModal } from "../../components/Link/style"
import api from "../../Services/Services"
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export const SelecionarClinica = ({
    navigation, route
}) => {
       
    const [border, setBorder] = useState(null)

    const [listaClinica, setListaClinica] = useState([])

    const [clinica, setClinica] = useState()


    async function ListarClinicas() {
        await api.get(`/Clinica/BuscarPorCidade?cidade=${route.params.agendamento.localizacao}`)
        .then( response => {
            setListaClinica( response.data)
            console.log(response.data);
        }).catch( error =>{
            console.log(error);
        })
    }

    function handleContinue() {
        navigation.replace("SelecionarMedico", {
            agendamento: {
                ...route.params.agendamento,

                ...clinica
            }
        })
    }

    useEffect(() => {
        ListarClinicas()
        console.log(border);
    },[border])

    useEffect(() => {
       console.log(route);
    },[route])
    

    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>
                    <TitleModal>Selecionar Clinica</TitleModal>

                    <ListComponent
                        data={listaClinica}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                            <ButtonCardClinica
                                selected={listaClinica && listaClinica.clinicaId == item.id}
                                clinica={item}
                                setClinica={setClinica}
                                setBorder={setBorder}
                                clickButton={item.id == border}
                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <Button onPress={() => handleContinue()}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>


                    <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}