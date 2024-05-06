import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { encode, decode } from "base-64";

if( !global.atob ){
    global.atob = encode
}

if( !global.btoa ){
    global.atob = decode
}


export function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
  
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        return idade - 1;
    }
  
    return idade;
  }

export const tokenClean = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token

    if (token === null) {
        return null;
    }
    return token;
}

export const userDecodeToken = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token
    if (token === null) {
        return null;
    }

    //Decodifica o token recebido
    const decoded = await jwtDecode(token);

    return {
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
        user: decoded.jti
    }
}
