import { BoxInput } from "../../components/BoxInput";
import { ContainerInputPerfil, ContainerInputRow, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { ImagePerfil } from "../../components/Logo/style";
import { SubTitlePerfil } from "../../components/Text/style";
import { TitlePerfil } from "../../components/Title/style";
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonEditPerfil, ButtonSairPerfil } from "../../components/Button/style"
import { useEffect, useState } from "react";
import { userDecodeToken } from "../../utils/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Perfil = ({navigation}) => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setUserName(token.name)
            setUserEmail(token.email)
        }
    }
    async function Logout() {
        await AsyncStorage.removeItem("token");
        const tokenAfterClear = await AsyncStorage.getItem("token")
        if (tokenAfterClear === null) {
            console.log("Token apagado");
            // console.log(token);
        }
        else{
            console.log("Token não apagado");
            console.log(token);
        }
        navigation.navigate("Login")
    }

    useEffect(() => {
        ProfileLoad()
    }, [])
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
                            placeholder='xx/xx/xxxx'
                        // key='numeric'
                        // maxLength={9}
                        // editable={true}
                        // fieldValue={cep}
                        // onChangeText={e => setCep(cepMasked(e))}
                        />
                        <BoxInput
                            textLabel='CPF:'
                            placeholder='465********'
                        // fieldValue={endereco.street}
                        />
                        <BoxInput
                            textLabel='Endereco:'
                            placeholder='Av.Regente Feijo, 1900'
                        // fieldValue={endereco.district}
                        />
                    </ContainerInputPerfil>
                    <ContainerInputRow>
                        <BoxInput
                            fieldWidth={45}
                            textLabel='CEP:'
                            placeholder='06548-909'
                        />
                        <BoxInput
                            fieldWidth={45}
                            textLabel='Cidade:'
                            placeholder='Moema-sp'
                        // fieldValue={endereco.district}
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