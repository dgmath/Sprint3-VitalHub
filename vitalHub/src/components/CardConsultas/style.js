import styled from "styled-components"
import { Title } from "../Title/style"

export const ContainerCardList = styled.TouchableOpacity`
    width: 95%;
    margin: 0px auto;
    marginTop: 10px;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    gap: 10px;
    background-color: #FFFF;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.08);
    shadow-color: "black";
    shadow-opacity: 0.25;
    shadow-offset: 20px 20px;
    shadow-radius: 15px;
    elevation: 10;
    /* border: 2px #496BBA; */
    align-items: center;
    justify-content: space-evenly;

`
export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    /* border: 1px #496BBA; */
`
export const ProfileImageNotifications = styled.Image`
    width: 77px;
    height: 80px;
    border-radius: 5px;
    /* border: 1px #496BBA; */
`

export const ContentCard = styled.View`
    width: 70%;
    gap: 11px;
    /* background-color: lightgray; */
`
export const DataProfileCard = styled.View`
    gap: 6px;
`

export const ProfileName = styled(Title)`
    font-size: 16px;
    color: black;
`
export const ProfileData = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 15px;
`
export const TextAge = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_400Regular";
`
export const TextBold = styled.Text`
    font-family: "Quicksand_600SemiBold";
    color: ${(props) => props.situacao == "Agendadas" ? "#49B3BA" : "#8C8A97"};
`
export const TextBold2 = styled.Text`
    font-family: "Quicksand_600SemiBold";
    color: ${(props) => props.situacao == "Agendadas" ? "#8C8A97" : "#4E4B59"};
`
export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ClockCard = styled.View`
    flex-direction: row;
    gap: 6px;
    padding: 4px 23px;
    border-radius: 5px;
    align-items:center;
    background-color: ${(props) => props.situacao == "Agendadas" ? "#E8FCFD" : "#F1F1F1"};
`
export const ButtonCard = styled.TouchableOpacity`
`

export const ButtonText = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_500Medium";
    color: ${(props) => props.situacao == "Agendadas" ? "#C81D25" : "#344F8F"};
`