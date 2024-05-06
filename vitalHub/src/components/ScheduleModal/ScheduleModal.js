import { Modal } from "react-native"
import { BoxButtonModal, Button, Label, ModalContent, PatientModal, TextButton } from "./style"
import { LinkEndModal } from "../Link/style"
import { TitleModal } from "../Title/style"
import { ContainerForm } from "../Container/style"
import { BoxInput } from "../BoxInput"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { useState } from "react"


export const ScheduleModal = ({
    navigation,
    visible,
    setShowModalSchedule,
    ...rest
}) => {

    const [agendamento, setAgendamento] = useState(null)
    const [border, setBorder] = useState(null)

    async function HandleContinue() {
        await setShowModalSchedule(false);
        navigation.replace("SelecionarClinica", { agendamento: agendamento })
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

                    <TitleModal>Agendar consulta</TitleModal>

                    <ContainerForm>

                        <Label>Qual o nível da consulta:</Label>
                        <BoxButtonModal>

                            {/* ABBAD6A6-9644-44BF-8C50-24B3F55ED211 */}
                            <Button
                                clickButton={agendamento ? agendamento.prioridadeLabel == 'Rotina' : false}
                                onPress={() => setAgendamento({
                                    ...agendamento, //Garante que as informações já existentes se mantenham dentro do state

                                    prioridadeId: '690A655D-2053-4B89-BC2D-19D704E6EB24',
                                    prioridadeLabel: 'Rotina'
                                }) || setBorder(agendamento ? agendamento.prioridadeLabel : false)}>
                                <TextButton  clickButton={agendamento ? agendamento.prioridadeLabel == 'Rotina' : false}>Rotina</TextButton>
                            </Button>

                            {/* AE5B077D-F470-49F3-BADA-1FFF116769BF */}
                            <Button
                                clickButton={agendamento ? agendamento.prioridadeLabel == "Exame" : false}
                                onPress={() => setAgendamento({
                                    ...agendamento, //Garante que as informações já existentes se mantenham dentro do state

                                    prioridadeId: '03FAADC7-C300-434B-A692-5892820635B0',
                                    prioridadeLabel: 'Exame'
                                }) || setBorder(agendamento ? agendamento.prioridadeLabel : false)
                                }
                                optionSelected={agendamento ? agendamento.prioridadeId : false}
                            >
                                <TextButton clickButton={agendamento ? agendamento.prioridadeLabel == "Exame" : false}>Exame</TextButton>
                            </Button>
                            {/* A9B96E90-A409-4755-A2A9-34470FECFFCF */}
                            <Button
                                clickButton={agendamento ? agendamento.prioridadeLabel == 'Urgência' : false}
                                onPress={() => setAgendamento({
                                    ...agendamento, //Garante que as informações já existentes se mantenham dentro do state

                                    prioridadeId: '929CDD0F-BAE4-4E7D-87C6-7723A1AB9048',
                                    prioridadeLabel: 'Urgência'
                                }) || setBorder(agendamento ? agendamento.prioridadeLabel : false)}>
                                <TextButton clickButton={agendamento ? agendamento.prioridadeLabel == 'Urgência' : false}>Urgência</TextButton>
                            </Button>
                        </BoxButtonModal>

                        <BoxInput
                            BorderColor={"#49B3BA"}
                            fieldHeight={55}
                            textLabel='Informe a localização desejada:'
                            placeholder='Informe a localização'
                            fieldValue={agendamento ? agendamento.localizacao : null}
                            onChangeText={(txt) => setAgendamento({
                                ...agendamento,
                                localizacao: txt
                            })}
                            editable={true}
                        />

                    </ContainerForm>


                    <ModalButton onPress={() => HandleContinue()}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalSchedule(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>


        </Modal>
    )
}