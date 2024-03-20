import { FontAwesome5 } from '@expo/vector-icons';
import { StethoscopeButton } from './style';

export const Stethoscope = ({
    clickButton = false,
    onPress
}) => {
    return(
        <StethoscopeButton clickButton={clickButton} onPress={onPress}>
            <FontAwesome5 name="stethoscope" size={32} color="white" />
        </StethoscopeButton>
    )
}