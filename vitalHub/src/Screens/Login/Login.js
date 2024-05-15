import { Container, ContentAccount } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkEnd, LinkMedium, TextLink } from "../../components/Link/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonGoogle } from "../../components/Button/style"
import { ButtonTitleGoogle } from "../../components/ButtonTitleGoogle/style"

import { AntDesign } from '@expo/vector-icons';
import { TextAccount } from "./style"
import { useState } from "react"

import api from "../../Services/Services"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Text } from "react-native"
import { ModalNotifications } from "../../components/ModalNotifications/ModalNotifications"
//validar input
//travar o botao
import { LogBox } from 'react-native';
import { ModalAttention } from "../../components/CancelationModal/CancelationModal"

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export const Login = ({ navigation, route }) => {

    // const [email, setEmail] = useState('math29kiss@gmail.com')
    // const [email, setEmail] = useState('paciente2@email.com')
    // const [email, setEmail] = useState(route.params.email ? route.params.email : '')
    const [email, setEmail] = useState(route.params?.email || '');
    const [showModalAttention, setShowModalAttention] = useState(false);

    const [senha, setSenha] = useState('1234')
    const [loading, setLoading] = useState(false)
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(true);


    // const [user, setUser] = useState({});
    const validarCampos = () => {
        setEmailValido(email.trim() !== '');
        setSenhaValida(senha.length > 3);
    };


    async function Logar() {

        // email.length >= 8 && senha.length >= 3 ? 

        setLoading(true)
        validarCampos()

        if (emailValido && senhaValida) {

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
        else {
            setShowModalAttention(true)
            setLoading(false);
            // alert('Por favor, preencha todos os campos.');
        }

        // : alert('Preencha os dados corretamente')
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
                style={{ borderColor: emailValido ? 'white' : 'red' }}
            />
            <Input
                onChangeText={(txt) => setSenha(txt)}
                value={senha}
                placeholder="Senha"
                secureTextEntry={true}
                style={{ borderColor: senhaValida ? 'white' : 'red' }}
            />

            <LinkMedium onPress={() => navigation.navigate("RecoverSenha")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={() => Logar()} disabled={loading}>
                {loading ? <ActivityIndicator /> : <ButtonTitle>Entrar</ButtonTitle>}
            </Button>

            <ButtonGoogle>
                {/* <IconGoogle source={require("../../assets/GOOGLE.png")}/> */}
                <AntDesign name="google" size={16} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkEnd onPress={() => navigation.replace("Cadastro")}>
                    <TextLink>Crie uma conta agora!</TextLink>
                    {/* <Text>Crie uma conta agora!</Text> */}
                </LinkEnd>
            </ContentAccount>

            <ModalAttention
                visible={showModalAttention}
                setShowModalAttention={setShowModalAttention}
            />

        </Container>


    )
}