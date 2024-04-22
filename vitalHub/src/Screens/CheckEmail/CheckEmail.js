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
import { useState, useRef, useEffect } from "react";
import api from "../../Services/Services";

export const CheckEmail = ({ navigation, route }) => {

    const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)]

    const [codigo, setCodigo] = useState("")

    function focusNextInput(index) {
        //Verificar se o index é menor do que a quantidade de campos
        if (index < inputs.length - 1) {
            inputs[ index + 1 ].current.focus()
        }
    }

    function focusPrevInput(index) {
        //Verificar se o index é menor do que a quantidade de campos
        if (index > 0) {
            inputs[ index - 1 ].current.focus()
        }
    }

    async function ValidarCodigo() {
        await api.post(`/RecuperarSenha/ValidarCodigo?email=${route.params.emailRecuperacao}&codigo=${codigo}`)
        .then( () => {
            navigation.replace("ChangeSenha")
        })
        .catch(error => {
            console.log(error);
        })
    }

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
            </SubTitle>
            <SubTitle>{route.params.emailRecuperacao}</SubTitle>

            <BoxInput>
                {/* <InputVerify
                    keyboardType="numeric"
                    placeholder="0"
                    maxLength={1}

                /> */}
                {
                    [0, 1, 2, 3].map((index) => (

                        <InputVerify
                            key={index}
                            //verifica onde será alimentado
                            ref={inputs[index]}

                            keyboardType="numeric"
                            placeholder="0"
                            maxLength={1}
                            caretHidden={true}

                            onChangeText={(txt) => {
                                //Verificar se o campo é vazio
                                if (txt == '') {
                                    focusPrevInput( index )
                                }
                                else {
                                    //Verificar se o campo foi preenchido
                                    const codigoInformado = [... codigo]
                                    codigoInformado[index] = txt
                                    setCodigo(codigoInformado.join("")) 

                                    focusNextInput( index )
                                }
                            }}
                        />

                    ))
                }
            </BoxInput>

            <ButtonRecover onPress={() => ValidarCodigo()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </ButtonRecover>

            <LinkEnd>Reenviar codigo</LinkEnd>

        </Container>

    )
}