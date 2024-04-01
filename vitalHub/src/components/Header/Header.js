import { useEffect, useState } from "react";
import { userDecodeToken } from "../../utils/Auth";
import { ContainerHeader } from "../Container/style";
import { BoxIcon, BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {

    const [userName, setUserName] = useState('')

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setUserName(token.name)
        }
    }

    useEffect(() => {
        ProfileLoad()
    }, [])

    return (
        <ContainerHeader>

            <BoxUser>

                <ImageUser source={require("../../../assets/Perfil.jpg")} />

                <DataUser>
                    <TextDefault>Bem vindo!</TextDefault>
                    <NameUser>{userName}</NameUser>
                </DataUser>

            </BoxUser>
            
            <BoxIcon>
                <Ionicons name="notifications-sharp" size={24} color="white" />
            </BoxIcon>

        </ContainerHeader>
    )
}