import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor:"#FFFFFF"
})`
    width: 90%;
    height: 53px;
    padding: 16px;
    border: 1px;
    border-radius: 5px;
    border-color: white;
    margin-top: 15px;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FFFFFF;
`
export const  InputRecover = styled(Input)`
    margin-top: 25px;
`
export const InputPerfilCinza = styled(Input).attrs({
    placeholderTextColor: '#4E4B59'
})`
    width: 100%;
    color: #4E4B59;
    background-color: #F5F3F3;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
    height: ${props => `${props.fieldHeight}px`}; 
    border: 2px solid #D9D9D9; 
`
export const  InputPerfil = styled(Input).attrs({
    placeholderTextColor: '#34898F'
})`
    width: 100%;
    color: #34898F;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium';
    height: ${props => `${props.fieldHeight}px`}; 
    border: 2px solid ${props => `${props.BorderColor}`}; 
`

export const InputVerify = styled.TextInput.attrs({
    placeholderTextColor:"#FFFF"
})`
    width: 20%;
    height: 68px;
    align-items: center;
    border: 1px;
    border-radius: 5px;
    border-color: white;
    font-size: 45px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FFFFFF;
    text-align: center;

`