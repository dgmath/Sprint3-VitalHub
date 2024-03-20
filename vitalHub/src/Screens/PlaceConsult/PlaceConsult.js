import { BoxInput } from "../../components/BoxInput"
import { ContainerMap, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { LinkEndModal } from "../../components/Link/style"
import { Maps } from "../../components/Maps/Maps"
import { ImageMaps, TextMap, TitleMap, ViewInputRow } from "./style"

export const PlaceConsult = ({navigation}) => {
    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <Maps/>

                    <TitleMap>Clínica Natureh</TitleMap>
                    <TextMap>São Paulo, SP</TextMap>

                    <BoxInput
                        fieldWidth={90}
                        fieldHeight={55}
                        textLabel='Endereço'
                        placeholder='Rua Vicenso Silva, 987'
                    />

                    <ViewInputRow>
                        <BoxInput                            
                            fieldWidth={40}
                            fieldHeight={55}
                            textLabel='Número'
                            placeholder='578'
                        />

                        <BoxInput
                            fieldWidth={40}
                            fieldHeight={55}
                            textLabel='Bairro'
                            placeholder='Moema-SP'
                        />

                    </ViewInputRow>

                    <LinkEndModal onPress={() => navigation.replace("Main")}>voltar</LinkEndModal>

                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>
    )
}