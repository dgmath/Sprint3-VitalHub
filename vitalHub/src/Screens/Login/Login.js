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
<<<<<<< HEAD


export const Login = ({navigation}) => {
    
    async function Login() {
        navigation.navigate('Main')
=======
import { useState } from "react"

import api from "../../Services/Services"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState('teste@email.com')
    const [senha, setSenha] = useState('1234')

    async function Logar() {
        await api.post('/Login' , {
            email: email,
            senha: senha
        }).then ( async (response) => {
            await AsyncStorage.setItem("token", JSON.stringify(response.data))
            navigation.navigate('Main')
        }).catch( error => {
            console.log(error);
        })
        console.log(456);

        // navigation.navigate('Main')
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
    }

    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuario ou E-mail"
<<<<<<< HEAD
            />
            <Input
=======
                onChangeText={(txt) => setEmail(txt)}
                value={email}
                // onChange={event => {event.Na}}
            />
            <Input
                onChangeText={(txt) => setSenha(txt)}
                value={senha}
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
                placeholder="Senha"
            />

            <LinkMedium onPress={() => navigation.navigate("RecoverSenha")}>Esqueceu sua senha?</LinkMedium>

<<<<<<< HEAD
            <Button onPress={(e) => Login()}>
=======
            <Button onPress={(e) => Logar()}>
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                {/* <IconGoogle source={require("../../assets/GOOGLE.png")}/> */}
<<<<<<< HEAD
                <AntDesign name="google" size={16} color="#496BBA"/>
=======
                <AntDesign name="google" size={16} color="#496BBA" />
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Nao tem conta?</TextAccount>
                <LinkEnd onPress={() => navigation.navigate("Cadastro")}>Crie uma conta agora!</LinkEnd>
<<<<<<< HEAD
            </ContentAccount> 
=======
            </ContentAccount>
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83

        </Container>
    )
}