import { Modal } from "react-native"
import { TitleModal } from "../Title/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ModalButton } from "../Button/style"
import { LinkEndModal } from "../Link/style"
import { BoxModal, ModalContent, ModalImage, ModalText, PatientModal } from "./style"

export const ProntuarioModal = ({
    navigation,
    visible,
    setShowModalAppointment,
    profile,
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

                    <ModalImage source={profile.role == 'Paciente' ? require("../../../src/assets/Doctor.png") : require("../../../src/assets/ImagePerfil.jpg")} />

                    <TitleModal>Gois</TitleModal>

                    <BoxModal>
                        <ModalText>68 anos</ModalText>
                        <ModalText>gelipe.fois@gmail.com</ModalText>
                    </BoxModal>

                    <ModalButton onPress={profile.role == 'Medico' ? () => navigation.navigate("InsercaoProntuario") : () => navigation.navigate('Prescricao')}>
                        <ButtonTitle>Inserir Prontuario</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}