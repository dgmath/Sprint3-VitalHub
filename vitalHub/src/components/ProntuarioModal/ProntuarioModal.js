import { ActivityIndicator, Modal } from "react-native"
import { TitleModal } from "../Title/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ModalButton } from "../Button/style"
import { LinkEndModal } from "../Link/style"
import { BoxModal, ModalContent, ModalImage, ModalText, PatientModal } from "./style"
import { calcularIdade } from '../../utils/Auth';

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
        navigation.replace(rota, { consultaId: consulta.id, mediconome: consulta.medicoClinica.medico })
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
                    {
                        consulta != null ? (
                            <>
                                <ModalImage source={profile.role == 'Paciente' ? { uri: consulta.medicoClinica.medico.idNavigation.foto } : { uri: consulta.paciente.idNavigation.foto }} />

                                <TitleModal>{profile.role == 'Medico' ? consulta.paciente.idNavigation.nome : consulta.medicoClinica.medico.idNavigation.nome}</TitleModal>

                                <BoxModal>
                                    {profile.role == 'Medico' ?
                                        (<ModalText>{calcularIdade(consulta.paciente.dataNascimento.split('T', [1]))} anos</ModalText>) :

                                        (<ModalText>{consulta.medicoClinica.medico.crm}</ModalText>)
                                    }


                                </BoxModal>
                                    <ModalText>{profile.role == "Medico" ? consulta.paciente.idNavigation.email : consulta.medicoClinica.medico.idNavigation.email}</ModalText>

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
                            </>

                        ) : (<ActivityIndicator />)
                    }




                </ModalContent>
            </PatientModal>

        </Modal>
    )
}