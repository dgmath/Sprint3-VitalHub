import { Modal } from "react-native"
import { ModalContent, PatientModal } from "../ModalAgendarConsulta/style"
import { TitleModal } from "../Title/style"
import { ListComponent } from "../List/list"

export const ScheduleModal = ({
    navigation,
    visible,
    setShowModalSchedule,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <PatientModal>
                <ModalContent>

                    <TitleModal>Notifi</TitleModal>

                    <ListComponent
                        //  <NotificationCard
                        
                        //  />
                    />
                       
                   

                </ModalContent>
            </PatientModal>


        </Modal>
    )
}