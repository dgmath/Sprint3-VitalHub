// import styled from "styled-components";

// import{LinearGradient} from "expo-linear-gradient"

// export const ContainerHeader = styled(LinearGradient).attrs({
//     colors: ["#60BFC5", "#496BBA"],
//     start:{x:-0.05, y:1.05},
//     end:{x:1, y:0}
// })`
//     width:100%;
//     height: 150px;
//     justify-content: center;
//     padding: 20px 20px 22px 20px;
//     border-radius: 0px 0px 15px 15px;
//     flex-direction: row;
//     justify-content:space-between
// `

// export const Container = styled.SafeAreaView`
//     flex: 1;
//     align-items: center;
//     background-color: #49B3BA;
// `

// export const ContainerNavigation = styled(Container)`
//     flex: 1;
//     align-items: center;
//     justify-content: flex-start;
//     gap: 10px;
//     padding-top: 50px;
// `
// export const ContainerPerfil = styled(Container)`
//     background-color: #ffff;
// `
// export const ContainerInputPerfil = styled.View`
//     flex: 1;
//     width: 90%;
//     align-items: center;
//     justify-content: center;
//     background-color: #ffff;
//     /* margin-left: 25px; */
//     gap: 20px;
//     margin-bottom: 20px;
// `
// export const ContainerInputPresc = styled(ContainerInputPerfil)`
//     flex: 1;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//     background-color: #ffff;
//     /* margin-left: 25px; */
//     gap: 20px;
//     margin-bottom: 20px;
// `

// export const ContainerInputRow = styled(ContainerPerfil)`
//     flex-direction: row;
//     gap: 10px;
//     margin-bottom: 30px;
// `

// export const MainContent = styled.View`
//     flex: 1;
//     width: 100%;
//     align-items: center;
//     background-color: #ffff;
// `

// export const MainContentScroll = styled.ScrollView`
//     width: 100%;
// `

// export const ContainerForm = styled.View`
//     width: 90%;
// `

// export const ContentAccount = styled.View`
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//     flex-direction: row;
//     margin-top: 20px;
//     gap: 5px;
// `

import styled from "styled-components";

import{LinearGradient} from "expo-linear-gradient"

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start:{x:-0.05, y:1.05},
    end:{x:1, y:0}
})`
    width:100%;
    height: 150px;
    justify-content: center;
    padding: 20px 20px 20px 20px;
    border-radius: 0px 0px 15px 15px;
    flex-direction: row;
    justify-content:space-between;
    align-items: 'center';

`

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #49B3BA;
    /* border-color: black; */
`

export const ContainerNavigation = styled(Container)`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-top: 50px;
`
export const ContainerPerfil = styled(Container)`
    background-color: #ffff;
`
export const ContainerInputPerfil = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    justify-content: center;
    background-color: #ffff;
    /* margin-left: 25px; */
    gap: 10px;
    margin-bottom: 0px;
    margin-top: 30px;
`
export const ContainerInputPresc = styled(ContainerInputPerfil)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #ffff;
    /* margin-left: 25px; */
    gap: 20px;
    margin-bottom: 20px;
`

export const ContainerInputRow = styled(ContainerPerfil)`
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
`
export const ContainerInputRowOne = styled(ContainerPerfil)`
    flex-direction: row;
    gap: 10px;
    margin-bottom: none;
`

export const MainContent = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: #ffff;
    /* margin-top: 60px; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
`

export const MainContentScroll = styled.ScrollView`
    width: 100%;
`

export const ContainerForm = styled.View`
    width: 90%;
`

export const ContentAccount = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 40px;
    gap: 5px;
`