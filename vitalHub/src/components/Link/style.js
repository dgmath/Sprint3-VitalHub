import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_500Medium";
    text-decoration: underline;
    align-self: flex-start;
    margin-top: 10px;
    color: #FFFFFF;
    margin-left: 20px;
    margin-bottom: 15px;
`

export const  LinkEnd = styled(LinkMedium)`
    margin-top: 25px;
    align-self: center;
    margin-left: none;
`
export const  LinkMediumPres = styled(LinkMedium)`
    color: #C81D25;
`
export const  LinkEndModal = styled(LinkMedium)`
    color: #344F8F;
    align-self: center;
    margin-top: 30px;
`
