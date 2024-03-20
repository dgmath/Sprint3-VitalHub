import styled from "styled-components";
import { Container } from "../../components/Container/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkEnd } from "../../components/Link/style";

export const Cadastro = ({navigation}) => {
    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Criar conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input
                placeholder="Usuario ou E-mail"
            />
            <Input
                placeholder="Senha"
            />
            <Input
                placeholder="Senha"
            />

            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkEnd onPress={() => navigation.replace("Login")}>Cancelar</LinkEnd>

        </Container>
    );
};
