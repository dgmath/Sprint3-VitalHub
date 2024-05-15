import { Container } from "../../components/Container/style"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/style";
import { BoxArrow } from "../../components/BoxArrow/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { InputRecover } from "../../components/Input/style";
import { ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkCancelar, LinkEnd, TextLink } from "../../components/Link/style";
import { useState } from "react";
import api from "../../Services/Services"
import { ModalAttention, ModalEmail } from "../../components/CancelationModal/CancelationModal";



export const RecoverSenha = ({navigation}) => {

    const [email, setEmail] = useState('')
    
    const [showModalAttention, setShowModalAttention] = useState(false);
    const [showModalEmail, setShowModalEmail] = useState(false);




    async function EnviarEmail() {

   
            await api.post(`/RecuperarSenha?email=${email}`)
            .then(() => {
                navigation.replace('CheckEmail', {emailRecuperacao : email})
            }).catch(error => {
                console.log(error);
                return setShowModalEmail(true)
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
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />

            <ButtonRecover onPress={() => EnviarEmail()}>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonRecover>

            <LinkCancelar onPress={() => navigation.replace("Login")}>
                <TextLink>Cancelar</TextLink>
            </LinkCancelar>

            <ModalAttention
                visible={showModalAttention}
                setShowModalAttention={setShowModalAttention}
            />
            <ModalEmail
                visible={showModalEmail}
                setShowModalEmail={setShowModalEmail}
            />

        </Container>
    )
}