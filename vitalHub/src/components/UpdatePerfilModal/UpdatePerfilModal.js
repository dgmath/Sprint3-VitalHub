// import { Modal } from "react-native"
// import { ModalContent, PatientModal } from "../ScheduleModal/style"
// import { tokenClean, userDecodeToken } from "../../utils/Auth";
// import { useState } from "react";
// import { ContainerInputPerfil, ContainerInputRow, ContainerInputRowOne } from "../Container/style";
// import { BoxInput } from "../BoxInput";
// import { ModalButton } from "../Button/style";
// import { ButtonTitle } from "../ButtonTitle/style";
// import { LinkEndModal } from "../Link/style";

// export const UpdateProfileModal = ({
//     navigation,
//     visible,
//     setShowModalUpdate,
//     ...rest
// }) => {

//     const [role, setRole] = useState('')
//     const [user, setUser] = useState('')


//     // states para editar dados do medico
//     const [nomeM, setNomeM] = useState('')
//     const [crm, setCrmM] = useState('')
//     const [logradouroM, setLogradouroM] = useState('')
//     const [numeroM, setNumeroM] = useState('')
//     const [cepM, setCepM] = useState('')
//     const [cidadeM, setCidadeM] = useState('')


//     // states para editar dados do paciente
//     const [nomeP, setNomeP] = useState('')
//     const [rgP, setRgP] = useState('')
//     const [dataNascimentoP, setDataNascimentoP] = useState('')
//     const [cpfP, setCpfP] = useState('')
//     const [cepP, setCepP] = useState('')
//     const [logradouroP, setLogradouroP] = useState('')
//     const [numeroP, setNumeroP] = useState('')
//     const [cidadeP, setCidadeP] = useState('')


//     async function UpdateProfile() {

//         const token = await tokenClean();

//         const tokenRole = await userDecodeToken();
//         setRole(tokenRole.role)

//         setUser(tokenRole.user)

//         try {
//             if (tokenRole.role == 'Paciente') {
//                 await api.put(`/Pacientes?idUsuario=${user}`, {
//                     nome: nomeP,
//                     rg: rgP,
//                     dataNascimento: dataNascimentoP,
//                     cpf: cpfP,
//                     cep: cepP,
//                     logradouro: logradouroP,
//                     numero: numeroP,
//                     cidade: cidadeP,
//                 });
//             } else {
//                 await api.put('/Medicos', {
//                     nome: nomeM,
//                     crm: crm,
//                     cep: cepM,
//                     logradouro: logradouroP,
//                     numero: numeroP,
//                     cidade: cidadeP,
//                 }, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
//             }

//             console.log(token);


//             console.log("Dados do usuário atualizados com sucesso!");

//         } catch (error) {

//             console.error("Erro ao atualizar os dados do usuário:", error);
//         }
//     }

//     return (
//         <Modal
//             {...rest}
//             visible={visible}
//             transparent={true}
//             animationType="fade"
//         >
//             <PatientModal>
//                 <ModalContent>

//                     {role == "Medico" ? (
//                         <ContainerInputPerfil>
//                             <BoxInput
//                                 textLabel='Nome:'
//                                 placeholder='Seu Nome'
//                                 fieldValue={nomeM}
//                                 onChangeText={(txt) => setNomeM(txt)}
//                                 editable={true}
//                             />
//                             {/* <BoxInput
//                                             textLabel='Especialidade:'
//                                             placeholder='Especialidade Medica'
//                                             fieldValue={userData.especialidade.especialidade1}
//                                         /> */}
//                             <BoxInput
//                                 textLabel='CRM:'
//                                 placeholder='CRM Medico'
//                                 fieldValue={crm}
//                                 onChangeText={(txt) => setCrmM(txt)}
//                                 editable={true}
//                             />

