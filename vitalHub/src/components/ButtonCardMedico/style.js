import styled, { css } from "styled-components";

export const ButtonContent = styled.TouchableOpacity`
    width: 90%;
    height: 102px;
    border-radius: 5px;
    flex-direction: row;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.08);
    shadow-color: "black";
    shadow-opacity: 0.25;
    shadow-offset: 20px 20px;
    shadow-radius: 15px;
    elevation: 10;
    background-color: white;
    margin-bottom: 20px;
    padding: 11px 0px 0px 10px;
    
    ${props => props.clickButton ? css`
        border: 2px solid #496BBA;
    `
    : css`
        border: 1px solid white;
    `}
`

export const ImageCardMedico = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
`

export const DataProfileCard = styled.View`
    width: 70%;
    height: 100%;
    /* border: 1px solid black; */
    padding: 18px 18px 18px 20px;
`

export const NameMedico = styled.Text`
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #33303E;
`

export const SpecialtyText = styled.Text`
    font-size:14px ;
    font-family: "Quicksand_500Medium";
    color: #8C8A97;	
`
