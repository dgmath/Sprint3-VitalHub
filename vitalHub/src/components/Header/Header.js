import React, { useEffect, useState } from "react";
import { tokenClean, userDecodeToken } from "../../utils/Auth";
import { ContainerHeader } from "../Container/style";
import { BoxIcon, BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from "react-native";
import api from "../../Services/Services";
import { useFocusEffect } from "@react-navigation/native";
import { ModalNotifications } from "../ModalNotifications/ModalNotifications";

export const Header = ({setShowModalNotifications}) => {

    const [userName, setUserName] = useState('')
    const [token, setToken] = useState('')

    const [user, setUser] = useState();



    async function ProfileLoad() {
        const token = await userDecodeToken();


        if (token) {
            console.log(token);
            // setUserName(token.name)
            setToken(token.role)

            if (token.role == "Paciente") {
                await api.get(`/Pacientes/BuscarPorId?id=${token.user}`)
                .then(response => {
                    console.log(response.data);
                    setUser(response.data.idNavigation.foto)
                    setUserName(response.data.idNavigation.nome)

                }).catch(error => {
                    console.log(error);
                })
            }
            else{
                await api.get(`/Medicos/BuscarPorId?id=${token.user}`)
                .then(response => {
                    console.log(response.data);
                    setUser(response.data.idNavigation.foto)
                    setUserName(response.data.idNavigation.nome)


                }).catch(error => {
                    console.log(error);
                })
            }

        }

    }

    useFocusEffect( React.useCallback(() => {
        ProfileLoad()
    }, [user, userName]))

    return (
        <ContainerHeader>

            <BoxUser>
                {user != null ? (

                    <ImageUser source={{ uri: user }} />

                ) : (

                    <ActivityIndicator />

                )

                }

                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    {token === "Medico" ? (<NameUser>Dr. {userName}</NameUser>) : (<NameUser>{userName}</NameUser>)}
                </DataUser>

            </BoxUser>

            <BoxIcon onPress={() => setShowModalNotifications(true)}>
                <Ionicons name="notifications-sharp" size={24} color="white" />
            </BoxIcon>



        </ContainerHeader>
    )
}