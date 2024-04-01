import { useEffect, useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarHome/calendarHome"
import { ContainerPerfil } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"
import { FilterAppointment } from "./style"
import { ListComponent } from "../../components/List/list"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import { CancelationModal } from "../../components/CancelationModal/CancelationModal"
import { ProntuarioModal } from "../../components/ProntuarioModal/ProntuarioModal"
import { Stethoscope } from "../../components/Stethoscope/Stethoscope"
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal"
import { DoctorModal } from "../../components/DoctorModal/DoctorModal"
import { tokenClean, userDecodeToken } from "../../utils/Auth"
import api from "../../Services/Services"
import AsyncStorage from "@react-native-async-storage/async-storage"

// const Consultas = [
//     { id: "1", name: "Dr.Claudio", situacao: "pendente" },
//     { id: "2", name: "Dr.Gelipe", situacao: "realizado" },
//     { id: "3", name: "Dr.Felix", situacao: "cancelado" },
//     { id: "4", name: "Dr.Mumu", situacao: "cancelado" },
//     { id: "5", name: "Dr.Arteta", situacao: "cancelado" },
//     { id: "6", name: "Dr.Arteta", situacao: "cancelado" },
//     { id: "7", name: "Dr.Arteta", situacao: "cancelado" },
//     { id: "8", name: "Dr.Arteta", situacao: "cancelado" },
//     { id: "9", name: "Dr.Conha", situacao: "realizado" }
// ]

// const Paciente = [
//     { id: "1", name: "Guilherme", situacao: "pendente" },
//     { id: "2", name: "Gelipe", situacao: "realizado" },
//     { id: "3", name: "Felix", situacao: "cancelado" },
//     { id: "4", name: "Mumu", situacao: "cancelado" },
//     { id: "5", name: "Arteta", situacao: "cancelado" },
//     { id: "6", name: "Arteta", situacao: "cancelado" },
//     { id: "7", name: "Arteta", situacao: "cancelado" },
//     { id: "8", name: "Arteta", situacao: "cancelado" },
//     { id: "9", name: "Conha", situacao: "realizado" }
// ]

export const Home = ({
    navigation
}) => {

    const [consultaLista, setConsultaLista] = useState([])

    async function ListarConsulta() {
        try {
            const token = await tokenClean();

            if (token) {

                // // Removendo as aspas do início e do final da string
                // const tokenCodificado = tokenString.split(":")[1].trim();
                // console.log('token cortado');
                // console.log(tokenCodificado);

                // const token = tokenCodificado.split('"')[1].trim()
                // console.log(token);

                const response = await api.get('/Consultas', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setConsultaLista(response.data);
                console.log(response.data);

            } else {
                console.log("Token não encontrado.");
            }
        } catch (error) {
            console.log(error);
        }
    }



    // async function ListarConsulta() {
    //     try {
    //         const tokenString = await AsyncStorage.getItem("token");
    //         console.log(tokenString);
    //         console.log(123);
    //         if (tokenString) {
    //             // Dividindo a string pelo caractere ":" e pegando a segunda parte (índice 1)
    //             const token = tokenString.split(":")[1].trim();
    //             console.log(token);
    //             const response = await api.get('/Consultas', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             setConsultaLista(response.data);
    //             console.log(response.data);
    //         } else {
    //             console.log("Token não encontrado.");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // async function ListarConsulta() {
    //     try {
    //         const response = await api.post('/Login', {
    //             email: email,
    //             senha: senha
    //         });
    //         const token = response.data.token; // Acessando a propriedade token do objeto de resposta
    //         if (token) {
    //             const consultaResponse = await api.get('/Consultas', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             setConsultaLista(consultaResponse.data);
    //             console.log(consultaResponse.data);
    //         } else {
    //             console.log("Token não encontrado na resposta.");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async function ListarConsulta() {
    //     try {
    //         const token = await AsyncStorage.getItem("token");
    //         console.log(token);
    //         if (token) {
    //             const response = await api.get('/Consultas', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             setConsultaLista(response.data);
    //             console.log(response.data);
    //         } else {
    //             console.log("Token não encontrado.");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    // async function ListarConsulta() {
    //     await api.get('/Consultas')
    //     .then(response => {
    //         //setando a lista com o response.data ou seja todo o retorno
    //         setConsultaLista(response.data);
    //         console.log(consultaLista);
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     })
    // }

    const [statusLista, setStatusLista] = useState("Agendadas")

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showModalSchedule, setShowModalSchedule] = useState(false);
    const [showModalDoctor, setShowModalDoctor] = useState(false);
    const [info, setInfo] = useState({})
    // const [PacienteOuN, setPacienteOuN] = useState(true)

    const [role, setRole] = useState('')

    async function ProfileLoad() {
        const token = await userDecodeToken();

        if (token) {
            console.log(token);
            setRole(token.role)
        }
    }

    useEffect(() => {
        ProfileLoad();
        ListarConsulta();
    }, [])


    return (
        <ContainerPerfil>

            <Header />

            <CalendarHome />

            <FilterAppointment>

                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "Agendadas"}
                    onPress={() => setStatusLista("Agendadas")}
                />

                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizadas"}
                    onPress={() => setStatusLista("Realizadas")}
                />

                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Canceladas"}
                    onPress={() => setStatusLista("Canceladas")}
                />

            </FilterAppointment>

            <ListComponent
                data={consultaLista}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    // console.log(item)
                    statusLista == item.situacao.situacao ? (
                        <AppointmentCard consulta={item} />
                    ) : null
                }

                showsVerticalScrollIndicator={false}
            />

            {/* {PacienteOuN ?
                <ListComponent
                    data={Consultas}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusLista == item.situacao ? (
                            <AppointmentCard
                                situacao={item.situacao}
                                informacao={item}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressDoctor={() => { setShowModalDoctor(true); setInfo(item) }}
                                onPressAppointment={() => PacienteOuN ? navigation.navigate("Prescricao") : setShowModalAppointment(true)}

                            />
                        ) : null
                    }

                    showsVerticalScrollIndicator={false}
                />
                :
                <ListComponent
                    data={Paciente}
                    keyExtractor={(item) => item.id}

                    renderItem={({ item }) =>
                        statusLista == item.situacao && (
                            <AppointmentCard
                                situacao={item.situacao}
                                informacao={item}
                                onPressCancel={() => setShowModalCancel(true)}
                                onPressAppointment={() => setShowModalAppointment(true)}

                            />
                        )
                    }

                    showsVerticalScrollIndicator={false}
                />
            } */}

            <CancelationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ProntuarioModal
                navigation={navigation}
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            {role === 'Paciente' ?
                <Stethoscope
                    onPress={() => setShowModalSchedule(true)}
                />
                : null
            }


            <ScheduleModal
                navigation={navigation}
                visible={showModalSchedule}
                setShowModalSchedule={setShowModalSchedule}
            />

            <DoctorModal
                navigation={navigation}
                visible={showModalDoctor}
                setShowModalDoctor={setShowModalDoctor}
            // informacao={info}
            />



        </ContainerPerfil>
    )
}