import { useEffect, useState } from "react"
import { BoxInput, BoxInput2 } from "../../components/BoxInput"
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
                            <Maps
                                longitude={clinicaSelecionada.endereco.longitude}
                                latitude={clinicaSelecionada.endereco.latitude}
                                endereco={clinicaSelecionada.endereco.logradouro}
                            />
                    <MainContentScroll>
                        
                        <MainContent>


                            <TitleMap>{clinicaSelecionada.nomeFantasia}</TitleMap>
                            <TextMap>{clinicaSelecionada.endereco.cidade}</TextMap>

                            <BoxInput2
                                fieldWidth={90}
                                fieldHeight={55}
                                textLabel='Endereço'
                                fieldValue={clinicaSelecionada.endereco.logradouro}
                            />

                            <ViewInputRow>
                                <BoxInput2
                                    fieldWidth={40}
                                    fieldHeight={55}
                                    textLabel='Cep'
                                    fieldValue={clinicaSelecionada.endereco.cep}
                                />

                                <BoxInput2
                                    fieldWidth={40}
                                    fieldHeight={55}
                                    textLabel='Número'
                                    fieldValue={JSON.stringify(clinicaSelecionada.endereco.numero)}
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