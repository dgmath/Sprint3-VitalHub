import { BoxArrow, BoxInput } from "../../components/BoxArrow/style";
import { Container } from "../../components/Container/style"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/style";
import { TitleCheck } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Input, InputVerify } from "../../components/Input/style";
import { LinkEnd } from "../../components/Link/style";
import { ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";

export const CheckEmail = ({navigation}) => {
    return (
        <Container>
            <BoxArrow>
                <AntDesign name="close" size={24} color="#FFFF" 
                    onPress={() => navigation.navigate("Login")}
                />
            </BoxArrow>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <TitleCheck>Verifique seu e-mail</TitleCheck>

            <SubTitle>Digite o código de 4 dígitos enviado para o e-mail
                username@email.com</SubTitle>

            <BoxInput>
                <InputVerify placeholder="0" />
                <InputVerify placeholder="0" />
                <InputVerify placeholder="0" />
                <InputVerify placeholder="0" />
            </BoxInput>

            <ButtonRecover onPress={() => navigation.navigate("ChangeSenha")}>
                <ButtonTitle>Entrar</ButtonTitle>
            </ButtonRecover>

            <LinkEnd>Reenviar codigo</LinkEnd>

        </Container>

    )
}