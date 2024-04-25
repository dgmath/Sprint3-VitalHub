import { Modal } from "react-native"
import {  BoxButtonModal, Button, Label, ModalContent, PatientModal, TextButton } from "./style"
import { LinkEndModal } from "../Link/style"
import { TitleModal } from "../Title/style"
import { ContainerForm } from "../Container/style"
import { BoxInput } from "../BoxInput"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"


export const ScheduleModal = ({
    navigation,
    visible,
    setShowModalSchedule,
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

                    <TitleModal>Agendar consulta</TitleModal>

                    <ContainerForm>

                        <Label>Qual o nível da consulta:</Label>
                        <BoxButtonModal>
                            <Button>
                                <TextButton>Rotina</TextButton>
                            </Button>
                            <Button>
                                <TextButton>Exame</TextButton>
                            </Button>
                            <Button>
                                <TextButton>Urgencia</TextButton>
                            </Button>
                        </BoxButtonModal>

                        <BoxInput
                             BorderColor={"#49B3BA"}
                             fieldHeight={55}
                             textLabel='Informe a localização desejada:'
                             placeholder='Informe a localização'
                        />
                        
                    </ContainerForm>


                    <ModalButton onPress={() => navigation.navigate("SelecionarClinica")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalSchedule(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>


        </Modal>
    )
}