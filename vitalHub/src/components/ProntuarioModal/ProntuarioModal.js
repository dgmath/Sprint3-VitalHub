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

                    <ModalImage source={require("../../../assets/Perfil.jpg")} />

                    <TitleModal>Gelipe Fois</TitleModal>

                    <BoxModal>
                        <ModalText>68 anos</ModalText>
                        <ModalText>gelipe.fois@gmail.com</ModalText>
                    </BoxModal>

                    <ModalButton onPress={() => navigation.navigate("InsercaoProntuario")}>
                        <ButtonTitle>Inserir Prontuario</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => navigation.navigate("Home")}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}