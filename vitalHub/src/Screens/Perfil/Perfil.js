import { BoxInput } from "../../components/BoxInput";
import { ContainerInputPerfil, ContainerInputRow, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
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

export const Perfil = ({ navigation }) => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState({})

    const [logradouro, setLogradouro] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setUserName(token.name)
            setUserEmail(token.email)
            setUserId(token.id);

            // GetProfile(); // Chama GetProfile após setUserId
        }
    }

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

                console.log(userData);

            } else {
                console.log("Token não encontrado.");
            }
        } catch (error) {
            console.log(error);
        }
    }


    // async function GetProfile() {
    //     try {
    //         const response = await api.get(`/Pacientes/BuscarPorId?id=${userId}`); // Passa o ID do usuário para a API

    //         const data = response.data;

    //         setUserData(data); // Atualiza o estado com os dados recebidos

    //         setLogradouro(data.logradouro);
    //         setDataNascimento(moment(data.dataNascimento).format("DD-MM-YYYY"));
    //         setCpf(data.cpf);
            
    //     } catch (error) {
    //         console.error("Erro ao buscar informações do paciente:", error);
    //     }
    // }

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

    // useEffect(() => {
    //     ProfileLoad()
    // }, [])

    useEffect(() => {
          GetProfile();
      }, []); 


    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

                    <TitlePerfil>{userName}</TitlePerfil>

                    <SubTitlePerfil>{userEmail}</SubTitlePerfil>

                    <ContainerInputPerfil>
                        <BoxInput
                            textLabel='Data de nascimento:'
                            placeholder={moment(userData.dataNascimento).format('DD-MM-YYYY')}
                            editable={false}
                        />
                        <BoxInput
                            textLabel='CPF:'
                            placeholder={userData.cpf}
                            fieldValue={cpf}
                        />
                        <BoxInput
                            textLabel='Endereco:'
                            placeholder={logradouro}
                            fieldValue={logradouro}
                        />
                    </ContainerInputPerfil>
                    <ContainerInputRow>
                        <BoxInput
                            fieldWidth={45}
                            textLabel='CEP:'
                            placeholder=''
                        // fieldValue={cep}
                        />
                        <BoxInput
                            fieldWidth={45}
                            textLabel='Cidade:'
                            placeholder=''
                        // fieldValue={cidade}
                        />
                    </ContainerInputRow>

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
        </ContainerPerfil>
    )
}