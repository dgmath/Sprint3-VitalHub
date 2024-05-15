import { Modal } from "react-native"
import { BoxButtonModal, Button, Label, ModalContent, PatientModal, TextButton } from "./style"
import { LinkEndModal } from "../Link/style"
import { TitleModal } from "../Title/style"
import { ContainerForm } from "../Container/style"
import { BoxInput } from "../BoxInput"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { useState } from "react"
import { ModalAttention } from "../CancelationModal/CancelationModal"


export const ScheduleModal = ({
    navigation,
    visible,
    setShowModalSchedule,
    ...rest
}) => {

    const [agendamento, setAgendamento] = useState(null)
    const [border, setBorder] = useState(null)
    // const [prioridadeInvalida, setPrioridadeInvalida] = useState(false);
    // const [localizacaoInvalida, setLocalizacaoInvalida] = useState(false);
    const [showModalAttention, setShowModalAttention] = useState(false);

    // const [isValid, setIsValid] = useState(false);

    const validarCampos = () => {        
        if (agendamento.prioridadeId == null || agendamento.localizacao == null) {
            return false;
        } else {
           return true;
        }
    };
    
    async function HandleContinue() {
       const isValid = validarCampos();

        if (isValid == false) {
            return setShowModalAttention(true); 
        }
        else{
            await setShowModalSchedule(false);
            navigation.replace("SelecionarClinica", { agendamento: agendamento })
        }

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

                                    prioridadeId: 'ABBAD6A6-9644-44BF-8C50-24B3F55ED211',
                                    prioridadeLabel: 'Rotina'
                                }) || setBorder(agendamento ? agendamento.prioridadeLabel : false)}>
                                <TextButton  clickButton={agendamento ? agendamento.prioridadeLabel == 'Rotina' : false}>Rotina</TextButton>
                            </Button>

                            {/* AE5B077D-F470-49F3-BADA-1FFF116769BF */}
                            <Button
                                clickButton={agendamento ? agendamento.prioridadeLabel == "Exame" : false}
                                onPress={() => setAgendamento({
                                    ...agendamento, //Garante que as informações já existentes se mantenham dentro do state

                                    prioridadeId: 'AE5B077D-F470-49F3-BADA-1FFF116769BF',
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

                                    prioridadeId: 'A9B96E90-A409-4755-A2A9-34470FECFFCF',
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

            <ModalAttention
                visible={showModalAttention}
                setShowModalAttention={setShowModalAttention}
            />

        </Modal>
    )
}