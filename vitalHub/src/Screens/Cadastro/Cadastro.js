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
import { ActivityIndicator } from "react-native";

export const Cadastro = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const [nome, setNome] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setConfirmarSenha] = useState('')
    // const [nome, setNome] = useState('')
    const [idTipoUsuario, setIdTipoUSuario] = useState('1058E83E-E674-48D8-B7D3-3ADA9076DABC')
    const [nomeInvalido, setNomeInvalido] = useState(false); // Estado para indicar se o campo está vazio
    const [emailInvalido, setEmailInvalido] = useState(false);
    const [senha1Invalida, setSenha1Invalida] = useState(false);
    const [senha2Invalida, setSenha2Invalida] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const ValidarCampos = () => {
        setNomeInvalido(!nome); // Define como inválido se estiver vazio
        setEmailInvalido(!email);
        setSenha1Invalida(!senha1);
        setSenha2Invalida(!senha2);

        if (!nome || !email || !senha1 || !senha2) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    const CadastrarPaciente = async () => {
        try {

            ValidarCampos();

            if (!isValid) {
                return; // Se não for válido, não prossegue
            }

            if (senha1 === senha2) {

                setLoading(true)

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


                navigation.replace("Login", {email: email});

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

            <ErrorMessage visible={nomeInvalido}>Este campo não pode ser vazio</ErrorMessage>
            <Input
                placeholder="Nome de usuario"
                onChangeText={(txt) => setNome(txt)}
                value={nome}
            />
            <ErrorMessage visible={emailInvalido}>Este campo não pode ser vazio</ErrorMessage>
            <Input
                placeholder="E-mail"
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />
            <ErrorMessage visible={senha1Invalida}>Este campo não pode ser vazio</ErrorMessage>
            <Input
                placeholder="Senha"
                onChangeText={(txt) => setSenha1(txt)}
                value={senha1}
            />
            <ErrorMessage visible={senha2Invalida}>Este campo não pode ser vazio</ErrorMessage>
            <Input
                placeholder="Confirmar senha"
                onChangeText={(txt) => setConfirmarSenha(txt)}
                value={senha2}
            />

            <Button onPress={() => CadastrarPaciente()} disabled={loading}>
                {loading ? <ActivityIndicator/> : <ButtonTitle>Cadastrar</ButtonTitle>}
            </Button>


            <LinkCancelar onPress={() => navigation.replace("Login")}>
                <TextLink>Cancelar</TextLink>
            </LinkCancelar>

        </Container>
    );
};

export const ErrorMessage = styled.Text`
    color: ${(props) => (props.visible ? "red" : "transparent")};
    font-size: 12px;
    margin-left: 20px;
    align-self: flex-start;
    margin-top: 10px;
    /* margin-bottom: 5px; */
`;

