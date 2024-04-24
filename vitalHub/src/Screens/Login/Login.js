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
//validar input
//travar o botao


export const Login = ({ navigation }) => {

<<<<<<< HEAD
    // const [email, setEmail] = useState('paciente@email.com')
    const [email, setEmail] = useState('medico@email.com')
=======
    const [email, setEmail] = useState('paciente@email.com')
    // const [email, setEmail] = useState('medico2@email.com')
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990
    const [senha, setSenha] = useState('1234')
    const [loading, setLoading] = useState(false)

    // const [user, setUser] = useState({});

    async function Logar(e) {
<<<<<<< HEAD
=======

        // email.length >= 8 && senha.length >= 3 ? 
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990
            
            setLoading(true)

            await api.post('/Login', {
                email: email,
                senha: senha
            }).then(async (response) => {
                await AsyncStorage.setItem("token", JSON.stringify(response.data))
                console.log(response);
                setLoading(false)
                navigation.replace('Main')
            }).catch(error => {
                setLoading(false)
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
                required={true}
                inputMode='email'
            />
            <Input
                onChangeText={(txt) => setSenha(txt)}
                value={senha}
                placeholder="Senha"
                secureTextEntry={true}
            />

            <LinkMedium onPress={() => navigation.navigate("RecoverSenha")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Logar()} disabled={loading}>
                {loading ? <ActivityIndicator /> : <ButtonTitle>Entrar</ButtonTitle>}
            </Button>

            <ButtonGoogle>
                {/* <IconGoogle source={require("../../assets/GOOGLE.png")}/> */}
                <AntDesign name="google" size={16} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkEnd onPress={() => navigation.navigate("Cadastro")}>Crie uma conta agora!</LinkEnd>
            </ContentAccount>

        </Container>
    )
}