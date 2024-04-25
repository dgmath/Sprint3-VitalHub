import { Modal } from "react-native"
import { BoxModal, ModalContent, ModalImage, ModalText, PatientModal } from "../ProntuarioModal/style"
import { TitleModal } from "../Title/style"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkEndModal } from "../Link/style"

export const DoctorModal = ({
    navigation,
    visible,
    profile,
    consulta,
    setShowModalLocal,
    ...rest
}) => {

    async function handleClose() {
        await setShowModalLocal(false)

        navigation.replace("PlaceConsult")
    }


    function HandlePress(rota) {
        navigation.replace(rota, { clinicaId: consulta.medicoClinica.clinicaId })
    }

    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
            animationOutTiming={0}
        >

            <PatientModal>
                <ModalContent>

                    <ModalImage source={profile.role == 'Paciente' ? require("../../../src/assets/Doctor.png") : require("../../../src/assets/ImagePerfil.jpg")} />


                    <TitleModal>Gois</TitleModal>

                    <BoxModal>
                        <ModalText>Cliníco geral</ModalText>
                        <ModalText>CRM-15286</ModalText>
                    </BoxModal>

                    {profile.role == 'Medico' ?
                        <>
                        </>

                        :
                        <ModalButton onPress={() => HandlePress("PlaceConsult")}>
                            <ButtonTitle>Ver local da consulta</ButtonTitle>
                        </ModalButton>
                    }
                    <LinkEndModal onPress={() => setShowModalLocal(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}