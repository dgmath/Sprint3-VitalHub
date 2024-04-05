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

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState(null)

    const [medicoData, setMedicoData] = useState({})

    const [logradouro, setLogradouro] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [crm, setCrm] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')

    const [role, setRole] = useState('')

    async function GetProfile() {
        try {
            const token = await tokenClean();

            if (token) {
                const response = await api.get('/Pacientes/PerfilLogado', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
                console.log(response.data);

                console.log(123);

                console.og(userData);

            } else {
                console.log("Token não encontrado.");
            }
        } catch (error) {
            console.log(error);
        }
    }


    async function GetProfileMedico() {
        try {
            const token = await tokenClean();

            if (token) {
                const response = await api.get('/Medicos/PerfilLogado', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
                console.log(response.data);

                console.log(123);

                console.og(userData);

            } else {
                console.log("Token não encontrado.");
            }
        } catch (error) {
            console.log(error);
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

    useEffect(() => {
        {role == 'Medico'?(
            GetProfileMedico()
        ):(
            GetProfile()
        )}
    },[userData])



return (
    <ContainerPerfil>
        {userData != null ? (
            <MainContentScroll>
                <MainContent>

                    <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

                    {/* <TitlePerfil>{userName}</TitlePerfil>

                        <SubTitlePerfil>{userEmail}</SubTitlePerfil> */}

                    {role === 'Medico' ? (


                        <ContainerInputPerfil>
                            <BoxInput
                                textLabel='Nome:'
                                placeholder='Seu Nome'
                                fieldValue={userData.idNavigation.nome}
                            />
                            <BoxInput
                                textLabel='Especialidade:'
                                placeholder=''
                                fieldValue={userData.especialidade}
                            />
                            {/* <BoxInput
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
                            </ContainerInputRow> */}
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