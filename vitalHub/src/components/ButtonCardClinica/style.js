import styled, { css } from "styled-components";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    /* border: 1px solid black; */
    justify-content: center;
    padding: 10px 0px 20px 0px;
    margin-top: 10px;
    width: 80%;
`
export const ButtonContent = styled.TouchableOpacity`
    width: 85%;
    height: 84px;
    border-radius: 5px;
    flex-direction: row;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.08);
    shadow-color: "black";
    shadow-opacity: 0.25;
    shadow-offset: 20px 20px;
    shadow-radius: 15px;
    elevation: 10;
    background-color: white;
    
    ${props => props.clickButton ? css`
        border: 2px solid #496BBA;
    `
    : css`
        border: 1px solid white;
    `}

    
`
export const DataProfileCard = styled.View`
    width: 70%;
    height: 100%;
    /* border: 1px solid black; */
    padding: 18px 18px 18px 20px;
`
export const DataProfileCard2 = styled(DataProfileCard)`
    width: 30%;
    padding: 18px 18px 10px 18px;
    gap: 10px;
    align-items: flex-end;
`
export const TitleClinica = styled.Text`
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #33303E;

`
export const LocalText = styled.Text`

`
export const StarView = styled.View`
    width: 42px;
    height: 20px;
    /* border: 1px solid black; */
    flex-direction: row;
    gap: 2px;
`
export const CalendarView = styled.View`
    width: 100px;
    height: 26px;
    align-items: center;
    background-color: #E8FCFD;
    border: 1px solid #E8FCFD;
    border-radius: 5px;
    flex-direction: row;
    padding: 0px 13px 0px 14px;
    gap: 5px;
`
export const StarText = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";
    color: #F9A620;
`
export const CalendarText = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";
    color: #49B3BA;
`

