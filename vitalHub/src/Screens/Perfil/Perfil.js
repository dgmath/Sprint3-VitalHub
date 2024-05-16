
import { BoxInput, BoxInput2 } from "../../components/BoxInput";
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
import { ModalAttention } from "../../components/CancelationModal/CancelationModal";

//import { UpdateProfileModal } from "../../components/UpdatePerfilModal/UpdatePerfilModal";

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
    const [crm, setCrmM] = useState('')
    const [logradouroM, setLogradouroM] = useState('')
    const [numeroM, setNumeroM] = useState('')
    const [cepM, setCepM] = useState('')
    const [cidadeM, setCidadeM] = useState('')

    // states para editar dados do paciente
    const [nomeP, setNomeP] = useState('')
    const [rgP, setRgP] = useState('')
    const [dataNascimentoP, setDataNascimentoP] = useState('')
    const [cpfP, setCpfP] = useState('')
    const [cepP, setCepP] = useState('')
    const [logradouroP, setLogradouroP] = useState('')
    const [numeroP, setNumeroP] = useState('')
    const [cidadeP, setCidadeP] = useState('')

    const [showModalAttention, setShowModalAttention] = useState(false);


    async function KeepingData() {
        const token = await tokenClean();

        const tokenRole = await userDecodeToken();
        setRole(tokenRole.role)

        setUser(tokenRole.user)

        if (tokenRole.role == 'Medico') {

            setNomeM(userData.idNavigation.nome)
            setCrmM(userData.crm)
            setLogradouroM(userData.endereco.logradouro)
            setNumeroM(JSON.stringify(userData.endereco.numero))
            setCepM(userData.endereco.cep)
            setCidadeM(userData.endereco.cidade)

        } else {

            setNomeP(userData.idNavigation.nome)
            setRgP(userData.rg)
            setDataNascimentoP(moment(userData.dataNascimento).format('DD-MM-YYYY'))
            setCpfP(userData.cpf)
            setCepP(userData.endereco.cep)
            setLogradouroP(userData.endereco.logradouro)
            setNumeroP(JSON.stringify(userData.endereco.numero))
            setCidadeP(userData.endereco.cidade)
        }
    }

    async function GetProfile() {
        const token = await tokenClean();

        const tokenRole = await userDecodeToken();
        setRole(tokenRole.role)

        setUser(tokenRole.user)


        if (tokenRole.role == 'Paciente') {
            await api.get(`/Pacientes/BuscarPorId?id=${tokenRole.user}`
            ).then(response => {

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
                if (nomeP && rgP && dataNascimentoP && cpfP && cepP && logradouroP && numeroP && cidadeP !== '') {

                    const dataNascimentoFormatada = moment(dataNascimentoP, 'DD/MM/YYYY').format('YYYY-MM-DD');

                    await api.put(`/Pacientes?idUsuario=${user}`, {
                        nome: nomeP,
                        rg: rgP,
                        cpf: cpfP,
                        dataNascimento: dataNascimentoFormatada,
                        cep: cepP,
                        logradouro: logradouroP,
                        numero: numeroP,
                        cidade: cidadeP
                    });

                } else {
                    setShowModalAttention(true)
                    setPreenchido(true)
                }

            } else {

                if (nomeM && crm && logradouroM && numeroM && cepM && cidadeM !== '') {

                    await api.put('/Medicos', {
                        nome: nomeM,
                        crm: crm,
                        cep: cepM,
                        logradouro: logradouroM,
                        numero: numeroM,
                        cidade: cidadeM,
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                } else {
                    setShowModalAttention(true)
                    setPreenchido(true)
                }
            }

            console.log(token);


            console.log("Dados do usuário atualizados com sucesso!");
            GetProfile()

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
            setPreenchido(true)
        }).catch(error => {
            console.log(error);
        })
    }


    useEffect(() => {
        GetProfile()
        console.log(nomeP);
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
                                        <BoxInput2
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={userData.idNavigation.nome}
                                        />
                                        <BoxInput2
                                            textLabel='Especialidade:'
                                            placeholder='Especialidade Medica'
                                            fieldValue={userData.especialidade.especialidade1}
                                        />
                                        <BoxInput2
                                            textLabel='CRM:'
                                            placeholder='CRM Medico'
                                            fieldValue={userData.crm}
                                        />

                                        <ContainerInputRowOne>
                                            <BoxInput2
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={userData.endereco.logradouro}
                                            />
                                            <BoxInput2
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={JSON.stringify(userData.endereco.numero)}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput2
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={userData.endereco.cep}
                                            />
                                            <BoxInput2
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={userData.endereco.cidade}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                ) : (
                                    <ContainerInputPerfil>
                                        <BoxInput2
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={userData.idNavigation.nome}
                                        />
                                        <BoxInput2
                                            textLabel='RG:'
                                            placeholder='Seu RG'
                                            fieldValue={userData.rg}
                                        />
                                        <BoxInput2
                                            textLabel='Data de nascimento:'
                                            placeholder='Ex.DD-MM-YYYY'
                                            fieldValue={moment(userData.dataNascimento).format('DD-MM-YYYY')}
                                        />
                                        <BoxInput2
                                            textLabel='CPF:'
                                            placeholder='CPF'
                                            fieldValue={userData.cpf}
                                        />
                                        <ContainerInputRowOne>
                                            <BoxInput2
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={userData.endereco.logradouro}
                                            />
                                            <BoxInput2
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={JSON.stringify(userData.endereco.numero)}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput2
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={userData.endereco.cep}
                                            />
                                            <BoxInput2
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
                                    <ContainerInputPerfil>
                                        <BoxInput
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={nomeM}
                                            onChangeText={(txt) => setNomeM(txt)}
                                            editable={true}
                                            BorderColor={nomeM == '' ? 'red' : '#49B3BA'}
                                        />
                                        <BoxInput
                                            textLabel='Especialidade:'
                                            placeholder='Especialidade Medica'
                                            fieldValue={userData.especialidade.especialidade1}
                                        />
                                        <BoxInput
                                            textLabel='CRM:'
                                            placeholder='CRM Medico'
                                            fieldValue={crm}
                                            onChangeText={(txt) => setCrmM(txt)}
                                            editable={true}
                                            BorderColor={crm == '' ? 'red' : '#49B3BA'}
                                        />

                                        <ContainerInputRowOne>
                                            <BoxInput
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={logradouroM}
                                                onChangeText={(txt) => setLogradouroM(txt)}
                                                editable={true}
                                                BorderColor={logradouroM == '' ? 'red' : '#49B3BA'}
                                            />
                                            <BoxInput
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={numeroM}
                                                onChangeText={(txt) => setNumeroM(txt)}
                                                editable={true}
                                                BorderColor={numeroM == '' ? 'red' : '#49B3BA'}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={cepM}
                                                onChangeText={(txt) => setCepM(txt)}
                                                editable={true}
                                                BorderColor={cepM == '' ? 'red' : '#49B3BA'}
                                            />
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={cidadeM}
                                                onChangeText={(txt) => setCidadeM(txt)}
                                                editable={true}
                                                BorderColor={cidadeM == '' ? 'red' : '#49B3BA'}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                ) : (
                                    <ContainerInputPerfil>
                                        <BoxInput
                                            textLabel='Nome:'
                                            placeholder='Seu Nome'
                                            fieldValue={nomeP}
                                            onChangeText={(txt) => setNomeP(txt)}
                                            editable={true}
                                            BorderColor={nomeP == '' ? 'red' : '#49B3BA'}
                                        />
                                        <BoxInput
                                            textLabel='RG:'
                                            placeholder='Seu RG'
                                            fieldValue={rgP}
                                            onChangeText={(txt) => setRgP(txt)}
                                            editable={true}
                                            BorderColor={rgP == '' ? 'red' : '#49B3BA'}
                                        />
                                        <BoxInput
                                            textLabel='Data de nascimento:'
                                            placeholder='YYYY-MM-DD'
                                            fieldValue={dataNascimentoP}
                                            onChangeText={(txt) => setDataNascimentoP(txt)}
                                            editable={true}
                                            BorderColor={dataNascimentoP == '' ? 'red' : '#49B3BA'}
                                        />
                                        <BoxInput
                                            textLabel='CPF:'
                                            placeholder='CPF'
                                            fieldValue={cpfP}
                                            onChangeText={(txt) => setCpfP(txt)}
                                            editable={true}
                                            BorderColor={cpfP == '' ? 'red' : '#49B3BA'}
                                        />
                                        <ContainerInputRowOne>
                                            <BoxInput
                                                fieldWidth={60}
                                                textLabel='Endereco:'
                                                placeholder='Endereco'
                                                fieldValue={logradouroP}
                                                onChangeText={(txt) => setLogradouroP(txt)}
                                                editable={true}
                                                BorderColor={logradouroP == '' ? 'red' : '#49B3BA'}
                                            />
                                            <BoxInput
                                                fieldWidth={40}
                                                textLabel='Numero:'
                                                placeholder='Numero'
                                                fieldValue={numeroP}
                                                onChangeText={(txt) => setNumeroP(txt)}
                                                editable={true}
                                                BorderColor={numeroP == '' ? 'red' : '#49B3BA'}
                                            />
                                        </ContainerInputRowOne>

                                        <ContainerInputRow>
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='CEP:'
                                                placeholder='CEP'
                                                fieldValue={cepP}
                                                onChangeText={(txt) => setCepP(txt)}
                                                editable={true}
                                                BorderColor={cepP == '' ? 'red' : '#49B3BA'}
                                            />
                                            <BoxInput
                                                fieldWidth={50}
                                                textLabel='Cidade:'
                                                placeholder='Cidade'
                                                fieldValue={cidadeP}
                                                onChangeText={(txt) => setCidadeP(txt)}
                                                editable={true}
                                                BorderColor={cidadeP == '' ? 'red' : '#49B3BA'}
                                            />
                                        </ContainerInputRow>
                                    </ContainerInputPerfil>
                                )
                                }

                            </>
                        )}



                        <Button onPress={() => UpdateProfile()}
                        >
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>

                        <ButtonEditPerfil onPress={() => {
                            setPreenchido(false)
                            KeepingData()
                        }}>
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

            <ModalAttention
                visible={showModalAttention}
                setShowModalAttention={setShowModalAttention}
                setPreenchido={setPreenchido}
            />
        </ContainerPerfil>
    )
}