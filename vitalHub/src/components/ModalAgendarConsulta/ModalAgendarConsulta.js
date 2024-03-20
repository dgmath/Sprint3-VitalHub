import { Modal } from "react-native"
import { ContainerForm } from "../Container/style"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkEndModal } from "../Link/style"
import { ModalContent, ModalText, ModalTextForm, PatientModal, TitleForm, TitleModal } from "./style"

export const ModalAgendarConsulta = ({
    visible,
    setShowModalAgendar,
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>

                    <TitleModal>Agendar consulta</TitleModal>
                    <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>
                    
                    <ContainerForm>
                        <TitleForm>Data da consulta</TitleForm>
                        <ModalTextForm>1 de Novembro de 2023</ModalTextForm>

                        <TitleForm>Médico(a) da consulta</TitleForm>
                        <ModalTextForm>Dra Alessandra</ModalTextForm>
                        <ModalTextForm>Demartologa, Esteticista</ModalTextForm>

                        <TitleForm>Local da consulta</TitleForm>
                        <ModalTextForm>São Paulo, SP</ModalTextForm>
                        
                        <TitleForm>Tipo da consulta</TitleForm>
                        <ModalTextForm>Rotina</ModalTextForm>
                    </ContainerForm>

                    <ModalButton>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalAgendar(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}