import styled from "styled-components";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkCancelar, LinkEnd, TextLink } from "../../components/Link/style";
import api from "../../Services/Services";
import { useState } from "react";

export const Cadastro = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setConfirmarSenha] = useState('')
    // const [nome, setNome] = useState('')
    const [idTipoUsuario, setIdTipoUSuario] = useState('48B6EA3E-999F-45D4-B606-C7702C479D4D')

    // async function CadastrarPaciente() {
    //     await api.post(`/Pacientes`, {
    //         email: email,
    //         senha: senha2,
    //         idTipoUsuario: idTipoUsuario
    //     }).then( response => {
    //         alert('Cadastrado com sucesso')
    //         console.log(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    const CadastrarPaciente = async () => {


        try {

            if (senha1 === senha2) {

                const form = new FormData()

                form.append("email", `${email}`);
                form.append("nome", `${nome}`);
                // form.append("dataNascimento", `${moment(dataNascimento).format("YYYY-MM-DD")}`);
                form.append("senha", `${senha1}`);
                form.append("idTipoUsuario", `${idTipoUsuario}`);

                const response = await api.post('/Pacientes', form, {

                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }

                );

                if (response.data.success) {
                    throw new Error('Yeah');
                }


                navigation.replace("Login");

            } else {

                alert("As senhas não coincidem");
                // setLoading(false)

            }
        } catch (error) {
            if (error.response) {
                // setLoading(false)
                console.error('Erro ao cadastrar:', error.response.data);
            } else if (error.request) {
                console.error('Erro de requisição:', error.request);
                // setLoading(false)
            } else {
                console.error('Erro ao configurar:', error.message);
                // setLoading(false)
            }
        }
    };


    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Criar conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input
                placeholder="Nome de usuario"
                onChangeText={(txt) => setNome(txt)}
                value={nome}
            />
            <Input
                placeholder="E-mail"
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

            <Button onPress={() => CadastrarPaciente()}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>


            <LinkCancelar onPress={() => navigation.replace("Login")}>
                <TextLink>Cancelar</TextLink>
            </LinkCancelar>

        </Container>
    );
};
