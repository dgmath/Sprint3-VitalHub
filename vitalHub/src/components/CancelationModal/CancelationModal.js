import { Modal } from "react-native"
import { TitleModal } from "../Title/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ModalButton } from "../Button/style"
import { LinkEndModal } from "../Link/style"
import { ModalContent, ModalText, PatientModal } from "./style"


<<<<<<< HEAD
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// // import do audio
// import audiozap from "./assets/shooting-sound-fx-159024.wav"

// // 1º importar os recursos do expo notification
// import * as Notifications from "expo-notifications";

// // 2º pedir permissão ao usuário para notificar
// Notifications.requestPermissionsAsync();

// // 4º Definir como asnotificações devem ser tratadas qnd recebidas
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     //Mostar alerta quando a notificação for recebida
//     shouldShowAlert: true,

//     // Reproduz som ao receber notificação
//     shouldPlaySound: true,

//     // Número de notificações no icone do app
//     shouldSetBadge: false
//   })
// })
=======
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import do audio
// import audiozap from "./assets/shooting-sound-fx-159024.wav"

// 1º importar os recursos do expo notification
import * as Notifications from "expo-notifications";

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
>>>>>>> 1689217e5fcb9975a9e94e497a8cbc7148bf3e83

export const CancelationModal = ({
    visible,
    setShowModalCancel,
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

                    <TitleModal>Cancelar consulta</TitleModal>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ModalButton>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalCancel(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}