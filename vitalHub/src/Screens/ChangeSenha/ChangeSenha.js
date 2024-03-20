import { BoxArrow } from "../../components/BoxArrow/style";
import { Container } from "../../components/Container/style";
import { AntDesign } from '@expo/vector-icons';
import { TitleCheck } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Logo } from "../../components/Logo/style";
import { Input, InputRecover } from "../../components/Input/style";

import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ButtonRecover } from "../../components/Button/style";

export const ChangeSenha = ({navigation}) => {
    return (
        <Container>
            <BoxArrow>
                <AntDesign name="close" size={24} color="#FFFF" 
                    onPress={() => navigation.replace("Login")}
                />
            </BoxArrow>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <TitleCheck>Redefinir senha</TitleCheck>

            <SubTitle>Insira e confirme a sua nova senha</SubTitle>

            <InputRecover
                placeholder="Nova senha"
            />
            <Input
                placeholder="Confirmar nova senha"
            />

            <ButtonRecover onPress={() => navigation.navigate("Login")}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </ButtonRecover>

        </Container>
    );
};

