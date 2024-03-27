import { useState } from "react"
import { ButtonCardClinica } from "../../components/ButtonCardClinica/ButtonCardClinica"
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { ListComponent } from "../../components/List/list"
import { TitleModal } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { LinkEndModal } from "../../components/Link/style"



export const SelecionarClinica = ({
    navigation
}) => {
    const [selected, setSelected] = useState("")
    const [nameClinic, setNameClinic]= useState("")

    const [clinica, setClinica] = useState([
        {
            id: "1",
            name: "Clínica Natureh",
            star: "4,5",
            local: "Sao Paulo, SP",
            operatingDays: "Seg-Sex",
        },
        {
            id: "2",
            name: "Diamond Pró-Mulher",
            star: "4,8",
            local: "Sao Paulo, SP",
            operatingDays: "Seg-Sex",
        },
        {
            id: "3",
            name: "Clinica Villa Lobos",
            star: "4,2",
            local: "Sao Paulo, SP",
            operatingDays: "Seg-Sab",
        },
        {
            id: "4",
            name: "SP Oncologia Clínica",
            star: "5,0",
            local: "Sao Paulo, SP",
            operatingDays: "Seg-Sab",
        },
    ]);

    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>
                    <TitleModal>Selecionar Clinica</TitleModal>

                    <ListComponent
                        data={clinica}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                            <ButtonCardClinica
                                name={item.name}
                                stars={item.star}
                                local={item.local}
                                operatingDays={item.operatingDays}
                                selected={item.name === selected}
                                onPress={() => {
                                    setSelected(item.name);
                                }}
                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <Button onPress={() => navigation.navigate("SelecionarMedico")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <LinkEndModal onPress={() => navigation.replace("Main")}>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}