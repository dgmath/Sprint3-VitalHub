import { ActivityIndicator, Modal } from "react-native"
import { ContainerForm } from "../Container/style"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkEndModal } from "../Link/style"
import { ModalContent, ModalText, ModalTextForm, PatientModal, TitleConfiguration, TitleContent, TitleForm, TitleModal } from "./style"
import moment from "moment"
import api from '../../Services/Services'
import { tokenClean, userDecodeToken } from "../../utils/Auth"
import { useEffect, useState } from "react"
import { CardConsultas } from "../CardConsultas/CardConsultas"
import { ListComponent, ListComponentNotifications } from "../List/list"
import { AntDesign } from '@expo/vector-icons';

export const ModalNotifications = ({
    visible,
    token,
    setShowModalNotifications,
    setDataConsulta,
    setStatusLista,
    setSelectedDateNew
}) => {

    const [profile, setProfile] = useState();
    // const [token, setToken] = useState();
    const [consultas, setConsultas] = useState([])

    async function profileLoad() {
        const token = await userDecodeToken()

        if (token) {
            setProfile(token)
        }
    }
    async function handleCLose() {
        setShowModalNotifications(false)
    }

    async function GetConsultas() {
        await api.get(`/Consultas/ConsultasPaciente`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {

            setConsultas(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        profileLoad()
        GetConsultas()
        console.log(token);
    }, [visible])
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <TitleContent>

                        <TitleConfiguration>
                            <TitleModal>Notificações</TitleModal>
                            <ModalText>Histórico de consultas</ModalText>
                        </TitleConfiguration>

                        <AntDesign onPress={() => setShowModalNotifications(false)} style={{ position: "absolute", right: -35, top: -15 }} name="close" size={30} color="#496BBA" />
                        
                    </TitleContent>

                    <ListComponentNotifications
                        data={consultas.sort((a, b) => new Date(a.dataConsulta) - new Date(b.dataConsulta))}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                            // console.log(item)

                            <CardConsultas
                                setDataConsulta={() => {
                                    setDataConsulta(moment(item.dataConsulta).format('YYYY-MM-DD'));
                                    setSelectedDateNew(item.dataConsulta)
                                    setStatusLista(item.situacao.situacao === 'Agendadas' ? 'Agendadas' : item.situacao.situacao === 'Realizadas' ? 'Realizadas' : 'Canceladas')
                                    handleCLose();
                                }}
                                consulta={item}
                                profile={profile}
                                setShowModalNotifications={setShowModalNotifications}
                            />

                        }

                        showsVerticalScrollIndicator={false}
                    />

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}