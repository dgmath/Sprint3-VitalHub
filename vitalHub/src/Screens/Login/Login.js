import { Container, ContentAccount } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkEnd, LinkMedium } from "../../components/Link/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonGoogle } from "../../components/Button/style"
import { ButtonTitleGoogle } from "../../components/ButtonTitleGoogle/style"

import { AntDesign } from '@expo/vector-icons';
import { TextAccount } from "./style"
import { useState } from "react"

import api from "../../Services/Services"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native"

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState('paciente@email.com')
    const [senha, setSenha] = useState('1234')
    const [btnDisable, setBtnDisable] = useState(false)

    async function Logar() {
        await api.post('/Login', {
            email: email,
            senha: senha
        }).then(async (response) => {

            setBtnDisable(true)

            await AsyncStorage.setItem("token", JSON.stringify(response.data))
            console.log(response);
            navigation.navigate('Main')

            setBtnDisable(false)

        }).catch(error => {
            console.log(error);
        })
        console.log(456);

    }


    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuario ou E-mail"
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            // onChange={event => {event.Na}}
            />
            <Input
                onChangeText={(txt) => setSenha(txt)}
                value={senha}
                placeholder="Senha"
            />

            <LinkMedium onPress={() => navigation.navigate("RecoverSenha")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Logar()} disabled={btnDisable}>
                {btnDisable ? (
                    <ActivityIndicator
                        size={20}
                        color={"#FFFF"}
                    />
                ) : (
                    <ButtonTitle>Entrar</ButtonTitle>
                )}
            </Button>

            <ButtonGoogle>
                {/* <IconGoogle source={require("../../assets/GOOGLE.png")}/> */}
                <AntDesign name="google" size={16} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Nao tem conta?</TextAccount>
                <LinkEnd onPress={() => navigation.navigate("Cadastro")}>Crie uma conta agora!</LinkEnd>
            </ContentAccount>

        </Container>
    )
}