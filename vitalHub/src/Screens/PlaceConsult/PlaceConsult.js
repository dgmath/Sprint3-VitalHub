import { useEffect, useState } from "react"
import { BoxInput } from "../../components/BoxInput"
import { ContainerMap, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { LinkEndModal } from "../../components/Link/style"
import { Maps } from "../../components/Maps/Maps"
import { ImageMaps, TextMap, TitleMap, ViewInputRow } from "./style"
import api from "../../Services/Services"
import { ActivityIndicator } from "react-native"

export const PlaceConsult = ({ navigation, route }) => {

    const [clinicaSelecionada, setClinicaSelecionada] = useState(null)

    async function BuscarClinicaId() {
        await api.get(`/Clinica/BuscarPorId?id=${route.params.clinicaId}`)
            .then(response => {
                setClinicaSelecionada(response.data)
                console.log(response.data);
                console.log(clinicaSelecionada.endereco.cidade);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (clinicaSelecionada == null) {
            BuscarClinicaId()
        }
    }, [clinicaSelecionada])

    return (
        <ContainerPerfil>
            {clinicaSelecionada != null ? (
                <>
                    <MainContentScroll>
                        <MainContent>

                            <Maps />

                            <TitleMap>{clinicaSelecionada.nomeFantasia}</TitleMap>
                            <TextMap>{clinicaSelecionada.endereco.cidade}</TextMap>

                            <BoxInput
                                fieldWidth={90}
                                fieldHeight={55}
                                textLabel='Endereço'
                                placeholder={clinicaSelecionada.endereco.logradouro}
                            />

                            <ViewInputRow>
                                <BoxInput
                                    fieldWidth={40}
                                    fieldHeight={55}
                                    textLabel='Cep'
                                    fieldValue={clinicaSelecionada.endereco.cep}
                                />

                                <BoxInput
                                    fieldWidth={40}
                                    fieldHeight={55}
                                    textLabel='Número'
                                    placeholder={clinicaSelecionada.endereco.numero}
                                />

                            </ViewInputRow>

                            <LinkEndModal onPress={() => navigation.replace("Main")}>voltar</LinkEndModal>

                        </MainContent>
                    </MainContentScroll>
                </>

            ): 
            (<ActivityIndicator/>)
            }

        </ContainerPerfil>
    )
}