//                             <ContainerInputRowOne>
//                                 <BoxInput
//                                     fieldWidth={60}
//                                     textLabel='Endereco:'
//                                     placeholder='Endereco'
//                                     fieldValue={logradouroM}
//                                     onChangeText={(txt) => setLogradouroM(txt)}
//                                     editable={true}
//                                 />
//                                 <BoxInput
//                                     fieldWidth={40}
//                                     textLabel='Numero:'
//                                     placeholder='Numero'
//                                     fieldValue={numeroM}
//                                     onChangeText={(txt) => setNumeroM(txt)}
//                                     editable={true}
//                                 />
//                             </ContainerInputRowOne>

//                             <ContainerInputRow>
//                                 <BoxInput
//                                     fieldWidth={50}
//                                     textLabel='CEP:'
//                                     placeholder='CEP'
//                                     fieldValue={cepM}
//                                     onChangeText={(txt) => setCepM(txt)}
//                                     editable={true}
//                                 />
//                                 <BoxInput
//                                     fieldWidth={50}
//                                     textLabel='Cidade:'
//                                     placeholder='Cidade'
//                                     fieldValue={cidadeM}
//                                     onChangeText={(txt) => setCidadeM(txt)}
//                                     editable={true}
//                                 />
//                             </ContainerInputRow>
//                         </ContainerInputPerfil>
//                     ) : (
//                         <ContainerInputPerfil>
//                             <BoxInput
//                                 textLabel='Nome:'
//                                 placeholder='Seu Nome'
//                                 fieldValue={nomeP}
//                                 onChangeText={(txt) => setNomeP(txt)}
//                                 editable={true}
//                             />
//                             <BoxInput
//                                 textLabel='RG:'
//                                 placeholder='Seu RG'
//                                 fieldValue={rgP}
//                                 onChangeText={(txt) => setRgP(txt)}
//                                 editable={true}
//                             />
//                             <BoxInput
//                                 textLabel='Data de nascimento:'
//                                 placeholder='YYYY-MM-DD'
//                                 fieldValue={dataNascimentoP}
//                                 onChangeText={(txt) => setDataNascimentoP(txt)}
//                                 editable={true}
//                             />
//                             <BoxInput
//                                 textLabel='CPF:'
//                                 placeholder='CPF'
//                                 fieldValue={cpfP}
//                                 onChangeText={(txt) => setCpfP(txt)}
//                                 editable={true}
//                             />
//                             <ContainerInputRowOne>
//                                 <BoxInput
//                                     fieldWidth={60}
//                                     textLabel='Endereco:'
//                                     placeholder='Endereco'
//                                     fieldValue={logradouroP}
//                                     onChangeText={(txt) => setLogradouroP(txt)}
//                                     editable={true}
//                                 />
//                                 <BoxInput
//                                     fieldWidth={40}
//                                     textLabel='Numero:'
//                                     placeholder='Numero'
//                                     fieldValue={JSON.stringify(numeroP)}
//                                     onChangeText={(txt) => setNumeroP(txt)}
//                                     editable={true}
//                                 />
//                             </ContainerInputRowOne>

//                             <ContainerInputRow>
//                                 <BoxInput
//                                     fieldWidth={50}
//                                     textLabel='CEP:'
//                                     placeholder='CEP'
//                                     fieldValue={cepP}
//                                     onChangeText={(txt) => setCepP(txt)}
//                                     editable={true}
//                                 />
//                                 <BoxInput
//                                     fieldWidth={50}
//                                     textLabel='Cidade:'
//                                     placeholder='Cidade'
//                                     fieldValue={cidadeP}
//                                     onChangeText={(txt) => setCidadeP(txt)}
//                                     editable={true}
//                                 />
//                             </ContainerInputRow>
//                         </ContainerInputPerfil>
//                     )
//                     }

//                     <ModalButton onPress={() => UpdateProfile()  && setShowModalUpdate(false)}>
//                         <ButtonTitle>Salvar</ButtonTitle>
//                     </ModalButton>

//                     <LinkEndModal onPress={() => setShowModalUpdate(false)}>Cancelar</LinkEndModal>

//                 </ModalContent>
//             </PatientModal>


//         </Modal>
//     )
// }