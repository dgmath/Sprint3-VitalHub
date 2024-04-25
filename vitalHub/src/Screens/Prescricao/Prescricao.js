import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BoxImage, ContainerBoxPrescricao, ContainerImageProntuario, ImageProntuario, Linha, TextImage, TextTitleImage } from "./style"
import { TitlePresc } from '../../components/Title/style';
import { SubTitlePresc } from '../../components/Text/style';
import { ContainerInputPresc, ContainerPerfil, MainContentScroll } from '../../components/Container/style';
import { BoxInput } from '../../components/BoxInput';
import { ButtonTitle } from '../../components/ButtonTitle/style';
import { LinkEndModal, LinkMediumPres } from '../../components/Link/style';
import { ImagePerfil } from '../../components/Logo/style';
import { ButtonPrescricao } from '../../components/Button/style';

import { useEffect, useState } from 'react';

import { ModalCamera } from '../../components/ModalCamera/ModalCamera';

import { FontAwesome } from '@expo/vector-icons'
import api from '../../Services/Services';
import { ActivityIndicator } from 'react-native';


export const Prescricao = ({
    navigation, route
}) => {

    const [showModalCamera, setShowModalCamera] = useState(false)
    const [uriCameraCapture, setUriCameraCapture] = useState(null)
    const [descricao, setDescricao] = useState()

    const [consultaSelecionada, setConsultaSelecionada] = useState(null)

    async function BuscarProntuario() {
        await api.get(`/Consultas/BuscarPorId?id=${route.params.consultaId}`)
            .then(response => {
                setConsultaSelecionada(response.data)
                console.log(response.data);
                console.log(1234);
                console.log(consultaSelecionada.medicoClinica.clinicaId);
            })
            .catch(error => {
                console.log(error);
            })
    }

    
    async function InserirExame() {

        const formData = new FormData();
        formData.append("Imagem", {
            uri: uriCameraCapture,
            name: `image.${ uriCameraCapture.split(".").pop() }`,
            type: `image/${ uriCameraCapture.split(".").pop() }`
        })
        formData.append("consultaId", route.params.consultaId)

        await api.post(`/Exame/Cadastrar`, formData, {
            headers: {
                "Content-type" : "multipart/form-data"
            }
        }).then( response => {
            console.log(response);
            setDescricao(descricao + "\n" + response.data.descricao)
        }).catch (error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (uriCameraCapture != null) {
            InserirExame()
        }
    },[uriCameraCapture])

    useEffect(() => {
        if (consultaSelecionada == null) {
            BuscarProntuario();
        }
    }, [consultaSelecionada])

    return (
        <ContainerPerfil>
            {consultaSelecionada != null ? (
                <MainContentScroll>
                    <ImagePerfil source={require("../../assets/Doctor.png")} />

                    <TitlePresc>{route.params.mediconome.idNavigation.nome}</TitlePresc>
                    <SubTitlePresc>         {consultaSelecionada.medicoClinica.medico.especialidade.especialidade1}      {consultaSelecionada.medicoClinica.medico.crm}</SubTitlePresc>

                    <ContainerInputPresc>
                        <BoxInput
                            fieldWidth={90}
                            textLabel={"Descrição da consulta"}
                            fieldValue={consultaSelecionada.descricao}
                            fieldHeight={"121"}
                        />

                        <BoxInput
                            fieldWidth={90}
                            textLabel={"Diagnóstico do paciente"}
                            fieldValue={consultaSelecionada.diagnostico}
                            placeholder={"Diagnóstico..."}
                        />

                        <BoxInput
                            fieldWidth={90}
                            textLabel={"Prescrição médica"}
                            fieldValue={consultaSelecionada.receita.medicamento}
                            fieldHeight={"133"}
                        />

                        <ContainerImageProntuario>
                            <TextTitleImage>Exames médicos</TextTitleImage>
                            {uriCameraCapture == null ? (
                                <>
                                    <BoxImage>
                                        <FontAwesome name='image' size={25} color='#121212' />
                                        <TextImage>Nenhuma foto informada</TextImage>
                                    </BoxImage>
                                </>
                            ) : (
                                <>
                                    <ImageProntuario source={{ uri: uriCameraCapture }} />
                                </>
                            )}
                        </ContainerImageProntuario>

                        <ContainerBoxPrescricao>

                            <ButtonPrescricao onPress={() => setShowModalCamera(true)}>
                                <MaterialCommunityIcons name="camera-plus-outline" size={20} color="#fff" />
                                <ButtonTitle>Enviar</ButtonTitle>
                            </ButtonPrescricao>


                            <LinkMediumPres onPress={() => setUriCameraCapture(null)}>Cancelar</LinkMediumPres>

                        </ContainerBoxPrescricao>

                        <Linha />


                            <BoxInput
                                fieldWidth={90}
                                textLabel={"Exames médicos"}
                                fieldValue={descricao}
                                fieldHeight={"103"}
                                editable={true}
                                multiline={true}
                            />


                        <LinkEndModal onPress={() => navigation.replace('Main')}>Voltar</LinkEndModal>

                    </ContainerInputPresc>

                    <ModalCamera
                        visible={showModalCamera}
                        setCameraCapture={setUriCameraCapture}
                        setShowCameraModal={setShowModalCamera}
                        getMediaLibrary={true}
                    />


                </MainContentScroll>
            ) : (
                <ActivityIndicator />
            )}
        </ContainerPerfil>
    )
}