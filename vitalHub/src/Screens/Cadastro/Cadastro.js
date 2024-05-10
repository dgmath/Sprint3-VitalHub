import styled from "styled-components";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkEnd, TextLink } from "../../components/Link/style";
import api from "../../Services/Services";
import { useState } from "react";

export const Cadastro = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setConfirmarSenha] = useState('')
    const [nome, setNome] = useState('')
    // const [nome, setNome] = useState('')
    const [idTipoUsuario, setIdTipoUSuario] = useState('1058E83E-E674-48D8-B7D3-3ADA9076DABC')

    async function CadastrarPaciente() {

        const formData = new FormData();  
        formData.append('email', email);
        formData.append('senha', senha2);
        formData.append('IdTipoUsuario', idTipoUsuario); 
        formData.append('nome', nome);

        await api.post(`/Pacientes`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            alert('Cadastrado com sucesso')
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
                placeholder="Nome:"
                onChangeText={(txt) => setNome(txt)}
                value={nome}
            />
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

            <Button onPress={() => CadastrarPaciente() ? senha2 === senha1 && navigation.navigate('Login') : 'Cadastro Invalido'}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkEnd onPress={() => navigation.replace("Login")}>
                <TextLink>cancelar</TextLink>
            </LinkEnd>

        </Container>
    );
};
