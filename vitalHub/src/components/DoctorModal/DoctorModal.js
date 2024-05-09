import { ActivityIndicator, Modal } from "react-native"
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

                    {
                        consulta != null && profile.role == 'Paciente' ? (
                            <>
                                <ModalImage style={{resizeMode: 'stretch'}} source={{ uri: consulta.medicoClinica.medico.idNavigation.foto }} />


                                <TitleModal>{consulta.medicoClinica.medico.idNavigation.nome}</TitleModal>

                                <BoxModal>
                                    <ModalText>{consulta.medicoClinica.medico.especialidade.especialidade1}</ModalText>
                                    <ModalText>{consulta.medicoClinica.medico.crm}</ModalText>
                                </BoxModal>

                                <ModalButton onPress={() => HandlePress("PlaceConsult")}>
                                    <ButtonTitle>Ver local da consulta</ButtonTitle>
                                </ModalButton>

                                <LinkEndModal onPress={() => setShowModalLocal(false)}>Cancelar</LinkEndModal>
                            </>
                        ) : (<ActivityIndicator/>)

                    }


                </ModalContent>
            </PatientModal>

        </Modal>
    )
}