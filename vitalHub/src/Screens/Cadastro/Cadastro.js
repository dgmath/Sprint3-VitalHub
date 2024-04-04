import styled from "styled-components";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkEnd } from "../../components/Link/style";
import api from "../../Services/Services";
import { useState } from "react";

export const Cadastro = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setConfirmarSenha] = useState('')
    // const [nome, setNome] = useState('')
    const [idTipoUsuario, setIdTipoUSuario] = useState('48B6EA3E-999F-45D4-B606-C7702C479D4D')

    async function CadastrarPaciente() {
        await api.post(`/Pacientes`, {
            email: email,
            senha: senha2,
            idTipoUsuario: idTipoUsuario
        }).then( response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Criar conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input
                placeholder="Usuario ou E-mail"
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />
            <Input
                placeholder="Senha"
                onChangeText={(txt) => setSenha1(txt)}
                value={senha1}
            />
            <Input
                placeholder="Confirmar senha"
                onChangeText={(txt) => setConfirmarSenha(txt)}
                value={senha2}
            />

            <Button onPress={() => CadastrarPaciente() ? senha2 === senha1 && navigation.navigate('Login') :  'Cadastro Invalido'}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkEnd onPress={() => navigation.replace("Login")}>Cancelar</LinkEnd>

        </Container>
    );
};
