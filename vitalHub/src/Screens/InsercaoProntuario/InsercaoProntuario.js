import { useEffect, useState } from "react"
import { BoxInput, BoxInput2 } from "../../components/BoxInput"
import { Button, ButtonEditInsercao } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { ContainerForm, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { LinkEndModal } from "../../components/Link/style"
import { ImagePerfil } from "../../components/Logo/style"
import { SubTitlePerfil } from "../../components/Text/style"
import { TitlePerfil } from "../../components/Title/style"
import { ActivityIndicator } from "react-native"
import api from "../../Services/Services"

export const InsercaoProntuario = ({ navigation, route }) => {


    const [consultaSelecionada, setConsultaSelecionada] = useState(null)
    const [preenchido, setPreenchido] = useState(false)
    const [diagnostico, setDiagnostico] = useState('')
    const [descricao, setDescricao] = useState('')



    //   {
    //     "id": "F4F930F8-0BCC-40FB-A69F-6470A42CDF0A",
    //     "descricao": "teste2",
    //     "diagnostico": "teste2"
    //   }

    async function EditarProntuario() {
        await api.put(`/Consultas/Prontuario`, {
            id: route.params.consultaId,
            descricao: descricao,
            diagnostico: diagnostico
        }).then(response => {
            console.log(response.data);
            setPreenchido(true)
            alert('Prontuário Alterado')
            BuscarProntuario()
        })
        .catch(error => {
            console.log(error);
        })
    }

    async function BuscarProntuario() {
        await api.get(`/Consultas/BuscarPorId?id=${route.params.consultaId}`)
            .then(response => {
                setConsultaSelecionada(response.data)
                setPreenchido(true)
                console.log(response.data);
                console.log(1234);
                // console.log(consultaSelecionada.medicoClinica.clinicaId);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (consultaSelecionada == null) {
            BuscarProntuario();
        }
    }, [consultaSelecionada])

    return (
        <ContainerPerfil>
            {consultaSelecionada != null ? (
                <MainContentScroll>
                    <MainContent>

                        <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

                        <TitlePerfil>Miguel Arteta</TitlePerfil>

                        <SubTitlePerfil>miguel.arteta@gmail.com</SubTitlePerfil>

                        <ContainerForm>
                            {preenchido == true ? (
                                <>
                                    <BoxInput2
                                        // placeholderColor={"#34898F"}
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={121}
                                        textLabel='Descrição da consulta'
                                        placeholder='Descrição'
                                        fieldValue={consultaSelecionada.descricao}
                                    />
                                    <BoxInput2
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={55}
                                        textLabel='Diagnóstico do paciente'
                                        placeholder='Diagnóstico'
                                        fieldValue={consultaSelecionada.diagnostico}
                                    />
                                    <BoxInput2
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={121}
                                        textLabel='Prescrição médica'
                                        placeholder='Prescrição'
                                        fieldValue={consultaSelecionada.receita.medicamento}
                                    />
                                </>
                             ) : (
                                <>
                                    <BoxInput
                                        // placeholderColor={"#34898F"}
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={121}
                                        textLabel='Descrição da consulta'
                                        placeholder='Descrição'
                                        onChangeText={(txt) => setDescricao(txt)}
                                        editable={true}
                                        fieldValue={descricao}
                                    />
                                    {/* Bom dia */}
                                    <BoxInput
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={55}
                                        textLabel='Diagnóstico do paciente'
                                        placeholder='Diagnóstico'
                                        editable={true}
                                        onChangeText={(txt) => setDiagnostico(txt)}
                                        fieldValue={diagnostico}
                                    />
                                    <BoxInput
                                        BorderColor={"#49B3BA"}
                                        fieldHeight={121}
                                        textLabel='Prescrição médica'
                                        placeholder='Prescrição'
                                    />
                                </>
                            )}


                        </ContainerForm>

                        <Button onPress={() => EditarProntuario()}>
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>
                        <ButtonEditInsercao onPress={() => setPreenchido(false)}>
                            <ButtonTitle>Editar</ButtonTitle>
                        </ButtonEditInsercao>

                        <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>


                    </MainContent>
                </MainContentScroll>

            ) : (
                <ActivityIndicator />
            )
            }

        </ContainerPerfil>
    )
}