import { BoxInput } from "../../components/BoxInput";
import { ContainerInputPerfil, ContainerInputRow, ContainerInputRowOne, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { ImagePerfil } from "../../components/Logo/style";
import { SubTitlePerfil } from "../../components/Text/style";
import { TitlePerfil } from "../../components/Title/style";
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonEditPerfil, ButtonSairPerfil } from "../../components/Button/style"
import { useEffect, useState } from "react";
import { tokenClean, userDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


import api from "../../Services/Services"
import moment from "moment";
import { ActivityIndicator } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ButtonCamera, ViewImageProfile } from "./style";
import { ModalCamera } from "../../components/ModalCamera/ModalCamera";

import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'

export const Perfil = ({ navigation }) => {
    const [userData, setUserData] = useState(null)
    const [role, setRole] = useState('')
    const [user, setUser] = useState('')

    const [showModalCamera, setShowModalCamera] = useState(false)
    const [uriCameraCapture, setUriCameraCapture] = useState(null)


    const [showSaveBtn, setShowSaveBtn] = useState(false)

    const [preenchido, setPreenchido] = useState(false)

    // states para editar dados do medico
    const [nomeM, setNomeM] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [crm, setCrm] = useState('')
    const [logradouroM, setLogradouroM] = useState('')
    const [numeroM, setNumeroM] = useState('')
    const [cepM, setCepM] = useState('')
    const [cidadeM, setCidadeM] = useState('')


    // states para editar dados do paciente
    const [nomeP, setNomeP] = useState('')
    const [rgP, setRg] = useState('')
    const [dataNascimentoP, setDataNascimento] = useState('')
    const [cpfP, setCpf] = useState('')
    const [cepP, setCepP] = useState('')
    const [logradouroP, setLogradouroP] = useState('')
    const [numeroP, setNumeroP] = useState('')
    const [cidadeP, setCidadeP] = useState('')


    async function GetProfile() {
        const token = await tokenClean();

        const tokenRole = await userDecodeToken();
        setRole(tokenRole.role)

        setUser(tokenRole.user)



        if (tokenRole.role == 'Paciente') {
            await api.get('/Pacientes/PerfilLogado', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                console.log(response.data);
                setUserData(response.data);

                setPreenchido(true)

                console.log(123);

                console.log(userData);
            }).catch(error => {
                console.log(error);
            })


        } else if (tokenRole.role == 'Medico') {
            await api.get(`/Medicos/BuscarPorId?id=${tokenRole.user}`
            ).then(response => {

                console.log(role);

                setUserData(response.data);
                console.log(response.data);

                setPreenchido(true)

                console.log(123);

                console.log(userData);
            }).catch(error => {
                console.log(".....");
                console.log(error);
            })
        } else {
            console.log("Token não encontrado.");
        }

    }

    async function Logout() {
        await AsyncStorage.removeItem("token");
        const tokenAfterClear = await AsyncStorage.getItem("token")
        if (tokenAfterClear === null) {
            console.log("Token apagado");
            // console.log(token);
        }
        else {
            console.log("Token não apagado");
            console.log(token);
        }
        navigation.navigate("Login")
    }

    async function UpdateProfile() {

        const token = await tokenClean();

        const tokenRole = await userDecodeToken();
        setRole(tokenRole.role)

        setUser(tokenRole.user)

        try {
            if (tokenRole.role == 'Paciente') {
                await api.put(`/Pacientes?idUsuario=${user}`,{
                    nome : nomeP ,
                    rg: rgP,
                    dataNascimento: dataNascimentoP,
                    cpf :cpfP,
                    cep : cepP,
                    logradouro : logradouroP,
                    numero : numeroP,
                    cidade : cidadeP,
                });
            } else {

            }

            console.log(userData);


            console.log("Dados do usuário atualizados com sucesso!");

        } catch (error) {

            console.error("Erro ao atualizar os dados do usuário:", error);
        }
    }

    async function UpdateProfilePhoto() {

        const formData = new FormData();
        formData.append("Arquivo", {
            uri: uriCameraCapture,
            name: `image.${uriCameraCapture.split(".")[1]}`,
            type: `image/${uriCameraCapture.split(".")[1]}`
        })

        await api.put(`/Usuario/AlterarFotoPerfil?id=${user}`, formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }


    useEffect(() => {
        GetProfile()
    }, [])


    useEffect(() => {
        if (uriCameraCapture != null) {
            UpdateProfilePhoto()
        }
    }, [uriCameraCapture])



    return (
        <ContainerPerfil>
            {userData != null ? (
                <MainContentScroll>
                    <MainContent>

                        <ViewImageProfile>

                            {uriCameraCapture == null ? (
                                <>
                                    <ImagePerfil source={{ uri: userData.idNavigation.foto }} />
                                </>
                            ) : (
                                <>
                                    <ImagePerfil source={{ uri: uriCameraCapture }} />
                                </>
                            )}



                            <ButtonCamera onPress={() => setShowModalCamera(true)}>
                                <MaterialCommunityIcons
                                    name="camera-plus"
                                    size={20}
                                    color='#fbfbfb'
                                />
                            </ButtonCamera>

                        </ViewImageProfile>

                        {preenchido ? (
                            <>
                                {role == 'Medico' ? (
                                    <ContainerInputPerfil>
                                        <BoxInput
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={userData.idNavigation.nome}
                                        />
                                        <BoxInput
                                            textLabel='Especialidade:'
                                            placeholder='Especialidade Medica'
                                            fieldValue={userData.especialidade.especialidade1}
                                        />
                                        <BoxInput
                                            textLabel='CRM:'
                                            placeholder='CRM Medico'
                                            fieldValue={userData.crm}
                                        />

                                        <ContainerInputRowOne>
                                            <BoxInput
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={userData.endereco.logradouro}
                                            />
                                            <BoxInput
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={JSON.stringify(userData.endereco.numero)}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={userData.endereco.cep}
                                            />
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={userData.endereco.cidade}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                ) : (
                                    <ContainerInputPerfil>
                                        <BoxInput
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={userData.idNavigation.nome}
                                        />
                                        <BoxInput
                                            textLabel='RG:'
                                            placeholder='Seu RG'
                                            fieldValue={userData.rg}
                                        />
                                        <BoxInput
                                            textLabel='Data de nascimento:'
                                            placeholder='Ex.DD-MM-YYYY'
                                            fieldValue={moment(userData.dataNascimento).format('DD-MM-YYYY')}
                                        />
                                        <BoxInput
                                            textLabel='CPF:'
                                            placeholder='CPF'
                                            fieldValue={userData.cpf}
                                        />
                                        <ContainerInputRowOne>
                                            <BoxInput
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={userData.endereco.logradouro}
                                            />
                                            <BoxInput
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={JSON.stringify(userData.endereco.numero)}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={userData.endereco.cep}
                                            />
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={userData.endereco.cidade}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                )}
                            </>
                        ) : (
                            <>
                                {role == "Medico" ? (
                                    <>

                                    </>
                                    // <ContainerInputPerfil>
                                    //     <BoxInput
                                    //         textLabel='Nome:'
                                    //         placeholder='Seu Nome'
                                    //         fieldValue={userData.idNavigation.nome}
                                    //         onChangeText={(txt) => setNomeM(txt)}
                                    //         editable={true}
                                    //     />
                                    //     <BoxInput
                                    //         textLabel='Especialidade:'
                                    //         placeholder='Especialidade Medica'
                                    //         fieldValue={userData.especialidade.especialidade1}
                                    //     />
                                    //     <BoxInput
                                    //         textLabel='CRM:'
                                    //         placeholder='CRM Medico'
                                    //         fieldValue={userData.crm}
                                    //     />

                                    //     <ContainerInputRowOne>
                                    //         <BoxInput
                                    //             fieldWidth={60}
                                    //             textLabel='Endereco:'
                                    //             placeholder='Endereco'
                                    //             fieldValue={userData.endereco.logradouro}
                                    //         />
                                    //         <BoxInput
                                    //             fieldWidth={40}
                                    //             textLabel='Numero:'
                                    //             placeholder='Numero'
                                    //             fieldValue={JSON.stringify(userData.endereco.numero)}
                                    //         />
                                    //     </ContainerInputRowOne>

                                    //     <ContainerInputRow>
                                    //         <BoxInput
                                    //             fieldWidth={50}
                                    //             textLabel='CEP:'
                                    //             placeholder='CEP'
                                    //             fieldValue={userData.endereco.cep}
                                    //         />
                                    //         <BoxInput
                                    //             fieldWidth={50}
                                    //             textLabel='Cidade:'
                                    //             placeholder='Cidade'
                                    //             fieldValue={userData.endereco.cidade}
                                    //         />
                                    //     </ContainerInputRow>
                                    // </ContainerInputPerfil>
                                ) : (
                                    <ContainerInputPerfil>
                                        <BoxInput
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={nomeP}
                                            onChangeText={(txt) => setNomeP(txt)}
                                            editable={true}
                                        />
                                        <BoxInput
                                            textLabel='RG:'
                                            placeholder='Seu RG'
                                            fieldValue={userData.rg}
                                            onChangeText={() => setNomeP(fieldValue)}
                                        />
                                        <BoxInput
                                            textLabel='Data de nascimento:'
                                            placeholder='Ex.DD-MM-YYYY'
                                            fieldValue={moment(userData.dataNascimento).format('DD-MM-YYYY')}
                                            onChangeText={() => setNomeP(fieldValue)}
                                        />
                                        <BoxInput
                                            textLabel='CPF:'
                                            placeholder='CPF'
                                            fieldValue={userData.cpf}
                                            onChangeText={() => setNomeP(fieldValue)}
                                        />
                                        <ContainerInputRowOne>
                                            <BoxInput
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={userData.endereco.logradouro}
                                                onChangeText={() => setNomeP(fieldValue)}
                                            />
                                            <BoxInput
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={JSON.stringify(userData.endereco.numero)}
                                                onChangeText={() => setNomeP(fieldValue)}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={userData.endereco.cep}
                                                onChangeText={() => setNomeP(fieldValue)}
                                            />
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={userData.endereco.cidade}
                                                onChangeText={() => setNomeP(fieldValue)}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                )
                                }

                            </>
                        )}



                        <Button onPress={() => UpdateProfile()}>
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>

                        <ButtonEditPerfil onPress={() => setPreenchido(false)}>
                            <ButtonTitle>Editar</ButtonTitle>
                        </ButtonEditPerfil>

                        <ButtonSairPerfil onPress={() => Logout()}>
                            <ButtonTitle>Sair</ButtonTitle>
                        </ButtonSairPerfil>

                    </MainContent>
                </MainContentScroll>
            ) : (
                <ActivityIndicator />
            )}

            <ModalCamera
                visible={showModalCamera}
                setCameraCapture={setUriCameraCapture}
                setShowCameraModal={setShowModalCamera}
                getMediaLibrary={true}
            />

        </ContainerPerfil>
    )
}