import styled from "styled-components";

export const ContainerBoxPrescricao = styled.View`
    width: 90%;
    flex-direction: row;
    gap: 60px;
    align-items: center;
    /* border: 2px solid black; */
`

export const Linha = styled.View`
    width: 90%;
    margin: 20px 0px 20px;

    border: 1px solid black;
`
export const ContainerImageProntuario = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;

    gap: 10px;
`
export const TextTitleImage = styled.Text`
    align-self: flex-start;
`
export const BoxImage = styled.View`
    width: 100%;
    height: 120px;
    background-color: #F5F3F3;

    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`
export const TextImage = styled.Text`

`
export const ImageProntuario = styled.Image`
    width: 100%;
    height: 400px;
    border-radius: 5px;
`