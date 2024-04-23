import { BoxArrow } from "../../components/BoxArrow/style";
import { Container } from "../../components/Container/style";
import { AntDesign } from '@expo/vector-icons';
import { TitleCheck } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { Logo } from "../../components/Logo/style";
import { Input, InputRecover } from "../../components/Input/style";

import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ButtonRecover } from "../../components/Button/style";
import { useState } from "react";
import api from "../../Services/Services";

export const ChangeSenha = ({navigation, route}) => {

    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')

    async function AlterarSenha() {
        if (senha === confirmar) {
            console.log(route.params.emailRecuperacao);
            await api.put(`/Usuario/AlterarSenha?email=${route.params.emailRecuperacao}`,{
                senhaNova : senha
            }).then( () => {
                navigation.replace('Login')
            }).catch(error => {
                console.log(error);
            })
        }
        else{
            alert("Senhas incompatíveis")
        }

    }
    
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
                value={senha}
                onChangeText={(txt) => setSenha(txt)}
                secureTextEntry={true}
            />
            <Input
                placeholder="Confirmar nova senha"
                value={confirmar}
                onChangeText={(txt) => setConfirmar(txt)}
                secureTextEntry={true}
            />

            <ButtonRecover onPress={() => AlterarSenha()}>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </ButtonRecover>

        </Container>
    );
};

