import { useState } from "react"
import { ButtonRecover } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import CalendarSelectData from "../../components/CalendarSelectData/CalendarSelectData"
import { ContainerForm, ContainerPerfil } from "../../components/Container/style"
import InputSelect from "../../components/InputSelect"
import { LinkEndModal } from "../../components/Link/style"
import { TitleSelect } from "../../components/Title/style"
import { LabelData } from "./style"
import { ModalAgendarConsulta } from "../../components/ModalAgendarConsulta/ModalAgendarConsulta"


export const SelecionarData = ({
    navigation
}) => {

    const [showModalAgendar, setShowModalAgendar] = useState(false)

    return (
        <ContainerPerfil>

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarSelectData />

            <ContainerForm>
                <LabelData>Selecione um horário disponível</LabelData>
                <InputSelect />
            </ContainerForm>

            <ButtonRecover
                onPress={() => setShowModalAgendar(true)}
            >
                <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonRecover>

            <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>

            <ModalAgendarConsulta
                visible={showModalAgendar}
                setShowModalAgendar={setShowModalAgendar}
                navigation={navigation}
            />

        </ContainerPerfil>
    )
}