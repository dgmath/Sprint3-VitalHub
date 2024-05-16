import { useEffect, useState } from "react"
import { ButtonRecover } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import CalendarSelectData from "../../components/CalendarSelectData/CalendarSelectData"
import { ContainerForm, ContainerPerfil } from "../../components/Container/style"
import InputSelect from "../../components/InputSelect"
import { LinkEndModal } from "../../components/Link/style"
import { TitleSelect } from "../../components/Title/style"
import { LabelData } from "./style"
import { ModalAgendarConsulta } from "../../components/ModalAgendarConsulta/ModalAgendarConsulta"
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export const SelecionarData = ({
    navigation, route
}) => {

    const [agendamento, setAgendamento] = useState(null);

    const [horaSelecionada, setHoraSelecionada] = useState('');
    
    const [dataSelecionada, setDataSelecionada] = useState('');

    const [showModalAgendar, setShowModalAgendar] = useState(false);

    function handleContinue() {
        setAgendamento({
            ...route.params.agendamento,
            dataConsulta: `${dataSelecionada} ${horaSelecionada}`
        });

        setShowModalAgendar(true)
    }

    useEffect(() => {
        console.log(dataSelecionada);
     },[dataSelecionada])

    useEffect(() => {
        console.log(route);
     },[route])
    return (
        <ContainerPerfil>

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarSelectData 
                setDataSelecionada={setDataSelecionada}
                dataSelecionada={dataSelecionada}
            />

            <ContainerForm>
                <LabelData>Selecione um horário disponível</LabelData>
                <InputSelect 
                    setHoraSelecionada={setHoraSelecionada}
                />
            </ContainerForm>

            <ButtonRecover
                onPress={() => handleContinue()}
            >
                <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonRecover>

            <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>

            <ModalAgendarConsulta
                visible={showModalAgendar}
                agendamento={agendamento}
                setShowModalAgendar={setShowModalAgendar}
                navigation={navigation}
            />

        </ContainerPerfil>
    )
}