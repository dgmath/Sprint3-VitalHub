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

import { useState } from 'react';

import { ModalCamera } from '../../components/ModalCamera/ModalCamera';

import { FontAwesome } from '@expo/vector-icons'


export const Prescricao = ({
    navigation
}) => {

    const [showModalCamera, setShowModalCamera] = useState(false)
<<<<<<< HEAD
    // const [uriCameraCapture, setUriCameraCapture] = useState(null)
=======
    const [uriCameraCapture, setUriCameraCapture] = useState(null)
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83

    return (
        <ContainerPerfil>
            <MainContentScroll>
                <ImagePerfil source={require("../../assets/Doctor.png")} />

                <TitlePresc> Dr.Gelipe Fois</TitlePresc>
                <SubTitlePresc>         Cliníco geral      CRM-15286</SubTitlePresc>

                <ContainerInputPresc>
                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Descrição da consulta"}
                        placeholder={"Descrição da consulta..."}
                        fieldHeight={"121"}
                    />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Diagnóstico do paciente"}
                        placeholder={"Diagnóstico..."}
                    />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Prescrição médica"}
                        placeholder={"Prescrição médica..."}
                        fieldHeight={"133"}
                    />

                    <ContainerImageProntuario>
                        <TextTitleImage>Exames médicos</TextTitleImage>
<<<<<<< HEAD
                        {/* {uriCameraCapture == null ?( */}
                            <BoxImage>
                                <FontAwesome name='image' size={25} color='#121212' />
                                <TextImage>Nenhuma foto informada</TextImage>
                            </BoxImage>
                        {/* // ):(
                            // <ImageProntuario source = {{uri: uriCameraCapture}}/>
                            // <></>
                        // )} */}
=======
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
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
                    </ContainerImageProntuario>

                    <ContainerBoxPrescricao>

                        <ButtonPrescricao onPress={() => setShowModalCamera(true)}>
                            <MaterialCommunityIcons name="camera-plus-outline" size={20} color="#fff" />
                            <ButtonTitle>Enviar</ButtonTitle>
                        </ButtonPrescricao>


<<<<<<< HEAD
                        <LinkMediumPres>Cancelar</LinkMediumPres>
=======
                        <LinkMediumPres onPress={() => setUriCameraCapture(null)}>Cancelar</LinkMediumPres>
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83

                    </ContainerBoxPrescricao>

                    <Linha />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Exames médicos"}
                        placeholder={"Resultado do exame de sangue:"}
                        fieldHeight={"103"}
                    />

                    <LinkEndModal>Voltar</LinkEndModal>

                </ContainerInputPresc>

                <ModalCamera
<<<<<<< HEAD
                    visible = {showModalCamera}
                    // setUriCameraCapture={setUriCameraCapture}
                    setShowModalCamera = {setShowModalCamera}
=======
                    visible={showModalCamera}
                    setUriCameraCapture={setUriCameraCapture}
                    setShowModalCamera={setShowModalCamera}
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
                />


            </MainContentScroll>
        </ContainerPerfil>
    )
}