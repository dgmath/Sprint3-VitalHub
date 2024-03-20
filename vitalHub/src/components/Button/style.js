import styled from "styled-components";

export const  Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: #496BBA;
    border: 1px #496BBA;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 12px 8px 12px 8px ;
`

export const  ButtonGoogle = styled(Button)`
    background-color: #FFFFFF;
    border: 1px #FFFFFF;
    flex-direction: row;
    gap: 27px;
    margin-top: 25px;
`

export const  ButtonRecover = styled(Button)`
    margin-top: 25px;
`
export const  ButtonEditPerfil = styled(Button)`
    margin-bottom: 30px;
`
export const  ModalButton = styled(Button)`
`
export const ButtonSairPerfil = styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    background-color: #ACABB7;
    border: 1px #ACABB7;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 12px 8px 12px 8px ;
    margin-bottom: 50px;
`
export const ButtonEditInsercao = styled(ButtonSairPerfil)`
    width: 90%;
    margin-bottom: none;
    margin-top: 30px;
`
export const ButtonPrescricao = styled.TouchableOpacity`
    width: 54%;
    height: 44px;
    background-color: #49B3BA;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
`
