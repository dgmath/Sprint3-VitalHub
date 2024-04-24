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
    situacao,
    consulta,
    ...rest
}) => {

    function HandlePress(rota) {
        // console.log(consulta.id)
        navigation.replace(rota, {consultaId : consulta.id, mediconome: consulta.medicoClinica.medico})
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

                    <ModalImage source={profile.role == 'Paciente' ? require("../../../src/assets/Doctor.png") : require("../../../src/assets/ImagePerfil.jpg")} />

                    <TitleModal>Gois</TitleModal>

                    <BoxModal>
                        <ModalText>68 anos</ModalText>
                        <ModalText>gelipe.fois@gmail.com</ModalText>
                    </BoxModal>

                    {situacao === 'Realizadas' && profile.role == 'Medico' ?
                        <ModalButton onPress={() => HandlePress("InsercaoProntuario")}>
                            <ButtonTitle>Inserir Prontuario</ButtonTitle>
                        </ModalButton>
                        :
                        <ModalButton onPress={() => HandlePress("Prescricao")}>
                            <ButtonTitle>Ver Prontuário</ButtonTitle>
                        </ModalButton>
                    }
                    <LinkEndModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}