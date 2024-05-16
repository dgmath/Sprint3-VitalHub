import { Modal } from "react-native"
import { TitleModal } from "../Title/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ModalButton } from "../Button/style"
import { LinkEndModal } from "../Link/style"
import { ModalContent, ModalText, PatientModal } from "./style"


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import do audio
// import audiozap from "./assets/shooting-sound-fx-159024.wav"

// 1º importar os recursos do expo notification
import * as Notifications from "expo-notifications";
import api from "../../Services/Services"

// 2º pedir permissão ao usuário para notificar
Notifications.requestPermissionsAsync();

// 4º Definir como asnotificações devem ser tratadas qnd recebidas
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        //Mostar alerta quando a notificação for recebida
        shouldShowAlert: true,

        // Reproduz som ao receber notificação
        shouldPlaySound: true,

        // Número de notificações no icone do app
        shouldSetBadge: false
    })
})

export const CancelationModal = ({
    visible,
    consulta,
    setShowModalCancel,
    route,
    ...rest
}) => {


    async function CancelarConsulta() {
        await api.put(`/Consultas/Status?idConsulta=${consulta.id}&status=Canceladas`)
            .then(response => {
                console.log(123);
                console.log(response.data);
                // alert('Consulta cancelada')
                console.log(456);
                setShowModalCancel(false)
            })
            .catch(error => {
                console.log(error);
            })
    }
    //funçao para lidar com a chamada de notificaçao
    const handleCallNotifications = async () => {

        //obtem o status da permissao
        const { status } = await Notifications.getPermissionsAsync();

        //verifica se o usuario permitiu as notificaçoes
        if (status != 'granted') {
            alert('Você não ativou as notificações')
            return;
        }

        //Agenda uma notificação
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Consulta Cancelada",
                body: "Sua consulta foi cancelada",
                sound: "Notification.mp3"
            },
            trigger: null

        })
    }

    async function Chamada() {
        CancelarConsulta()
        handleCallNotifications()
    }


    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >

            <PatientModal>
                <ModalContent>

                    <TitleModal>Cancelar consulta</TitleModal>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ModalButton onPress={() => Chamada()}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalCancel(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}

export const ModalEmail = ({
    visible,
    consulta,
    setShowModalEmail,
    route,
    ...rest
}) => {

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >

            <PatientModal>
                <ModalContent>

                    <TitleModal>Atenção!</TitleModal>

                    <ModalText>Por favor preencha com um email válido!</ModalText>

                    <ModalButton onPress={() => setShowModalEmail(false)}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}

export const ModalAttention = ({
    visible,
    consulta,
    setShowModalAttention,
    setPreenchido,
    route,
    ...rest
}) => {

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >

            <PatientModal>
                <ModalContent>

                    <TitleModal>Atenção!</TitleModal>

                    <ModalText>Por favor preencha todos os campos necessários!</ModalText>

                    <ModalButton onPress={() => {
                        setShowModalAttention(false)
                        setPreenchido(false)
                        }}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}