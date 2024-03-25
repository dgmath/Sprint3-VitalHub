import { useEffect } from "react";
import { userDecodeToken } from "../../utils/Auth";
import { ContainerHeader } from "../Container/style";
import { BoxIcon, BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(123);
            console.log(token);
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
                    <NameUser>Dr.Mumu</NameUser>
                </DataUser>

            </BoxUser>
            
            <BoxIcon>
                <Ionicons name="notifications-sharp" size={24} color="white" />
            </BoxIcon>

        </ContainerHeader>
    )
}