import { Button } from "react-native"
import { ContainerNavigation } from "../../components/Container/style"
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";

export const Navegacao = ({navigation}) => {
    return(
        <ContainerNavigation>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("RecoverSenha")}
            />
            <Button
                title="Verificar Email"
                onPress={() => navigation.navigate("CheckEmail")}
            />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("ChangeSenha")}
            />
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            {/* <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            /> */}
            <Button
                title="Insercao Prontuario"
                onPress={() => navigation.navigate("InsercaoProntuario")}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Selecionar Clinica"
                onPress={() => navigation.navigate("SelecionaClinica")}
            />
            <Button
                title="Selecionar Medico"
                onPress={() => navigation.navigate("SelecionarMedico")}
            />
            <Button
                title="Selecionar Data" 
                onPress={() => navigation.navigate("SelecionarData")}
            />
            <Button
                title="Localizacao"
                onPress={() => navigation.navigate("PlaceConsult")}
            />
            <Button
                title="Prescricao"
                onPress={() => navigation.navigate("Prescricao")}
            />
        </ContainerNavigation>
    )
}