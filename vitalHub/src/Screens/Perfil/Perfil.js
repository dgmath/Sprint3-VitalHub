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

export const Perfil = ({ navigation }) => {
    const [userData, setUserData] = useState(null)
    const [role, setRole] = useState('')

    async function GetProfile() {
        const token = await tokenClean();

        const tokenRole = await userDecodeToken();
        setRole(tokenRole.role)



        if (tokenRole.role == 'Paciente') {
            await api.get('/Pacientes/PerfilLogado', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {

                console.log(response.data);
                setUserData(response.data);

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

    async function Update() {
        
    }

    useEffect(() => {
        GetProfile()
    }, [])



    return (
        <ContainerPerfil>
            {userData != null ? (
                <MainContentScroll>
                    <MainContent>

                        <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

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

                        <Button>
                            <ButtonTitle>Salvar</ButtonTitle>
                        </Button>

                        <ButtonEditPerfil>
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
        </ContainerPerfil>
    )
}