import { ActivityIndicator, Modal } from "react-native"
import { ContainerForm } from "../Container/style"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkEndModal } from "../Link/style"
import { ModalContent, ModalText, ModalTextForm, PatientModal, TitleForm, TitleModal } from "./style"
import moment from "moment"
import api from '../../Services/Services'
import { userDecodeToken } from "../../utils/Auth"
import { useEffect, useState } from "react"

export const ModalAgendarConsulta = ({
    visible,
    setShowModalAgendar,
    navigation,
    agendamento
}) => {

    const [profile, setProfile] = useState();

   async function profileLoad() {
        const token = await userDecodeToken()

        if (token) {
            setProfile(token)
        }
    }

    async function handleConfirm() {
        await api.post(`/Consultas/Cadastrar`, {
            ...agendamento,
            pacienteId: profile.user,
            situacaoId: '84EAA8A3-9191-496A-A9C3-853DB1E589BC'
        }).then(async () => {

            setShowModalAgendar(false)

            navigation.replace("Main");

        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        profileLoad();
    }, [visible])
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            {agendamento ? (<PatientModal>
                <ModalContent>

                    <TitleModal>Agendar consulta</TitleModal>
                    <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

                    <ContainerForm>
                        <TitleForm>Data da consulta</TitleForm>
                        <ModalTextForm>{moment(agendamento.dataConsulta).format('DD/MM/YYYY HH:mm')}</ModalTextForm>

                        <TitleForm>Médico(a) da consulta</TitleForm>
                        <ModalTextForm>{agendamento.medicoLabel}</ModalTextForm>
                        <ModalTextForm>{agendamento.medicoEspecialidade}</ModalTextForm>

                        <TitleForm>Clínica da consulta</TitleForm>
                        <ModalTextForm>{agendamento.clinicaLabel}</ModalTextForm>

                        <TitleForm>Local da consulta</TitleForm>
                        <ModalTextForm>{agendamento.localizacao}</ModalTextForm>

                        <TitleForm>Tipo da consulta</TitleForm>
                        <ModalTextForm>{agendamento.prioridadeLabel}</ModalTextForm>
                    </ContainerForm>

                    <ModalButton onPress={() => handleConfirm()}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalAgendar(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>) : (<ActivityIndicator />)}

        </Modal>
    )
}