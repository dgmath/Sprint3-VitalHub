import { Container } from "../../components/Container/style"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/style";
import { BoxArrow } from "../../components/BoxArrow/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { InputRecover } from "../../components/Input/style";
import { ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkEnd } from "../../components/Link/style";
import { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990
import api from "../../Services/Services"



export const RecoverSenha = ({navigation}) => {

    const [email, setEmail] = useState('')


    async function EnviarEmail() {
<<<<<<< HEAD
        await api.post (`/RecuperarSenha?email=${email}`)
        .then(() =>{
            navigation.replace("CheckEmail", { emailRecuperacao : email })
=======
        await api.post(`/RecuperarSenha?email=${email}`)
        .then(() => {
            navigation.replace('CheckEmail', {emailRecuperacao : email})
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <Container>
            <BoxArrow>
                <AntDesign name="arrowleft" size={24} color="#FFFF" 
                    onPress={() => navigation.navigate("Login")}
                />
            </BoxArrow>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Recuperar senha</Title>

            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>

            <InputRecover
                placeholder="Usuario ou E-mail"
<<<<<<< HEAD

                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />

            {/* <ButtonRecover onPress={() => EnviarEmail()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonRecover> */}
            
            <ButtonRecover onPress={() => navigation.navigate("CheckEmail")}>
=======
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />

            <ButtonRecover onPress={() => EnviarEmail()}>
>>>>>>> 755579f00525f43e92ff15b3a5bdcf38d56b9990
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonRecover>

            <LinkEnd onPress={() => navigation.navigate("Login")}>Cancelar</LinkEnd>


        </Container>
    )
}