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
        await api.put(`/Consultas/Status`,{
            id: consulta.id , situacaoId: '11215117-4485-4C02-82E7-C71AF491BA05'
        })
        .then(response => {
            console.log(123);
            console.log(response.data);
            alert('Consulta cancelada')
            console.log(456);
            setShowModalCancel(false)
        })
        .catch(error => {
            console.log(error);
        })
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

                    <ModalButton onPress={() => CancelarConsulta()}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalCancel(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}