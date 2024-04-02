import { useEffect, useState } from "react"
import { ButtonCardClinica } from "../../components/ButtonCardClinica/ButtonCardClinica"
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { ListComponent } from "../../components/List/list"
import { TitleModal } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { LinkEndModal } from "../../components/Link/style"
import api from "../../Services/Services"


export const SelecionarClinica = ({
    navigation
}) => {
       
    const [selected, setSelected] = useState("")
    const [nameClinic, setNameClinic] = useState("")

    const [listaClinica, setListaClinica] = useState([])


    async function ListarClinicas() {
        await api.get('/Clinica/ListarTodas')
        .then( response => {
            setListaClinica( response.data)
            console.log(response.data);
        }).catch( error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        ListarClinicas()
    },[])
    

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
                                listaClinica={item}

                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <Button onPress={() => navigation.navigate("SelecionarMedico")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}