import styled from "styled-components";

export const PatientModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.6);
`

export const ModalContent = styled.View`
    padding: 30px 30px 10px;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`
export const Label = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";
    margin-bottom: 10px;
    margin-top: 14px;

`
export const BoxButtonModal = styled.View`
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
 
`
export const Button = styled.TouchableOpacity`
    width: 30%;
    height: 40px;
    border: 2px solid #60BFC5;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const TextButton = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #34898F;
`
