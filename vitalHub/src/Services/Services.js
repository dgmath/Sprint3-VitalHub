import axios from "axios";

// Declarar a porta da api
const portaApi = '4466'
//ksjcndsjknsdk

// ggg

//Declarar o ip da maquina
const ip = '172.16.39.86'

//Declarar a url padrão
const apiUrlLocal = `http://${ip}:${portaApi}/api`

//Trazer a configurao do axios
const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;