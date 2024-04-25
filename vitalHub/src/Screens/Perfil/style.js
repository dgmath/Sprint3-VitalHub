import styled from "styled-components";

export const ButtonCamera = styled.TouchableOpacity.attrs({
    activeOpacity : 0.8
})`
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #fbfbfb;
    background-color: #496bba;

    position: absolute;
    right: 20px;
    bottom: -20px
`

export const ViewImageProfile = styled.View`
    flex: 1;
    width: 100%;

    margin-top: 35px;
`